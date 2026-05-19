"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Award } from "lucide-react";
import { useRef } from "react";
import { VISUAL_ASSETS } from "@/lib/constants";

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const rawSecondImageY = useTransform(scrollYProgress, [0, 0.65], [46, 0]);
  const secondImageY = useSpring(rawSecondImageY, { stiffness: 70, damping: 24, mass: 0.6 });

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="bg-[#F6F9FC] px-6 pb-28 pt-8 lg:px-8 lg:pb-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
          className="relative min-h-[460px]"
        >
          <img
            src={VISUAL_ASSETS.aboutPrimary}
            alt="Estrategia e colaboracao"
            className="absolute left-0 top-8 h-[370px] w-[70%] rounded-lg object-cover shadow-[0_32px_90px_rgba(15,37,74,0.16)]"
          />
          <motion.img
            style={{ y: secondImageY }}
            src={VISUAL_ASSETS.aboutSecondary}
            alt="Consultoria executiva"
            className="absolute bottom-0 right-0 h-[360px] w-[58%] rounded-lg object-cover shadow-[0_32px_90px_rgba(15,37,74,0.18)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.08 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#00059D] shadow-sm">
            <Award size={16} />
            Proposta de valor
          </div>
          <h2 className="mb-7 max-w-xl text-4xl font-black leading-[1.08] text-[#101828] sm:text-5xl">
            Clareza para marcas que querem crescer.
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-9 text-[#45556E]">
            Posicionamento, estrategia e comunicacao para transformar presenca
            em autoridade.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {["+100", "+20", "4"].map((value, index) => (
              <div key={value} className="rounded-lg bg-white p-5 text-center shadow-sm">
                <p className="text-2xl font-black text-[#00059D]">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#65758B]">
                  {index === 0 ? "Projetos" : index === 1 ? "Marcas" : "Pilares"}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
