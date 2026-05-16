"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Award, Users } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

export default function CinematicSection() {
  return (
    <section
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{ background: "#00105C" }}
    >
      {/* Atmospheric left glow */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 25% 55%, rgba(0,87,255,0.14) 0%, transparent 58%)",
        }}
      />
      {/* Subtle right glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#14D6C7]/4 blur-3xl pointer-events-none"
        style={{ transform: "translate(30%, -30%)" }}
      />

      {/* Bottom transition to Testimonials (#001B8F) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #001B8F, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Left: editorial text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Parceria Estratégica
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-7">
              Estratégia que{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)",
                }}
              >
                transforma marcas.
              </span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-[430px]">
              Combinamos clareza estratégica, criatividade e tecnologia para
              posicionar marcas com autoridade e impacto duradouro em mercados
              competitivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 text-[#001B8F] font-bold px-7 py-3.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                style={{
                  background: "#14D6C7",
                  boxShadow: "0 6px 28px rgba(20,214,199,0.38)",
                }}
              >
                Comece agora
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Mini divider */}
            <div
              className="mt-14 w-12 h-px"
              style={{ background: "rgba(20,214,199,0.3)" }}
            />
            <p className="mt-5 text-white/30 text-sm italic">
              Moçambique · África Austral
            </p>
          </motion.div>

          {/* Right: cinematic layered image composition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.05, ease: "easeOut", delay: 0.1 }}
            className="relative h-[500px] lg:h-[540px]"
          >

            {/* ── Background "image" ── wider, behind, subtle */}
            <div
              className="absolute top-0 right-0 w-[88%] h-[72%] rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, #041228 0%, #071a44 45%, #0a1f5a 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow:
                  "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)",
              }}
            >
              {/* Atmospheric light leak — simulates office/executive environment */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 75% 25%, rgba(0,87,255,0.22) 0%, transparent 55%), radial-gradient(ellipse at 15% 80%, rgba(20,214,199,0.07) 0%, transparent 50%)",
                }}
              />
              {/* Subtle architectural grid texture */}
              <div
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              {/* Bottom vignette overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 35%, rgba(0,8,32,0.75) 100%)",
                }}
              />
              {/* Caption bottom-left */}
              <div className="absolute bottom-6 left-7">
                <p className="text-white/25 text-[0.6rem] uppercase tracking-widest mb-1">
                  KL Agency
                </p>
                <p className="text-white/60 font-semibold text-sm leading-snug">
                  Estratégia & Posicionamento
                </p>
              </div>
            </div>

            {/* ── Foreground "image" ── elevated, overlapping, sharp */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-[60%] rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(155deg, rgba(4,14,40,0.98) 0%, rgba(0,24,80,0.96) 100%)",
                border: "1px solid rgba(20,214,199,0.18)",
                boxShadow:
                  "0 36px 90px rgba(0,0,0,0.65), 0 0 50px rgba(20,214,199,0.07), inset 0 1px 0 rgba(255,255,255,0.08)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              <div className="p-7">
                {/* Brand identity mark */}
                <div className="flex items-center gap-3 mb-8">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #0057FF, #14D6C7)",
                      boxShadow: "0 6px 20px rgba(20,214,199,0.32)",
                    }}
                  >
                    <span className="text-white font-black text-lg leading-none">
                      K
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-none">
                      KL Agency
                    </p>
                    <p className="text-[#14D6C7] text-[0.62rem] mt-0.5 tracking-wide">
                      Premium Strategy
                    </p>
                  </div>
                </div>

                {/* Key metrics */}
                <div className="space-y-4 mb-7">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(20,214,199,0.1)" }}
                    >
                      <TrendingUp size={14} className="text-[#14D6C7]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-none">
                        +100 Projectos
                      </p>
                      <p className="text-white/35 text-[0.62rem] mt-0.5">
                        entregues com sucesso
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(96,165,250,0.1)" }}
                    >
                      <Award size={14} className="text-[#60A5FA]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-none">
                        +20 Marcas
                      </p>
                      <p className="text-white/35 text-[0.62rem] mt-0.5">
                        posicionadas com autoridade
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(167,139,250,0.1)" }}
                    >
                      <Users size={14} className="text-[#A78BFA]" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-none">
                        Moçambique
                      </p>
                      <p className="text-white/35 text-[0.62rem] mt-0.5">
                        mercado de actuação
                      </p>
                    </div>
                  </div>
                </div>

                {/* Active status */}
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#14D6C7] animate-pulse" />
                  <span className="text-[#14D6C7] text-[0.6rem] font-bold uppercase tracking-widest">
                    Activo · 2025
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating accent particles */}
            <motion.div
              animate={{ y: [0, -10, 0], opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[28%] right-[8%] w-3 h-3 rounded-full pointer-events-none"
              style={{
                background: "#14D6C7",
                boxShadow: "0 0 24px rgba(20,214,199,0.7)",
              }}
            />
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
              className="absolute bottom-[28%] right-[4%] w-2 h-2 rounded-full pointer-events-none"
              style={{
                background: "#60A5FA",
                boxShadow: "0 0 18px rgba(96,165,250,0.6)",
              }}
            />
            <motion.div
              animate={{ y: [0, -6, 0], opacity: [0.2, 0.45, 0.2] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute top-[55%] right-[20%] w-1.5 h-1.5 rounded-full pointer-events-none"
              style={{
                background: "#A78BFA",
                boxShadow: "0 0 12px rgba(167,139,250,0.5)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
