import type { Metadata } from "next";
import { Inter, Nunito, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["700", "800", "900"],
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KLAGENCY — Estratégia, Posicionamento & Crescimento | Moçambique",
  description:
    "A KLAGENCY ajuda empresas e líderes a superar a estagnação, construir autoridade e crescer com estratégia. Posicionamento, Strategy, Growth e Consulting.",
  keywords: [
    "KLAGENCY",
    "estratégia",
    "posicionamento de marca",
    "consultoria estratégica",
    "marketing",
    "branding",
    "agência Moçambique",
    "crescimento",
    "autoridade de marca",
  ],
  authors: [{ name: "KLAGENCY" }],
  openGraph: {
    title: "KLAGENCY — Conexões que geram sucesso",
    description:
      "Ajudamos empresas e líderes a superar a estagnação, construir autoridade e crescer com estratégia.",
    type: "website",
    url: "https://www.klagency.com",
    siteName: "KLAGENCY",
  },
  twitter: {
    card: "summary_large_image",
    title: "KLAGENCY — Conexões que geram sucesso",
    description:
      "Ajudamos empresas e líderes a superar a estagnação, construir autoridade e crescer com estratégia.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${inter.variable} ${nunito.variable} ${dmSerif.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
