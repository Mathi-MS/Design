import { useGSAPAnimation, useCounterAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation, fadeLeftAnimation, fadeRightAnimation } from "@/lib/gsap-utils";

export default function AboutSection() {
  const titleRef = useGSAPAnimation(fadeUpAnimation);
  const imageRef = useGSAPAnimation(fadeLeftAnimation);
  const contentRef = useGSAPAnimation(fadeRightAnimation);
  
  const projectsCounterRef = useCounterAnimation(500);
  const clientsCounterRef = useCounterAnimation(200);
  const experienceCounterRef = useCounterAnimation(8);

  return (
    <section className="py-20 bg-light-gray" data-testid="about-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef as any}
            className="text-3xl lg:text-4xl font-bold text-dark-gray mb-6"
            data-testid="text-about-title"
          >
            Taking care of what's important
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed" data-testid="text-about-subtitle">
            We're built on the anticipation insurance products built for people and solutions tailored to your unique business needs with cutting-edge technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center" data-testid="stat-projects">
            <div ref={projectsCounterRef as any} className="stat-number" data-testid="counter-projects">500+</div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Projects Completed</h3>
            <p className="text-text-gray">Successfully delivered projects across various industries</p>
          </div>
          <div className="text-center" data-testid="stat-clients">
            <div ref={clientsCounterRef as any} className="stat-number" data-testid="counter-clients">200+</div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Clients Served</h3>
            <p className="text-text-gray">Trusted by businesses worldwide for IT solutions</p>
          </div>
          <div className="text-center" data-testid="stat-experience">
            <div ref={experienceCounterRef as any} className="stat-number" data-testid="counter-experience">8+</div>
            <h3 className="text-xl font-semibold text-dark-gray mb-2">Years of Experience</h3>
            <p className="text-text-gray">Proven track record in delivering excellence</p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef as any}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team collaboration" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-team-collaboration"
            />
          </div>
          <div ref={contentRef as any}>
            <h3 className="text-2xl font-bold text-dark-gray mb-6" data-testid="text-individuals-title">
              Individuals and family
            </h3>
            <p className="text-text-gray text-lg mb-6 leading-relaxed" data-testid="text-individuals-description">
              Keep yourself and the people most important to you safe from unexpected costs. Let us help you to create an integrated financial strategy.
            </p>
            <h3 className="text-2xl font-bold text-dark-gray mb-6" data-testid="text-business-title">
              Business Protection
            </h3>
            <p className="text-text-gray text-lg leading-relaxed" data-testid="text-business-description">
              Reach the places you want to succeed and attract new clients and prospects. Designed to help you do more and grow faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
