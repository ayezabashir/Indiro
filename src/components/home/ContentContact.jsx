import { useState, useRef } from "react";
import { FaPlay, FaRegCheckCircle } from "react-icons/fa";
import ShiftingButton from "../common/ShiftingButton";
import VideoModal from "../common/VideoModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const infoCards = [
  {
    title: "10+ Years of Experience",
    desc: "ISO 9001 Certification",
  },
  {
    title: "24/7 availability",
    desc: "call any day, anytime",
  },
  {
    title: "No Obligation Quote",
    desc: "Work with detailed reports",
  },
];

const ContentContact = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".animate-row-top", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }).from(
        ".animate-info-card",
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          immediateRender: false,
        },
        "-=0.5",
      );
      gsap.to(".animate-float-badge", {
        y: 15,
        x: 10,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope: sectionRef },
  );
const containerRef = useRef(null);
  // Hover state track karne ke liye (null matlab koi hover nahi hai)
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useGSAP(() => {
    gsap.fromTo(
      ".animate-info-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2, // Aik aik kar ke aane ke liye
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          scrub:true
        },
      }
    );
  }, { scope: containerRef });
  return (
    <section
      ref={sectionRef}
      className="py-24 px-2 lg:px-8 bg-brand-slate overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="animate-row-top grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/about18.jpg"
                alt="Industrial Workers"
                className="w-full grayscale-50 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-20 h-20 bg-brand-orange hover:bg-white cursor-pointer text-white hover:text-brand-orange ease-linear rounded-full flex items-center justify-center pl-1 hover:scale-110 transition-transform shadow-xl"
                >
                  <FaPlay size={24} />
                </button>
                <span className="text-white font-bold uppercase tracking-widest text-xs mt-4">
                  Video Presentation
                </span>
              </div>
            </div>

            <div className="animate-float-badge absolute -top-10 lg:-top-19 -left-6 z-20 bg-brand-orange p-1 lg:p-4 text-white w-30 h-20 lg:w-40 lg:h-48 flex-col shadow-2xl">
              <span className="lg:text-[55px] font-[Oswald] text-lg font-black">50+</span> <br/>
              <span className="lg:text-[25px] text-[16px] font-bold font-[Oswald] leading-tight lg:mt-2">
                Years of Experience
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <h5 className="text-brand-orange font-bold uppercase tracking-widest text-sm">
                Contact Us
              </h5>
              <span className="h-0.5 w-10 bg-brand-orange"></span>
            </div>
            <h2 className="text-white text-5xl md:text-6xl font-black mb-8 leading-tight uppercase">
              Industry United In Seeking Rate
            </h2>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Aenean fermentum congue risus ut blandit. Cras sed fermentum
              felis. Cras quis bibendum libero. Sed dictum, nibh at placerat
              rhoncus, felis enim interdum purus, in elementum nibh nisl et
              ligula.
            </p>
            <ShiftingButton to="/contact" children="CONTACT US" />
          </div>
        </div>

       <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {infoCards.map((card, idx) => {
  
        const isOrange = hoveredIdx !== null 
          ? hoveredIdx === idx 
          : idx === 1;

        return (
          <div
            key={idx}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            className={`animate-info-card group  w-full flex items-center gap-6 p-4 lg:p-10 transition-all duration-500 cursor-default
              ${isOrange ? "bg-brand-orange" : "bg-[#1a2332]"}
            `}
          >
            <div className="text-white transition-colors">
              <FaRegCheckCircle size={30} />
            </div>
            <div className="flex  flex-col">
              <h4 className="text-white font-black text-[20px] lg:text-[24px] leading-tight mb-1">
                {card.title}
              </h4>
              <span className={`text-sm uppercase font-bold tracking-wider transition-colors
                ${isOrange ? "text-white/80" : "text-zinc-500"}
              `}>
                {card.desc}
              </span>
            </div>
          </div>
        );
      })}
    </div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="y9j-BL5ocW8"
      />
    </section>
  );
};

export default ContentContact;
