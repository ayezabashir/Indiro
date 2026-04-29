import { useRef } from "react";
import { gsap } from "gsap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const TEAM = [
  {
    id: 1,
    name: "Daniel Bryan",
    role: "Surveyor",
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/team/pic1.jpg",
    socials: [
      { icon: <FaFacebookF />, href: "#" },
      { icon: <FaTwitter />,   href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaYoutube />,   href: "#" },
    ],
  },
  {
    id: 2,
    name: "Colin Jameson",
    role: "Contractor",
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/team/pic2.jpg",
    socials: [
      { icon: <FaFacebookF />, href: "#" },
      { icon: <FaTwitter />,   href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaYoutube />,   href: "#" },
    ],
  },
  {
    id: 3,
    name: "Mike Baxley",
    role: "Training",
    image: "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/team/pic3.jpg",
    socials: [
      { icon: <FaFacebookF />, href: "#" },
      { icon: <FaTwitter />,   href: "#" },
      { icon: <FaInstagram />, href: "#" },
      { icon: <FaYoutube />,   href: "#" },
    ],
  },
];

function TeamCard({ member }) {
  const iconsRef = useRef([]);
  const overlayRef = useRef(null);
  const tlRef = useRef(null);

  const handleEnter = () => {
    if (tlRef.current) tlRef.current.kill();

    // First make overlay visible
    gsap.set(overlayRef.current, { autoAlpha: 1 });

    // Stagger icons in from bottom
    const tl = gsap.timeline();
    tl.fromTo(
      iconsRef.current,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: "power3.out",
        stagger: 0.09, // each icon 70ms after previous
      }
    );
    tlRef.current = tl;
  };

  const handleLeave = () => {
    if (tlRef.current) tlRef.current.kill();

    // Stagger icons out upward (reverse order for nice effect)
    const tl = gsap.timeline({
      onComplete: () => gsap.set(overlayRef.current, { autoAlpha: 0 }),
    });
    tl.to(iconsRef.current, {
      y: -30,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      stagger: { each: 0.05, from: "end" }, // reverse stagger on leave
    });
    tlRef.current = tl;
  };

  return (
    <div
      className="group relative flex flex-col cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* ── Image wrapper ── */}
      <div className="relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          style={{ height: "540px" }}
          onError={(e) => {
            // fallback placeholder if image 404s
            e.target.src = `https://placehold.co/400x340/1d2b3a/ffffff?text=${encodeURIComponent(member.name)}`;
          }}
        />

        {/* Social icons overlay — sits over bottom of image */}
        <div
          ref={overlayRef}
          className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-2 pb-5 pt-16"
          style={{
            opacity: 0,
            visibility: "hidden",
            background: "linear-gradient(to top, rgba(13,20,32,0.55) 0%, transparent 100%)",
          }}
        >
          {member.socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              ref={(el) => (iconsRef.current[i] = el)}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center text-[#ff5e14] transition-colors duration-200 hover:text-white hover:bg-[#FE4C1C]"
              style={{
                width: "42px",
                height: "42px",
                background: "#0e1828",
                fontSize: "16px",
                opacity: 0, // start hidden (GSAP controls)
                transform: "translateY(40px)",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* ── Name / Role bar ── */}
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
        <span className="text-[13px] font-semibold uppercase font-[Oswald]" style={{ color: "#ff5e14" }}>
          {member.role}
        </span>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section className="w-full py-20  bg-[#131C27]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="text-center mb-14">
           <div className="flex items-center justify-center gap-4 mb-4">
  {/* Left Line */}
  <span className="h-[2px] w-10 sm:w-14 bg-[#ff5e14]" ></span>
  
  <h6
    className="font-bold font-[Oswald]  text-[#ff5e14] uppercase text-sm sm:text-base whitespace-nowrap"
   
  >
    Our Experts
  </h6>

  {/* Right Line */}
  <span className="h-[2px] w-10 sm:w-14 bg-[#ff5e14]" ></span>
</div>
          <h2
            className="text-white font-extrabold text-4xl lg:text-5xl uppercase tracking-tight"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Team &amp; Advisory board
          </h2>
          {/* underline accent */}
          <div className="mx-auto mt-4" style={{ width: "60px", height: "3px", background: "#ff5e14" }} />
        </div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {TEAM.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}