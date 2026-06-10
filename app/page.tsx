import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import ClientsTicker from "@/components/ClientsTicker";
import Portfolio from "@/components/Portfolio";
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
      <Services />
      <ClientsTicker />
      <Portfolio />
      <Testimonial />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
