"use client";

import Image from "next/image";
import { ClientLogo, FadeScroll } from "./AnimateOnScroll";

const CLIENTS = [
  { name: "IP-MLNG",           logo: "/Imagens/4.jpg",  invert: true  },
  { name: "ECU Despachante",   logo: "/Imagens/2.jpg",  invert: true  },
  { name: "Nelson Santana",    logo: "/Imagens/6.png",  invert: false },
  { name: "Bispo Kobebissá",   logo: "/Imagens/8.png",  invert: true  },
  { name: "Serena Luz",        logo: "/Imagens/5.jpg",  invert: true  },
];

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
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <ClientLogo key={`${client.name}-${i}`}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 48, padding: "0 1rem" }}>
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={48}
                  style={{
                    objectFit: "contain",
                    filter: client.invert ? "brightness(0) invert(1)" : "brightness(10)",
                    opacity: 0.55,
                    maxHeight: 40,
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
                />
              </div>
            </ClientLogo>
          ))}
        </div>
      </div>
    </section>
  );
}
