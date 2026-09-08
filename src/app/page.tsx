import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import About from "@/components/About";
import TrustStrip from "@/components/TrustStrip";
import Projects from "@/components/Projects";
import WhyLatitude from "@/components/WhyLatitude";
import Investment from "@/components/Investment";
import SiteVisit from "@/components/SiteVisit";
import CustomerExperience from "@/components/CustomerExperience";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCta from "@/components/StickyMobileCta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PropertySearch />
      <About />
      <TrustStrip />
      <Projects />
      <WhyLatitude />
      <Investment />
      <SiteVisit />
      <CustomerExperience />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <StickyMobileCta />
    </main>
  );
}
