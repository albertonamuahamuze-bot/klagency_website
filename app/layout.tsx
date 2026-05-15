import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "KL Agency — Estratégia, Marketing & Branding | Moçambique",
  description:
    "A KL Agency posiciona marcas e líderes para dominar os seus mercados. Estratégia, branding, marketing e tecnologia para empresas que querem crescer com autoridade.",
  keywords: [
    "KL Agency",
    "estratégia",
    "marketing digital",
    "branding",
    "posicionamento de marca",
    "agência Moçambique",
    "consultoria estratégica",
    "identidade corporativa",
    "Moçambique",
  ],
  authors: [{ name: "KL Agency" }],
  openGraph: {
    title: "KL Agency — Conexões que geram sucesso",
    description: "A KL Agency posiciona marcas e líderes para dominar os seus mercados.",
    type: "website",
    url: "https://www.klagency.com",
    siteName: "KL Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "KL Agency — Conexões que geram sucesso",
    description: "A KL Agency posiciona marcas e líderes para dominar os seus mercados.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${nunito.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
