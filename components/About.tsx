"use client";

import Image from "next/image";
import { FadeUpScroll, StaggerScroll, StaggerScrollItem } from "./AnimateOnScroll";

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        background: "var(--kl-navy-soft)",
        padding: "6rem 2rem",
      }}
    >
      <div style={{
        maxWidth: 1120, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "5rem", alignItems: "center",
      }}>

        {/* Imagem da equipa */}
        <FadeUpScroll>
          <div style={{
            position: "relative", height: 480,
            borderRadius: 16, overflow: "hidden",
            border: "1px solid var(--kl-border)",
          }}>
            <Image
              src="/Imagens/17.jpg"
              alt="Equipa KLAgency"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(2,6,23,0.6) 0%, transparent 60%)",
            }} />
            <div style={{
              position: "absolute", bottom: 20, left: 20,
              background: "rgba(2,6,23,0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--kl-border)",
              borderRadius: 10, padding: "0.8rem 1.2rem",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600, fontSize: "1.1rem", color: "#fff",
              }}>KLAgency</div>
              <div style={{
                fontSize: "0.72rem", color: "var(--kl-muted)",
                letterSpacing: "0.06em",
              }}>Maputo, Moçambique</div>
            </div>
          </div>
        </FadeUpScroll>

        {/* Texto */}
        <div>
          <FadeUpScroll>
            <div className="kl-label" style={{ marginBottom: "1rem" }}>Sobre</div>
          </FadeUpScroll>
          <FadeUpScroll delay={0.1}>
            <div className="kl-divider" style={{ marginBottom: "1.5rem" }} />
          </FadeUpScroll>
          <FadeUpScroll delay={0.2}>
            <h2
              className="kl-heading"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#fff", marginBottom: "1.5rem" }}
            >
              Nascemos em África.{" "}
              <em style={{ color: "#93C5FD", fontStyle: "italic" }}>
                Pensamos para o mundo.
              </em>
            </h2>
          </FadeUpScroll>
          <FadeUpScroll delay={0.3}>
            <p className="kl-body" style={{ marginBottom: "1.2rem" }}>
              A KLAgency é uma consultora estratégica de posicionamento, branding
              e crescimento de marcas. Nascemos em Moçambique com a visão de
              construir marcas africanas de referência global.
            </p>
          </FadeUpScroll>
          <FadeUpScroll delay={0.4}>
            <p className="kl-body" style={{ marginBottom: "2rem" }}>
              Trabalhamos com líderes e organizações que querem mais do que
              presença — querem autoridade, posicionamento e domínio real
              dos seus mercados.
            </p>
          </FadeUpScroll>

          {/* Stats */}
          <StaggerScroll style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            {[
              { num: "+100", label: "Projectos entregues" },
              { num: "+20",  label: "Marcas posicionadas" },
              { num: "5+",   label: "Anos de experiência" },
              { num: "100%", label: "Compromisso" },
            ].map(({ num, label }) => (
              <StaggerScrollItem key={label}>
                <div className="kl-glass" style={{ padding: "1.2rem" }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "1.8rem", color: "#fff", lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}>{num}</div>
                  <div style={{
                    fontSize: "0.72rem", color: "var(--kl-muted)",
                    letterSpacing: "0.05em",
                  }}>{label}</div>
                </div>
              </StaggerScrollItem>
            ))}
          </StaggerScroll>
        </div>

      </div>
    </section>
  );
}
