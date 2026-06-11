"use client";

import { WHATSAPP_PRIMARY } from "@/lib/constants";
import {
  StaggerScroll,
  StaggerScrollItem,
  HighlightReveal,
  SwitchTextButton,
} from "./AnimateOnScroll";

export default function CTA() {
  return (
    <section
      style={{
        background: "var(--kl-gradient-subtle, linear-gradient(160deg, #020617 0%, #050B3D 60%, #00059B 100%))",
        padding: "75px 2rem",
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

      <StaggerScroll
        distance={50}
        style={{
          maxWidth: 760,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Tag */}
        <StaggerScrollItem distance={50}>
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
        </StaggerScrollItem>

        {/* Headline */}
        <StaggerScrollItem distance={50}>
          <h2
            className="kl-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            A sua marca não precisa de mais ruído.{" "}
            <HighlightReveal>
              <em style={{ color: "#93C5FD", fontStyle: "italic" }}>
                Precisa de direcção.
              </em>
            </HighlightReveal>
          </h2>
        </StaggerScrollItem>

        {/* Subtitle */}
        <StaggerScrollItem distance={50}>
          <p
            className="kl-subheading"
            style={{ fontSize: "1.1rem", marginBottom: "2.8rem" }}
          >
            A sua próxima fase começa com uma conversa.
          </p>
        </StaggerScrollItem>

        {/* CTA button */}
        <StaggerScrollItem distance={50}>
          <SwitchTextButton
            text="Iniciar conversa estratégica →"
            href={WHATSAPP_PRIMARY}
            className="kl-btn-primary"
            primary
            style={{ fontSize: "0.9rem" }}
          />
        </StaggerScrollItem>
      </StaggerScroll>

      {/* Transição suave CTA → Contacto */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 80,
        background: "linear-gradient(to bottom, transparent, #020617)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
