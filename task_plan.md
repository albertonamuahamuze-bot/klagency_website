# TASK PLAN — KLAgency Website Refinamento

**Projecto:** KLAgency Website  
**Stack:** Next.js · TypeScript · Tailwind CSS v4 · Framer Motion · Vercel  
**URL actual:** https://klagency-website.vercel.app  
**Protocolo:** V.R.E.F.I.N.A.R. v2.0  

---

## REGRA DE EXECUÇÃO

Ordem obrigatória: **Camada 1 (Copy) → Camada 2 (Identidade) → Camada 3 (Imagens)**  
Após cada fase: executar `npm run build`, reportar resultado, aguardar confirmação.

---

## FASES DO REFINAMENTO

### FASE 0 — Inicialização ✅ EM PROGRESSO
**Objectivo:** Criar documentação de protocolo antes de tocar em código.  
- [x] Ler PROTOCOLO_KLAGENCY_WEBSITE.md  
- [x] Ler klagency-design-system.jsx  
- [x] Criar task_plan.md  
- [x] Criar findings.md  
- [x] Criar progress.md  
- [x] Criar klagency_constitution.md  

---

### FASE 1 — Globals e Layout ⬜ PENDENTE
**Objectivo:** Estabelecer base visual — fontes, variáveis CSS, reset.  
**Ficheiros:** `app/globals.css` · `app/layout.tsx`  

Acções:
- [ ] Substituir fontes actuais por **Playfair Display** (display) + **DM Sans** (body/UI)
- [ ] Remover fontes desnecessárias: Inter, Nunito, Plus Jakarta Sans
- [ ] Manter DM Serif Display apenas se confirmado (conflito — ver findings.md)
- [ ] Adicionar CSS Variables do Design System (`--kl-*`) ao globals.css
- [ ] Adicionar classes utilitárias: `.kl-display`, `.kl-heading`, `.kl-body`, `.kl-label`, `.kl-tag`, `.kl-glass`, `.kl-btn-primary`, `.kl-btn-ghost`, `.kl-divider`
- [ ] Adicionar keyframes: `fadeUp`, `shimmer`, `scrollLeft`
- [ ] Configurar `@theme` no Tailwind com variáveis `--kl-*`
- [ ] Actualizar `<html>` className com variáveis de fonte correctas
- [ ] `npm run build` sem erros

---

### FASE 2 — Header / Navegação ⬜ PENDENTE
**Objectivo:** Header transparente no topo, blur ao scroll.  
**Ficheiro:** `components/Header.tsx`  

Acções:
- [ ] Transparente no topo
- [ ] Scroll > 40px: `rgba(2,6,23,0.92)` + `blur(20px)` + `border-bottom`
- [ ] Logo: quadrado K `#00059B` + "KLAgency" em DM Sans 600
- [ ] Links: Sobre · Serviços · Portfólio · Contacto
- [ ] Botão CTA: "Iniciar projecto →" → `https://wa.me/258852170974`
- [ ] `npm run build` sem erros

---

### FASE 3 — Hero ⬜ PENDENTE
**Objectivo:** Hero com gradiente, K watermark, copy oficial, stats.  
**Ficheiro:** `components/Hero.tsx`  

Acções:
- [ ] Fundo: `var(--kl-gradient)`
- [ ] K watermark: Playfair Display 700, ~30vw, opacidade 2.5%, direita
- [ ] Tag pill com ponto animado: "Estratégia · Posicionamento · Crescimento"
- [ ] Headline exacto com "dominar" em itálico `#93C5FD`
- [ ] Subtítulo exacto
- [ ] CTA: "Falar com a KLAgency →" + "Ver portfólio"
- [ ] Stats: +100 Projectos · +20 Marcas · 4 Pilares · 100% Compromisso
- [ ] Animações fadeUp escalonadas (delays: 0 / 0.12s / 0.24s / 0.38s / 0.52s)
- [ ] **REMOVER** secção "O que nos define" com textos em inglês
- [ ] `npm run build` sem erros

---

### FASE 4 — Manifesto ⬜ PENDENTE
**Objectivo:** Secção de manifesto com copy oficial e valores em glass cards.  
**Ficheiro:** `components/Manifesto.tsx`  

Acções:
- [ ] Grid 2 colunas: texto esquerda, valores 2x2 direita
- [ ] Fundo: `var(--kl-navy-soft)`
- [ ] Headline: "A KLAgency não cria campanhas. *Constrói percepção.*"
- [ ] 4 valores em glass cards: Autoridade · Integridade · Excelência · Inovação
- [ ] `npm run build` sem erros

---

### FASE 5 — Serviços ⬜ PENDENTE
**Objectivo:** Grid 2x3 com os 6 serviços oficiais e copy executivo.  
**Ficheiro:** `components/Services.tsx`  

Acções:
- [ ] Grid 2x3 com bordas `var(--kl-border)`
- [ ] Card activo: `rgba(37,99,235,0.12)`
- [ ] Número de série + tag de categoria
- [ ] Descrição expande ao hover/click
- [ ] Fundo: `var(--kl-navy)`
- [ ] Copy exacto dos 6 serviços (ver protocolo)
- [ ] `npm run build` sem erros

---

### FASE 6 — Ticker de Clientes ⬜ PENDENTE
**Objectivo:** Ticker automático com clientes — sem iniciais coloridas.  
**Ficheiro:** `components/ClientsTicker.tsx`  

Acções:
- [ ] Scroll direita → esquerda, `22s linear infinite`
- [ ] Clientes: IP-MLNG · Bispo Kobbe · Nelson Santana · Serena Luz · ECU · Prosolar
- [ ] Texto apenas (sem logos até ficheiros reais chegarem)
- [ ] `npm run build` sem erros

---

### FASE 7 — Portfólio ⬜ PENDENTE
**Objectivo:** Secção de portfólio com placeholders correctos.  
**Ficheiro:** `components/Portfolio.tsx`  

Acções:
- [ ] Sem logo real → placeholder navy com inicial
- [ ] Sem foto pessoa → campo não mostrado
- [ ] Sem resultado real → registar em findings.md e aguardar
- [ ] `npm run build` sem erros

---

### FASE 8 — CTA Section ⬜ PENDENTE
**Objectivo:** CTA com gradiente subtil, K watermark, copy oficial.  
**Ficheiro:** `components/CTA.tsx`  

Acções:
- [ ] Fundo: `var(--kl-gradient-subtle)`
- [ ] K watermark à esquerda, opacidade 2%
- [ ] Copy exacto da CTA Section
- [ ] Link: `https://wa.me/258852170974`
- [ ] `npm run build` sem erros

---

### FASE 9 — Depoimento ⬜ PENDENTE
**Objectivo:** Depoimento real ou secção escondida.  
**Ficheiro:** `components/Testimonial.tsx`  

Acções:
- [ ] Verificar se existe depoimento real aprovado
- [ ] Sem depoimento real → esconder secção
- [ ] Registar estado em findings.md

---

### FASE 10 — Footer ⬜ PENDENTE
**Objectivo:** Footer completo com copy oficial.  
**Ficheiro:** `components/Footer.tsx`  

Acções:
- [ ] Fundo: `#010412`
- [ ] Nome: Playfair Display 600
- [ ] Slogan: "Conexões que geram sucesso." em DM Sans itálico
- [ ] Navegação, serviços, redes sociais, contactos, copyright
- [ ] `npm run build` sem erros

---

### FASE 11 — Qualidade e Responsividade ⬜ PENDENTE
**Objectivo:** Verificação final em todos os breakpoints.  

Breakpoints obrigatórios:
- [ ] Mobile S 375px
- [ ] Mobile L 428px
- [ ] Tablet 768px
- [ ] Desktop 1280px

Checklist final:
- [ ] Playfair Display + DM Sans visíveis
- [ ] Textos em inglês no Hero removidos
- [ ] "KLAgency" consistente
- [ ] K watermark no Hero e CTA
- [ ] Ticker sem saltos
- [ ] Header transparente/blur funcional
- [ ] Todos os CTAs → WhatsApp correcto
- [ ] `npm run build` sem erros
- [ ] Deploy Vercel activo

---

## COMPONENTES A SUBSTITUIR

| Componente actual | Substituto / Acção | Estado |
|---|---|---|
| `app/layout.tsx` | Fontes: Playfair Display + DM Sans | ⬜ Pendente |
| `app/globals.css` | CSS Variables + classes Design System | ⬜ Pendente |
| `components/Hero.tsx` | Hero com gradiente + K watermark + copy oficial | ⬜ Pendente |
| `components/About.tsx` | Verificar se subsiste ou é substituído por Manifesto | ⬜ Pendente |
| `components/Pillars.tsx` | Verificar se é mantido ou substituído por Services | ⬜ Pendente |
| `components/Contact.tsx` | Contacto com copy oficial | ⬜ Pendente |
| `components/ConversionPopup.tsx` | Manter (animação Dintell) | ⬜ Pendente |
| Header (existente?) | `components/Header.tsx` com blur ao scroll | ⬜ Pendente |

---

*Última actualização: Protocolo 0 — aguardar confirmação para Fase 1*
