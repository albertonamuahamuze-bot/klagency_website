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
    <section className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "#00105C" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(20,214,199,0.3), transparent)" }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full bg-[#0057FF]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#14D6C7]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-5">
            Quem Somos
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Mais do que uma agência.{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)" }}
            >
              Um parceiro estratégico.
            </span>
          </h2>
          <p className="text-white/60 text-lg mt-5 max-w-2xl mx-auto leading-relaxed">
            Ajudamos marcas e líderes a obter resultados concretos e a se posicionarem
            no mercado, mesmo quando começam do zero.
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
                background: "rgba(6, 16, 70, 0.72)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 4px 24px rgba(0,27,143,0.2)",
              }}
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-6 bottom-6 w-[3px] rounded-r-full"
                style={{ background: "linear-gradient(180deg, #0057FF, #14D6C7)" }}
              />

              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(20, 214, 199, 0.12)",
                  border: "1px solid rgba(20, 214, 199, 0.2)",
                }}
              >
                <p.icon size={22} className="text-[#14D6C7]" />
              </div>

              <span className="relative text-[#14D6C7] text-[0.68rem] font-bold uppercase tracking-[0.2em] mb-2 block">
                {p.label}
              </span>
              <h3 className="relative text-white font-bold text-xl leading-snug mb-3">{p.title}</h3>
              <p className="relative text-white/55 text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(6, 16, 70, 0.72)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(20,214,199,0.15)",
            boxShadow: "0 8px 40px rgba(0,27,143,0.25)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative flex flex-col items-center justify-center py-16 px-12 text-center">
              <div
                className="hidden md:block absolute right-0 top-1/4 bottom-1/4 w-px"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />
              <span className="text-7xl lg:text-8xl font-black text-white mb-3 leading-none">
                100+
              </span>
              <span className="text-[#14D6C7] text-base font-semibold tracking-wide">
                Projectos Entregues
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-16 px-12 text-center">
              <span className="text-7xl lg:text-8xl font-black text-white mb-3 leading-none">
                20+
              </span>
              <span className="text-[#14D6C7] text-base font-semibold tracking-wide">
                Marcas Posicionadas
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
