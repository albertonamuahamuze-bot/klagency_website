"use client";

import { WHATSAPP_PRIMARY } from "@/lib/constants";
import {
  HeroStagger,
  HeroStaggerItem,
  ScrollProgressIndicator,
  SwitchTextButton,
  HighlightReveal,
} from "./AnimateOnScroll";

const STATS = [
  { num: "+100", label: "Projectos entregues" },
  { num: "+20",  label: "Marcas posicionadas" },
  { num: "4",    label: "Pilares estratégicos" },
  { num: "100%", label: "Compromisso" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        minHeight: "100svh",
        background: "var(--kl-gradient, linear-gradient(135deg, #020617 0%, #00059B 55%, #2563EB 100%))",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Radial texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(37,99,235,0.18) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(0,5,155,0.25) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        }}
      />

      {/* K watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-2%",
          top: "50%",
          transform: "translateY(-55%)",
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(280px, 30vw, 520px)",
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        K
      </div>

      {/* Content wrapper */}
      <div
        className="relative z-10 mx-auto w-full px-5 sm:px-6 lg:px-8"
        style={{ maxWidth: 1120, paddingTop: "100px", paddingBottom: "80px" }}
      >
        {/* HeroStagger — cada filho entra com stagger 300ms, scale + rotateX */}
        <HeroStagger>
          {/* Tag pill */}
          <HeroStaggerItem>
            <div className="kl-tag" style={{ marginBottom: "2rem", display: "inline-flex" }}>
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
              Estratégia · Posicionamento · Crescimento
            </div>
          </HeroStaggerItem>

          {/* Headline */}
          <HeroStaggerItem>
            <h1
              className="kl-display"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 5.2rem)",
                maxWidth: "780px",
                marginBottom: "1.8rem",
                color: "#fff",
              }}
            >
              Posicionamos marcas e líderes para{" "}
              <HighlightReveal>
                <em style={{ fontStyle: "italic", color: "#93C5FD" }}>dominar</em>
              </HighlightReveal>{" "}
              os seus mercados.
            </h1>
          </HeroStaggerItem>

          {/* Subtitle */}
          <HeroStaggerItem>
            <p
              className="kl-subheading"
              style={{ fontSize: "1.1rem", maxWidth: "560px", marginBottom: "3rem" }}
            >
              Da identidade à estratégia. Do posicionamento ao domínio.
              <br className="hidden sm:block" />
              Trabalhamos com marcas que querem liderar — não apenas existir.
            </p>
          </HeroStaggerItem>

          {/* CTAs */}
          <HeroStaggerItem>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <SwitchTextButton
                text="Falar com a KLAgency →"
                href={WHATSAPP_PRIMARY}
                className="kl-btn-primary"
                primary
              />
              <SwitchTextButton
                text="Ver portfólio"
                href="#portfolio"
                className="kl-btn-ghost"
              />
            </div>
          </HeroStaggerItem>

          {/* Stats row */}
          <HeroStaggerItem>
            <div
              style={{
                display: "flex",
                gap: "clamp(1.5rem, 4vw, 3rem)",
                flexWrap: "wrap",
                borderTop: "1px solid var(--kl-border)",
                paddingTop: "2.5rem",
                marginTop: "4.5rem",
              }}
            >
              {STATS.map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="kl-display"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#fff", marginBottom: "0.35rem" }}
                  >
                    {num}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "var(--kl-muted)", letterSpacing: "0.05em" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </HeroStaggerItem>
        </HeroStagger>
      </div>

      {/* Indicador de scroll lateral fixo */}
      <ScrollProgressIndicator />

      {/* Wave SVG — transição suave Hero → Manifesto (desktop) */}
      <div
        className="hero-wave"
        style={{ position: "absolute", bottom: 0, left: 0, width: "100%", lineHeight: 0, display: "none" }}
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: "100%", height: 80, display: "block" }}
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#050B3D" />
        </svg>
      </div>
    </section>
  );
}
