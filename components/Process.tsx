"use client";

import { FadeUpScroll, StaggerScroll, StaggerScrollItem } from "./AnimateOnScroll";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico e Clareza",
    desc: "Compreendemos a marca, o mercado e o território onde pode vencer. Sem clareza, não há estratégia.",
  },
  {
    number: "02",
    title: "Estratégia e Posicionamento",
    desc: "Definimos o caminho — mensagem central, percepção desejada e plano de domínio do mercado.",
  },
  {
    number: "03",
    title: "Execução e Refinamento",
    desc: "Implementamos com precisão e refinamos com base em resultados reais. Sem achismos.",
  },
];

export default function Process() {
  return (
    <section
      style={{
        background: "var(--kl-navy)",
        paddingTop: 75,
        paddingBottom: 75,
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 2rem" }}>

        {/* Header */}
        <FadeUpScroll style={{ textAlign: "center", marginBottom: "4rem" }}>
          <div className="kl-label" style={{ marginBottom: "1rem" }}>
            Como construímos coisas extraordinárias
          </div>
          <h2 className="kl-heading" style={{ color: "#fff", maxWidth: 640, margin: "0 auto" }}>
            O processo vencedor por trás das nossas{" "}
            <em style={{ color: "#93C5FD", fontStyle: "italic" }}>soluções.</em>
          </h2>
        </FadeUpScroll>

        {/* 3 passos */}
        <StaggerScroll style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}>
          {STEPS.map((step) => (
            <StaggerScrollItem key={step.number}>
              <div style={{ padding: "1rem 0" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "3.5rem",
                  lineHeight: 1,
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(147,197,253,0.5)",
                  marginBottom: "1.2rem",
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  color: "#fff",
                  marginBottom: "0.7rem",
                  letterSpacing: "-0.01em",
                }}>
                  {step.title}
                </h3>
                <p className="kl-body" style={{ fontSize: "0.92rem" }}>
                  {step.desc}
                </p>
              </div>
            </StaggerScrollItem>
          ))}
        </StaggerScroll>

        {/* Destaque experiência */}
        <FadeUpScroll delay={0.3} style={{
          textAlign: "center",
          marginTop: "4rem",
          paddingTop: "3rem",
          borderTop: "1px solid var(--kl-border)",
        }}>
          <span style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            color: "#fff",
            letterSpacing: "-0.02em",
          }}>
            5+ anos a posicionar{" "}
            <em style={{ color: "#93C5FD", fontStyle: "italic" }}>
              marcas que lideram.
            </em>
          </span>
        </FadeUpScroll>

      </div>
    </section>
  );
}
