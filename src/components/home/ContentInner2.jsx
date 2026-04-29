import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ShiftingButton from "../common/ShiftingButton";
import {  FaRegCircleCheck } from "react-icons/fa6";

const slideData = [
  {
    id: 1,
    company: "Ethan Hunt",
    completion: "February 5th, 2017",
    projectType: "Villa, Residence",
    architects: "Ventro",
    image: "/images/content2pic1.jpg",
  },
  {
    id: 2,
    company: "Mission Alpha",
    completion: "March 12th, 2020",
    projectType: "Industrial Complex",
    architects: "Indiro Design",
    image: "/images/content2pic2.jpg",
  },
];

const ContentInner2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSlideChange = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      const nextIndex =
        direction === "next"
          ? (currentIndex + 1) % slideData.length
          : (currentIndex - 1 + slideData.length) % slideData.length;

      setCurrentIndex(nextIndex);
      setIsAnimating(false);
    }, 400);
  };

  const currentSlide = slideData[currentIndex];

  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[3fr_2fr] bg-brand-navy overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundImage: `linear-gradient(to right, transparent 0%, var(--color-brand-navy) 20%), url('/images/content2bgimg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col justify-center px-8 lg:px-24 py-20 relative z-10">
        <div
          className={`transition-all duration-500 ease-out ${isAnimating ? "opacity-0 -translate-x-8" : "opacity-100 translate-x-0"}`}
        >
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-[1.1] mb-8 uppercase">
            We Are Always Best For Industrial Solution
          </h2>

          <p className="text-white text-lg mb-10 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration which don't look even slightly
            believable.
          </p>

          <div className="space-y-4 py-8">
            {[
              { label: "Company:", value: currentSlide.company },
              { label: "Completion:", value: currentSlide.completion },
              { label: "Project Type:", value: currentSlide.projectType },
              { label: "Architects:", value: currentSlide.architects },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between border-b border-white/40 pb-5 items-center group/item"
              >
                <span className="text-brand-orange flex items-center gap-3 font-bold uppercase text-base tracking-widest">
                  <FaRegCircleCheck />
                  {item.label}
                </span>
                <span className="text-zinc-300 font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          <ShiftingButton to="/" children="Read More" className="mt-10" />
        </div>
      </div>

      <div className="relative h-150 lg:h-auto border-t-4 border-t-brand-orange">
        <div
          className={`h-full w-full transition-all duration-700 ease-in-out ${isAnimating ? "opacity-0 scale-110" : "opacity-100 scale-100"}`}
        >
          <img
            src={currentSlide.image}
            alt="Industrial Worker"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 left-0 flex lg:bottom-10 lg:left-10">
          <button
            onClick={() => handleSlideChange("prev")}
            className="group flex h-16 w-16 cursor-pointer items-center justify-center bg-brand-orange text-white transition-colors duration-300 hover:bg-brand-navy"
          >
            <HiArrowLeft className="text-2xl transition-transform duration-300 group-hover:-translate-x-1" />
          </button>
          <button
            onClick={() => handleSlideChange("next")}
            className="ml-3 group flex h-16 w-16 cursor-pointer items-center justify-center bg-brand-orange text-white transition-colors duration-300  hover:bg-brand-navy"
          >
            <HiArrowRight className="text-2xl transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentInner2;
