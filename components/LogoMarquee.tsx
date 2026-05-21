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
      setActive((v) => (v + 1) % siteContent.testimonials.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  const prev = () =>
    setActive((v) => (v - 1 + siteContent.testimonials.length) % siteContent.testimonials.length);
  const next = () =>
    setActive((v) => (v + 1) % siteContent.testimonials.length);

  return (
    <section className="overflow-hidden bg-[#F6F9FC] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <h2 className="text-2xl font-black leading-[1.1] text-[#20243A] sm:text-4xl lg:text-5xl">
            Aprovado por organizacoes de excelencia e grande renome.
          </h2>
        </motion.div>

        {/* Testimonial */}
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute inset-x-0 top-0 h-48 opacity-[0.06] [background-image:radial-gradient(#20243A_1px,transparent_1px)] [background-size:10px_10px] sm:h-72" />

          {/* Desktop nav arrows */}
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
              className="relative z-10 flex flex-col items-center gap-8 text-center sm:gap-10 lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:text-left"
            >
              {/* Portrait */}
              <div className="relative mx-auto h-40 w-40 shrink-0 rounded-full bg-[#E8EEF7] sm:h-52 sm:w-52 lg:h-64 lg:w-64">
                <img
                  src={current.portrait}
                  alt={current.name}
                  className="h-full w-full rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -left-3 grid h-14 w-14 place-items-center rounded-full bg-[#00059D] text-white shadow-xl sm:-left-5 sm:h-20 sm:w-20">
                  <Quote size={24} fill="white" className="sm:size-[38px]" />
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="mb-4 inline-flex items-center gap-3 sm:mb-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-xs font-black text-[#00059D] shadow sm:h-12 sm:w-12 sm:text-sm">
                    {current.logo}
                  </span>
                  <span className="text-xl font-black text-[#00059D] sm:text-2xl">{current.name}</span>
                </div>
                <p className="max-w-lg text-base leading-8 text-[#20243A] sm:text-xl sm:leading-9">
                  {current.quote}
                </p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.12em] text-[#20243A] sm:mt-5 sm:text-sm">
                  {current.person}
                </p>

                {/* Mobile nav dots */}
                <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
                  <button onClick={prev} aria-label="Anterior" className="text-[#20243A]/50 hover:text-[#20243A]">
                    <ArrowLeft size={20} />
                  </button>
                  <div className="flex gap-2">
                    {siteContent.testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        aria-label={`Testemunho ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-[#00059D]" : "w-1.5 bg-[#00059D]/25"}`}
                      />
                    ))}
                  </div>
                  <button onClick={next} aria-label="Próximo" className="text-[#20243A]/50 hover:text-[#20243A]">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Partner marquee label */}
        <p className="mx-auto mb-8 mt-14 w-fit border-b border-[#DDE8F7] pb-3 text-center text-[0.65rem] font-black uppercase tracking-[0.18em] text-[#20243A] sm:mb-10 sm:text-xs">
          Junte-se as marcas que ja trabalharam connosco.
        </p>

        {/* Partner marquee */}
        <motion.div
          className="flex w-max gap-4 sm:gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
        >
          {track.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex min-w-[200px] items-center gap-4 rounded-lg bg-white p-4 shadow-[0_18px_50px_rgba(15,37,74,0.06)] sm:min-w-[260px] sm:gap-5 sm:p-5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#00059D] text-base font-black text-white sm:h-16 sm:w-16 sm:text-lg">
                {partner.logo}
              </div>
              <div>
                <p className="text-base font-black text-[#20243A] sm:text-lg">{partner.name}</p>
                <p className="mt-0.5 text-xs text-[#65758B] sm:mt-1 sm:text-sm">{partner.slogan}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
