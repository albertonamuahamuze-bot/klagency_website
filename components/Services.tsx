"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export default function Services() {
  const track = [...siteContent.services, ...siteContent.services];

  return (
    <section id="servicos" className="overflow-hidden bg-[#EEF4FB] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          <h2 className="text-2xl font-black leading-[1.08] text-[#101828] sm:text-4xl lg:text-5xl">
            Solucoes estrategicas.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-[#65758B] sm:mt-5 sm:text-lg">
            Menos ruido. Mais direcao para marcas que querem avancar.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex w-max gap-4 sm:gap-7"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 62, repeat: Infinity, ease: "linear" }}
          >
            {track.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="w-[260px] overflow-hidden rounded-lg bg-white shadow-[0_20px_60px_rgba(15,37,74,0.08)] sm:w-[310px] lg:w-[360px]"
              >
                <div className="relative h-44 overflow-hidden sm:h-52 lg:h-56">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00034F]/74 to-transparent" />
                  <span className="absolute right-5 top-5 rounded-full bg-[#00034F]/88 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.12em] text-white">
                    {service.tag}
                  </span>
                </div>
                <div className="p-5 text-center sm:p-7">
                  <h3 className="mb-2 text-base font-black text-[#101828] sm:mb-3 sm:text-xl">{service.title}</h3>
                  <p className="mb-5 text-sm leading-7 text-[#65758B] sm:mb-6 sm:text-base">{service.text}</p>
                  <a href="#contacto" className="inline-flex items-center gap-2 text-sm font-black text-[#00059D]">
                    Saber mais
                    <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
