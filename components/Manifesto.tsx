"use client";

import {
  FadeUpScroll,
  StaggerScroll,
  StaggerScrollItem,
  HoverLiftCard,
  HighlightReveal,
} from "./AnimateOnScroll";

const VALUES = [
  {
    icon: "◈",
    title: "Autoridade",
    desc: "Construímos presença que antecede a conversa.",
  },
  {
    icon: "◎",
    title: "Integridade",
    desc: "Conexão honesta. Sem atalhos, sem promessas vazias.",
  },
  {
    icon: "◆",
    title: "Excelência",
    desc: "O padrão mínimo é o que o cliente ainda não espera.",
  },
  {
    icon: "◉",
    title: "Inovação",
    desc: "Estratégia que evolui com o mercado e o lidera.",
  },
];

export default function Manifesto() {
  return (
    <section
      id="sobre"
      style={{
        background: "var(--kl-navy-soft, #050B3D)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "rgba(37,99,235,0.06)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
          position: "relative",
        }}
        className="flex-col-on-mobile"
      >
        {/* Left — Label + Headline + Body */}
        <div>
          <FadeUpScroll>
            <p className="kl-label" style={{ marginBottom: "1.2rem" }}>
              O Nosso Manifesto
            </p>
          </FadeUpScroll>

          <FadeUpScroll delay={0.08}>
            <div className="kl-divider" style={{ marginBottom: "1.8rem" }} />
          </FadeUpScroll>

          <FadeUpScroll delay={0.16}>
            <h2
              className="kl-heading"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
                color: "#fff",
                marginBottom: "1.8rem",
              }}
            >
              A KLAgency não cria campanhas.{" "}
              <HighlightReveal>
                <em style={{ color: "#93C5FD", fontStyle: "italic" }}>
                  Constrói percepção.
                </em>
              </HighlightReveal>
            </h2>
          </FadeUpScroll>

          <FadeUpScroll delay={0.24}>
            <p className="kl-body" style={{ marginBottom: "1.2rem" }}>
              Não vendemos serviços. Entregamos posicionamento. Cada marca que
              trabalhamos sai mais forte, mais clara e mais reconhecida.
            </p>
          </FadeUpScroll>

          <FadeUpScroll delay={0.32}>
            <p className="kl-body">
              Começamos pela raiz — identidade, propósito e clareza — antes de
              falar em estratégia. Porque uma marca sem fundação é apenas barulho.
            </p>
          </FadeUpScroll>
        </div>

        {/* Right — 2×2 values grid com StaggerScroll + HoverLiftCard */}
        <StaggerScroll
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          {VALUES.map(({ icon, title, desc }) => (
            <StaggerScrollItem key={title}>
              <HoverLiftCard style={{ height: "100%" }}>
                <div className="kl-glass" style={{ padding: "1.5rem", height: "100%" }}>
                  <div style={{ fontSize: "1.3rem", marginBottom: "0.7rem", color: "#60A5FA" }}>
                    {icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      marginBottom: "0.4rem",
                      color: "#fff",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--kl-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {desc}
                  </div>
                </div>
              </HoverLiftCard>
            </StaggerScrollItem>
          ))}
        </StaggerScroll>
      </div>

      {/* Transição suave Manifesto → Serviços */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        background: "linear-gradient(to bottom, transparent, #020617)",
        pointerEvents: "none",
      }} />

      {/* Mobile: stack columns */}
      <style>{`
        @media (max-width: 768px) {
          .flex-col-on-mobile {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
