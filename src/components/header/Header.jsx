import { useState, useEffect } from "react";
import { BiChevronDown, BiPhone } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";
import logoimg from "/images/logo-white.png";
import ShiftingButton from "../common/ShiftingButton";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-999 transition-all duration-300 ${isSticky ? "-translate-y-12" : "translate-y-0"}`}
    >
      <div className="absolute inset-0 w-full h-full flex flex-col pointer-events-none">
        <div className="h-12 w-full flex">
          <div
            className="w-[24%] bg-brand-navy"
            style={{ clipPath: "polygon(0px 0px, 92% 0, 98% 100%, 0% 100%)" }}
          ></div>
          <div className="flex-1 bg-brand-orange"></div>
        </div>

        <div className="h-24 w-full flex bg-brand-navy shadow-lg">
          <div className="w-[24%] bg-logo-bg relative">
            <div className="absolute top-0 right-0 h-full w-1.5 bg-brand-orange origin-top skew-x-15 "></div>
          </div>
          <div className="flex-1 bg-brand-navy"></div>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <div
          className={`h-12 flex items-center justify-end container mx-auto px-4 transition-opacity duration-300 ${isSticky ? "opacity-0" : "opacity-100"}`}
        >
          <div className="flex items-center gap-8 md:gap-15 text-white text-sm font-bold uppercase tracking-wide">
            <p className="hidden md:block">Mon 8am - 7pm - Sunday 10am - 4pm</p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <BiPhone size={18} /> (123) 456-7891
              </span>
              <span className="flex items-center gap-2">
                <BsEnvelope size={18} /> info@example.com
              </span>
            </div>
          </div>
        </div>

        <div className="h-24 flex items-center gap-30 container mx-auto px-4">
          <div className="w-[20%] flex items-center">
            <img src={logoimg} alt="Indiro" className="w-48" />
          </div>

          <div className="flex  items-center justify-between w-[70%]">
            <nav className="flex font-Oswald items-center gap-10 mr-12 text-white text-[16px] font-bold uppercase tracking-widest">
              <Link
                to="/"
                className="hover:text-brand-orange font-[Oswald] transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-brand-orange font-[Oswald] transition-colors"
              >
                About
              </Link>
              <div className="group relative flex items-center gap-1 cursor-pointer hover:text-brand-orange transition-colors py-8">
                <span className="font-[Oswald]">Pages</span>
                <BiChevronDown
                  size={22}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
                <div className="absolute top-full left-0 w-48 bg-brand-navy border-t-4 border-brand-orange shadow-2xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="flex flex-col py-2">
                    <Link
                      to="/secret"
                      className="px-6 py-3 text-sm text-white hover:bg-brand-orange hover:text-white transition-colors border-b border-white/5 last:border-0"
                    >
                      Secret
                    </Link>
                    <Link
                      to="/blog-details"
                      className="px-6 py-3 text-sm text-white hover:bg-brand-orange hover:text-white transition-colors"
                    >
                      Blog Details
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/blogs"
                className="hover:text-brand-orange font-[Oswald] transition-colors"
              >
                Blogs
              </Link>
            </nav>

            <ShiftingButton to="/contact" children="CONTACT US" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
