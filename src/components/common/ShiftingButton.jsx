import { Link } from "react-router-dom";

const ShiftingButton = ({ to, children, className }) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      <div className="absolute inset-0 border-2 border-white -translate-x-2 -translate-y-2 transition-all duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-10"></div>
      <Link
        to={to}
        className="relative block border border-white bg-brand-orange px-9 py-4 text-sm font-semibold uppercase text-[15px] text-white transition-transform active:scale-95"
      >
        {children}
      </Link>
    </div>
  );
};

export default ShiftingButton;
