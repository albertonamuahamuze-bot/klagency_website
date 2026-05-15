"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    category: "Identidade Corporativa",
    title: "Lusada Finance Group",
    description:
      "Rebranding completo e estratégia de posicionamento para grupo financeiro líder em Moçambique.",
    gradient: "from-[#00059B] to-[#050B3D]",
    accent: "#2563EB",
    size: "large",
  },
  {
    category: "Website & Branding",
    title: "Stellar Tech Solutions",
    description:
      "Website premium e identidade visual para startup de tecnologia com operação em três países.",
    gradient: "from-[#1e3a8a] to-[#0f172a]",
    accent: "#60A5FA",
    size: "small",
  },
  {
    category: "Consultoria Estratégica",
    title: "Nova Capital Ventures",
    description:
      "Estratégia completa de posicionamento e comunicação para fundo de investimento privado.",
    gradient: "from-[#0c4a6e] to-[#082f49]",
    accent: "#38BDF8",
    size: "small",
  },
  {
    category: "Marketing Digital",
    title: "Mozambique Retail Hub",
    description:
      "Estratégia de marketing digital e gestão de presença online para rede nacional de retalho.",
    gradient: "from-[#134e4a] to-[#0f2027]",
    accent: "#2DD4BF",
    size: "small",
  },
  {
    category: "Posicionamento de Marca",
    title: "Vertex Leadership",
    description:
      "Posicionamento pessoal e digital para executivos e líderes de referência no mercado.",
    gradient: "from-[#1e1b4b] to-[#0f0a2e]",
    accent: "#818CF8",
    size: "small",
  },
  {
    category: "Capacitação",
    title: "ProTech Academy",
    description:
      "Programa de capacitação e identidade estratégica para academia de tecnologia e inovação.",
    gradient: "from-[#172554] to-[#0c1337]",
    accent: "#93C5FD",
    size: "large",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-28 lg:py-36 bg-[#020617] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#00059B]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <p className="text-[#2563EB] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Portfólio
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Marcas que{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
                transformamos.
              </span>
            </h2>
          </div>
          <p className="text-[#94A3B8] text-base leading-relaxed max-w-xs md:text-right">
            Projectos que reflectem estratégia, identidade e crescimento com propósito.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden cursor-default"
              style={{ border: "1px solid rgba(255, 255, 255, 0.07)" }}
            >
              {/* Visual preview */}
              <div
                className={`relative h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Decorative elements inside card header */}
                <div
                  className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-20 blur-xl"
                  style={{ background: p.accent }}
                />
                <div
                  className="absolute bottom-0 left-8 w-32 h-32 rounded-full opacity-10 blur-2xl"
                  style={{ background: p.accent }}
                />

                {/* Logo placeholder */}
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <span
                    className="font-black text-xl text-white"
                    style={{ textShadow: `0 0 20px ${p.accent}` }}
                  >
                    {p.title.charAt(0)}
                  </span>
                </div>

                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-[0.65rem] font-semibold uppercase tracking-wider"
                  style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
                >
                  {p.category}
                </div>

                {/* Arrow on hover */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                >
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div
                className="p-5"
                style={{ background: "rgba(255, 255, 255, 0.02)" }}
              >
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-[#475569] text-sm mt-10"
        >
          Projectos apresentados com dados protegidos por acordo de confidencialidade.
        </motion.p>
      </div>
    </section>
  );
}
