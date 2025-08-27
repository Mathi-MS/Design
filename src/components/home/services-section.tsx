import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";
import { Link } from "wouter";
import { Code, Palette, Smartphone } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "High-performing, scalable, and secure websites built with modern technologies to help your business stand out online.",
    href: "/services/web-development",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creative and impactful visual designs that strengthen your brand identity and engage your audience.",
    href: "/services/graphic-design",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Intuitive and feature-rich mobile applications for iOS and Android, designed to deliver exceptional user experiences.",
    href: "/services/mobile-development",
  },
];

export default function ServicesSection() {
  const titleRef = useGSAPAnimation(fadeUpAnimation);

  return (
    <section
      className="py-16 sm:py-20 bg-white"
      data-testid="services-section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            ref={titleRef as any}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 sm:mb-6"
            data-testid="text-services-title"
          >
            Our Core Services
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed"
            data-testid="text-services-subtitle"
          >
            We deliver end-to-end digital solutions, combining strategy,
            creativity, and technology to help businesses grow and innovate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;

            return (
              <div
                key={service.title}
                className="service-card bg-light-gray hover:bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-gray-100 transition-all group"
                data-testid={`card-service-${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-orange/20 transition-colors">
                  <ServiceIcon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange" />
                </div>

                {/* Title */}
                <h3
                  className="text-lg sm:text-xl font-bold text-dark-gray mb-2 sm:mb-3"
                  data-testid={`text-service-title-${index}`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm sm:text-base text-text-gray mb-4 sm:mb-6 leading-relaxed"
                  data-testid={`text-service-description-${index}`}
                >
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={service.href}
                  className="text-orange font-semibold hover:underline text-sm sm:text-base"
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
