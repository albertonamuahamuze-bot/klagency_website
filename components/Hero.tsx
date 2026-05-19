"use client";

import { motion } from "framer-motion";
import { ArrowRight, BriefcaseBusiness, MessageCircle } from "lucide-react";
import { WHATSAPP_PRIMARY, VISUAL_ASSETS } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${VISUAL_ASSETS.hero})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,3,79,0.94)_0%,rgba(0,5,157,0.76)_42%,rgba(0,3,79,0.24)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(0,5,157,0.48),transparent_34%)]" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pb-32 pt-36 lg:px-8 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 1.02 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#00034F]/55 px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] shadow-2xl backdrop-blur-md">
            <BriefcaseBusiness size={16} />
            Conexões que geram sucesso.
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Marcas fortes nascem de{" "}
            <span className="text-[#DCE8FF]">estratégia clara.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/84 lg:text-xl">
            Ajudamos empresas e líderes a superar a estagnação, ganhar autoridade
            e crescer com posicionamento, estratégia, comunicação e execução.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#00059D] px-8 py-4 text-sm font-bold text-white shadow-[0_20px_50px_rgba(0,5,157,0.35)] transition hover:-translate-y-0.5 hover:bg-[#00036F]"
            >
              <MessageCircle size={18} />
              Falar com a KLAGENCY
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/8 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-[#00034F]"
            >
              Ver portfólio
              <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block">
        <svg viewBox="0 0 1440 130" className="h-[110px] w-full" preserveAspectRatio="none">
          <path fill="#F6F9FC">
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
