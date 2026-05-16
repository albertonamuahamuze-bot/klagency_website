"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { WHATSAPP_PRIMARY, WHATSAPP_SECONDARY, CONTACTS } from "@/lib/constants";

export default function Contact() {
  return (
    <section
      id="contactos"
      className="relative py-36 lg:py-52 overflow-hidden"
      style={{ background: "#00105C" }}
    >
      {/* Centre ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,87,255,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Right glow */}
      <div
        className="absolute top-1/2 -right-40 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#14D6C7]/3 blur-3xl pointer-events-none"
      />

      {/* Bottom transition to Footer (#000E40) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #000E40, transparent)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Contacte-nos
          </p>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-7">
            Vamos trabalhar{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)",
              }}
            >
              juntos.
            </span>
          </h2>

          <p className="text-white/45 text-lg leading-relaxed mb-16 max-w-lg mx-auto">
            Entre em contacto e vamos começar uma conversa estratégica sobre
            o posicionamento da sua marca.
          </p>

          {/* Contact details — clean, editorial */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col items-center gap-5 mb-14"
          >
            <a
              href={`tel:${CONTACTS.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-white/60 hover:text-white transition-colors duration-300 group"
            >
              <Phone size={15} className="text-[#14D6C7]" />
              <span className="text-lg font-medium tracking-wide">
                {CONTACTS.phones[0]}
              </span>
            </a>
            <a
              href={`tel:${CONTACTS.phones[1].replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors duration-300"
            >
              <Phone size={15} className="text-[#14D6C7]/50" />
              <span className="text-base font-medium tracking-wide">
                {CONTACTS.phones[1]}
              </span>
            </a>

            {/* Separator */}
            <div
              className="w-10 h-px my-1"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />

            <a
              href={`mailto:${CONTACTS.emails[0]}`}
              className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors duration-300"
            >
              <Mail size={15} className="text-[#60A5FA]" />
              <span className="text-base font-medium">{CONTACTS.emails[0]}</span>
            </a>
          </motion.div>

          {/* WhatsApp CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 text-[#001B8F] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 text-sm"
              style={{
                background: "#14D6C7",
                boxShadow: "0 8px 32px rgba(20,214,199,0.42)",
              }}
            >
              <MessageCircle size={18} />
              {CONTACTS.phones[0]}
            </a>
            <a
              href={WHATSAPP_SECONDARY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 text-sm"
              style={{
                background: "rgba(5, 12, 58, 0.55)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <MessageCircle size={18} />
              {CONTACTS.phones[1]}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
