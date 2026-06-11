import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Manifesto from "@/components/Manifesto";
import Process from "@/components/Process";
import Services from "@/components/Services";
import CTABand from "@/components/CTABand";
import ClientsTicker from "@/components/ClientsTicker";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Manifesto />
      <Process />
      <Services />
      <CTABand />
      <ClientsTicker />
      <Portfolio />
      <Team />
      <Testimonial />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
