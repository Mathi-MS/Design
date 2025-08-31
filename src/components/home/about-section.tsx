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
    <section className="py-16 sm:py-20 bg-light-gray" data-testid="about-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            ref={titleRef as any}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 sm:mb-6"
            data-testid="text-about-title" data-aos="fade-up" 
          >
            Empowering Your Digital Growth
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed"
            data-testid="text-about-subtitle" data-aos="fade-up"
          >
            We craft innovative websites, mobile applications, and design solutions 
            that elevate your brand, engage your audience, and accelerate business success.
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    <div className="text-center p-4" data-testid="stat-experience" data-aos="fade-left">
            <div
              ref={experienceCounterRef as any}
              className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold text-orange"
              data-testid="counter-experience"
            >
              1+
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
              Years of Experience
            </h3>
            <p className="text-sm sm:text-base text-text-gray">
              A proven track record of building impactful digital solutions.
            </p>
          </div>
          <div className="text-center p-4" data-testid="stat-clients" data-aos="fade-right">
            <div
              ref={clientsCounterRef as any}
              className="stat-number text-2xl sm:text-3xl lg:text-4xl font-bold text-orange"
              data-testid="counter-clients"
            >
              98%
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-dark-gray mb-1 sm:mb-2">
              Client Satisfaction

            </h3>
            <p className="text-sm sm:text-base text-text-gray">
              Consistently exceeding expectations


            </p>
          </div>
        </div>

        {/* Image + Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div ref={imageRef as any} data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600"
              alt="Creative team collaboration"
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-team-collaboration"
            />
          </div>
          <div ref={contentRef as any} data-aos="fade-right">
            <h3
              className="text-xl sm:text-2xl font-bold text-dark-gray mb-4 sm:mb-6"
              data-testid="text-individuals-title"
            >
              Tailored Digital Solutions
            </h3>
            <p
              className="text-base sm:text-lg text-text-gray mb-6 leading-relaxed"
              data-testid="text-individuals-description"
            >
              Whether you need a high-performance website, a feature-rich mobile app,
              or standout branding, we design and develop with precision and creativity.
            </p>
            <h3
              className="text-xl sm:text-2xl font-bold text-dark-gray mb-4 sm:mb-6"
              data-testid="text-business-title"
            >
              Driving Business Success
            </h3>
            <p
              className="text-base sm:text-lg text-text-gray leading-relaxed"
              data-testid="text-business-description"
            >
              Our goal is to help your business grow faster, connect with more customers,
              and stay ahead with cutting-edge design and technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
