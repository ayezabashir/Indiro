// TeamSection.jsx
import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* ─────────────────────── constants ─────────────────────── */
const GAP = 28; // gap-7 = 1.75 rem = 28px

/* ─────────────────────── team data ─────────────────────── */
const TEAM = [
  {
    id: 1,
    name: "Daniel Bryan",
    role: "Surveyor",
    image:
      "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/team/pic1.jpg",
    socials: [
      { icon: <FaFacebookF />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaYoutube />, href: "#" },
    ],
  },
  {
    id: 2,
    name: "Colin Jameson",
    role: "Contractor",
    image:
      "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/team/pic2.jpg",
    socials: [
      { icon: <FaFacebookF />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaYoutube />, href: "#" },
    ],
  },
  {
    id: 3,
    name: "Mike Baxley",
    role: "Training",
    image:
      "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/team/pic3.jpg",
    socials: [
      { icon: <FaFacebookF />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaYoutube />, href: "#" },
    ],
  },
  {
    id: 4,
    name: "Sarah Mitchell",
    role: "Architect",
    image:
      "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/team/pic1.jpg",
    socials: [
      { icon: <FaFacebookF />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaYoutube />, href: "#" },
    ],
  },
  {
    id: 5,
    name: "James Carter",
    role: "Engineer",
    image:
      "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/team/pic2.jpg",
    socials: [
      { icon: <FaFacebookF />, href: "#" },
      { icon: <FaTwitter />, href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaYoutube />, href: "#" },
    ],
  },
];

/* ─────────────────────── TeamCard ─────────────────────── */
function TeamCard({ member, cardWidth }) {
  const iconsRef = useRef([]);
  const overlayRef = useRef(null);
  const tlRef = useRef(null);

  const handleEnter = () => {
    if (tlRef.current) tlRef.current.kill();
    gsap.set(overlayRef.current, { autoAlpha: 1 });
    const tl = gsap.timeline();
    tl.fromTo(
      iconsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.35, ease: "power3.out", stagger: 0.09 }
    );
    tlRef.current = tl;
  };

  const handleLeave = () => {
    if (tlRef.current) tlRef.current.kill();
    const tl = gsap.timeline({
      onComplete: () => gsap.set(overlayRef.current, { autoAlpha: 0 }),
    });
    tl.to(iconsRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      stagger: { each: 0.05, from: "end" },
    });
    tlRef.current = tl;
  };

  return (
    <div
      className="group relative flex flex-col cursor-pointer"
      style={{ width: cardWidth ? `${cardWidth}px` : "100%", flexShrink: 0 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          style={{ height: "540px" }}
          draggable={false}
          onError={(e) => {
            e.target.src = `https://placehold.co/400x540/1d2b3a/ffffff?text=${encodeURIComponent(
              member.name
            )}`;
          }}
        />

        {/* Social overlay — GSAP controlled */}
        <div
          ref={overlayRef}
          className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-2 pb-5 pt-16"
          style={{
            opacity: 0,
            visibility: "hidden",
            background:
              "linear-gradient(to top, rgba(13,20,32,0.55) 0%, transparent 100%)",
          }}
        >
          {member.socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              ref={(el) => (iconsRef.current[i] = el)}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center bg-[#0e1828] justify-center text-[#ff5e14] transition-colors duration-200 hover:text-white hover:bg-[#FE4C1C]"
              style={{
                width: "42px",
                height: "42px",
                fontSize: "16px",
                opacity: 0,
                transform: "translateY(40px)",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Name / Role box */}
      <div
        className="flex w-[80%] mx-auto flex-col z-20 relative bottom-10 items-center justify-center py-5 px-4"
        style={{ background: "#0e1828" }}
      >
        <h4
          className="text-white font-extrabold text-[28px] uppercase tracking-wide mb-1"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {member.name}
        </h4>
        <span
          className="text-[13px] font-semibold uppercase font-[Oswald]"
          style={{ color: "#ff5e14" }}
        >
          {member.role}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────── TeamSection ─────────────────────── */
export default function TeamSection() {
  const viewportRef = useRef(null); // clipping div
  const trackRef    = useRef(null); // scrolling div

  /* card width in px — updated by ResizeObserver */
  const [cardWidth, setCardWidth] = useState(null);

  /* RAF-based smooth scroll state */
  const currentX = useRef(0); // actual rendered X
  const targetX  = useRef(0); // where we want to be
  const rafId    = useRef(null);

  /* drag state */
  const drag = useRef({
    active: false,
    startX: 0,
    startScrollX: 0,
    velX: 0,
    lastX: 0,
    lastT: 0,
  });

  /* ── responsive card-width via ResizeObserver ── */
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;

    const update = () => {
      const w = vp.clientWidth;
      let visibleCards = 1;
      if (w >= 1024) visibleCards = 3;
      else if (w >= 640) visibleCards = 2;
      const cw = (w - GAP * (visibleCards - 1)) / visibleCards;
      setCardWidth(Math.floor(cw));
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(vp);
    return () => ro.disconnect();
  }, []);

  /* ── helpers ── */
  const stepWidth = useCallback(
    () => (cardWidth ? cardWidth + GAP : 0),
    [cardWidth]
  );

  const maxScroll = useCallback(() => {
    const track = trackRef.current;
    const vp    = viewportRef.current;
    if (!track || !vp) return 0;
    return Math.max(0, track.scrollWidth - vp.clientWidth);
  }, []);

  const clamp = useCallback(
    (v) => Math.min(0, Math.max(-maxScroll(), v)),
    [maxScroll]
  );

  /* ── RAF lerp loop ── */
  const startRaf = useCallback(() => {
    if (rafId.current) return;
    const loop = () => {
      const diff = targetX.current - currentX.current;
      if (Math.abs(diff) < 0.25) {
        currentX.current = targetX.current;
        if (trackRef.current)
          trackRef.current.style.transform = `translateX(${currentX.current}px)`;
        rafId.current = null;
        return;
      }
      currentX.current += diff * 0.1; // easing — feel free to tune
      if (trackRef.current)
        trackRef.current.style.transform = `translateX(${currentX.current}px)`;
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);
  }, []);

  const scrollTo = useCallback(
    (x) => {
      targetX.current = clamp(x);
      startRaf();
    },
    [clamp, startRaf]
  );

  /* ── arrow handlers ── */
  const goLeft  = useCallback(() => scrollTo(currentX.current + stepWidth()), [scrollTo, stepWidth]);
  const goRight = useCallback(() => scrollTo(currentX.current - stepWidth()), [scrollTo, stepWidth]);

  /* ── drag handlers ── */
  const onPointerDown = useCallback((e) => {
    // freeze inertia
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
      targetX.current = currentX.current;
    }
    drag.current = {
      active: true,
      startX: e.clientX,
      startScrollX: currentX.current,
      velX: 0,
      lastX: e.clientX,
      lastT: performance.now(),
    };
    if (trackRef.current) {
      trackRef.current.style.cursor = "grabbing";
    }
    e.currentTarget.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback(
    (e) => {
      if (!drag.current.active) return;
      const now = performance.now();
      const dt  = Math.max(now - drag.current.lastT, 1);

      drag.current.velX = (e.clientX - drag.current.lastX) / dt;
      drag.current.lastX = e.clientX;
      drag.current.lastT = now;

      const newX = clamp(drag.current.startScrollX + (e.clientX - drag.current.startX));
      currentX.current = newX;
      targetX.current  = newX;
      if (trackRef.current)
        trackRef.current.style.transform = `translateX(${newX}px)`;
    },
    [clamp]
  );

  const onPointerUp = useCallback(
    (e) => {
      if (!drag.current.active) return;
      drag.current.active = false;
      if (trackRef.current) trackRef.current.style.cursor = "grab";

      // momentum throw
      const momentum = drag.current.velX * 250;
      scrollTo(currentX.current + momentum);
    },
    [scrollTo]
  );

  /* cleanup */
  useEffect(() => {
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  /* ── arrow button shared style ── */
  const arrowStyle = (side) => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [side]: "-22px",
    zIndex: 30,
    width: "46px",
    height: "46px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ff5e14",
    color: "white",
    cursor: "pointer",
    transition: "background 0.22s ease, color 0.22s ease, transform 0.22s ease",
    outline: "none",
    padding: 0,
  });

  return (
    <section className="w-full pt-10 bg-[#131C27] ">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[2px] w-10 sm:w-14 bg-[#ff5e14]" />
            <h6 className="font-bold font-[Oswald] text-[#ff5e14] uppercase text-sm sm:text-base whitespace-nowrap">
              Our Experts
            </h6>
            <span className="h-[2px] w-10 sm:w-14 bg-[#ff5e14]" />
          </div>
          <h2
            className="text-white font-extrabold text-4xl lg:text-5xl uppercase tracking-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Team &amp; Advisory board
          </h2>
          <div
            className="mx-auto mt-4"
            style={{ width: "60px", height: "3px", background: "#ff5e14" }}
          />
        </div>

        {/* ── Carousel shell ── */}
        <div style={{ position: "relative" }}>

          {/* LEFT arrow */}
          <button
            aria-label="Previous"
            onClick={goLeft}
            style={arrowStyle("left")}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, {
                background: "#0e1828",
                color: "#fff",
                transform: "translateY(-50%) scale(1.1)",
              });
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, {
                background: "#FE4C1C",
                color: "white",
                transform: "translateY(-50%) scale(1)",
              });
            }}
          >
            <FaChevronLeft size={17} />
          </button>

          {/* RIGHT arrow */}
          <button
            aria-label="Next"
            onClick={goRight}
            style={arrowStyle("right")}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, {
                background: "#0e1828",
                color: "#fff",
                transform: "translateY(-50%) scale(1.1)",
              });
            }}
            onMouseLeave={(e) => {
              Object.assign(e.currentTarget.style, {
                 background: "#ff5e14",
                color: "#fff",
               
                transform: "translateY(-50%) scale(1)",
              });
            }}
          >
            <FaChevronRight size={17} />
          </button>

          {/* ── Viewport (overflow hidden) ── */}
          <div ref={viewportRef} style={{ overflow: "hidden" }}>
            {/* ── Draggable track ── */}
            <div
              ref={trackRef}
              style={{
                display: "flex",
                gap: `${GAP}px`,
                cursor: "grab",
                willChange: "transform",
                userSelect: "none",
                WebkitUserSelect: "none",
              }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              {TEAM.map((member) => (
                <TeamCard key={member.id} member={member} cardWidth={cardWidth} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}