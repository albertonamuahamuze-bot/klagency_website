"use client";

import { useState } from "react";
import Image from "next/image";
import { FadeUpScroll, StaggerScroll, StaggerScrollItem } from "./AnimateOnScroll";

const FILTERS = ["Todos", "Branding", "Estratégia", "Marketing", "Identidade"];

const PORTFOLIO_ITEMS = [
  {
    client:      "Bispo Kobebissá",
    logo:        "/Imagens/8.png",
    photo:       "/Imagens/9.png",
    category:    "Branding · Posicionamento",
    description: "Construção da identidade visual e posicionamento estratégico do Bispo Kobebissá como líder de referência.",
    result:      "Presença digital consolidada com identidade premium reconhecível.",
  },
  {
    client:      "IP-MLNG",
    logo:        "/Imagens/4.jpg",
    photo:       null,
    category:    "Estratégia · Comunicação",
    description: "Desenvolvimento de estratégia de comunicação institucional para o Instituto Politécnico MLNG.",
    result:      "Comunicação clara, confiável e pronta para crescer.",
  },
  {
    client:      "Nelson Santana",
    logo:        "/Imagens/6.png",
    photo:       null,
    category:    "Branding · Identidade",
    description: "Criação de identidade corporativa para a marca Nelson Santana.",
    result:      "Marca com presença forte e reconhecimento imediato.",
  },
  {
    client:      "ECU Despachante",
    logo:        "/Imagens/2.jpg",
    photo:       null,
    category:    "Marketing · Posicionamento",
    description: "Posicionamento estratégico e comunicação digital para a ECU Despachante Aduaneiro.",
    result:      "Autoridade consolidada no sector aduaneiro.",
  },
  {
    client:      "Serena Luz",
    logo:        "/Imagens/5.jpg",
    photo:       null,
    category:    "Branding · Identidade",
    description: "Identidade visual e estratégia de marca para a Serena Luz.",
    result:      "Identidade própria com presença reconhecível.",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("Todos");

  const visible =
    active === "Todos"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((p) =>
          p.category.toLowerCase().includes(active.toLowerCase())
        );

  return (
    <section
      id="portfolio"
      style={{
        background: "var(--kl-navy)",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Header */}
        <FadeUpScroll>
          <div style={{ marginBottom: "2.5rem" }}>
            <div className="kl-label" style={{ marginBottom: "1rem" }}>Portfólio</div>
            <div className="kl-divider" style={{ marginBottom: "1.5rem" }} />
            <h2
              className="kl-heading"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#fff", maxWidth: 520 }}
            >
              Marcas que já{" "}
              <em style={{ color: "#93C5FD", fontStyle: "italic" }}>lideraram</em>{" "}
              connosco.
            </h2>
          </div>
        </FadeUpScroll>

        {/* Filtros */}
        <FadeUpScroll delay={0.1}>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: "6px 16px",
                  borderRadius: 99,
                  border: active === f
                    ? "1px solid rgba(37,99,235,0.6)"
                    : "1px solid var(--kl-border)",
                  background: active === f
                    ? "rgba(37,99,235,0.15)"
                    : "transparent",
                  color: active === f ? "#93C5FD" : "var(--kl-muted)",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeUpScroll>

        {/* Grid */}
        <StaggerScroll style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {visible.map((item) => (
            <StaggerScrollItem key={item.client}>
              <div
                className="portfolio-card"
                style={{
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--kl-border)",
                  cursor: "pointer",
                  background: "linear-gradient(135deg, rgba(5,12,58,0.80) 0%, rgba(0,5,155,0.30) 100%)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Foto (se existir) */}
                {item.photo ? (
                  <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                    <Image
                      src={item.photo}
                      alt={item.client}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(2,6,23,0.7) 0%, transparent 60%)",
                    }} />
                  </div>
                ) : (
                  /* Placeholder com logo centrado quando não há foto */
                  <div style={{
                    height: 120,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(0,5,155,0.12)",
                    borderBottom: "1px solid var(--kl-border)",
                  }}>
                    <div style={{ position: "relative", width: 100, height: 48 }}>
                      <Image
                        src={item.logo}
                        alt={item.client}
                        fill
                        style={{
                          objectFit: "contain",
                          filter: "brightness(0) invert(1)",
                          opacity: 0.35,
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Conteúdo do card */}
                <div style={{ padding: "1.4rem" }}>
                  {/* Logo + categoria */}
                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", marginBottom: "1rem",
                  }}>
                    <div style={{ height: 32, width: 88, position: "relative" }}>
                      <Image
                        src={item.logo}
                        alt={item.client}
                        fill
                        style={{ objectFit: "contain", objectPosition: "left" }}
                      />
                    </div>
                    <span className="kl-tag" style={{ fontSize: "0.6rem" }}>
                      {item.category.split(" · ")[0]}
                    </span>
                  </div>

                  {/* Nome */}
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 600,
                    fontSize: "1rem", color: "#fff", marginBottom: "0.4rem",
                  }}>
                    {item.client}
                  </div>

                  {/* Categoria */}
                  <div style={{
                    fontSize: "0.68rem", color: "#93C5FD",
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    marginBottom: "0.75rem",
                  }}>
                    {item.category}
                  </div>

                  {/* Descrição */}
                  <p style={{
                    fontSize: "0.8rem", color: "var(--kl-muted)",
                    lineHeight: 1.65, marginBottom: "1rem",
                  }}>
                    {item.description}
                  </p>

                  {/* Resultado */}
                  <div style={{
                    borderTop: "1px solid var(--kl-border)",
                    paddingTop: "0.75rem",
                    fontSize: "0.75rem",
                    color: "var(--kl-silver)",
                    fontStyle: "italic",
                  }}>
                    &ldquo;{item.result}&rdquo;
                  </div>
                </div>

                {/* Hover overlay — sobe do fundo */}
                <div className="portfolio-overlay" style={{
                  position: "absolute",
                  bottom: "-100%",
                  left: 0, right: 0,
                  background: "rgba(2,6,23,0.92)",
                  backdropFilter: "blur(12px)",
                  padding: "1.2rem 1.4rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid var(--kl-border-hover)",
                  transition: "bottom 0.35s ease",
                }}>
                  <div>
                    <div style={{
                      fontSize: "0.65rem", fontWeight: 600,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      color: "#93C5FD", marginBottom: "0.25rem",
                    }}>{item.category}</div>
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600, fontSize: "0.95rem", color: "#fff",
                    }}>{item.client}</div>
                    <div style={{
                      fontSize: "0.72rem", color: "var(--kl-muted)",
                      marginTop: "0.2rem", fontStyle: "italic",
                    }}>&ldquo;{item.result}&rdquo;</div>
                  </div>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1px solid var(--kl-border-hover)",
                    display: "flex", alignItems: "center",
                    justifyContent: "center",
                    color: "#fff", fontSize: "1.2rem", flexShrink: 0,
                  }}>+</div>
                </div>

              </div>
            </StaggerScrollItem>
          ))}
        </StaggerScroll>

      </div>
    </section>
  );
}
