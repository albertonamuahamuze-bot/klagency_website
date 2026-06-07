# PROMPT DE ELEVAÇÃO L99 — KLAGENCY WEBSITE
# Referência: dintell.co.mz | Nível: Máximo

---

Vais elevar o website KLAgency ao nível de excelência visual e interactiva
da referência dintell.co.mz.

Lê este documento completo antes de escrever qualquer linha de código.
Depois confirma o que entendeste antes de executar.

---

## REGRAS ABSOLUTAS — NÃO NEGOCIÁVEIS

- A identidade KLAgency mantém-se 100% intacta
- Paleta oficial: #00059B, #020617, #050B3D, #2563EB — nunca alterar
- Fontes: Playfair Display (display) + DM Sans (body) — nunca alterar
- Todo o copy está aprovado — nunca inventar nem alterar texto
- Após cada passo: npm run build + reportar resultado
- Qualquer dúvida: registar em findings.md e parar para confirmação

---

## PASSO 0 — CORRECÇÃO CRÍTICA URGENTE

**Bug detectado:** Header mostra "KKLAgency" com K duplicado.

```tsx
// components/Header.tsx
// ERRADO:  "KKLAgency"
// CORRECTO: "KLAgency"
// Encontrar e corrigir em todos os locais onde apareça
```

Executar após correcção:
```bash
npm run build
```

Reportar: "Bug corrigido ✅" antes de avançar.

---

## PASSO 1 — INSTALAR DEPENDÊNCIAS

```bash
npm install framer-motion swiper
```

Verificar que não há conflitos com as dependências actuais.
Reportar versões instaladas.

---

## PASSO 2 — COMPONENTE REUTILIZÁVEL DE ANIMAÇÃO

Criar o ficheiro `components/AnimateOnScroll.tsx`:

```tsx
'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// ─── FADE UP (secções, headlines, parágrafos) ───────────────────────────────
interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function FadeUp({ children, delay = 0, className, style }: FadeUpProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// ─── STAGGER CONTAINER (listas de cards) ────────────────────────────────────
export function StaggerContainer({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.12 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── STAGGER ITEM (filho dentro do StaggerContainer) ────────────────────────
export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: 'easeOut' },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── HERO ENTRY (3D flip — apenas no Hero) ──────────────────────────────────
export function HeroEntry({
  children,
  delay = 0,
  className,
  style,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      style={{ ...style, transformPerspective: 1200 }}
      initial={{ opacity: 0, scale: 1.05, rotateX: 30 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── SCALE ON HOVER (cards interactivos) ────────────────────────────────────
export function ScaleOnHover({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  );
}
```

---

## PASSO 3 — HERO: ANIMAÇÃO 3D + WAVE SVG

### 3A — Animação 3D de entrada

Abrir `components/Hero.tsx`.
Importar `HeroEntry` e `FadeUp` de `./AnimateOnScroll`.

Substituir a estrutura de conteúdo do Hero:

```tsx
// Tag pill → HeroEntry delay=0
<HeroEntry delay={0}>
  <div className="kl-tag">...</div>
</HeroEntry>

// Headline → HeroEntry delay=0.15
<HeroEntry delay={0.15}>
  <h1 className="kl-display">...</h1>
</HeroEntry>

// Subtítulo → HeroEntry delay=0.28
<HeroEntry delay={0.28}>
  <p className="kl-subheading">...</p>
</HeroEntry>

// CTAs → HeroEntry delay=0.40
<HeroEntry delay={0.40}>
  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
    <a href="https://wa.me/258852170974" className="kl-btn-primary">
      Falar com a KLAgency →
    </a>
    <a href="#portfolio" className="kl-btn-ghost">
      Ver portfólio
    </a>
  </div>
</HeroEntry>

// Stats row → FadeUp delay=0.65
<FadeUp delay={0.65}>
  <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', borderTop: '1px solid var(--kl-border)', paddingTop: '2.5rem' }}>
    {/* +100 / +20 / 4 / 100% */}
  </div>
</FadeUp>
```

### 3B — Wave SVG decorativo na base do Hero

Adicionar imediatamente antes do fecho da `<section>` do Hero:

```tsx
{/* Wave SVG — apenas desktop */}
<div style={{
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  lineHeight: 0,
  display: 'none', // mobile: esconder
}} className="hero-wave">
  <svg
    viewBox="0 0 1440 80"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    style={{ width: '100%', height: 80 }}
  >
    <path
      d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
      fill="#020617"
      fillOpacity="1"
    />
  </svg>
</div>
```

Adicionar ao `globals.css`:
```css
@media (min-width: 768px) {
  .hero-wave { display: block !important; }
}
```

---

## PASSO 4 — MANIFESTO: ANIMAÇÃO STAGGER

Abrir `components/Manifesto.tsx`.
Importar `FadeUp`, `StaggerContainer`, `StaggerItem`.

```tsx
// Label + Headline + corpo → FadeUp escalonado
<FadeUp delay={0}>
  <div className="kl-label">O Nosso Manifesto</div>
</FadeUp>

<FadeUp delay={0.1}>
  <h2 className="kl-heading">...</h2>
</FadeUp>

<FadeUp delay={0.2}>
  <p className="kl-body">...</p>
</FadeUp>

// Grid de 4 valores → StaggerContainer + StaggerItem
<StaggerContainer style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
  {valores.map((v) => (
    <StaggerItem key={v.title}>
      <div className="kl-glass" style={{ padding: '1.5rem' }}>
        {/* ícone + título + descrição */}
      </div>
    </StaggerItem>
  ))}
</StaggerContainer>
```

---

## PASSO 5 — SERVIÇOS: HOVER LIFT + STAGGER + MOBILE SWIPER

### 5A — Desktop: Stagger + hover lift

Abrir `components/Services.tsx`.
Importar `FadeUp`, `StaggerContainer`, `StaggerItem`, `ScaleOnHover`.

```tsx
// Header da secção
<FadeUp><div className="kl-label">Serviços</div></FadeUp>
<FadeUp delay={0.1}><h2 className="kl-heading">...</h2></FadeUp>

// Grid de serviços
<StaggerContainer style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', ... }}>
  {SERVICES.map((s) => (
    <StaggerItem key={s.number}>
      <ScaleOnHover>
        {/* card actual */}
      </ScaleOnHover>
    </StaggerItem>
  ))}
</StaggerContainer>
```

### 5B — Mobile: Swiper carrossel

```tsx
'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Detectar mobile
const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const check = () => setIsMobile(window.innerWidth < 768);
  check();
  window.addEventListener('resize', check);
  return () => window.removeEventListener('resize', check);
}, []);

// Renderizar Swiper em mobile
if (isMobile) {
  return (
    <section>
      {/* header mantém-se */}
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        style={{ paddingBottom: '2.5rem' }}
      >
        {SERVICES.map((s) => (
          <SwiperSlide key={s.number}>
            {/* card do serviço */}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
// Desktop: grid actual mantém-se
```

---

## PASSO 6 — TICKER DE CLIENTES: CONVEYOR BELT + LABEL

Abrir `components/ClientsTicker.tsx`.

### 6A — Actualizar CSS animation para conveyor belt contínuo

Em `globals.css`, verificar/substituir:
```css
@keyframes scrollLeft {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.kl-ticker-track {
  animation: scrollLeft 25s linear infinite;
}

/* Pausa ao hover */
.kl-ticker-wrapper:hover .kl-ticker-track {
  animation-play-state: paused;
}
```

### 6B — Adicionar label acima do ticker

```tsx
<section className="kl-ticker-wrapper" style={{
  background: 'var(--kl-navy-soft)',
  padding: '3rem 0',
  borderTop: '1px solid var(--kl-border)',
  borderBottom: '1px solid var(--kl-border)',
  overflow: 'hidden',
}}>
  {/* Label */}
  <FadeUp>
    <div style={{
      textAlign: 'center',
      marginBottom: '1.8rem',
      fontFamily: 'var(--font-body)',
      fontSize: '0.72rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--kl-muted)',
    }}>
      Aprovado por organizações de excelência e grande renome
    </div>
  </FadeUp>

  {/* Ticker */}
  <div className="kl-ticker-track" style={{
    display: 'flex',
    gap: '4rem',
    width: 'max-content',
  }}>
    {[...CLIENTS, ...CLIENTS].map((c, i) => (
      <span key={i} style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.05rem',
        color: 'var(--kl-muted)',
        letterSpacing: '0.08em',
        whiteSpace: 'nowrap',
        cursor: 'default',
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
      onMouseLeave={e => (e.currentTarget.style.color = 'var(--kl-muted)')}
      >
        {c}
      </span>
    ))}
  </div>
</section>
```

---

## PASSO 7 — DEPOIMENTOS: SWIPER FADE COM SETAS

Criar `components/Testimonial.tsx`:

```tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import { FadeUp } from './AnimateOnScroll';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// ⚠️ REGRA: Só usar depoimentos reais aprovados pelo responsável.
// Se array estiver vazio → componente retorna null silenciosamente.
// Nunca inventar citações, nomes ou empresas.
// Registar em findings.md: "Aguarda depoimentos reais do responsável."

const testimonials: {
  quote: string;
  name: string;
  role: string;
  photo?: string;
  logo?: string;
}[] = [
  // Preencher apenas com dados reais confirmados:
  // {
  //   quote: "...",
  //   name: "...",
  //   role: "Cargo · Empresa",
  //   photo: "/portfolio/nome.jpg",
  //   logo: "/clients/empresa.png",
  // },
];

export function Testimonial() {
  if (testimonials.length === 0 || testimonials.every(t => !t.quote)) {
    return null;
  }

  return (
    <section style={{
      background: 'var(--kl-navy-soft)',
      padding: '6rem 2rem',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Header */}
        <FadeUp style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="kl-label" style={{ marginBottom: '1rem' }}>
            Depoimentos
          </div>
          <div className="kl-divider" style={{ margin: '0 auto 1.5rem' }} />
          <h2 className="kl-heading" style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            color: '#fff',
            maxWidth: 580,
            margin: '0 auto',
          }}>
            Aprovado por organizações de excelência e grande renome.
          </h2>
        </FadeUp>

        {/* Swiper com setas externas */}
        <div style={{ position: 'relative', padding: '0 3rem' }}>

          {/* Seta anterior */}
          <button className="kl-swiper-prev" style={{
            position: 'absolute', left: 0, top: '50%',
            transform: 'translateY(-50%)', zIndex: 10,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid var(--kl-border-hover)',
            borderRadius: 8, width: 44, height: 44,
            cursor: 'pointer', color: '#fff', fontSize: '1.1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}>←</button>

          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            navigation={{
              nextEl: '.kl-swiper-next',
              prevEl: '.kl-swiper-prev',
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '4rem',
                  alignItems: 'center',
                  maxWidth: 820,
                  margin: '0 auto',
                  padding: '1rem 0',
                }}>
                  {/* Foto circular */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {t.photo ? (
                      <img src={t.photo} alt={t.name} style={{
                        width: 160, height: 160,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid rgba(37,99,235,0.4)',
                      }} />
                    ) : (
                      <div style={{
                        width: 160, height: 160,
                        borderRadius: '50%',
                        background: 'var(--kl-navy)',
                        border: '3px solid rgba(37,99,235,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-display)',
                        fontSize: '2.5rem', color: 'var(--kl-muted)',
                      }}>
                        {t.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {/* Conteúdo */}
                  <div>
                    {t.logo && (
                      <img src={t.logo} alt="" style={{
                        height: 36, marginBottom: '1.2rem',
                        opacity: 0.75, filter: 'brightness(10)',
                      }} />
                    )}
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                      color: 'var(--kl-silver)',
                      lineHeight: 1.75,
                      marginBottom: '1.2rem',
                    }}>
                      "{t.quote}"
                    </p>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '0.75rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#93C5FD',
                    }}>
                      {t.name} · {t.role}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Seta seguinte */}
          <button className="kl-swiper-next" style={{
            position: 'absolute', right: 0, top: '50%',
            transform: 'translateY(-50%)', zIndex: 10,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid var(--kl-border-hover)',
            borderRadius: 8, width: 44, height: 44,
            cursor: 'pointer', color: '#fff', fontSize: '1.1rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 0.2s',
          }}>→</button>
        </div>

      </div>
    </section>
  );
}
```

Adicionar `<Testimonial />` em `app/page.tsx` entre o ticker de clientes e o CTA.

---

## PASSO 8 — CTA E FOOTER: ANIMAÇÕES FINAIS

Abrir `components/CTA.tsx`:
```tsx
// Envolver conteúdo com FadeUp
<FadeUp delay={0.1}>
  <div className="kl-tag">...</div>
  <h2 className="kl-heading">...</h2>
  <p className="kl-subheading">...</p>
  <a className="kl-btn-primary">...</a>
</FadeUp>
```

Abrir `components/Footer.tsx`:
```tsx
// Envolver colunas com StaggerContainer + StaggerItem
<StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
  <StaggerItem>{/* coluna 1 */}</StaggerItem>
  <StaggerItem>{/* coluna 2 */}</StaggerItem>
  <StaggerItem>{/* coluna 3 */}</StaggerItem>
  <StaggerItem>{/* coluna 4 */}</StaggerItem>
</StaggerContainer>
```

---

## PASSO 9 — TRANSIÇÕES ENTRE SECÇÕES (sem linhas duras)

Cada secção tem uma transição suave para a seguinte.
Adicionar ao fim de cada secção (antes do `</section>`):

```tsx
// Hero → Manifesto
<div style={{
  position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
  background: 'linear-gradient(to bottom, transparent, #050B3D)',
  pointerEvents: 'none',
}} />

// Manifesto → Serviços
<div style={{
  position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
  background: 'linear-gradient(to bottom, transparent, #020617)',
  pointerEvents: 'none',
}} />

// Serviços → Ticker
<div style={{
  position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
  background: 'linear-gradient(to bottom, transparent, #050B3D)',
  pointerEvents: 'none',
}} />

// CTA → Contacto
<div style={{
  position: 'absolute', bottom: 0, left: 0, right: 0, height: 80,
  background: 'linear-gradient(to bottom, transparent, #020617)',
  pointerEvents: 'none',
}} />
```

Garantir que cada `<section>` tem `position: relative` e `overflow: hidden`.

---

## PASSO 10 — BUILD FINAL E AUDITORIA

```bash
npm run build
```

Após build limpo, fazer auditoria:

```bash
# Verificar se "KKLAgency" foi eliminado
grep -r "KKLAgency" components/ app/ --include="*.tsx"

# Verificar se não há textos em inglês
grep -r "Innovation with Excellence\|Sustainable Solutions\|High-performance" components/ app/ --include="*.tsx"

# Verificar se não há cores do tema claro
grep -r "#F6F9FC\|#EEF4FB\|#101828" components/ app/ --include="*.tsx" --include="*.css"

# Verificar consistência do nome
grep -r "KL Agency\|Agência KL\|Klagency" components/ app/ --include="*.tsx"
```

Reportar resultado de cada grep.

---

## PASSO 11 — ACTUALIZAR progress.md

Registar:
- Passos concluídos
- Dependências instaladas (framer-motion + swiper + versões)
- Componentes novos criados
- Componentes modificados
- Resultado do build final
- Erros encontrados e correcções aplicadas
- Estado do componente Testimonial (null — aguarda dados reais)

---

## ORDEM DE EXECUÇÃO OBRIGATÓRIA

```
PASSO 0  → Corrigir "KKLAgency" → build → reportar ✅
PASSO 1  → Instalar framer-motion + swiper → reportar ✅
PASSO 2  → Criar AnimateOnScroll.tsx → reportar ✅
PASSO 3  → Hero: animação 3D + wave SVG → build → reportar ✅
PASSO 4  → Manifesto: stagger → build → reportar ✅
PASSO 5  → Serviços: hover lift + stagger + mobile Swiper → build → reportar ✅
PASSO 6  → Ticker: conveyor belt + label + pausa hover → build → reportar ✅
PASSO 7  → Testimonial.tsx (Swiper fade + setas) → build → reportar ✅
PASSO 8  → CTA + Footer: animações finais → build → reportar ✅
PASSO 9  → Transições entre secções → build → reportar ✅
PASSO 10 → Build final + auditoria grep → reportar ✅
PASSO 11 → Actualizar progress.md → commit → push → reportar ✅
```

**Após cada passo: parar e aguardar confirmação antes de avançar.**

---

## CHECKLIST DE APROVAÇÃO FINAL

- [ ] "KKLAgency" eliminado — "KLAgency" em todo o site
- [ ] Hero com animação 3D de entrada suave
- [ ] Wave SVG na base do Hero (desktop)
- [ ] Manifesto com stagger nos valores
- [ ] Serviços com hover lift e stagger
- [ ] Serviços com Swiper em mobile
- [ ] Ticker com label + conveyor belt + pausa ao hover
- [ ] Testimonial.tsx criado (null sem dados reais)
- [ ] CTA e Footer com animações de entrada
- [ ] Transições suaves entre todas as secções
- [ ] npm run build sem erros
- [ ] Auditoria grep limpa
- [ ] Commit e push para GitHub
- [ ] Deploy Vercel activo

---

## CRITÉRIO DE APROVAÇÃO

O trabalho está concluído quando:

> O responsável entra no site, faz scroll do início ao fim,
> e sente que cada secção respira, entra com movimento e
> comunica autoridade — sem hesitação.

---

*Referência: dintell.co.mz*
*Identidade: PROTOCOLO_KLAGENCY_WEBSITE.md + klagency-design-system.jsx*
*Versão: L99 — Elevação máxima*
