"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_PRIMARY } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* Main bar */}
      <div
        style={{
          background: scrolled ? "rgba(2,6,23,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5" aria-label="KLAgency">
            <span
              className="grid h-9 w-9 place-items-center rounded-lg text-base font-bold text-white"
              style={{
                background: "var(--kl-blue-deep)",
                fontFamily: "var(--font-display)",
              }}
            >
              K
            </span>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 600,
                fontSize: "0.95rem",
                letterSpacing: "0.06em",
                color: "#fff",
              }}
            >
              KLAgency
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.83rem",
                  fontWeight: 400,
                  color: "var(--kl-silver)",
                  textDecoration: "none",
                  letterSpacing: "0.03em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--kl-silver)")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA — desktop */}
          <a
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex kl-btn-primary"
            style={{ fontSize: "0.8rem", padding: "10px 20px" }}
          >
            Iniciar projecto →
          </a>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            style={{ color: "var(--kl-silver)", background: "none", border: "none", cursor: "pointer" }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="kl-glass mx-3 mt-2 p-6 md:hidden"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 500,
                    fontSize: "1rem",
                    color: "var(--kl-silver)",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="kl-btn-primary"
                style={{ justifyContent: "center", marginTop: "0.5rem" }}
              >
                Iniciar projecto →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
