# PROMPT — ANIMAÇÕES DINTELL → KLAGENCY
# 19 animações extraídas de dintell.co.mz
# Implementar com Framer Motion + CSS

---

Vais implementar as 19 animações extraídas do site dintell.co.mz
no website KLAgency. Lê este documento completo antes de escrever
qualquer código.

> ⚠️ REGRAS ABSOLUTAS:
> - Identidade KLAgency mantém-se 100% intacta
> - Paleta, fontes e copy não se alteram
> - framer-motion e swiper já estão instalados
> - AnimateOnScroll.tsx já existe — expandir, não recriar
> - Após cada grupo: npm run build + reportar antes de avançar

---

## GRUPO A — COMPONENTES BASE (criar primeiro)

### A1 — Expandir AnimateOnScroll.tsx

Abrir `components/AnimateOnScroll.tsx` e adicionar os
seguintes componentes novos sem remover os existentes:

```tsx
'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

// ─── EASING OFICIAL DINTELL ──────────────────────────────────────────────────
// easeOutQuad = [0, 0, 0.58, 1]
// InOutCubic  = [0.37, 0, 0.63, 1]
// clipReveal  = [0.4, 0.6, 0.4, 1]
const EASE_OUT_QUAD: [number,number,number,number] = [0, 0, 0.58, 1];
const EASE_IN_OUT_CUBIC: [number,number,number,number] = [0.37, 0, 0.63, 1];
const EASE_CLIP: [number,number,number,number] = [0.4, 0.6, 0.4, 1];

// ─── HERO STAGGER CONTAINER (Animação 1) ─────────────────────────────────────
// Scale + RotateX + Fade com stagger 300ms entre filhos
export function HeroStagger({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={{ perspective: 1200, ...style }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.3, delayChildren: 0.2 } }
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

// ─── HERO STAGGER ITEM (filho do HeroStagger) ────────────────────────────────
export function HeroStaggerItem({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden:  { opacity: 0, scale: 1.05, rotateX: 30 },
        visible: {
          opacity: 1, scale: 1, rotateX: 0,
          transition: { duration: 0.8, ease: EASE_OUT_QUAD }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── FADE UP SCROLL (Animações 4, 13, 18) ────────────────────────────────────
// translateY: 30px → 0 ao entrar no viewport
export function FadeUpScroll({ children, delay = 0, distance = 30, className, style }: {
  children: ReactNode; delay?: number; distance?: number;
  className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_QUAD }}
    >
      {children}
    </motion.div>
  );
}

// ─── FADE ONLY SCROLL (Animação 19 — sem movimento Y) ───────────────────────
export function FadeScroll({ children, delay = 0, className, style }: {
  children: ReactNode; delay?: number;
  className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: EASE_OUT_QUAD }}
    >
      {children}
    </motion.div>
  );
}

// ─── STAGGER SCROLL CONTAINER (Animações 4, 13, 18) ─────────────────────────
export function StaggerScroll({ children, className, style, distance = 30 }: {
  children: ReactNode; className?: string;
  style?: React.CSSProperties; distance?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerScrollItem({ children, className, style, distance = 30 }: {
  children: ReactNode; className?: string;
  style?: React.CSSProperties; distance?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden:  { opacity: 0, y: distance },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_QUAD } }
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── HOVER LIFT CARD (Animação 7) ────────────────────────────────────────────
// translateY(-3px) + box-shadow ao hover
export function HoverLiftCard({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={{ willChange: 'transform', ...style }}
      whileHover={{ y: -3, boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
      transition={{ duration: 0.35, ease: EASE_IN_OUT_CUBIC }}
    >
      {children}
    </motion.div>
  );
}

// ─── SWITCH TEXT BUTTON (Animação 8) ─────────────────────────────────────────
// Texto sobe e novo texto entra de baixo ao hover
export function SwitchTextButton({
  text, href, className, style, primary = false
}: {
  text: string; href: string; className?: string;
  style?: React.CSSProperties; primary?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className={className}
      style={{ overflow: 'hidden', position: 'relative',
               display: 'inline-flex', alignItems: 'center', ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        animate={{ y: hovered ? '-200%' : '0%' }}
        transition={{ duration: 0.85, ease: [0.15, 0.85, 0.31, 1] }}
        style={{ display: 'block' }}
      >
        {text}
      </motion.span>
      <motion.span
        style={{
          position: 'absolute', left: '50%',
          transform: 'translateX(-50%)', whiteSpace: 'nowrap',
        }}
        animate={{ y: hovered ? '0%' : '100%', opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.8, opacity: { duration: 0.5, delay: hovered ? 0.1 : 0 } }}
      >
        {text}
      </motion.span>
    </a>
  );
}

// ─── HOVER SWITCH ICON BUTTON (Animação 9) ───────────────────────────────────
// Texto desliza + ícone sai pela direita / novo entra pela esquerda
export function HoverIconButton({
  label, href, className, style
}: {
  label: string; href: string; className?: string; style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center',
               overflow: 'hidden', gap: 6, ...style }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.span
        animate={{ x: hovered ? 6 : 0 }}
        transition={{ duration: 0.6, delay: hovered ? 0.1 : 0, ease: [0.1, 0.75, 0.25, 1] }}
      >
        {label}
      </motion.span>
      {/* ícone que sai */}
      <motion.span
        animate={{ x: hovered ? 10 : 0, opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.6, delay: hovered ? 0 : 0.25 }}
      >→</motion.span>
      {/* ícone que entra */}
      <motion.span
        style={{ position: 'absolute', right: 0 }}
        animate={{ x: hovered ? 0 : -10, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.6, delay: hovered ? 0.225 : 0 }}
      >→</motion.span>
    </a>
  );
}

// ─── CLIENT LOGO HOVER (Animação 12) ─────────────────────────────────────────
// Opacidade 0.5 → 1 ao hover
export function ClientLogo({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={{ cursor: 'default', ...style }}
      initial={{ opacity: 0.5 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// ─── HIGHLIGHT TEXT CLIP-PATH (Animação 15) ──────────────────────────────────
// Sublinhado decorativo que revela da esquerda para a direita ao scroll
export function HighlightReveal({ children, className, style }: {
  children: ReactNode; className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <span ref={ref} className={className}
      style={{ position: 'relative', display: 'inline-block', ...style }}>
      {children}
      <motion.span
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={inView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{ duration: 1, ease: EASE_CLIP }}
        style={{
          position: 'absolute', bottom: -4, left: 0, right: 0,
          height: 3,
          background: 'linear-gradient(90deg, #2563EB, #00059B)',
          borderRadius: 2,
        }}
      />
    </span>
  );
}

// ─── SCROLL PROGRESS INDICATOR (Animação 3) ──────────────────────────────────
export function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      style={{
        opacity,
        position: 'fixed', right: 24, top: '50%',
        transform: 'translateY(-50%)', zIndex: 50,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 8,
        mixBlendMode: 'difference',
        pointerEvents: 'none',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-body)', fontSize: 10,
        color: '#fff', letterSpacing: '0.1em',
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg)',
        opacity: 0.6,
      }}>Scroll</span>
      <div style={{
        width: 1, height: 60,
        background: 'rgba(255,255,255,0.15)',
        position: 'relative', borderRadius: 1,
      }}>
        <motion.div style={{
          width: 1, background: '#fff',
          position: 'absolute', top: 0, borderRadius: 1,
          height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
        }} />
      </div>
    </motion.div>
  );
}

// ─── PROGRESS BAR (Animação 5) ───────────────────────────────────────────────
export function AnimatedProgressBar({ value, label, color = 'var(--kl-blue-bright)' }: {
  value: number; label: string; color?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} style={{ marginBottom: '1.2rem' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginBottom: '0.4rem',
        fontFamily: 'var(--font-body)', fontSize: '0.78rem',
        color: 'var(--kl-silver)',
      }}>
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div style={{
        background: 'rgba(255,255,255,0.08)',
        borderRadius: 50, height: 6, overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ height: '100%', background: color, borderRadius: 50 }}
        />
      </div>
    </div>
  );
}
```

---

## GRUPO B — APLICAR NO HERO (Animação 1)

Abrir `components/Hero.tsx`.

Substituir a estrutura de animação actual por `HeroStagger` + `HeroStaggerItem`:

```tsx
import {
  HeroStagger, HeroStaggerItem, ScrollProgressIndicator
} from './AnimateOnScroll';

// Estrutura do Hero:
<HeroStagger>
  {/* Cada filho anima com stagger 300ms */}
  <HeroStaggerItem>
    <div className="kl-tag">
      Estratégia · Posicionamento · Crescimento
    </div>
  </HeroStaggerItem>

  <HeroStaggerItem>
    <h1 className="kl-display">
      Posicionamos marcas e líderes para{' '}
      <em style={{ fontStyle: 'italic', color: '#93C5FD' }}>dominar</em>{' '}
      os seus mercados.
    </h1>
  </HeroStaggerItem>

  <HeroStaggerItem>
    <p className="kl-subheading">
      Da identidade à estratégia. Do posicionamento ao domínio.
      Trabalhamos com marcas que querem liderar — não apenas existir.
    </p>
  </HeroStaggerItem>

  <HeroStaggerItem>
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <SwitchTextButton
        text="Falar com a KLAgency →"
        href="https://wa.me/258852170974"
        className="kl-btn-primary"
        primary
      />
      <SwitchTextButton
        text="Ver portfólio"
        href="#portfolio"
        className="kl-btn-ghost"
      />
    </div>
  </HeroStaggerItem>

  <HeroStaggerItem>
    {/* Stats row */}
    <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap',
                  borderTop: '1px solid var(--kl-border)', paddingTop: '2.5rem' }}>
      {/* +100 / +20 / 4 / 100% */}
    </div>
  </HeroStaggerItem>
</HeroStagger>

{/* Scroll indicator fixo */}
<ScrollProgressIndicator />
```

---

## GRUPO C — NAVBAR COM BLUR GLASS (Animação 2)

Abrir `components/Header.tsx`.

O comportamento actual (transparente → blur ao scroll) já existe.
Verificar se usa `motion` ou CSS simples. Se for CSS, converter:

```tsx
import { motion, useScroll } from 'framer-motion';

// Substituir a lógica actual por:
const { scrollY } = useScroll();
const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
  return scrollY.on('change', (y) => setIsSticky(y > 40));
}, [scrollY]);

// No JSX:
<motion.nav
  animate={{
    backdropFilter: isSticky ? 'blur(20px)' : 'blur(0px)',
    backgroundColor: isSticky
      ? 'rgba(2,6,23,0.92)'
      : 'transparent',
    borderBottomColor: isSticky
      ? 'rgba(255,255,255,0.07)'
      : 'transparent',
  }}
  transition={{ duration: 0.3 }}
  style={{
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    borderBottom: '1px solid transparent',
  }}
>
```

---

## GRUPO D — MANIFESTO: STAGGER SCROLL (Animação 4)

Abrir `components/Manifesto.tsx`.

```tsx
import { StaggerScroll, StaggerScrollItem, FadeUpScroll } from './AnimateOnScroll';

// Label + headline + corpo:
<FadeUpScroll><div className="kl-label">O Nosso Manifesto</div></FadeUpScroll>
<FadeUpScroll delay={0.1}><h2 className="kl-heading">...</h2></FadeUpScroll>
<FadeUpScroll delay={0.2}><p className="kl-body">...</p></FadeUpScroll>

// Grid de 4 valores:
<StaggerScroll style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
  {valores.map((v) => (
    <StaggerScrollItem key={v.title}>
      <HoverLiftCard>
        <div className="kl-glass" style={{ padding: '1.5rem' }}>
          {/* ícone + título + descrição */}
        </div>
      </HoverLiftCard>
    </StaggerScrollItem>
  ))}
</StaggerScroll>
```

---

## GRUPO E — SERVIÇOS: HOVER LIFT + STAGGER + ICON BUTTON (Animações 7, 8, 9)

Abrir `components/Services.tsx`.

```tsx
import {
  StaggerScroll, StaggerScrollItem,
  HoverLiftCard, HoverIconButton, FadeUpScroll
} from './AnimateOnScroll';

// Header:
<FadeUpScroll><div className="kl-label">Serviços</div></FadeUpScroll>
<FadeUpScroll delay={0.1}><h2 className="kl-heading">...</h2></FadeUpScroll>

// Grid de serviços:
<StaggerScroll style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
  {SERVICES.map((s) => (
    <StaggerScrollItem key={s.number}>
      <HoverLiftCard style={{ padding: '2rem 2.2rem', /* estilos actuais */ }}>
        <div>
          {/* número + tag + título + descrição */}
          <HoverIconButton
            label="Ver detalhe"
            href="#contacto"
            style={{
              marginTop: '1rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#93C5FD',
            }}
          />
        </div>
      </HoverLiftCard>
    </StaggerScrollItem>
  ))}
</StaggerScroll>
```

---

## GRUPO F — TICKER DE CLIENTES (Animação 11 + 12)

Abrir `components/ClientsTicker.tsx`.

```tsx
import { ClientLogo, FadeScroll } from './AnimateOnScroll';

// Label com fade:
<FadeScroll style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
  <div className="kl-label">
    Aprovado por organizações de excelência e grande renome
  </div>
</FadeScroll>

// Ticker com máscara fade nas extremidades (padrão Dintell):
<div style={{
  overflow: 'hidden',
  maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
}}>
  <div className="kl-ticker-track">
    {[...CLIENTS, ...CLIENTS].map((c, i) => (
      <ClientLogo key={i}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.05rem',
          letterSpacing: '0.08em',
          whiteSpace: 'nowrap',
          color: 'var(--kl-muted)',
        }}>{c}</span>
      </ClientLogo>
    ))}
  </div>
</div>
```

---

## GRUPO G — CTA SECTION: STAGGER FORTE (Animação 13)

Abrir `components/CTA.tsx`.

```tsx
import { StaggerScroll, StaggerScrollItem } from './AnimateOnScroll';

// Distância 50px (maior que as outras secções — padrão Dintell)
<StaggerScroll
  distance={50}
  style={{ textAlign: 'center', position: 'relative', maxWidth: 760, margin: '0 auto' }}
>
  <StaggerScrollItem distance={50}>
    <div className="kl-tag">A sua próxima fase começa aqui</div>
  </StaggerScrollItem>

  <StaggerScrollItem distance={50}>
    <h2 className="kl-heading">
      A sua marca não precisa de mais ruído.{' '}
      <HighlightReveal>
        <em style={{ color: '#93C5FD' }}>Precisa de direcção.</em>
      </HighlightReveal>
    </h2>
  </StaggerScrollItem>

  <StaggerScrollItem distance={50}>
    <p className="kl-subheading">
      A sua próxima fase começa com uma conversa.
    </p>
  </StaggerScrollItem>

  <StaggerScrollItem distance={50}>
    <SwitchTextButton
      text="Iniciar conversa estratégica →"
      href="https://wa.me/258852170974"
      className="kl-btn-primary"
      primary
    />
  </StaggerScrollItem>
</StaggerScroll>
```

---

## GRUPO H — HIGHLIGHT REVEAL NOS HEADLINES (Animação 15)

Aplicar `HighlightReveal` nas palavras-chave dos headlines principais:

```tsx
import { HighlightReveal } from './AnimateOnScroll';

// Hero:
// "dominar" já tem cor — envolver com HighlightReveal
<HighlightReveal>
  <em style={{ color: '#93C5FD' }}>dominar</em>
</HighlightReveal>

// Manifesto:
<HighlightReveal>
  <em style={{ color: '#93C5FD' }}>Constrói percepção.</em>
</HighlightReveal>

// Serviços:
<HighlightReveal>
  <em style={{ color: '#93C5FD' }}>Mais direcção.</em>
</HighlightReveal>
```

---

## GRUPO I — FOOTER: STAGGER SCROLL (Animação 18)

Abrir `components/Footer.tsx`.

```tsx
import { StaggerScroll, StaggerScrollItem } from './AnimateOnScroll';

<StaggerScroll style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
  <StaggerScrollItem>{/* coluna 1 — logo + slogan */}</StaggerScrollItem>
  <StaggerScrollItem>{/* coluna 2 — navegação */}</StaggerScrollItem>
  <StaggerScrollItem>{/* coluna 3 — serviços */}</StaggerScrollItem>
  <StaggerScrollItem>{/* coluna 4 — contacto */}</StaggerScrollItem>
</StaggerScroll>
```

---

## GRUPO J — HAMBURGER MENU MOBILE (Animação 17)

Abrir `components/Header.tsx`.
Verificar se o menu mobile já existe. Se sim, animar as linhas:

```tsx
// Dentro do botão hamburger:
<button onClick={() => setMenuOpen(!menuOpen)}>
  <motion.span
    animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
    transition={{ duration: 0.25 }}
    style={{ display: 'block', width: 24, height: 2,
             background: '#fff', marginBottom: 6, borderRadius: 2 }}
  />
  <motion.span
    animate={{ opacity: menuOpen ? 0 : 1 }}
    transition={{ duration: 0.25 }}
    style={{ display: 'block', width: 24, height: 2,
             background: '#fff', marginBottom: 6, borderRadius: 2 }}
  />
  <motion.span
    animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
    transition={{ duration: 0.25 }}
    style={{ display: 'block', width: 24, height: 2,
             background: '#fff', borderRadius: 2 }}
  />
</button>
```

---

## ORDEM DE EXECUÇÃO OBRIGATÓRIA

```
GRUPO A → Expandir AnimateOnScroll.tsx → build ✅
GRUPO B → Hero: HeroStagger + ScrollProgressIndicator → build ✅
GRUPO C → Navbar: motion blur glass → build ✅
GRUPO D → Manifesto: StaggerScroll + HoverLiftCard → build ✅
GRUPO E → Serviços: HoverLift + HoverIconButton → build ✅
GRUPO F → Ticker: máscara fade + ClientLogo → build ✅
GRUPO G → CTA: StaggerScroll distância 50px → build ✅
GRUPO H → HighlightReveal nos 3 headlines → build ✅
GRUPO I → Footer: StaggerScroll → build ✅
GRUPO J → Hamburger mobile animado → build ✅
FINAL   → Auditoria + commit + push → deploy ✅
```

**Parar após cada grupo. Reportar resultado do build. Aguardar confirmação.**

---

## AUDITORIA FINAL

```bash
# Verificar se não há imports quebrados
npx tsc --noEmit

# Build completo
npm run build

# Commit
git add -A
git commit -m "feat: 19 animações Dintell implementadas — L99 completo"
git push
```

---

## CHECKLIST FINAL

- [ ] HeroStagger com scale + rotateX + stagger 300ms
- [ ] ScrollProgressIndicator lateral fixo
- [ ] Navbar com blur glass ao scroll via motion
- [ ] Manifesto com StaggerScroll nos valores
- [ ] Serviços com HoverLiftCard + HoverIconButton
- [ ] Ticker com máscara fade nas extremidades
- [ ] CTA com stagger 50px (mais forte)
- [ ] HighlightReveal nos 3 headlines principais
- [ ] Footer com StaggerScroll
- [ ] Hamburger mobile com animação rotate
- [ ] npm run build sem erros
- [ ] TypeScript sem erros
- [ ] Commit e push feito
- [ ] Deploy Vercel activo

---

## CRITÉRIO DE APROVAÇÃO FINAL

> O site está aprovado quando ao fazer scroll do início ao fim,
> cada secção entra com movimento, os headlines revelam o sublinhado,
> os cards sobem ao hover, o ticker tem fade nas extremidades,
> e o indicador de scroll acompanha lateralmente.
> O site respira — exactamente como o Dintell.

---

*Fonte: 19 animações extraídas de dintell.co.mz via Claude Chrome Extension*
*Stack: Framer Motion v12 + CSS puro*
*Versão: Definitiva — L99*
