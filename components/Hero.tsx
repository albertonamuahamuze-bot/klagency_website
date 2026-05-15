"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, TrendingUp, Shield, Target } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

const metrics = [
  { label: "Reconhecimento", value: 94 },
  { label: "Autoridade", value: 88 },
  { label: "Conversão", value: 79 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #020B1A 0%, #00059B 50%, #2563EB 100%)",
      }}
    >
      {/* Tech grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Depth glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full bg-[#2563EB]/12 blur-3xl pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[#06B6D4]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#00059B]/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-36 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center w-full">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            style={{
              border: "1px solid rgba(6, 182, 212, 0.3)",
              background: "rgba(6, 182, 212, 0.06)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" />
            <span className="text-[#06B6D4] text-xs font-semibold uppercase tracking-[0.18em]">
              Agência Premium · Moçambique
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Posicionamos{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #60A5FA, #22D3EE)" }}
            >
              marcas
            </span>{" "}
            e líderes para dominar os seus mercados.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-[480px]"
          >
            Estratégia, branding, marketing e tecnologia para empresas que querem
            crescer com autoridade no mercado africano e global.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-[0.9375rem]"
              style={{
                background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
                boxShadow: "0 8px 32px rgba(37, 99, 235, 0.4)",
              }}
            >
              <MessageCircle size={19} />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2.5 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-[0.9375rem]"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.15)",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              Ver Serviços
              <ArrowRight size={17} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center"
        >
          <div className="relative w-[400px] h-[490px]">
            <div className="absolute inset-6 bg-[#2563EB]/15 rounded-3xl blur-3xl" />

            {/* Main Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                background: "rgba(7, 21, 43, 0.85)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                boxShadow: "0 32px 80px rgba(0, 5, 155, 0.3)",
              }}
            >
              <div
                className="h-[2px] w-full"
                style={{ background: "linear-gradient(90deg, #06B6D4, #2563EB, transparent)" }}
              />

              <div className="p-7">
                <div className="flex items-center justify-between mb-7">
                  <div>
                    <p className="text-[#06B6D4] text-[0.6rem] font-bold uppercase tracking-[0.22em] mb-1">
                      Dashboard Estratégico
                    </p>
                    <h3 className="text-white font-bold text-lg">Brand Positioning</h3>
                  </div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(6, 182, 212, 0.12)",
                      border: "1px solid rgba(6, 182, 212, 0.25)",
                    }}
                  >
                    <Target size={19} className="text-[#06B6D4]" />
                  </div>
                </div>

                <div className="mb-7">
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-7xl font-black text-white leading-none">94</span>
                    <div className="mb-2">
                      <span className="text-[#06B6D4] text-xl font-bold">/100</span>
                      <p className="text-[#64748B] text-[0.7rem] mt-0.5">Brand Score</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                      <TrendingUp size={11} />
                      +12.4%
                    </div>
                    <span className="text-[#475569] text-xs">vs. mês anterior</span>
                  </div>
                </div>

                <div className="space-y-4 mb-7">
                  {metrics.map((m, i) => (
                    <div key={m.label}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[#64748B] text-xs">{m.label}</span>
                        <span className="text-white text-xs font-semibold">{m.value}%</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${m.value}%` }}
                          transition={{ duration: 1.2, delay: 0.8 + i * 0.15, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: "linear-gradient(90deg, #00059B, #2563EB, #06B6D4)" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="flex items-center gap-2.5 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse flex-shrink-0" />
                  <span className="text-[#475569] text-[0.68rem]">
                    Estratégia Activa · Actualizado agora
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating: top-left — 100+ Projectos */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -top-8 -left-14 rounded-2xl p-4"
              style={{
                background: "rgba(7, 21, 43, 0.96)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
                boxShadow: "0 20px 60px rgba(0, 5, 155, 0.35)",
                width: "10rem",
              }}
            >
              <TrendingUp size={16} className="text-[#06B6D4] mb-2.5" />
              <p className="text-white font-black text-2xl leading-none mb-1">100+</p>
              <p className="text-[#64748B] text-[0.62rem]">Projectos entregues</p>
            </motion.div>

            {/* Floating: bottom-right — +20 Marcas */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              className="absolute -bottom-7 -right-10 w-40 rounded-2xl p-4"
              style={{
                background: "rgba(7, 21, 43, 0.96)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(37, 99, 235, 0.2)",
                boxShadow: "0 20px 60px rgba(0, 5, 155, 0.35)",
              }}
            >
              <Shield size={16} className="text-[#2563EB] mb-2.5" />
              <p className="text-white font-black text-2xl leading-none mb-1">+20</p>
              <p className="text-[#64748B] text-[0.62rem]">Marcas posicionadas</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to dark body */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #020B1A, transparent)" }}
      />
    </section>
  );
}
