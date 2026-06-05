"use client";

const CLIENTS = [
  "IP-MLNG",
  "Bispo Kobbe",
  "Nelson Santana",
  "Serena Luz",
  "ECU",
  "Prosolar",
];

const items = [...CLIENTS, ...CLIENTS];

export default function ClientsTicker() {
  return (
    <section
      className="kl-ticker-wrapper"
      style={{
        background: "var(--kl-navy-soft, #050B3D)",
        padding: "2.5rem 0",
        borderTop: "1px solid var(--kl-border)",
        borderBottom: "1px solid var(--kl-border)",
        overflow: "hidden",
      }}
    >
      {/* Label */}
      <p
        style={{
          textAlign: "center",
          fontFamily: "var(--font-body)",
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--kl-muted)",
          marginBottom: "1.5rem",
        }}
      >
        Aprovado por organizações de excelência e grande renome
      </p>

      <div className="kl-ticker-track">
        {items.map((client, i) => (
          <span
            key={`${client}-${i}`}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "1.05rem",
              color: "var(--kl-muted)",
              letterSpacing: "0.08em",
              whiteSpace: "nowrap",
              transition: "color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLSpanElement).style.color = "#fff")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLSpanElement).style.color =
                "var(--kl-muted)")
            }
          >
            {client}
          </span>
        ))}
      </div>
    </section>
  );
}
