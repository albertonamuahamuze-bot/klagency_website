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
    body: "Ajudar marcas e líderes a tornarem-se referências globais, com presença forte, autoridade consolidada e domínio concreto nos seus mercados de actuação.",
  },
  {
    icon: Sparkles,
    label: "Propósito",
    title: "Actuar com autoridade e domínio real.",
    body: "Posicionar marcas e líderes para actuarem com autoridade e domínio concreto nos seus mercados, gerando impacto real e crescimento sustentável.",
  },
];

const stats = [
  { value: "100+", label: "Projectos entregues" },
  { value: "20+", label: "Marcas posicionadas" },
  { value: "8+", label: "Anos de experiência" },
  { value: "3", label: "Países de actuação" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Manifesto() {
  return (
    <section className="relative py-28 lg:py-36 bg-white overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />
      {/* Decorative glow */}
      <div className="absolute top-16 right-0 w-[500px] h-[500px] rounded-full bg-[#EFF6FF] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-[#2563EB] text-sm font-bold uppercase tracking-[0.25em] mb-4">
            Quem Somos
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight max-w-2xl mx-auto">
            Mais do que uma agência.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              Um parceiro estratégico.
            </span>
          </h2>
          <p className="text-[#64748B] text-lg mt-5 max-w-xl mx-auto leading-relaxed">
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
              className="relative rounded-2xl p-7 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 4px rgba(37,99,235,0.06)",
              }}
            >
              {/* Blue left accent */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full"
                style={{ background: "linear-gradient(180deg, #2563EB, #06B6D4)" }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}
              >
                <p.icon size={22} className="text-[#2563EB]" />
              </div>

              <span className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.18em] mb-2 block">
                {p.label}
              </span>
              <h3 className="text-[#0F172A] font-bold text-xl leading-snug mb-3">{p.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats ribbon — dark premium band */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #00059B 60%, #1D4ED8 100%)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="relative flex flex-col items-center justify-center py-12 px-6 text-center"
              >
                {i < stats.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10" />
                )}
                <span className="text-5xl font-black text-white mb-2 leading-none">{s.value}</span>
                <span className="text-[#93C5FD] text-sm font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
