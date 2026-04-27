import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import PortfolioSection from "@/components/PortfolioSection";
import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-50 selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <PortfolioSection />
      <TechStack />
      <ContactSection />
      <Footer />
    </main>
  );
}
