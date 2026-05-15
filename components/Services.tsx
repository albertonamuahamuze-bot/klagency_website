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

const services = [
  {
    icon: LineChart,
    title: "Consultoria Estratégica",
    description:
      "Diagnóstico profundo da marca e desenvolvimento de estratégias claras para crescimento sustentável e domínio de mercado.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Softwares & Websites",
    description:
      "Soluções digitais premium, desde sites institucionais a sistemas completos, com foco em performance, design e experiência.",
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
  {
    icon: Palette,
    title: "Branding",
    description:
      "Construção completa da identidade visual e verbal da marca. Da essência ao logotipo, da paleta à voz da marca.",
  },
  {
    icon: FolderKanban,
    title: "Gestão de Projectos",
    description:
      "Coordenação estratégica e execução de projectos com clareza, prazos definidos e entregas que geram impacto real.",
  },
  {
    icon: GraduationCap,
    title: "Capacitação & Treinamentos",
    description:
      "Formação especializada de equipas e líderes em estratégia, marketing, vendas e posicionamento de marca.",
  },
  {
    icon: Award,
    title: "Identidade Corporativa e Estratégica",
    description:
      "Alinhamento completo entre propósito, cultura e presença. A identidade que comunica quem você é com autoridade.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="servicos" className="relative py-28 lg:py-36 bg-[#020617] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#00059B]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            O que fazemos
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Serviços que posicionam.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
              Resultados que ficam.
            </span>
          </h2>
          <p className="text-[#94A3B8] text-lg mt-5 max-w-lg mx-auto leading-relaxed">
            Cada serviço é desenhado para entregar clareza, posicionamento e crescimento com autoridade.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="group relative rounded-2xl p-6 cursor-default transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
              }}
            >
              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, transparent 100%)",
                  border: "1px solid rgba(37,99,235,0.2)",
                }}
              />

              <div
                className="relative w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20"
                style={{
                  background: "rgba(37, 99, 235, 0.12)",
                  border: "1px solid rgba(37, 99, 235, 0.18)",
                }}
              >
                <s.icon size={20} className="text-[#2563EB]" />
              </div>

              <h3 className="relative text-white font-bold text-base leading-snug mb-2.5">
                {s.title}
              </h3>
              <p className="relative text-[#94A3B8] text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
