"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Briefcase, Trophy } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0066FF 0%, #001B8F 55%, #00105C 100%)",
      }}
    >
      {/* Radial glow top-center */}
      <div
        className="absolute top-0 left-0 right-0 h-[70%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% -10%, rgba(20,214,199,0.2) 0%, transparent 65%)",
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Depth glows */}
      <div className="absolute top-1/3 -left-24 w-[500px] h-[500px] rounded-full bg-[#0057FF]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-[500px] h-[500px] rounded-full bg-[#14D6C7]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-36 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{
                border: "1px solid rgba(20, 214, 199, 0.35)",
                background: "rgba(20, 214, 199, 0.1)",
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#14D6C7] animate-pulse" />
              <span className="text-[#14D6C7] text-xs font-semibold uppercase tracking-[0.18em]">
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
                style={{ backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)" }}
              >
                marcas
              </span>{" "}
              e líderes para dominar os seus mercados.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-white/70 text-lg leading-relaxed mb-10 max-w-[480px]"
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
                className="flex items-center justify-center gap-2.5 text-[#001B8F] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-[0.9375rem]"
                style={{
                  background: "#14D6C7",
                  boxShadow: "0 8px 32px rgba(20,214,199,0.45)",
                }}
              >
                <MessageCircle size={19} />
                Falar no WhatsApp
              </a>
              <a
                href="#servicos"
                className="flex items-center justify-center gap-2.5 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-[0.9375rem]"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(255,255,255,0.08)",
                }}
              >
                Ver Serviços
                <ArrowRight size={17} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: brand visual + floating metrics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[380px] h-[420px]">
              {/* Glow orb */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-25 pointer-events-none"
                style={{ background: "radial-gradient(circle, #14D6C7 0%, #0057FF 60%, transparent 100%)" }}
              />

              {/* Central card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-8 rounded-3xl flex flex-col items-center justify-center"
                style={{
                  background: "rgba(6, 16, 70, 0.75)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 32px 80px rgba(0,27,143,0.4)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-3xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, #0057FF, #14D6C7)" }}
                >
                  <span
                    className="text-white font-black text-4xl"
                    style={{ fontFamily: "var(--font-nunito, var(--font-inter), system-ui)" }}
                  >
                    K
                  </span>
                </div>
                <p
                  className="text-white font-bold text-xl mb-1"
                  style={{ fontFamily: "var(--font-nunito, var(--font-inter), system-ui)" }}
                >
                  KL Agency
                </p>
                <p className="text-[#14D6C7] text-xs tracking-wider">Conexões que geram sucesso</p>
                <div
                  className="mt-5 px-4 py-1.5 rounded-full flex items-center gap-2"
                  style={{ background: "rgba(20,214,199,0.12)", border: "1px solid rgba(20,214,199,0.2)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#14D6C7] animate-pulse" />
                  <span className="text-[#14D6C7] text-[0.65rem] font-semibold uppercase tracking-widest">
                    Activo · Moçambique
                  </span>
                </div>
              </motion.div>

              {/* Floating metric: Projectos */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-10 rounded-2xl p-4"
                style={{
                  background: "rgba(6, 16, 70, 0.9)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(20,214,199,0.25)",
                  boxShadow: "0 20px 60px rgba(0,27,143,0.4)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(20,214,199,0.15)" }}
                  >
                    <Briefcase size={18} className="text-[#14D6C7]" />
                  </div>
                  <div>
                    <p className="text-white font-black text-2xl leading-none">100+</p>
                    <p className="text-white/55 text-[0.62rem] mt-0.5">Projectos entregues</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating metric: Marcas */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-6 -right-10 rounded-2xl p-4"
                style={{
                  background: "rgba(6, 16, 70, 0.9)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(96,165,250,0.25)",
                  boxShadow: "0 20px 60px rgba(0,27,143,0.4)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(96,165,250,0.15)" }}
                  >
                    <Trophy size={18} className="text-[#60A5FA]" />
                  </div>
                  <div>
                    <p className="text-white font-black text-2xl leading-none">+20</p>
                    <p className="text-white/55 text-[0.62rem] mt-0.5">Marcas posicionadas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to top, #00105C, transparent)" }}
      />
    </section>
  );
}
