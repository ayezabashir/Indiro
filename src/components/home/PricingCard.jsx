import { FaCheck } from "react-icons/fa";
import ShiftingButton from "../common/ShiftingButton";

const PricingCard = ({ image, category, title, features, price, decimal }) => {
  return (
    <div className="group bg-[#111827] flex flex-col h-full transition-all duration-500 hover:-translate-y-2 border border-white/5 shadow-2xl">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-10 flex flex-col grow">
        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-2">
          {category}
        </span>
        <h3 className="text-white text-3xl font-bold mb-8">{title}</h3>

        <div className="w-full h-px bg-white/10 mb-8" />

        <ul className="space-y-4 mb-10 grow">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-zinc-400 group-hover:text-zinc-200 transition-colors"
            >
              <FaCheck className="text-white text-sm" />
              <span className="text-sm font-medium uppercase tracking-wider">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-start text-white mb-10">
          <span className="text-4xl font-bold mt-1">$</span>
          <span className="text-7xl font-black tracking-tighter">{price}</span>
          <div className="flex flex-col ml-1">
            <span className="text-2xl font-bold border-b-2 border-white">
              .{decimal}
            </span>
            <span className="text-xl font-bold tracking-widest text-zinc-500 mt-1">
              /MO
            </span>
          </div>
        </div>

        <ShiftingButton
          to="/contact"
          children="CONTACT US"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default PricingCard;
