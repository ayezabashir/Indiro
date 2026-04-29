import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';

const LOGOS = [
  { id: 1, src: "./images/logo1.jpg", name: "Status Group" },
  { id: 2, src: "./images/logo2.jpg", name: "Finance" },
  { id: 3, src: "./images/logo3.jpg", name: "Analysts center" },
  { id: 4, src: "./images/logo4.jpg", name: "Accession" },
  { id: 5, src: "./images/logo5.jpg", name: "Dynamic" },
  { id: 6, src: "./images/logo6.jpg",  name: "Capital" },
];

// Shared spring — instant exit, smooth entry
const EASE = [0.22, 1, 0.36, 1];
const DURATION = 0.42;

const LogoItem = ({ logo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden h-24 min-w-[200px] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── FRONT: exits upward when hovered ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center  "
        animate={hovered ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-[55%] w-auto object-contain"
        />
      </motion.div>

      {/* ── BACK: enters from below when hovered ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center "
        initial={{ y: "100%" }}
        animate={hovered ? { y: "0%" } : { y: "100%" }}
        transition={{ duration: DURATION, ease: EASE }}
      >
        <img
          src={logo.src}
          alt={logo.name}
          className="max-h-[55%] w-auto object-contain  "
        />
      </motion.div>
    </div>
  );
};

export default function LogoSection() {
  return (
    <section className="w-full bg-[#0b1119] py-16">
      <div className="max-w-7xl mx-auto px-11">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[2px]">
          {LOGOS.map((logo) => (
            <LogoItem key={logo.id} logo={logo} />
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="p-11">
        <div className="bg-[#FE4C1C] h-50 p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="p-4 border border-white/20">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h2 className="text-white font-[Oswald] text-[28px] font-bold uppercase">
              Sign up to get latest updates
            </h2>
          </div>

          <div className="w-full lg:w-1/2 flex bg-[#0E1828] text-white p-1">
            <input
              type="email"
              placeholder="Email Address..."
              className="flex-grow bg-transparent px-6 py-3 text-white outline-none"
            />
            <button className="bg-[#ff5e14] w-14 h-14 flex items-center justify-center text-white">
              <Mail />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}