import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Mail, MailOpenIcon } from 'lucide-react';
import NewsLetter from '../common/NewsLetter'
/* ─────────────────── logo data ─────────────────── */
const LOGOS = [
  { id: 1, src: "./images/logo1.jpg", name: "Status Group" },
  { id: 2, src: "./images/logo2.jpg", name: "Finance" },
  { id: 3, src: "./images/logo3.jpg", name: "Analysts center" },
  { id: 4, src: "./images/logo4.jpg", name: "Accession" },
  { id: 5, src: "./images/logo5.jpg", name: "Dynamic" },
  { id: 6, src: "./images/logo6.jpg", name: "Capital" },
];

/* ── shared framer spring (unchanged from original) ── */
const EASE     = [0.22, 1, 0.36, 1];
const DURATION = 0.42;

/* ─────────────────── desktop LogoItem (unchanged) ─────────────────── */
const LogoItem = ({ logo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden h-24 min-w-[200px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* FRONT: exits upward when hovered */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={hovered ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        <img src={logo.src} alt={logo.name} className="max-h-[55%] w-auto object-contain" />
      </motion.div>

      {/* BACK: enters from below when hovered */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ y: "100%" }}
        animate={hovered ? { y: "0%" } : { y: "100%" }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        <img src={logo.src} alt={logo.name} className="max-h-[55%] w-auto object-contain" />
      </motion.div>
    </div>
  );
};



const MOBILE_CARD_W  = 140;  // px — logo card width on mobile
const MOBILE_GAP     = 28;   // px — gap between cards
const MOBILE_STEP    = MOBILE_CARD_W + MOBILE_GAP; // total slot width

function MobileMarquee() {
  /* We duplicate the logo list so the loop is seamless */
  const duplicated = [...LOGOS, ...LOGOS];

  const trackRef   = useRef(null);
  const isPaused   = useRef(false);
  const dragRef    = useRef({ active: false, startX: 0, offsetX: 0, baseX: 0, velX: 0, lastX: 0, lastT: 0 });
  const rafRef     = useRef(null);
  const [paused, setPaused] = useState(false);

  /* ── helpers ── */
  const setTrackOffset = (x) => {
    if (trackRef.current) trackRef.current.style.transform = `translateX(${x}px)`;
  };

  /* ── pointer drag ── */
  const onPointerDown = useCallback((e) => {
    isPaused.current = true;
    setPaused(true);
    if (rafRef.current) { cancelAnimationFrame(rafRef.current); rafRef.current = null; }

    /* Read current CSS-animation position via getComputedStyle */
    const matrix = new DOMMatrixReadOnly(
      getComputedStyle(trackRef.current).transform
    );
    const currentCssX = matrix.m41;

    dragRef.current = {
      active: true,
      startX: e.clientX,
      baseX: currentCssX,
      offsetX: 0,
      velX: 0,
      lastX: e.clientX,
      lastT: performance.now(),
    };
    trackRef.current.style.animationPlayState = "paused";
    trackRef.current.style.transform = `translateX(${currentCssX}px)`;
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!dragRef.current.active) return;
    const now = performance.now();
    const dt  = Math.max(now - dragRef.current.lastT, 1);
    dragRef.current.velX   = (e.clientX - dragRef.current.lastX) / dt;
    dragRef.current.lastX  = e.clientX;
    dragRef.current.lastT  = now;
    dragRef.current.offsetX = e.clientX - dragRef.current.startX;
    setTrackOffset(dragRef.current.baseX + dragRef.current.offsetX);
  }, []);

  const onPointerUp = useCallback(() => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;

    /* inertia throw then resume CSS animation */
    let x   = dragRef.current.baseX + dragRef.current.offsetX;
    let vel = dragRef.current.velX * 180;

    const inertia = () => {
      x  += vel;
      vel *= 0.92;
      setTrackOffset(x);
      if (Math.abs(vel) > 0.3) {
        rafRef.current = requestAnimationFrame(inertia);
      } else {
        /* hand back to CSS animation — resume */
        if (trackRef.current) {
          trackRef.current.style.transform = "";
          trackRef.current.style.animationPlayState = isPaused.current ? "paused" : "running";
        }
      }
    };
    rafRef.current = requestAnimationFrame(inertia);
  }, []);

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); }, []);

  /* One set of logos spans: count × step */
  const singleSetW = LOGOS.length * MOBILE_STEP;

  return (
    <>
      {/* inject keyframes + pause-on-hover rule */}
      <style>{`
        @keyframes mobile-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${singleSetW}px); }
        }
        .mobile-marquee-track {
          animation: mobile-marquee ${LOGOS.length * 1.8}s linear infinite;
          display: flex;
          gap: ${MOBILE_GAP}px;
          width: max-content;
          will-change: transform;
          cursor: grab;
        }
        .mobile-marquee-track.paused {
          animation-play-state: paused;
        }
        .mobile-marquee-track:active {
          cursor: grabbing;
        }
      `}</style>

      {/* clipping viewport */}
      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => { isPaused.current = true;  setPaused(true); }}
        onMouseLeave={() => { isPaused.current = false; setPaused(false); }}
      >
        <div
          ref={trackRef}
          className={`mobile-marquee-track${paused ? " paused" : ""}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {duplicated.map((logo, i) => (
            <div
              key={`${logo.id}-${i}`}
              style={{
                width: `${MOBILE_CARD_W}px`,
                height: "80px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                draggable={false}
                style={{
                  maxHeight: "55%",
                  width: "auto",
                  objectFit: "contain",
                  userSelect: "none",
                  pointerEvents: "none",
                }}
                onError={(e) => {
                  e.target.src = `https://placehold.co/${MOBILE_CARD_W}x60/0b1119/ffffff?text=${encodeURIComponent(logo.name)}`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* ─────────────────── main export ─────────────────── */
export default function LogoSection() {
  return (
    <section className="w-full relative bg-[#131C27] py-16">
      <div className="max-w-7xl mx-auto px-11">

        {/* ── Desktop logo grid (hidden on mobile) ── */}
        <div className="hidden md:grid grid-cols-3 pb-10 lg:grid-cols-6 gap-[2px]">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.id} logo={logo} />
          ))}
        </div>

        {/* ── Mobile marquee (hidden on md+) ── */}
        <div className="block md:hidden">
          <MobileMarquee />
        </div>

      </div>

      {/* ── Newsletter Section ── */}
   <NewsLetter />
    </section>
  );
}
