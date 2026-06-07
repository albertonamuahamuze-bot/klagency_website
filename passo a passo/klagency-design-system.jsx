import { useState, useEffect, useRef } from "react";

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
// Google Fonts: Playfair Display (Display) + DM Sans (Body/UI)
const FONTS = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');`;

const CSS_VARS = `
  :root {
    /* Brand Colors — Official KLAgency */
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

    /* Gradient — principal */
    --kl-gradient:         linear-gradient(135deg, #020617 0%, #00059B 55%, #2563EB 100%);
    --kl-gradient-subtle:  linear-gradient(160deg, #020617 0%, #050B3D 60%, #00059B 100%);
    --kl-gradient-card:    linear-gradient(135deg, rgba(5,12,58,0.80) 0%, rgba(0,5,155,0.30) 100%);

    /* Typography */
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body:    'DM Sans', system-ui, sans-serif;

    /* Spacing */
    --space-xs:  0.5rem;
    --space-sm:  1rem;
    --space-md:  1.5rem;
    --space-lg:  2.5rem;
    --space-xl:  4rem;
    --space-2xl: 6rem;

    /* Radius */
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-xl: 32px;
  }
`;

// ─── INJECT FONTS & VARS ──────────────────────────────────────────────────────
function StyleInjector() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = FONTS + CSS_VARS + GLOBAL_CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
}

const GLOBAL_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: var(--font-body);
    background: var(--kl-navy);
    color: var(--kl-white);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ── Typography Scale ── */
  .kl-display {
    font-family: var(--font-display);
    font-weight: 600;
    line-height: 1.08;
    letter-spacing: -0.02em;
  }
  .kl-heading {
    font-family: var(--font-display);
    font-weight: 500;
    line-height: 1.18;
    letter-spacing: -0.015em;
  }
  .kl-subheading {
    font-family: var(--font-body);
    font-weight: 400;
    line-height: 1.65;
    letter-spacing: 0.01em;
    color: var(--kl-silver);
  }
  .kl-label {
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--kl-muted);
  }
  .kl-body {
    font-family: var(--font-body);
    font-weight: 300;
    line-height: 1.75;
    color: var(--kl-silver);
  }

  /* ── Buttons ── */
  .kl-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 28px;
    background: var(--kl-white);
    color: var(--kl-navy);
    font-family: var(--font-body);
    font-weight: 600;
    font-size: 0.88rem;
    letter-spacing: 0.04em;
    text-decoration: none;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    transition: all 0.22s ease;
  }
  .kl-btn-primary:hover {
    background: var(--kl-soft-white);
    transform: translateY(-1px);
    box-shadow: 0 12px 40px rgba(37,99,235,0.35);
  }
  .kl-btn-ghost {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 13px 24px;
    background: transparent;
    color: var(--kl-white);
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 0.88rem;
    letter-spacing: 0.03em;
    text-decoration: none;
    border-radius: var(--radius-md);
    border: 1px solid var(--kl-border-hover);
    cursor: pointer;
    transition: all 0.22s ease;
  }
  .kl-btn-ghost:hover {
    background: rgba(255,255,255,0.07);
    border-color: rgba(255,255,255,0.35);
  }

  /* ── Glass Card ── */
  .kl-glass {
    background: var(--kl-gradient-card);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--kl-border);
    border-radius: var(--radius-lg);
    transition: border-color 0.25s, transform 0.25s;
  }
  .kl-glass:hover {
    border-color: var(--kl-border-hover);
    transform: translateY(-3px);
  }

  /* ── Animations ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes scrollLeft {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .fade-up { animation: fadeUp 0.65s ease both; }
  .delay-1 { animation-delay: 0.12s; }
  .delay-2 { animation-delay: 0.24s; }
  .delay-3 { animation-delay: 0.38s; }
  .delay-4 { animation-delay: 0.52s; }

  /* ── Divider ── */
  .kl-divider {
    width: 48px;
    height: 2px;
    background: linear-gradient(90deg, var(--kl-blue-bright), transparent);
    border-radius: 2px;
  }

  /* ── Section ── */
  .kl-section {
    padding: var(--space-2xl) var(--space-lg);
    max-width: 1120px;
    margin: 0 auto;
  }

  /* ── Tag / Badge ── */
  .kl-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    background: rgba(37,99,235,0.15);
    border: 1px solid rgba(37,99,235,0.30);
    border-radius: 999px;
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #93C5FD;
  }
`;

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

// NAV
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      padding: "0 2rem",
      height: "68px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(2,6,23,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
      transition: "all 0.3s ease",
    }}>
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: "var(--kl-blue-deep)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem",
          color: "#fff", letterSpacing: "-0.02em",
        }}>K</div>
        <span style={{
          fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.95rem",
          letterSpacing: "0.06em", color: "#fff",
        }}>KLAgency</span>
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {["Sobre", "Serviços", "Portfólio", "Contacto"].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} style={{
            fontFamily: "var(--font-body)", fontSize: "0.83rem",
            fontWeight: 400, color: "var(--kl-silver)",
            textDecoration: "none", letterSpacing: "0.03em",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.target.style.color = "#fff"}
          onMouseLeave={e => e.target.style.color = "var(--kl-silver)"}
          >{item}</a>
        ))}
        <a href="https://wa.me/258852170974" className="kl-btn-primary" style={{ fontSize: "0.8rem", padding: "10px 20px" }}>
          Iniciar projecto →
        </a>
      </div>
    </nav>
  );
}

// HERO
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "var(--kl-gradient)",
      display: "flex", alignItems: "center",
      position: "relative", overflow: "hidden",
      padding: "0 2rem",
    }}>
      {/* Background texture */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(37,99,235,0.18) 0%, transparent 60%),
                          radial-gradient(circle at 80% 20%, rgba(0,5,155,0.25) 0%, transparent 50%)`,
        pointerEvents: "none",
      }}/>

      {/* K watermark */}
      <div style={{
        position: "absolute", right: "-2%", top: "50%",
        transform: "translateY(-55%)",
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: "clamp(280px, 30vw, 520px)",
        color: "rgba(255,255,255,0.025)",
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
        letterSpacing: "-0.05em",
      }}>K</div>

      {/* Content */}
      <div style={{ maxWidth: 1120, margin: "0 auto", width: "100%", paddingTop: "80px" }}>
        {/* Tag */}
        <div className="kl-tag fade-up" style={{ marginBottom: "2rem" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60A5FA", display: "inline-block" }}/>
          Estratégia · Posicionamento · Crescimento
        </div>

        {/* Headline */}
        <h1 className="kl-display fade-up delay-1" style={{
          fontSize: "clamp(2.8rem, 6vw, 5.2rem)",
          maxWidth: "780px",
          marginBottom: "1.8rem",
          color: "#fff",
        }}>
          Posicionamos marcas e líderes para{" "}
          <em style={{ fontStyle: "italic", color: "#93C5FD" }}>dominar</em>{" "}
          os seus mercados.
        </h1>

        {/* Subheading */}
        <p className="kl-subheading fade-up delay-2" style={{
          fontSize: "1.15rem", maxWidth: "560px",
          marginBottom: "3rem",
        }}>
          Da identidade à estratégia. Do posicionamento ao domínio.
          Trabalhamos com marcas que querem liderar — não apenas existir.
        </p>

        {/* CTA row */}
        <div className="fade-up delay-3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "4.5rem" }}>
          <a href="https://wa.me/258852170974" className="kl-btn-primary">
            Falar com a KLAgency →
          </a>
          <a href="#portfolio" className="kl-btn-ghost">
            Ver portfólio
          </a>
        </div>

        {/* Stats row */}
        <div className="fade-up delay-4" style={{
          display: "flex", gap: "3rem", flexWrap: "wrap",
          borderTop: "1px solid var(--kl-border)", paddingTop: "2.5rem",
        }}>
          {[
            { num: "+100", label: "Projectos entregues" },
            { num: "+20",  label: "Marcas posicionadas" },
            { num: "4",    label: "Pilares estratégicos" },
            { num: "100%", label: "Compromisso" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: "var(--font-display)", fontWeight: 600,
                fontSize: "2rem", color: "#fff", lineHeight: 1,
                marginBottom: "0.35rem",
              }}>{num}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--kl-muted)", letterSpacing: "0.05em" }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// MANIFESTO
function Manifesto() {
  return (
    <section style={{
      background: "var(--kl-navy-soft)",
      padding: "var(--space-2xl) 2rem",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left: Label + Headline */}
          <div>
            <div className="kl-label" style={{ marginBottom: "1.2rem" }}>O Nosso Manifesto</div>
            <div className="kl-divider" style={{ marginBottom: "1.8rem" }}/>
            <h2 className="kl-heading" style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)", color: "#fff", marginBottom: "1.8rem" }}>
              A KLAgency não cria campanhas.{" "}
              <span style={{ color: "#93C5FD", fontStyle: "italic" }}>Constrói percepção.</span>
            </h2>
            <p className="kl-body" style={{ marginBottom: "1.2rem" }}>
              Não vendemos serviços. Entregamos posicionamento. Cada marca que trabalhamos
              sai mais forte, mais clara e mais reconhecida.
            </p>
            <p className="kl-body">
              Começamos pela raiz — identidade, propósito e clareza — antes de falar em
              estratégia. Porque uma marca sem fundação é apenas barulho.
            </p>
          </div>

          {/* Right: Values grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { icon: "◈", title: "Autoridade",  desc: "Construímos presença que antecede a conversa." },
              { icon: "◎", title: "Integridade", desc: "Conexão honesta. Sem atalhos, sem promessas vazias." },
              { icon: "◆", title: "Excelência",  desc: "O padrão mínimo é o que o cliente ainda não espera." },
              { icon: "◉", title: "Inovação",    desc: "Estratégia que evolui com o mercado e o lidera." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="kl-glass" style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "1.3rem", marginBottom: "0.7rem", color: "#60A5FA" }}>{icon}</div>
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.4rem", color: "#fff" }}>{title}</div>
                <div style={{ fontSize: "0.78rem", color: "var(--kl-muted)", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// SERVICES
const SERVICES = [
  {
    number: "01",
    category: "Posicionamento",
    title: "Definimos onde a sua marca compete — e como ganha.",
    desc: "Território, público e mensagem central. Clareza estratégica antes de qualquer execução.",
  },
  {
    number: "02",
    category: "Estratégia de Marca",
    title: "Construímos o mapa. A sua marca para de reagir e começa a liderar.",
    desc: "Direção clara para decisões melhores. Do propósito à expressão — em todos os pontos de contacto.",
  },
  {
    number: "03",
    category: "Growth",
    title: "Crescimento não é acidente. É arquitectura.",
    desc: "Tracção para marcas em movimento. Estruturas de escala sustentadas por estratégia real.",
  },
  {
    number: "04",
    category: "Consultoria",
    title: "Trabalhamos ao lado de quem decide — com clareza, sem rodeios.",
    desc: "Apoio estratégico para líderes que querem crescer com intenção e dominar o seu sector.",
  },
  {
    number: "05",
    category: "Marketing",
    title: "Comunicação que posiciona, não apenas que aparece.",
    desc: "Campanhas com função e resultado. Cada mensagem serve um propósito estratégico.",
  },
  {
    number: "06",
    category: "Branding",
    title: "A sua marca precisa de ser reconhecida antes de ser explicada.",
    desc: "Sistema visual e verbal coerente. Identidade que comunica autoridade ao primeiro contacto.",
  },
];

function Services() {
  const [active, setActive] = useState(0);

  return (
    <section style={{
      background: "var(--kl-navy)",
      padding: "var(--space-2xl) 2rem",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div className="kl-label" style={{ marginBottom: "1rem" }}>Serviços</div>
          <div className="kl-divider" style={{ marginBottom: "1.5rem" }}/>
          <h2 className="kl-heading" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#fff", maxWidth: 520 }}>
            Soluções estratégicas.{" "}
            <span style={{ color: "#93C5FD", fontStyle: "italic" }}>Menos ruído. Mais direcção.</span>
          </h2>
        </div>

        {/* Service list */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", border: "1px solid var(--kl-border)", borderRadius: "var(--radius-lg)" }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.number}
              onClick={() => setActive(i)}
              style={{
                padding: "2rem 2.2rem",
                background: active === i ? "rgba(37,99,235,0.12)" : "transparent",
                borderBottom: i < 4 ? "1px solid var(--kl-border)" : "none",
                borderRight: i % 2 === 0 ? "1px solid var(--kl-border)" : "none",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { if (active !== i) e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              onMouseLeave={e => { if (active !== i) e.currentTarget.style.background = "transparent"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: 400,
                  fontSize: "0.75rem", color: active === i ? "#60A5FA" : "var(--kl-muted)",
                  letterSpacing: "0.1em",
                }}>{s.number}</span>
                <span className="kl-tag" style={{ fontSize: "0.65rem", padding: "3px 10px" }}>{s.category}</span>
              </div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 500,
                fontSize: "1rem", color: active === i ? "#fff" : "var(--kl-silver)",
                lineHeight: 1.4, marginBottom: "0.7rem",
              }}>{s.title}</h3>
              <p style={{
                fontSize: "0.8rem", color: "var(--kl-muted)", lineHeight: 1.65,
                maxHeight: active === i ? "80px" : "0px",
                overflow: "hidden", transition: "max-height 0.3s ease",
              }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CLIENTS TICKER
const CLIENTS = ["IP-MLNG", "Bispo Kobbe", "Nelson Santana", "Serena Luz", "ECU", "Prosolar"];

function ClientsTicker() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section style={{
      background: "var(--kl-navy-soft)",
      padding: "3rem 0",
      borderTop: "1px solid var(--kl-border)",
      borderBottom: "1px solid var(--kl-border)",
      overflow: "hidden",
    }}>
      <div style={{
        display: "flex", gap: "4rem",
        animation: "scrollLeft 22s linear infinite",
        width: "max-content",
      }}>
        {items.map((c, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-display)", fontWeight: 400,
            fontSize: "1.05rem", color: "var(--kl-muted)",
            letterSpacing: "0.08em", whiteSpace: "nowrap",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.target.style.color = "#fff"}
          onMouseLeave={e => e.target.style.color = "var(--kl-muted)"}
          >{c}</span>
        ))}
      </div>
    </section>
  );
}

// CTA SECTION
function CTA() {
  return (
    <section style={{
      background: "var(--kl-gradient-subtle)",
      padding: "var(--space-2xl) 2rem",
      position: "relative", overflow: "hidden",
    }}>
      {/* K watermark */}
      <div style={{
        position: "absolute", left: "-3%", bottom: "-10%",
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: "clamp(200px, 25vw, 400px)",
        color: "rgba(255,255,255,0.02)",
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
      }}>K</div>

      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div className="kl-tag" style={{ marginBottom: "2rem", display: "inline-flex" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#60A5FA", display: "inline-block" }}/>
          A sua próxima fase começa aqui
        </div>
        <h2 className="kl-heading" style={{
          fontSize: "clamp(2rem, 4vw, 3.4rem)", color: "#fff",
          marginBottom: "1.5rem",
        }}>
          A sua marca não precisa de mais ruído.{" "}
          <span style={{ color: "#93C5FD", fontStyle: "italic" }}>Precisa de direcção.</span>
        </h2>
        <p className="kl-subheading" style={{ fontSize: "1.1rem", marginBottom: "2.8rem" }}>
          A sua próxima fase começa com uma conversa.
        </p>
        <a href="https://wa.me/258852170974" className="kl-btn-primary" style={{ fontSize: "0.9rem" }}>
          Iniciar conversa estratégica →
        </a>
      </div>
    </section>
  );
}

// TYPOGRAPHY SHOWCASE
function TypographyShowcase() {
  return (
    <section style={{
      background: "#020617",
      padding: "var(--space-2xl) 2rem",
      borderTop: "1px solid var(--kl-border)",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div className="kl-label" style={{ marginBottom: "2rem", color: "#60A5FA" }}>
          Design System · Tipografia Oficial
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          {/* Display font */}
          <div>
            <div style={{ fontSize: "0.72rem", color: "var(--kl-muted)", letterSpacing: "0.1em", marginBottom: "0.8rem", textTransform: "uppercase" }}>
              Playfair Display — Títulos
            </div>
            <div className="kl-glass" style={{ padding: "2rem" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "2.2rem", color: "#fff", marginBottom: "0.5rem", lineHeight: 1.1 }}>
                Autoridade.<br/>
                <span style={{ fontStyle: "italic", color: "#93C5FD" }}>Estratégia.</span>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontStyle: "italic", fontSize: "1rem", color: "var(--kl-muted)" }}>
                "Conexões que geram sucesso."
              </div>
              <div style={{ marginTop: "1.2rem", borderTop: "1px solid var(--kl-border)", paddingTop: "1rem" }}>
                {[700, 600, 500, 400].map(w => (
                  <div key={w} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: w, fontSize: "1rem", color: "#fff" }}>KLAgency</span>
                    <span style={{ fontSize: "0.7rem", color: "var(--kl-muted)" }}>Weight {w}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Body font */}
          <div>
            <div style={{ fontSize: "0.72rem", color: "var(--kl-muted)", letterSpacing: "0.1em", marginBottom: "0.8rem", textTransform: "uppercase" }}>
              DM Sans — Corpo e UI
            </div>
            <div className="kl-glass" style={{ padding: "2rem" }}>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", marginBottom: "0.8rem" }}>
                KLAGENCY · ESTRATÉGIA
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontWeight: 300, fontSize: "0.95rem", color: "var(--kl-silver)", lineHeight: 1.75, marginBottom: "1rem" }}>
                Da identidade à estratégia. Do posicionamento ao domínio. 
                Trabalhamos com marcas que querem liderar — não apenas existir.
              </div>
              <div style={{ marginTop: "0.5rem", borderTop: "1px solid var(--kl-border)", paddingTop: "1rem" }}>
                {[
                  { w: 600, label: "Semibold — Botões, Labels" },
                  { w: 400, label: "Regular — Navegação" },
                  { w: 300, label: "Light — Corpo de texto" },
                ].map(({ w, label }) => (
                  <div key={w} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.35rem" }}>
                    <span style={{ fontFamily: "var(--font-body)", fontWeight: w, fontSize: "0.88rem", color: "#fff" }}>KLAgency</span>
                    <span style={{ fontSize: "0.68rem", color: "var(--kl-muted)" }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Color palette */}
        <div style={{ marginTop: "3rem" }}>
          <div style={{ fontSize: "0.72rem", color: "var(--kl-muted)", letterSpacing: "0.1em", marginBottom: "1.2rem", textTransform: "uppercase" }}>
            Paleta Oficial
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {[
              { name: "Deep Blue",   hex: "#00059B", var: "--kl-blue-deep" },
              { name: "Navy",        hex: "#020617", var: "--kl-navy" },
              { name: "Navy Soft",   hex: "#050B3D", var: "--kl-navy-soft" },
              { name: "Bright Blue", hex: "#2563EB", var: "--kl-blue-bright" },
              { name: "Silver",      hex: "#CBD5E1", var: "--kl-silver" },
              { name: "White",       hex: "#FFFFFF", var: "--kl-white" },
            ].map(({ name, hex, var: v }) => (
              <div key={hex} style={{ textAlign: "center" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 12,
                  background: hex,
                  border: hex === "#FFFFFF" ? "1px solid rgba(255,255,255,0.15)" : "none",
                  marginBottom: "0.5rem",
                }}/>
                <div style={{ fontSize: "0.68rem", color: "#fff", fontWeight: 500 }}>{name}</div>
                <div style={{ fontSize: "0.62rem", color: "var(--kl-muted)", fontFamily: "monospace" }}>{hex}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FOOTER
function Footer() {
  return (
    <footer style={{
      background: "#010412",
      padding: "3rem 2rem",
      borderTop: "1px solid var(--kl-border)",
    }}>
      <div style={{
        maxWidth: 1120, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1.5rem",
      }}>
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 600,
            fontSize: "1.1rem", color: "#fff", marginBottom: "0.3rem",
          }}>KLAgency</div>
          <div style={{ fontSize: "0.78rem", color: "var(--kl-muted)" }}>Conexões que geram sucesso.</div>
        </div>
        <div style={{ fontSize: "0.75rem", color: "var(--kl-muted)" }}>
          © 2026 KLAgency. Todos os direitos reservados. · www.klagency.com
        </div>
      </div>
    </footer>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function KLAgencyDesignSystem() {
  return (
    <>
      <StyleInjector />
      <div style={{ background: "var(--kl-navy)", minHeight: "100vh" }}>
        <Nav />
        <Hero />
        <Manifesto />
        <Services />
        <ClientsTicker />
        <CTA />
        <TypographyShowcase />
        <Footer />
      </div>
    </>
  );
}
