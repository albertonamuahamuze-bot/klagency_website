import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Portfolio from "@/components/Portfolio";
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
      <Portfolio />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
