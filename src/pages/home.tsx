import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";
// import PortfolioSection from "@/components/home/portfolio-section";
// import PricingSection from "@/components/home/pricing-section";
import TestimonialsSection from "@/components/home/testimonials-section";
import ContactSection from "@/components/home/contact-section";
import BlogHome from "./BlogHome";
import FAQ from "./faq";

export default function Home() {
  useEffect(() => {
    document.title = "DesignDynasty - Your Trusted IT Solution Partner";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional IT solutions including web development, graphic design, and mobile app development. Get started with DesignDynasty today."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="page-home">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        {/* <PortfolioSection /> */}
        {/* <PricingSection /> */}
        <TestimonialsSection />
        {/* <BlogHome /> */}
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
