import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";
import { Link } from "wouter";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "$999",
    period: "/project",
    features: [
      "Basic website design",
      "Mobile responsive",
      "5 pages included",
      "Basic SEO optimization"
    ],
    isPopular: false,
    buttonText: "Get Started"
  },
  {
    name: "Business",
    price: "$2,999",
    period: "/project",
    features: [
      "Advanced web application",
      "Custom functionality",
      "Database integration",
      "6 months support"
    ],
    isPopular: true,
    buttonText: "Get Started"
  },
  {
    name: "Enterprise",
    price: "$9,999",
    period: "/project",
    features: [
      "Enterprise solution",
      "Unlimited revisions",
      "Dedicated support",
      "Priority development"
    ],
    isPopular: false,
    buttonText: "Contact Sales"
  }
];

export default function PricingSection() {
  const titleRef = useGSAPAnimation(fadeUpAnimation);

  return (
    <section className="py-20 bg-white" data-testid="pricing-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef as any}
            className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
            data-testid="text-pricing-title"
          >
            Raise your expectations of what your solution should deliver
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto" data-testid="text-pricing-subtitle">
            Choose the perfect plan for your business needs and scale as you grow with our flexible pricing options.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const cardRef = useGSAPAnimation({
              ...fadeUpAnimation,
              transition: { ...fadeUpAnimation.transition, delay: index * 0.1 }
            });
            
            return (
              <div 
                key={plan.name}
                ref={cardRef as any}
                className={`rounded-xl p-8 text-center ${
                  plan.isPopular
                    ? "bg-orange text-white transform scale-105 shadow-xl"
                    : "bg-white border-2 border-gray-200"
                }`}
                data-testid={`card-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.isPopular && (
                  <div className="bg-white text-orange text-sm font-bold px-3 py-1 rounded-full inline-block mb-4" data-testid="badge-most-popular">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${plan.isPopular ? "text-white" : "text-dark-gray"}`} data-testid={`text-plan-name-${index}`}>
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" data-testid={`text-plan-price-${index}`}>
                    {plan.price}
                  </span>
                  <span className={plan.isPopular ? "text-orange-200" : "text-text-gray"}>
                    {plan.period}
                  </span>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center" data-testid={`feature-${index}-${featureIndex}`}>
                      <Check className={`w-5 h-5 mr-3 ${plan.isPopular ? "text-white" : "text-green-500"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-all inline-block ${
                    plan.isPopular
                      ? "bg-white text-orange hover:bg-gray-100"
                      : "border-2 border-orange text-orange hover:bg-orange hover:text-white"
                  }`}
                  data-testid={`button-plan-${index}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
