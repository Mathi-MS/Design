import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";
import { Link } from "wouter";
import { Code, Palette, Smartphone, TrendingUp, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and technologies for optimal performance.",
    href: "/services/web-development"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase brand awareness and drive revenue growth.",
    href: "/services/digital-marketing"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores and e-commerce platforms designed to maximize conversions.",
    href: "/services/ecommerce-solutions"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Creative visual solutions that communicate your brand message effectively and professionally.",
    href: "/services/graphic-design"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    href: "/services/mobile-development"
  }
];

export default function ServicesSection() {
  const titleRef = useGSAPAnimation(fadeUpAnimation);

  return (
    <section className="py-16 md:py-20 bg-white" data-testid="services-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 
            ref={titleRef as any}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
            data-testid="text-services-title"
          >
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg md:text-xl text-text-gray max-w-3xl mx-auto" data-testid="text-services-subtitle">
            From web development to digital marketing, we provide complete solutions for your business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            
            return (
              <div 
                key={service.title}
                className="service-card bg-light-gray hover:bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl border border-gray-100 transition-all group"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 group-hover:bg-orange/20 transition-colors">
                  <ServiceIcon className="w-6 h-6 md:w-8 md:h-8 text-orange" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-dark-gray mb-3 md:mb-4" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-text-gray mb-4 md:mb-6" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <Link 
                  href={service.href} 
                  className="text-orange font-semibold hover:underline text-sm md:text-base"
                  data-testid={`link-service-${index}`}
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
