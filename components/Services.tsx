"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { AnimateOnScroll } from "./AnimateOnScroll";

const SERVICES = [
  {
    number: "01",
    category: "Posicionamento",
    title: "Definimos onde a sua marca compete — e como ganha.",
    desc: "Território, público e mensagem central. Clareza estratégica antes de qualquer execução.",
  },
  {
    number: "02",
    category: "Estratégia de Marca",
    title: "Construímos o mapa. A sua marca para de reagir e começa a liderar.",
    desc: "Direção clara para decisões melhores. Do propósito à expressão — em todos os pontos de contacto.",
  },
  {
    number: "03",
    category: "Growth",
    title: "Crescimento não é acidente. É arquitectura.",
    desc: "Tracção para marcas em movimento. Estruturas de escala sustentadas por estratégia real.",
  },
  {
    number: "04",
    category: "Consultoria",
    title: "Trabalhamos ao lado de quem decide — com clareza, sem rodeios.",
    desc: "Apoio estratégico para líderes que querem crescer com intenção e dominar o seu sector.",
  },
  {
    number: "05",
    category: "Marketing",
    title: "Comunicação que posiciona, não apenas que aparece.",
    desc: "Campanhas com função e resultado. Cada mensagem serve um propósito estratégico.",
  },
  {
    number: "06",
    category: "Branding",
    title: "A sua marca precisa de ser reconhecida antes de ser explicada.",
    desc: "Sistema visual e verbal coerente. Identidade que comunica autoridade ao primeiro contacto.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function ServiceCard({
  s,
  active,
  index,
  onActivate,
}: {
  s: typeof SERVICES[0];
  active: boolean;
  index: number;
  onActivate: (i: number) => void;
}) {
  return (
    <div
      onClick={() => onActivate(index)}
      style={{
        padding: "2rem 2.2rem",
        background: active ? "rgba(37,99,235,0.12)" : "transparent",
        cursor: "pointer",
        transition: "background 0.2s",
        height: "100%",
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        if (!active)
          (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
      }}
      onMouseLeave={(e) => {
        if (!active)
          (e.currentTarget as HTMLDivElement).style.background = "transparent";
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "0.75rem",
            color: active ? "#60A5FA" : "var(--kl-muted)",
            letterSpacing: "0.1em",
          }}
        >
          {s.number}
        </span>
        <span className="kl-tag" style={{ fontSize: "0.65rem", padding: "3px 10px" }}>
          {s.category}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "1rem",
          color: active ? "#fff" : "var(--kl-silver)",
          lineHeight: 1.4,
          marginBottom: "0.7rem",
        }}
      >
        {s.title}
      </h3>

      <div
        style={{
          fontSize: "0.8rem",
          color: "var(--kl-muted)",
          lineHeight: 1.65,
          maxHeight: active ? "100px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        {s.desc}
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const SectionHeader = (
    <AnimateOnScroll style={{ marginBottom: "4rem" }}>
      <p className="kl-label" style={{ marginBottom: "1rem" }}>Serviços</p>
      <div className="kl-divider" style={{ marginBottom: "1.5rem" }} />
      <h2
        className="kl-heading"
        style={{
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          color: "#fff",
          maxWidth: 520,
        }}
      >
        Soluções estratégicas.{" "}
        <span style={{ color: "#93C5FD", fontStyle: "italic" }}>
          Menos ruído. Mais direcção.
        </span>
      </h2>
    </AnimateOnScroll>
  );

  if (isMobile) {
    return (
      <section
        id="servicos"
        style={{
          background: "var(--kl-navy, #020617)",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          {SectionHeader}
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            style={{ paddingBottom: "2.5rem" }}
          >
            {SERVICES.map((s, i) => (
              <SwiperSlide key={s.number}>
                <div
                  style={{
                    border: "1px solid var(--kl-border)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    minHeight: 180,
                  }}
                >
                  <ServiceCard
                    s={s}
                    active={active === i}
                    index={i}
                    onActivate={setActive}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style>{`
          .swiper-pagination-bullet { background: var(--kl-muted) !important; opacity: 1; }
          .swiper-pagination-bullet-active { background: #2563EB !important; }
        `}</style>
      </section>
    );
  }

  return (
    <section
      id="servicos"
      style={{
        background: "var(--kl-navy, #020617)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {SectionHeader}

        {/* Grid 2×3 com stagger */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1px",
            border: "1px solid var(--kl-border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
          }}
        >
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.number}
              variants={cardVariants}
              style={{
                borderBottom: i < 4 ? "1px solid var(--kl-border)" : "none",
                borderRight: i % 2 === 0 ? "1px solid var(--kl-border)" : "none",
              }}
            >
              <ServiceCard
                s={s}
                active={active === i}
                index={i}
                onActivate={setActive}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Transição suave Serviços → Ticker */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
        background: "linear-gradient(to bottom, transparent, #050B3D)",
        pointerEvents: "none",
      }} />
    </section>
  );
}
