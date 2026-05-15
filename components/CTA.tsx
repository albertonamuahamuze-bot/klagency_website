"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Vibrant blue-to-cyan gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #020B1A 0%, #00059B 35%, #2563EB 70%, #06B6D4 100%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow elements */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#06B6D4]/15 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/25 bg-white/[0.08] backdrop-blur-sm mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white/80 text-xs font-semibold uppercase tracking-[0.15em]">
              Pronto para crescer?
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Vamos posicionar a sua marca para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-[#BAE6FD]">
              crescer com autoridade.
            </span>
          </h2>

          <p className="text-white/75 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Conexões que geram sucesso. Comece hoje a construir a presença que a sua marca
            merece no mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-white text-[#00059B] font-bold px-10 py-4 rounded-xl transition-all duration-300 hover:bg-white/95 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5 text-base"
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2.5 text-white border border-white/25 bg-white/[0.08] backdrop-blur-sm hover:bg-white/[0.15] font-semibold px-10 py-4 rounded-xl transition-all duration-200 text-base"
            >
              Ver nossos serviços
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
