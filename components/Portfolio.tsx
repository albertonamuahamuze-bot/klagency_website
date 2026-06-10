"use client";

import Image from "next/image";
import { FadeUpScroll, StaggerScroll, StaggerScrollItem } from "./AnimateOnScroll";

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
          <div style={{ marginBottom: "3.5rem" }}>
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

        {/* Grid */}
        <StaggerScroll style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}>
          {PORTFOLIO_ITEMS.map((item) => (
            <StaggerScrollItem key={item.client}>
              <div className="kl-glass" style={{ padding: "1.8rem", height: "100%" }}>

                {/* Logo + categoria */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", marginBottom: "1.2rem",
                }}>
                  <div style={{ height: 36, width: 100, position: "relative" }}>
                    <Image
                      src={item.logo}
                      alt={item.client}
                      fill
                      style={{ objectFit: "contain", objectPosition: "left" }}
                    />
                  </div>
                  <span className="kl-tag" style={{ fontSize: "0.62rem" }}>
                    {item.category.split(" · ")[0]}
                  </span>
                </div>

                {/* Foto (se existir) */}
                {item.photo && (
                  <div style={{
                    position: "relative", height: 180,
                    borderRadius: 8, overflow: "hidden", marginBottom: "1.2rem",
                  }}>
                    <Image
                      src={item.photo}
                      alt={item.client}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center top" }}
                    />
                  </div>
                )}

                {/* Nome do cliente */}
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 600,
                  fontSize: "1rem", color: "#fff", marginBottom: "0.5rem",
                }}>
                  {item.client}
                </div>

                {/* Categoria */}
                <div style={{
                  fontSize: "0.7rem", color: "#93C5FD",
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  marginBottom: "0.8rem",
                }}>
                  {item.category}
                </div>

                {/* Descrição */}
                <p style={{
                  fontSize: "0.82rem", color: "var(--kl-muted)",
                  lineHeight: 1.65, marginBottom: "1rem",
                }}>
                  {item.description}
                </p>

                {/* Resultado */}
                <div style={{
                  borderTop: "1px solid var(--kl-border)",
                  paddingTop: "0.8rem",
                  fontSize: "0.78rem",
                  color: "var(--kl-silver)",
                  fontStyle: "italic",
                }}>
                  &ldquo;{item.result}&rdquo;
                </div>

              </div>
            </StaggerScrollItem>
          ))}
        </StaggerScroll>

      </div>
    </section>
  );
}
