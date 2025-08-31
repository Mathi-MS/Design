import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { Palette, Image, Layout, Printer } from "lucide-react";

const designServices = [
  {
    icon: Layout,
    title: "Brand Identity",
    description:
      "Complete brand packages including logos, colors, and style guides",
  },
  {
    icon: Image,
    title: "Digital Graphics",
    description: "Web graphics, social media assets, and digital illustrations",
  },
  {
    icon: Printer,
    title: "Print Design",
    description: "Business cards, brochures, flyers, and marketing materials",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User interface and experience design for web and mobile apps",
  },
];

const tools = [
  "Adobe Creative Suite",
  "Figma",
  "Sketch",
  "Illustrator",
  "Photoshop",
  "InDesign",
];

const portfolio = [
  {
    title: "Tech Startup Branding",
    description: "Complete brand identity for innovative AI company",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
  {
    title: "E-commerce Website Design",
    description: "Modern, conversion-focused design for online retailer",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
  },
];

export default function GraphicDesign() {
  useEffect(() => {
    document.title = "Graphic Design Services - DesignDynasty";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional graphic design services including brand identity, web design, print materials, and UI/UX design. Creative solutions that communicate your brand message."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="page-graphic-design">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="gradient-bg text-white py-20"
          data-testid="graphic-design-hero"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Palette className="w-16 h-16 text-orange mx-auto mb-6" />
              <h1
                className="text-4xl lg:text-6xl font-bold mb-6"
                data-testid="text-graphic-design-title"
              >
                Graphic Design
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-300 mb-8"
                data-testid="text-graphic-design-subtitle"
              >
                Creative visual solutions that communicate your brand message
                effectively and professionally
              </p>
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                data-testid="button-get-design-quote"
              >
                Get a Design Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-20 bg-light-gray"
          data-testid="graphic-design-services"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-design-services-title"
              >
                Design Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designServices.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="text-center bg-white rounded-xl p-8 shadow-lg"
                    data-testid={`design-service-${index}`}
                  >
                    <ServiceIcon className="w-12 h-12 text-orange mx-auto mb-4" />
                    <h3
                      className="text-xl font-bold text-dark-gray mb-4"
                      data-testid={`design-service-title-${index}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-text-gray"
                      data-testid={`design-service-description-${index}`}
                    >
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        {/* <section className="py-20 bg-white" data-testid="graphic-design-tools">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-tools-title"
              >
                Design Tools We Master
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="text-center bg-light-gray rounded-lg p-4"
                  data-testid={`tool-${index}`}
                >
                  <p
                    className="font-semibold text-dark-gray"
                    data-testid={`tool-name-${index}`}
                  >
                    {tool}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Portfolio Section */}
        {/* <section
          className="py-20 bg-light-gray"
          data-testid="graphic-design-portfolio"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-portfolio-title"
              >
                Recent Design Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {portfolio.map((item, index) => (
                <div
                  key={item.title}
                  className="bg-white rounded-xl overflow-hidden shadow-lg"
                  data-testid={`portfolio-item-${index}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                    data-testid={`portfolio-image-${index}`}
                  />
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-dark-gray mb-3"
                      data-testid={`portfolio-title-${index}`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-text-gray mb-4"
                      data-testid={`portfolio-description-${index}`}
                    >
                      {item.description}
                    </p>
                    <span
                      className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-medium"
                      data-testid={`portfolio-category-${index}`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Process Section */}
        <section
          className="py-20 bg-white"
          data-testid="graphic-design-process"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-process-title"
              >
                Our Design Process
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center" data-testid="process-step-1">
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">
                  Discovery
                </h3>
                <p className="text-text-gray">
                  Understanding your brand and requirements
                </p>
              </div>
              <div className="text-center" data-testid="process-step-2">
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">
                  Concept
                </h3>
                <p className="text-text-gray">
                  Creating initial design concepts and ideas
                </p>
              </div>
              <div className="text-center" data-testid="process-step-3">
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">
                  Design
                </h3>
                <p className="text-text-gray">
                  Developing detailed designs and iterations
                </p>
              </div>
              <div className="text-center" data-testid="process-step-4">
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">
                  Delivery
                </h3>
                <p className="text-text-gray">
                  Final designs and brand guidelines delivery
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 bg-navy text-white"
          data-testid="graphic-design-cta"
        >
          <div className="container mx-auto px-6 text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              data-testid="text-design-cta-title"
            >
              Ready to Elevate Your Brand?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              data-testid="text-design-cta-subtitle"
            >
              Let's create stunning visuals that make your brand stand out from
              the competition.
            </p>
            <Link
              href="/contact"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-start-design-project"
            >
              Start Your Design Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
