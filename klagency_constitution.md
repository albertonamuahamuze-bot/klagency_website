# CONSTITUIÇÃO KLAGENCY WEBSITE

**Documento constitucional — inamovível sem autorização explícita do responsável.**  
**Versão:** 2.0 · Stack: Next.js + Vercel  

---

## NOME OFICIAL DA MARCA

**KLAgency** — sempre assim, sem excepção.

❌ NUNCA usar: `KL Agency` · `Agência KL` · `KL Agência` · `KLAGENCY` (em corpo de texto)  
✅ SEMPRE usar: `KLAgency`  
Em logótipo (header, footer, título): pode usar `KLAGENCY` apenas como tratamento gráfico.

---

## PALETA DE CORES OFICIAL

```css
:root {
  /* Brand */
  --kl-blue-deep:    #00059B;
  --kl-blue-mid:     #0D1FA8;
  --kl-blue-bright:  #2563EB;
  --kl-navy:         #020617;
  --kl-navy-soft:    #050B3D;
  --kl-navy-glass:   rgba(2, 6, 23, 0.72);

  /* Neutrals */
  --kl-white:        #FFFFFF;
  --kl-soft-white:   #F8FAFC;
  --kl-silver:       #CBD5E1;
  --kl-muted:        #94A3B8;
  --kl-border:       rgba(255, 255, 255, 0.10);
  --kl-border-hover: rgba(255, 255, 255, 0.22);

  /* Gradients */
  --kl-gradient:        linear-gradient(135deg, #020617 0%, #00059B 55%, #2563EB 100%);
  --kl-gradient-subtle: linear-gradient(160deg, #020617 0%, #050B3D 60%, #00059B 100%);
  --kl-gradient-card:   linear-gradient(135deg, rgba(5,12,58,0.80) 0%, rgba(0,5,155,0.30) 100%);

  /* Typography */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
}
```

**Cor de destaque em copy:** `#93C5FD` — usada para palavras em itálico nos headlines

---

## SISTEMA TIPOGRÁFICO OFICIAL

| Camada | Fonte | Pesos | Uso |
|---|---|---|---|
| **Display** | `Playfair Display` | 400, 500, 600, 700 + Italic | H1, H2, Logo, Quotes, Stats |
| **Body/UI** | `DM Sans` | 300, 400, 500, 600 | Corpo, Botões, Labels, Nav, Tags |

```tsx
// layout.tsx — configuração obrigatória
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

---

## INVARIANTES DE MARCA

As seguintes propriedades **nunca podem ser alteradas** sem autorização explícita:

1. **Cor principal:** `#00059B`
2. **Nome:** `KLAgency`
3. **Slogan:** `"Conexões que geram sucesso."`
4. **Fontes:** Playfair Display (display) + DM Sans (body/UI)
5. **Gradiente:** `linear-gradient(135deg, #020617 0%, #00059B 55%, #2563EB 100%)`
6. **Headline Hero:** `"Posicionamos marcas e líderes para dominar os seus mercados."`
7. **Manifesto:** `"A KLAgency não cria campanhas. Constrói percepção."`
8. **WhatsApp principal:** `+258 852 170 974` → `https://wa.me/258852170974`

---

## COPY INAMOVÍVEL — HEADLINES PRINCIPAIS

```
HERO:
  "Posicionamos marcas e líderes para dominar os seus mercados."
  ("dominar" — itálico, cor #93C5FD)

MANIFESTO:
  "A KLAgency não cria campanhas. Constrói percepção."
  ("Constrói percepção." — itálico, cor #93C5FD)

SERVIÇOS:
  "Soluções estratégicas. Menos ruído. Mais direcção."
  ("Mais direcção." — itálico, cor #93C5FD)

CTA:
  "A sua marca não precisa de mais ruído. Precisa de direcção."
  ("Precisa de direcção." — itálico, cor #93C5FD)

CONTACTO:
  "Vamos criar a próxima conexão estratégica."
```

---

## ELEMENTOS DE IDENTIDADE OBRIGATÓRIOS

### K Watermark
- Font: Playfair Display 700
- Tamanho: `clamp(280px, 30vw, 520px)` no Hero
- Opacidade: `rgba(255,255,255,0.025)` (2.5%)
- Posição Hero: direita, `top: 50%, transform: translateY(-55%)`
- Posição CTA: esquerda, `bottom: -10%`, opacidade 2%

### Glass Card
```css
background: var(--kl-gradient-card);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
border: 1px solid var(--kl-border);
border-radius: 20px;
transition: border-color 0.25s, transform 0.25s;
```

### Botão Primário
```css
background: #FFFFFF;
color: var(--kl-navy);
font-family: var(--font-body);
font-weight: 600;
border-radius: 12px;
padding: 14px 28px;
/* hover: translateY(-1px) + box-shadow azul */
```

### Botão Ghost
```css
background: transparent;
color: #FFFFFF;
border: 1px solid var(--kl-border-hover);
border-radius: 12px;
/* hover: rgba(255,255,255,0.07) */
```

### Tag / Pill
```css
background: rgba(37,99,235,0.15);
border: 1px solid rgba(37,99,235,0.30);
color: #93C5FD;
border-radius: 999px;
font-size: 0.72rem;
font-weight: 500;
letter-spacing: 0.08em;
text-transform: uppercase;
```

### Divider de Secção
```css
width: 48px;
height: 2px;
background: linear-gradient(90deg, #2563EB, transparent);
border-radius: 2px;
```

---

## ANIMAÇÕES OBRIGATÓRIAS

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes scrollLeft {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
}

/* Delays para Hero */
.delay-1 { animation-delay: 0.12s; }
.delay-2 { animation-delay: 0.24s; }
.delay-3 { animation-delay: 0.38s; }
.delay-4 { animation-delay: 0.52s; }
```

---

## LINKS OFICIAIS

| Destino | URL |
|---|---|
| WhatsApp principal | `https://wa.me/258852170974` |
| WhatsApp alternativo | `https://wa.me/258871170974` |
| Instagram | `https://www.instagram.com/k.l_agency/` |
| LinkedIn | `https://www.linkedin.com/company/klagency/` |
| Email | `geral@klagency.com` |
| Site | `www.klagency.com` |

---

## REGRAS DE IMAGEM

❌ Nunca usar imagens Unsplash genéricas novas  
❌ Nunca usar stock photos que não representem África executiva  
❌ Nunca inventar depoimentos, resultados ou citações  
✅ Usar gradiente `var(--kl-gradient)` como fundo do Hero  
✅ Placeholders: texto apenas para clientes (sem logos até ficheiros reais)  
✅ Portfólio sem foto de pessoa → não mostrar o campo  

---

## O QUE NUNCA FAZER

❌ Recriar o projecto do zero  
❌ Alterar estrutura de rotas sem necessidade  
❌ Adicionar dependências npm sem aprovação  
❌ Usar Inter, Roboto, Arial ou qualquer fonte não aprovada  
❌ Usar gradientes purple/neon  
❌ Inventar depoimentos, resultados ou textos  
❌ Alterar copy sem aprovação  
❌ Misturar português e inglês  
❌ Usar "Agência KL", "KL Agency" ou variantes  
❌ Alterar links de WhatsApp  
❌ Usar `--no-verify` em commits  

---

## CRITÉRIO DE APROVAÇÃO FINAL

> *"Quando o responsável entra no site e sente imediatamente que a KLAgency é séria, premium e estratégica — o trabalho está concluído."*

---

*Versão: 2.0 · Protocolo: V.R.E.F.I.N.A.R. · Design System: klagency-design-system.jsx*
