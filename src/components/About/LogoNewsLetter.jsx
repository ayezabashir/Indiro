import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewsLetter from "../common/NewsLetter";

const LOGOS = [
  { id: 1, src: "./images/logo1.jpg", name: "Status Group" },
  { id: 2, src: "./images/logo2.jpg", name: "Finance" },
  { id: 3, src: "./images/logo3.jpg", name: "Analysts center" },
  { id: 4, src: "./images/logo4.jpg", name: "Accession" },
  { id: 5, src: "./images/logo5.jpg", name: "Dynamic" },
  { id: 6, src: "./images/logo6.jpg", name: "Capital" },
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
        <NewsLetter />
      </div>
    </section>
  );
}
