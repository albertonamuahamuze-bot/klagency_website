"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Award, Users } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

export default function CinematicSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24 lg:py-44"
      style={{ background: "#00105C" }}
    >
      {/* Atmospheric left glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 25% 55%, rgba(0,87,255,0.14) 0%, transparent 58%)",
        }}
      />
      {/* Subtle right glow */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#14D6C7]/4 blur-3xl pointer-events-none sm:w-[500px] sm:h-[500px]"
        style={{ transform: "translate(30%, -30%)" }}
      />
      {/* Bottom transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #001B8F, transparent)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Left: editorial text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#14D6C7] sm:mb-6 sm:text-xs">
              Parceria Estratégica
            </p>
            <h2 className="mb-6 text-2xl font-bold leading-tight text-white sm:text-3xl sm:mb-7 lg:text-5xl">
              Estratégia que{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)" }}
              >
                transforma marcas.
              </span>
            </h2>
            <p className="mb-8 max-w-full text-base leading-relaxed text-white/55 sm:mb-10 sm:text-lg lg:max-w-[430px]">
              Combinamos clareza estratégica, criatividade e tecnologia para
              posicionar marcas com autoridade e impacto duradouro em mercados
              competitivos.
            </p>

            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold text-[#001B8F] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:px-7 sm:py-3.5"
              style={{
                background: "#14D6C7",
                boxShadow: "0 6px 28px rgba(20,214,199,0.38)",
              }}
            >
              Comece agora
              <ArrowRight size={16} />
            </a>

            <div className="mt-10 h-px w-12 sm:mt-14" style={{ background: "rgba(20,214,199,0.3)" }} />
            <p className="mt-4 text-sm italic text-white/30 sm:mt-5">
              Moçambique · África Austral
            </p>
          </motion.div>

          {/* Right: cinematic layered composition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.05, ease: "easeOut", delay: 0.1 }}
            className="relative h-[320px] sm:h-[400px] lg:h-[540px]"
          >
            {/* Background panel */}
            <div
              className="absolute top-0 right-0 h-[70%] w-[86%] overflow-hidden rounded-2xl sm:rounded-3xl"
              style={{
                background: "linear-gradient(145deg, #041228 0%, #071a44 45%, #0a1f5a 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 75% 25%, rgba(0,87,255,0.22) 0%, transparent 55%), radial-gradient(ellipse at 15% 80%, rgba(20,214,199,0.07) 0%, transparent 50%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 35%, rgba(0,8,32,0.75) 100%)" }}
              />
              <div className="absolute bottom-4 left-5 sm:bottom-6 sm:left-7">
                <p className="text-[0.55rem] uppercase tracking-widest text-white/25 mb-1">KL Agency</p>
                <p className="text-xs font-semibold leading-snug text-white/60 sm:text-sm">
                  Estratégia & Posicionamento
                </p>
              </div>
            </div>

            {/* Foreground card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-[58%] overflow-hidden rounded-2xl sm:rounded-3xl sm:w-[60%]"
              style={{
                background: "linear-gradient(155deg, rgba(4,14,40,0.98) 0%, rgba(0,24,80,0.96) 100%)",
                border: "1px solid rgba(20,214,199,0.18)",
                boxShadow: "0 36px 90px rgba(0,0,0,0.65), 0 0 50px rgba(20,214,199,0.07), inset 0 1px 0 rgba(255,255,255,0.08)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              <div className="p-4 sm:p-7">
                {/* Brand mark */}
                <div className="mb-5 flex items-center gap-2.5 sm:mb-8 sm:gap-3">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-11 sm:w-11 sm:rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #0057FF, #14D6C7)",
                      boxShadow: "0 6px 20px rgba(20,214,199,0.32)",
                    }}
                  >
                    <span className="text-sm font-black leading-none text-white sm:text-lg">K</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold leading-none text-white sm:text-sm">KL Agency</p>
                    <p className="mt-0.5 text-[0.55rem] tracking-wide text-[#14D6C7] sm:text-[0.62rem]">
                      Premium Strategy
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mb-5 space-y-3 sm:mb-7 sm:space-y-4">
                  {[
                    { icon: TrendingUp, color: "#14D6C7", bg: "rgba(20,214,199,0.1)", title: "+100 Projectos", sub: "entregues com sucesso" },
                    { icon: Award, color: "#60A5FA", bg: "rgba(96,165,250,0.1)", title: "+20 Marcas", sub: "posicionadas com autoridade" },
                    { icon: Users, color: "#A78BFA", bg: "rgba(167,139,250,0.1)", title: "Moçambique", sub: "mercado de actuação" },
                  ].map(({ icon: Icon, color, bg, title, sub }) => (
                    <div key={title} className="flex items-center gap-2.5">
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md sm:h-8 sm:w-8 sm:rounded-lg"
                        style={{ background: bg }}
                      >
                        <Icon size={12} style={{ color }} className="sm:size-[14px]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold leading-none text-white sm:text-sm">{title}</p>
                        <p className="mt-0.5 text-[0.55rem] text-white/35 sm:text-[0.62rem]">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#14D6C7]" />
                  <span className="text-[0.55rem] font-bold uppercase tracking-widest text-[#14D6C7] sm:text-[0.6rem]">
                    Activo · 2025
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating particles */}
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[8%] top-[28%] h-3 w-3 rounded-full pointer-events-none"
              style={{ background: "#14D6C7", boxShadow: "0 0 24px rgba(20,214,199,0.7)" }}
            />
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-[28%] right-[4%] h-2 w-2 rounded-full pointer-events-none"
              style={{ background: "#60A5FA", boxShadow: "0 0 18px rgba(96,165,250,0.6)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
