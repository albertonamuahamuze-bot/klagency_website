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
      className="bg-[#F6F9FC] px-5 pb-20 pt-8 sm:px-6 sm:pb-28 lg:px-8 lg:pb-36"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16">

        {/* Image composition */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75 }}
          className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[460px]"
        >
          <img
            src={VISUAL_ASSETS.aboutPrimary}
            alt="Estrategia e colaboracao"
            className="absolute left-0 top-6 h-[220px] w-[68%] rounded-lg object-cover shadow-[0_20px_60px_rgba(15,37,74,0.14)] sm:h-[300px] sm:top-8 sm:w-[70%] lg:h-[370px]"
          />
          <motion.img
            style={{ y: secondImageY }}
            src={VISUAL_ASSETS.aboutSecondary}
            alt="Consultoria executiva"
            className="absolute bottom-0 right-0 h-[210px] w-[56%] rounded-lg object-cover shadow-[0_24px_70px_rgba(15,37,74,0.16)] sm:h-[280px] sm:w-[58%] lg:h-[360px]"
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, delay: 0.08 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-[#00059D] shadow-sm sm:mb-7 sm:px-5 sm:py-3">
            <Award size={15} />
            Proposta de valor
          </div>
          <h2 className="mb-5 max-w-xl text-2xl font-black leading-[1.1] text-[#101828] sm:mb-7 sm:text-3xl lg:text-5xl">
            Clareza para marcas que querem crescer.
          </h2>
          <p className="mb-7 max-w-xl text-base leading-8 text-[#45556E] sm:mb-8 sm:text-lg sm:leading-9">
            Posicionamento, estrategia e comunicacao para transformar presenca
            em autoridade.
          </p>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {["+100", "+20", "4"].map((value, index) => (
              <div key={value} className="rounded-lg bg-white p-4 text-center shadow-sm sm:p-5">
                <p className="text-xl font-black text-[#00059D] sm:text-2xl">{value}</p>
                <p className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-[#65758B] sm:text-xs sm:tracking-[0.12em]">
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
