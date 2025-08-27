import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import {
  TrendingUp,
  Target,
  Users,
  BarChart3,
  Search,
  Share2,
  Mail,
  Eye,
  CheckCircle,
  Award,
  Clock,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and drive organic traffic to your website with proven SEO strategies.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build brand awareness and engage with your audience across all major social media platforms.",
  },
  {
    icon: Target,
    title: "Pay-Per-Click (PPC)",
    description:
      "Targeted advertising campaigns that deliver immediate results and maximize your ROI.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and retain customers with personalized email campaigns that drive conversions.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Data-driven insights to measure performance and optimize your marketing strategies.",
  },
  {
    icon: Eye,
    title: "Content Marketing",
    description:
      "Engaging content that tells your brand story and connects with your target audience.",
  },
];

const features = [
  {
    icon: Award,
    title: "Proven Results",
    description:
      "Track record of successful campaigns with measurable ROI improvements for our clients.",
  },
  {
    icon: Target,
    title: "Targeted Approach",
    description:
      "Data-driven strategies tailored to your specific audience and business objectives.",
  },
  {
    icon: Clock,
    title: "Fast Implementation",
    description:
      "Quick campaign setup and optimization to start seeing results in weeks, not months.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description:
      "Clear, comprehensive reports showing exactly how your marketing budget is performing.",
  },
];

const process = [
  {
    step: 1,
    title: "Strategy Development",
    description:
      "Analyze your market, competitors, and audience to create a comprehensive marketing strategy.",
  },
  {
    step: 2,
    title: "Campaign Creation",
    description:
      "Design and develop targeted campaigns across multiple channels for maximum impact.",
  },
  {
    step: 3,
    title: "Launch & Monitor",
    description:
      "Execute campaigns with continuous monitoring and real-time optimization.",
  },
  {
    step: 4,
    title: "Analyze & Optimize",
    description:
      "Regular performance analysis and strategy refinement for ongoing improvement.",
  },
];

const caseStudies = [
  {
    title: "E-commerce Growth Campaign",
    description:
      "Increased online sales for retail client through multi-channel marketing approach",
    metrics: "450% ROI, 280% increase in conversions",
    timeframe: "6 months",
  },
  {
    title: "B2B Lead Generation",
    description:
      "Generated qualified leads for SaaS company through targeted content marketing",
    metrics: "300% increase in qualified leads",
    timeframe: "4 months",
  },
  {
    title: "Brand Awareness Campaign",
    description:
      "Built brand recognition for startup through social media and content strategy",
    metrics: "500% increase in brand mentions",
    timeframe: "8 months",
  },
];

export default function DigitalMarketing() {
  useEffect(() => {
    document.title = "Digital Marketing Services - DesignDynasty";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Comprehensive digital marketing services including SEO, social media marketing, PPC, and content marketing to grow your business online."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-white" data-testid="page-digital-marketing">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="gradient-bg text-white py-16 md:py-20 lg:py-24"
          data-testid="digital-marketing-hero"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <TrendingUp className="w-12 h-12 md:w-16 md:h-16 text-orange mx-auto mb-4 md:mb-6" />
              <h1
                className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight"
                data-testid="text-digital-marketing-title"
              >
                Digital Marketing That Delivers Results
              </h1>
              <p
                className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto"
                data-testid="text-digital-marketing-subtitle"
              >
                Data-driven marketing strategies that increase brand awareness,
                generate leads, and drive revenue growth
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
                  data-testid="button-view-results"
                >
                  View Results
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          className="py-16 md:py-20 bg-light-gray"
          data-testid="digital-marketing-services"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-services-title"
              >
                Comprehensive Digital Marketing Services
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                Full-service digital marketing solutions designed to grow your
                business and maximize your online presence
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

        {/* Features Section */}
        <section
          className="py-16 md:py-20 bg-white"
          data-testid="digital-marketing-features"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-features-title"
              >
                Why Choose Our Digital Marketing Services
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                We combine creativity with data-driven insights to deliver
                marketing campaigns that exceed expectations
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="text-center bg-light-gray p-6 rounded-xl hover:shadow-lg transition-all"
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
          className="py-16 md:py-20 bg-light-gray"
          data-testid="digital-marketing-process"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-process-title"
              >
                Our Marketing Process
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                A systematic approach to digital marketing that ensures
                consistent results and continuous improvement
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

        {/* Case Studies Section */}
        <section
          className="py-16 md:py-20 bg-white"
          data-testid="digital-marketing-case-studies"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
                data-testid="text-case-studies-title"
              >
                Success Stories
              </h2>
              <p className="text-lg text-text-gray max-w-3xl mx-auto">
                Real results from our digital marketing campaigns that drove
                business growth for our clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={study.title}
                  className="bg-light-gray p-6 md:p-8 rounded-xl hover:shadow-lg transition-all"
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
                      data-testid={`case-study-metrics-${index}`}
                    >
                      {study.metrics}
                    </p>
                    <p
                      className="text-text-gray text-sm"
                      data-testid={`case-study-timeframe-${index}`}
                    >
                      Timeframe: {study.timeframe}
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
          data-testid="digital-marketing-cta"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
              data-testid="text-cta-title"
            >
              Ready to Grow Your Business Online?
            </h2>
            <p
              className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto"
              data-testid="text-cta-subtitle"
            >
              Let's create a digital marketing strategy that drives real results
              for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all transform hover:scale-105 w-full sm:w-auto text-center"
                data-testid="button-start-campaign"
              >
                Start Your Campaign
              </Link>
              {/* <Link
                href="/pricing"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all w-full sm:w-auto text-center"
                data-testid="button-view-packages"
              >
                View Packages
              </Link> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
