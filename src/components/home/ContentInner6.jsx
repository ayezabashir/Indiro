import { useRef } from "react";
import ShiftingButton from "../common/ShiftingButton";
import { FaRegCircleCheck } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const engineeringFields = [
  "Power & Energy",
  "Chemical Engineering",
  "Energy & Power Engineering",
  "Information architecture",
  "Oil & Gas Engineering",
  "User interface design",
  "Civil Enginering",
  "Mining Engineering",
];

const ContentInner6 = () => {
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

      tl.from(".animate-case-left", {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }).from(
        ".animate-case-right",
        {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.7",
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-brand-navy overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none filter grayscale-100"
        style={{
          backgroundImage: "url('/images/content6bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-case-left max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <h5 className="text-brand-orange font-bold uppercase tracking-widest text-base">
                Latest Case Studies
              </h5>
              <span className="h-0.5 w-10 bg-brand-orange"></span>
            </div>

            <h2 className="text-white text-4xl md:text-5xl font-bold mb-10 leading-tight uppercase">
              WE ARE ALWAYS BEST INDUSTRIAL SOLUTION
            </h2>

            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Aenean fermentum congue risus ut blandit. Cras sed fermentum
              felis. Cras quis bibendum libero. Sed dictum, nibh at placerat
              rhoncus, felis enim interdum purus, in elementum nibh nisl et
              ligula. Aliquam a sollicitudin orci.
            </p>

            <ShiftingButton to="/" children="VIEW MORE" />
          </div>

          <div className="animate-case-right relative aspect-[5/4] w-full overflow-hidden shadow-2xl">
            <div className="absolute inset-0 grid grid-cols-[1.2fr_1fr] bg-brand-navy">
              <div className="flex flex-col justify-center p-8 md:p-12 space-y-5">
                {engineeringFields.map((field, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <span className="text-brand-orange text-lg">
                      <FaRegCircleCheck />
                    </span>
                    <span className="text-white font-bold text-sm md:text-base group-hover:text-brand-orange transition-colors">
                      {field}
                    </span>
                  </div>
                ))}
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="/images/about17.jpg"
                  alt="Industrial engineer working with tablet"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentInner6;
