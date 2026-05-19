"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export default function Services() {
  const track = [...siteContent.services, ...siteContent.services];

  return (
    <section id="servicos" className="overflow-hidden bg-[#EEF4FB] px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-4xl font-black leading-[1.08] text-[#101828] sm:text-5xl">
            Solucoes estrategicas.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#65758B]">
            Menos ruido. Mais direcao para marcas que querem avancar.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex w-max gap-7"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 62, repeat: Infinity, ease: "linear" }}
          >
            {track.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="w-[310px] overflow-hidden rounded-lg bg-white shadow-[0_20px_60px_rgba(15,37,74,0.08)] sm:w-[360px]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00034F]/74 to-transparent" />
                  <span className="absolute right-5 top-5 rounded-full bg-[#00034F]/88 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.12em] text-white">
                    {service.tag}
                  </span>
                </div>
                <div className="p-7 text-center">
                  <h3 className="mb-3 text-xl font-black text-[#101828]">{service.title}</h3>
                  <p className="mb-6 leading-7 text-[#65758B]">{service.text}</p>
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
