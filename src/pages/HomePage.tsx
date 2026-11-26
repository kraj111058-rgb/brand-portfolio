import { ContactSection } from "@/components/features/home/ContactSection";
import { EngagementSection } from "@/components/features/home/EngagementSection";
import { HeroSection } from "@/components/features/home/HeroSection";
import { IndustriesSection } from "@/components/features/home/IndustriesSection";
import { PortfolioSection } from "@/components/features/home/PortfolioSection";
import { ServicesSection } from "@/components/features/home/ServicesSection";
import { TechStackSection } from "@/components/features/home/TechStackSection";
import { TestimonialsFaqSection } from "@/components/features/home/TestimonialsFaqSection";
import { WhyChooseUsSection } from "@/components/features/home/WhyChooseUsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <TechStackSection />
      <EngagementSection />
      <TestimonialsFaqSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
