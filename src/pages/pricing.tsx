import { useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";
import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";
import { Check, X, HelpCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$599",
    period: "/project",
    description: "Perfect for small businesses and startups",
    features: [
      "Basic website design",
      "Mobile responsive",
      "5 pages included",
      "Basic SEO optimization",
      "Contact form",
      "Social media integration",
      "1 month support",
    ],
    notIncluded: [
      "Custom functionality",
      "Database integration",
      "E-commerce features",
      "Advanced analytics",
    ],
    isPopular: false,
    buttonText: "Get Started",
    color: "border-gray-200",
  },
  {
    name: "Business",
    price: "$999",
    period: "/project",
    description: "Most popular choice for growing businesses",
    features: [
      "Advanced web application",
      "Custom functionality",
      "Database integration",
      "E-commerce capabilities",
      "Advanced SEO",
      "Analytics dashboard",
      "Payment integration",
      "6 months support",
    ],
    notIncluded: [
      "Unlimited revisions",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    isPopular: true,
    buttonText: "Get Started",
    color: "border-orange",
  },
  {
    name: "Enterprise",
    price: "$1599",
    period: "/project",
    description: "For large organizations with complex needs",
    features: [
      "Enterprise-grade solution",
      "Custom architecture",
      "Unlimited revisions",
      "Dedicated support team",
      "Priority development",
      "Advanced security",
      "Scalable infrastructure",
      "12 months support",
      "Training included",
    ],
    notIncluded: [],
    isPopular: false,
    buttonText: "Contact Sales",
    color: "border-gray-200",
  },
];

const faqs = [
  {
    question: "What's included in the project price?",
    answer:
      "Each project includes design, development, testing, deployment, and the specified support period. Additional features can be added for an extra cost.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Starter projects typically take 2-4 weeks, Business projects 4-8 weeks, and Enterprise projects 8-16 weeks, depending on complexity.",
  },
  {
    question: "Do you offer ongoing maintenance?",
    answer:
      "Yes, we offer maintenance packages starting at $199/month for regular updates, security patches, and minor modifications.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely! You can upgrade your project scope at any time. We'll provide a quote for the additional features you need.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, bank transfers, and can set up payment plans for larger projects.",
  },
  {
    question: "Do you provide hosting services?",
    answer:
      "We can recommend hosting providers and help with setup, or we can manage hosting for you starting at $99/month.",
  },
];

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing Plans - DesignDynasty";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Transparent pricing for web development, mobile apps, and design services. Choose from Starter, Business, or Enterprise plans that fit your needs."
      );
    }
  }, []);

  const titleRef = useGSAPAnimation(fadeUpAnimation);

  return (
    <div className="min-h-screen bg-white" data-testid="page-pricing">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="gradient-bg text-white py-20"
          data-testid="pricing-hero"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                ref={titleRef as any}
                className="text-4xl lg:text-6xl font-bold mb-6"
                data-testid="text-pricing-title"
              >
                Simple, Transparent Pricing
              </h1>
              <p
                className="text-xl lg:text-2xl text-gray-300"
                data-testid="text-pricing-subtitle"
              >
                Choose the perfect plan for your business needs and scale as you
                grow
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-light-gray" data-testid="pricing-plans">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`rounded-xl p-8 ${
                    plan.isPopular
                      ? "bg-orange text-white transform scale-105 shadow-xl"
                      : "bg-white border-2 " + plan.color
                  }`}
                  data-testid={`pricing-plan-${plan.name.toLowerCase()}`}
                >
                  {plan.isPopular && (
                    <div
                      className="bg-white text-orange text-sm font-bold px-3 py-1 rounded-full text-center mb-4"
                      data-testid="badge-most-popular"
                    >
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        plan.isPopular ? "text-white" : "text-dark-gray"
                      }`}
                      data-testid={`plan-name-${index}`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        plan.isPopular ? "text-orange-200" : "text-text-gray"
                      }`}
                      data-testid={`plan-description-${index}`}
                    >
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span
                        className="text-4xl font-bold"
                        data-testid={`plan-price-${index}`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={
                          plan.isPopular ? "text-orange-200" : "text-text-gray"
                        }
                      >
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4
                      className={`font-semibold mb-4 ${
                        plan.isPopular ? "text-white" : "text-dark-gray"
                      }`}
                    >
                      What's included:
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center"
                          data-testid={`plan-feature-${index}-${featureIndex}`}
                        >
                          <Check
                            className={`w-5 h-5 mr-3 ${
                              plan.isPopular ? "text-white" : "text-green-500"
                            }`}
                          />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, featureIndex) => (
                        <li
                          key={`not-${featureIndex}`}
                          className="flex items-center opacity-50"
                          data-testid={`plan-not-included-${index}-${featureIndex}`}
                        >
                          <X
                            className={`w-5 h-5 mr-3 ${
                              plan.isPopular ? "text-white" : "text-gray-400"
                            }`}
                          />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all text-center block ${
                      plan.isPopular
                        ? "bg-white text-orange hover:bg-gray-100"
                        : "border-2 border-orange text-orange hover:bg-orange hover:text-white"
                    }`}
                    data-testid={`button-plan-${index}`}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-white" data-testid="pricing-comparison">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-comparison-title"
              >
                Detailed Feature Comparison
              </h2>
            </div>

            <div className="max-w-6xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-light-gray">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-dark-gray">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-dark-gray">
                      Starter
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-orange">
                      Business
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-dark-gray">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr data-testid="comparison-pages">
                    <td className="px-6 py-4 text-dark-gray">
                      Number of Pages
                    </td>
                    <td className="px-6 py-4 text-center">5</td>
                    <td className="px-6 py-4 text-center">15</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr data-testid="comparison-revisions">
                    <td className="px-6 py-4 text-dark-gray">
                      Design Revisions
                    </td>
                    <td className="px-6 py-4 text-center">3</td>
                    <td className="px-6 py-4 text-center">5</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr data-testid="comparison-support">
                    <td className="px-6 py-4 text-dark-gray">Support Period</td>
                    <td className="px-6 py-4 text-center">1 Month</td>
                    <td className="px-6 py-4 text-center">6 Months</td>
                    <td className="px-6 py-4 text-center">12 Months</td>
                  </tr>
                  <tr data-testid="comparison-training">
                    <td className="px-6 py-4 text-dark-gray">
                      Training Included
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-light-gray" data-testid="pricing-faq">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
                data-testid="text-faq-title"
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg"
                    data-testid={`faq-${index}`}
                  >
                    <div className="flex items-start mb-4">
                      <HelpCircle className="w-6 h-6 text-orange mr-3 mt-1 flex-shrink-0" />
                      <h3
                        className="font-semibold text-dark-gray"
                        data-testid={`faq-question-${index}`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <p
                      className="text-text-gray pl-9"
                      data-testid={`faq-answer-${index}`}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy text-white" data-testid="pricing-cta">
          <div className="container mx-auto px-6 text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              data-testid="text-pricing-cta-title"
            >
              Still Have Questions?
            </h2>
            <p
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              data-testid="text-pricing-cta-subtitle"
            >
              Our team is here to help you choose the right plan and answer any
              questions about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
                data-testid="button-contact-sales"
              >
                Contact Sales
              </Link>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white hover:bg-white hover:text-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all"
                data-testid="button-call-now"
              >
                Call Now: (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
