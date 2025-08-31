import { useGSAPAnimation } from "@/hooks/use-gsap";
import { heroAnimations } from "@/lib/gsap-utils";
import { Link } from "wouter";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import bannerone from "../../images/bannerone.jpg"
import bannertwo from "../../images/bannertwo.jpg"
import bannerthree from "../../images/bannerthree.jpg"

export default function HeroSection() {
  const titleRef = useGSAPAnimation(heroAnimations.title);
  const subtitleRef = useGSAPAnimation(heroAnimations.subtitle);
  const buttonsRef = useGSAPAnimation(heroAnimations.buttons);

  return (
    <section className="relative w-full h-[90vh] text-white overflow-hidden gradient-bg herosection">
      {/* Background Carousel */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="absolute inset-0 w-full h-full"
      >
        <SwiperSlide>
          <img
            src={bannerone}
            // alt="Web Development"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannertwo}
            // alt="Mobile Apps"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bannerthree}
            // alt="Cloud Solutions"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        <h1
          ref={titleRef as any}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
        >
          Your Trusted <span className="text-orange">IT Partner</span>
        </h1>
        <p
          ref={subtitleRef as any}
          className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mb-8"
        >
          Empowering businesses with cutting-edge web, mobile, and digital
          solutions that drive growth and innovation.
        </p>

        {/* Buttons */}
        <div
          ref={buttonsRef as any}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="border-2 border-white hover:bg-white hover:text-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all w-full sm:w-auto"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}





// import { useState } from "react";
// import { useGSAPAnimation } from "@/hooks/use-gsap";
// import { heroAnimations } from "@/lib/gsap-utils";
// import { Link } from "wouter";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// export default function HeroSection() {
//   const titleRef = useGSAPAnimation(heroAnimations.title);
//   const subtitleRef = useGSAPAnimation(heroAnimations.subtitle);
//   const buttonsRef = useGSAPAnimation(heroAnimations.buttons);

//   // Slide content data
//   const slides = [
//     {
//       id: 1,
//       title: "Transform Your Business with Web Development",
//       subtitle:
//         "We craft scalable, responsive, and modern websites that bring your ideas to life and boost online presence.",
//       btn1: { label: "Start a Project", link: "/contact" },
//       btn2: { label: "View Portfolio", link: "/portfolio" },
//       image: "https://picsum.photos/1920/1080?random=11",
//     },
//     {
//       id: 2,
//       title: "Build Powerful Mobile Applications",
//       subtitle:
//         "Our mobile apps are designed to deliver seamless user experiences, keeping your customers engaged anytime, anywhere.",
//       btn1: { label: "Get Started", link: "/contact" },
//       btn2: { label: "See Services", link: "/services" },
//       image: "https://picsum.photos/1920/1080?random=12",
//     },
//     {
//       id: 3,
//       title: "Creative Graphic Design Solutions",
//       subtitle:
//         "From branding to marketing materials, our designs inspire trust, captivate audiences, and strengthen identity.",
//       btn1: { label: "Hire Designers", link: "/contact" },
//       btn2: { label: "Our Work", link: "/portfolio" },
//       image: "https://picsum.photos/1920/1080?random=13",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section className="relative w-full h-[90vh] text-white overflow-hidden gradient-bg">
//       {/* Background Carousel */}
//       <Swiper
//         modules={[Autoplay, Pagination, EffectFade]}
//         effect="fade"
//         loop
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         pagination={{ clickable: true }}
//         className="absolute inset-0 w-full h-full"
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/80 z-10"></div>

//       {/* Content Overlay */}
//       <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
//         <h1
//           ref={titleRef as any}
//           className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight"
//         >
//           {slides[activeIndex].title.split(" ").map((word, i) =>
//             word.toLowerCase().includes("web") ||
//             word.toLowerCase().includes("mobile") ||
//             word.toLowerCase().includes("design") ? (
//               <span key={i} className="text-orange">
//                 {word}{" "}
//               </span>
//             ) : (
//               <span key={i}>{word} </span>
//             )
//           )}
//         </h1>

//         <p
//           ref={subtitleRef as any}
//           className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mb-8"
//         >
//           {slides[activeIndex].subtitle}
//         </p>

//         {/* Buttons */}
//         <div
//           ref={buttonsRef as any}
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//         >
//           <Link
//             href={slides[activeIndex].btn1.link}
//             className="bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 w-full sm:w-auto"
//           >
//             {slides[activeIndex].btn1.label}
//           </Link>
//           <Link
//             href={slides[activeIndex].btn2.link}
//             className="border-2 border-white hover:bg-white hover:text-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all w-full sm:w-auto"
//           >
//             {slides[activeIndex].btn2.label}
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
