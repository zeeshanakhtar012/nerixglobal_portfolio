import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";


import TechStack from "@/components/TechStack";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />


      <TechStack />
      <ContactSection />
    </>
  );
}
