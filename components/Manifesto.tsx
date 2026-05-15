"use client";

import { motion } from "framer-motion";
import { Eye, Compass, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    label: "Visão",
    title: "Referência global em estratégia e posicionamento.",
    body: "Ser a agência de referência global em estratégia, marketing e posicionamento de marcas — reconhecida pela profundidade, clareza e impacto dos resultados que entregamos.",
  },
  {
    icon: Compass,
    label: "Missão",
    title: "Transformar marcas em líderes globais.",
    body: "Ajudar marcas e líderes a se tornarem referências globais, com presença forte, autoridade consolidada e domínio concreto nos seus mercados de actuação.",
  },
  {
    icon: Sparkles,
    label: "Propósito",
    title: "Actuar com autoridade e domínio real.",
    body: "Posicionar marcas e líderes para actuarem com autoridade e domínio concreto nos seus mercados, gerando impacto real e crescimento sustentável.",
  },
];

const stats = [
  { value: "50+", label: "Marcas posicionadas" },
  { value: "8+", label: "Anos de experiência" },
  { value: "100%", label: "Foco em resultados" },
  { value: "3", label: "Países de atuação" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Manifesto() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#020617] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-32 right-0 w-96 h-96 rounded-full bg-[#00059B]/8 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-[#2563EB] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Quem Somos
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Mais do que uma agência.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#2563EB]">
              Um parceiro estratégico.
            </span>
          </h2>
          <p className="text-[#94A3B8] text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            A KLAGENCY nasceu para transformar marcas comuns em referências de mercado, com
            estratégia profunda, identidade sólida e execução consistente.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "rgba(37, 99, 235, 0.05)" }} />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(37, 99, 235, 0.12)",
                  border: "1px solid rgba(37, 99, 235, 0.2)",
                }}
              >
                <p.icon size={22} className="text-[#2563EB]" />
              </div>

              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.18em] mb-2 block">
                {p.label}
              </span>
              <h3 className="text-white font-bold text-xl leading-snug mb-3">{p.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center py-10 px-6 text-center"
              style={{ background: i % 2 === 0 ? "rgba(2,6,23,0.9)" : "rgba(5,11,61,0.4)" }}
            >
              <span className="text-4xl font-black text-white mb-2">{s.value}</span>
              <span className="text-[#94A3B8] text-sm">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
