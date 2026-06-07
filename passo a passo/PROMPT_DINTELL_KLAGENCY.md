# PROMPT — IMPLEMENTAÇÃO PADRÕES DINTELL NA KLAGENCY

---

Vais implementar padrões visuais e de interacção extraídos do site Dintell (dintell.co.mz)
na KLAgency Website. Lê este documento na íntegra antes de escrever qualquer código.

> ⚠️ REGRA CRÍTICA: Estás a adaptar padrões — não a copiar o site.
> A identidade visual da KLAgency (cores, fontes, copy) mantém-se 100% intacta.
> O que vens buscar ao Dintell é: estrutura, animações e comportamento de componentes.
> NUNCA alterar: paleta oficial, fontes, copy aprovado, invariantes de marca.

---

## O QUE IMPLEMENTAR — 4 MELHORIAS

---

### MELHORIA 1 — ANIMAÇÕES DE ENTRADA (Framer Motion)

**O que o Dintell faz:**
- Hero: fade + scale + rotateX 3D ao carregar
- Secções: fadeUp escalonado ao entrar no viewport
- Easing: easeOutQuad em tudo
- Stagger: 300ms entre elementos filhos

**O que implementar na KLAgency:**

Instalar Framer Motion se não estiver instalado:
```bash
npm install framer-motion
```

**Hero — animação 3D de entrada:**
```tsx
// components/Hero.tsx
import { motion } from 'framer-motion';

// Substituir o div de conteúdo principal por:
<motion.div
  initial={{ opacity: 0, scale: 1.05, rotateX: 30 }}
  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
  transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0, 0.25, 1] }}
  style={{ transformPerspective: 1200 }}
>
  {/* TAG pill */}
  {/* Headline */}
  {/* Subtítulo */}
  {/* CTAs */}
</motion.div>

// Stats row com stagger:
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
>
  {/* Stats +100 / +20 / 4 / 100% */}
</motion.div>
```

**Secções ao scroll — padrão para Manifesto, Serviços, CTA:**
```tsx
// Criar componente reutilizável: components/AnimateOnScroll.tsx
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function AnimateOnScroll({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

// Stagger para listas de cards (Serviços, Valores):
export function AnimateStagger({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        visible: { transition: { staggerChildren: 0.15 } }
      }}
    >
      {children}
    </motion.div>
  );
}

export function AnimateStaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden:  { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
      }}
    >
      {children}
    </motion.div>
  );
}
```

**Aplicar AnimateOnScroll nos componentes:**
- `Manifesto.tsx` → envolver headline e grid de valores com AnimateStagger + AnimateStaggerItem
- `Services.tsx` → envolver label + headline com AnimateOnScroll; cards com AnimateStagger
- `CTA.tsx` → envolver conteúdo com AnimateOnScroll delay={0.1}
- `Footer.tsx` → envolver colunas com AnimateStagger

---

### MELHORIA 2 — DEPOIMENTOS (Swiper Carrossel)

**O que o Dintell faz:**
- Swiper com efeito fade entre slides
- Loop infinito, autoplay 4s
- Navegação: 2 setas externas (sem dots)
- Cada slide: foto circular + logo empresa + citação + nome/cargo
- Layout 2 colunas centradas

**O que implementar na KLAgency:**

Instalar Swiper se não estiver instalado:
```bash
npm install swiper
```

**Estrutura do componente `components/Testimonial.tsx`:**
```tsx
'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

// Dados — só usar depoimentos reais aprovados
// Se não houver dados reais, manter componente mas não renderizar
const testimonials = [
  {
    quote: "", // aguardar depoimento real
    name:  "", // aguardar nome real
    role:  "", // aguardar cargo real
    company: "", // aguardar empresa real
    photo: "", // aguardar /public/portfolio/nome.jpg
    logo:  "", // aguardar /public/clients/nome.png
  }
];

export function Testimonial() {
  // Se não há depoimentos reais, não renderizar
  if (testimonials.every(t => !t.quote)) return null;

  return (
    <section style={{ background: 'var(--kl-navy-soft)', padding: '6rem 2rem' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Label + Headline */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="kl-label" style={{ marginBottom: '1rem' }}>Depoimentos</div>
          <h2 className="kl-heading" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#fff', maxWidth: 580, margin: '0 auto' }}>
            Aprovado por organizações de excelência e grande renome.
          </h2>
        </div>

        {/* Swiper */}
        <div style={{ position: 'relative' }}>
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.kl-swiper-next',
              prevEl: '.kl-swiper-prev',
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '4rem',
                  alignItems: 'center',
                  maxWidth: 860,
                  margin: '0 auto',
                  padding: '0 1rem',
                }}>
                  {/* Foto circular */}
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                      src={t.photo}
                      alt={t.name}
                      style={{
                        width: 180, height: 180,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid rgba(37,99,235,0.4)',
                      }}
                    />
                  </div>

                  {/* Conteúdo */}
                  <div>
                    {t.logo && (
                      <img src={t.logo} alt={t.company}
                        style={{ height: 40, marginBottom: '1.2rem', opacity: 0.85 }} />
                    )}
                    <p style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: '1.05rem',
                      color: 'var(--kl-silver)',
                      lineHeight: 1.75,
                      marginBottom: '1.2rem',
                    }}>
                      "{t.quote}"
                    </p>
                    <span style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '0.78rem',
                      letterSpacing: '0.1em',
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

          {/* Setas de navegação externas */}
          <button className="kl-swiper-prev" style={{
            position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: 'rgba(255,255,255,0.08)',
            border: '1px solid var(--kl-border)', borderRadius: 8,
            width: 44, height: 44, cursor: 'pointer', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>←</button>
          <button className="kl-swiper-next" style={{
            position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)',
            zIndex: 10, background: 'rgba(255,255,255,0.08)',
            border: '1px solid var(--kl-border)', borderRadius: 8,
            width: 44, height: 44, cursor: 'pointer', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>→</button>
        </div>

      </div>
    </section>
  );
}
```

> ⚠️ REGRA: Se `testimonials` estiver vazio ou sem `quote` real, o componente retorna `null`.
> Nunca renderizar depoimento com dados inventados.
> Registar em `findings.md`: "Aguarda depoimentos reais do responsável."

---

### MELHORIA 3 — SERVIÇOS (Swiper Carrossel em Mobile)

**O que o Dintell faz:**
- Desktop: grid estático (4 colunas)
- Tablet: 2 colunas
- Mobile: carrossel Swiper 1 slide com autoplay

**O que implementar na KLAgency:**

O grid 2x3 actual mantém-se em desktop. Em mobile, converter para Swiper:

```tsx
// components/Services.tsx — adicionar comportamento mobile
'use client';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function Services() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const ServiceCard = ({ service, index }: { service: typeof SERVICES[0], index: number }) => (
    // ... card actual mantém-se igual
  );

  if (isMobile) {
    return (
      <section style={{ background: 'var(--kl-navy)', padding: '4rem 1rem' }}>
        {/* Header mantém-se */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
        >
          {SERVICES.map((s, i) => (
            <SwiperSlide key={s.number}>
              <ServiceCard service={s} index={i} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }

  // Desktop: grid actual mantém-se
  return (/* grid actual */);
}
```

---

### MELHORIA 4 — TICKER DE CLIENTES (Velocidade conveyor belt)

**O que o Dintell faz:**
- Ticker contínuo sem pausa (delay: 0, speed: 3000ms)
- Efeito conveyor belt suave — não para nunca
- Grayscale nos logos, hover volta à cor

**O que implementar na KLAgency:**

O ticker actual usa CSS animation. Afinar para o comportamento Dintell:

```css
/* globals.css — substituir a keyframe scrollLeft actual */
@keyframes scrollLeft {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.kl-ticker-track {
  display: flex;
  gap: 4rem;
  width: max-content;
  animation: scrollLeft 25s linear infinite;
  /* Sem pausa — conveyor belt contínuo */
}

/* Hover pausa o ticker */
.kl-ticker-wrapper:hover .kl-ticker-track {
  animation-play-state: paused;
}
```

```tsx
// components/ClientsTicker.tsx
<section className="kl-ticker-wrapper" style={{
  background: 'var(--kl-navy-soft)',
  padding: '2.5rem 0',
  borderTop: '1px solid var(--kl-border)',
  borderBottom: '1px solid var(--kl-border)',
  overflow: 'hidden',
}}>
  {/* Label acima do ticker */}
  <div style={{
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '0.72rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--kl-muted)',
    fontFamily: 'var(--font-body)',
  }}>
    Aprovado por organizações de excelência e grande renome
  </div>

  <div className="kl-ticker-track">
    {[...CLIENTS, ...CLIENTS].map((c, i) => (
      <span key={i} style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 400,
        fontSize: '1.05rem',
        color: 'var(--kl-muted)',
        letterSpacing: '0.08em',
        whiteSpace: 'nowrap',
        transition: 'color 0.2s',
        cursor: 'default',
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

## ORDEM DE EXECUÇÃO

```
1. Instalar dependências: framer-motion + swiper
2. Criar AnimateOnScroll.tsx (componente reutilizável)
3. Aplicar animações no Hero (3D entry)
4. Aplicar AnimateStagger nos cards de Serviços e Valores do Manifesto
5. Aplicar AnimateOnScroll nas restantes secções
6. Actualizar ClientsTicker com conveyor belt + label
7. Implementar Testimonial.tsx com Swiper fade
   (deixar vazio/null até haver dados reais)
8. Converter Services para Swiper em mobile
9. npm run build → reportar resultado
10. Actualizar progress.md
```

---

## REGRAS DE EXECUÇÃO

- Nunca alterar copy — todos os textos estão aprovados no protocolo
- Nunca alterar paleta — cores da KLAgency mantêm-se
- Nunca alterar fontes — Playfair Display + DM Sans
- Se Swiper ou Framer Motion causarem conflito de build → registar em findings.md
- Depoimentos: componente criado mas retorna null até dados reais chegarem
- Após cada melhoria: npm run build e reportar antes de avançar

---

## CRITÉRIO DE CONCLUSÃO

O trabalho está concluído quando:
- [ ] Hero tem animação 3D de entrada suave
- [ ] Cards de serviços e valores animam ao scroll com stagger
- [ ] Ticker tem label acima e pausa ao hover
- [ ] Componente Testimonial criado (null sem dados reais)
- [ ] Services usa Swiper em mobile
- [ ] npm run build sem erros
- [ ] Deploy Vercel activo

---

*Fonte de referência: Análise técnica dintell.co.mz — extraída via Claude Chrome Extension*
*Identidade visual: PROTOCOLO_KLAGENCY_WEBSITE.md + klagency-design-system.jsx*
