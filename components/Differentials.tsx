"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

const differentials = [
  {
    number: "01",
    title: "Clareza antes da estratégia",
    description:
      "Antes de qualquer execução, entendemos profundamente a essência da marca, o mercado e o posicionamento actual. Sem clareza, não há estratégia eficaz.",
  },
  {
    number: "02",
    title: "Conexão honesta com o cliente",
    description:
      "Relações directas e transparentes. Não vendemos promessas — entregamos estratégia com base em dados, objectivos reais e capacidade de execução.",
  },
  {
    number: "03",
    title: "Construção desde a raiz",
    description:
      "Trabalhamos identidade, propósito e posicionamento antes de qualquer acção de marketing ou comunicação. A raiz forte garante o crescimento sustentável.",
  },
  {
    number: "04",
    title: "Orientação a resultados",
    description:
      "Cada estratégia é desenhada com métricas claras e objectivos concretos. O sucesso da sua marca é a única métrica que importa para a KL Agency.",
  },
];

export default function Differentials() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "#001B8F" }}>
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,87,255,0.3), transparent)" }}
      />
      <div className="absolute top-1/2 -left-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0057FF]/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-5">
              Por que a KL Agency
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Clareza antes{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)" }}
              >
                da estratégia.
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              A KL Agency começa sempre pela raiz — identidade, propósito e posicionamento.
              Só depois vem a execução. É isso que nos diferencia.
            </p>

            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[#001B8F] font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-px text-sm"
              style={{
                background: "#14D6C7",
                boxShadow: "0 6px 24px rgba(20,214,199,0.35)",
              }}
            >
              Começar agora
              <ArrowRight size={16} />
            </a>

            {/* Stats */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-5xl font-black text-white leading-none">100%</p>
                <p className="text-white/50 text-sm mt-1.5 max-w-[140px]">
                  das estratégias começam com diagnóstico
                </p>
              </div>
              <div className="w-px h-16 self-stretch" style={{ background: "rgba(255,255,255,0.1)" }} />
              <div>
                <p className="text-5xl font-black text-white leading-none">3×</p>
                <p className="text-white/50 text-sm mt-1.5 max-w-[140px]">
                  mais eficácia quando a raiz está definida
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <div className="space-y-4">
            {differentials.map((d, i) => (
              <motion.div
                key={d.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="group flex gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(6, 16, 70, 0.72)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  boxShadow: "0 4px 20px rgba(0,27,143,0.15)",
                }}
              >
                <div className="flex-shrink-0 flex items-start pt-0.5">
                  <CheckCircle2 size={20} className="text-[#14D6C7]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#14D6C7] text-xs font-bold">{d.number}</span>
                    <h3 className="text-white font-bold text-base">{d.title}</h3>
                  </div>
                  <p className="text-white/55 text-sm leading-relaxed">{d.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
