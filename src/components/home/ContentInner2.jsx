import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ShiftingButton from "../common/ShiftingButton";
import { FaRegCircleCheck } from "react-icons/fa6";
import SplitLayout from "../common/SplitLayout";

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
    <SplitLayout
      isAnimating={isAnimating}
      bgImage="/images/content2bgimg.jpg"
      leftContent={
        <>
          <h2 className="text-white text-2xl md:text-3xl font-bold leading-[1.1] mb-8 uppercase">
            We Are Always Best For Industrial Solution
          </h2>
          <p className="text-white text-lg mb-10 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available...
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
                className="flex justify-between border-b border-white/40 pb-5 items-center"
              >
                <span className="text-brand-orange flex items-center gap-3 font-bold uppercase text-base tracking-widest">
                  <FaRegCircleCheck /> {item.label}
                </span>
                <span className="text-zinc-300 font-medium">{item.value}</span>
              </div>
            ))}
          </div>
          <ShiftingButton to="/" children="Read More" className="mt-10" />
        </>
      }
      rightContent={
        <div className="relative h-full w-full border-t-4 border-t-brand-orange ">
          <img
            src={currentSlide.image}
            alt="Project"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 flex lg:bottom-10 lg:left-10">
            <button
              onClick={() => handleSlideChange("prev")}
              className="group flex h-16 w-16 items-center justify-center bg-brand-orange text-white"
            >
              <HiArrowLeft className="text-2xl transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => handleSlideChange("next")}
              className="ml-3 group flex h-16 w-16 items-center justify-center bg-brand-orange text-white"
            >
              <HiArrowRight className="text-2xl transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      }
    />
  );
};

export default ContentInner2;
