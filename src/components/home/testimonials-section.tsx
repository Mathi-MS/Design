import { useGSAPAnimation } from "@/hooks/use-gsap";
import { fadeUpAnimation } from "@/lib/gsap-utils";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    content:
      "They do it with integrity and honesty... that's why I'm a Swagdata customer since 5 years.",
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
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={titleRef as any}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-4 md:mb-6"
            data-testid="text-testimonials-title" data-aos="fade-up"
          >
            What Our Clients Say
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl text-text-gray max-w-3xl mx-auto leading-relaxed"
            data-testid="text-testimonials-subtitle" data-aos="fade-up"
          >
            We pride ourselves on building lasting relationships. Here’s what
            our clients say about working with us.
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12 carousel-testi"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all h-full flex flex-col justify-between"
                data-testid={`card-testimonial-${index}`}
              >
                {/* Stars */}
                <div className="flex mb-4 text-orange">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-current"
                    />
                  ))}
                </div>

                {/* Content */}
                <p
                  className="text-sm sm:text-base text-text-gray mb-6 italic leading-relaxed"
                  data-testid={`text-testimonial-content-${index}`}
                >
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-4"
                    data-testid={`img-testimonial-${index}`}
                  />
                  <div>
                    <div
                      className="font-semibold text-dark-gray text-sm sm:text-base"
                      data-testid={`text-testimonial-name-${index}`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className="text-xs sm:text-sm text-text-gray"
                      data-testid={`text-testimonial-role-${index}`}
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
