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
    <section className="relative py-28 lg:py-36 overflow-hidden" style={{ background: "#F8FAFC" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />

      {/* Background decoration */}
      <div className="absolute top-1/2 -left-24 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#EFF6FF] blur-3xl pointer-events-none opacity-70" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#2563EB] text-sm font-bold uppercase tracking-[0.25em] mb-4">
              Por que a KLAGENCY
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight mb-6">
              Clareza antes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#06B6D4]">
                da estratégia.
              </span>
            </h2>
            <p className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-md">
              A KL Agency começa sempre pela raiz — identidade, propósito e posicionamento.
              Só depois vem a execução. É isso que nos diferencia.
            </p>

            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-px text-sm"
            >
              Começar agora
              <ArrowRight size={16} />
            </a>

            {/* Stats pair */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-5xl font-black text-[#0F172A] leading-none">100%</p>
                <p className="text-[#64748B] text-sm mt-1.5 max-w-[140px]">
                  das nossas estratégias começam com diagnóstico
                </p>
              </div>
              <div className="w-px h-16 self-stretch bg-[#E2E8F0]" />
              <div>
                <p className="text-5xl font-black text-[#0F172A] leading-none">3×</p>
                <p className="text-[#64748B] text-sm mt-1.5 max-w-[140px]">
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
                className="group flex gap-5 rounded-2xl p-6 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div className="flex-shrink-0 flex items-start pt-0.5">
                  <CheckCircle2 size={20} className="text-[#2563EB]" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#2563EB] text-xs font-bold">{d.number}</span>
                    <h3 className="text-[#0F172A] font-bold text-base">{d.title}</h3>
                  </div>
                  <p className="text-[#64748B] text-sm leading-relaxed">{d.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
