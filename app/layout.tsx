import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import IconSprite from "@/components/icons/IconSprite";
import ConversionPopup from "@/components/ConversionPopup";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KLAgency — Estratégia, Posicionamento & Crescimento | Moçambique",
  description:
    "A KLAgency ajuda marcas e líderes a construir autoridade e crescer com estratégia. Posicionamento, Branding e Consultoria em Moçambique.",
  keywords: [
    "KLAgency",
    "estratégia",
    "posicionamento de marca",
    "consultoria estratégica",
    "marketing",
    "branding",
    "agência Moçambique",
    "crescimento",
    "autoridade de marca",
  ],
  authors: [{ name: "KLAgency" }],
  openGraph: {
    title: "KLAgency — Conexões que geram sucesso",
    description:
      "Ajudamos marcas e líderes a construir autoridade e crescer com estratégia.",
    type: "website",
    url: "https://www.klagency.com",
    siteName: "KLAgency",
  },
  twitter: {
    card: "summary_large_image",
    title: "KLAgency — Conexões que geram sucesso",
    description:
      "Ajudamos marcas e líderes a construir autoridade e crescer com estratégia.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className={`${playfair.variable} ${dmSans.variable}`}
    >
      <body className="antialiased">
        <IconSprite />
        {children}
        <ConversionPopup />
      </body>
    </html>
  );
}
