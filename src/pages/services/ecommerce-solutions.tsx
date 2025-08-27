import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import {
  ShoppingCart,
  CreditCard,
  Package,
  BarChart3,
  Shield,
  Smartphone,
  Globe,
  Users,
  CheckCircle,
  Award,
  Clock,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Custom E-commerce Development",
    description:
      "Build scalable online stores with modern frameworks and user-friendly interfaces.",
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description:
      "Secure payment processing with support for multiple payment methods and currencies.",
  },
  {
    icon: Package,
    title: "Inventory Management",
    description:
      "Advanced inventory tracking, automated stock alerts, and supplier management systems.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Comprehensive sales analytics, customer insights, and performance tracking dashboards.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "PCI DSS compliance, SSL certificates, and advanced security measures for safe transactions.",
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce",
    description:
      "Responsive design and mobile apps optimized for seamless mobile shopping experiences.",
  },
];

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Optimized for speed with CDN integration and performance monitoring for quick page loads.",
  },
  {
    icon: Users,
    title: "User Experience",
    description:
      "Intuitive shopping experiences designed to maximize conversions and customer satisfaction.",
  },
  {
    icon: Globe,
    title: "Multi-Store Support",
    description:
      "Manage multiple stores, regions, and currencies from a single administrative dashboard.",
  },
  {
    icon: Award,
    title: "SEO Optimized",
    description:
      "Built-in SEO features to help your products rank higher in search engine results.",
  },
];

const platforms = [
  {
    name: "Shopify",
    description:
      "Comprehensive e-commerce platform with extensive app ecosystem",
    features: ["Easy to use", "App store", "Payment ready"],
  },
  {
    name: "WooCommerce",
    description:
      "WordPress-based solution with maximum customization flexibility",
    features: [
      "WordPress integration",
      "Highly customizable",
      "Cost-effective",
    ],
  },
  {
    name: "Magento",
    description:
      "Enterprise-level platform for large-scale e-commerce operations",
    features: ["Enterprise features", "Multi-store", "B2B ready"],
  },
  {
    name: "Custom Solution",
    description:
      "Tailored e-commerce solution built specifically for your business needs",
    features: ["Fully customized", "Scalable architecture", "Unique features"],
  },
];

const process = [
  {
    step: 1,
    title: "Business Analysis",
    description:
      "Understand your products, target market, and business requirements for the perfect e-commerce strategy.",
  },
  {
    step: 2,
    title: "Platform Selection",
    description:
      "Choose the best e-commerce platform based on your needs, budget, and scalability requirements.",
  },
  {
    step: 3,
    title: "Design & Development",
    description:
      "Create stunning store designs and develop robust functionality with payment and shipping integration.",
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description:
      "Thorough testing of all features, payment processing, and performance optimization before launch.",
  },
  {
    step: 5,
    title: "Launch & Support",
    description:
      "Go live with comprehensive monitoring, ongoing support, and continuous optimization.",
  },
];

const caseStudies = [
  {
    title: "Fashion Retail Store",
    description:
      "Complete e-commerce solution with inventory management and multi-currency support",
    results: "300% increase in online sales, 50% reduction in cart abandonment",
    platform: "Shopify Plus",
  },
  {
    title: "B2B Wholesale Platform",
    description:
      "Custom B2B e-commerce platform with bulk ordering and customer-specific pricing",
    results:
      "500% increase in online orders, 70% reduction in order processing time",
    platform: "Custom Solution",
  },
  {
    title: "Electronics Marketplace",
    description:
      "Multi-vendor marketplace with advanced search and comparison features",
    results: "250% increase in vendor sign-ups, 180% growth in GMV",
    platform: "Magento Commerce",
  },
];

export default function EcommerceSolutions() {
  useEffect(() => {
    document.title = "E-commerce Solutions - DesignDynasty";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional e-commerce development services including custom online stores, payment integration, and mobile commerce solutions."
      );
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-white"
      data-testid="page-ecommerce-solutions"
    >
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="gradient-bg text-white py-16 md:py-20 lg:py-24"
          data-testid="ecommerce-hero"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ShoppingCart className="w-12 h-12 md:w-16 md:h-16 text-orange mx-auto mb-4 md:mb-6" />
              <h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                data-testid="text-ecommerce-title"
              >
                E-commerce Solutions That Drive Sales
              </h1>
              <p
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto"
                data-testid="text-ecommerce-subtitle"
              >
                Custom online stores and e-commerce platforms designed to
                maximize conversions and grow your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-orange hover:bg-orange/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 w-full sm:w-auto text-center"
                  data-testid="button-get-started"
                >
                  Get Started
                </Link>
                {/* <Link
                  href="/portfolio"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all w-full sm:w-auto text-center"
                  data-testid="button-view-stores"
                >
                  View Our Stores
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-16 md:py-20 bg-light-gray"
          data-testid="ecommerce-services"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-services-title"
              >
                Complete E-commerce Services
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                From concept to launch, we provide end-to-end e-commerce
                solutions that help you sell more online
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
                    data-testid={`service-${index}`}
                  >
                    <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-orange mb-4 group-hover:scale-110 transition-transform" />
                    <h3
                      className="text-lg md:text-xl font-bold text-dark-gray mb-3"
                      data-testid={`service-title-${index}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-text-gray text-sm md:text-base"
                      data-testid={`service-description-${index}`}
                    >
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section
          className="py-16 md:py-20 bg-white"
          data-testid="ecommerce-platforms"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-platforms-title"
              >
                E-commerce Platforms We Work With
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                We help you choose the right platform based on your business
                needs, budget, and growth plans
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {platforms.map((platform, index) => (
                <div
                  key={platform.name}
                  className="bg-light-gray p-6 rounded-xl hover:shadow-lg transition-all"
                  data-testid={`platform-${index}`}
                >
                  <h3
                    className="text-lg md:text-xl font-bold text-dark-gray mb-3"
                    data-testid={`platform-title-${index}`}
                  >
                    {platform.name}
                  </h3>
                  <p
                    className="text-text-gray text-sm md:text-base mb-4"
                    data-testid={`platform-description-${index}`}
                  >
                    {platform.description}
                  </p>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-text-gray"
                      >
                        <CheckCircle className="w-4 h-4 text-orange mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-16 md:py-20 bg-light-gray"
          data-testid="ecommerce-features"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-features-title"
              >
                Why Choose Our E-commerce Solutions
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                Built for performance, security, and scalability with features
                that drive conversions and growth
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="text-center bg-white p-6 rounded-xl hover:shadow-lg transition-all"
                    data-testid={`feature-${index}`}
                  >
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-orange mx-auto mb-4" />
                    <h3
                      className="text-lg md:text-xl font-bold text-dark-gray mb-3"
                      data-testid={`feature-title-${index}`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-text-gray text-sm md:text-base"
                      data-testid={`feature-description-${index}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section
          className="py-16 md:py-20 bg-white"
          data-testid="ecommerce-process"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-process-title"
              >
                Our E-commerce Development Process
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                A proven methodology that delivers successful e-commerce
                solutions on time and within budget
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <div
                  key={step.step}
                  className="flex flex-col md:flex-row items-start md:items-center bg-light-gray p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-8 last:mb-0"
                  data-testid={`process-step-${index}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-orange text-white rounded-full flex items-center justify-center font-bold text-lg md:text-xl mb-4 md:mb-0 md:mr-6">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-lg md:text-xl font-bold text-dark-gray mb-2 md:mb-3"
                      data-testid={`process-title-${index}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-text-gray text-sm md:text-base"
                      data-testid={`process-description-${index}`}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section
          className="py-16 md:py-20 bg-light-gray"
          data-testid="ecommerce-case-studies"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-case-studies-title"
              >
                Successful E-commerce Projects
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                Real results from our e-commerce solutions that transformed
                businesses and increased sales
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={study.title}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
                  data-testid={`case-study-${index}`}
                >
                  <h3
                    className="text-lg md:text-xl font-bold text-dark-gray mb-3 md:mb-4"
                    data-testid={`case-study-title-${index}`}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-text-gray mb-4 text-sm md:text-base"
                    data-testid={`case-study-description-${index}`}
                  >
                    {study.description}
                  </p>
                  <div className="space-y-2">
                    <p
                      className="text-orange font-semibold text-sm md:text-base"
                      data-testid={`case-study-results-${index}`}
                    >
                      {study.results}
                    </p>
                    <p
                      className="text-text-gray text-sm"
                      data-testid={`case-study-platform-${index}`}
                    >
                      Platform: {study.platform}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 md:py-20 bg-navy text-white"
          data-testid="ecommerce-cta"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
              data-testid="text-cta-title"
            >
              Ready to Launch Your Online Store?
            </h2>
            <p
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto"
              data-testid="text-cta-subtitle"
            >
              Let's build an e-commerce solution that drives sales and grows
              your business online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 w-full sm:w-auto text-center"
                data-testid="button-start-project"
              >
                Start Your Project
              </Link>
              {/* <Link
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all w-full sm:w-auto text-center"
                data-testid="button-view-pricing"
              >
                View Pricing
              </Link> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
