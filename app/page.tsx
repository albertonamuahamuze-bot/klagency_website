import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import About from "@/components/About";
import Services from "@/components/Services";
import LogoMarquee from "@/components/LogoMarquee";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Pillars />
      <About />
      <Services />
      <LogoMarquee />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
