import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import "swiper/css";
import "swiper/css/navigation";

const HeroContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 4;

  const slides = [
    { id: 1, image: "/images/hero1.jpg" },
    { id: 2, image: "/images/hero2.jpg" },
    { id: 3, image: "/images/hero3.jpg" },
    { id: 4, image: "/images/hero4.jpg" },
  ];

  return (
    <section className="relative pt-20 h-screen w-full bg-brand-navy overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        autoplay={{ delay: 2000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center transition-transform duration-1000 scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-brand-navy/40"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 right-[8%] z-40 flex">
        <button className="prev-btn bg-brand-orange active:bg-brand-navy hover:bg-brand-navy text-white w-20 h-20 flex items-center justify-center transition-colors cursor-pointer border-r border-white/10">
          <BiChevronLeft size={32} />
        </button>
        <button className="next-btn bg-brand-orange active:bg-brand-navy hover:bg-brand-navy text-white w-20 h-20 flex items-center justify-center transition-colors cursor-pointer">
          <BiChevronRight size={32} />
        </button>
      </div>
      <div className="absolute right-0 top-0 h-full w-[8%] z-20 bg-brand-navy flex flex-col items-center justify-center border-l border-white/5">
        <span className="text-white font-bold text-lg">0{activeIndex + 1}</span>

        <div className="hero-pagination-track my-6">
          <div
            className="hero-pagination-progress"
            style={{
              height: `${((activeIndex + 1) / totalSlides) * 100}%`,
            }}
          ></div>
        </div>
        <span className="text-zinc-500 font-bold text-lg">0{totalSlides}</span>
      </div>
    </section>
  );
};

export default HeroContent;
