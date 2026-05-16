"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Testemunhos — adicionar foto real: colocar PNG/JPG em /public/clients/
 * e substituir o avatar por <Image src="/clients/cn.jpg" ... />
 */
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

function NavArrow({
  onClick,
  direction,
}: {
  onClick: () => void;
  direction: "prev" | "next";
}) {
  return (
    <button
      onClick={onClick}
      aria-label={direction === "prev" ? "Anterior" : "Próximo"}
      className="w-10 h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 flex-shrink-0"
      style={{
        background: "rgba(5,12,58,0.6)",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "rgba(255,255,255,0.7)",
      }}
    >
      {direction === "prev" ? (
        <ChevronLeft size={18} />
      ) : (
        <ChevronRight size={18} />
      )}
    </button>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(0);

  const advance = useCallback(
    () => setActive((p) => (p + 1) % testimonials.length),
    []
  );
  const retreat = useCallback(
    () =>
      setActive(
        (p) => (p - 1 + testimonials.length) % testimonials.length
      ),
    []
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 6500);
    return () => clearInterval(id);
  }, [paused, advance]);

  const t = testimonials[active];

  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-44 overflow-hidden"
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
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at center, transparent 0%, #001B8F 72%)",
        }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-[#14D6C7]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-[#0057FF]/10 blur-3xl pointer-events-none" />

      {/* Bottom transition to CTA */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0057FF, transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-14 lg:mb-24"
        >
          <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            O que dizem de nós
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
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

        {/* Testimonial slider */}
        <div
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            const dx = touchX.current - e.changedTouches[0].clientX;
            if (dx > 40) advance();
            else if (dx < -40) retreat();
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              {/* Mobile layout: stacked */}
              <div className="lg:hidden flex flex-col items-center text-center gap-6">
                {/* Avatar */}
                <div className="relative">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black text-white select-none"
                    style={{
                      background: `linear-gradient(135deg, ${t.accentColor}28, ${t.accentColor}0d)`,
                      border: `1.5px solid ${t.accentColor}38`,
                      boxShadow: `0 0 36px ${t.accentColor}18`,
                    }}
                  >
                    {t.initials}
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.07, 0.2] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ border: `1px solid ${t.accentColor}20` }}
                  />
                </div>

                {/* Company badge */}
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
                  style={{
                    background: `${t.accentColor}0e`,
                    border: `1px solid ${t.accentColor}28`,
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: t.accentColor }}
                  />
                  <span
                    className="text-[0.65rem] font-bold uppercase tracking-[0.2em]"
                    style={{ color: t.accentColor }}
                  >
                    {t.company}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-white/85 text-base leading-relaxed font-light">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <p className="text-white font-bold text-base">{t.author}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
                </div>
              </div>

              {/* Desktop layout: side by side */}
              <div className="hidden lg:grid grid-cols-[240px_1fr] gap-20 items-start">
                {/* Left: avatar + author */}
                <div className="flex flex-col items-start gap-6">
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
                      transition={{ duration: 3.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-full pointer-events-none"
                      style={{ border: `1px solid ${t.accentColor}22` }}
                    />
                  </div>

                  <div
                    className="w-px h-10"
                    style={{
                      background: `linear-gradient(to bottom, ${t.accentColor}32, transparent)`,
                    }}
                  />

                  <div>
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

                {/* Right: company badge + quote */}
                <div>
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

                  <div
                    className="font-serif select-none leading-none mb-4"
                    style={{ fontSize: "5rem", color: `${t.accentColor}12`, lineHeight: 0.65 }}
                  >
                    &ldquo;
                  </div>

                  <p className="text-[1.45rem] lg:text-[1.6rem] text-white/88 font-light leading-[1.65]">
                    {t.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation row: prev / dots / next */}
          <div className="flex items-center justify-center gap-4 mt-10 lg:mt-16">
            <NavArrow onClick={retreat} direction="prev" />

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Testemunho ${i + 1}`}
                >
                  <motion.div
                    animate={{
                      width: i === active ? 28 : 8,
                      opacity: i === active ? 1 : 0.28,
                    }}
                    transition={{ duration: 0.35 }}
                    className="h-1.5 rounded-full"
                    style={{ background: testimonials[i].accentColor }}
                  />
                </button>
              ))}
            </div>

            <NavArrow onClick={advance} direction="next" />
          </div>
        </div>
      </div>
    </section>
  );
}
