"use client";

import { motion } from "framer-motion";
import Image from "next/image";

/**
 * COMO ADICIONAR LOGOS REAIS:
 * 1. Coloca o ficheiro PNG/SVG em /public/clients/ (ex: ecu.png)
 * 2. Define logoSrc no array abaixo (ex: logoSrc: "/clients/ecu.png")
 * 3. O logo aparece automaticamente; se logoSrc for null, mostra as iniciais.
 */
const clients = [
  {
    initials: "ECU",
    name: "ECU Despachante Aduaneiro",
    category: "Identidade Corporativa",
    service: "Identidade visual e corporativa para despacho aduaneiro.",
    accentColor: "#14D6C7",
    logoSrc: null as string | null, // ex: "/clients/ecu.png"
  },
  {
    initials: "CM",
    name: "Confidencial Microcrédito",
    category: "Branding & Comunicação",
    service: "Estratégia de marca e identidade visual para microcrédito.",
    accentColor: "#60A5FA",
    logoSrc: null as string | null, // ex: "/clients/confidencial.png"
  },
  {
    initials: "ML",
    name: "MozLimo",
    category: "Posicionamento de Marca",
    service: "Posicionamento premium para transporte executivo.",
    accentColor: "#A78BFA",
    logoSrc: null as string | null, // ex: "/clients/mozlimo.png"
  },
  {
    initials: "GP",
    name: "GP",
    category: "Estratégia & Marketing",
    service: "Estratégia de comunicação e presença digital.",
    accentColor: "#34D399",
    logoSrc: null as string | null, // ex: "/clients/gp.png"
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
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#14D6C7]/4 blur-3xl pointer-events-none" />

      {/* Bottom transition to CTA (starts #0057FF) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0057FF, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
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
          <p className="text-white/55 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Presença, autoridade e posicionamento — entregues com estratégia e consistência.
          </p>
        </motion.div>

        {/* Marquee — client names scrolling */}
        <div className="relative mb-16 overflow-hidden">
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
                  background: "rgba(5, 12, 58, 0.65)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-black"
                  style={{ background: `${c.accentColor}18`, color: c.accentColor }}
                >
                  {c.initials}
                </div>
                <span className="text-white/75 text-sm font-medium whitespace-nowrap">
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
                background: "rgba(5, 12, 58, 0.65)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 8px 32px rgba(0,27,143,0.2), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              {/* Logo area — drop PNG/SVG in /public/clients/ and set logoSrc above */}
              <div
                className="h-36 flex items-center justify-center relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div
                  className="absolute inset-0 opacity-15"
                  style={{ background: `radial-gradient(circle at center, ${c.accentColor}35, transparent 70%)` }}
                />
                <div
                  className="relative flex items-center justify-center w-20 h-16 rounded-2xl"
                  style={{
                    background: "rgba(5, 12, 58, 0.9)",
                    border: `1px solid ${c.accentColor}35`,
                    boxShadow: `0 8px 24px ${c.accentColor}18`,
                  }}
                >
                  {c.logoSrc ? (
                    <Image
                      src={c.logoSrc}
                      alt={c.name}
                      width={72}
                      height={48}
                      className="object-contain"
                    />
                  ) : (
                    <span
                      className="font-black text-xl tracking-wider"
                      style={{ color: c.accentColor }}
                    >
                      {c.initials}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <span
                  className="inline-block text-[0.62rem] font-bold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full mb-3"
                  style={{
                    background: `${c.accentColor}12`,
                    color: c.accentColor,
                    border: `1px solid ${c.accentColor}22`,
                  }}
                >
                  {c.category}
                </span>
                <h3 className="text-white font-bold text-[0.9375rem] mb-2 leading-snug">
                  {c.name}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{c.service}</p>
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
