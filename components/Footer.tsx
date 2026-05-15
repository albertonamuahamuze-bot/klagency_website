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
      style={{ background: "#000E40" }}
    >
      {/* Subtle top glow — continues from Contact transition */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-[#0057FF]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #0057FF, #14D6C7)" }}
              >
                <span className="text-white font-black text-base">K</span>
              </div>
              <span
                className="text-white font-bold text-xl tracking-tight"
                style={{ fontFamily: "var(--font-nunito, var(--font-inter), system-ui)" }}
              >
                KL Agency
              </span>
            </a>
            <p className="text-[#14D6C7] text-sm font-medium leading-relaxed mb-3">
              Conexões que geram sucesso.
            </p>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Posicionamos marcas e líderes para dominar os seus mercados com estratégia,
              branding e tecnologia.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white/70 font-semibold text-xs mb-5 uppercase tracking-widest">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/35 hover:text-white/70 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/70 font-semibold text-xs mb-5 uppercase tracking-widest">
              Serviços
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-white/35 hover:text-white/70 text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/70 font-semibold text-xs mb-5 uppercase tracking-widest">
              Contacto
            </h4>
            <ul className="space-y-3 mb-6">
              {CONTACTS.phones.map((p) => (
                <li key={p}>
                  <span className="text-white/35 text-sm">{p}</span>
                </li>
              ))}
              {CONTACTS.emails.slice(0, 2).map((e) => (
                <li key={e}>
                  <a
                    href={`mailto:${e}`}
                    className="text-white/35 hover:text-white/70 text-sm transition-colors duration-200 break-all"
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
              className="inline-flex items-center gap-2 text-[#001B8F] text-xs font-bold px-4 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-px"
              style={{
                background: "#14D6C7",
                boxShadow: "0 4px 16px rgba(20,214,199,0.25)",
              }}
            >
              <MessageCircle size={14} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-white/20 text-sm">
            © {year} KL Agency. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-sm">
            <a
              href={`https://${CONTACTS.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/40 transition-colors"
            >
              {CONTACTS.website}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
