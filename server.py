from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import os
import signal
import socket
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.request
import webbrowser

HOST = "127.0.0.1"
PORT = 8080
MAX_PORT_TRIES = 20  # tenta 8080..8099 se a porta preferida estiver ocupada
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PID_FILE = os.path.join(BASE_DIR, ".server.pid")


def read_state():
    """Retorna (pid, porta) gravados no arquivo PID, ou (None, None)."""
    try:
        with open(PID_FILE, "r", encoding="utf-8") as f:
            parts = f.read().split()
        pid = int(parts[0])
        port = int(parts[1]) if len(parts) > 1 else PORT
        return pid, port
    except (OSError, ValueError, IndexError):
        return None, None


def current_port():
    return read_state()[1] or PORT


class ProjectHandler(SimpleHTTPRequestHandler):
    """Serve project static files and provide status/shutdown endpoints."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def log_message(self, format, *args):
        # Keep headless background execution silent.
        pass

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        super().end_headers()

    def _send_json(self, status_code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/api/status":
            self._send_json(200, {"status": "online", "port": self.server.server_address[1]})
            return
        super().do_GET()

    def do_POST(self):
        if self.path == "/api/shutdown":
            self._send_json(200, {"status": "shutting_down"})
            remove_pid_file()
            threading.Thread(target=self.server.shutdown, daemon=True).start()
            return
        self._send_json(404, {"error": "Not found"})


def remove_pid_file():
    if os.path.exists(PID_FILE):
        try:
            os.remove(PID_FILE)
        except OSError:
            pass


def find_free_port(start=PORT):
    for port in range(start, start + MAX_PORT_TRIES):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            try:
                s.bind((HOST, port))
                return port
            except OSError:
                continue
    return None


def is_server_running(port=None):
    url = f"http://{HOST}:{port or current_port()}/api/status"
    try:
        with urllib.request.urlopen(url, timeout=0.8) as resp:
            return resp.status == 200 and json.load(resp).get("status") == "online"
    except (urllib.error.URLError, TimeoutError, OSError, ValueError):
        return False


def stop_server():
    port = current_port()
    url = f"http://{HOST}:{port}/api/shutdown"
    req = urllib.request.Request(url, data=b"", method="POST")
    try:
        with urllib.request.urlopen(req, timeout=1.5):
            pass
    except (urllib.error.URLError, TimeoutError, OSError):
        pass

    deadline = time.monotonic() + 2.0
    while time.monotonic() < deadline:
        if not is_server_running(port):
            remove_pid_file()
            return
        time.sleep(0.1)

    pid, _ = read_state()
    if pid:
        try:
            os.kill(pid, signal.SIGTERM)
        except OSError:
            pass
    remove_pid_file()


def start_background(open_browser=True):
    """Inicia o servidor em segundo plano. Retorna a porta usada ou None."""
    port = find_free_port()
    if port is None:
        return None

    kwargs = {
        "cwd": BASE_DIR,
        "stdin": subprocess.DEVNULL,
        "stdout": subprocess.DEVNULL,
        "stderr": subprocess.DEVNULL,
    }
    if os.name == "nt":
        kwargs["creationflags"] = subprocess.DETACHED_PROCESS | subprocess.CREATE_NO_WINDOW

    subprocess.Popen(
        [sys.executable, os.path.abspath(__file__), "--serve", str(port)],
        **kwargs,
    )

    for _ in range(30):
        if is_server_running(port):
            break
        time.sleep(0.15)
    else:
        return None

    if open_browser:
        webbrowser.open(f"http://localhost:{port}")
    return port


def serve_forever(port):
    # No Windows, SO_REUSEADDR permite "roubar" uma porta ocupada; mantem desligado.
    ThreadingHTTPServer.allow_reuse_address = os.name != "nt"
    server = ThreadingHTTPServer((HOST, port), ProjectHandler)
    with open(PID_FILE, "w", encoding="utf-8") as f:
        f.write(f"{os.getpid()}\n{port}")
    try:
        server.serve_forever()
    finally:
        server.server_close()
        remove_pid_file()


def report_start(port):
    if port is None:
        print(
            f"\n  [ERRO] Nao foi possivel iniciar o servidor "
            f"(portas {PORT}-{PORT + MAX_PORT_TRIES - 1} ocupadas ou falha ao subir).\n"
        )
        sys.exit(1)
    note = f" (porta {PORT} ocupada, usando outra)" if port != PORT else ""
    print(f"\n  [LIGADO] Servidor Seiko Mod iniciado em http://localhost:{port}{note}\n  Abrindo o navegador...\n")


if __name__ == "__main__":
    mode = sys.argv[1] if len(sys.argv) > 1 else "--toggle"

    if mode == "--serve":
        serve_forever(int(sys.argv[2]) if len(sys.argv) > 2 else PORT)
    elif mode == "--status":
        if is_server_running():
            print(f"ONLINE (porta {current_port()})")
            sys.exit(0)
        print("OFFLINE")
        sys.exit(1)
    elif mode == "--stop":
        port = current_port()
        stop_server()
        print(f"[DESLIGADO] Servidor local (porta {port}) encerrado com sucesso.")
    elif mode == "--start":
        if is_server_running():
            print(f"[LIGADO] Servidor ja ativo em http://localhost:{current_port()}")
        else:
            report_start(start_background(open_browser=True))
    elif mode == "--toggle":
        if is_server_running():
            port = current_port()
            stop_server()
            print(f"\n  [DESLIGADO] O servidor Seiko Mod (porta {port}) foi encerrado com sucesso!\n")
        else:
            report_start(start_background(open_browser=True))
    else:
        print("Uso: python server.py [--toggle | --start | --stop | --status | --serve PORTA]")
        sys.exit(2)
