"use client";

import { motion } from "framer-motion";

const clients = [
  {
    initials: "ECU",
    name: "ECU Despachante Aduaneiro",
    category: "Identidade Corporativa",
    service: "Construção da identidade visual e corporativa para empresa de despacho aduaneiro.",
    accentColor: "#14D6C7",
  },
  {
    initials: "CM",
    name: "Confidencial Microcrédito",
    category: "Branding & Comunicação",
    service: "Estratégia de marca e identidade visual para instituição financeira de microcrédito.",
    accentColor: "#60A5FA",
  },
  {
    initials: "ML",
    name: "MozLimo",
    category: "Posicionamento de Marca",
    service: "Posicionamento e identidade visual para serviço de transporte executivo premium.",
    accentColor: "#A78BFA",
  },
  {
    initials: "GP",
    name: "GP",
    category: "Estratégia & Marketing",
    service: "Desenvolvimento da estratégia de comunicação e presença digital da marca.",
    accentColor: "#34D399",
  },
];

// Doubled for seamless marquee loop
const marqueeItems = [...clients, ...clients];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "#00105C" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(20,214,199,0.2), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,87,255,0.2), transparent)" }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#14D6C7]/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-5">
            Casos de Sucesso
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Marcas que já confiaram{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)" }}
            >
              na KL Agency.
            </span>
          </h2>
          <p className="text-white/60 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Marcas que confiaram na KL Agency para fortalecer a sua presença e posicionamento no mercado.
          </p>
        </motion.div>

        {/* Marquee — client names scrolling left */}
        <div className="relative mb-16 overflow-hidden">
          {/* Edge fade masks */}
          <div
            className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(90deg, #00105C, transparent)" }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
            style={{ background: "linear-gradient(-90deg, #00105C, transparent)" }}
          />

          <div
            className="flex gap-4 w-max"
            style={{ animation: "marquee 28s linear infinite" }}
          >
            {marqueeItems.map((c, i) => (
              <div
                key={`${c.name}-${i}`}
                className="flex items-center gap-3 px-5 py-3 rounded-full flex-shrink-0"
                style={{
                  background: "rgba(6, 16, 70, 0.72)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black"
                  style={{ background: `${c.accentColor}20`, color: c.accentColor }}
                >
                  {c.initials}
                </div>
                <span className="text-white/80 text-sm font-medium whitespace-nowrap">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(6, 16, 70, 0.72)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 4px 24px rgba(0,27,143,0.2)",
              }}
            >
              {/* Logo area */}
              <div
                className="h-36 flex items-center justify-center relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: `radial-gradient(circle at center, ${c.accentColor}30, transparent 70%)` }}
                />
                <div
                  className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "rgba(6, 16, 70, 0.9)",
                    border: `1px solid ${c.accentColor}40`,
                    boxShadow: `0 8px 24px ${c.accentColor}20`,
                  }}
                >
                  <span
                    className="font-black text-xl tracking-wider"
                    style={{ color: c.accentColor }}
                  >
                    {c.initials}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span
                  className="inline-block text-[0.62rem] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full mb-3"
                  style={{
                    background: `${c.accentColor}15`,
                    color: c.accentColor,
                    border: `1px solid ${c.accentColor}25`,
                  }}
                >
                  {c.category}
                </span>
                <h3 className="text-white font-bold text-[0.9375rem] mb-2 leading-snug">
                  {c.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{c.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-white/25 text-sm mt-10"
        >
          Projectos desenvolvidos com consentimento dos clientes. Detalhes estratégicos protegidos por acordo de confidencialidade.
        </motion.p>
      </div>
    </section>
  );
}
