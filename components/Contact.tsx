"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACTS, WHATSAPP_PRIMARY, WHATSAPP_SECONDARY } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#F6F9FC] px-6 py-24 lg:px-8 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid max-w-6xl overflow-hidden rounded-xl bg-white shadow-[0_26px_80px_rgba(15,37,74,0.08)] lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div className="bg-[linear-gradient(135deg,#00059D,#00034F)] p-10 text-white lg:p-14">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-white/65">
            Contacto
          </p>
          <h2 className="mb-6 text-4xl font-black leading-[1.08] sm:text-5xl">
            Vamos criar a próxima conexão estratégica.
          </h2>
          <p className="leading-8 text-white/74">
            Fale connosco para alinhar posicionamento, comunicação e crescimento.
          </p>
        </div>

        <div className="p-10 lg:p-14">
          <div className="space-y-5">
            <a
              href={`tel:${CONTACTS.phones[0].replace(/\s/g, "")}`}
              className="flex items-center gap-4 rounded-lg border border-[#DDE8F7] p-5 text-[#101828] transition hover:border-[#00059D]"
            >
              <Phone className="text-[#00059D]" size={20} />
              <span className="font-bold">{CONTACTS.phones[0]}</span>
            </a>
            <a
              href={`mailto:${CONTACTS.emails[0]}`}
              className="flex items-center gap-4 rounded-lg border border-[#DDE8F7] p-5 text-[#101828] transition hover:border-[#00059D]"
            >
              <Mail className="text-[#00059D]" size={20} />
              <span className="font-bold">{CONTACTS.emails[0]}</span>
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-[#00059D] px-7 py-4 text-sm font-black text-white transition hover:bg-[#00036F]"
            >
              <MessageCircle size={18} />
              WhatsApp principal
            </a>
            <a
              href={WHATSAPP_SECONDARY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-3 rounded-full border border-[#DDE8F7] px-7 py-4 text-sm font-black text-[#101828] transition hover:border-[#00059D]"
            >
              <MessageCircle size={18} />
              Alternativo
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
