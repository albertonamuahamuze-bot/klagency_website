"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { WHATSAPP_PRIMARY, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
      style={scrolled ? { borderBottom: "1px solid #E2E8F0" } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20"
            style={{ background: "linear-gradient(135deg, #00059B, #2563EB)" }}
          >
            <span className="text-white font-black text-base">K</span>
          </div>
          <span
            className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-[#0F172A]" : "text-white"
            }`}
          >
            KLAGENCY
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                scrolled ? "text-[#64748B] hover:text-[#0F172A]" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#2563EB] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href={WHATSAPP_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-px"
          >
            Falar no WhatsApp
          </a>
        </div>

        <button
          className={`md:hidden p-1 transition-colors ${scrolled ? "text-[#0F172A]" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white px-6 py-5 flex flex-col gap-4"
            style={{ borderBottom: "1px solid #E2E8F0" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#64748B] hover:text-[#0F172A] text-sm font-medium py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2563EB] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center mt-1"
            >
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
