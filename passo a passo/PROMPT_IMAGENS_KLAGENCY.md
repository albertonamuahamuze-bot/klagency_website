# PROMPT — INTEGRAÇÃO DE IMAGENS REAIS NO WEBSITE KLAGENCY

---

Vais integrar as imagens reais da KLAgency no website.
As imagens estão em: `public/Imagens/`

Lê este documento completo antes de escrever qualquer código.

> ⚠️ REGRAS ABSOLUTAS:
> - Nunca alterar copy, paleta ou fontes
> - Usar next/image para todas as imagens (optimização automática)
> - Após cada secção: npm run build + reportar
> - Nunca inventar alt text — usar os textos definidos abaixo

---

## PASSO 0 — VERIFICAR FICHEIROS DISPONÍVEIS

```bash
# Listar todas as imagens disponíveis
ls "public/Imagens/"
```

Reportar lista completa antes de avançar.

---

## MAPEAMENTO OFICIAL — CADA IMAGEM NO SEU LUGAR

### LOGOS DE CLIENTES (ticker + portfólio)

| Ficheiro | Cliente | Uso |
|---|---|---|
| `2.jpg` | ECU Despachante Aduaneiro | Ticker + Portfólio |
| `4.jpg` | IP-MLNG | Ticker + Portfólio |
| `5.jpg` | Serena Luz | Ticker + Portfólio |
| `6.png` | Nelson Santana | Ticker + Portfólio |
| `8.png` | Bispo Kobebissá | Ticker + Portfólio |

### LOGO KLAGENCY

| Ficheiro | Uso |
|---|---|
| `3.jpg` | Símbolo K — header, watermark, favicon |
| `13.jpg` | Logo completo — footer, OG image |

### HERO — FUNDO PRINCIPAL

| Ficheiro | Uso |
|---|---|
| `7.jpg` | Fundo do Hero com overlay escuro |

### EQUIPA KLAGENCY

| Ficheiro | Uso |
|---|---|
| `17.jpg` | Secção Sobre — foto de equipa principal |
| `16.jpg` | Secção Sobre — alternativa |

### PORTFÓLIO — PESSOAS

| Ficheiro | Cliente | Uso |
|---|---|---|
| `9.jpg` | Bispo Kobebissá | Foto do projecto no portfólio |
| `1.jpg` | Executivo (confirmar nome) | Foto de pessoa no portfólio |
| `15.webp` | Executivo (confirmar nome) | Foto de pessoa no portfólio |

### MATERIAIS DE MARCA

| Ficheiro | Uso |
|---|---|
| `12.jpg` | Secção Sobre ou galeria de marca |
| `14.jpg` | Secção equipa/colaboradores |

---

## PASSO 1 — HERO COM IMAGEM REAL

Abrir `components/Hero.tsx`.

Substituir o fundo de gradiente CSS puro por fotografia real com overlay:

```tsx
// Adicionar import no topo:
import Image from 'next/image';

// Dentro da <section> do Hero, ANTES do conteúdo:

{/* Imagem de fundo */}
<div style={{
  position: 'absolute', inset: 0,
  zIndex: 0,
}}>
  <Image
    src="/Imagens/7.jpg"
    alt="KLAgency — Liderança estratégica"
    fill
    priority
    quality={90}
    style={{ objectFit: 'cover', objectPosition: 'center top' }}
  />
  {/* Overlay azul escuro sobre a imagem */}
  <div style={{
    position: 'absolute', inset: 0,
    background: 'linear-gradient(135deg, rgba(2,6,23,0.88) 0%, rgba(0,5,155,0.75) 55%, rgba(2,6,23,0.82) 100%)',
  }} />
</div>

{/* Todo o conteúdo existente fica dentro de uma div com position: relative, zIndex: 1 */}
<div style={{ position: 'relative', zIndex: 1 }}>
  {/* HeroStagger + conteúdo actual */}
</div>
```

Verificar que a section tem `position: 'relative'` e `overflow: 'hidden'`.

---

## PASSO 2 — TICKER DE CLIENTES COM LOGOS REAIS

Abrir `components/ClientsTicker.tsx`.

Substituir o array de texto por logos reais:

```tsx
import Image from 'next/image';

// Substituir o array CLIENTS por:
const CLIENTS = [
  { name: 'IP-MLNG',               logo: '/Imagens/4.jpg' },
  { name: 'ECU Despachante',        logo: '/Imagens/2.jpg' },
  { name: 'Nelson Santana',         logo: '/Imagens/6.png' },
  { name: 'Bispo Kobebissá',        logo: '/Imagens/8.png' },
  { name: 'Serena Luz',             logo: '/Imagens/5.jpg' },
];

// Substituir o render de cada item por:
// (dentro do ClientLogo)
<div style={{
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  height: 48, padding: '0 1rem',
}}>
  <Image
    src={client.logo}
    alt={client.name}
    width={120}
    height={48}
    style={{
      objectFit: 'contain',
      filter: 'brightness(0) invert(1)',  // converte para branco
      opacity: 0.55,
      transition: 'opacity 0.3s',
      maxHeight: 40,
    }}
    onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
    onMouseLeave={e => (e.currentTarget.style.opacity = '0.55')}
  />
</div>
```

> ⚠️ NOTA: `filter: brightness(0) invert(1)` converte qualquer logo para branco.
> Isto é o padrão Dintell — logos a branco sobre fundo escuro.
> Para o logo Nelson Santana (fundo preto — `6.png`): usar apenas `filter: brightness(10)` para ficar branco.

---

## PASSO 3 — PORTFÓLIO COM DADOS REAIS

Criar ou actualizar `components/Portfolio.tsx`:

```tsx
import Image from 'next/image';

const PORTFOLIO_ITEMS = [
  {
    client:      'Bispo Kobebissá',
    logo:        '/Imagens/8.png',
    photo:       '/Imagens/9.jpg',
    category:    'Branding · Posicionamento',
    description: 'Construção da identidade visual e posicionamento estratégico do Bispo Kobebissá como líder de referência.',
    result:      'Presença digital consolidada com identidade premium reconhecível.',
  },
  {
    client:      'IP-MLNG',
    logo:        '/Imagens/4.jpg',
    photo:       null,
    category:    'Estratégia · Comunicação',
    description: 'Desenvolvimento de estratégia de comunicação institucional para o Instituto Politécnico MLNG.',
    result:      'Comunicação clara, confiável e pronta para crescer.',
  },
  {
    client:      'Nelson Santana',
    logo:        '/Imagens/6.png',
    photo:       null,
    category:    'Branding · Identidade',
    description: 'Criação de identidade corporativa para a marca Nelson Santana.',
    result:      'Marca com presença forte e reconhecimento imediato.',
  },
  {
    client:      'ECU Despachante',
    logo:        '/Imagens/2.jpg',
    photo:       null,
    category:    'Marketing · Posicionamento',
    description: 'Posicionamento estratégico e comunicação digital para a ECU Despachante Aduaneiro.',
    result:      'Autoridade consolidada no sector aduaneiro.',
  },
  {
    client:      'Serena Luz',
    logo:        '/Imagens/5.jpg',
    photo:       null,
    category:    'Branding · Identidade',
    description: 'Identidade visual e estratégia de marca para a Serena Luz.',
    result:      'Identidade própria com presença reconhecível.',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{
      background: 'var(--kl-navy)',
      padding: '6rem 2rem',
    }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="kl-label" style={{ marginBottom: '1rem' }}>Portfólio</div>
          <div className="kl-divider" style={{ marginBottom: '1.5rem' }} />
          <h2 className="kl-heading" style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            color: '#fff', maxWidth: 520,
          }}>
            Marcas que já{' '}
            <em style={{ color: '#93C5FD', fontStyle: 'italic' }}>lideraram</em>{' '}
            connosco.
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.client} className="kl-glass" style={{ padding: '1.8rem' }}>

              {/* Logo + categoria */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                alignItems: 'center', marginBottom: '1.2rem',
              }}>
                <div style={{
                  height: 36, width: 100, position: 'relative',
                }}>
                  <Image
                    src={item.logo}
                    alt={item.client}
                    fill
                    style={{ objectFit: 'contain', objectPosition: 'left' }}
                  />
                </div>
                <span className="kl-tag" style={{ fontSize: '0.62rem' }}>
                  {item.category.split(' · ')[0]}
                </span>
              </div>

              {/* Foto (se existir) */}
              {item.photo && (
                <div style={{
                  position: 'relative', height: 180,
                  borderRadius: 8, overflow: 'hidden', marginBottom: '1.2rem',
                }}>
                  <Image
                    src={item.photo}
                    alt={item.client}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
              )}

              {/* Nome do cliente */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600, fontSize: '1rem',
                color: '#fff', marginBottom: '0.5rem',
              }}>
                {item.client}
              </div>

              {/* Categoria */}
              <div style={{
                fontSize: '0.7rem', color: '#93C5FD',
                letterSpacing: '0.08em', textTransform: 'uppercase',
                marginBottom: '0.8rem',
              }}>
                {item.category}
              </div>

              {/* Descrição */}
              <p style={{
                fontSize: '0.82rem', color: 'var(--kl-muted)',
                lineHeight: 1.65, marginBottom: '1rem',
              }}>
                {item.description}
              </p>

              {/* Resultado */}
              <div style={{
                borderTop: '1px solid var(--kl-border)',
                paddingTop: '0.8rem',
                fontSize: '0.78rem',
                color: 'var(--kl-silver)',
                fontStyle: 'italic',
              }}>
                "{item.result}"
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
```

Adicionar `<Portfolio />` em `app/page.tsx` entre o ticker de clientes e o depoimento.

---

## PASSO 4 — SECÇÃO SOBRE / EQUIPA

Criar `components/About.tsx`:

```tsx
import Image from 'next/image';
import { FadeUpScroll, StaggerScroll, StaggerScrollItem } from './AnimateOnScroll';

export default function About() {
  return (
    <section id="sobre" style={{
      background: 'var(--kl-navy-soft)',
      padding: '6rem 2rem',
    }}>
      <div style={{
        maxWidth: 1120, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '5rem', alignItems: 'center',
      }}>

        {/* Imagem da equipa */}
        <FadeUpScroll>
          <div style={{
            position: 'relative', height: 480,
            borderRadius: 16, overflow: 'hidden',
            border: '1px solid var(--kl-border)',
          }}>
            <Image
              src="/Imagens/17.jpg"
              alt="Equipa KLAgency"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Overlay subtil */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(2,6,23,0.6) 0%, transparent 60%)',
            }} />
            {/* Badge sobre a imagem */}
            <div style={{
              position: 'absolute', bottom: 20, left: 20,
              background: 'rgba(2,6,23,0.85)',
              backdropFilter: 'blur(12px)',
              border: '1px solid var(--kl-border)',
              borderRadius: 10, padding: '0.8rem 1.2rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600, fontSize: '1.1rem', color: '#fff',
              }}>KLAgency</div>
              <div style={{
                fontSize: '0.72rem', color: 'var(--kl-muted)',
                letterSpacing: '0.06em',
              }}>Maputo, Moçambique</div>
            </div>
          </div>
        </FadeUpScroll>

        {/* Texto */}
        <div>
          <FadeUpScroll>
            <div className="kl-label" style={{ marginBottom: '1rem' }}>Sobre</div>
          </FadeUpScroll>
          <FadeUpScroll delay={0.1}>
            <div className="kl-divider" style={{ marginBottom: '1.5rem' }} />
          </FadeUpScroll>
          <FadeUpScroll delay={0.2}>
            <h2 className="kl-heading" style={{
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: '#fff', marginBottom: '1.5rem',
            }}>
              Nascemos em África.{' '}
              <em style={{ color: '#93C5FD', fontStyle: 'italic' }}>
                Pensamos para o mundo.
              </em>
            </h2>
          </FadeUpScroll>
          <FadeUpScroll delay={0.3}>
            <p className="kl-body" style={{ marginBottom: '1.2rem' }}>
              A KLAgency é uma consultora estratégica de posicionamento, branding
              e crescimento de marcas. Nascemos em Moçambique com a visão de
              construir marcas africanas de referência global.
            </p>
          </FadeUpScroll>
          <FadeUpScroll delay={0.4}>
            <p className="kl-body" style={{ marginBottom: '2rem' }}>
              Trabalhamos com líderes e organizações que querem mais do que
              presença — querem autoridade, posicionamento e domínio real
              dos seus mercados.
            </p>
          </FadeUpScroll>

          {/* Stats */}
          <StaggerScroll style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { num: '+100', label: 'Projectos entregues' },
              { num: '+20',  label: 'Marcas posicionadas' },
              { num: '5+',   label: 'Anos de experiência' },
              { num: '100%', label: 'Compromisso' },
            ].map(({ num, label }) => (
              <StaggerScrollItem key={label}>
                <div className="kl-glass" style={{ padding: '1.2rem' }}>
                  <div style={{
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '1.8rem', color: '#fff', lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}>{num}</div>
                  <div style={{
                    fontSize: '0.72rem', color: 'var(--kl-muted)',
                    letterSpacing: '0.05em',
                  }}>{label}</div>
                </div>
              </StaggerScrollItem>
            ))}
          </StaggerScroll>
        </div>

      </div>
    </section>
  );
}
```

Adicionar `<About />` em `app/page.tsx` entre o Hero e o Manifesto.

---

## PASSO 5 — NEXT.JS IMAGE CONFIG

Verificar `next.config.mjs` (ou `.js`).
Adicionar configuração para imagens locais se necessário:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Imagens locais não precisam de domínios configurados
    // Apenas verificar que não há restrições activas
    unoptimized: false, // manter optimização activa
  },
};

export default nextConfig;
```

---

## PASSO 6 — ACTUALIZAR app/page.tsx

A ordem final das secções deve ser:

```tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';           // NOVO
import Manifesto from '@/components/Manifesto';
import Services from '@/components/Services';
import ClientsTicker from '@/components/ClientsTicker';
import Portfolio from '@/components/Portfolio';   // NOVO
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Manifesto />
      <Services />
      <ClientsTicker />
      <Portfolio />
      <Testimonial />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}
```

---

## ORDEM DE EXECUÇÃO

```
PASSO 0 → Verificar ficheiros em public/Imagens/ → reportar lista ✅
PASSO 1 → Hero com imagem real + overlay → build ✅
PASSO 2 → Ticker com logos reais → build ✅
PASSO 3 → Portfolio.tsx com 5 clientes → build ✅
PASSO 4 → About.tsx com equipa → build ✅
PASSO 5 → next.config verificado → build ✅
PASSO 6 → page.tsx actualizado → build final ✅
FINAL   → Auditoria visual + commit + push ✅
```

**Parar após cada passo. Reportar build antes de avançar.**

---

## CHECKLIST FINAL

- [ ] Hero tem imagem real com overlay azul escuro
- [ ] Ticker mostra logos reais a branco
- [ ] Portfólio com 5 clientes reais
- [ ] Secção Sobre com foto da equipa
- [ ] Todas as imagens usam next/image
- [ ] npm run build sem erros
- [ ] Sem imagens quebradas (404)
- [ ] Commit e push feito
- [ ] Deploy Vercel activo

---

*Imagens em: public/Imagens/*
*Protocolo: PROTOCOLO_KLAGENCY_WEBSITE.md*
*Versão: Imagens Reais — Final*
