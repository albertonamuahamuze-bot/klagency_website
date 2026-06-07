"use client";

import { ClientLogo, FadeScroll } from "./AnimateOnScroll";

const CLIENTS = [
  "IP-MLNG",
  "Bispo Kobbe",
  "Nelson Santana",
  "Serena Luz",
  "ECU",
  "Prosolar",
];

const items = [...CLIENTS, ...CLIENTS];

export default function ClientsTicker() {
  return (
    <section
      className="kl-ticker-wrapper"
      style={{
        background: "var(--kl-navy-soft, #050B3D)",
        padding: "2.5rem 0",
        borderTop: "1px solid var(--kl-border)",
        borderBottom: "1px solid var(--kl-border)",
        overflow: "hidden",
      }}
    >
      {/* Label com fade */}
      <FadeScroll style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--kl-muted)",
          }}
        >
          Aprovado por organizações de excelência e grande renome
        </p>
      </FadeScroll>

      {/* Máscara fade nas extremidades — padrão Dintell */}
      <div
        style={{
          overflow: "hidden",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <div className="kl-ticker-track">
          {items.map((client, i) => (
            <ClientLogo key={`${client}-${i}`}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "1.05rem",
                  color: "var(--kl-muted)",
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                }}
              >
                {client}
              </span>
            </ClientLogo>
          ))}
        </div>
      </div>
    </section>
  );
}
