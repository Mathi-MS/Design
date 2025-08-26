import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "They do it with integrity and they do it with honesty... that's why I'm a Swagdata Customer since 5 years.",
    name: "Sandra Burton",
    role: "CEO, TechStart Inc.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
  },
  {
    content:
      "Outstanding service and exceptional results. DesignDynasty delivered exactly what we needed on time and within budget.",
    name: "Emily Rodriguez",
    role: "Founder, Creative Solutions",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b3bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
  },
  {
    content:
      "Professional, reliable, and innovative. They transformed our business with their cutting-edge solutions.",
    name: "Michael Chen",
    role: "CTO, Innovation Labs",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
  },
];

export default function TestimonialsSection() {
  const titleRef = useGSAPAnimation(fadeUpAnimation);

  return (
    <section className="py-20 bg-light-gray" data-testid="testimonials-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            ref={titleRef as any}
            className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
            data-testid="text-testimonials-title"
          >
            Doing more for you and your clients
          </h2>
          <p
            className="text-xl text-text-gray max-w-3xl mx-auto"
            data-testid="text-testimonials-subtitle"
          >
            Trusted professionals giving us 5-5 star reviews. We helped small
            business to grow and generate better income result.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const cardRef = useGSAPAnimation({
              ...fadeUpAnimation,
              transition: { ...fadeUpAnimation.transition, delay: index * 0.1 },
            });

            return (
              <div
                key={testimonial.name}
                ref={cardRef as any}
                className="bg-white p-8 rounded-xl shadow-lg"
                data-testid={`card-testimonial-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="flex text-orange"
                    data-testid={`stars-${index}`}
                  >
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p
                  className="text-text-gray mb-6 italic"
                  data-testid={`text-testimonial-content-${index}`}
                >
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                    data-testid={`img-testimonial-${index}`}
                  />
                  <div>
                    <div
                      className="font-semibold text-dark-gray"
                      data-testid={`text-testimonial-name-${index}`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className="text-sm text-text-gray"
                      data-testid={`text-testimonial-role-${index}`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
