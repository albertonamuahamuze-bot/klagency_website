"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const logos = [
  {
    name: "ECU",
    subtitle: "Despachante Aduaneiro",
    accent: "#14D6C7",
    initials: "ECU",
  },
  {
    name: "Confidencial",
    subtitle: "Microcrédito",
    accent: "#60A5FA",
    initials: "CM",
  },
  {
    name: "MozLimo",
    subtitle: "Serviços Premium",
    accent: "#A78BFA",
    initials: "ML",
  },
  {
    name: "GP",
    subtitle: "Grupo Empresarial",
    accent: "#34D399",
    initials: "GP",
  },
];

/**
 * LogoItem — replace the placeholder with <Image src={logo.logoSrc} ... />
 * once you add actual SVG/PNG files to /public/clients/
 */
function LogoItem({ logo }: { logo: (typeof logos)[0] }) {
  return (
    <div
      className="flex items-center gap-3 px-8 py-4 rounded-2xl select-none"
      style={{
        background: "rgba(5,12,58,0.5)",
        border: "1px solid rgba(255,255,255,0.07)",
        minWidth: 180,
      }}
    >
      {/* Placeholder avatar — swap for <Image> when available */}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-black"
        style={{
          background: `${logo.accent}18`,
          border: `1px solid ${logo.accent}28`,
          color: logo.accent,
        }}
      >
        {logo.initials}
      </div>
      <div>
        <p className="text-white font-bold text-sm leading-none">{logo.name}</p>
        <p className="text-white/35 text-[0.65rem] mt-0.5">{logo.subtitle}</p>
      </div>
    </div>
  );
}

export default function LogoMarquee() {
  const [hovered, setHovered] = useState(false);

  /* Duplicate logos for seamless infinite loop */
  const track = [...logos, ...logos, ...logos];

  return (
    <section
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{ background: "#001B8F" }}
    >
      {/* Subtle separators */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(20,214,199,0.15), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(20,214,199,0.15), transparent)",
        }}
      />

      {/* Edge fade masks */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 lg:w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #001B8F, transparent)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 lg:w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, #001B8F, transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white/35 text-xs font-semibold uppercase tracking-[0.25em] mb-8"
        >
          Junte-se às empresas que já confiaram na KL Agency.
        </motion.p>
      </div>

      {/* Marquee track */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="flex gap-4 w-max"
          style={{
            animation: "marquee 24s linear infinite",
            animationPlayState: hovered ? "paused" : "running",
          }}
        >
          {track.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}
