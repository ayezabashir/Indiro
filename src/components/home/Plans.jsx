import { useRef } from "react";
import PricingCard from "./PricingCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const pricingData = [
  {
    category: "TV + INTERNET",
    title: "Power & Energy",
    image: "/images/plan1.jpg",
    price: "74",
    decimal: "99",
    features: [
      "Support and Analysis",
      "Suggesting Ingredients",
      "Measuring Performance",
      "Technical Consultation",
    ],
  },
  {
    category: "TV + INTERNET",
    title: "Petroleum Refinery",
    image: "/images/plan2.jpg",
    price: "84",
    decimal: "99",
    features: [
      "Strategy & Research",
      "Business & Finance Analysing",
      "User interface design",
      "Facebook ads marketing",
    ],
  },
  {
    category: "TV + INTERNET",
    title: "Oil & Gas",
    image: "/images/plan3.jpg",
    price: "99",
    decimal: "99",
    features: [
      "Strategy & Research",
      "Business & Finance Analysing",
      "User interface design",
      "Facebook ads marketing",
    ],
  },
];

const Plans = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".plans-header", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }).from(
        ".pricing-card-anim",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none "
        style={{
          backgroundImage: "url('/images/bg19.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container mx-auto px-6">
        <div className="plans-header text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-brand-orange"></span>
            <h5 className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs">
              CHOOSE YOUR PLAN
            </h5>
            <span className="h-px w-8 bg-brand-orange"></span>
          </div>
          <h2 className="text-white text-5xl md:text-6xl font-black uppercase tracking-tight">
            WE ARE ALWAYS BEST
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div key={index} className="pricing-card-anim">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
