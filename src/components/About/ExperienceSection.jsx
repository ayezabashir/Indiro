import { useRef, useState, useEffect, useLayoutEffect, useCallback } from "react";
import { gsap } from "gsap";
import { FaArrowRight } from "react-icons/fa";
import ShiftingButton from "../common/ShiftingButton";

const SERVICES = [
  {
    id: 1,
    title: "Industrial Automation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/services/pic3.jpg",
  },
  {
    id: 2,
    title: "Industrial Construction",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/services/pic1.jpg",
  },
  {
    id: 3,
    title: "Industrial Engineering",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/services/pic2.jpg",
  },
  {
    id: 4,
    title: "Industrial Maintenance",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/services/pic3.jpg",
  },
  {
    id: 5,
    title: "Industrial Safety",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/services/pic2.jpg",
  },
];

const BG_IMAGE =
  "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/background/bg9.jpg";
const ORANGE = "#ff5e14";
const GAP = 28; // px — must match style gap

export default function ExperienceSection() {
  // currentIndex = index of the FIRST visible card (0-based)
  // Max value = SERVICES.length - cardsToShow  →  e.g. 5-3 = 2  (so counter goes 1/3, 2/3, 3/3)
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const cardRefs = useRef([]);

  // ── helpers ────────────────────────────────────────────────────────────

  const getCardsToShow = useCallback(() => {
    if (!viewportRef.current) return 3;
    const w = viewportRef.current.offsetWidth;
    if (w < 600) return 1;
    if (w < 960) return 2;
    return 3;
  }, []);

  // Set every card's pixel width so GSAP math is always accurate
  const applyCardWidths = useCallback(() => {
    if (!viewportRef.current) return;
    const cardsToShow = getCardsToShow();
    const totalGap = GAP * (cardsToShow - 1);
    const cardWidth = (viewportRef.current.offsetWidth - totalGap) / cardsToShow;
    cardRefs.current.forEach((card) => {
      if (card) card.style.width = `${cardWidth}px`;
    });
  }, [getCardsToShow]);

  // X to slide to for a given index (shift by index cards)
  const getTargetX = useCallback((index) => {
    const firstCard = cardRefs.current[0];
    if (!firstCard) return 0;
    const cardWidth = firstCard.offsetWidth; // live read
    return -(index * (cardWidth + GAP));
  }, []);

  // Slide by shifting one card at a time
  const slideTo = useCallback(
    (index, animate = true) => {
      if (isAnimating.current) return;

      const cardsToShow = getCardsToShow();
      // max index = total cards - visible cards  →  counter = 1/(maxIndex+1)
      const maxIndex = SERVICES.length - cardsToShow;

      let next = index;
      if (next < 0) next = maxIndex;       // wrap to end
      if (next > maxIndex) next = 0;       // wrap to start

      const targetX = getTargetX(next);

      if (animate) {
        isAnimating.current = true;
        gsap.to(trackRef.current, {
          x: targetX,
          duration: 0.72,
          ease: "power3.inOut",           // butter smooth marquee feel
          onComplete: () => { isAnimating.current = false; },
        });
      } else {
        gsap.set(trackRef.current, { x: targetX });
      }

      setCurrentIndex(next);
    },
    [getCardsToShow, getTargetX]
  );

  // ── init ───────────────────────────────────────────────────────────────

  useLayoutEffect(() => {
    applyCardWidths();
    gsap.set(trackRef.current, { x: 0 });
  }, [applyCardWidths]);

  // ── resize ─────────────────────────────────────────────────────────────

  useEffect(() => {
    let timer;
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        applyCardWidths();
        const cardsToShow = getCardsToShow();
        const maxIndex = SERVICES.length - cardsToShow;
        const safeIndex = Math.min(currentIndex, maxIndex);
        setCurrentIndex(safeIndex);
        gsap.set(trackRef.current, { x: getTargetX(safeIndex) });
      }, 120);
    };
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("resize", handleResize); clearTimeout(timer); };
  }, [applyCardWidths, getCardsToShow, getTargetX, currentIndex]);

  // maxIndex e.g. 5 cards - 3 visible = 2  →  total positions = 3  (1/3, 2/3, 3/3)
  const cardsToShow = getCardsToShow();
  const maxIndex = SERVICES.length - cardsToShow;
  const totalPositions = maxIndex + 1; // = 3 when 5 cards, 3 visible

  // ── render ─────────────────────────────────────────────────────────────

  return (
    <section
      className="relative w-full py-20 lg:py-32 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('${BG_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-[#3D4552]" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 items-center">
          <div>
            <h3 className="text-white font-[Oswald] tracking-wider font-extrabold text-4xl lg:text-5xl">
              We Are Always Best For <br /> Industrial Solution
            </h3>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-7xl font-bold leading-none" style={{ color: ORANGE }}>
                18
              </span>
              <div className="text-white">
                <p className="text-xs uppercase font-bold opacity-50 tracking-widest">Years Of</p>
                <p className="text-[28px] font-bold uppercase text-gray-300">Experience</p>
              </div>
            </div>
          </div>

          <div className="lg:pl-10">
            <p className="text-white/65 text-[16px] mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud co.
            </p>
       <ShiftingButton to='/about'>About Us</ShiftingButton>
          </div>
        </div>

        {/* ── Slider ── */}
        <div ref={viewportRef} className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex will-change-transform"
            style={{ gap: `${GAP}px` }}
          >
            {SERVICES.map((s, i) => (
              <div
                key={s.id}
                ref={(el) => (cardRefs.current[i] = el)}
                className="flex-none bg-[#192436] p-8 flex flex-col group cursor-pointer transition-colors duration-400 hover:bg-[#ff5e14]"
              >
                <h4 className="text-white font-[Oswald] text-[28px] font-bold uppercase border-b border-white/10 pb-4 mb-4">
                  {s.title}
                </h4>
                <p className="text-[16px] mb-6 leading-relaxed text-white/50 group-hover:text-white/90 transition-colors flex-grow">
                  {s.desc}
                </p>
                <div className="overflow-hidden aspect-video">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-32 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                  <button className="flex items-center gap-3 text-white font-[Oswald] font-bold text-[15px] tracking-widest uppercase whitespace-nowrap">
                    Read More
                    <span className="w-5 h-5 rounded-full bg-[#ff5e14] group-hover:bg-white flex items-center justify-center transition-colors flex-shrink-0">
                      <FaArrowRight className="text-white group-hover:text-[#ff5e14] text-[10px] transition-colors" />
                    </span>
                  </button>
                  <div className="h-px flex-grow bg-white/30" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-10 mt-12">
          <button
            onClick={() => slideTo(currentIndex - 1)}
            className="group transition-all hover:scale-110 active:scale-90"
            aria-label="Previous"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="text-white/35 group-hover:text-[#ff5e14] transition-colors">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* 1/3 → 2/3 → 3/3 */}
          <div className="font-[Oswald] text-2xl font-bold tracking-[4px] select-none">
            <span style={{ color: ORANGE }}>{currentIndex + 1}</span>
            <span className="mx-2 text-white/20">/</span>
            <span className="text-white/40">{totalPositions}</span>
          </div>

          <button
            onClick={() => slideTo(currentIndex + 1)}
            className="group transition-all hover:scale-110 active:scale-90"
            aria-label="Next"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              className="text-white/35 group-hover:text-[#ff5e14] transition-colors">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}