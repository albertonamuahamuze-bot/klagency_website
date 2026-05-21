"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";
import { useCarousel } from "@/hooks/useCarousel";

const differentials = [
  {
    number: "01",
    title: "Clareza antes da estratégia",
    description:
      "Antes de qualquer execução, compreendemos a essência da marca e o mercado. Sem clareza, não há estratégia eficaz.",
    accent: "#14D6C7",
  },
  {
    number: "02",
    title: "Conexão honesta com o cliente",
    description:
      "Relações directas e transparentes. Entregamos estratégia com base em dados e objectivos reais.",
    accent: "#60A5FA",
  },
  {
    number: "03",
    title: "Construção desde a raiz",
    description:
      "Identidade e posicionamento antes de qualquer marketing. A raiz forte garante crescimento sustentável.",
    accent: "#A78BFA",
  },
  {
    number: "04",
    title: "Orientação a resultados",
    description:
      "Cada estratégia tem métricas claras e objectivos concretos. O sucesso da sua marca é o que importa.",
    accent: "#34D399",
  },
];

function DifferentialCard({ d }: { d: (typeof differentials)[0] }) {
  return (
    <div
      className="flex gap-4 rounded-2xl p-5 lg:p-6 h-full"
      style={{
        background: "rgba(5, 12, 58, 0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow:
          "0 8px 32px rgba(0,87,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div className="flex-shrink-0 pt-0.5">
        <CheckCircle2 size={18} style={{ color: d.accent }} />
      </div>
      <div>
        <div className="flex items-center gap-2.5 mb-2">
          <span
            className="text-[0.65rem] font-bold"
            style={{ color: d.accent }}
          >
            {d.number}
          </span>
          <h3 className="text-white font-bold text-sm lg:text-base leading-snug">
            {d.title}
          </h3>
        </div>
        <p className="text-white/48 text-xs lg:text-sm leading-relaxed">
          {d.description}
        </p>
      </div>
    </div>
  );
}

export default function Differentials() {
  /* Mobile: 1/view — Desktop: all 4 in grid, no carousel */
  const { page, totalPages, totalSlots, next, prev, goTo, onTouchStart, onTouchEnd, trackStyle, translateX, itemWidth } =
    useCarousel({
      total: differentials.length,
      mobileSPV: 1,
      desktopSPV: 4, // all 4 → 1 page → effectively hides nav
    });

  return (
    <section
      className="relative overflow-hidden py-14 sm:py-20 lg:py-36"
      style={{ background: "#001B8F" }}
    >
      {/* Ambient */}
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#0057FF]/10 blur-3xl pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #00105C, transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text & stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-4">
              Por que a KL Agency
            </p>
            <h2 className="mb-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-5xl">
              Clareza antes{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)",
                }}
              >
                da estratégia.
              </span>
            </h2>
            <p className="text-white/52 text-base lg:text-lg leading-relaxed mb-7 max-w-md">
              A KL Agency começa sempre pela raiz — identidade, propósito e
              posicionamento. Só depois vem a execução.
            </p>

            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#001B8F] font-bold px-6 py-3 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-sm"
              style={{
                background: "#14D6C7",
                boxShadow: "0 6px 24px rgba(20,214,199,0.35)",
              }}
            >
              Começar agora
              <ArrowRight size={15} />
            </a>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center gap-6 sm:mt-10 sm:gap-8">
              <div>
                <p className="text-3xl font-black leading-none text-white sm:text-4xl lg:text-5xl">
                  100%
                </p>
                <p className="text-white/40 text-xs mt-1.5 max-w-[130px]">
                  das estratégias começam com diagnóstico
                </p>
              </div>
              <div
                className="w-px h-14 self-stretch"
                style={{ background: "rgba(255,255,255,0.1)" }}
              />
              <div>
                <p className="text-3xl font-black leading-none text-white sm:text-4xl lg:text-5xl">
                  3×
                </p>
                <p className="text-white/40 text-xs mt-1.5 max-w-[130px]">
                  mais eficácia quando a raiz está definida
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — carousel on mobile, grid on desktop */}
          <div>
            {/* Mobile: carousel */}
            <div
              className="lg:hidden overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <motion.div
                style={trackStyle}
                animate={{ x: translateX }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {Array.from({ length: totalSlots }, (_, i) => (
                  <div
                    key={i}
                    style={{ width: itemWidth, flexShrink: 0 }}
                    className="px-1"
                  >
                    {differentials[i] && (
                      <DifferentialCard d={differentials[i]} />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Mobile nav */}
              <div className="flex items-center justify-center gap-3 mt-5">
                <button
                  onClick={prev}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#14D6C7] transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(20,214,199,0.1)",
                    border: "1px solid rgba(20,214,199,0.2)",
                  }}
                >
                  <ChevronLeft size={15} />
                </button>

                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Diferencial ${i + 1}`}
                    >
                      <motion.div
                        animate={{
                          width: i === page ? 20 : 7,
                          opacity: i === page ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.3 }}
                        className="h-1 rounded-full"
                        style={{
                          background: differentials[Math.min(i, differentials.length - 1)].accent,
                        }}
                      />
                    </button>
                  ))}
                </div>

                <button
                  onClick={next}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[#14D6C7] transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(20,214,199,0.1)",
                    border: "1px solid rgba(20,214,199,0.2)",
                  }}
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            {/* Desktop: static grid */}
            <div className="hidden lg:flex flex-col gap-4">
              {differentials.map((d, i) => (
                <motion.div
                  key={d.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{ x: 4 }}
                >
                  <DifferentialCard d={d} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
