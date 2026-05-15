"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0057FF 0%, #001B8F 50%, #00105C 100%)",
        }}
      />
      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(20,214,199,0.15) 0%, transparent 60%)",
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
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0057FF]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#14D6C7]/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
            style={{
              border: "1px solid rgba(20,214,199,0.3)",
              background: "rgba(20,214,199,0.08)",
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#14D6C7] animate-pulse" />
            <span className="text-[#14D6C7] text-xs font-semibold uppercase tracking-[0.15em]">
              Pronto para crescer?
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Vamos posicionar a sua marca para{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)" }}
            >
              crescer com autoridade.
            </span>
          </h2>

          <p className="text-white/70 text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Conexões que geram sucesso. Comece hoje a construir a presença que a sua marca
            merece no mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 text-[#001B8F] font-bold px-10 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 text-base"
              style={{
                background: "#14D6C7",
                boxShadow: "0 8px 32px rgba(20,214,199,0.45)",
              }}
            >
              <MessageCircle size={20} />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2.5 text-white font-semibold px-10 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-base"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                background: "rgba(255,255,255,0.08)",
              }}
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
