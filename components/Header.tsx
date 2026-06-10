"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { NAV_LINKS, WHATSAPP_PRIMARY } from "@/lib/constants";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (y) => setIsSticky(y > 40));
  }, [scrollY]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* Main bar */}
      <motion.div
        animate={{
          backdropFilter: isSticky ? "blur(20px)" : "blur(0px)",
          backgroundColor: isSticky ? "rgba(2,6,23,0.92)" : "transparent",
          borderBottomColor: isSticky ? "rgba(255,255,255,0.07)" : "transparent",
        }}
        transition={{ duration: 0.3 }}
        style={{
          borderBottom: "1px solid transparent",
          WebkitBackdropFilter: isSticky ? "blur(20px)" : "blur(0px)",
        } as React.CSSProperties}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }} aria-label="KLAgency">
            <div style={{ position: "relative", width: 36, height: 36 }}>
              <Image
                src="/Imagens/3.jpg"
                alt="KLAgency Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <span style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "0.06em",
              color: "#fff",
            }}>KLAgency</span>
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

          {/* Hamburger — mobile com linhas animadas */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 4, display: "flex", flexDirection: "column", gap: 0,
            }}
          >
            <motion.span
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 8 : 0 }}
              transition={{ duration: 0.25 }}
              style={{
                display: "block", width: 24, height: 2,
                background: "#fff", marginBottom: 6, borderRadius: 2,
              }}
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              transition={{ duration: 0.25 }}
              style={{
                display: "block", width: 24, height: 2,
                background: "#fff", marginBottom: 6, borderRadius: 2,
              }}
            />
            <motion.span
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -8 : 0 }}
              transition={{ duration: 0.25 }}
              style={{
                display: "block", width: 24, height: 2,
                background: "#fff", borderRadius: 2,
              }}
            />
          </button>
        </div>
      </motion.div>

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
