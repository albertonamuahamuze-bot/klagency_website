"use client";

import { motion } from "framer-motion";
import {
  LineChart,
  Code2,
  Megaphone,
  Target,
  Palette,
  FolderKanban,
  GraduationCap,
  Award,
} from "lucide-react";

const mainServices = [
  {
    icon: LineChart,
    title: "Consultoria Estratégica",
    description:
      "Diagnóstico profundo da marca e desenvolvimento de estratégias claras para crescimento sustentável e domínio de mercado.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description:
      "Campanhas orientadas a resultados com posicionamento estratégico, geração de leads qualificados e conversão real.",
  },
  {
    icon: Target,
    title: "Posicionamento de Marca",
    description:
      "Definição clara do lugar que a sua marca ocupa na mente do mercado. Diferenciação que gera autoridade e reconhecimento.",
  },
];

const otherServices = [
  {
    icon: Code2,
    title: "Desenvolvimento de Softwares & Websites",
    description: "Soluções digitais premium, com foco em performance, design e experiência.",
  },
  {
    icon: Palette,
    title: "Branding",
    description: "Construção completa da identidade visual e verbal da marca.",
  },
  {
    icon: FolderKanban,
    title: "Gestão de Projectos",
    description: "Coordenação estratégica com clareza, prazos e entregas de impacto.",
  },
  {
    icon: GraduationCap,
    title: "Capacitação & Treinamentos",
    description: "Formação especializada em estratégia, marketing, vendas e posicionamento.",
  },
  {
    icon: Award,
    title: "Identidade Corporativa",
    description: "Alinhamento entre propósito, cultura e presença com autoridade.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "#001B8F" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(20,214,199,0.25), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,87,255,0.2), transparent)" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0057FF]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-5">
            O que fazemos
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Serviços que posicionam.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)" }}
            >
              Resultados que ficam.
            </span>
          </h2>
          <p className="text-white/60 text-lg mt-5 max-w-lg mx-auto leading-relaxed">
            Cada serviço é desenhado para entregar clareza, posicionamento e crescimento com autoridade.
          </p>
        </motion.div>

        {/* 3 Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
          {mainServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl p-8 cursor-default transition-all duration-300 hover:-translate-y-1.5"
              style={{
                background: "rgba(6, 16, 70, 0.72)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(20,214,199,0.15)",
                boxShadow: "0 4px 30px rgba(0,27,143,0.25)",
              }}
            >
              {/* Cyan accent line on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, #14D6C7, transparent)" }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                style={{
                  background: "rgba(20, 214, 199, 0.12)",
                  border: "1px solid rgba(20, 214, 199, 0.2)",
                }}
              >
                <s.icon size={26} className="text-[#14D6C7]" />
              </div>

              <h3 className="text-white font-bold text-xl leading-snug mb-3">{s.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Other Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {otherServices.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
              className="group relative rounded-2xl p-5 cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(6, 16, 70, 0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(96, 165, 250, 0.12)",
                  border: "1px solid rgba(96, 165, 250, 0.18)",
                }}
              >
                <s.icon size={18} className="text-[#60A5FA]" />
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-1.5">{s.title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
