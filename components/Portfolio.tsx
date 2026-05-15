"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const clients = [
  {
    initials: "ECU",
    name: "ECU",
    category: "Identidade Corporativa",
    service: "Branding & Posicionamento estratégico de marca.",
    logoColor: "#00059B",
    logoBg: "#EFF6FF",
  },
  {
    initials: "CM",
    name: "Confidencial Microcrédito",
    category: "Branding & Comunicação",
    service: "Estratégia completa de marca e comunicação institucional.",
    logoColor: "#065F46",
    logoBg: "#ECFDF5",
  },
  {
    initials: "ML",
    name: "MozLimo",
    category: "Posicionamento Premium",
    service: "Identidade visual e posicionamento para transporte executivo.",
    logoColor: "#0F172A",
    logoBg: "#F1F5F9",
  },
  {
    initials: "GP",
    name: "GP",
    category: "Estratégia & Marketing",
    service: "Desenvolvimento estratégico e presença digital da marca.",
    logoColor: "#1E40AF",
    logoBg: "#EFF6FF",
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
      className="relative py-28 lg:py-36 bg-[#EFF6FF] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFDBFE]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BFDBFE]/60 to-transparent" />

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
            Portfólio
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight max-w-2xl mx-auto">
            Marcas reais que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
              transformamos.
            </span>
          </h2>
          <p className="text-[#64748B] text-lg mt-5 max-w-lg mx-auto leading-relaxed">
            Clientes reais. Resultados concretos. Marcas que cresceram com estratégia,
            identidade sólida e execução consistente.
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
              style={{ border: "1px solid #E2E8F0" }}
            >
              {/* Logo area */}
              <div
                className="relative h-40 flex items-center justify-center overflow-hidden"
                style={{ background: c.logoBg }}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ background: c.logoColor }}
                >
                  <span className="text-white font-black text-xl tracking-wider">
                    {c.initials}
                  </span>
                </div>

                {/* Arrow badge on hover */}
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                  style={{ background: "rgba(37,99,235,0.12)", border: "1px solid rgba(37,99,235,0.2)" }}
                >
                  <ArrowUpRight size={14} className="text-[#2563EB]" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span
                  className="inline-block text-[0.65rem] font-bold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full mb-3"
                  style={{ background: "#EFF6FF", color: "#2563EB" }}
                >
                  {c.category}
                </span>
                <h3 className="text-[#0F172A] font-bold text-base mb-1.5 leading-snug">
                  {c.name}
                </h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{c.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Confidentiality note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center text-[#94A3B8] text-sm mt-10"
        >
          Detalhes protegidos por acordo de confidencialidade. Dados divulgados com autorização dos clientes.
        </motion.p>
      </div>
    </section>
  );
}
