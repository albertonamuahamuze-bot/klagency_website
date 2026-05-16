"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "A KL Agency transformou completamente a nossa identidade corporativa. A clareza estratégica que trouxeram foi determinante para o reconhecimento que temos hoje no mercado.",
    author: "Carlos Nhampossa",
    role: "Director Geral",
    company: "ECU Despachante Aduaneiro",
    initials: "CN",
    accentColor: "#14D6C7",
  },
  {
    quote:
      "Trabalhar com a KL Agency foi uma experiência transformadora. A estratégia de marca desenvolvida reflecte exactamente quem somos e o impacto que queremos gerar no mercado.",
    author: "Ana Machava",
    role: "Directora de Comunicação",
    company: "Confidencial Microcrédito",
    initials: "AM",
    accentColor: "#60A5FA",
  },
  {
    quote:
      "O posicionamento estratégico da KL Agency elevou o MozLimo a outro patamar. A nossa presença premium é hoje reconhecida e respeitada em todo o mercado.",
    author: "Dário Simango",
    role: "Fundador & CEO",
    company: "MozLimo",
    initials: "DS",
    accentColor: "#A78BFA",
  },
  {
    quote:
      "A KL Agency entendeu a nossa visão desde o primeiro dia. A estratégia implementada trouxe resultados concretos e uma presença digital forte e consistente.",
    author: "Paulo Guambe",
    role: "Director Executivo",
    company: "GP",
    initials: "PG",
    accentColor: "#34D399",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setActive((p) => (p + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 6500);
    return () => clearInterval(id);
  }, [paused, advance]);

  const t = testimonials[active];

  return (
    <section
      id="portfolio"
      className="relative py-36 lg:py-48 overflow-hidden"
      style={{ background: "#001B8F" }}
    >
      {/* World map dot atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(20,214,199,0.08) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      {/* Radial fade — centre open, edges dissolved */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at center, transparent 0%, #001B8F 72%)",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#14D6C7]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#0057FF]/10 blur-3xl pointer-events-none" />

      {/* Bottom transition to CTA */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0057FF, transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-28"
        >
          <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-5">
            O que dizem de nós
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Empresas que confiaram{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)",
              }}
            >
              na KL Agency.
            </span>
          </h2>
        </motion.div>

        {/* Editorial testimonial */}
        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-14 lg:gap-24 items-start"
            >
              {/* Left: avatar + author */}
              <div className="flex flex-col items-center lg:items-start gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div
                    className="w-[72px] h-[72px] rounded-full flex items-center justify-center text-2xl font-black text-white select-none"
                    style={{
                      background: `linear-gradient(135deg, ${t.accentColor}28, ${t.accentColor}0d)`,
                      border: `1.5px solid ${t.accentColor}38`,
                      boxShadow: `0 0 48px ${t.accentColor}18, 0 0 0 10px ${t.accentColor}05`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.18, 1], opacity: [0.25, 0.08, 0.25] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ border: `1px solid ${t.accentColor}22` }}
                  />
                </div>

                {/* Vertical accent line */}
                <div
                  className="w-px h-10 hidden lg:block"
                  style={{
                    background: `linear-gradient(to bottom, ${t.accentColor}32, transparent)`,
                  }}
                />

                {/* Author info */}
                <div className="text-center lg:text-left">
                  <p className="text-white font-bold text-lg leading-snug">
                    {t.author}
                  </p>
                  <p className="text-white/40 text-sm mt-1">{t.role}</p>
                  <p
                    className="text-sm font-bold mt-2"
                    style={{ color: t.accentColor }}
                  >
                    {t.company}
                  </p>
                </div>
              </div>

              {/* Right: company badge + editorial quote */}
              <div>
                {/* Company badge — above quote */}
                <motion.div
                  key={`badge-${active}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
                  style={{
                    background: `${t.accentColor}0e`,
                    border: `1px solid ${t.accentColor}28`,
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: t.accentColor }}
                  />
                  <span
                    className="text-[0.68rem] font-bold uppercase tracking-[0.22em]"
                    style={{ color: t.accentColor }}
                  >
                    {t.company}
                  </span>
                </motion.div>

                {/* Decorative opening quote */}
                <div
                  className="font-serif select-none leading-none mb-4"
                  style={{
                    fontSize: "5rem",
                    color: `${t.accentColor}12`,
                    lineHeight: 0.65,
                  }}
                >
                  &ldquo;
                </div>

                {/* Quote body */}
                <p className="text-[1.45rem] lg:text-[1.65rem] text-white/88 font-light leading-[1.65]">
                  {t.quote}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                aria-label={`Testemunho ${i + 1}`}
              >
                <motion.div
                  animate={{
                    width: i === active ? 30 : 8,
                    opacity: i === active ? 1 : 0.28,
                  }}
                  transition={{ duration: 0.35 }}
                  className="h-1.5 rounded-full"
                  style={{ background: testimonials[i].accentColor }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
