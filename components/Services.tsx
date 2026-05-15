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
    <section id="servicos" className="relative py-28 lg:py-36 bg-[#F8FAFC] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-sm font-bold uppercase tracking-[0.25em] mb-4">
            O que fazemos
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight max-w-2xl mx-auto">
            Serviços que posicionam.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Resultados que ficam.
            </span>
          </h2>
          <p className="text-[#64748B] text-lg mt-5 max-w-lg mx-auto leading-relaxed">
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
              className="group relative rounded-2xl p-6 bg-white cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
              }}
            >
              {/* Cyan top accent on hover */}
              <div
                className="absolute top-0 left-6 right-6 h-[2px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, #2563EB, #06B6D4)" }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:shadow-md group-hover:shadow-blue-100"
                style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}
              >
                <s.icon size={20} className="text-[#2563EB]" />
              </div>

              <h3 className="text-[#0F172A] font-bold text-base leading-snug mb-2.5">
                {s.title}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
