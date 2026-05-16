import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import CinematicSection from "@/components/CinematicSection";
import Portfolio from "@/components/Portfolio";
import LogoMarquee from "@/components/LogoMarquee";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#020617]">
      <Header />
      <Hero />
      <Manifesto />
      <Services />
      <Differentials />
      <CinematicSection />
      <Portfolio />
      <LogoMarquee />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
