"use client";

import { motion } from "framer-motion";
import type { PillarIconKey } from "@/lib/site-content";

const iconMap: Record<PillarIconKey, string> = {
  bulb: "icon-bulb",
  bag: "icon-bag",
  rocket: "icon-rocket",
  chart: "icon-chart",
};

interface AnimatedIconProps {
  iconKey: PillarIconKey;
  size?: number;
  color?: string;
  className?: string;
  loop?: boolean;
}

export default function AnimatedIcon({
  iconKey,
  size = 48,
  color = "#00059D",
  className = "",
  loop = true,
}: AnimatedIconProps) {
  const spriteId = iconMap[iconKey];

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      animate={loop ? { y: [0, -6, 0] } : undefined}
      transition={
        loop
          ? { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
      whileHover={{ scale: 1.15, y: -4 }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <svg
        width={size}
        height={size}
        style={{ color }}
        aria-hidden="true"
      >
        <use href={`#${spriteId}`} />
      </svg>
    </motion.div>
  );
}
