import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { GiAtomicSlashes, GiRobotGrab } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const services = [
  {
    id: 1,
    title: "Chemical Research",
    image: "/images/pic1.jpg",
    icon: <GiAtomicSlashes />,
  },
  {
    id: 2,
    title: "Mechanical Engineering",
    image: "/images/pic2.jpg",
    icon: <TbTruckDelivery />,
  },
  {
    id: 3,
    title: "Material Engineering",
    image: "/images/pic3.jpg",
    icon: <GiRobotGrab />,
  },
  {
    id: 4,
    title: "Fuel & Gas Engineering",
    image: "/images/pic4.jpg",
    icon: <BsFuelPump />,
  },
  {
    id: 5,
    title: "Industrial Solution",
    image: "/images/pic5.jpg",
    icon: <BsFuelPump />,
  },
];
gsap.registerPlugin(ScrollTrigger);
const ContentInner1 = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => { 
      gsap.fromTo(
        ".swiper-slide",
        {
          opacity: 0,
          scale: 0.6,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".swiper",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    },
    { scope: containerRef },
  );
  const extendedServices = [...services, ...services];
  return (
    <section
      ref={containerRef}
      className="py-24 bg-brand-navy relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/images/dotted.png')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="h-0.5 w-8 bg-brand-orange"></span>
            <h5 className="text-brand-orange font-bold uppercase tracking-widest text-sm">
              Our Services
            </h5>
            <span className="h-0.5 w-8 bg-brand-orange"></span>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
            WE ARE ALWAYS BEST FOR INDUSTRIAL SOLUTION
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed">
            Aenean fermentum congue risus ut blandit. Cras sed fermentum felis.
            Cras quis bibendum libero. Sed dictum, nibh at placerat rhoncus,
            felis enim interdum purus.
          </p>
        </div>
        <Swiper
          modules={[FreeMode, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          loopedSlides={5}
          freeMode={{
            enabled: true,
            sticky: false,
            momentumBounce: false,
          }}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-12"
        >
          {extendedServices.map((service, index) => (
            <SwiperSlide key={`${service.id}-${index}`}>
              <div className="group relative h-62.5 w-full overflow-hidden cursor-grab active:cursor-grabbing">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-red-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <div className="mb-6">
                    <div className="text-white text-5xl">{service.icon}</div>
                  </div>

                  <h4 className="text-white text-xl font-bold leading-snug">
                    {service.title}
                  </h4>

                  <div className="mt-4 w-12 h-1 bg-white"></div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ContentInner1;
