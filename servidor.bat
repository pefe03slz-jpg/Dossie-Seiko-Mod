@echo off
chcp 65001 >nul
title Controle do Servidor Local - Seiko Mod 40mm
cd /d "%~dp0"
echo ========================================================
echo   SEIKO MOD 40MM (NH35A) - CONTROLE DO SERVIDOR LOCAL
echo ========================================================

set "PYCMD="
py -3 --version >nul 2>&1 && set "PYCMD=py -3"
if not defined PYCMD (
    python --version >nul 2>&1 && set "PYCMD=python"
)

if not defined PYCMD (
    echo.
    echo   [ERRO] Python 3 nao encontrado neste computador.
    echo   Instale em https://www.python.org/downloads/ e marque
    echo   "Add python.exe to PATH". Abrindo instrucoes no navegador...
    start "" "%~dp0erro_python.html"
    pause
    exit /b 1
)

%PYCMD% "%~dp0server.py" --toggle
timeout /t 2 >nul
