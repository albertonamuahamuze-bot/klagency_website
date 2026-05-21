"use client";

import { motion } from "framer-motion";
import { ArrowRight, Megaphone } from "lucide-react";
import { VISUAL_ASSETS, WHATSAPP_PRIMARY } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-5 py-20 text-white sm:px-6 sm:py-24 lg:px-8 lg:py-36">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${VISUAL_ASSETS.cta})` }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${VISUAL_ASSETS.cta})` }}
        animate={{ scale: [1, 1.055, 1], y: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[#00034F]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,5,157,0.38),transparent_36%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75 }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center"
      >
        <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-[#00034F]/55 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] backdrop-blur-md">
          <Megaphone size={16} />
          Vamos construir algo memoravel.
        </div>
        <h2 className="mb-8 text-2xl font-black leading-[1.1] sm:mb-9 sm:text-4xl lg:text-6xl">
          A sua marca nao precisa de mais ruido. Precisa de direcao.
        </h2>
        <a
          href={WHATSAPP_PRIMARY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[#00059D] px-9 py-4 text-sm font-black shadow-[0_22px_60px_rgba(0,5,157,0.35)] transition hover:-translate-y-0.5 hover:bg-[#00036F]"
        >
          Iniciar conversa
          <ArrowRight size={18} />
        </a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        <svg viewBox="0 0 1440 120" className="h-[90px] w-full" preserveAspectRatio="none">
          <path fill="#F6F9FC" d="M0,70 C260,10 500,116 820,70 C1080,34 1230,86 1440,48 L1440,120 L0,120 Z">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="
                M0,70 C260,10 500,116 820,70 C1080,34 1230,86 1440,48 L1440,120 L0,120 Z;
                M0,52 C290,104 510,34 825,62 C1090,88 1238,30 1440,70 L1440,120 L0,120 Z;
                M0,70 C260,10 500,116 820,70 C1080,34 1230,86 1440,48 L1440,120 L0,120 Z"
            />
          </path>
        </svg>
      </div>
    </section>
  );
}
