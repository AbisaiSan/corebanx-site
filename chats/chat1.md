# Corebanx design specifications

_Started 2026-08-05 16:07 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "INÍCIO DO PROMPT??Crie o mockup e o protótipo navegável de alta fidelidade para"
The project currently has no files except possibly dotfiles — a `list_files` on the project root would return nothing else.
Current date is now August 5, 2026
</system-info>

<default aesthetic_system_instructions>
The user has not attached a design system. If they have ALSO not attached references or art direction, and the project is empty, ask your questions with the questions_v2 tool — but do NOT ask about the visual aesthetic (no questions about vibe, colors or palette directions (including color-swatch svg-options questions), typography, mood, or art direction): right after you ask, this app shows a visual-direction picker, and the user's pick reaches you with their answers (as theme instructions or an attached theme/design system). Spend your questions on everything else: audience, purpose, content, structure, scope, interactions, tone of copy. Exception: if the request already states the visual direction (a named design system, brand, or concrete art direction), set show_design_system_picker to false on the questions_v2 call and don't re-ask it.

If no visual direction ever arrives — no theme instructions, no attached theme or design system, no references or other art direction (picker skipped, or no questionnaire so no picker appeared) — you must still ASK what visual aesthetic they want before designing; one focused question is enough. Do NOT just pick your own. Once you have a direction, use this guidance when creating designs:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic_system_instructions>

<pasted_text name="Pasted text (83 lines)">
INÍCIO DO PROMPT

Crie o mockup e o protótipo navegável de alta fidelidade para o novo site institucional da Corebanx, uma infratech brasileira B2B2C que fornece infraestrutura financeira (Banking as a Service, core bancário, meios de pagamento e adquirência) para bancos, fintechs, subadquirentes e varejo. O site precisa comunicar solidez, confiança e tecnologia de ponta, com um design moderno, limpo, intuitivo e com boa experiência de uso, em um nível visual comparável ao da Circle (circle.com) e da Revolut (revolut.com). O tom, porém, é institucional B2B: o público são tomadores de decisão dentro de instituições financeiras (diretores de tecnologia, produto, operações), não o consumidor final. Evite qualquer linguagem ou visual de app de varejo (nada de "baixe o app", cripto ou promessas de rendimento pessoal).

Direção de marca e visual
Use estritamente a paleta oficial da marca Corebanx, extraída do manual de identidade visual, respeitando o papel de cada cor:
Laranja Corebanx (
#F0743A): cor de assinatura da marca. Use como cor principal para CTAs, botões, links e elementos de destaque, além de títulos de seção.
Azul marinho Corebanx (
#1D3F7A): cor complementar. Use em textos institucionais, ícones secundários e para gerar contraste em fundos claros.
Cinza neutro (
#ECECEA): versão negativa/reduzida da marca. Use sobre fundos escuros ou em aplicações discretas, como rodapé ou marca d'água.
Branco (
#FFFFFF): fundo institucional predominante em todo o site.
Não introduza outras cores de destaque além dessas quatro. O laranja deve ser sempre a cor de ação principal, o azul marinho nunca deve competir com ele em protagonismo.
Tipografia: uma fonte sans-serif geométrica, moderna e com curvas levemente arredondadas, dialogando com o traço arredondado e amigável do logotipo, em peso bold ou semibold para títulos, e uma fonte sans-serif legível para o corpo de texto. Títulos grandes e diretos, sem jargão técnico desnecessário.
Estilo visual: cards com cantos suavemente arredondados, ícones de linha simples (não fotos de banco de imagens genéricas), ilustrações abstratas leves com formas geométricas e gradientes sutis (no estilo da Circle), grades bem organizadas e bastante espaço em branco.
Microinterações: hover sutil em cards e botões, abas para alternar entre soluções, contadores animados nas estatísticas, transições suaves entre seções.
Tom de voz do texto: direto, técnico mas acessível, frases curtas, sem burocracia. Transmite solidez e inovação ao mesmo tempo.
Arquitetura do site (sitemap)
Home
Produtos e Soluções (visão geral, com blocos para BaaS e Core Bancário, Meios de Pagamento e Adquirência, White Label, Segurança e Compliance)
Soluções por segmento (Para Bancos, Para Fintechs, Para Subadquirentes e Facilitadores, Para Varejo e E-commerce)
Quem Somos (história, linha do tempo, valores, parceiros)
Cases e Parceiros
Contato
Rodapé institucional presente em todas as páginas

Priorize a construção completa de: Home, Produtos e Soluções, uma página de segmento como modelo (Para Bancos) e Contato. As demais podem ficar como wireframe de baixa fidelidade.

Menu de navegação (header fixo)

Logo à esquerda. Menu central: Produtos, Soluções, Quem Somos, Cases, Contato. Botão de destaque à direita: "Fale com um especialista".

Tela 1: Home
Hero: título forte de proposta de valor, por exemplo "Infraestrutura financeira completa para quem constrói o banco do futuro", com subtítulo do tipo "BaaS, core bancário, meios de pagamento e adquirência em uma única plataforma, para lançar produtos financeiros com a agilidade que seu negócio exige". Dois CTAs: "Fale com um especialista" (primário) e "Conheça nossas soluções" (secundário). Ao lado ou ao fundo, uma ilustração abstrata ou um mockup estilizado de dashboard/API, nunca uma foto genérica de pessoas em reunião.
Faixa de prova social logo abaixo do hero: "Parceiros que confiam na Corebanx", com logos de parceiros e clientes.
Seção "Antes e Depois": à esquerda, o cenário sem a Corebanx (sistemas fragmentados, integrações lentas, dependência de múltiplos fornecedores, compliance manual); à direita, o cenário com a Corebanx (uma única infraestrutura conectada, integração via API, conformidade incorporada, escala sob demanda).
Grid de produtos: quatro cards, um para cada linha de solução (BaaS e Core Bancário, Meios de Pagamento e Adquirência, White Label, Segurança e Compliance), cada um com ícone, título curto, uma linha de descrição e link "Saiba mais".
Seção "Como funciona o modelo White Label": quatro passos visuais (Branding, Tecnologia, Segurança, Adquirência), cada um com ícone e descrição de uma linha.
Faixa de números: anos de mercado, instituições atendidas, volume de transações processadas, percentual de disponibilidade da plataforma.
Seção de segurança e compliance: infraestrutura em nuvem, biometria, criptografia de dados, monitoramento contínuo, com selos ou ícones de certificação.
Bloco de depoimento ou case em destaque, com foto e nome de um parceiro (se ainda não houver, deixar como placeholder editável).
CTA final em faixa de destaque: "Pronto para modernizar sua operação financeira? Fale com nosso time."
Rodapé completo, com colunas para Produtos, Soluções, Empresa, Contato e redes sociais.
Tela 2: Produtos e Soluções

Página com um hero curto ("Uma infraestrutura, todas as soluções financeiras que seu negócio precisa") seguida de blocos detalhados para cada linha de produto, no formato usado pela Circle: uma imagem ou ilustração de um lado, texto e lista de benefícios em formato de checklist do outro lado, alternando o lado a cada bloco.

BaaS e Core Bancário: conta digital com funções de banco, multiplataforma (app iOS, Android, internet banking, plataforma white label, APIs REST), conciliação bancária, transações globais.
Meios de Pagamento e Adquirência: PIX, TED, boleto, cartão, QR Code, split de pagamento, maquininhas, gateways, recorrência, tudo em uma camada única de pagamentos.
White Label: sua marca, a tecnologia da Corebanx por trás, personalização completa de app e internet banking.
Segurança e Compliance: infraestrutura protegida, biometria, geolocalização por transação, criptografia, prevenção a fraude e regulatório.

Cada bloco termina com um CTA "Fale sobre este produto".

Tela 3: Soluções por segmento, modelo "Para Bancos"

Estrutura inspirada na página de bancos da Circle: hero com a dor específica desse público ("Bancos que evoluem sem recomeçar do zero"), bloco de contexto do mercado, seção "Antes e Depois" adaptada ao segmento, abas com dois ou três casos de uso específicos (cada aba com checklist de benefícios), seção de confiança com diferenciais da Corebanx (regulatório, segurança, escala, suporte), prova social com logos de instituições, e CTA final "Fale com nosso time sobre sua operação". As páginas "Para Fintechs", "Para Subadquirentes" e "Para Varejo" seguem o mesmo modelo, trocando a dor, os casos de uso e a prova social.

Tela 4: Quem Somos

Hero institucional curto, linha do tempo atualizada da empresa (ano de fundação até hoje), bloco de missão e valores, seção de parceiros estratégicos com logos, e um bloco final convidando para conhecer os produtos ou entrar em contato.

Tela 5: Cases e Parceiros

Grid de logos de parceiros e clientes, com cards de case (nome do cliente, segmento, resultado obtido em uma frase) sempre que houver dado disponível; caso não haja cases publicáveis ainda, usar placeholders editáveis.

Tela 6: Contato

Formulário simples e objetivo: Nome completo, Empresa, Cargo, E-mail corporativo, Telefone, Segmento (Banco, Fintech, Subadquirente, Outro), Mensagem, e botão "Enviar mensagem". Ao lado do formulário, informações diretas de contato comercial, endereço da empresa e links para redes sociais. Se fizer sentido, incluir uma opção "Agendar uma conversa" que leve a um calendário.

Requisitos de UX e responsividade
Design mobile first, com adaptação clara para desktop, tablet e celular.
Contraste de cores adequado para leitura e acessibilidade.
Componentes consistentes entre telas: mesmo estilo de botão, card, input e ícone em todo o site.
Carregamento visual leve, sem poluição de elementos na tela.
Navegação clara entre as telas do protótipo, simulando cliques nos CTAs e no menu.
Entregáveis esperados
Mockup de alta fidelidade da Home, Produtos e Soluções, uma página de segmento (Para Bancos) e Contato.
Um mini design system: paleta de cores, tipografia, estilo de botões e cards.
Protótipo navegável conectando as telas principais pelos CTAs e pelo menu.
FIM DO PROMPT
</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Design Components">
This project uses Design Components: every design is a single streaming `Name.dc.html` file. The full authoring spec is in your system prompt under "Writing code — Design Components" — follow it. Author and edit `.dc.html` content with the `dc_write`, `dc_html_str_replace`, `dc_js_str_replace`, and `dc_set_props` tools (not `write_file`; `str_replace_edit` works but won't stream); template edits stream into the live preview as you type.
</attached-skill>

<attached-skill name="Hi-fi design">
Create a high-fidelity, polished design.

Follow this general design process (use the todo list to remember):
(1) ask questions, (2) find existing UI kits and collect design context — copy ALL relevant components and read ALL relevant examples; ask the user if you can't find them, (3) start your file with assumptions + context + design reasoning (as if you are a junior designer and the user is your manager), with placeholders for the designs, and show it to the user early, (4) build out the designs and show the user again ASAP; append some next steps, (5) use your tools to check, verify and iterate on the design.

Good hi-fi designs do not start from scratch — they are rooted in existing design context. Ask the user to Import their codebase, or find a suitable UI kit / design resources, or ask for screenshots of existing UI. You MUST spend time trying to acquire design context, including components. If you cannot find them, ask the user for them. In the Import menu, they can link a local codebase, provide screenshots or Figma links; they can also link another project. Mocking a full product from scratch is a LAST RESORT and will lead to poor design. If stuck, try listing design assets and ls'ing design system files — be proactive! Some designs may need multiple design systems — get them all. Use the starter components (device frames and the like) to get high-quality scaffolding for free.

When showing multiple design options on one page, decide between (a) a single full-size responsive prototype with a tweaks panel, or (b) a vertical stack of anchored option cards. Choose based on how design-y vs prototype-y the ask is, how many options there are, and how big each is. For (b):

Present multiple design options as a vertical stack of turns — each turn of options is its own `<section>`, newest turn at the **top**, and every option gets a stable `{turn}{letter}` id (`1a`, `1b`, `2a`…) that the user references back in chat and you cross-link between turns. Always include `<meta name="design_doc_mode" content="canvas">` in `<helmet>` — the host provides pan/zoom, so the user can freely zoom out on designs wider than the viewport.

**How to write it** — put one `<style>` block in `<helmet>`, then one `<section class="dv-turn">` per turn as a **direct child of the root** (right after `</helmet>`, no wrapper). When the user asks for another round, **insert the new section ABOVE the existing ones** so the latest work sits at the top; never reorder, renumber, or delete earlier turns.

```html
<helmet data-dc-atomics><meta name="design_doc_mode" content="canvas"><style>body{margin:0;background:#f0eee9;font-family:system-ui,sans-serif}.dv-turn{padding:40px 44px 32px;border-bottom:1px solid rgba(0,0,0,.08);scroll-margin-top:16px}.dv-thd{display:flex;align-items:baseline;gap:10px;margin:0 0 20px}.dv-tid{font:600 10px ui-monospace,Menlo,monospace;padding:3px 7px;background:#1a1a1a;color:#fff;border-radius:4px;text-decoration:none}.dv-tname{font:600 13px/1.2 system-ui,sans-serif;color:#1a1a1a}.dv-opts{display:flex;flex-wrap:wrap;gap:28px;align-items:flex-start}.dv-opt{flex:none;display:flex;flex-direction:column;gap:9px;scroll-margin-top:16px}.dv-oid{font:600 10.5px ui-monospace,Menlo,monospace;padding:3px 7px;background:rgba(0,0,0,.08);color:#1a1a1a;border-radius:5px;text-decoration:none}.dv-olabel{display:flex;align-items:baseline;gap:8px;font:400 11px/1.3 system-ui,sans-serif;color:rgba(0,0,0,.55)}.dv-card{max-width:100%;background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,.06);overflow:hidden}.dv-opt:target .dv-oid{background:#2a78d6;color:#fff}.dv-next{margin:22px 0 0;font:12px/1.5 system-ui,sans-serif;color:rgba(0,0,0,.5)}</style></helmet>
<section class="dv-turn" id="t2">
<div class="dv-thd"><a class="dv-tid" href="#t2">2</a><span class="dv-tname">Riffs on <a class="dv-oid" href="#1b">1b</a></span></div>
<div class="dv-opts">
<div class="dv-opt" id="2a"><div class="dv-olabel"><a class="dv-oid" href="#2a">2a</a>Tighter spacing</div><div class="dv-card" style="width:360px">…design…</div></div>
<div class="dv-opt" id="2b">…</div>
</div>
<p class="dv-next">Try next: "more like <a class="dv-oid" href="#2a">2a</a> but with the serif from <a class="dv-oid" href="#1c">1c</a>" · "make <a class="dv-oid" href="#2b">2b</a> full-bleed" · "new directions"</p>
</section>
<section class="dv-turn" id="t1">…turn 1, unchanged…</section>
```

**Rules:** turn section ids are `t1`, `t2`, `t3`…; option ids are `1a`, `1b`, `2a`… and go on the option's **outermost** element (`.dv-opt`), never on the badge — so `#1b` scrolls the whole option into view. Ids are stable forever, never reused or renumbered. Options within a turn sit side-by-side in a wrapping row; don't hand-roll your own pan/zoom — the host canvas provides it. **Every** option-id reference in the file — turn heading, option label, `.dv-next` line, any prose — is an `<a class="dv-oid" href="#1b">1b</a>` link, never a bare `1b`; in your chat replies, just write `1b`. End each turn with a one-line `.dv-next` of 2–3 plain-English follow-ups the user could paste into chat. Size each `.dv-card` to its content (explicit width is fine); don't use `height:100%`.

When designing, asking many good questions is ESSENTIAL.

Give options: try to give 3+ variations across several dimensions. Mix by-the-book designs that match existing patterns with new and novel interactions, including interesting layouts, metaphors, and visual styles. Have some options that use color or advanced CSS; some with iconography and some without. Start your variations basic and get more advanced and creative as you go! Try remixing the brand assets and visual DNA in interesting ways — play with scale, fills, texture, visual rhythm, layering, novel layouts, type treatments. The goal is not the perfect option; it's exploring atomic variations the user can mix and match.

CSS, HTML, JS and SVG are amazing. Users often don't know what they can do. Surprise the user.

If you do not have an icon, asset or component, draw a placeholder: in hi-fi design, a placeholder is better than a bad attempt at the real thing.
</attached-skill>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- assets: Tenho o logo Corebanx e vou anexar
- numeros: 16,7K
TPS Comprovado
7
Rails de Pagamento
11
Engines de Ledger
19
Mensagens ISO 20022
99,99%
Uptime SLA
- timeline: 2021 a 2025
- fonte: Decida por mim
- mobile: Mobile first visível: cada tela em mobile e desktop
- ds: Decida por mim
- wireframes: Alta fidelidade também, se der
- nav: Ambos: modo revisão + modo protótipo
- prova: Vou enviar nomes reais depois
- idioma: PT e EN completos

## Assistant

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

Protótipo em `Corebanx Site.dc.html` — barra superior troca tela, Desktop/Mobile, Protótipo/Revisão e PT/EN.

Inclui: Design System (paleta, tipografia Figtree + DM Sans, botões, cards, campos), Home, Produtos e Soluções, Para Bancos (com abas), Quem Somos (2021–2025), Cases e Contato. Header e rodapé são componentes reutilizados nas seis telas; CTAs e menu navegam de verdade.

Pendências: o logo Corebanx (hoje um wordmark placeholder — me envie o SVG que eu troco), logos de parceiros, foto e texto do depoimento, e nomes reais de clientes nos cases.

## User

Convert this design into a slide deck using the deck-stage starter component, then export it as a PPTX: `Corebanx Site.dc.html`

## Assistant

_[tool: copy_starter_component]_

_[tool: read_skill_prompt]_

_[tool: dc_write]_

_[tool: show_to_user]_

_[tool: gen_pptx]_

_[tool: sleep]_

_[tool: gen_pptx]_

_[tool: eval_js]_

_[tool: gen_pptx]_

_[tool: grep]_

_[tool: gen_pptx]_

_[tool: eval_js_user_view]_

_[tool: show_to_user]_

_[tool: eval_js_user_view]_

_[tool: gen_pptx]_

_[tool: ready_for_verification]_

Deck em `Corebanx Deck.dc.html` — 13 slides 1920×1080 na paleta e tipografia do site, com notas do apresentador em cada um: capa, premissas, paleta, tipografia e componentes, Home (hero, antes/depois, produtos, números), Produtos e Soluções, Para Bancos, Contato, mobile first e próximos passos.

O `.pptx` (`corebanx-site-deck.pptx`) foi gerado com texto e formas editáveis e o download já disparou.

## User

Segue a logo da corebanx, atualize a logo no mockaup do site.

## Assistant

_[tool: run_script]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Logo aplicada no header (versão colorida) e no rodapé (versão negativa em cinza neutro, para o fundo azul). Recortei a margem branca e deixei o fundo transparente — arquivos em `assets/`.

Quer que eu troque também a capa do deck?

## User

Segue a logo atualizada sem o fundo

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Substituí os arquivos: `assets/logo-corebanx.png` (header) e `assets/logo-corebanx-negativo.png` (rodapé, em cinza neutro sobre o azul). Header e rodapé já apontam para eles, sem mudança de layout.

## User

Atualize apenas o header e o menu de navegação do site que você já criou para a Corebanx, mantendo todo o restante do mockup como está. Ajuste o header para seguir o mesmo padrão de estrutura e comportamento de menu do site da Revenu (revenu.tech/pt), mas sem copiar a paleta de cores nem o tom visual deles, que é mais escuro e voltado a desenvolvedores.

Logo Corebanx à esquerda. Header fixo (sticky) ao rolar a página, com uma sombra sutil que só aparece depois que a página é rolada.
Dois itens de menu com mega menu (painel em dropdown ao passar o mouse ou clicar), cada item do painel com ícone pequeno, nome e uma linha curta de descrição:
"Produtos": BaaS e Core Bancário, Meios de Pagamento e Adquirência, White Label, Segurança e Compliance.
"Soluções": Para Bancos, Para Fintechs, Para Subadquirentes e Facilitadores, Para Varejo e E-commerce.
Dois itens diretos, sem dropdown: "Quem Somos" e "Cases".
Botão de destaque em laranja no canto direito, mesma posição de prioridade: "Fale com um especialista".
No mobile, ícone de menu hambúrguer que abre um overlay de tela cheia, com cada mega menu virando uma lista em formato de acordeão.
Mantenha a paleta oficial da Corebanx (laranja 
#F0743A, azul marinho 
#1D3F7A, cinza 
#ECECEA, branco) e o tom institucional em todo o header.
Importante: use exatamente os mesmos ícones, estilo de botão, espaçamento e efeitos visuais já aplicados no restante do mockup que você já fez para a Corebanx. Da Revenu, aproveite só a lógica de comportamento do menu, nunca um elemento visual novo. O header precisa parecer parte do mesmo site que você já construiu, não algo emprestado de outro site.

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

Header atualizado (só ele, o resto do mockup está intacto):

- Sticky com sombra sutil que aparece só após rolar
- "Produtos" e "Soluções" com mega menu (hover ou clique), quatro itens cada, com os mesmos ícones geométricos, hover cinza e raio de canto já usados nos cards
- "Quem Somos" e "Cases" diretos, CTA laranja à direita
- No mobile, hambúrguer abre overlay de tela cheia com os dois mega menus em acordeão e o CTA no fim

Os itens de Soluções apontam todos para a página modelo "Para Bancos", já que as outras três ainda não existem no protótipo.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Corrigido:

- Sticky agora funciona — o wrapper do header virou `display:contents`, então a barra fica presa ao topo e a sombra aparece só depois de rolar.
- O overlay mobile passou a ser ancorado no próprio header (`top:100%`, altura do restante da tela), então fica dentro da coluna do celular. O hambúrguer virou botão de abrir/fechar, com as barras virando um "×".

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Troquei `overflow:hidden` por `overflow:clip` nos sete frames de tela — o header agora fica preso ao topo ao rolar, mantendo os cantos arredondados.

## User

Atualize a página de Produtos e Soluções e o mega menu do header do site que você já criou para a Corebanx, mantendo o restante do mockup como está. Adicione os itens abaixo, organizados nos grupos indicados (crie os grupos que ainda não existirem), cada um como uma seção com âncora própria na página (por exemplo, produtos#cartoes, produtos#antifraude), no mesmo formato dos produtos existentes (imagem ou ilustração de um lado, texto e checklist de benefícios do outro, CTA "Fale sobre este produto"). Não crie uma página separada para cada item.

Núcleo Bancário

Dashboard de Gestão: painel único com visão em tempo real de saldos, transações, conciliação e indicadores operacionais.

Meios de Pagamento e Adquirência

Adicione COMPE à lista de trilhos de pagamento (junto com Pix, TED, boleto e QR Code): conectividade com a Câmara de Compensação para liquidação de transferências interbancárias.
Integração de Cartões: emissão e processamento de cartões de crédito e débito, físicos e virtuais, com gestão completa do programa de cartões.

Soluções Financeiras Avançadas (grupo novo)

Investimentos: acesso a produtos de investimento integrados diretamente à conta digital do cliente final.
Convênios: gestão de convênios e arranjos entre instituições, com regras e conciliação próprias.
Cobrança: emissão, gestão e conciliação de cobranças (boletos, carnês, recorrência) em um único painel.

Segurança, Compliance e Testes

Antifraude e PLD: monitoramento antifraude de transações em tempo real, com scoring de risco e bloqueio automático de operações suspeitas; motor de Prevenção à Lavagem de Dinheiro (PLD) com KYC contínuo, monitoramento de transações atípicas e geração de reportes regulatórios.
Sandbox para Testes: ambiente de testes gratuito, sem cartão de crédito, para integrar e validar a solução antes de contratar.

Atualize também:

O grid de produtos da Home, mostrando os grupos, não cada item individual.
O mega menu "Produtos" no header, organizando os itens nos mesmos grupos acima.
A seção de segurança e compliance da Home, mencionando também antifraude de transações e PLD.
Prompt novo site corebanx
Documento · MD

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Página de Produtos e Soluções reorganizada em grupos, cada item como seção com âncora própria:

- **Núcleo Bancário** — `#baas`, `#dashboard`
- **Meios de Pagamento e Adquirência** — `#pagamentos` (COMPE incluído nos trilhos e na ilustração), `#cartoes`
- **White Label** — `#white-label`
- **Soluções Financeiras Avançadas** (novo) — `#investimentos`, `#convenios`, `#cobranca`
- **Segurança, Compliance e Testes** — `#seguranca`, `#antifraude`, `#sandbox`

Todos no mesmo formato: ilustração de um lado, texto + checklist do outro, alternando o lado, com CTA "Fale sobre este produto".

Também atualizei: mega menu "Produtos" em quatro colunas por grupo (e o acordeão mobile com os mesmos itens), grid da Home agora com os cinco grupos, e a seção de segurança da Home com antifraude em tempo real e PLD/KYC contínuo. As traduções EN dos novos textos foram adicionadas.

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

O card de estatísticas do bloco "Integração de Cartões" estava com `z-index:-1` e pintava atrás do fundo da seção — removi o índice negativo e ajustei a sobreposição.

## User

Atualize a página de Produtos e Soluções e o mega menu do header do site que você já criou para a Corebanx, mantendo o restante do mockup como está. No grupo "Segurança, Compliance e Testes", separe Regulatório como um produto próprio, distinto de Antifraude e PLD (não misture os dois). Crie uma seção com âncora própria (produtos#regulatorio), no mesmo formato dos produtos existentes (imagem ou ilustração de um lado, texto e checklist de benefícios do outro, CTA "Fale sobre este produto").

Regulatório (produto novo, separado de Antifraude e PLD)
Geração e envio de CADOCs ao BACEN, integração com FGC, e-Financeira, COSIF, Bloqueio Judicial, SIMBA e BC Correios, cobrindo as obrigações regulatórias exigidas pelo Banco Central e demais órgãos.

O grupo "Segurança, Compliance e Testes" deve ficar com quatro itens distintos: Segurança e Compliance, Antifraude e PLD, Regulatório, Sandbox para Testes. Atualize o mega menu "Produtos" no header para refletir esses quatro itens no mesmo subgrupo.

Atualize também a seção de segurança e compliance da Home, mencionando também a cobertura regulatória (CADOCs, COSIF, FGC e mais) como algo separado de antifraude e PLD.

## User

Atualize a página de Produtos e Soluções e o mega menu do header do site que você já criou para a Corebanx, mantendo o restante do mockup como está. No grupo "Segurança, Compliance e Testes", separe Regulatório como um produto próprio, distinto de Antifraude e PLD (não misture os dois). Crie uma seção com âncora própria (produtos#regulatorio), no mesmo formato dos produtos existentes (imagem ou ilustração de um lado, texto e checklist de benefícios do outro, CTA "Fale sobre este produto").

Regulatório (produto novo, separado de Antifraude e PLD)
Geração e envio de CADOCs ao BACEN, integração com FGC, e-Financeira, COSIF, Bloqueio Judicial, SIMBA e BC Correios, cobrindo as obrigações regulatórias exigidas pelo Banco Central e demais órgãos.

O grupo "Segurança, Compliance e Testes" deve ficar com quatro itens distintos: Segurança e Compliance, Antifraude e PLD, Regulatório, Sandbox para Testes. Atualize o mega menu "Produtos" no header para refletir esses quatro itens no mesmo subgrupo.

Atualize também a seção de segurança e compliance da Home, mencionando também a cobertura regulatória (CADOCs, COSIF, FGC e mais) como algo separado de antifraude e PLD.

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

"Regulatório" agora é produto próprio em `#regulatorio`, entre Antifraude e PLD e Sandbox: texto + checklist (CADOCs ao BACEN, FGC/e-Financeira/COSIF, Bloqueio Judicial/SIMBA/BC Correios, calendário de envios) e ilustração de remessas regulatórias, com CTA "Fale sobre este produto".

O grupo Segurança, Compliance e Testes ficou com os quatro itens no mega menu (desktop e acordeão mobile), e a seção de segurança da Home ganhou o card "Cobertura regulatória", separado de antifraude e PLD.

## User

Found issues — fixing…

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Ajustes de texto feitos:

- `#seguranca` agora cobre só infraestrutura, biometria, criptografia e geolocalização ("Proteção em cada camada da transação"), sem antifraude nem regulatório; eyebrow sem o "04 ·".
- Chips do hero de Produtos passaram a listar os cinco grupos.
- Título do grid da Home: "Cinco grupos de solução, uma só plataforma".

## User

Atualize as animações e microinterações abaixo no mockup que você já construiu para a Corebanx, sem alterar o layout, o texto ou a estrutura das telas.

Seção "Parceiros que confiam na Corebanx" (Home): adicione uma rolagem horizontal contínua e infinita dos logos dos parceiros, da direita para a esquerda, em velocidade lenta e constante. Pause a rolagem quando o mouse passar por cima.
Faixa de números/estatísticas (TPS comprovado, Rails de Pagamento, Engines de Ledger, Mensagens ISO 20022, Uptime SLA): quando essa seção entrar na área visível da tela durante a rolagem, anime cada número contando rapidamente de 0 até o valor final, em cerca de 1 a 1,5 segundo, todos subindo ao mesmo tempo.
Card ilustrado do produto "BaaS e Core Bancário" (grupo Núcleo Bancário), com "Conta digital ativa", barras de progresso, "LEDGER D+0" e "ISO 20022 19 msgs": adicione uma animação em que um elemento do card, no estilo de um cartão saindo de uma carteira, se desloca para a direita e volta à posição original, um ciclo completo de ida e volta. Dispare essa animação toda vez que o usuário rolar a página e essa seção entrar na tela, não só na primeira vez.
Card ilustrado do produto "Dashboard de Gestão", com as barras cinza, cinza, laranja, cinza e azul marinho: anime as barras crescendo de baixo para cima até a altura final de cada uma, disparado toda vez que o usuário rolar a página e essa seção entrar na tela, do mesmo jeito que a animação do card acima.

## Assistant

_[tool: str_replace_edit]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Animações adicionadas, sem mexer em layout ou texto:

- Faixa de parceiros: rolagem contínua da direita para a esquerda (ciclo de 38s, conjunto duplicado para loop sem emenda), pausa no hover.
- Faixa de números: contagem de 0 ao valor final em ~1,25s, todos juntos, disparada ao entrar na tela e a cada nova entrada.
- Card do BaaS: a linha "Conta digital · ativa" desliza para a direita e volta, como um cartão saindo da carteira.
- Card do Dashboard: as cinco barras crescem de baixo para cima com leve escalonamento.

As três últimas são reativadas sempre que a seção entra na viewport, não só na primeira vez.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Corrigido:

- Marquee agora usa `margin-right` em cada logo em vez de `gap`, então meio trilho = uma volta exata (972px) e o loop não dá mais o salto de 6px.
- A animação do card BaaS (e a das barras do Dashboard) passou a ser disparada por checagem de posição no scroll, em vez de depender só do IntersectionObserver — reativa a cada entrada na tela. Os contadores continuam no observer.

## User

Atualize a animação do card ilustrado do produto "Integração de Cartões" no mockup que você já construiu para a Corebanx, sem alterar o layout, o texto ou a estrutura da tela.

Adicione um brilho diagonal (reflexo de luz), que percorre a superfície do cartão de um canto ao outro, simulando o reflexo em um cartão físico real.
Ao mesmo tempo, anime os números abaixo do cartão ("cartões ativos: 184.320" e "autorização média: 38 ms"), contando rapidamente de 0 até o valor final, no mesmo padrão de contador já usado na faixa de estatísticas da Home.
Dispare as duas animações juntas, toda vez que o usuário rolar a página e essa seção entrar na tela, não só na primeira vez.

## Assistant

_[tool: str_replace_edit]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

No card de "Integração de Cartões": um reflexo diagonal atravessa o cartão navy (~1,5s) e, ao mesmo tempo, "184.320" e "38 ms" contam de 0 ao valor final no mesmo padrão da faixa de estatísticas. Ambas disparam juntas a cada vez que a seção entra na tela.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

As animações agora são disparadas por seção, não por elemento: quando `#cartoes` entra na tela, o reflexo e os dois contadores rodam no mesmo instante. Mesma lógica se aplica ao card do BaaS e às barras do Dashboard.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Corrigido:

- Troquei o guard de rAF (que podia travar e engolir todos os scrolls seguintes) por checagem com throttle por tempo, mais uma revisão periódica a cada 500ms como rede de segurança — as animações do BaaS e do Dashboard voltam a disparar em cada entrada.
- Contadores agora zeram no início de cada disparo e têm garantia de fechar exatamente no valor final, então na reentrada eles contam visivelmente de 0.

## User

Ajuste importante de estrutura: os itens do mega menu "Produtos" que você já construiu (Núcleo Bancário, Meios de Pagamento e Adquirência, Soluções Financeiras Avançadas, White Label, Segurança/Compliance/Testes) estão todos levando para a mesma tela. Corrija isso criando uma página própria e completa para cada um dos doze produtos, em vez de seções dentro de uma única página.

A página "Produtos e Soluções" que já existe vira uma página índice: mantenha a grade de cards curtos organizados por grupo (ícone, nome, uma linha, "Saiba mais"), mas cada card e cada item do mega menu do header deve linkar para a página individual e completa daquele produto.

Cada página individual de produto segue o mesmo modelo: link de volta para "Produtos e Soluções" no topo, rótulo do grupo (ex.: "NÚCLEO BANCÁRIO"), nome do produto como título, uma linha de descrição, checklist de benefícios, o card ilustrado ao lado (mantendo a mesma animação já criada para BaaS e Core Bancário, Dashboard de Gestão e Integração de Cartões), e CTA "Fale sobre este produto" ao final.

Crie as páginas para os doze produtos: BaaS e Core Bancário, Dashboard de Gestão, Trilhos de Pagamento, Integração de Cartões, Investimentos, Convênios, Cobrança, White Label, Segurança e Compliance, Antifraude e PLD, Regulatório, Sandbox para Testes.

## Assistant

_[tool: run_script]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: run_script]_

_[tool: str_replace_edit]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Reestruturado:

- "Produtos e Soluções" virou índice: hero + cinco grupos, cada um com cards curtos (ícone, nome, uma linha, "Saiba mais") que levam à página do produto.
- Doze páginas individuais criadas — BaaS e Core Bancário, Dashboard de Gestão, Trilhos de Pagamento, Integração de Cartões, Investimentos, Convênios, Cobrança, White Label, Segurança e Compliance, Antifraude e PLD, Regulatório, Sandbox para Testes — cada uma com header, link "← Produtos e Soluções", rótulo do grupo, nome do produto como título, descrição, checklist, card ilustrado (com as animações já feitas) e CTA "Fale sobre este produto", mais o rodapé.
- Mega menu (desktop e acordeão mobile) agora aponta cada item para a sua página.

No modo Revisão as doze páginas aparecem empilhadas com rótulo; no modo Protótipo, uma por vez.

## User

Check didn’t complete

## Assistant

_[tool: eval_js_user_view]_

_[tool: sleep]_

_[tool: eval_js_user_view]_

_[tool: get_webview_logs]_

_[tool: show_html]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Reenviado para verificação. O arquivo agora tem 18 telas no mesmo documento, o que deixou o preview mais pesado — se a navegação ficar lenta no seu lado, posso separar as páginas de produto em um segundo arquivo.

## User

Atualize o hero da página "Quem Somos" no mockup que você já construiu para a Corebanx, sem alterar o texto nem o restante da tela. Adicione uma coluna à direita do texto, com uma ilustração abstrata de um sistema conectado: um conjunto de nós (círculos) ligados por linhas finas, representando instituições financeiras conectadas por uma infraestrutura comum. Um nó central, maior, na cor laranja (
#F0743A), representa a Corebanx como o núcleo que conecta tudo; os demais nós em azul marinho (
#1D3F7A) ou apenas com contorno fino. Fundo com um gradiente bem sutil. Use o mesmo estilo geométrico e os mesmos ícones/linhas já aplicados no restante do mockup, sem foto de pessoas ou de banco de imagens.

## Assistant

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Hero de Quem Somos agora tem duas colunas: texto à esquerda (inalterado) e, à direita, a rede abstrata — nó central laranja como núcleo, seis nós em azul marinho (alguns sólidos, outros só com contorno fino), ligações finas com alguns traços pontilhados e gradiente sutil ao fundo.

## User

Atualize o padrão de todos os heros do site que você já construiu para a Corebanx (Home, páginas de produto, páginas de segmento, Quem Somos), sem alterar o texto de nenhum deles.

Em cada hero, mantenha o texto à esquerda (rótulo, título, subtítulo, CTA) e adicione, à direita, uma composição de dois ou três cards sobrepostos e levemente inclinados, com profundidade, mostrando uma prévia de tela ou dado relacionado ao assunto daquele hero. Inspire-se na composição de cards em camadas usada pela Stripe, mas mantenha o fundo claro e a paleta oficial da Corebanx (laranja 
#F0743A, azul marinho 
#1D3F7A, branco, cinza 
#ECECEA), nunca o gradiente escuro roxo/laranja da Stripe.

No hero da Home: cards com uma composição geral (um trecho de dashboard, uma transação, um cartão).
No hero de cada página de produto: reaproveite exatamente o conteúdo do card ilustrado que já existe naquele produto.
No hero de cada página de segmento (Para Bancos, Para Fintechs, Para Subadquirentes, Para Varejo): um dado ou tela relevante para aquele público.

Se não for possível gerar uma boa ilustração customizada para algum hero específico, use como alternativa o mesmo formato de card branco, cantos arredondados e sombra leve já usado nas páginas de produto, como um placeholder, que eu mesmo substituo depois por uma imagem própria.

## Assistant

_[tool: run_script]_

_[tool: str_replace_edit]_

_[tool: ready_for_verification]_

Padrão de hero aplicado, sem tocar nos textos:

- **Home**: painel de ledger na frente, com um card de transação Pix inclinado à esquerda e um card de cartão navy inclinado à direita.
- **12 páginas de produto**: o card ilustrado existente virou o card da frente, com dois cards inclinados atrás (branco e cinza) para dar profundidade — as animações seguem funcionando, porque só as camadas de trás são rotacionadas.
- **Para Bancos**: os quatro dados (D+0, API, 7, 99,99%) agora ficam dentro de um card branco "Operação do banco", com as duas camadas atrás.
- **Quem Somos**: a rede de nós passou a ficar dentro do card branco, também com as camadas.

Se quiser trocar alguma dessas composições por imagem própria depois, os cards de trás são placeholders neutros e saem fácil.

## User

Atualize o hero da pagina quem somos no mockup que você já construiu para a Corebanx, sem alterar o texto. No lugar da composição de cards, use um mockup de celular mostrando a tela de um app bancário com a identidade visual da Corebanx: fundo branco, títulos em azul marinho (
#1D3F7A), destaques e botões em laranja (
#F0743A). Coloque uma forma abstrata suave (blob ou gradiente) atrás do celular. Adicione uma leve animação: o celular flutuando devagar para cima e para baixo, ou os elementos da tela do app surgindo em sequência quando a página carrega.

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Hero de Quem Somos: agora um celular com bezel navy mostrando um app bancário Corebanx (saldo, ações Pix/Pagar/Cartão em laranja, extrato, tab bar), com blob laranja e forma navy suaves atrás. O celular flutua devagar em loop e os elementos da tela aparecem em sequência ao carregar.

