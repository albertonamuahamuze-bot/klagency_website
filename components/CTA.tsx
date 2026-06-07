"use client";

import { WHATSAPP_PRIMARY } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

export default function CTA() {
  return (
    <section
      style={{
        background: "var(--kl-gradient-subtle, linear-gradient(160deg, #020617 0%, #050B3D 60%, #00059B 100%))",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* K watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-3%",
          bottom: "-10%",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(200px, 25vw, 400px)",
          color: "rgba(255,255,255,0.02)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        K
      </div>

      <AnimateOnScroll
        delay={0.1}
        style={{
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Tag */}
        <div
          className="kl-tag"
          style={{ marginBottom: "2rem", display: "inline-flex" }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#60A5FA",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          A sua próxima fase começa aqui
        </div>

        {/* Headline */}
        <h2
          className="kl-heading"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.4rem)",
            color: "#fff",
            marginBottom: "1.5rem",
          }}
        >
          A sua marca não precisa de mais ruído.{" "}
          <span style={{ color: "#93C5FD", fontStyle: "italic" }}>
            Precisa de direcção.
          </span>
        </h2>

        {/* Subtitle */}
        <p
          className="kl-subheading"
          style={{ fontSize: "1.1rem", marginBottom: "2.8rem" }}
        >
          A sua próxima fase começa com uma conversa.
        </p>

        {/* CTA button */}
        <a
          href={WHATSAPP_PRIMARY}
          target="_blank"
          rel="noopener noreferrer"
          className="kl-btn-primary"
          style={{ fontSize: "0.9rem" }}
        >
          Iniciar conversa estratégica →
        </a>
      </AnimateOnScroll>

      {/* Transição suave CTA → Contacto */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        background: "linear-gradient(to bottom, transparent, #020617)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
