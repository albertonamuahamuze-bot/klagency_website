"use client";

import { CONTACTS, NAV_LINKS, SOCIAL_LINKS, WHATSAPP_PRIMARY } from "@/lib/constants";
import { FadeUpScroll, StaggerScroll, StaggerScrollItem } from "./AnimateOnScroll";

const SERVICE_LINKS = [
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
    <footer
      style={{
        background: "#010412",
        padding: "4rem 2rem 2.5rem",
        borderTop: "1px solid var(--kl-border)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Top grid com StaggerScroll */}
        <StaggerScroll
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1.2fr 1fr",
            gap: "3rem",
            marginBottom: "3.5rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <StaggerScrollItem>
            <a
              href="#home"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                textDecoration: "none",
                marginBottom: "1rem",
              }}
              aria-label="KLAgency"
            >
              <span
                style={{
                  display: "grid",
                  width: 36,
                  height: 36,
                  placeItems: "center",
                  borderRadius: 8,
                  background: "var(--kl-blue-deep)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#fff",
                }}
              >
                K
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#fff",
                }}
              >
                KLAgency
              </span>
            </a>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "0.88rem",
                color: "var(--kl-muted)",
                marginBottom: "1.5rem",
              }}
            >
              Conexões que geram sucesso.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  display: "grid",
                  width: 36,
                  height: 36,
                  placeItems: "center",
                  borderRadius: "50%",
                  border: "1px solid var(--kl-border)",
                  color: "var(--kl-muted)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--kl-border-hover)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--kl-border)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--kl-muted)";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4.5" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{
                  display: "grid",
                  width: 36,
                  height: 36,
                  placeItems: "center",
                  borderRadius: "50%",
                  border: "1px solid var(--kl-border)",
                  color: "var(--kl-muted)",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--kl-border-hover)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--kl-border)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--kl-muted)";
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </StaggerScrollItem>

          {/* Navigation */}
          <StaggerScrollItem>
            <h4 className="kl-label" style={{ marginBottom: "1.2rem" }}>Navegação</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.85rem",
                      color: "var(--kl-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--kl-muted)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerScrollItem>

          {/* Services */}
          <StaggerScrollItem>
            <h4 className="kl-label" style={{ marginBottom: "1.2rem" }}>Serviços</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem",
                      color: "var(--kl-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--kl-muted)")}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </StaggerScrollItem>

          {/* Contact */}
          <StaggerScrollItem>
            <h4 className="kl-label" style={{ marginBottom: "1.2rem" }}>Contacto</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
              {CONTACTS.phones.map((phone) => (
                <li key={phone}>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--kl-muted)" }}>{phone}</span>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${CONTACTS.emails[0]}`}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.82rem",
                    color: "var(--kl-muted)",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--kl-muted)")}
                >
                  {CONTACTS.emails[0]}
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="kl-btn-primary"
              style={{ fontSize: "0.8rem", padding: "10px 18px" }}
            >
              WhatsApp
            </a>
          </StaggerScrollItem>
        </StaggerScroll>

        {/* Bottom bar */}
        <FadeUpScroll
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            borderTop: "1px solid var(--kl-border)",
            paddingTop: "1.5rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--kl-muted)" }}>
            © {year} KLAgency. Todos os direitos reservados.
          </p>
          <a
            href={`https://${CONTACTS.website}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "var(--kl-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--kl-muted)")}
          >
            {CONTACTS.website}
          </a>
        </FadeUpScroll>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
