import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { Smartphone, Tablet, Monitor, Zap } from "lucide-react";

const mobileServices = [
  {
    icon: Smartphone,
    title: "Native iOS Apps",
    description: "Swift-based applications optimized for Apple ecosystem",
  },
  {
    icon: Tablet,
    title: "Native Android Apps",
    description: "Kotlin/Java applications for Google Play Store",
  },
  {
    icon: Monitor,
    title: "Cross-Platform Apps",
    description: "React Native and Flutter solutions for both platforms",
  },
  {
    icon: Zap,
    title: "App Optimization",
    description: "Performance tuning and user experience enhancement",
  },
];

const technologies = [
  "React Native",
  "Flutter",
  "Swift",
  "Kotlin",
  "Firebase",
  "Node.js",
];

const appPortfolio = [
  {
    title: "Fitness Tracking App",
    description:
      "Cross-platform fitness app with social features and workout plans",
    category: "Health & Fitness",
    platforms: "iOS, Android",
    downloads: "50K+",
  },
  {
    title: "E-Learning Platform",
    description: "Educational app with video streaming and progress tracking",
    category: "Education",
    platforms: "iOS, Android",
    downloads: "25K+",
  },
  {
    title: "Food Delivery App",
    description: "On-demand food delivery with real-time tracking",
    category: "Food & Drink",
    platforms: "iOS, Android",
    downloads: "100K+",
  },
];

export default function MobileDevelopment() {
  useEffect(() => {
    document.title = "Mobile App Development Services - DesignDynasty";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Professional mobile app development services for iOS and Android. Native and cross-platform solutions using React Native, Flutter, Swift, and Kotlin."
      );
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-white"
      data-testid="page-mobile-development"
    >
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="gradient-bg text-white py-20"
          data-testid="mobile-dev-hero"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <Smartphone className="w-16 h-16 text-orange mx-auto mb-6" />
              <h1
                className="text-4xl lg:text-6xl font-bold mb-6"
                data-testid="text-mobile-dev-title"
              >
                Mobile App Development
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-300 mb-8"
                data-testid="text-mobile-dev-subtitle"
              >
                Native and cross-platform mobile applications that deliver
                exceptional user experiences
              </p>
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                data-testid="button-get-mobile-quote"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-20 bg-light-gray"
          data-testid="mobile-dev-services"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-mobile-services-title"
              >
                Mobile Development Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mobileServices.map((service, index) => {
                const ServiceIcon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="text-center bg-white rounded-xl p-8 shadow-lg"
                    data-testid={`mobile-service-${index}`}
                  >
                    <ServiceIcon className="w-12 h-12 text-orange mx-auto mb-4" />
                    <h3
                      className="text-xl font-bold text-dark-gray mb-4"
                      data-testid={`mobile-service-title-${index}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-text-gray"
                      data-testid={`mobile-service-description-${index}`}
                    >
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        {/* <section
          className="py-20 bg-white"
          data-testid="mobile-dev-technologies"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-mobile-technologies-title"
              >
                Technologies We Use
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="text-center bg-light-gray rounded-lg p-4"
                  data-testid={`mobile-tech-${index}`}
                >
                  <p
                    className="font-semibold text-dark-gray"
                    data-testid={`mobile-tech-name-${index}`}
                  >
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* App Portfolio Section */}
        {/* <section
          className="py-20 bg-light-gray"
          data-testid="mobile-dev-portfolio"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-mobile-portfolio-title"
              >
                Featured Mobile Apps
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {appPortfolio.map((app, index) => (
                <div
                  key={app.title}
                  className="bg-white rounded-xl p-8 shadow-lg"
                  data-testid={`mobile-app-${index}`}
                >
                  <h3
                    className="text-xl font-bold text-dark-gray mb-3"
                    data-testid={`mobile-app-title-${index}`}
                  >
                    {app.title}
                  </h3>
                  <p
                    className="text-text-gray mb-4"
                    data-testid={`mobile-app-description-${index}`}
                  >
                    {app.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-text-gray">Category:</span>
                      <span
                        className="text-sm font-medium text-dark-gray"
                        data-testid={`mobile-app-category-${index}`}
                      >
                        {app.category}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-text-gray">Platforms:</span>
                      <span
                        className="text-sm font-medium text-dark-gray"
                        data-testid={`mobile-app-platforms-${index}`}
                      >
                        {app.platforms}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-text-gray">Downloads:</span>
                      <span
                        className="text-sm font-medium text-orange"
                        data-testid={`mobile-app-downloads-${index}`}
                      >
                        {app.downloads}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Development Process Section */}
        <section className="py-20 bg-white" data-testid="mobile-dev-process">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-mobile-process-title"
              >
                Our Mobile Development Process
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
              <div className="text-center" data-testid="mobile-process-step-1">
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">
                  Strategy
                </h3>
                <p className="text-text-gray">
                  Define app goals and target audience
                </p>
              </div>
              <div className="text-center" data-testid="mobile-process-step-2">
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">
                  Design
                </h3>
                <p className="text-text-gray">
                  Create wireframes and UI/UX design
                </p>
              </div>
              <div className="text-center" data-testid="mobile-process-step-3">
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">
                  Development
                </h3>
                <p className="text-text-gray">
                  Build app with chosen technology stack
                </p>
              </div>
              <div className="text-center" data-testid="mobile-process-step-4">
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">
                  Testing
                </h3>
                <p className="text-text-gray">
                  Comprehensive testing across devices
                </p>
              </div>
              <div className="text-center" data-testid="mobile-process-step-5">
                <div className="w-12 h-12 bg-orange text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold text-dark-gray mb-2">
                  Launch
                </h3>
                <p className="text-text-gray">
                  Deploy to app stores and monitor
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 bg-navy text-white"
          data-testid="mobile-dev-cta"
        >
          <div className="container mx-auto px-6 text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              data-testid="text-mobile-cta-title"
            >
              Ready to Build Your Mobile App?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              data-testid="text-mobile-cta-subtitle"
            >
              Let's turn your app idea into reality with our expert mobile
              development team.
            </p>
            <Link
              href="/contact"
              className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
              data-testid="button-start-mobile-project"
            >
              Start Your Mobile Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
