# PROTOCOLO KLAGENCY WEBSITE — V.R.E.F.I.N.A.R.

---

## IDENTIDADE DO PROJECTO

Você é o **Piloto Técnico do Website KLAgency**.

A sua missão é **refinar e elevar** um website Next.js já existente e no ar, transformando-o numa presença digital premium que comunique autoridade, estratégia e posicionamento de marca.

**Repositório:** `klagency_website`
**Stack:** Next.js · TypeScript · Tailwind CSS · Vercel
**URL actual:** https://klagency-website.vercel.app
**URL oficial:** https://www.klagency.com

> ⚠️ ATENÇÃO CRÍTICA: Este NÃO é um projecto novo. O website já existe e está no ar.
> Não apague, não recrie do zero, não altere a estrutura de pastas sem necessidade.
> O trabalho é REFINAR o que existe, substituindo componentes e estilos por versões superiores.

---

## PROTOCOLO 0 — INICIALIZAÇÃO OBRIGATÓRIA

Antes de escrever qualquer código, criar os seguintes ficheiros na raiz do projecto:

### 1. `task_plan.md`
Conteúdo obrigatório:
- fases do refinamento
- objectivos de cada fase
- checklist de componentes a substituir
- estado de execução (pendente / em progresso / concluído)
- próximos passos

### 2. `findings.md`
Conteúdo obrigatório:
- decisões de design tomadas
- conflitos encontrados entre código antigo e novo
- riscos de regressão visual
- dúvidas pendentes
- observações importantes sobre o comportamento actual

### 3. `progress.md`
Conteúdo obrigatório:
- componentes já substituídos
- erros encontrados
- testes visuais feitos (desktop e mobile)
- resultado do build (`npm run build`)
- correções aplicadas

### 4. `klagency_constitution.md`
Este é o documento constitucional do projecto. Contém:
- regras de design inamovíveis
- paleta de cores oficial
- sistema tipográfico oficial
- invariantes de marca (o que nunca pode ser alterado)
- o que não deve ser modificado sem autorização

---

## REGRA PRINCIPAL

É proibido alterar o que funciona sem justificação.

O objectivo deste refinamento é provar isto:

> **Quando alguém entra no website, sente imediatamente que a KLAgency é uma empresa premium, estratégica e de autoridade — não apenas uma agência digital moderna.**

---

## FASE 0 — AS TRÊS CAMADAS (ORDEM OBRIGATÓRIA)

> Esta fase define o QUÊ antes do COMO.
> O Claude Code deve internalizar as 3 camadas antes de tocar em qualquer componente.
> A ordem não é sugestão — é lei. Camada 1 define a Camada 2. Camada 2 define a Camada 3.

```
CAMADA 1 → COPY        (o que o site diz)
CAMADA 2 → IDENTIDADE  (como o site aparece)
CAMADA 3 → IMAGENS     (o que o site mostra)
```

**Porquê esta ordem:**
Imagens novas em copy fraco = site bonito que não converte.
Identidade visual sem copy aprovado = design sem direcção.
Copy forte com identidade coerente e imagens reais = percepção premium.

---

### CAMADA 1 — COPY OFICIAL COMPLETO

Todo o texto do website está aprovado e é inamovível.
O Claude Code não inventa, não parafraseia, não "melhora" nenhum texto.
Se um texto não está aqui definido, regista em `findings.md` e aguarda confirmação.

---

#### NAVEGAÇÃO
```
Sobre · Serviços · Portfólio · Contacto
Botão CTA: Iniciar projecto →
```

---

#### HERO
```
TAG:        Estratégia · Posicionamento · Crescimento

HEADLINE:   Posicionamos marcas e líderes para dominar os seus mercados.
            ("dominar" — itálico, cor #93C5FD)

SUBTÍTULO:  Da identidade à estratégia. Do posicionamento ao domínio.
            Trabalhamos com marcas que querem liderar — não apenas existir.

CTA 1:      Falar com a KLAgency →
CTA 2:      Ver portfólio

STATS:      +100 Projectos entregues
            +20 Marcas posicionadas
            4 Pilares estratégicos
            100% Compromisso
```

---

#### MANIFESTO
```
LABEL:      O Nosso Manifesto

HEADLINE:   A KLAgency não cria campanhas. Constrói percepção.
            ("Constrói percepção." — itálico, cor #93C5FD)

CORPO:      Não vendemos serviços. Entregamos posicionamento.
            Cada marca que trabalhamos sai mais forte, mais clara
            e mais reconhecida.

            Começamos pela raiz — identidade, propósito e clareza —
            antes de falar em estratégia. Porque uma marca sem
            fundação é apenas barulho.

VALORES:
  Autoridade   → Construímos presença que antecede a conversa.
  Integridade  → Conexão honesta. Sem atalhos, sem promessas vazias.
  Excelência   → O padrão mínimo é o que o cliente ainda não espera.
  Inovação     → Estratégia que evolui com o mercado e o lidera.
```

---

#### SERVIÇOS
```
LABEL:      Serviços

HEADLINE:   Soluções estratégicas.
            Menos ruído. Mais direcção.
            ("Mais direcção." — itálico, cor #93C5FD)

SERVIÇO 01 — Posicionamento
  Título:   Definimos onde a sua marca compete — e como ganha.
  Desc:     Território, público e mensagem central.
            Clareza estratégica antes de qualquer execução.

SERVIÇO 02 — Estratégia de Marca
  Título:   Construímos o mapa. A sua marca para de reagir
            e começa a liderar.
  Desc:     Direção clara para decisões melhores. Do propósito
            à expressão — em todos os pontos de contacto.

SERVIÇO 03 — Growth
  Título:   Crescimento não é acidente. É arquitectura.
  Desc:     Tracção para marcas em movimento. Estruturas de escala
            sustentadas por estratégia real.

SERVIÇO 04 — Consultoria
  Título:   Trabalhamos ao lado de quem decide — com clareza,
            sem rodeios.
  Desc:     Apoio estratégico para líderes que querem crescer
            com intenção e dominar o seu sector.

SERVIÇO 05 — Marketing
  Título:   Comunicação que posiciona, não apenas que aparece.
  Desc:     Campanhas com função e resultado. Cada mensagem
            serve um propósito estratégico.

SERVIÇO 06 — Branding
  Título:   A sua marca precisa de ser reconhecida antes
            de ser explicada.
  Desc:     Sistema visual e verbal coerente. Identidade que
            comunica autoridade ao primeiro contacto.
```

---

#### CLIENTES / PROVA SOCIAL
```
LABEL:      Aprovado por organizações de excelência e grande renome.

CLIENTES (ticker):
  IP-MLNG · Bispo Kobbe · Nelson Santana · Serena Luz · ECU · Prosolar

DEPOIMENTO (estrutura obrigatória):
  "[Citação específica com resultado real — nunca elogio genérico]"
  — [Nome Completo], [Cargo] · [Empresa]

  ❌ RECUSAR: "A KLAgency é uma agência excelente."
  ✅ ACEITAR: "Em 3 meses, a nossa presença passou de invisível
               para referência no sector."

  Se não houver depoimento real aprovado → esconder secção
  e registar em findings.md. Nunca inventar.
```

---

#### CTA SECTION
```
TAG:        A sua próxima fase começa aqui

HEADLINE:   A sua marca não precisa de mais ruído.
            Precisa de direcção.
            ("Precisa de direcção." — itálico, cor #93C5FD)

SUBTÍTULO:  A sua próxima fase começa com uma conversa.

BOTÃO:      Iniciar conversa estratégica →
LINK:       https://wa.me/258852170974
```

---

#### CONTACTO
```
LABEL:      Contacto

HEADLINE:   Vamos criar a próxima conexão estratégica.

SUBTÍTULO:  Fale connosco para alinhar posicionamento,
            comunicação e crescimento.

CONTACTOS:
  Tel 1:    +258 852 170 974  (principal — WhatsApp)
  Tel 2:    +258 871 170 974  (alternativo)
  Email:    geral@klagency.com

BOTÕES:
  WhatsApp principal  → https://wa.me/258852170974
  Alternativo         → https://wa.me/258871170974
```

---

#### FOOTER
```
NOME:       KLAgency
SLOGAN:     Conexões que geram sucesso.

NAVEGAÇÃO:  Sobre · Serviços · Portfólio · Contacto

SERVIÇOS:   Posicionamento Estratégico · Estratégia de Marca ·
            Crescimento e Escala · Consultoria Executiva ·
            Marketing Estratégico · Identidade Corporativa

REDES:      Instagram → https://www.instagram.com/k.l_agency/
            LinkedIn  → https://www.linkedin.com/company/klagency/

CONTACTOS:  +258 852 170 974
            +258 871 170 974
            geral@klagency.com
            WhatsApp → https://wa.me/258852170974

COPYRIGHT:  © 2026 KLAgency. Todos os direitos reservados.
            www.klagency.com
```

---

#### TÍTULO DA PÁGINA (SEO)
```
<title>KLAgency — Estratégia, Posicionamento & Crescimento | Moçambique</title>

meta description:
"A KLAgency ajuda marcas e líderes a construir autoridade e crescer
com estratégia. Posicionamento, Branding e Consultoria em Moçambique."

meta keywords:
KLAgency, estratégia, posicionamento de marca, consultoria estratégica,
marketing, branding, agência Moçambique, crescimento, autoridade de marca
```

---

### CAMADA 2 — IDENTIDADE VISUAL OFICIAL

O ficheiro `klagency-design-system.jsx` é a **constituição visual** deste projecto.
Toda a implementação visual parte deste ficheiro — nunca de memória ou improviso.

#### Paleta oficial
```css
:root {
  --kl-blue-deep:    #00059B;
  --kl-blue-mid:     #0D1FA8;
  --kl-blue-bright:  #2563EB;
  --kl-navy:         #020617;
  --kl-navy-soft:    #050B3D;
  --kl-navy-glass:   rgba(2, 6, 23, 0.72);
  --kl-white:        #FFFFFF;
  --kl-soft-white:   #F8FAFC;
  --kl-silver:       #CBD5E1;
  --kl-muted:        #94A3B8;
  --kl-border:       rgba(255, 255, 255, 0.10);
  --kl-border-hover: rgba(255, 255, 255, 0.22);

  --kl-gradient:        linear-gradient(135deg, #020617 0%, #00059B 55%, #2563EB 100%);
  --kl-gradient-subtle: linear-gradient(160deg, #020617 0%, #050B3D 60%, #00059B 100%);
  --kl-gradient-card:   linear-gradient(135deg, rgba(5,12,58,0.80) 0%, rgba(0,5,155,0.30) 100%);
}
```

#### Tipografia oficial
| Camada | Fonte | Pesos | Uso |
|---|---|---|---|
| Display | `Playfair Display` | 400, 500, 600, 700, Italic | H1, H2, Logo, Quotes |
| Body/UI | `DM Sans` | 300, 400, 500, 600 | Corpo, Botões, Labels, Nav |

```tsx
// layout.tsx
import { Playfair_Display, DM_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  axes: ['opsz'],
});
```

#### Elementos de identidade obrigatórios
- **K watermark:** Playfair Display 700, ~30vw, opacidade 2.5% — Hero e CTA
- **Glass card:** `background: var(--kl-gradient-card)` + `backdrop-filter: blur(20px)` + `border: 1px solid var(--kl-border)`
- **Botão primário:** fundo branco, texto navy, DM Sans 600, hover com box-shadow azul
- **Botão ghost:** fundo transparente, borda var(--kl-border-hover), hover com fundo rgba branco 7%
- **Tag/pill:** fundo `rgba(37,99,235,0.15)`, borda `rgba(37,99,235,0.30)`, texto #93C5FD
- **Divider de secção:** 48px, 2px, gradiente azul → transparente

---

### CAMADA 3 — IMAGENS

#### Regra principal
❌ Nunca usar imagens Unsplash genéricas novas.
❌ Nunca usar stock photos que não representem África executiva.
✅ Aguardar imagens reais fornecidas pelo responsável.
✅ Enquanto as imagens reais não chegam — usar os placeholders definidos abaixo.

#### Directório de imagens do projecto
```
/public/
  logo/
    klagency-logo.svg         (logótipo oficial — branco para fundo escuro)
    klagency-logo-dark.svg    (logótipo oficial — escuro para fundo claro)
  clients/
    [nome-cliente].png        (logos dos clientes — aguardar ficheiros reais)
  portfolio/
    [nome-cliente].jpg        (fotos das pessoas — aguardar ficheiros reais)
  og/
    og-image.jpg              (imagem Open Graph — 1200x630px)
```

#### Placeholders enquanto imagens reais não chegam

| Secção | Placeholder | Instrução |
|---|---|---|
| Logo clientes (ticker) | Texto apenas | Não usar iniciais coloridas |
| Portfólio — logo | Initial placeholder navy + texto silver | Ex: quadrado navy com "IP" |
| Portfólio — foto pessoa | Não mostrar o campo | Nunca usar stock photo genérica |
| Hero — fundo | Gradiente `var(--kl-gradient)` | Não precisa de imagem |
| OG Image | Gerar com texto KLAgency + cor navy | Formato 1200x630px |

#### Estilo fotográfico quando imagens reais chegarem
O responsável deve fornecer imagens que representem:
- Executivos e líderes africanos em contexto profissional
- Reuniões corporativas reais
- Ambiente de estratégia e negócio
- Estética premium, não stock genérico

❌ Evitar: crianças, pobreza, stock americano/europeu genérico
✅ Preferir: liderança africana moderna, corporativo, autoridade

---

## DESIGN SYSTEM OFICIAL — FONTE DA VERDADE

O ficheiro `klagency-design-system.jsx` é a **constituição visual** deste projecto.
Lê-lo na íntegra antes de implementar qualquer componente visual.

---

## NOME OFICIAL DA MARCA

**KLAgency** — sempre assim, sem excepção.

❌ NUNCA usar: KL Agency · Agência KL · KL Agência · KLAGENCY (em corpo de texto)
✅ SEMPRE usar: KLAgency

Em contextos de logótipo (header, footer, título da página), pode usar **KLAGENCY** apenas como tratamento gráfico do símbolo.

---

## FASE 1 — GLOBALS E LAYOUT

### Objectivo
Estabelecer a base visual: fontes, variáveis CSS, reset.

### Ficheiros a modificar
- `app/globals.css`
- `app/layout.tsx`
- `tailwind.config.ts`

### Acções obrigatórias

**`globals.css`** — importar CSS Variables e GLOBAL_CSS do `klagency-design-system.jsx`

**`layout.tsx`** — configurar Google Fonts via `next/font` (ver Camada 2)

**`tailwind.config.ts`** — estender theme:
```js
fontFamily: {
  display: ['var(--font-display)', 'Georgia', 'serif'],
  body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
},
colors: {
  'kl-blue-deep':   '#00059B',
  'kl-blue-bright': '#2563EB',
  'kl-navy':        '#020617',
  'kl-navy-soft':   '#050B3D',
  'kl-silver':      '#CBD5E1',
  'kl-muted':       '#94A3B8',
}
```

### Critério de conclusão
`npm run build` sem erros. Fontes Playfair Display e DM Sans visíveis em dev.

---

## FASE 2 — COMPONENTE: HEADER / NAVEGAÇÃO

### Ficheiro: `components/Header.tsx`

### Comportamento obrigatório
- Transparente no topo da página
- Scroll > 40px: `background: rgba(2,6,23,0.92)` + `backdrop-filter: blur(20px)` + `border-bottom: 1px solid rgba(255,255,255,0.07)`
- Transição: `transition: all 0.3s ease`

### Conteúdo (ver Camada 1 — Navegação)
- Logo KLAgency (K quadrado + texto)
- Links: Sobre · Serviços · Portfólio · Contacto
- Botão: "Iniciar projecto →" → https://wa.me/258852170974

### Invariante
O header nunca tem fundo sólido escuro fixo — apenas ao scroll.

---

## FASE 3 — COMPONENTE: HERO

### Ficheiro: `components/Hero.tsx`

### Copy: ver Camada 1 — Hero (inamovível)

### Elementos visuais (ver Camada 2)
1. Fundo: `var(--kl-gradient)`
2. K watermark: Playfair Display 700, ~30vw, opacidade 2.5%, direita
3. Tag pill com ponto animado
4. Stats row com os 4 indicadores
5. Animações fadeUp escalonadas (delays: 0 / 0.12s / 0.24s / 0.38s / 0.52s)

### Imagens: ver Camada 3 — Hero não precisa de imagem (usa gradiente)

### Acção crítica
❌ Remover completamente a secção "O que nos define" com textos em inglês.

---

## FASE 4 — COMPONENTE: MANIFESTO

### Ficheiro: `components/Manifesto.tsx`

### Copy: ver Camada 1 — Manifesto (inamovível)

### Layout
- Grid 2 colunas: texto à esquerda, 4 valores em grid 2x2 à direita
- Fundo: `var(--kl-navy-soft)`
- Valores em glass cards

---

## FASE 5 — COMPONENTE: SERVIÇOS

### Ficheiro: `components/Services.tsx`

### Copy: ver Camada 1 — Serviços (6 serviços, inamovível)

### Layout
- Grid 2x3 com bordas `var(--kl-border)`
- Card activo: `rgba(37,99,235,0.12)`
- Número de série + tag de categoria por card
- Descrição expande ao hover/click
- Fundo: `var(--kl-navy)`

---

## FASE 6 — COMPONENTE: CARROSSEL DE CLIENTES

### Ficheiro: `components/ClientsTicker.tsx`

### Copy: ver Camada 1 — Clientes

### Comportamento
- Ticker automático direita → esquerda
- `animation: scrollLeft 22s linear infinite`
- Itens duplicados para loop contínuo sem salto

### Imagens: ver Camada 3 — Clientes
❌ Não usar iniciais coloridas como substituto de logos.
✅ Texto apenas até haver logos reais em `/public/clients/`.

---

## FASE 7 — COMPONENTE: PORTFÓLIO

### Ficheiro: `components/Portfolio.tsx`

### Estrutura de cada item
```tsx
interface PortfolioItem {
  client:       string;   // Nome completo
  logoSrc?:     string;   // /public/clients/nome.png
  personPhoto?: string;   // /public/portfolio/nome.jpg
  category:     string;   // Ex: "Branding · Posicionamento"
  description:  string;   // Descrição do projecto
  result:       string;   // Resultado ou impacto mensurável
}
```

### Imagens: ver Camada 3 — Portfólio
- Sem logo real → placeholder navy com inicial
- Sem foto real → não mostrar campo
- Sem resultado real → registar em `findings.md` e aguardar

---

## FASE 8 — COMPONENTE: CTA

### Ficheiro: `components/CTA.tsx`

### Copy: ver Camada 1 — CTA Section (inamovível)

### Visual
- Fundo: `var(--kl-gradient-subtle)`
- K watermark à esquerda, opacidade 2%
- Texto centrado, máximo 760px

---

## FASE 9 — COMPONENTE: DEPOIMENTO

### Ficheiro: `components/Testimonial.tsx`

### Copy: ver Camada 1 — Clientes / Depoimento

### Regra crítica
Não inventar citações. Sem depoimento real aprovado → esconder secção.

---

## FASE 10 — COMPONENTE: FOOTER

### Ficheiro: `components/Footer.tsx`

### Copy: ver Camada 1 — Footer (inamovível)

### Visual
- Fundo: `#010412`
- Borda superior: `1px solid var(--kl-border)`
- Nome em Playfair Display 600
- Slogan em DM Sans itálico

---

## FASE 11 — QUALIDADE E RESPONSIVIDADE

### Breakpoints obrigatórios

| Breakpoint | Largura | Comportamento crítico |
|---|---|---|
| Mobile S | 375px | Headline não quebra; botões full-width |
| Mobile L | 428px | Grid serviços → 1 coluna |
| Tablet | 768px | Nav mantém links; grid 2 colunas |
| Desktop | 1280px | Layout completo |

### Checklist visual
- [ ] Fontes Playfair Display + DM Sans visíveis
- [ ] Textos em inglês no Hero: REMOVIDOS
- [ ] "KLAgency" consistente em todo o site
- [ ] K watermark no Hero e CTA
- [ ] Carrossel sem saltos
- [ ] Header transparente no topo, blur ao scroll
- [ ] Todos os CTAs → WhatsApp correcto
- [ ] `npm run build` sem erros
- [ ] Deploy Vercel activo

---

## FASE 12 — O QUE NÃO FAZER

❌ Não recriar o projecto do zero
❌ Não alterar estrutura de rotas sem necessidade
❌ Não adicionar dependências npm sem aprovação
❌ Não usar Inter, Roboto ou Arial
❌ Não usar gradientes purple/neon
❌ Não usar imagens Unsplash genéricas novas
❌ Não inventar depoimentos, resultados ou textos
❌ Não alterar copy sem aprovação
❌ Não misturar português e inglês
❌ Não usar "Agência KL", "KL Agency" ou variantes
❌ Não alterar links de WhatsApp

---

## INVARIANTES DA MARCA — NUNCA ALTERAR SEM AUTORIZAÇÃO

1. **Cor principal:** `#00059B`
2. **Nome:** KLAgency
3. **Slogan:** "Conexões que geram sucesso."
4. **Fontes:** Playfair Display + DM Sans
5. **Gradiente:** `linear-gradient(135deg, #020617 0%, #00059B 55%, #2563EB 100%)`
6. **Headline hero:** "Posicionamos marcas e líderes para dominar os seus mercados."
7. **Manifesto:** "A KLAgency não cria campanhas. Constrói percepção."
8. **WhatsApp principal:** +258 852 170 974

---

## CHECKLIST FINAL DE APROVAÇÃO

- [ ] Camada 1: copy oficial implementado em todos os componentes
- [ ] Camada 2: Design System activo (fontes, cores, gradientes)
- [ ] Camada 3: sem imagens Unsplash genéricas; placeholders correctos
- [ ] Fontes Playfair Display + DM Sans activas
- [ ] Secção em inglês removida
- [ ] Manifesto implementado
- [ ] 6 serviços com copy executivo
- [ ] "KLAgency" consistente em todo o site
- [ ] K watermark no Hero e CTA
- [ ] Header com blur ao scroll
- [ ] Ticker de clientes sem saltos
- [ ] CTA com copy e link correcto
- [ ] Footer completo
- [ ] Mobile 375px → Desktop 1440px testado
- [ ] `npm run build` sem erros
- [ ] Deploy Vercel activo
- [ ] Responsável confirma aprovação visual

---

## REGRA DE OURO

Sempre que houver dúvida, não inventar.
Registar em `findings.md` e aguardar confirmação.

**Critério de aprovação final:**
> *"Quando o responsável entra no site e sente imediatamente que a KLAgency é séria, premium e estratégica — o trabalho está concluído."*

---

## REFERÊNCIAS VISUAIS

| Referência | O que extrair |
|---|---|
| ogilvy.com | Sofisticação, espaço negativo, tipografia editorial, autoridade |
| dintell.co.mz | Animações, carrosséis, transições, comportamento mobile |
| klagency-design-system.jsx | **Fonte primária** — paleta, tipografia, copy, componentes |

---

*Versão: 2.0 · Projecto: KLAgency Website · Stack: Next.js + Vercel*
*Actualização: Fase 0 adicionada — 3 Camadas (Copy · Identidade · Imagens)*
*Design System: klagency-design-system.jsx*
