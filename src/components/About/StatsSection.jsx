import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { label: "All Maintenance", value: 43, subtitle: "Construction Simulator" },
  { label: "Projects Completed", value: 73, subtitle: "Construction Simulator" },
  { label: "Work Employed", value: 67, subtitle: "Construction Simulator" },
  { label: "Work facilities", value: 95, subtitle: "Construction Simulator" },
];

const ORANGE = "#FE4C1C";
const DARK_BLUE = "#0f172a"; // Section background
const CIRCLE_BG = "#1e293b"; // Progress track background

const CircularProgress = ({ value }) => {
  const radius = 130;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* Background Circle (Track) */}
        <circle
          stroke={CIRCLE_BG}
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress Circle */}
        <motion.circle
          stroke={ORANGE}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          strokeLinecap="square" // Rectangular ends as seen in image
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      {/* Percentage Text */}
      <div className="absolute text-white font-[Oswald] text-5xl font-bold">
        {value}%
      </div>
    </div>
  );
};

export default function StatsSection() {
  return (
    <section className="bg-[#0E1828] py-34 px-10">
      <div>
        

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {STATS.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circular Chart */}
              <div className="mb-8">
                <CircularProgress value={item.value} />
              </div>
              
              {/* Labels */}
              <h3 className="text-white font-[Oswald] text-[28px] font-bold uppercase mb-2">
                {item.label}
              </h3>
              <p className="text-gray-500 text-[16px] font-semibold">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}