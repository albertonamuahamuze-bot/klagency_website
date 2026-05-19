"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACTS, NAV_LINKS, SOCIAL_LINKS, WHATSAPP_PRIMARY } from "@/lib/constants";

const serviceLinks = [
  "Posicionamento Estratégico",
  "Estratégia de Marca",
  "Crescimento e Escala",
  "Consultoria Executiva",
  "Marketing Estratégico",
  "Identidade Corporativa",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F9FC] px-6 pb-10 pt-8 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl border-t border-[#DDE8F7] pt-16"
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="mb-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[#00059D] font-black text-white">
                K
              </span>
              <span className="text-xl font-black text-[#00059D]">KLAGENCY</span>
            </a>
            <p className="mb-4 text-base font-black text-[#101828]">
              Conexões que geram sucesso.
            </p>
            <p className="max-w-xs leading-8 text-[#65758B]">
              Estratégia, posicionamento e comunicação para marcas e líderes que
              querem crescer com autoridade.
            </p>

            <div className="mt-7 flex gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#00059D] shadow-sm"
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#00059D] shadow-sm"
                aria-label="LinkedIn"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.16em] text-[#101828]">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#65758B] transition hover:text-[#00059D]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.16em] text-[#101828]">
              Serviços
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a href="#servicos" className="text-[#65758B] transition hover:text-[#00059D]">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-black uppercase tracking-[0.16em] text-[#101828]">
              Contacto
            </h4>
            <ul className="mb-7 space-y-3 text-[#65758B]">
              {CONTACTS.phones.map((phone) => (
                <li key={phone}>{phone}</li>
              ))}
              <li>
                <a href={`mailto:${CONTACTS.emails[0]}`} className="break-all hover:text-[#00059D]">
                  {CONTACTS.emails[0]}
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#00059D] px-5 py-3 text-sm font-black text-white transition hover:bg-[#00036F]"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#DDE8F7] pt-7 text-sm text-[#65758B] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} KLAGENCY. Todos os direitos reservados.</p>
          <a href={`https://${CONTACTS.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#00059D]">
            {CONTACTS.website}
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
