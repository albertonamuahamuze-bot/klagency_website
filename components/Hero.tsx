"use client";

import { motion } from "framer-motion";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

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
        {/* 3D entry — tag + headline + subtitle + CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05, rotateX: 30 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0, 0.25, 1] }}
          style={{ transformPerspective: 1200 }}
        >
          {/* Tag pill */}
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

          {/* Headline */}
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
            <em style={{ fontStyle: "italic", color: "#93C5FD" }}>dominar</em>{" "}
            os seus mercados.
          </h1>

          {/* Subtitle */}
          <p
            className="kl-subheading"
            style={{ fontSize: "1.1rem", maxWidth: "560px", marginBottom: "3rem" }}
          >
            Da identidade à estratégia. Do posicionamento ao domínio.
            <br className="hidden sm:block" />
            Trabalhamos com marcas que querem liderar — não apenas existir.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="kl-btn-primary"
            >
              Falar com a KLAgency →
            </a>
            <a href="#portfolio" className="kl-btn-ghost">
              Ver portfólio
            </a>
          </div>
        </motion.div>

        {/* Stats row — animação separada com delay maior */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
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
        </motion.div>
      </div>
    </section>
  );
}
