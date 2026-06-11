"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

export default function ConversionPopup() {
  const [visible, setVisible]     = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isMobile, setIsMobile]   = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 30_000);
    function onScroll() {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (pct > 0.6) {
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dismissed]);

  function dismiss() {
    setVisible(false);
    setDismissed(true);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="popup"
          {...(isMobile
            ? {
                initial:    { y: "100%" },
                animate:    { y: 0 },
                exit:       { y: "100%" },
                transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
              }
            : {
                initial:    { x: 60, opacity: 0 },
                animate:    { x: 0,  opacity: 1 },
                exit:       { x: 60, opacity: 0 },
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              })}
          style={
            isMobile
              ? {
                  position: "fixed",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 60,
                  borderRadius: "24px 24px 0 0",
                  background: "rgba(2,6,23,0.97)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderBottom: "none",
                  boxShadow: "0 -24px 80px rgba(0,5,155,0.35)",
                  padding: "1.8rem 1.6rem 2.2rem",
                }
              : {
                  position: "fixed",
                  bottom: 24,
                  right: 24,
                  zIndex: 60,
                  maxWidth: 340,
                  width: "calc(100vw - 48px)",
                  borderRadius: 24,
                  background: "rgba(2,6,23,0.95)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 24px 80px rgba(0,5,155,0.35)",
                  padding: "1.6rem",
                }
          }
        >
          {/* Botão fechar */}
          <button
            onClick={dismiss}
            aria-label="Fechar"
            style={{
              position: "absolute",
              top: 14,
              right: 16,
              width: 28,
              height: 28,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.11)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--kl-muted)",
              fontSize: "1rem",
              lineHeight: 1,
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.15)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              e.currentTarget.style.color = "var(--kl-muted)";
            }}
          >
            ×
          </button>

          {/* Logo + nome */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.1rem" }}>
            <div style={{ position: "relative", width: 24, height: 24, flexShrink: 0 }}>
              <Image
                src="/Imagens/3.jpg"
                alt="KLAgency"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--kl-muted)",
            }}>
              KLAgency
            </span>
          </div>

          {/* Headline */}
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "1.35rem",
            color: "#fff",
            lineHeight: 1.22,
            marginBottom: "0.4rem",
          }}>
            Vamos conversar?
          </h3>

          {/* Subtítulo */}
          <p style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.82rem",
            color: "var(--kl-muted)",
            lineHeight: 1.6,
            marginBottom: "1.4rem",
          }}>
            Resposta em menos de 24h.
          </p>

          {/* Botão WhatsApp */}
          <a
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "12px 20px",
              background: "#25D366",
              color: "#fff",
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.88rem",
              letterSpacing: "0.02em",
              textDecoration: "none",
              borderRadius: 12,
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1ebe5a";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#25D366";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar no WhatsApp
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
