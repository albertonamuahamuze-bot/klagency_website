"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WHATSAPP_PRIMARY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: "linear-gradient(180deg, rgba(0,87,255,0.88) 0%, rgba(0,27,143,0.82) 100%)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              boxShadow: "0 8px 40px rgba(0,102,255,0.22)",
            }
          : {
              background: "linear-gradient(180deg, rgba(0,27,143,0.3) 0%, transparent 100%)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
            }
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 lg:py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #0057FF, #14D6C7)",
              boxShadow: "0 4px 16px rgba(20,214,199,0.3)",
            }}
          >
            <span className="text-white font-black text-base leading-none">K</span>
          </div>
          <span
            className="text-white font-bold text-lg tracking-tight"
            style={{ fontFamily: "var(--font-nunito, var(--font-inter), system-ui)" }}
          >
            KL Agency
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/75 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#14D6C7] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#001B8F] font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-px hover:brightness-110"
            style={{
              background: "#14D6C7",
              boxShadow: "0 4px 20px rgba(20,214,199,0.4)",
            }}
          >
            Falar Connosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white p-1 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-6 py-5 flex flex-col gap-4"
            style={{
              background: "rgba(0, 27, 143, 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/75 hover:text-white text-sm font-medium py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#001B8F] font-bold text-sm px-5 py-3 rounded-full text-center mt-1"
              style={{ background: "#14D6C7" }}
            >
              Falar Connosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
