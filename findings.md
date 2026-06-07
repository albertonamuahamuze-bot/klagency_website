# FINDINGS — KLAgency Website

**Projecto:** KLAgency Website  
**Protocolo:** V.R.E.F.I.N.A.R. v2.0  

---

## CONFLITOS ENTRE CÓDIGO ACTUAL E DESIGN SYSTEM

### CONFLITO 1 — Fontes (CRÍTICO)
**Actual:** Inter + Nunito + DM Serif Display + Plus Jakarta Sans  
**Design System:** Playfair Display (display) + DM Sans (body/UI)  
**Decisão:** Substituir todas por Playfair Display + DM Sans conforme protocolo.  
**Risco:** Regressão visual em todos os componentes que usem `font-family` inline ou via variáveis antigas.  
**Estado:** ⬜ Pendente resolução na Fase 1

### CONFLITO 2 — Cor principal (MENOR)
**Actual:** `#00059D` (globals.css `--color-kl-blue`)  
**Design System:** `#00059B` (protocolo `--kl-blue-deep`)  
**Decisão:** Usar `#00059B` conforme Design System.  
**Nota:** Diferença de 2 pontos em hexadecimal — imperceptível visualmente mas deve ser consistente.  
**Estado:** ⬜ Pendente resolução na Fase 1

### CONFLITO 3 — Estrutura de cores (CRÍTICO)
**Actual:** Tailwind v4 com `@theme { --color-kl-blue, --color-kl-navy, ... }` (fundo claro `#F6F9FC`)  
**Design System:** CSS Variables `--kl-*` com fundo dark navy `#020617`  
**Decisão:** O Design System usa tema escuro (dark navy). O site actual usa fundo claro (`#F6F9FC`).  
**Risco:** Mudança de paradigma claro → escuro afecta TODOS os componentes.  
**Estado:** ⬜ AGUARDAR CONFIRMAÇÃO — esta é uma mudança de paradigma visual completa

### CONFLITO 4 — Animações existentes (Framer Motion)
**Actual:** Progress bars, ícones flutuantes, accordion, ConversionPopup — todos implementados com Framer Motion na sessão anterior.  
**Design System:** Animações CSS puras (`fadeUp`, `scrollLeft`, `shimmer`)  
**Decisão:** Manter Framer Motion (já instalado, funcional). Adicionar classes CSS do Design System como complemento.  
**Estado:** ⬜ Pendente verificação fase a fase

### CONFLITO 5 — Variável `--font-display` (CRÍTICO)
**Actual:** `--font-display: var(--font-dm-serif)` (DM Serif Display)  
**Design System:** `--font-display: 'Playfair Display', Georgia, serif`  
**Decisão:** Substituir por Playfair Display conforme protocolo.  
**Estado:** ⬜ Pendente resolução na Fase 1

---

## DÚVIDAS PENDENTES

### DÚVIDA 1 — Tema claro vs escuro ✅ RESOLVIDO
O site actual tem fundo claro (`#F6F9FC`). O Design System define fundo dark navy (`#020617`).  
**Decisão do responsável:** Adoptar tema escuro em TODOS os componentes. Fundo `#020617` (navy). A mudança é intencional — o tema claro actual é o que está a ser substituído para atingir percepção premium.  
**Estado:** ✅ Resolvido — implementar na Fase 1

### DÚVIDA 2 — Componentes actuais a preservar
Foram implementados na sessão anterior: `About.tsx` (progress bars), `Pillars.tsx` (ícones animados), `Contact.tsx` (accordion), `ConversionPopup.tsx`.  
**Questão:** Estes componentes são substituídos pelo Design System (Manifesto, Services, CTA) ou integrados?  
**Estado:** ⬜ AGUARDAR CONFIRMAÇÃO — registado em task_plan.md

### DÚVIDA 3 — Depoimentos reais
Não existe depoimento real aprovado no protocolo.  
**Decisão aplicada:** Esconder secção de depoimentos até dados reais serem fornecidos.  
**Estado:** ⬜ Aguardar depoimento real

### DÚVIDA 4 — Logos e imagens de clientes
Não existem ficheiros em `/public/clients/` ou `/public/portfolio/`.  
**Decisão aplicada:** Ticker de clientes com texto apenas (IP-MLNG, Bispo Kobbe, etc.).  
**Estado:** ⬜ Aguardar ficheiros reais do responsável

### DÚVIDA 5 — Header existente
Não foi confirmado se existe `components/Header.tsx` no projecto actual.  
**Estado:** ⬜ Verificar na Fase 2

---

## DECISÕES DE DESIGN TOMADAS

| # | Decisão | Justificação |
|---|---|---|
| D1 | Fontes: Playfair Display + DM Sans | Protocolo inamovível |
| D2 | Cor principal: `#00059B` | Design System oficial |
| D3 | K watermark: opacidade 2.5%, Playfair Display 700 | Design System |
| D4 | Sem imagens Unsplash novas | Protocolo proíbe |
| D5 | Sem depoimentos inventados | Protocolo proíbe |
| D6 | Ticker: texto apenas até logos reais | Protocolo Camada 3 |
| D7 | Link WhatsApp principal: `https://wa.me/258852170974` | Invariante de marca |
| D8 | "dominar" em itálico `#93C5FD` no Hero headline | Copy oficial Camada 1 |

---

## RISCOS DE REGRESSÃO VISUAL

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Quebra de layout ao mudar fontes | Alta | Testar cada componente após Fase 1 |
| Contraste insuficiente no tema escuro | Média | Verificar texto sobre `#020617` |
| Carrossel/ticker com saltos após CSS | Média | Testar `scrollLeft` animation |
| ConversionPopup com z-index conflito | Baixa | Manter `z-50` actual |
| Framer Motion + CSS animations em conflito | Baixa | Usar classes CSS apenas para entrada, Framer para interacção |

---

## OBSERVAÇÕES DO COMPORTAMENTO ACTUAL

- Servidor corre em `http://localhost:3000` com HTTP 200
- `npx tsc --noEmit` passou sem erros na sessão anterior
- Aviso no browser: "Please ensure that the container has a non-static position" (scroll offset — não crítico)
- O site já tem: marquee de logos, secção de pilares, formulário de contacto com accordion, popup de conversão

---

## ELEVAÇÃO L99 — AUDITORIA GREP (Passo 10)

### KKLAgency — LIMPO ✅
Nenhuma ocorrência em `components/` ou `app/`.

### Textos em inglês — COMPONENTES LEGACY (inactivos)
`lib/site-content.ts` contém "Innovation with Excellence", "Sustainable Solutions", "High-performance Results".
Importado por `Pillars.tsx` e `LogoMarquee.tsx` — **não activos em `app/page.tsx`**.
Ação futura: converter copy para português antes de reactivar.

### Cores de tema claro (#F6F9FC, #EEF4FB, #101828) — COMPONENTES LEGACY
Encontrado em: `About.tsx`, `Pillars.tsx`, `LogoMarquee.tsx`, `ConversionPopup.tsx`.
Nenhum activo na homepage. Ação futura: converter para paleta oficial.

### "KL Agency" com espaço — COMPONENTES LEGACY
Encontrado em: `Differentials.tsx` (2×), `CinematicSection.tsx` (2×).
Não activos em `app/page.tsx`. Ação futura: corrigir para "KLAgency" antes de reactivar.

### Testimonial — Aguarda dados reais
`components/Testimonial.tsx` retorna `null` (array vazio). Fornecer citações, nomes, cargos e fotos reais para activar.

---

*Última actualização: L99 Elevação — 2026-06-07*
