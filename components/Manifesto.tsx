"use client";

import { motion } from "framer-motion";
import { Eye, Compass, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Eye,
    label: "Visão",
    title: "Referência em estratégia e posicionamento.",
    body: "Ser a agência de referência em estratégia, marketing e posicionamento de marcas — reconhecida pela profundidade, clareza e impacto dos resultados que entregamos.",
  },
  {
    icon: Compass,
    label: "Missão",
    title: "Transformar marcas em líderes de mercado.",
    body: "Ajudar marcas e líderes a tornarem-se referências no seu mercado, com presença forte, autoridade consolidada e domínio concreto no seu sector de actuação.",
  },
  {
    icon: Sparkles,
    label: "Propósito",
    title: "Actuar com autoridade e domínio real.",
    body: "Posicionar marcas e líderes para actuarem com autoridade e domínio concreto nos seus mercados, gerando impacto real e crescimento sustentável.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Manifesto() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "#F8FAFC" }}>
      {/* Soft top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#BFDBFE]/50 to-transparent" />
      {/* Decorative glow — subtle */}
      <div className="absolute top-20 right-0 w-[600px] h-[400px] rounded-full bg-[#EFF6FF] blur-3xl pointer-events-none opacity-80" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.3em] mb-5">
            Quem Somos
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight max-w-2xl mx-auto">
            Mais do que uma agência.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#0EA5E9]">
              Um parceiro estratégico.
            </span>
          </h2>
          <p className="text-[#64748B] text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            A KL Agency nasceu para transformar marcas comuns em referências de mercado, com
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
              className="relative rounded-2xl p-7 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(37,99,235,0.05)",
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full"
                style={{ background: "linear-gradient(180deg, #2563EB, #0EA5E9)" }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}
              >
                <p.icon size={22} className="text-[#2563EB]" />
              </div>

              <span className="text-[#2563EB] text-[0.7rem] font-bold uppercase tracking-[0.2em] mb-2 block">
                {p.label}
              </span>
              <h3 className="text-[#0F172A] font-bold text-xl leading-snug mb-3">{p.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats — 2 real, confirmed metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #00059B 55%, #1D4ED8 100%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Stat 1 */}
            <div className="relative flex flex-col items-center justify-center py-16 px-12 text-center">
              <div className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10" />
              <span className="text-7xl lg:text-8xl font-black text-white mb-3 leading-none tracking-tight">
                100+
              </span>
              <span className="text-[#93C5FD] text-base font-semibold tracking-wide">
                Projectos Entregues
              </span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center py-16 px-12 text-center">
              <span className="text-7xl lg:text-8xl font-black text-white mb-3 leading-none tracking-tight">
                20+
              </span>
              <span className="text-[#93C5FD] text-base font-semibold tracking-wide">
                Marcas Posicionadas
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
