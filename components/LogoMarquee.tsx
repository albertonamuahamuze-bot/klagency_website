"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";
import { siteContent } from "@/lib/site-content";

export default function LogoMarquee() {
  const [active, setActive] = useState(0);
  const current = siteContent.testimonials[active];
  const track = [...siteContent.partners, ...siteContent.partners];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % siteContent.testimonials.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  const prev = () =>
    setActive((value) => (value - 1 + siteContent.testimonials.length) % siteContent.testimonials.length);
  const next = () => setActive((value) => (value + 1) % siteContent.testimonials.length);

  return (
    <section className="overflow-hidden bg-[#F6F9FC] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-black leading-[1.05] text-[#20243A] sm:text-5xl">
            Aprovado por organizacoes de excelencia e grande renome.
          </h2>
        </motion.div>

        <div className="relative mx-auto min-h-[360px] max-w-5xl">
          <div className="absolute inset-x-0 top-0 h-72 opacity-[0.08] [background-image:radial-gradient(#20243A_1px,transparent_1px)] [background-size:10px_10px]" />

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 text-[#20243A] lg:block"
            aria-label="Anterior"
          >
            <ArrowLeft size={26} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 z-20 hidden -translate-y-1/2 text-[#20243A] lg:block"
            aria-label="Proximo"
          >
            <ArrowRight size={26} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -45 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="relative mx-auto h-64 w-64 rounded-full bg-[#E8EEF7]">
                <img
                  src={current.portrait}
                  alt={current.name}
                  className="h-full w-full rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -left-5 grid h-20 w-20 place-items-center rounded-full bg-[#00059D] text-white shadow-xl">
                  <Quote size={38} fill="white" />
                </div>
              </div>

              <div>
                <div className="mb-5 inline-flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-sm font-black text-[#00059D] shadow">
                    {current.logo}
                  </span>
                  <span className="text-2xl font-black text-[#00059D]">{current.name}</span>
                </div>
                <p className="max-w-lg text-xl leading-9 text-[#20243A]">{current.quote}</p>
                <p className="mt-5 text-sm font-black uppercase tracking-[0.12em] text-[#20243A]">
                  {current.person}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mx-auto mb-10 mt-16 w-fit border-b border-[#DDE8F7] pb-3 text-center text-xs font-black uppercase tracking-[0.18em] text-[#20243A]">
          Junte-se as marcas que ja trabalharam connosco.
        </p>

        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
        >
          {track.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex min-w-[260px] items-center gap-5 rounded-lg bg-white p-5 shadow-[0_18px_50px_rgba(15,37,74,0.06)]">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-[#00059D] text-lg font-black text-white">
                {partner.logo}
              </div>
              <div>
                <p className="text-lg font-black text-[#20243A]">{partner.name}</p>
                <p className="mt-1 text-sm text-[#65758B]">{partner.slogan}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
