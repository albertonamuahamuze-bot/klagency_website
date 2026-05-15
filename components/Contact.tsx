"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Globe, MessageCircle, ExternalLink } from "lucide-react";
import { WHATSAPP_PRIMARY, WHATSAPP_SECONDARY, CONTACTS } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const contactItems = [
  {
    icon: Phone,
    label: "Telefone / WhatsApp",
    accentColor: "#14D6C7",
    items: [
      { text: CONTACTS.phones[0], href: WHATSAPP_PRIMARY, external: true },
      { text: CONTACTS.phones[1], href: WHATSAPP_SECONDARY, external: true },
    ],
  },
  {
    icon: Mail,
    label: "E-mail",
    accentColor: "#60A5FA",
    items: [
      { text: CONTACTS.emails[0], href: `mailto:${CONTACTS.emails[0]}`, external: false },
      { text: CONTACTS.emails[1], href: `mailto:${CONTACTS.emails[1]}`, external: false },
      { text: CONTACTS.emails[2], href: `mailto:${CONTACTS.emails[2]}`, external: false },
    ],
  },
  {
    icon: Globe,
    label: "Website",
    accentColor: "#A78BFA",
    items: [
      { text: CONTACTS.website, href: `https://${CONTACTS.website}`, external: true },
    ],
  },
];

export default function Contact() {
  return (
    <section
      id="contactos"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "#00105C" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(20,214,199,0.2), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,87,255,0.15), transparent)" }}
      />
      <div className="absolute top-1/2 -right-32 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#14D6C7]/4 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#14D6C7] text-xs font-bold uppercase tracking-[0.3em] mb-5">
              Contacte-nos
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Vamos trabalhar{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #14D6C7, #60A5FA)" }}
              >
                juntos.
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Estamos prontos para ajudar a posicionar a sua marca no mercado. Entre em contacto
              e vamos começar uma conversa estratégica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 text-[#001B8F] font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-px text-sm"
                style={{
                  background: "#14D6C7",
                  boxShadow: "0 6px 24px rgba(20,214,199,0.35)",
                }}
              >
                <MessageCircle size={18} />
                +258 852 170 974
              </a>
              <a
                href={WHATSAPP_SECONDARY}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-px text-sm"
                style={{
                  background: "rgba(6, 16, 70, 0.72)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <MessageCircle size={18} />
                +258 871 170 974
              </a>
            </div>
          </motion.div>

          {/* Right: Contact cards */}
          <div className="space-y-4">
            {contactItems.map((c, i) => (
              <motion.div
                key={c.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(6, 16, 70, 0.72)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 4px 24px rgba(0,27,143,0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${c.accentColor}15`,
                      border: `1px solid ${c.accentColor}25`,
                    }}
                  >
                    <c.icon size={16} style={{ color: c.accentColor }} />
                  </div>
                  <span className="text-white/65 text-sm font-medium">{c.label}</span>
                </div>

                <div className="space-y-2">
                  {c.items.map((item) => (
                    <a
                      key={item.text}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-white font-medium text-sm hover:text-[#14D6C7] transition-colors duration-200 group"
                    >
                      {item.text}
                      <ExternalLink
                        size={12}
                        className="text-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
