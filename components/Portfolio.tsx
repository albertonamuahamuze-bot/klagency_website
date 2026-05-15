"use client";

import { motion } from "framer-motion";

const clients = [
  {
    initials: "ECU",
    name: "ECU Despachante Aduaneiro",
    category: "Identidade Corporativa",
    service: "Construção da identidade visual e corporativa para empresa de despacho aduaneiro.",
    accentColor: "#2563EB",
    glowColor: "rgba(37, 99, 235, 0.3)",
  },
  {
    initials: "CM",
    name: "Confidencial Microcrédito",
    category: "Branding & Comunicação",
    service: "Estratégia de marca e identidade visual para instituição financeira de microcrédito.",
    accentColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.25)",
  },
  {
    initials: "ML",
    name: "MozLimo",
    category: "Posicionamento de Marca",
    service: "Posicionamento e identidade visual para serviço de transporte executivo premium.",
    accentColor: "#94A3B8",
    glowColor: "rgba(148, 163, 184, 0.2)",
  },
  {
    initials: "GP",
    name: "GP",
    category: "Estratégia & Marketing",
    service: "Desenvolvimento da estratégia de comunicação e presença digital da marca.",
    accentColor: "#60A5FA",
    glowColor: "rgba(96, 165, 250, 0.25)",
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
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "#040F1F" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.2), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,235,0.2), transparent)" }}
      />
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#2563EB]/6 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#06B6D4] text-xs font-bold uppercase tracking-[0.3em] mb-5">
            Casos de Sucesso
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
            Marcas que já confiaram{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #60A5FA, #22D3EE)" }}
            >
              na KL Agency.
            </span>
          </h2>
          <p className="text-[#64748B] text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Marcas que confiaram na KL Agency para fortalecer a sua presença e posicionamento no mercado.
          </p>
        </motion.div>

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
                background: "#07152B",
                border: "1px solid rgba(37, 99, 235, 0.15)",
                boxShadow: "0 4px 24px rgba(0, 5, 155, 0.12)",
              }}
            >
              {/* Logo area */}
              <div
                className="h-40 flex items-center justify-center relative overflow-hidden"
                style={{ background: "rgba(2, 11, 26, 0.6)" }}
              >
                {/* Glow behind logo */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{ background: `radial-gradient(circle at center, ${c.accentColor}20, transparent 70%)` }}
                />
                <div
                  className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center"
                  style={{
                    background: `rgba(7, 21, 43, 0.9)`,
                    border: `1px solid ${c.accentColor}40`,
                    boxShadow: `0 8px 32px ${c.glowColor}`,
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
                    background: "rgba(37, 99, 235, 0.1)",
                    color: "#60A5FA",
                    border: "1px solid rgba(37, 99, 235, 0.15)",
                  }}
                >
                  {c.category}
                </span>
                <h3 className="text-white font-bold text-[0.9375rem] mb-2 leading-snug">
                  {c.name}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{c.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-[#334155] text-sm mt-10"
        >
          Projectos desenvolvidos com consentimento dos clientes. Detalhes estratégicos protegidos por acordo de confidencialidade.
        </motion.p>
      </div>
    </section>
  );
}
