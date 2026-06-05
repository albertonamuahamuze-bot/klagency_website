"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { WHATSAPP_PRIMARY } from "@/lib/constants";

const benefits = [
  "Aumenta a sua taxa de conversão.",
  "Poupa tempo e esforço de posicionamento.",
  "Faz a sua marca destacar-se no mercado.",
];

export default function ConversionPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show after 30 seconds OR when scroll passes 60%
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
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#00034F]/60 backdrop-blur-[2px]"
            onClick={dismiss}
          />

          {/* Modal — estilo Dintell */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 bottom-8 z-50 mx-auto max-w-sm rounded-2xl bg-white p-8 shadow-[0_32px_80px_rgba(0,5,157,0.22)] sm:inset-x-auto sm:right-6 sm:left-auto"
          >
            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[#65758B] transition hover:bg-[#EEF4FB] hover:text-[#101828]"
              aria-label="Fechar"
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <use href="#close-icon" />
              </svg>
            </button>

            {/* Header */}
            <div className="mb-5">
              <p className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-[#00059B]">KLAgency</p>
              <h3 className="text-xl font-black leading-tight text-[#101828]">
                Acelera o crescimento da tua marca.
              </h3>
            </div>

            {/* Benefits list */}
            <ul className="mb-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#EEF4FB]">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l3 3 5-5" stroke="#00059D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm leading-6 text-[#45556E]">{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={WHATSAPP_PRIMARY}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#00059B] px-6 py-3.5 text-sm font-black text-white transition hover:bg-[#00036F]"
            >
              <MessageCircle size={17} />
              Vamos conversar
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
