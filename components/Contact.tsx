"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { CONTACTS, WHATSAPP_PRIMARY, WHATSAPP_SECONDARY } from "@/lib/constants";

const faqs = [
  {
    q: "Quanto tempo demora um projecto de posicionamento?",
    a: "Depende da complexidade da marca, mas a maioria dos projectos leva entre 4 a 8 semanas. Começamos com diagnóstico e terminamos com um sistema de comunicação pronto a usar.",
  },
  {
    q: "Trabalham com empresas de que sectores?",
    a: "Trabalhamos com marcas corporativas, líderes e organizações em fase de crescimento ou reposicionamento — sem restrição de sector.",
  },
  {
    q: "Como funciona a consultoria executiva?",
    a: "São sessões estruturadas de acompanhamento estratégico, focadas em decisões de marca, comunicação e crescimento. Pode ser pontual ou em retainer mensal.",
  },
  {
    q: "Fazem projectos fora de Moçambique?",
    a: "Sim. Actuamos remotamente com clientes em Portugal, Angola, Brasil e outros mercados lusófonos.",
  },
];

const interests = ["Branding", "Estratégia", "Comunicação", "Growth", "Consultoria"];

function AccordionItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      style={{ borderBottom: "1px solid var(--kl-border)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        style={{ background: "none", border: "none", cursor: "pointer" }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.9rem",
            fontWeight: 500,
            color: open ? "#fff" : "var(--kl-silver)",
            transition: "color 0.2s",
          }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ flexShrink: 0, color: "#60A5FA", display: "flex", alignItems: "center" }}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <use href="#plus-icon" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p
              style={{
                paddingBottom: "1.25rem",
                fontSize: "0.85rem",
                lineHeight: 1.75,
                color: "var(--kl-muted)",
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", interest: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const filled = Object.values(fields).filter(Boolean).length;
  const progress = Math.round((filled / 4) * 100);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    background: "transparent",
    padding: "0.75rem 0",
    fontSize: "0.88rem",
    color: "#fff",
    outline: "none",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.2s",
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center gap-4 py-12 text-center"
      >
        <div
          style={{
            display: "flex",
            width: 56,
            height: 56,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "rgba(37,99,235,0.15)",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "#fff" }}>Mensagem enviada!</p>
        <p style={{ fontSize: "0.85rem", color: "var(--kl-muted)" }}>Entraremos em contacto em breve.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      {/* Progress bar */}
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "var(--kl-muted)", marginBottom: "0.3rem" }}>
          <span>Preencher formulário</span>
          <span>{progress}%</span>
        </div>
        <div style={{ height: 1, width: "100%", background: "rgba(255,255,255,0.08)" }}>
          <motion.div
            style={{ height: "100%", background: "var(--kl-blue-bright)" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <input name="name" value={fields.name} onChange={handleChange} placeholder="Nome completo" required style={inputStyle} />
      <input name="email" type="email" value={fields.email} onChange={handleChange} placeholder="Email" required style={inputStyle} />
      <select
        name="interest"
        value={fields.interest}
        onChange={handleChange}
        required
        style={{ ...inputStyle, cursor: "pointer", colorScheme: "dark" }}
      >
        <option value="" style={{ background: "#050B3D" }}>Área de interesse</option>
        {interests.map((i) => (
          <option key={i} value={i} style={{ background: "#050B3D" }}>{i}</option>
        ))}
      </select>
      <textarea
        name="message"
        value={fields.message}
        onChange={handleChange}
        placeholder="Mensagem"
        rows={3}
        required
        style={{ ...inputStyle, resize: "none" }}
      />

      <div style={{ paddingTop: "1rem" }}>
        <button
          type="submit"
          disabled={loading}
          className="kl-btn-primary"
          style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.6 : 1 }}
        >
          {loading ? (
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              style={{ display: "inline-block", width: 16, height: 16, borderRadius: "50%", border: "2px solid rgba(0,6,23,0.3)", borderTopColor: "#020617" }}
            />
          ) : (
            "Enviar mensagem"
          )}
        </button>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contacto"
      style={{
        background: "var(--kl-navy, #020617)",
        padding: "6rem 2rem",
      }}
    >
      {/* Label + Headline */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: 1120, margin: "0 auto 3rem" }}
      >
        <p className="kl-label" style={{ marginBottom: "1rem" }}>Contacto</p>
        <div className="kl-divider" style={{ marginBottom: "1.5rem" }} />
        <h2
          className="kl-heading"
          style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#fff", maxWidth: 560 }}
        >
          Vamos criar a próxima conexão estratégica.
        </h2>
      </motion.div>

      {/* Contact card */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid var(--kl-border)",
        }}
        className="contact-grid"
      >
        {/* Left — info */}
        <div
          style={{
            background: "var(--kl-gradient, linear-gradient(135deg, #020617 0%, #00059B 55%, #2563EB 100%))",
            padding: "3.5rem 2.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.55)",
              marginBottom: "1.2rem",
            }}
          >
            Fale connosco
          </p>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.7)",
              marginBottom: "2.5rem",
            }}
          >
            Fale connosco para alinhar posicionamento,
            comunicação e crescimento.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <a
              href={`tel:${CONTACTS.phones[0].replace(/\s/g, "")}`}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)")}
            >
              <Phone size={15} />
              {CONTACTS.phones[0]}
            </a>
            <a
              href={`mailto:${CONTACTS.emails[0]}`}
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)")}
            >
              <Mail size={15} />
              {CONTACTS.emails[0]}
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div
          style={{
            background: "rgba(5,12,58,0.60)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "3.5rem 2.5rem",
          }}
        >
          <ContactForm />
          <div
            style={{
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              borderTop: "1px solid var(--kl-border)",
              paddingTop: "1.5rem",
            }}
            className="whatsapp-row"
          >
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="kl-btn-primary"
              style={{ justifyContent: "center" }}
            >
              <MessageCircle size={17} />
              WhatsApp principal
            </a>
            <a
              href={WHATSAPP_SECONDARY}
              target="_blank"
              rel="noopener noreferrer"
              className="kl-btn-ghost"
              style={{ justifyContent: "center" }}
            >
              <MessageCircle size={17} />
              Alternativo
            </a>
          </div>
        </div>
      </motion.div>

      {/* FAQ Accordion */}
      <div style={{ maxWidth: 720, margin: "5rem auto 0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <p className="kl-label" style={{ marginBottom: "0.8rem" }}>FAQ</p>
          <h3
            className="kl-heading"
            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", color: "#fff" }}
          >
            Perguntas frequentes
          </h3>
        </motion.div>

        <div style={{ borderTop: "1px solid var(--kl-border)" }}>
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .whatsapp-row {
            flex-direction: column !important;
          }
        }
      `}</style>
    </section>
  );
}
