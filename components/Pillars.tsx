"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/lib/site-content";
import AnimatedIcon from "@/components/icons/AnimatedIcon";

export default function Pillars() {
  return (
    <section className="bg-white px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mb-16 flex items-center gap-4 lg:mb-20"
        >
          <div className="h-px w-10 bg-[#00059D]" />
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#00059D]">
            O que nos define
          </span>
        </motion.div>

        {/* Editorial numbered list */}
        <div className="divide-y divide-[#EEF4FB]">
          {siteContent.pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex cursor-default flex-col gap-3 py-8 transition-all duration-300 sm:gap-4 sm:py-10 lg:grid lg:grid-cols-[96px_64px_1fr_auto] lg:items-center lg:gap-12 lg:py-12"
            >
              {/* Number */}
              <span className="font-black text-[2.2rem] leading-none text-[#EEF4FB] transition-all duration-500 group-hover:text-[#00059D] sm:text-[3rem] lg:text-[4rem]">
                0{index + 1}
              </span>

              {/* Animated icon — estilo Dintell */}
              <div className="hidden lg:flex lg:items-center lg:justify-center">
                <AnimatedIcon
                  iconKey={item.icon}
                  size={44}
                  color="#00059D"
                  loop
                />
              </div>

              {/* Title */}
              <h3
                className="text-xl font-black leading-tight tracking-tight text-[#101828] transition-colors duration-300 group-hover:text-[#00059D] sm:text-2xl lg:text-3xl xl:text-[2rem]"
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="max-w-sm text-sm leading-7 text-[#65758B] lg:text-base lg:leading-8">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-0 h-px origin-left bg-[#EEF4FB]"
        />

      </div>
    </section>
  );
}
