"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_PRIMARY } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 36);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        className="transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(246,249,252,0.86)"
            : "linear-gradient(180deg,rgba(2,18,58,0.62),rgba(2,18,58,0.04))",
          backdropFilter: scrolled ? "blur(18px)" : "blur(8px)",
          borderBottom: scrolled ? "1px solid rgba(15,37,74,0.08)" : "1px solid transparent",
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span
              className="grid h-10 w-10 place-items-center rounded-full font-black"
              style={{
                backgroundColor: scrolled ? "#00059D" : "#FFFFFF",
                color: scrolled ? "#FFFFFF" : "#00059D",
              }}
            >
              K
            </span>
            <span
              className="text-lg font-black tracking-tight"
              style={{ color: scrolled ? "#101828" : "#FFFFFF" }}
            >
              KLAGENCY
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition hover:opacity-70"
                style={{ color: scrolled ? "#101828" : "rgba(255,255,255,0.9)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border px-7 py-3 text-sm font-bold transition hover:-translate-y-0.5 md:inline-flex"
            style={{
              color: scrolled ? "#101828" : "#FFFFFF",
              borderColor: scrolled ? "rgba(16,24,40,0.12)" : "rgba(255,255,255,0.28)",
              backgroundColor: scrolled ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.08)",
            }}
          >
            Iniciar projeto
            <ArrowRight size={15} />
          </a>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Menu"
            style={{ color: scrolled ? "#101828" : "#FFFFFF" }}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-3 mt-2 rounded-3xl border border-[#DDE8F7] bg-[#F6F9FC] p-5 shadow-2xl sm:mx-4 sm:p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-bold text-[#101828]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
