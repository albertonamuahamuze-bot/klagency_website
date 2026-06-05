"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo: string;
  logo: string;
}[] = [
  // Aguarda depoimentos reais aprovados pelo responsável da KLAgency.
  // Não inventar dados. Adicionar aqui quando disponíveis.
];

export default function Testimonial() {
  // Retorna null enquanto não houver depoimentos reais
  if (testimonials.every((t) => !t.quote)) return null;

  return (
    <section
      style={{
        background: "var(--kl-navy-soft, #050B3D)",
        padding: "6rem 2rem",
        borderTop: "1px solid var(--kl-border)",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        {/* Label + Headline */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="kl-label" style={{ marginBottom: "1rem" }}>Depoimentos</p>
          <h2
            className="kl-heading"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              color: "#fff",
              maxWidth: 580,
              margin: "0 auto",
            }}
          >
            Aprovado por organizações de excelência e grande renome.
          </h2>
        </div>

        {/* Swiper */}
        <div style={{ position: "relative", padding: "0 3rem" }}>
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".kl-swiper-next",
              prevEl: ".kl-swiper-prev",
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "4rem",
                    alignItems: "center",
                    maxWidth: 860,
                    margin: "0 auto",
                    padding: "0 1rem",
                  }}
                  className="testimonial-grid"
                >
                  {/* Foto circular */}
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={t.photo}
                      alt={t.name}
                      style={{
                        width: 180,
                        height: 180,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "3px solid rgba(37,99,235,0.4)",
                      }}
                    />
                  </div>

                  {/* Conteúdo */}
                  <div>
                    {t.logo && (
                      <img
                        src={t.logo}
                        alt={t.company}
                        style={{ height: 40, marginBottom: "1.2rem", opacity: 0.85 }}
                      />
                    )}
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontSize: "1.05rem",
                        color: "var(--kl-silver)",
                        lineHeight: 1.75,
                        marginBottom: "1.2rem",
                      }}
                    >
                      "{t.quote}"
                    </p>
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "0.78rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#93C5FD",
                      }}
                    >
                      {t.name} · {t.role}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Setas de navegação */}
          <button
            className="kl-swiper-prev"
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid var(--kl-border)",
              borderRadius: 8,
              width: 44,
              height: 44,
              cursor: "pointer",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
            }}
          >
            ←
          </button>
          <button
            className="kl-swiper-next"
            style={{
              position: "absolute",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              background: "rgba(255,255,255,0.08)",
              border: "1px solid var(--kl-border)",
              borderRadius: 8,
              width: 44,
              height: 44,
              cursor: "pointer",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
            }}
          >
            →
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
