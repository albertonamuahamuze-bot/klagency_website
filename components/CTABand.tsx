"use client";

import { WHATSAPP_PRIMARY } from "@/lib/constants";

export default function CTABand() {
  return (
    <section
      style={{
        height: 98,
        background: "var(--kl-blue-deep)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.6rem",
        padding: "0 2rem",
        flexWrap: "wrap",
      }}
    >
      <span style={{
        fontFamily: "var(--font-body)",
        fontSize: "1.05rem",
        fontWeight: 500,
        color: "rgba(255,255,255,0.85)",
      }}>
        <em style={{
          fontFamily: "var(--font-display)",
          fontStyle: "italic",
          color: "#93C5FD",
          fontWeight: 600,
        }}>Excelência</em>
        {" "}é o coração de tudo o que fazemos. Prometido!
      </span>
      <a
        href={WHATSAPP_PRIMARY}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "#fff",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
        }}
      >
        Fale connosco agora
      </a>
    </section>
  );
}
