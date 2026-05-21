"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_PRIMARY, VISUAL_ASSETS } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${VISUAL_ASSETS.hero})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,3,79,0.97)_0%,rgba(0,5,157,0.82)_45%,rgba(0,3,79,0.35)_100%)]" />

      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-28 pt-28 sm:px-6 sm:pb-32 sm:pt-32 lg:px-8 lg:pb-36 lg:pt-40">

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="h-px w-8 shrink-0 bg-[#00059D] sm:w-10" />
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/60 sm:text-[0.68rem] sm:tracking-[0.25em]">
            Estratégia · Posicionamento · Crescimento
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-[1.9rem] font-black leading-[1.05] tracking-[-0.02em] min-[380px]:text-[2.2rem] sm:text-[3.4rem] sm:leading-[1.0] sm:tracking-[-0.03em] lg:text-[5.75rem]"
        >
          Marcas fortes{" "}
          <br className="hidden sm:block" />
          nascem de{" "}
          <em className="[font-family:var(--font-dm-serif)] italic font-normal text-[#A8C4FF]">
            estratégia clara.
          </em>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
          className="my-7 h-px w-16 origin-left bg-white/20 sm:my-10 sm:w-24"
        />

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: "easeOut" }}
          className="max-w-sm text-sm font-light leading-7 text-white/70 sm:max-w-xl sm:text-base sm:leading-8 lg:text-lg"
        >
          Ajudamos empresas e líderes a construir autoridade,
          ganhar posicionamento e crescer com intenção.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:gap-4"
        >
          <a
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#00034F] shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(0,0,0,0.35)] sm:px-8 sm:py-4"
          >
            <MessageCircle size={17} />
            Falar com a KLAGENCY
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:text-white sm:px-8 sm:py-4"
          >
            Ver portfólio
            <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Scroll indicator — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-20 left-6 hidden flex-col items-center gap-3 lg:flex lg:left-8"
        >
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/30 [writing-mode:vertical-lr]">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block">
        <svg viewBox="0 0 1440 130" className="h-[90px] w-full sm:h-[110px]" preserveAspectRatio="none">
          <path fill="#ffffff">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="
                M0,72 C260,126 470,18 740,64 C1020,112 1190,28 1440,76 L1440,130 L0,130 Z;
                M0,62 C260,8 490,114 760,66 C1010,22 1200,112 1440,58 L1440,130 L0,130 Z;
                M0,72 C260,126 470,18 740,64 C1020,112 1190,28 1440,76 L1440,130 L0,130 Z
              "
            />
          </path>
        </svg>
      </div>
    </section>
  );
}
