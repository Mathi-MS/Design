import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";
import { Link } from "wouter";
import { useState } from "react";
import Image from "../../images/demoimage.jpg";

const services = [
  {
    title: "Web Development",
    description:
      "We build fast, scalable, and secure websites tailored to your business needs. From simple landing pages to complex enterprise solutions, our web development services ensure seamless performance and modern user experiences.",
    bg: Image,
    link: "/services/web-development",
  },
  {
    title: "Mobile Development",
    description:
      "Our team creates high-performing, cross-platform mobile applications with intuitive interfaces. We deliver apps that are reliable, engaging, and optimized for both iOS and Android to keep your users connected on the go.",
    bg: Image,
    link: "/services/mobile-development",
  },
  {
    title: "Graphic Design",
    description:
      "We craft visually stunning designs that communicate your brand’s identity. From logos and brand assets to marketing materials, our creative solutions help your business stand out and make a lasting impression.",
    bg: Image,
    link: "/services/graphic-design",
  },
  {
    title: "Responsive Design",
    description:
      "Our responsive design approach ensures your website looks flawless across all devices. With a focus on usability and accessibility, we create digital experiences that adapt seamlessly to any screen size.",
    bg: Image,
    link: "/services/web-development",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0); // 👈 first one open by default

  const titleRef = useGSAPAnimation(fadeUpAnimation);

  return (
    <section className="py-16 sm:py-20 bg-white" data-testid="services-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            ref={titleRef as any}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 sm:mb-6"
            data-testid="text-services-title" data-aos="fade-up"
          >
            What We Do
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed"
            data-testid="text-services-subtitle" data-aos="fade-up"
          >
            We deliver end-to-end digital solutions, combining strategy,
            creativity, and technology to help businesses grow and innovate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="servicesBox">
          {services.map((service, index) => (
            <div
              key={index}
              className={`servicesBoxes ${
                activeIndex === index ? "active" : ""
              }`}
              style={{ backgroundImage: `url(${service.bg})` }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              <div className="servicesContent">
                <h4>
                  {service.title.split(" ")[0]}{" "}
                  <span>{service.title.split(" ")[1]}</span>
                </h4>
              </div>
              <div className="servicesContentTwo">
                <h3>
                  {service.title.split(" ")[0]}{" "}
                  <span>{service.title.split(" ")[1]}</span>
                </h3>
                <p>{service.description}</p>
                 <Link href={service.link}>
                  <a >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
