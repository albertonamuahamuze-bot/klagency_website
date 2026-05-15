"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_PRIMARY, NAV_LINKS, CONTACTS } from "@/lib/constants";

const serviceLinks = [
  "Consultoria Estratégica",
  "Desenvolvimento de Websites",
  "Marketing Digital",
  "Posicionamento de Marca",
  "Branding",
  "Gestão de Projectos",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative pt-20 pb-10 overflow-hidden"
      style={{ background: "#010410" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#00059B] to-[#2563EB] flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-white font-black text-base">K</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">KLAGENCY</span>
            </a>
            <p className="text-[#475569] text-sm leading-relaxed mb-6">
              Conexões que geram sucesso.
            </p>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
              Posicionamos marcas e líderes para dominar os seus mercados com estratégia,
              branding e tecnologia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#64748B] hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Serviços
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-[#64748B] hover:text-white text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-widest">
              Contacto
            </h4>
            <ul className="space-y-3 mb-6">
              {CONTACTS.phones.map((p) => (
                <li key={p}>
                  <span className="text-[#64748B] text-sm">{p}</span>
                </li>
              ))}
              {CONTACTS.emails.slice(0, 2).map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="text-[#64748B] hover:text-white text-sm transition-colors duration-200 break-all"
                  >
                    {e}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all duration-200"
            >
              <MessageCircle size={14} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[#334155] text-sm">
            © {year} KLAGENCY. Todos os direitos reservados.
          </p>
          <p className="text-[#334155] text-sm">
            <a
              href={`https://${CONTACTS.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#64748B] transition-colors"
            >
              {CONTACTS.website}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
