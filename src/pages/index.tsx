import AboutMeSection from "../components/sections/AboutMeSection";
import FaqSection from "../components/sections/FaqSection";
import HardSkillsSection from "../components/sections/HardSkillsSection";
import HeroSection from "../components/sections/HeroSection";
import HowWeGonnaWorkSection from "../components/sections/HowWeGonnaWorkSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ServicesSection from "../components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <HardSkillsSection />
      <PortfolioSection />
      <HowWeGonnaWorkSection />
      <FaqSection />
    </main>
  );
}
