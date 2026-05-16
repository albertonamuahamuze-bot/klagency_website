"use client";

import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  LineChart,
  Code2,
  Megaphone,
  Target,
  Palette,
  FolderKanban,
  GraduationCap,
  Award,
} from "lucide-react";
import { useCarousel } from "@/hooks/useCarousel";

const services = [
  {
    icon: LineChart,
    title: "Consultoria Estratégica",
    description:
      "Diagnóstico profundo e estratégias claras para crescimento sustentável e domínio de mercado.",
    accent: "#14D6C7",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description:
      "Posicionamento estratégico, leads qualificados e conversão real com resultados mensuráveis.",
    accent: "#60A5FA",
  },
  {
    icon: Target,
    title: "Posicionamento de Marca",
    description:
      "Diferenciação estratégica que gera autoridade, reconhecimento e domínio de mercado.",
    accent: "#A78BFA",
  },
  {
    icon: Code2,
    title: "Desenvolvimento Web & Software",
    description:
      "Soluções digitais premium com foco em performance e experiência do utilizador.",
    accent: "#34D399",
  },
  {
    icon: Palette,
    title: "Branding",
    description:
      "Identidade visual e verbal — da essência ao logotipo e à presença de marca.",
    accent: "#F59E0B",
  },
  {
    icon: FolderKanban,
    title: "Gestão de Projectos",
    description:
      "Coordenação estratégica com prazos e entregas de impacto real.",
    accent: "#60A5FA",
  },
  {
    icon: GraduationCap,
    title: "Capacitação & Treinamentos",
    description:
      "Formação em estratégia, marketing e posicionamento de marcas.",
    accent: "#14D6C7",
  },
  {
    icon: Award,
    title: "Identidade Corporativa",
    description:
      "Propósito, cultura e presença alinhados com autoridade de marca.",
    accent: "#A78BFA",
  },
];

function ServiceCard({
  s,
}: {
  s: (typeof services)[0];
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="h-full rounded-2xl p-6 lg:p-7 flex flex-col cursor-default select-none"
      style={{
        background: "rgba(5, 12, 58, 0.65)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow:
          "0 8px 32px rgba(0,87,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Icon with float animation */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{
          background: `${s.accent}12`,
          border: `1px solid ${s.accent}22`,
          boxShadow: `0 0 20px ${s.accent}18`,
        }}
      >
        <s.icon size={22} style={{ color: s.accent }} />
      </motion.div>

      <h3 className="text-white font-bold text-base lg:text-lg leading-snug mb-3">
        {s.title}
      </h3>
      <p className="text-white/45 text-sm leading-relaxed flex-1">
        {s.description}
      </p>

      {/* Bottom accent line */}
      <div
        className="mt-5 h-px w-10 rounded-full"
        style={{ background: `linear-gradient(90deg, ${s.accent}, transparent)` }}
      />
    </motion.div>
  );
}

function NavBtn({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 flex-shrink-0"
      style={{
        background: "rgba(20,214,199,0.1)",
        border: "1px solid rgba(20,214,199,0.22)",
        color: "#14D6C7",
      }}
    >
      {children}
    </button>
  );
}

export default function Services() {
  const {
    page,
    totalPages,
    totalSlots,
    next,
    prev,
    goTo,
    setPaused,
    onTouchStart,
    onTouchEnd,
    trackStyle,
    translateX,
    itemWidth,
  } = useCarousel({
    total: services.length,
    mobileSPV: 1,
    desktopSPV: 3,
    autoplayDelay: 5000,
  });

  return (
    <section
      id="servicos"
      className="relative py-20 lg:py-36 overflow-hidden"
      style={{ background: "#001B8F" }}
    >
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#0057FF]/6 blur-3xl pointer-events-none" />
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,16,92,0.5), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            O que fazemos
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Serviços que posicionam.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #14D6C7, #60A5FA)",
              }}
            >
              Resultados que ficam.
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            style={trackStyle}
            animate={{ x: translateX }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {Array.from({ length: totalSlots }, (_, i) => (
              <div
                key={i}
                style={{ width: itemWidth, flexShrink: 0 }}
                className="px-2"
              >
                {services[i] && <ServiceCard s={services[i]} />}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation: prev / dots / next */}
        <div className="flex items-center justify-center gap-3 mt-8 lg:mt-10">
          <NavBtn onClick={prev}>
            <ChevronLeft size={16} />
          </NavBtn>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Página ${i + 1}`}
                className="transition-all duration-300"
              >
                <motion.div
                  animate={{
                    width: i === page ? 24 : 8,
                    opacity: i === page ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1.5 rounded-full bg-[#14D6C7]"
                />
              </button>
            ))}
          </div>

          <NavBtn onClick={next}>
            <ChevronRight size={16} />
          </NavBtn>
        </div>
      </div>
    </section>
  );
}
