"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactElement } from "react";
import { siteContent, type PillarIconKey } from "@/lib/site-content";

type IconProps = { delay: number };

const stroke = {
  stroke: "#20243A",
  strokeWidth: 3.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const accent = {
  stroke: "#00059D",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function BulbIcon({ delay }: IconProps) {
  return (
    <motion.svg viewBox="0 0 86 86" className="h-[86px] w-[86px]" fill="none" aria-hidden>
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <path d="M30 38c0-9 6.6-16.5 16-16.5S62 29 62 38c0 7.2-3.9 11.2-8 15.8-2 2.2-2.8 4.5-2.8 7.2H40.8c0-2.7-.8-5-2.8-7.2-4.1-4.6-8-8.6-8-15.8Z" {...stroke} />
        <path d="M39 62h14M40.5 68h11M43 73h6" {...stroke} />
        <path d="M46 50V39" {...accent} />
        <motion.path
          d="M22 30l-5-2M22 39h-6M24 48l-5 3M70 30l5-2M70 39h6M68 48l5 3"
          {...accent}
          animate={{ opacity: [0.25, 1, 0.25] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay }}
        />
      </motion.g>
    </motion.svg>
  );
}

function BagIcon({ delay }: IconProps) {
  return (
    <motion.svg viewBox="0 0 86 86" className="h-[86px] w-[86px]" fill="none" aria-hidden>
      <motion.g
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay }}
      >
        <path d="M31 31h25l7 12c4 7.8-1.3 17.5-10.2 17.5H32.2C23.3 60.5 18 50.8 22 43l9-12Z" {...stroke} />
        <path d="M36 31c-3.8-7.4.2-13 8-13s11.8 5.6 8 13" {...stroke} />
        <path d="M39 18h10M38 24h12" {...stroke} />
        <path d="M45 41v10M41 46h8" {...accent} />
        <path d="M60 39h12M60 47h10M60 55h7" {...stroke} />
        <motion.path
          d="M43 36c1.8.4 3 1.2 4 2.5M38 51c1.7 1.1 3.8 1.5 6 1.2"
          {...accent}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay }}
        />
      </motion.g>
    </motion.svg>
  );
}

function RocketIcon({ delay }: IconProps) {
  return (
    <motion.svg viewBox="0 0 86 86" className="h-[86px] w-[86px]" fill="none" aria-hidden>
      <motion.g
        animate={{ y: [4, -5, 0], rotate: [-2.5, 1.5, -2.5] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut", delay }}
      >
        <path d="M32 54 22 64l2.8-17.5 34-34C66.5 4.8 77 6 77 6s1.2 10.5-6.5 18.2l-34 34L19 61l10-10" {...stroke} />
        <path d="M53 18 65 30" {...stroke} />
        <circle cx="55" cy="30" r="6" {...stroke} />
        <motion.path
          d="M25 64c-4.8 1.8-8.5 5.5-10.3 10.3C19.5 72.5 23.2 68.8 25 64Z"
          fill="#00059D"
          animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.9, 1.16, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay }}
        />
        <path d="M50 45 39 34" {...accent} />
      </motion.g>
    </motion.svg>
  );
}

const icons: Partial<Record<PillarIconKey, (props: IconProps) => ReactElement>> = {
  bulb: BulbIcon,
  bag: BagIcon,
  rocket: RocketIcon,
};

export default function Pillars() {
  return (
    <section className="bg-[#F6F9FC] px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
        {siteContent.pillars.map((item, index) => {
          const Icon = icons[item.icon];
          if (!Icon) return null;

          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="grid grid-cols-[86px_1fr] items-start gap-6"
            >
              {item.iconImage ? (
                <motion.div
                  className="relative h-[86px] w-[86px]"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.28 }}
                >
                  <Image
                    src={item.iconImage}
                    alt=""
                    fill
                    sizes="86px"
                    className="object-contain"
                  />
                </motion.div>
              ) : (
                <Icon delay={index * 0.28} />
              )}
              <div className="pt-3">
                <h3 className="mb-3 text-lg font-black leading-snug text-[#20243A]">{item.title}</h3>
                <p className="max-w-[275px] leading-8 text-[#65758B]">{item.text}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
