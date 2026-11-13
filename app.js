const STORAGE_KEY = 'seiko_mod_nh35_project_v1';

const DEFAULT_DATA = {
  parts: [
    {
      id: 'part-1',
      number: 1,
      name: 'Mostrador 28,5 mm + Kit de Ponteiros (NH35/36)',
      variantCode: 'Color: 16 gold',
      variantDesc: 'Dourado texturizado, janela de data às 3h, lúmen verde',
      basePrice: 76.51,
      taxPrice: 15.69,
      totalPrice: 92.20,
      url: 'https://pt.aliexpress.com/item/1005011821795123.html',
      bought: true,
      critical: false,
      note: 'Já acompanha um jogo de ponteiros (horas, minutos e segundos). Exige remoção e lixamento dos pinos traseiros (dial feet) excedentes, mantendo apenas o par referente à posição das 3 horas.',
      linkedChecklistId: 'acq-1'
    },
    {
      id: 'part-2',
      number: 2,
      name: 'Rotor Customizado / Guarda de Movimento (NH35 / NH36 / 4R35)',
      variantCode: 'Cor: 01 - Black',
      variantDesc: 'Preto com Dragão Dourado — inscr. Time Corp / 4R35B / Twenty-Three Jewels',
      basePrice: 16.22,
      taxPrice: 3.37,
      totalPrice: 19.59,
      url: 'https://pt.aliexpress.com/item/1005006305556868.html',
      bought: true,
      critical: false,
      note: 'Substitui ou reveste o rotor original na parte traseira do movimento. Exige que a caixa escolhida possua fundo transparente (Exhibition Caseback) para que a peça fique visível.',
      linkedChecklistId: 'acq-2'
    },
    {
      id: 'part-3',
      number: 3,
      name: 'Movimento Mecânico Automático SII NH35A',
      variantCode: 'Cor: BW at 3H',
      variantDesc: 'Disco de data preto com números brancos, alinhado às 3:00',
      basePrice: 184.69,
      taxPrice: 37.87,
      totalPrice: 222.56,
      url: 'https://pt.aliexpress.com/item/1005013423810577.html',
      bought: false,
      critical: false,
      note: 'Acompanha tige (haste de montagem) definitiva. A tige deverá ser medida e cortada exatamente na distância entre o movimento e a rosca da coroa da caixa de 40 mm.',
      linkedChecklistId: 'acq-5'
    },
    {
      id: 'part-4',
      number: 4,
      name: 'Caixa de Relógio 40 mm GS (PALUXEY / LIYAN) + Pulseira de Aço Inoxidável',
      variantCode: 'Cor: Black Ring A',
      variantDesc: 'Anel interno branco com marcações pretas, vidro de safira, espessura de 11,5 mm',
      basePrice: 246.92,
      taxPrice: 50.61,
      totalPrice: 297.53,
      url: 'https://pt.aliexpress.com/item/1005012866787629.html',
      bought: false,
      critical: true,
      note: 'CRÍTICO: Verificar na descrição/vendedor se o fundo traseiro desta variante possui vidro transparente (Exhibition Caseback) antes de fechar o pedido, para não ocultar o rotor de dragão já adquirido.',
      linkedChecklistId: 'acq-4'
    },
    {
      id: 'part-5',
      number: 5,
      name: 'Ponteiro de Segundos Avulso Luminoso C3 (Jin Ming)',
      variantCode: 'Cor: Green',
      variantDesc: 'Verde, comprimento de 13 mm',
      basePrice: 12.41,
      taxPrice: 2.59,
      totalPrice: 15.00,
      url: 'https://pt.aliexpress.com/item/1005012604177401.html',
      bought: false,
      critical: false,
      note: 'Substituirá o ponteiro de segundos que já vem no kit do mostrador. Como descreve um círculo de 26,0 mm de diâmetro (2 × 13 mm), deve-se testar o giro completo de 360° para garantir que não raspe no rehaut (anel interno) da caixa.',
      linkedChecklistId: 'acq-6'
    }
  ],
  acquisitionChecklist: [
    { id: 'acq-1', text: 'Comprar Mostrador 28,5 mm dourado + Kit de Ponteiros (<code>Color: 16 gold</code>)', done: true, linkedPartId: 'part-1' },
    { id: 'acq-2', text: 'Comprar Rotor Customizado Dragão Dourado (<code>Cor: 01 - Black</code>)', done: true, linkedPartId: 'part-2' },
    { id: 'acq-3', text: 'Auditar fundo transparente (<em>Exhibition Caseback</em>) na Caixa 40 mm GS (<code>Black Ring A</code>)', done: false },
    { id: 'acq-4', text: 'Comprar Caixa de Relógio 40 mm GS + Pulseira de Aço', done: false, linkedPartId: 'part-4' },
    { id: 'acq-5', text: 'Comprar Movimento Mecânico Automático NH35A (<code>BW at 3H</code>)', done: false, linkedPartId: 'part-3' },
    { id: 'acq-6', text: 'Comprar Ponteiro de Segundos Verde Luminoso C3 (13 mm)', done: false, linkedPartId: 'part-5' },
    { id: 'acq-7', text: 'Providenciar kit básico de ferramentas de bancada', done: false }
  ],
  assemblyChecklist: [
    { id: 'asm-1', text: 'Testar o movimento NH35A fora da caixa (corda manual, salto rápido do calendário e virada de data às 12h)', done: false },
    { id: 'asm-2', text: 'Instalar o Rotor Customizado Dragão Dourado no NH35A e checar se gira livremente sem raspar nas pontes', done: false },
    { id: 'asm-3', text: 'Cortar e nivelar na lixa os pinos traseiros excedentes do mostrador dourado (manter furação 3h)', done: false },
    { id: 'asm-4', text: 'Acoplar o mostrador ao movimento NH35A', done: false },
    { id: 'asm-5', text: 'Avançar o movimento até o momento exato da virada de meia-noite e cravar o ponteiro de horas às 12:00', done: false },
    { id: 'asm-6', text: 'Cravar o ponteiro de minutos alinhado às 12:00 e checar paralelismo com o ponteiro de horas', done: false },
    { id: 'asm-7', text: 'Cravar o ponteiro de segundos verde de 13 mm e inspecionar se os 3 ponteiros não colidem entre si', done: false },
    { id: 'asm-8', text: 'Remover poeira com soprador de ar e inserir o conjunto movimento/mostrador na caixa de 40 mm', done: false },
    { id: 'asm-9', text: 'Verificar se o ponteiro de segundos de 13 mm gira 360° livres sem tocar no anel interno (<em>rehaut</em>) ou safira', done: false },
    { id: 'asm-10', text: 'Medir, cortar, lixar e travar a tige definitiva na coroa', done: false },
    { id: 'asm-11', text: 'Lubrificar o O-ring de vedação traseiro com silicone e fechar o fundo da caixa', done: false },
    { id: 'asm-12', text: 'Ajustar os elos da pulseira de aço inoxidável para a medida do pulso', done: false }
  ],
  toolsChecklist: [
    { id: 'tool-1', text: '<strong>Prensa ou Bastões Empurradores de Ponteiros</strong> (pontas de nylon de 0,5 mm, 1,0 mm e 1,5 mm) + protetor plástico de mostrador', done: false },
    { id: 'tool-2', text: '<strong>Massa Adesiva Rodico</strong> (para posicionar ponteiros e remover poeira/marcas de dedo sem arranhar o dourado)', done: false },
    { id: 'tool-3', text: '<strong>Chaves de Fenda de Precisão</strong> (1,2 mm a 1,6 mm) para substituir o rotor do NH35A', done: false },
    { id: 'tool-4', text: '<strong>Alicate de Corte Rente (<em>Flush Cutter</em>) + Lixa Diamantada</strong> (para cortar os pinos extras do mostrador e ajustar a tige)', done: false },
    { id: 'tool-5', text: '<strong>Soprador de Ar Manual + Dedais de Látex (<em>Finger Cots</em>)</strong> (para evitar impressões digitais no rotor e poeira sob o vidro de safira)', done: false },
    { id: 'tool-6', text: '<strong>Bola de Borracha Abridora de Fundo + Graxa de Silicone</strong> (para lubrificar o anel O-ring de vedação e fechar a caixa)', done: false }
  ]
};

let appState = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(DEFAULT_DATA);
    const parsed = JSON.parse(raw);
    return {
      parts: parsed.parts || structuredClone(DEFAULT_DATA.parts),
      acquisitionChecklist: parsed.acquisitionChecklist || structuredClone(DEFAULT_DATA.acquisitionChecklist),
      assemblyChecklist: parsed.assemblyChecklist || structuredClone(DEFAULT_DATA.assemblyChecklist),
      toolsChecklist: parsed.toolsChecklist || structuredClone(DEFAULT_DATA.toolsChecklist)
    };
  } catch (e) {
    console.error('Erro ao carregar localStorage:', e);
    return structuredClone(DEFAULT_DATA);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  flashSaveIndicator();
}

function flashSaveIndicator() {
  const el = document.getElementById('save-status-text');
  if (!el) return;
  el.textContent = 'Salvo agora no navegador';
  setTimeout(() => {
    el.textContent = 'Sincronizado (localStorage)';
  }, 1500);
}

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function togglePartStatus(partId) {
  const part = appState.parts.find(p => p.id === partId);
  if (!part) return;
  part.bought = !part.bought;

  if (part.linkedChecklistId) {
    const checkItem = appState.acquisitionChecklist.find(c => c.id === part.linkedChecklistId);
    if (checkItem) checkItem.done = part.bought;
  }

  saveState();
  renderAll();
}

function toggleChecklistItem(listKey, itemId) {
  const list = appState[listKey];
  if (!list) return;
  const item = list.find(i => i.id === itemId);
  if (!item) return;
  item.done = !item.done;

  if (item.linkedPartId) {
    const part = appState.parts.find(p => p.id === item.linkedPartId);
    if (part) part.bought = item.done;
  }

  // Se todas as ferramentas forem marcadas, sincroniza acq-7 automaticamente
  if (listKey === 'toolsChecklist') {
    const allToolsDone = appState.toolsChecklist.every(t => t.done);
    const acqTool = appState.acquisitionChecklist.find(a => a.id === 'acq-7');
    if (acqTool) acqTool.done = allToolsDone;
  }

  saveState();
  renderAll();
}

function resetToDefault() {
  if (!confirm('Restaurar todos os checklists e status de compra para o estado original do dossiê?')) return;
  appState = structuredClone(DEFAULT_DATA);
  saveState();
  renderAll();
}

function renderKPIs() {
  const boughtParts = appState.parts.filter(p => p.bought);
  const pendingParts = appState.parts.filter(p => !p.bought);

  const boughtTotal = boughtParts.reduce((acc, p) => acc + p.totalPrice, 0);
  const boughtBase = boughtParts.reduce((acc, p) => acc + p.basePrice, 0);
  const boughtTax = boughtParts.reduce((acc, p) => acc + p.taxPrice, 0);

  const pendingTotal = pendingParts.reduce((acc, p) => acc + p.totalPrice, 0);
  const pendingBase = pendingParts.reduce((acc, p) => acc + p.basePrice, 0);
  const pendingTax = pendingParts.reduce((acc, p) => acc + p.taxPrice, 0);

  const grandTotal = appState.parts.reduce((acc, p) => acc + p.totalPrice, 0);
  const grandBase = appState.parts.reduce((acc, p) => acc + p.basePrice, 0);
  const grandTax = appState.parts.reduce((acc, p) => acc + p.taxPrice, 0);

  const financialPct = grandTotal > 0 ? Math.round((boughtTotal / grandTotal) * 100) : 0;

  document.getElementById('kpi-bought-count').textContent = `${boughtParts.length}/${appState.parts.length} peças`;
  document.getElementById('kpi-bought-val').textContent = formatBRL(boughtTotal);
  document.getElementById('kpi-bought-sub').textContent = `${formatBRL(boughtBase)} base + ${formatBRL(boughtTax)} impostos`;
  document.getElementById('kpi-bought-bar').style.width = `${financialPct}%`;

  document.getElementById('kpi-pending-count').textContent = `${pendingParts.length}/${appState.parts.length} no carrinho`;
  document.getElementById('kpi-pending-val').textContent = formatBRL(pendingTotal);
  document.getElementById('kpi-pending-sub').textContent = `${formatBRL(pendingBase)} base + ${formatBRL(pendingTax)} impostos`;

  document.getElementById('kpi-total-val').textContent = formatBRL(grandTotal);
  document.getElementById('kpi-total-sub').textContent = `${formatBRL(grandBase)} base + ${formatBRL(grandTax)} impostos`;

  // Progresso global dos checklists
  const totalChecks =
    appState.acquisitionChecklist.length +
    appState.assemblyChecklist.length +
    appState.toolsChecklist.length;

  const doneChecks =
    appState.acquisitionChecklist.filter(i => i.done).length +
    appState.assemblyChecklist.filter(i => i.done).length +
    appState.toolsChecklist.filter(i => i.done).length;

  const overallPct = totalChecks > 0 ? Math.round((doneChecks / totalChecks) * 100) : 0;

  document.getElementById('kpi-progress-pct').textContent = `${overallPct}%`;
  document.getElementById('kpi-progress-val').textContent = `${doneChecks} / ${totalChecks}`;
  document.getElementById('kpi-progress-sub').textContent =
    `Aquisição: ${appState.acquisitionChecklist.filter(i => i.done).length}/7 • Bancada: ${appState.assemblyChecklist.filter(i => i.done).length}/12 • Ferramentas: ${appState.toolsChecklist.filter(i => i.done).length}/6`;
  document.getElementById('kpi-progress-bar').style.width = `${overallPct}%`;

  // Badges nas abas
  document.getElementById('tab-badge-checklists').textContent = `${doneChecks}/${totalChecks}`;
  document.getElementById('tab-badge-parts').textContent = `${boughtParts.length}/${appState.parts.length}`;
}

function renderChecklists() {
  renderSingleChecklist('list-acquisition', 'acquisitionChecklist', 'badge-acquisition', 'bar-acquisition', false);
  renderSingleChecklist('list-assembly', 'assemblyChecklist', 'badge-assembly', 'bar-assembly', true);
  renderSingleChecklist('list-tools', 'toolsChecklist', 'badge-tools', 'bar-tools', false);
}

function renderSingleChecklist(containerId, listKey, badgeId, barId, showStepNumbers) {
  const container = document.getElementById(containerId);
  const list = appState[listKey];
  if (!container || !list) return;

  const doneCount = list.filter(i => i.done).length;
  const pct = list.length > 0 ? Math.round((doneCount / list.length) * 100) : 0;

  const badgeEl = document.getElementById(badgeId);
  if (badgeEl) badgeEl.textContent = `${doneCount}/${list.length} (${pct}%)`;

  const barEl = document.getElementById(barId);
  if (barEl) barEl.style.width = `${pct}%`;

  container.innerHTML = list.map((item, idx) => `
    <li class="check-item ${item.done ? 'completed' : ''}" data-list="${listKey}" data-id="${item.id}">
      <input type="checkbox" ${item.done ? 'checked' : ''} aria-label="Marcar etapa" />
      ${showStepNumbers ? `<span class="step-num">${String(idx + 1).padStart(2, '0')}</span>` : ''}
      <span class="check-text">${item.text}</span>
    </li>
  `).join('');

  container.querySelectorAll('.check-item').forEach(li => {
    li.addEventListener('click', (e) => {
      e.preventDefault();
      toggleChecklistItem(li.dataset.list, li.dataset.id);
    });
  });
}

function renderParts() {
  const container = document.getElementById('parts-container');
  if (!container) return;

  container.innerHTML = appState.parts.map(part => {
    const statusClass = part.bought ? 'bought' : 'cart';
    const critClass = (!part.bought && part.critical) ? 'critical-card' : '';
    return `
      <article class="part-card ${statusClass} ${critClass}">
        <div>
          <div class="part-top">
            <span class="part-id-badge ${part.bought ? 'status-bought' : 'status-cart'}">
              ${part.bought ? '✓ Comprado' : '⏳ No Carrinho'}
            </span>
            <span style="font-size:0.78rem; color: var(--text-dim); font-weight:600;">Item #0${part.number}</span>
          </div>
          <h3 class="part-title">${part.name}</h3>
          <p class="part-variant"><code>${part.variantCode}</code> — ${part.variantDesc}</p>
        </div>

        <div class="price-box">
          <div class="price-col">
            <span>Preço Base</span>
            <strong>${formatBRL(part.basePrice)}</strong>
          </div>
          <div class="price-col">
            <span>Impostos</span>
            <strong>${formatBRL(part.taxPrice)}</strong>
          </div>
          <div class="price-col total">
            <span>Total</span>
            <strong>${formatBRL(part.totalPrice)}</strong>
          </div>
        </div>

        <div class="part-note ${part.critical ? 'critical' : ''}">
          ${part.note}
        </div>

        <div class="part-actions">
          <a href="${part.url}" target="_blank" rel="noopener noreferrer" class="btn-link">
            Abrir no AliExpress ↗
          </a>
          <button type="button" class="btn-toggle-status" data-part-id="${part.id}">
            ${part.bought ? 'Mover p/ Carrinho' : 'Marcar como Comprado'}
          </button>
        </div>
      </article>
    `;
  }).join('');

  container.querySelectorAll('.btn-toggle-status').forEach(btn => {
    btn.addEventListener('click', () => {
      togglePartStatus(btn.dataset.partId);
    });
  });
}

function setupTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.section-view');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabButtons.forEach(b => b.classList.toggle('active', b === btn));
      sections.forEach(sec => sec.classList.toggle('active', sec.id === `tab-${target}`));
    });
  });
}

function renderAll() {
  renderKPIs();
  renderChecklists();
  renderParts();
}

async function shutdownServer() {
  if (!confirm('Desligar o servidor web local (porta 8080)?\n\nSeus checklists continuam salvos no navegador.')) {
    return;
  }

  const shutdownBtn = document.getElementById('btn-shutdown-server');
  const indicator = document.querySelector('.save-indicator');
  const dot = document.querySelector('.save-dot');
  const statusText = document.getElementById('save-status-text');

  if (shutdownBtn) {
    shutdownBtn.disabled = true;
    shutdownBtn.textContent = 'Desligando...';
  }

  try {
    await fetch('/api/shutdown', { method: 'POST' });
  } catch (err) {
    // O servidor pode fechar a conexão imediatamente ao encerrar.
  }

  if (indicator) indicator.classList.add('offline');
  if (dot) dot.classList.add('offline');
  if (statusText) statusText.textContent = 'Servidor Desligado (dados salvos no navegador)';
  if (shutdownBtn) {
    shutdownBtn.textContent = '⏻ Servidor Desligado';
    shutdownBtn.disabled = true;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  renderAll();

  const resetBtn = document.getElementById('btn-reset-data');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetToDefault);
  }

  const shutdownBtn = document.getElementById('btn-shutdown-server');
  if (shutdownBtn) {
    shutdownBtn.addEventListener('click', shutdownServer);
  }
});
