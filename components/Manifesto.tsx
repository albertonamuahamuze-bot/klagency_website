"use client";

import { motion } from "framer-motion";
import { Eye, Compass, Sparkles, Handshake, Trophy } from "lucide-react";
import { useCarousel } from "@/hooks/useCarousel";

const pillars = [
  {
    icon: Eye,
    label: "Visão",
    title: "Referência em estratégia e posicionamento.",
    body: "Ser reconhecida pela profundidade, clareza e impacto dos resultados que entregamos em estratégia, marketing e posicionamento de marcas.",
  },
  {
    icon: Compass,
    label: "Missão",
    title: "Transformar marcas em líderes de mercado.",
    body: "Ajudar marcas e líderes a tornarem-se referências no seu mercado, com presença forte, autoridade consolidada e domínio concreto.",
  },
  {
    icon: Sparkles,
    label: "Propósito",
    title: "Actuar com autoridade e domínio real.",
    body: "Posicionar marcas para actuarem com autoridade e domínio concreto nos seus mercados, gerando impacto real e crescimento sustentável.",
  },
];

const stats = [
  {
    icon: Handshake,
    value: "+100",
    label: "Projectos Entregues",
    accent: "#14D6C7",
  },
  {
    icon: Trophy,
    value: "+20",
    label: "Marcas Posicionadas",
    accent: "#60A5FA",
  },
];

function PillarCard({ p }: { p: (typeof pillars)[0] }) {
  return (
    <div
      className="relative rounded-2xl p-6 h-full"
      style={{
        background: "rgba(5, 12, 58, 0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow:
          "0 8px 32px rgba(0,87,255,0.15), inset 0 1px 0 rgba(255,255,255,0.07)",
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full"
        style={{ background: "linear-gradient(180deg, #0057FF, #14D6C7)" }}
      />
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: "rgba(20, 214, 199, 0.1)",
          border: "1px solid rgba(20, 214, 199, 0.18)",
        }}
      >
        <p.icon size={20} className="text-[#14D6C7]" />
      </motion.div>
      <span className="relative text-[#14D6C7] text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-1.5 block">
        {p.label}
      </span>
      <h3 className="relative text-white font-bold text-lg leading-snug mb-2">
        {p.title}
      </h3>
      <p className="relative text-white/48 text-sm leading-relaxed">{p.body}</p>
    </div>
  );
}

function StatCard({ s }: { s: (typeof stats)[0] }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-8 text-center h-full">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{
          background: `${s.accent}12`,
          border: `1px solid ${s.accent}20`,
          filter: `drop-shadow(0 0 10px ${s.accent}22)`,
        }}
      >
        <s.icon size={28} style={{ color: s.accent }} />
      </motion.div>
      <span className="text-6xl lg:text-7xl font-black text-white leading-none mb-2">
        {s.value}
      </span>
      <span className="text-sm font-semibold tracking-wide" style={{ color: s.accent }}>
        {s.label}
      </span>
    </div>
  );
}

export default function Manifesto() {
  /* Pillar carousel — mobile only (desktop shows 3 at once) */
  const pillarC = useCarousel({
    total: pillars.length,
    mobileSPV: 1,
    desktopSPV: 3,
  });

  /* Stats carousel — mobile only (desktop shows 2 at once) */
  const statsC = useCarousel({
    total: stats.length,
    mobileSPV: 1,
    desktopSPV: 2,
    autoplayDelay: 4000,
  });

  return (
    <section
      className="relative py-20 lg:py-36 overflow-hidden"
      style={{ background: "#00105C" }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#0057FF]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#14D6C7]/5 blur-3xl pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #001B8F, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10 lg:mb-16"
        >
          <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Quem Somos
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Mais do que uma agência.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)",
              }}
            >
              Um parceiro estratégico.
            </span>
          </h2>
          <p className="text-white/55 text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Ajudamos marcas e líderes a obter resultados concretos e a se
            posicionarem no mercado, mesmo quando começam do zero.
          </p>
        </motion.div>

        {/* ── Pillars ── */}

        {/* Mobile: carousel (1/view) */}
        <div
          className="lg:hidden mb-8 overflow-hidden"
          onTouchStart={pillarC.onTouchStart}
          onTouchEnd={pillarC.onTouchEnd}
        >
          <motion.div
            style={pillarC.trackStyle}
            animate={{ x: pillarC.translateX }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {Array.from({ length: pillarC.totalSlots }, (_, i) => (
              <div
                key={i}
                style={{ width: pillarC.itemWidth, flexShrink: 0 }}
                className="px-2"
              >
                {pillars[i] && <PillarCard p={pillars[i]} />}
              </div>
            ))}
          </motion.div>

          {/* Pillar dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {Array.from({ length: pillarC.totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => pillarC.goTo(i)}
                aria-label={`Pilar ${i + 1}`}
              >
                <motion.div
                  animate={{
                    width: i === pillarC.page ? 20 : 7,
                    opacity: i === pillarC.page ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1 rounded-full bg-[#14D6C7]"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
            >
              <PillarCard p={p} />
            </motion.div>
          ))}
        </div>

        {/* ── Stats ribbon ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(5, 12, 58, 0.65)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(20,214,199,0.12)",
            boxShadow:
              "0 8px 40px rgba(0,27,143,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Mobile: stats carousel */}
          <div
            className="lg:hidden overflow-hidden"
            onTouchStart={statsC.onTouchStart}
            onTouchEnd={statsC.onTouchEnd}
          >
            <motion.div
              style={statsC.trackStyle}
              animate={{ x: statsC.translateX }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {Array.from({ length: statsC.totalSlots }, (_, i) => (
                <div
                  key={i}
                  style={{ width: statsC.itemWidth, flexShrink: 0 }}
                >
                  {stats[i] && <StatCard s={stats[i]} />}
                </div>
              ))}
            </motion.div>
            {/* Dots */}
            <div className="flex justify-center gap-2 pb-5">
              {Array.from({ length: statsC.totalPages }, (_, i) => (
                <button key={i} onClick={() => statsC.goTo(i)} aria-label={`Estatística ${i + 1}`}>
                  <motion.div
                    animate={{
                      width: i === statsC.page ? 16 : 6,
                      opacity: i === statsC.page ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-1 rounded-full bg-[#14D6C7]"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: side by side */}
          <div className="hidden lg:grid grid-cols-2">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="relative"
                style={
                  i === 0
                    ? {
                        borderRight: "1px solid rgba(255,255,255,0.07)",
                      }
                    : {}
                }
              >
                <StatCard s={s} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
