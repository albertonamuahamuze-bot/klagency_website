import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KLAGENCY — Estratégia, Marketing & Branding",
  description:
    "Posicionamos marcas e líderes para dominar os seus mercados. Estratégia, branding, marketing e tecnologia para empresas que querem crescer com autoridade.",
  keywords: [
    "estratégia",
    "marketing digital",
    "branding",
    "posicionamento de marca",
    "agência",
    "KLAGENCY",
    "consultoria",
    "identidade corporativa",
    "Moçambique",
  ],
  authors: [{ name: "KLAGENCY" }],
  openGraph: {
    title: "KLAGENCY — Conexões que geram sucesso",
    description: "Posicionamos marcas e líderes para dominar os seus mercados.",
    type: "website",
    url: "https://www.klagency.com",
    siteName: "KLAGENCY",
  },
  twitter: {
    card: "summary_large_image",
    title: "KLAGENCY — Conexões que geram sucesso",
    description: "Posicionamos marcas e líderes para dominar os seus mercados.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
