# Dossiê Técnico e Controle de Projeto: Seiko Mod $40\text{ mm}$ (Calibre NH35A)

Documento de referência consolidado contendo especificações dimensionais, links das peças, orçamento detalhado, auditoria de compatibilidade e protocolo de montagem passo a passo.

---

## 1. Resumo Financeiro Atual

* **Itens já comprados (2/5):** R$ 111,79 *(R$ 92,73 base + R$ 19,06 impostos)*
* **Itens pendentes no carrinho (3/5):** R$ 535,09 *(R$ 444,02 base + R$ 91,07 impostos)*
* **Custo Total das Peças:** **R$ 646,88** *(R$ 536,75 base + R$ 110,13 impostos)*

---

## 2. Inventário de Peças e Links

### Peças Adquiridas (Status: Comprado)

1. **Mostrador $28,5\text{ mm}$ + Kit de Ponteiros (NH35/36)**
   * **Variante:** `Color: 16 gold` (Dourado texturizado, janela de data às 3h, lúmen verde)
   * **Preço Base:** R$ 76,51 | **Impostos:** R$ 15,69 | **Total:** R$ 92,20
   * **Link:** [Anúncio AliExpress](https://pt.aliexpress.com/item/1005011821795123.html)
   * **Nota Técnica:** Já acompanha um jogo de ponteiros (horas, minutos e segundos). Exige remoção e lixamento dos pinos traseiros (*dial feet*) excedentes, mantendo apenas o par referente à posição das 3 horas.

2. **Rotor Customizado / Guarda de Movimento (NH35 / NH36 / 4R35)**
   * **Variante:** `Cor: 01 - Black` (Preto com Dragão Dourado — inscr. *Time Corp / 4R35B / Twenty-Three Jewels*)
   * **Preço Base:** R$ 16,22 | **Impostos:** R$ 3,37 | **Total:** R$ 19,59
   * **Link:** [Anúncio AliExpress](https://pt.aliexpress.com/item/1005006305556868.html)
   * **Nota Técnica:** Substitui ou reveste o rotor original na parte traseira do movimento. Exige que a caixa escolhida possua fundo transparente (*Exhibition Caseback*) para que a peça fique visível.

---

### Peças Pendentes (Status: No Carrinho)

3. **Movimento Mecânico Automático SII NH35A**
   * **Variante:** `Cor: BW at 3H` (Disco de data preto com números brancos, alinhado às 3:00)
   * **Preço Base:** R$ 184,69 | **Impostos:** R$ 37,87 | **Total:** R$ 222,56
   * **Link:** [Anúncio AliExpress](https://pt.aliexpress.com/item/1005013423810577.html)
   * **Nota Técnica:** Acompanha tige (haste de montagem) definitiva. A tige deverá ser medida e cortada exatamente na distância entre o movimento e a rosca da coroa da caixa de $40\text{ mm}$.

4. **Caixa de Relógio $40\text{ mm}$ GS (PALUXEY / LIYAN) + Pulseira de Aço Inoxidável**
   * **Variante:** `Cor: Black Ring A` (Anel interno branco com marcações pretas, vidro de safira, espessura de $11,5\text{ mm}$)
   * **Preço Base:** R$ 246,92 | **Impostos:** R$ 50,61 | **Total:** R$ 297,53
   * **Link:** [Anúncio AliExpress](https://pt.aliexpress.com/item/1005012866787629.html)
   * **Nota Técnica (CRÍTICO):** Verificar na descrição/vendedor se o fundo traseiro desta variante possui vidro transparente (*Exhibition Caseback*) antes de fechar o pedido, para não ocultar o rotor de dragão já adquirido.

5. **Ponteiro de Segundos Avulso Luminoso C3 (Jin Ming)**
   * **Variante:** `Cor: Green` (Verde, comprimento de $13\text{ mm}$)
   * **Preço Base:** R$ 12,41 | **Impostos:** R$ 2,59 | **Total:** R$ 15,00
   * **Link:** [Anúncio AliExpress](https://pt.aliexpress.com/item/1005012604177401.html)
   * **Nota Técnica:** Substituirá o ponteiro de segundos que já vem no kit do mostrador. Como descreve um círculo de $26,0\text{ mm}$ de diâmetro ($2 \times 13\text{ mm}$), deve-se testar o giro completo de $360^\circ$ para garantir que não raspe no *rehaut* (anel interno) da caixa.

---

## 3. Matriz de Compatibilidade e Especificações Mecânicas

| Parâmetro Técnico | Especificação do Projeto | Status de Compatibilidade |
| :--- | :--- | :--- |
| **Calibre Base** | SII / TMI NH35A ($21.600\text{ bph}$, $3\text{ Hz}$, 24 rubis, $41\text{ h}$ reserva) | Padrão de referência |
| **Alinhamento Coroa / Data** | Posição 3:00 (3H) no movimento, mostrador e caixa | $100\%$ Sincronizado |
| **Diâmetro do Mostrador** | $\varnothing 28,5\text{ mm}$ | Padrão exato para caixa NH35 de $40\text{ mm}$ |
| **Furação de Ponteiros** | Horas: $1,50\text{ mm}$ / Minutos: $0,90\text{ mm}$ / Segundos: $0,21\text{ mm}$ | $100\%$ Compatível (Padrão NH35/NH36) |
| **Varredura do Segundeiro** | Raio $13,0\text{ mm}$ ($\varnothing 26,0\text{ mm}$) em mostrador de $\varnothing 28,5\text{ mm}$ | Folga radial de $1,25\text{ mm}$ (Requer teste de giro) |

---

## 4. Auditoria de Riscos e Pontos de Atenção na Bancada

1. **Coerência do Fundo da Caixa (*Caseback*):**
   * O rotor customizado só tem utilidade estética se a tampa traseira da caixa PALUXEY for transparente. Caso o anúncio envie tampa traseira cega em aço sólido, confirme se há opção com fundo de vidro ou adquira uma tampa traseira transparente avulsa compatível com a caixa.
2. **Remoção dos Pinos do Mostrador (*Dial Feet*):**
   * Mostradores para modificação vêm com 4 ou 6 pinos na traseira (para atender coroas às 3h, 3.8h e 4.1h). Encaixe o mostrador a seco ou compare com o anel espaçador cinza/preto do NH35A, mantenha apenas os 2 pinos da posição 3h, corte os demais com alicate de corte rente (*flush cutter*) e lixe qualquer rebarba para que o mostrador assente $100\%$ plano.
3. **Instalação do Ponteiro de Segundos ($13\text{ mm}$):**
   * O eixo do segundeiro tem apenas $0,21\text{ mm}$. Utilize massa *Rodico* para segurar o ponteiro com estabilidade, alinhe o tubo central sobre o pino sob boa iluminação/lupa e pressione suavemente com ponteira plana de nylon. Verifique de perfil se ele está paralelo ao ponteiro de minutos.
4. **Corte da Tige (Haste da Coroa):**
   * Nunca corte a tige de uma só vez. Meça a folga com a tige inserida no movimento dentro da caixa, corte deixando $0,5\text{ mm}$ de margem e vá desgastando na lixa diamantada até que a coroa rosqueie/encaixe sem dar corda sozinha ao fechar e sem ficar frouxa. Fixe a rosca final com uma micro-gota de trava-rosca (ex: Loctite 242/243).

---

## 5. Ferramentas de Relojoaria Necessárias

Caso ainda não possua na bancada, inclua estes itens antes de iniciar a montagem:

* [ ] **Prensa ou Bastões Empurradores de Ponteiros** (pontas de nylon de $0,5\text{ mm}$, $1,0\text{ mm}$ e $1,5\text{ mm}$) + protetor plástico de mostrador.
* [ ] **Massa Adesiva Rodico** (para posicionar ponteiros e remover poeira/marcas de dedo sem arranhar o dourado).
* [ ] **Chaves de Fenda de Precisão** ($1,2\text{ mm}$ a $1,6\text{ mm}$) para substituir o rotor do NH35A.
* [ ] **Alicate de Corte Rente (*Flush Cutter*) + Lixa Diamantada** (para cortar os pinos extras do mostrador e ajustar a tige).
* [ ] **Soprador de Ar Manual + Dedais de Látex (*Finger Cots*)** (para evitar impressões digitais no rotor e poeira sob o vidro de safira).
* [ ] **Bola de Borracha Abridora de Fundo + Graxa de Silicone** (para lubrificar o anel O-ring de vedação e fechar a caixa).

---

## 6. Checklist Operacional de Compras e Montagem

### Fase 1: Aquisição
- [x] Comprar Mostrador $28,5\text{ mm}$ dourado + Kit de Ponteiros (`Color: 16 gold`)
- [x] Comprar Rotor Customizado Dragão Dourado (`Cor: 01 - Black`)
- [ ] Auditar fundo transparente (*Exhibition Caseback*) na Caixa $40\text{ mm}$ GS (`Black Ring A`)
- [ ] Comprar Caixa de Relógio $40\text{ mm}$ GS + Pulseira de Aço
- [ ] Comprar Movimento Mecânico Automático NH35A (`BW at 3H`)
- [ ] Comprar Ponteiro de Segundos Verde Luminoso C3 ($13\text{ mm}$)
- [ ] Providenciar kit básico de ferramentas de bancada

### Fase 2: Preparação e Montagem
- [ ] Testar o movimento NH35A fora da caixa (corda manual, salto rápido do calendário e virada de data às 12h)
- [ ] Instalar o Rotor Customizado Dragão Dourado no NH35A e checar se gira livremente sem raspar nas pontes
- [ ] Cortar e nivelar na lixa os pinos traseiros excedentes do mostrador dourado (manter furação 3h)
- [ ] Acoplar o mostrador ao movimento NH35A
- [ ] Avançar o movimento até o momento exato da virada de meia-noite e cravar o ponteiro de horas às 12:00
- [ ] Cravar o ponteiro de minutos alinhado às 12:00 e checar paralelismo com o ponteiro de horas
- [ ] Cravar o ponteiro de segundos verde de $13\text{ mm}$ e inspecionar se os 3 ponteiros não colidem entre si
- [ ] Remover poeira com soprador de ar e inserir o conjunto movimento/mostrador na caixa de $40\text{ mm}$
- [ ] Verificar se o ponteiro de segundos de $13\text{ mm}$ gira $360^\circ$ livres sem tocar no anel interno (*rehaut*) ou safira
- [ ] Medir, cortar, lixar e travar a tige definitiva na coroa
- [ ] Lubrificar o O-ring de vedação traseiro com silicone e fechar o fundo da caixa
- [ ] Ajustar os elos da pulseira de aço inoxidável para a medida do pulso
