import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  CheckCircle,
  Users,
  Clock,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Award,
} from "lucide-react";

const technologies = [
  {
    name: "React",
    description: "Modern frontend framework",
    category: "Frontend",
  },
  {
    name: "Vue.js",
    description: "Progressive JavaScript framework",
    category: "Frontend",
  },
  {
    name: "Angular",
    description: "TypeScript-based framework",
    category: "Frontend",
  },
  {
    name: "Node.js",
    description: "Backend JavaScript runtime",
    category: "Backend",
  },
  {
    name: "Python",
    description: "Versatile programming language",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    description: "Advanced open source database",
    category: "Database",
  },
  {
    name: "MongoDB",
    description: "NoSQL document database",
    category: "Database",
  },
  {
    name: "AWS",
    description: "Cloud infrastructure platform",
    category: "Cloud",
  },
  {
    name: "Docker",
    description: "Containerization platform",
    category: "DevOps",
  },
  { name: "TypeScript", description: "Typed JavaScript", category: "Language" },
];

const features = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "Enterprise-grade security with SSL, data encryption, and secure authentication systems.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimized code and infrastructure for lightning-fast loading times and smooth user experience.",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description:
      "Perfect display and functionality across all devices - mobile, tablet, and desktop.",
  },
  {
    icon: Target,
    title: "SEO Optimized",
    description:
      "Built-in SEO best practices to help your website rank higher in search results.",
  },
  {
    icon: Users,
    title: "User-Centered Design",
    description:
      "Intuitive interfaces designed with your users in mind for maximum engagement.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Built to grow with your business, handling increased traffic and functionality.",
  },
];

const process = [
  {
    step: 1,
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, target audience, and business goals to create a comprehensive project roadmap.",
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description:
      "Create wireframes, mockups, and interactive prototypes to visualize the final product before development.",
  },
  {
    step: 3,
    title: "Development & Testing",
    description:
      "Build your application using modern technologies with rigorous testing at every stage.",
  },
  {
    step: 4,
    title: "Deployment & Launch",
    description:
      "Deploy to production with proper monitoring, backup systems, and performance optimization.",
  },
  {
    step: 5,
    title: "Support & Maintenance",
    description:
      "Ongoing support, updates, and maintenance to ensure your application runs smoothly.",
  },
];

const caseStudies = [
  {
    title: "E-Commerce Platform",
    description: "Built a scalable online store with payment integration",
    tech: "React, Node.js, Stripe",
    result: "300% increase in online sales",
  },
  {
    title: "SaaS Dashboard",
    description: "Created analytics dashboard for business intelligence",
    tech: "React, D3.js, Express",
    result: "Reduced data processing time by 70%",
  },
];

export default function WebDevelopment() {
  useEffect(() => {
    document.title = "Web Development Services - DesignDynasty";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional web development services using modern frameworks like React, Node.js, and cloud technologies. Custom web applications and websites."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="page-web-development">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="gradient-bg text-white py-16 md:py-20 lg:py-24"
          data-testid="web-dev-hero"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Code className="w-12 h-12 md:w-16 md:h-16 text-orange mx-auto mb-4 md:mb-6" />
              <h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                data-testid="text-web-dev-title"
              >
                Professional Web Development
              </h1>
              <p
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto"
                data-testid="text-web-dev-subtitle"
              >
                Custom web applications and websites built with modern
                frameworks, cutting-edge technologies, and industry best
                practices
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-orange hover:bg-orange/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 w-full sm:w-auto text-center"
                  data-testid="button-get-quote"
                >
                  Get a Quote
                </Link>
                {/* <Link
                  href="/portfolio"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all w-full sm:w-auto text-center"
                  data-testid="button-view-portfolio"
                >
                  View Portfolio
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-16 md:py-20 bg-light-gray"
          data-testid="web-dev-services"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-services-title"
              >
                Our Web Development Services
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                From simple websites to complex web applications, we deliver
                comprehensive solutions that drive business growth
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                data-testid="service-frontend"
              >
                <Globe className="w-10 h-10 md:w-12 md:h-12 text-orange mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-dark-gray mb-3 md:mb-4">
                  Frontend Development
                </h3>
                <p className="text-text-gray text-sm md:text-base">
                  Responsive, interactive user interfaces with modern frameworks
                  like React, Vue.js, and Angular
                </p>
              </div>
              <div
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                data-testid="service-backend"
              >
                <Database className="w-10 h-10 md:w-12 md:h-12 text-orange mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-dark-gray mb-3 md:mb-4">
                  Backend Development
                </h3>
                <p className="text-text-gray text-sm md:text-base">
                  Scalable server architecture, APIs, and database design with
                  Node.js, Python, and cloud technologies
                </p>
              </div>
              <div
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                data-testid="service-fullstack"
              >
                <Code className="w-10 h-10 md:w-12 md:h-12 text-orange mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-dark-gray mb-3 md:mb-4">
                  Full-Stack Solutions
                </h3>
                <p className="text-text-gray text-sm md:text-base">
                  Complete web applications from database design to frontend
                  implementation and deployment
                </p>
              </div>
              <div
                className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                data-testid="service-mobile-web"
              >
                <Smartphone className="w-10 h-10 md:w-12 md:h-12 text-orange mx-auto mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-dark-gray mb-3 md:mb-4">
                  Mobile-First Design
                </h3>
                <p className="text-text-gray text-sm md:text-base">
                  Progressive web apps and responsive designs optimized for all
                  devices and screen sizes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className="py-16 md:py-20 bg-white"
          data-testid="web-dev-features"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-features-title"
              >
                Why Choose Our Web Development Services
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                We combine technical expertise with strategic thinking to
                deliver web solutions that exceed expectations
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex flex-col items-start bg-light-gray p-6 rounded-xl hover:shadow-lg transition-all"
                    data-testid={`feature-${index}`}
                  >
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-orange mb-4" />
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

        {/* Development Process Section */}
        <section
          className="py-16 md:py-20 bg-light-gray"
          data-testid="web-dev-process"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-process-title"
              >
                Our Development Process
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                A proven methodology that ensures quality, transparency, and
                on-time delivery
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {process.map((step, index) => (
                <div
                  key={step.step}
                  className="flex flex-col md:flex-row items-start md:items-center bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-8 last:mb-0"
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

        {/* Technologies Section */}
        {/* <section
          className="py-16 md:py-20 bg-white"
          data-testid="web-dev-technologies"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-technologies-title"
              >
                Modern Technologies & Tools
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                We use the latest technologies and industry-standard tools to
                build robust, scalable web applications
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="text-center bg-light-gray rounded-xl p-4 md:p-6 hover:shadow-lg transition-all group"
                  data-testid={`tech-${index}`}
                >
                  <div className="text-xs text-orange font-semibold mb-2 uppercase tracking-wide">
                    {tech.category}
                  </div>
                  <h3
                    className="text-sm md:text-lg font-bold text-dark-gray mb-2"
                    data-testid={`tech-name-${index}`}
                  >
                    {tech.name}
                  </h3>
                  <p
                    className="text-xs md:text-sm text-text-gray group-hover:text-dark-gray transition-colors"
                    data-testid={`tech-description-${index}`}
                  >
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Case Studies Section */}
        {/* <section
          className="py-20 bg-light-gray"
          data-testid="web-dev-case-studies"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-case-studies-title"
              >
                Success Stories
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {caseStudies.map((study, index) => (
                <div
                  key={study.title}
                  className="bg-white rounded-xl p-8 shadow-lg"
                  data-testid={`case-study-${index}`}
                >
                  <h3
                    className="text-xl font-bold text-dark-gray mb-4"
                    data-testid={`case-study-title-${index}`}
                  >
                    {study.title}
                  </h3>
                  <p
                    className="text-text-gray mb-4"
                    data-testid={`case-study-description-${index}`}
                  >
                    {study.description}
                  </p>
                  <p
                    className="text-sm text-orange font-semibold mb-4"
                    data-testid={`case-study-tech-${index}`}
                  >
                    Tech Stack: {study.tech}
                  </p>
                  <p
                    className="text-dark-gray font-semibold"
                    data-testid={`case-study-result-${index}`}
                  >
                    Result: {study.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section
          className="py-16 md:py-20 bg-navy text-white"
          data-testid="web-dev-cta"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
              data-testid="text-cta-title"
            >
              Ready to Start Your Web Project?
            </h2>
            <p
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto"
              data-testid="text-cta-subtitle"
            >
              Let's discuss your requirements and create a custom solution that
              drives your business forward.
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
