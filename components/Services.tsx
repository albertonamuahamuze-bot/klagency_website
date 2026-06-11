"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FadeUpScroll, HighlightReveal } from "./AnimateOnScroll";

const SERVICES = [
  {
    number: "01",
    category: "Posicionamento",
    title: "Definimos onde a sua marca compete — e como ganha.",
    desc: "Território, público e mensagem central. Clareza estratégica antes de qualquer execução.",
    image: "/Imagens/1.jpg",
  },
  {
    number: "02",
    category: "Estratégia de Marca",
    title: "Construímos o mapa. A sua marca para de reagir e começa a liderar.",
    desc: "Direção clara para decisões melhores. Do propósito à expressão — em todos os pontos de contacto.",
    image: "/Imagens/7.jpg",
  },
  {
    number: "03",
    category: "Growth",
    title: "Crescimento não é acidente. É arquitectura.",
    desc: "Tracção para marcas em movimento. Estruturas de escala sustentadas por estratégia real.",
    image: "/Imagens/15.webp",
  },
  {
    number: "04",
    category: "Consultoria",
    title: "Trabalhamos ao lado de quem decide — com clareza, sem rodeios.",
    desc: "Apoio estratégico para líderes que querem crescer com intenção e dominar o seu sector.",
    image: "/Imagens/14.jpg",
  },
  {
    number: "05",
    category: "Marketing",
    title: "Comunicação que posiciona, não apenas que aparece.",
    desc: "Campanhas com função e resultado. Cada mensagem serve um propósito estratégico.",
    image: "/Imagens/12.jpg",
  },
  {
    number: "06",
    category: "Branding",
    title: "A sua marca precisa de ser reconhecida antes de ser explicada.",
    desc: "Sistema visual e verbal coerente. Identidade que comunica autoridade ao primeiro contacto.",
    image: "/Imagens/17.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      style={{
        background: "var(--kl-navy, #020617)",
        padding: "75px 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <FadeUpScroll>
            <p className="kl-label" style={{ marginBottom: "1rem" }}>Serviços</p>
          </FadeUpScroll>
          <FadeUpScroll delay={0.08}>
            <div className="kl-divider" style={{ marginBottom: "1.5rem" }} />
          </FadeUpScroll>
          <FadeUpScroll delay={0.16}>
            <h2
              className="kl-heading"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#fff", maxWidth: 520 }}
            >
              Soluções estratégicas.{" "}
              <HighlightReveal>
                <em style={{ color: "#93C5FD", fontStyle: "italic" }}>
                  Menos ruído. Mais direcção.
                </em>
              </HighlightReveal>
            </h2>
          </FadeUpScroll>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640:  { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          style={{ paddingBottom: "3rem" }}
        >
          {SERVICES.map((s) => (
            <SwiperSlide key={s.number}>
              <div
                className="portfolio-card"
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  border: "1px solid var(--kl-border)",
                  cursor: "pointer",
                  height: "100%",
                }}
              >
                {/* Imagem com overlay */}
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <Image
                    src={s.image}
                    alt={s.category}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(2,6,23,0.9) 0%, rgba(2,6,23,0.3) 65%, transparent 100%)",
                  }} />
                  <div style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400, fontSize: "0.7rem",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.12em",
                    position: "absolute", top: 14, left: 16,
                  }}>
                    {s.number}
                  </div>
                  <span
                    className="kl-tag"
                    style={{ position: "absolute", top: 10, right: 14, fontSize: "0.6rem", padding: "3px 10px" }}
                  >
                    {s.category}
                  </span>
                </div>

                {/* Conteúdo */}
                <div style={{
                  padding: "1.4rem 1.6rem",
                  background: "linear-gradient(135deg, rgba(5,12,58,0.85) 0%, rgba(0,5,155,0.30) 100%)",
                }}>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500, fontSize: "0.98rem",
                    color: "#fff", lineHeight: 1.4,
                    marginBottom: "0.7rem",
                  }}>
                    {s.title}
                  </h3>
                  <p style={{
                    fontSize: "0.8rem", color: "var(--kl-muted)",
                    lineHeight: 1.65, marginBottom: "1.1rem",
                  }}>
                    {s.desc}
                  </p>
                  <a
                    href="#contacto"
                    style={{
                      fontSize: "0.72rem", fontWeight: 600,
                      letterSpacing: "0.08em", textTransform: "uppercase",
                      color: "#93C5FD", textDecoration: "none",
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                  >
                    Ver detalhe →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gradiente de transição Serviços → Ticker */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 60,
        background: "linear-gradient(to bottom, transparent, #050B3D)",
        pointerEvents: "none",
      }} />

      <style>{`
        .swiper-pagination-bullet { background: var(--kl-muted) !important; opacity: 1; }
        .swiper-pagination-bullet-active { background: #2563EB !important; }
      `}</style>
    </section>
  );
}
