# PLANO DE MODELAÇÃO VISUAL — DINTELL → KLAGENCY
# Baseado na análise técnica completa das 5 páginas do dintell.co.mz
# Princípio: extrair a LINGUAGEM VISUAL, manter a IDENTIDADE KLAgency

---

Vais modelar o website KLAgency com a linguagem visual extraída
do site de referência dintell.co.mz — adaptada à identidade
azul premium da KLAgency.

Lê este documento completo antes de escrever qualquer código.

> ⚠️ REGRAS ABSOLUTAS — INTOCÁVEIS:
> - Paleta KLAgency: #00059B, #020617, #050B3D, #2563EB — NUNCA usar laranja
> - Fontes: Playfair Display + DM Sans — NUNCA mudar
> - Copy oficial — NUNCA alterar
> - Tema escuro mantém-se — NUNCA converter para tema claro
> - Após cada fase: npm run build + reportar

---

## O QUE EXTRAÍMOS DO DINTELL — DNA VISUAL

A análise das 5 páginas revelou 8 decisões de design que criam
a percepção premium do Dintell. Vamos adoptar TODAS, adaptadas:

| # | DNA Dintell | Adaptação KLAgency |
|---|---|---|
| 1 | Ritmo vertical de 75px entre secções | Adoptar 75px exacto |
| 2 | Letter-spacing -2px nos títulos | Adoptar -0.02em a -0.03em |
| 3 | Line-height 1.0-1.1 títulos / 1.8 body | Adoptar exacto |
| 4 | Botões pill border-radius 50px | Adoptar — substituir os 12px actuais |
| 5 | Gradiente animado no botão primário | Adoptar com azuis KLAgency |
| 6 | Faixa fina de CTA (98px) entre secções | Criar versão KLAgency |
| 7 | Hero de página interna 56px centrado | Para futuras páginas |
| 8 | Hierarquia: 48 → 39 → 35 → 18 → 16px | Adoptar escala exacta |

---

## FASE 1 — SISTEMA TIPOGRÁFICO (ESCALA DINTELL)

### Actualizar globals.css com a escala exacta

```css
/* ─── ESCALA TIPOGRÁFICA DINTELL ADAPTADA ─── */

.kl-display {
  font-family: var(--font-display);
  font-weight: 600;
  font-size: clamp(2.6rem, 5.5vw, 3rem);    /* ~48px máx */
  line-height: 1.0;                           /* Dintell: 1.0 */
  letter-spacing: -0.03em;                    /* Dintell: -2px */
}

.kl-heading {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.9rem, 3.5vw, 2.45rem);  /* ~39px máx */
  line-height: 1.11;                          /* Dintell: 1.11 */
  letter-spacing: -0.025em;
}

.kl-heading-sm {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.6rem, 3vw, 2.2rem);     /* ~35px máx */
  line-height: 1.0;
  letter-spacing: -0.025em;
}

.kl-subheading {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 1.125rem;                        /* 18px — Dintell lead */
  line-height: 1.61;                          /* 29px/18px */
  letter-spacing: 0;
  color: var(--kl-silver);
}

.kl-body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1rem;                            /* 16px */
  line-height: 1.81;                          /* Dintell: 29px/16px */
  color: var(--kl-silver);
}

.kl-label {
  font-family: var(--font-body);
  font-weight: 700;                           /* Dintell: 700 */
  font-size: 0.75rem;                         /* 12px */
  letter-spacing: 0.08em;                     /* 1px aprox */
  text-transform: uppercase;
  color: #60A5FA;                             /* azul claro KLAgency */
}
```

---

## FASE 2 — RITMO VERTICAL DE 75px

### Padronizar TODAS as secções com a unidade Dintell

```css
/* ─── RITMO VERTICAL DINTELL ─── */
.kl-section {
  padding-top: 75px;
  padding-bottom: 75px;
}

.kl-section-hero {
  min-height: 100vh;       /* Hero: full screen como Dintell */
  padding: 0;
}

.kl-section-compact {
  padding-top: 45px;        /* Dintell: testemunhos 45px top */
  padding-bottom: 75px;
}
```

Aplicar em TODOS os componentes:
- About: 75px / 75px
- Manifesto: 75px / 75px
- Services: 75px / 75px
- Ticker: 45px / 45px (faixa compacta)
- Portfolio: 75px / 75px
- CTA: 75px / 75px
- Contact: 75px / 75px

Remover qualquer padding 6rem (96px) ou 4rem actual — substituir por 75px.

---

## FASE 3 — BOTÕES PILL COM GRADIENTE ANIMADO

### O DNA mais distintivo do Dintell

```css
/* ─── BOTÃO PRIMÁRIO PILL — GRADIENTE ANIMADO ─── */
.kl-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 18px 36px;                /* Dintell: altura 66px total */
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1rem;                    /* 16px como Dintell */
  letter-spacing: 0.02em;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 50px;                /* PILL — Dintell */
  cursor: pointer;

  /* Gradiente triplo animado — adaptado aos azuis KLAgency */
  background: linear-gradient(to right, #2563EB, #00059B, #2563EB);
  background-size: 200% auto;
  transition: background-position 0.5s ease, transform 0.22s ease,
              box-shadow 0.22s ease;
}

.kl-btn-primary:hover {
  background-position: right center;  /* varrimento do gradiente */
  transform: translateY(-2px);
  box-shadow: 0 16px 48px rgba(37, 99, 235, 0.4);
}

/* ─── BOTÃO GHOST PILL ─── */
.kl-btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 17px 34px;                 /* Dintell: 64px altura */
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.4);   /* Dintell exacto */
  border-radius: 50px;                /* PILL */
  cursor: pointer;
  transition: all 0.25s ease;
}

.kl-btn-ghost:hover {
  background: rgba(255,255,255,0.08);
  border-color: rgba(255,255,255,0.7);
}

/* ─── BOTÃO PEQUENO (navbar) ─── */
.kl-btn-small {
  padding: 10px 20px;                 /* Dintell: 42px altura */
  font-size: 0.82rem;                 /* 13px */
  font-weight: 500;
  border-radius: 50px;
  border: 1px solid rgba(255,255,255,0.25);
  background: transparent;
  color: #fff;
  transition: all 0.25s ease;
}

.kl-btn-small:hover {
  background: rgba(255,255,255,0.1);
}

/* ─── TAGS/BADGES PILL ─── */
.kl-tag {
  padding: 5px 15px;                  /* Dintell exacto */
  font-size: 0.69rem;                 /* 11px */
  font-weight: 500;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
```

Substituir TODOS os botões actuais (border-radius 8-12px) pelos pill.

---

## FASE 4 — FAIXA CTA FINA (98px) — DNA DINTELL

### Criar componente novo: components/CTABand.tsx

O Dintell usa uma banda fina de 98px entre secções como
separador-CTA. Adoptar com identidade KLAgency:

```tsx
'use client';
import { WHATSAPP_PRIMARY } from '@/lib/constants';

export default function CTABand() {
  return (
    <section style={{
      height: 98,
      background: 'var(--kl-blue-deep)',     /* #00059B sólido */
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.6rem',
      padding: '0 2rem',
      flexWrap: 'wrap',
    }}>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1.05rem',
        fontWeight: 500,
        color: 'rgba(255,255,255,0.85)',
      }}>
        <em style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          color: '#93C5FD',                    /* destaque azul claro */
          fontWeight: 600,
        }}>Excelência</em>
        {' '}é o coração de tudo o que fazemos. Prometido!
      </span>
      <a href={WHATSAPP_PRIMARY} style={{
        fontFamily: 'var(--font-body)',
        fontSize: '1.05rem',
        fontWeight: 600,
        color: '#fff',
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
      }}>
        Fale connosco agora
      </a>
    </section>
  );
}
```

Posicionar em `app/page.tsx` entre Services e Ticker
(como o Dintell faz entre Solutions e Testemunhos).

---

## FASE 5 — PROCESSO EM 3 PASSOS (DNA da página Services)

### Criar componente novo: components/Process.tsx

O Dintell tem um diferenciador forte: processo numerado 01/02/03.
Criar versão KLAgency:

```tsx
'use client';
import { FadeUpScroll, StaggerScroll, StaggerScrollItem } from './AnimateOnScroll';

const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico e Clareza',
    desc: 'Compreendemos a marca, o mercado e o território onde pode vencer. Sem clareza, não há estratégia.',
  },
  {
    number: '02',
    title: 'Estratégia e Posicionamento',
    desc: 'Definimos o caminho — mensagem central, percepção desejada e plano de domínio do mercado.',
  },
  {
    number: '03',
    title: 'Execução e Refinamento',
    desc: 'Implementamos com precisão e refinamos com base em resultados reais. Sem achismos.',
  },
];

export default function Process() {
  return (
    <section style={{
      background: 'var(--kl-navy)',
      paddingTop: 75,
      paddingBottom: 75,
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <FadeUpScroll style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="kl-label" style={{ marginBottom: '1rem' }}>
            Como construímos coisas extraordinárias
          </div>
          <h2 className="kl-heading" style={{ color: '#fff', maxWidth: 640, margin: '0 auto' }}>
            O processo vencedor por trás das nossas{' '}
            <em style={{ color: '#93C5FD', fontStyle: 'italic' }}>soluções.</em>
          </h2>
        </FadeUpScroll>

        {/* 3 passos */}
        <StaggerScroll style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
        }}>
          {STEPS.map((step) => (
            <StaggerScrollItem key={step.number}>
              <div style={{ padding: '1rem 0' }}>
                {/* Número grande */}
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '3.5rem',
                  lineHeight: 1,
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(147,197,253,0.5)',
                  marginBottom: '1.2rem',
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '1.15rem',
                  color: '#fff',
                  marginBottom: '0.7rem',
                  letterSpacing: '-0.01em',
                }}>
                  {step.title}
                </h3>
                <p className="kl-body" style={{ fontSize: '0.92rem' }}>
                  {step.desc}
                </p>
              </div>
            </StaggerScrollItem>
          ))}
        </StaggerScroll>

        {/* Destaque experiência — como o Dintell "10+ years" */}
        <FadeUpScroll delay={0.3} style={{
          textAlign: 'center',
          marginTop: '4rem',
          paddingTop: '3rem',
          borderTop: '1px solid var(--kl-border)',
        }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            color: '#fff',
            letterSpacing: '-0.02em',
          }}>
            5+ anos a posicionar{' '}
            <em style={{ color: '#93C5FD', fontStyle: 'italic' }}>
              marcas que lideram.
            </em>
          </span>
        </FadeUpScroll>

      </div>
    </section>
  );
}
```

Adicionar em `app/page.tsx` entre Manifesto e Services.

---

## FASE 6 — PORTFÓLIO: AFINAÇÃO AO PADRÃO DINTELL

A análise revelou detalhes exactos do hover do Dintell.
Afinar o Portfolio.tsx actual:

### 6A — Proporção dos cards
```
Dintell: cards retrato ~0.85 (5:6), altura imagem ~387px
KLAgency: ajustar altura da imagem para 340-380px
```

### 6B — Filtros estilo Dintell (texto, não botões)
Substituir os botões pill de filtro actuais por links de texto:

```tsx
{FILTERS.map(f => (
  <button
    key={f}
    onClick={() => setActive(f)}
    style={{
      background: 'none',
      border: 'none',
      padding: '0 18px 0 0',          /* Dintell exacto */
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',                /* 16px como Dintell */
      fontWeight: 500,
      color: active === f ? '#93C5FD' : 'var(--kl-muted)',
      cursor: 'pointer',
      transition: 'color 0.2s',
      borderBottom: active === f
        ? '2px solid #93C5FD'
        : '2px solid transparent',
      paddingBottom: '4px',
    }}
  >{f}</button>
))}
```

### 6C — Hover refinado (timing Dintell)
```css
/* Timing exacto do Dintell */
.portfolio-card .portfolio-overlay {
  transition: bottom 0.35s cubic-bezier(0.37, 0, 0.63, 1);
}
.portfolio-card img {
  transition: transform 0.4s cubic-bezier(0.37, 0, 0.63, 1) !important;
}
.portfolio-card:hover {
  box-shadow: rgba(0, 5, 155, 0.25) 0 0 30px 0;   /* sombra azul KLAgency */
}
```

---

## FASE 7 — CONTACT: ESTILO UNDERLINE DINTELL

A análise revelou: campos underline minimalistas, sem caixas.
Afinar o formulário em Contact.tsx:

```tsx
/* Estilo de campo — underline Dintell adaptado */
const fieldStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--kl-border-hover)',  /* linha inferior */
  borderRadius: 0,                                    /* sem radius */
  padding: '12px 25px 12px 0',                        /* Dintell exacto */
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  color: '#fff',
  outline: 'none',
  transition: 'border-color 0.25s',
};

/* Focus: linha fica azul */
// onFocus: borderBottomColor: '#2563EB'
// onBlur:  borderBottomColor: 'var(--kl-border-hover)'

/* Labels acima dos campos — Dintell exacto */
const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.82rem',              /* 13px */
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
  color: 'var(--kl-silver)',
  marginBottom: '0.4rem',
  display: 'block',
};

/* Nota de consentimento — Dintell tem */
<p style={{
  fontSize: '0.82rem',
  color: 'var(--kl-muted)',
  marginTop: '1rem',
}}>
  Nunca partilharemos os seus dados sem o seu consentimento explícito.
</p>
```

Botão de envio: usar o `.kl-btn-primary` pill com gradiente.

---

## FASE 8 — EQUIPA (PREPARAR PARA FOTOS REAIS)

A análise do About do Dintell revelou: grid 4 colunas,
fotos 3:4 retrato, hover-box 0.5s, redes sociais por membro.

Criar componente `components/Team.tsx` — DESACTIVADO até
haver fotos reais da equipa:

```tsx
'use client';
import Image from 'next/image';
import { FadeUpScroll, StaggerScroll, StaggerScrollItem } from './AnimateOnScroll';

// ⚠️ Preencher apenas com fotos e dados reais.
// Array vazio → componente retorna null.
const TEAM: {
  photo: string;
  name: string;
  role: string;
  instagram?: string;
  linkedin?: string;
}[] = [];

export default function Team() {
  if (TEAM.length === 0) return null;

  return (
    <section style={{
      background: 'var(--kl-navy-soft)',
      paddingTop: 75,
      paddingBottom: 75,
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto', padding: '0 2rem' }}>
        <FadeUpScroll style={{ marginBottom: '3.5rem' }}>
          <div className="kl-label" style={{ marginBottom: '1rem' }}>Equipa</div>
          <h2 className="kl-heading" style={{ color: '#fff', maxWidth: 540 }}>
            Uma equipa dedicada que entrega{' '}
            <em style={{ color: '#93C5FD', fontStyle: 'italic' }}>
              grandes resultados.
            </em>
          </h2>
        </FadeUpScroll>

        <StaggerScroll style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '2rem',
        }}>
          {TEAM.map((member) => (
            <StaggerScrollItem key={member.name}>
              <figure className="team-card" style={{
                margin: 0,
                position: 'relative',
                borderRadius: 6,                /* Dintell: 6px */
                overflow: 'hidden',
              }}>
                {/* Foto 3:4 retrato — proporção Dintell */}
                <div style={{ position: 'relative', aspectRatio: '3/4' }}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.5s cubic-bezier(0.5, 1, 0.89, 1)',
                    }}
                  />
                </div>
                {/* Caption — sobe no hover (padrão Dintell) */}
                <figcaption className="team-caption" style={{
                  position: 'absolute',
                  bottom: '-100%',
                  left: 0, right: 0,
                  background: 'rgba(2,6,23,0.92)',
                  backdropFilter: 'blur(12px)',
                  padding: '1.2rem',
                  transition: 'bottom 0.5s cubic-bezier(0.5, 1, 0.89, 1)',
                }}>
                  <span style={{
                    display: 'block',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: '#fff',
                    letterSpacing: '-0.01em',
                  }}>{member.name}</span>
                  <span style={{
                    fontSize: '0.8rem',
                    color: 'var(--kl-muted)',
                  }}>{member.role}</span>
                </figcaption>
              </figure>
            </StaggerScrollItem>
          ))}
        </StaggerScroll>
      </div>
    </section>
  );
}
```

CSS:
```css
.team-card:hover .team-caption { bottom: 0; }
.team-card:hover img { transform: scale(1.05); }
```

---

## ORDEM DE EXECUÇÃO

```
FASE 1 → Escala tipográfica Dintell (globals.css) → build ✅
FASE 2 → Ritmo 75px em todas as secções → build ✅
FASE 3 → Botões pill com gradiente animado → build ✅
FASE 4 → CTABand.tsx (faixa 98px) → build ✅
FASE 5 → Process.tsx (3 passos numerados) → build ✅
FASE 6 → Portfólio: filtros texto + timing hover → build ✅
FASE 7 → Contact: campos underline → build ✅
FASE 8 → Team.tsx (desactivado até fotos reais) → build ✅
FINAL  → Auditoria + commit + push ✅
```

**Parar após cada fase. Reportar build. Aguardar confirmação.**

---

## ORDEM FINAL DAS SECÇÕES (page.tsx)

```
Header
Hero
About
Manifesto
Process          ← NOVO (Fase 5)
Services
CTABand          ← NOVO (Fase 4)
ClientsTicker
Portfolio
Team             ← NOVO mas null (Fase 8)
Testimonial      (null até dados reais)
CTA
Contact
Footer
```

---

## CHECKLIST FINAL

**DNA Dintell adoptado:**
- [ ] Títulos com letter-spacing negativo e line-height 1.0-1.1
- [ ] Escala 48 → 39 → 35 → 18 → 16px aplicada
- [ ] Ritmo vertical 75px em todas as secções
- [ ] Botões pill 50px com gradiente animado azul
- [ ] Faixa CTA fina de 98px entre Services e Ticker
- [ ] Processo 3 passos numerados com outline numbers
- [ ] Filtros do portfólio em texto (não botões)
- [ ] Hover do portfólio com timing 0.35s cubic-bezier
- [ ] Formulário com campos underline
- [ ] Team.tsx criado (null até fotos)

**Identidade KLAgency intacta:**
- [ ] Zero laranja em todo o site
- [ ] Tema escuro mantido
- [ ] Playfair Display + DM Sans mantidas
- [ ] Copy oficial inalterado
- [ ] K watermark presente

**Técnico:**
- [ ] npm run build sem erros
- [ ] Commit e push feito
- [ ] Deploy Vercel activo

---

*Baseado em: análise técnica das 5 páginas do dintell.co.mz*
*Identidade: PROTOCOLO_KLAGENCY_WEBSITE.md*
*Versão: Modelação Visual Completa — DNA Dintell + Alma KLAgency*
