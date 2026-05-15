"use client";

import { motion } from "framer-motion";

const clients = [
  {
    initials: "ECU",
    name: "ECU Despachante Aduaneiro",
    category: "Identidade Corporativa",
    service: "Construção da identidade visual e corporativa para empresa de despacho aduaneiro.",
    logoColor: "#00059B",
    logoBg: "#EFF6FF",
    accentText: "#BFDBFE",
  },
  {
    initials: "CM",
    name: "Confidencial Microcrédito",
    category: "Branding & Comunicação",
    service: "Estratégia de marca e identidade visual para instituição financeira de microcrédito.",
    logoColor: "#065F46",
    logoBg: "#ECFDF5",
    accentText: "#6EE7B7",
  },
  {
    initials: "ML",
    name: "MozLimo",
    category: "Posicionamento de Marca",
    service: "Posicionamento e identidade visual para serviço de transporte executivo premium.",
    logoColor: "#1C1917",
    logoBg: "#F1F5F9",
    accentText: "#94A3B8",
  },
  {
    initials: "GP",
    name: "GP",
    category: "Estratégia & Marketing",
    service: "Desenvolvimento da estratégia de comunicação e presença digital da marca.",
    logoColor: "#1E3A8A",
    logoBg: "#EFF6FF",
    accentText: "#BFDBFE",
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
      style={{ background: "#F4F8FF" }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#BFDBFE]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#BFDBFE]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#2563EB] text-xs font-bold uppercase tracking-[0.3em] mb-5">
            Casos de Sucesso
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight max-w-2xl mx-auto">
            Marcas que já confiaram{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#0EA5E9]">
              na KL Agency.
            </span>
          </h2>
          <p className="text-[#64748B] text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Marcas que já confiaram na KL Agency para fortalecer a sua presença e posicionamento no mercado.
          </p>
        </motion.div>

        {/* Client grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={c.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="group rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
              style={{
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Logo area */}
              <div
                className="h-40 flex items-center justify-center"
                style={{ background: c.logoBg }}
              >
                <div
                  className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center"
                  style={{
                    background: c.logoColor,
                    boxShadow: `0 8px 24px ${c.logoColor}40`,
                  }}
                >
                  <span className="text-white font-black text-xl tracking-wider">
                    {c.initials}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span
                  className="inline-block text-[0.62rem] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full mb-3"
                  style={{ background: "#EFF6FF", color: "#2563EB" }}
                >
                  {c.category}
                </span>
                <h3 className="text-[#0F172A] font-bold text-[0.9375rem] mb-2 leading-snug">
                  {c.name}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{c.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Honest disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-[#94A3B8] text-sm mt-10"
        >
          Projectos desenvolvidos com consentimento dos clientes. Detalhes estratégicos protegidos por acordo de confidencialidade.
        </motion.p>
      </div>
    </section>
  );
}
