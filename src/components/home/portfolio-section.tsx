import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";
import { Link } from "wouter";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    title: "E-Commerce Platform",
    description: "Modern online store with seamless shopping experience and payment integration.",
    category: "Web Development"
  },
  {
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    title: "Fitness Mobile App",
    description: "Cross-platform fitness tracking app with social features and workout plans.",
    category: "Mobile Development"
  },
  {
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300",
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo, colors, and marketing materials.",
    category: "Graphic Design"
  }
];

export default function PortfolioSection() {
  const titleRef = useGSAPAnimation(fadeUpAnimation);

  return (
    <section className="py-20 bg-light-gray" data-testid="portfolio-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef as any}
            className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
            data-testid="text-portfolio-title"
          >
            Built from the ground up for the internet generation
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto" data-testid="text-portfolio-subtitle">
            Our track record spans everything from supporting websites, mobile apps, and innovative digital experiences for growing businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => {
            const cardRef = useGSAPAnimation({
              ...fadeUpAnimation,
              transition: { ...fadeUpAnimation.transition, delay: index * 0.1 }
            });
            
            return (
              <div 
                key={item.title}
                ref={cardRef as any}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
                data-testid={`card-portfolio-${index}`}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover"
                  data-testid={`img-portfolio-${index}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-gray mb-3" data-testid={`text-portfolio-title-${index}`}>
                    {item.title}
                  </h3>
                  <p className="text-text-gray mb-4" data-testid={`text-portfolio-description-${index}`}>
                    {item.description}
                  </p>
                  <span className="inline-block bg-orange/10 text-orange px-3 py-1 rounded-full text-sm font-medium" data-testid={`text-portfolio-category-${index}`}>
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <Link
            href="/portfolio"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            data-testid="button-view-more-projects"
          >
            View More Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
