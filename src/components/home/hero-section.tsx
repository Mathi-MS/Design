import { useGSAPAnimation } from "@/hooks/use-gsap";
import { heroAnimations } from "@/lib/gsap-utils";
import { Link } from "wouter";

export default function HeroSection() {
  const titleRef = useGSAPAnimation(heroAnimations.title);
  const subtitleRef = useGSAPAnimation(heroAnimations.subtitle);
  const buttonsRef = useGSAPAnimation(heroAnimations.buttons);

  return (
    <section className="gradient-bg text-white py-16 md:py-20 lg:py-32 relative overflow-hidden" data-testid="hero-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef as any}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
            data-testid="text-hero-title"
          >
            Your Trusted IT Solution Partner
          </h1>
          <p 
            ref={subtitleRef as any}
            className="text-lg sm:text-xl lg:text-2xl mb-8 md:mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            We deliver comprehensive digital solutions including web development, digital marketing, e-commerce, and mobile apps tailored for your business growth and success.
          </p>
          <div 
            ref={buttonsRef as any}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="bg-orange hover:bg-orange/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 w-full sm:w-auto text-center"
              data-testid="button-get-started"
            >
              Get Started
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-navy px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all w-full sm:w-auto text-center"
              data-testid="button-view-work"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 md:top-20 left-4 md:left-10 w-32 h-32 md:w-64 md:h-64 bg-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-24 h-24 md:w-48 md:h-48 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
