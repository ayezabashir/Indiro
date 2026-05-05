import { useState } from "react";
import SplitLayout from "../common/SplitLayout";
import ShiftingButton from "../common/ShiftingButton";

const tabData = {
  women: {
    description:
      "Aenean fermentum congue risus ut blandit. Cras sed fermentum felis. Cras quis bibendum libero. Sed dictum, nibh at placerat rhoncus, felis enim interdum purus.",
    users: "923",
    brands: "37",
  },
  men: {
    description:
      "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
    users: "1,450",
    brands: "52",
  },
  children: {
    description:
      "Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent.",
    users: "310",
    brands: "12",
  },
};

const ContentInner4 = () => {
  const [activeTab, setActiveTab] = useState("women");
  const [isAnimating, setIsAnimating] = useState(false);

  const tabs = [
    { id: "women", label: "Women Collection" },
    { id: "men", label: "Men Collection" },
    { id: "children", label: "Children Collection" },
  ];

  const handleTabChange = (id) => {
    if (id === activeTab || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(id);
      setIsAnimating(false);
    }, 400);
  };

  const currentContent = tabData[activeTab];

  return (
    <SplitLayout
      bgImage="/images/content4bgimg.jpg"
      containerClassName="lg:grid-cols-[5fr_4fr] lg:py-20"
      isAnimating={isAnimating}
      rightClassName="border-t-0 flex flex-col gap-4 pl-8 lg:pl-0 pr-8"
      leftContent={
        <div >
          <div className="flex items-center gap-3 mb-4">
            <h5 className="text-brand-orange font-bold uppercase tracking-widest text-sm">
              Latest Case Studies
            </h5>
            <span className="h-0.5 w-10 bg-brand-orange"></span>
          </div>

          <h2 className="text-white text-2xl md:text-[44.8px] font-bold mb-10 leading-tight uppercase">
            Industries Provide <br /> Best Services
          </h2>

          <div className="flex border border-white/10 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 lg:px-6 py-4 font-[Oswald] text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-brand-orange text-white"
                    : "text-zinc-400 hover:text-white bg-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <p className="text-zinc-400 text-lg mb-10 leading-relaxed min-h-25">
            {currentContent.description}
          </p>

          <div className="flex lg:flex-row flex-col gap-12 mb-12">
            <div className="flex   items-start font-[Oswald] gap-4">
              <span className="text-white text-5xl font-bold transition-all duration-300">
                {currentContent.users}
              </span>
              <div className="text-white text-[20px] font-[Oswald] text-sm leading-tight uppercase  whitespace-nowrap font-bold mt-1">
                Thousands of users
                <p className="text-[14px] font-normal lowercase opacity-60">
                  Integer dui metus, venenatis
                </p>
              </div>
            </div>
            <div className="flex  lg:w-[50%]   items-start gap-2 flex-nowrap shrink-0">
              <span className="text-white text-5xl font-bold transition-all duration-300">
                {currentContent.brands}
              </span>
              <div className="text-white text-[20px] font-[Oswald]  uppercase font-bold mt-1">
                Brands  collection
                <p className="text-[14px] font-normal lowercase opacity-60">
                  Pellentesque et nisl quis
                </p>
              </div>
            </div>
          </div>

          <ShiftingButton to="/" children="VIEW MORE" className="mt-4" />
        </div>
      }
      rightContent={
        <>
          <div className="my-5">
            <img
              src="/images/content4img1.jpg"
              alt="Industrial Team"
              className="w-full h-full object-cover grayscale-30 hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="my-5">
            <img
              src="/images/content4img2.jpg"
              alt="Industrial Work"
              className="w-full h-full object-cover grayscale-30 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </>
      }
    />
  );
};

export default ContentInner4;
