# PROMPT CIRÚRGICO — KLAGENCY WEBSITE
# Baseado em auditoria real de klagency-website.vercel.app
# Data: Junho 2026

---

Vais corrigir e elevar o website KLAgency com base
numa auditoria visual e técnica real do site actual.

Lê este documento completo antes de escrever qualquer código.

> ⚠️ REGRAS ABSOLUTAS:
> - Não recriar o que já funciona
> - Não alterar copy, paleta ou fontes
> - Após cada correcção: npm run build + reportar
> - Trabalhar por ordem — do mais crítico para o menos crítico

---

## ESTADO ACTUAL — O QUE A AUDITORIA REVELOU

| Elemento | Estado | Problema |
|---|---|---|
| Hero — imagem | ⚠️ Existe mas é imagem errada | Usar 1.jpg em vez da actual |
| Hero — K watermark | ❌ Não existe | Criar e adicionar |
| Logo header | ❌ CSS/texto puro | Substituir por 3.jpg |
| Logo footer | ❌ CSS/texto puro | Substituir por 3.jpg |
| Serviços | ❌ Grid texto puro sem imagens | Converter para Swiper com imagens |
| Portfólio — imagens | ❌ Todas quebradas (naturalWidth: 0) | Corrigir caminhos |
| Portfólio — hover overlay | ❌ Não existe | Adicionar overlay que sobe no hover |
| Portfólio — filtro | ❌ Não existe | Adicionar filtro por categoria |
| Ticker — logos | ❌ Todos quebrados (naturalWidth: 0) | Corrigir caminhos das imagens |
| Depoimentos | ❌ Secção não existe | Criar componente Testimonial |
| Animações Framer Motion | ⚠️ Usa CSS custom | Verificar se está implementado |

---

## CORRECÇÃO 1 — IMAGENS QUEBRADAS (CRÍTICO — FAZER PRIMEIRO)

Este é o problema mais urgente. Ticker e portfólio têm imagens
com `naturalWidth: 0` — significa que os caminhos estão errados.

```bash
# Verificar caminhos reais das imagens
ls public/Imagens/
```

Depois verificar em `components/ClientsTicker.tsx` e `components/Portfolio.tsx`
quais são os caminhos usados e corrigir para os caminhos reais.

Caminhos correctos (conforme ficheiros disponíveis):
```
/Imagens/1.jpg   /Imagens/2.jpg   /Imagens/3.jpg
/Imagens/4.jpg   /Imagens/5.jpg   /Imagens/6.png
/Imagens/7.jpg   /Imagens/8.png   /Imagens/9.png
/Imagens/10.png  /Imagens/11.png  /Imagens/12.jpg
/Imagens/13.jpg  /Imagens/14.jpg  /Imagens/15.webp
/Imagens/16.jpg  /Imagens/17.jpg  /Imagens/18.jpg
/Imagens/19.jpg
```

Após correcção: npm run build + verificar no browser se imagens carregam.

---

## CORRECÇÃO 2 — HERO: IMAGEM CERTA + K WATERMARK

### 2A — Substituir imagem do Hero

A imagem actual do Hero não é a correcta.
Abrir `components/Hero.tsx` e substituir o src da imagem:

```tsx
// ERRADO (imagem actual):
src="/Imagens/7.jpg"   // ou qualquer outra

// CORRECTO — imagem 1.jpg (executivo corporativo KLAgency):
src="/Imagens/1.jpg"
```

Manter overlay e todo o resto igual. Apenas trocar o src.

### 2B — Adicionar K Watermark

A auditoria confirmou que o K watermark NÃO existe no Hero.
Adicionar DENTRO da section do Hero, após o overlay e ANTES do conteúdo:

```tsx
{/* K Watermark — OBRIGATÓRIO */}
<div style={{
  position: 'absolute',
  right: '-2%',
  top: '50%',
  transform: 'translateY(-55%)',
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'clamp(280px, 30vw, 520px)',
  color: 'rgba(255,255,255,0.025)',
  lineHeight: 1,
  userSelect: 'none',
  pointerEvents: 'none',
  letterSpacing: '-0.05em',
  zIndex: 1,
}}>K</div>
```

Verificar que a section tem `position: 'relative'` e `overflow: 'hidden'`.

---

## CORRECÇÃO 3 — LOGO OFICIAL 3.jpg

A auditoria confirmou: header e footer usam CSS/texto puro.
Substituir pelo logo real em ambos os componentes.

### 3A — Header.tsx

```tsx
import Image from 'next/image';

// Substituir o bloco do logo actual por:
<a href="#home" style={{
  display: 'flex', alignItems: 'center',
  gap: 10, textDecoration: 'none',
}}>
  <div style={{ position: 'relative', width: 36, height: 36 }}>
    <Image
      src="/Imagens/3.jpg"
      alt="KLAgency Logo"
      fill
      style={{ objectFit: 'contain' }}
      priority
    />
  </div>
  <span style={{
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    fontSize: '0.95rem',
    letterSpacing: '0.06em',
    color: '#fff',
  }}>KLAgency</span>
</a>
```

### 3B — Footer.tsx

```tsx
{/* Logo no footer */}
<div style={{
  display: 'flex', alignItems: 'center',
  gap: 10, marginBottom: '0.5rem',
}}>
  <div style={{ position: 'relative', width: 32, height: 32 }}>
    <Image
      src="/Imagens/3.jpg"
      alt="KLAgency Logo"
      fill
      style={{ objectFit: 'contain' }}
    />
  </div>
  <span style={{
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: '1.1rem',
    color: '#fff',
  }}>KLAgency</span>
</div>
```

### 3C — About.tsx — badge sobre a imagem da equipa

```tsx
{/* Badge com logo real */}
<div style={{
  position: 'absolute', bottom: 20, left: 20,
  background: 'rgba(2,6,23,0.85)',
  backdropFilter: 'blur(12px)',
  border: '1px solid var(--kl-border)',
  borderRadius: 10,
  padding: '0.8rem 1.2rem',
  display: 'flex', alignItems: 'center', gap: 10,
}}>
  <div style={{ position: 'relative', width: 28, height: 28 }}>
    <Image
      src="/Imagens/3.jpg"
      alt="KLAgency"
      fill
      style={{ objectFit: 'contain' }}
    />
  </div>
  <div>
    <div style={{
      fontFamily: 'var(--font-display)',
      fontWeight: 600, fontSize: '1rem', color: '#fff',
    }}>KLAgency</div>
    <div style={{
      fontSize: '0.68rem', color: 'var(--kl-muted)',
      letterSpacing: '0.06em',
    }}>Maputo, Moçambique</div>
  </div>
</div>
```

---

## CORRECÇÃO 4 — PORTFÓLIO: HOVER OVERLAY + FILTRO

A auditoria confirmou: sem hover overlay, sem filtro por categoria.

Abrir `components/Portfolio.tsx` e fazer as seguintes adições:

### 4A — Adicionar filtro por categoria no topo

```tsx
'use client';
import { useState } from 'react';

const FILTERS = ['Todos', 'Branding', 'Estratégia', 'Marketing', 'Identidade'];

// Dentro do componente:
const [active, setActive] = useState('Todos');

const visible = active === 'Todos'
  ? PORTFOLIO_ITEMS
  : PORTFOLIO_ITEMS.filter(p =>
      p.category.toLowerCase() === active.toLowerCase()
    );

// Adicionar antes do grid — botões de filtro:
<div style={{
  display: 'flex', gap: '0.5rem',
  flexWrap: 'wrap', marginBottom: '2.5rem',
}}>
  {FILTERS.map(f => (
    <button
      key={f}
      onClick={() => setActive(f)}
      style={{
        padding: '6px 16px',
        borderRadius: 99,
        border: active === f
          ? '1px solid rgba(37,99,235,0.6)'
          : '1px solid var(--kl-border)',
        background: active === f
          ? 'rgba(37,99,235,0.15)'
          : 'transparent',
        color: active === f ? '#93C5FD' : 'var(--kl-muted)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.72rem',
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.2s',
      }}
    >{f}</button>
  ))}
</div>
```

### 4B — Adicionar hover overlay em cada card

Cada card do portfólio precisa de um overlay que sobe no hover.
Adicionar ao container de cada card:

```tsx
// Wrapper do card — adicionar classe e position relative:
<div
  className="portfolio-card"
  style={{
    position: 'relative',
    borderRadius: 12,
    overflow: 'hidden',
    border: '1px solid var(--kl-border)',
    cursor: 'pointer',
  }}
>
  {/* Imagem existente mantém-se */}

  {/* NOVO: Overlay que sobe no hover */}
  <div className="portfolio-overlay" style={{
    position: 'absolute',
    bottom: '-100%',
    left: 0, right: 0,
    background: 'rgba(2,6,23,0.92)',
    backdropFilter: 'blur(12px)',
    padding: '1.2rem 1.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTop: '1px solid var(--kl-border-hover)',
    transition: 'bottom 0.35s ease',
  }}>
    <div>
      <div style={{
        fontSize: '0.65rem', fontWeight: 600,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: '#93C5FD', marginBottom: '0.25rem',
      }}>{item.category}</div>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 600, fontSize: '0.95rem', color: '#fff',
      }}>{item.client}</div>
      <div style={{
        fontSize: '0.72rem', color: 'var(--kl-muted)',
        marginTop: '0.2rem', fontStyle: 'italic',
      }}>"{item.result}"</div>
    </div>
    <div style={{
      width: 36, height: 36, borderRadius: '50%',
      border: '1px solid var(--kl-border-hover)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center',
      color: '#fff', fontSize: '1.2rem', flexShrink: 0,
    }}>+</div>
  </div>
</div>
```

### 4C — Adicionar CSS de hover ao globals.css

```css
/* Portfolio hover effects */
.portfolio-card:hover .portfolio-overlay {
  bottom: 0 !important;
}
.portfolio-card:hover img {
  transform: scale(1.05) !important;
}
.portfolio-card img {
  transition: transform 500ms cubic-bezier(0.61, 1, 0.88, 1) !important;
}
```

---

## CORRECÇÃO 5 — SERVIÇOS: SWIPER COM IMAGENS

A auditoria confirmou: grid estático com texto puro, sem imagens.
Substituir o componente Services.tsx pelo Swiper com cards de imagem.

Usar a estrutura definida no ficheiro:
`passo a passo/PROMPT_SECCOES_L99_KLAGENCY.md` — SECÇÃO 1.

Imagens a usar por serviço:
```
01 Posicionamento  → /Imagens/1.jpg
02 Estratégia      → /Imagens/7.jpg
03 Growth          → /Imagens/15.webp
04 Consultoria     → /Imagens/14.jpg
05 Marketing       → /Imagens/12.jpg
06 Branding        → /Imagens/17.jpg
```

---

## CORRECÇÃO 6 — DEPOIMENTOS: CRIAR COMPONENTE

A auditoria confirmou: secção de depoimentos não existe.
Criar `components/Testimonial.tsx` usando a estrutura definida em:
`passo a passo/PROMPT_SECCOES_L99_KLAGENCY.md` — SECÇÃO 2.

Regra obrigatória: retorna null se array de depoimentos estiver vazio.
Adicionar em `app/page.tsx` entre Portfolio e CTA.

---

## CORRECÇÃO 7 — K WATERMARK NO CTA

Verificar `components/CTA.tsx`.
Se não tiver K watermark, adicionar:

```tsx
{/* K Watermark no CTA */}
<div style={{
  position: 'absolute',
  left: '-3%',
  bottom: '-10%',
  fontFamily: 'var(--font-display)',
  fontWeight: 700,
  fontSize: 'clamp(200px, 25vw, 400px)',
  color: 'rgba(255,255,255,0.02)',
  lineHeight: 1,
  userSelect: 'none',
  pointerEvents: 'none',
}}>K</div>
```

---

## ORDEM DE EXECUÇÃO — DO MAIS CRÍTICO

```
CORRECÇÃO 1 → Imagens quebradas (ticker + portfólio) → build ✅
CORRECÇÃO 2 → Hero: imagem 1.jpg + K watermark → build ✅
CORRECÇÃO 3 → Logo 3.jpg em header + footer + about → build ✅
CORRECÇÃO 4 → Portfólio: hover overlay + filtro → build ✅
CORRECÇÃO 5 → Serviços: Swiper com imagens → build ✅
CORRECÇÃO 6 → Depoimentos: criar componente → build ✅
CORRECÇÃO 7 → K watermark no CTA → build ✅
FINAL       → Auditoria visual + commit + push ✅
```

**Parar após cada correcção. Reportar resultado do build.**

---

## CHECKLIST FINAL

**CRÍTICO:**
- [ ] Imagens do ticker carregam (naturalWidth > 0)
- [ ] Imagens do portfólio carregam (naturalWidth > 0)
- [ ] Hero usa imagem 1.jpg
- [ ] K watermark visível no Hero
- [ ] Logo 3.jpg no header
- [ ] Logo 3.jpg no footer
- [ ] Logo 3.jpg no badge do About

**ELEVAÇÃO:**
- [ ] Portfólio tem filtro por categoria
- [ ] Portfólio tem hover overlay que sobe
- [ ] Serviços em Swiper com imagens e zoom
- [ ] Depoimentos: componente criado (null sem dados reais)
- [ ] K watermark no CTA

**TÉCNICO:**
- [ ] npm run build sem erros
- [ ] TypeScript sem erros
- [ ] Commit e push feito
- [ ] Deploy Vercel activo

---

*Baseado em auditoria real de klagency-website.vercel.app*
*Protocolo: PROTOCOLO_KLAGENCY_WEBSITE.md*
*Versão: Cirúrgica — corrige apenas o que falta*
