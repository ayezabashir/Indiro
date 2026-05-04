import React, { useState, useEffect } from "react";
import { BiChevronDown, BiPhone } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram, 
  FaChevronRight,

  FaChevronDown
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoimg from "/images/logo-white.png";
import ShiftingButton from "../common/ShiftingButton";

const Header2 = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pagesExpanded, setPagesExpanded] = useState(false);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Blogs", to: "/blogs" },
  ];

  const closeDrawer = () => {
    setDrawerOpen(false);
    setPagesExpanded(false);
  };

  return (
    <>
 
      <header 
        className={`w-full fixed top-0 z-[99999] left-0 transition-all duration-500 hidden md:flex gap-4 justify-between h-39 
        ${isSticky ? "-translate-y-12 shadow-2xl" : "translate-y-0"}`}
      >
        {/* Left Section: Logo & Skew */}
        <div className="relative w-[30%]">
          <div className={`w-[80%]  bg-[#2D384A] flex  px-10 pointer-events-auto
           ${isSticky ? 'h-[95%]  items-end pb-4' : 'h-full items-center'} transition-all duration-300`}>
            <img src={logoimg} alt="Indiro" className="w-32 md:w-48" />
          </div>
          <div className={`absolute z-999 top-0 right-9 w-[20%] bg-[#2D384A] skew-x-[20deg] h-full
           ${isSticky ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}></div>
        </div>

        {/* Right Section: Top Info & Skew */}
        <div className={`relative w-[70%] ${isSticky ? "hidden" : "block"}`}>
          <div className={`w-full text-white h-full z-888 bg-brand-orange flex items-start justify-between px-10 py-2 pointer-events-auto transition-opacity duration-300 `}>
            <p className="z-9999 relative -left-7">Mon 8am - 7pm - Sunday 10am - 4pm</p>
            <div className="flex items-center gap-6">
              <span className="flex font-bold  items-center gap-2">
                <BiPhone size={18} fill="white" /> Phone Line:(123) 456-7891
              </span>
              <span className="flex font-bold items-center gap-2">
                <BsEnvelope size={18} fill="white" /> info@example.com
              </span>
            </div>
          </div>
          <div className="absolute z-999 top-0 -left-8 w-[10%] bg-brand-orange skew-x-[20deg] h-full"></div>
        </div>

        {/* Navigation Bar (The Dark Bottom Part) */}
        <div className="absolute right-0 bottom-2 z-99999 h-[70%] w-[75%]">
          <div className="w-full h-full bg-[#192436] flex items-center justify-between px-10 pointer-events-auto">
            <nav className="flex font-[Oswald] z-9999 font-Oswald items-center gap-10 mr-12 text-white text-[16px] font-bold uppercase tracking-widest">
              <Link to="/" className="hover:text-brand-orange transition-colors">Home</Link>
              <Link to="/about" className="hover:text-brand-orange transition-colors">About</Link>

              {/* Pages Dropdown */}
              <div className="group relative flex items-center gap-1 cursor-pointer hover:text-brand-orange transition-colors py-8">
                <span className="">Pages</span>
                <BiChevronDown size={22} className="transition-transform duration-300 group-hover:rotate-180" />
                <div className="absolute top-full left-0 w-48 bg-brand-navy border-t-4 border-brand-orange shadow-2xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                  <div className="flex flex-col py-2">
                    <Link to="/secret" className="px-6 py-3 text-sm text-white hover:bg-[#0E1828] transition-colors border-b border-white/5">Secret</Link>
                    <Link to="/blog-details/1" className="px-6 py-3 text-sm text-white hover:bg-[#0E1828] transition-colors">Blog Details</Link>
                  </div>
                </div>
              </div>

              <Link to="/blogs" className="hover:text-brand-orange transition-colors">Blogs</Link>
            </nav>
            <ShiftingButton to="/contact">CONTACT US</ShiftingButton>
          </div>
          {/* SKEW Decorative for Nav */}
          <div className="absolute z-999 top-0 bg-[#192436] -left-8 w-[20%] skew-x-[20deg] border-l-2 border-brand-orange h-full"></div>
        </div>
      </header>

      {/* ════════════════ MOBILE HEADER  ════════════════ */}
     <header className="md:hidden fixed top-0 left-0 w-full h-20 bg-[#192436] flex z-[9999]">
        {/* Left Side: Logo Area */}
        <div className="relative w-[50%] bg-[#2D384A] flex items-center px-4">
          <Link to="/" onClick={closeDrawer}>
            <img src={logoimg} alt="Indiro" className="w-28 relative z-10" />
          </Link>
          {/* Skew Divider */}
          <div className="absolute top-0 -right-2 w-5 h-full bg-[#2D384A] skew-x-[15deg] z-0"></div>
        </div>

        {/* Right Side: Hamburger Area */}
        <div className="flex-1 flex items-center justify-end px-4 relative">
          {/* Orange Border Line */}
          <div className="absolute top-0 left-1 w-[6px] h-full bg-brand-orange skew-x-[15deg]"></div>
          
          <button 
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="w-12 h-12 bg-brand-orange flex flex-col items-center justify-center gap-1.5 transition-all active:scale-95"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </div>
      </header>

      {/* ════════════════ MOBILE DRAWER (Exact Image Style) ════════════════ */}
      <div 
        className={`fixed inset-0 bg-black/70 z-[10000] md:hidden transition-opacity duration-300 ${drawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={closeDrawer} 
      />
      
      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-[#192436] z-[10001] md:hidden transition-transform duration-500 ease-out ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-8 flex flex-col h-full">
           <img src={logoimg} alt="Logo" className="w-36 mb-12" />
           
           <nav className="flex flex-col">
              <Link to="/" onClick={closeDrawer} className="text-white font-Oswald text-lg font-bold uppercase py-4 border-b border-white/5">Home</Link>
              <Link to="/about" onClick={closeDrawer} className="text-white font-Oswald text-lg font-bold uppercase py-4 border-b border-white/5">About</Link>
              
              {/* Pages Accordion */}
              <div className="border-b border-white/5">
                <button 
                  onClick={() => setPagesExpanded(!pagesExpanded)} 
                  className={`w-full flex items-center justify-between py-4 text-white font-Oswald text-lg font-bold uppercase transition-colors ${pagesExpanded ? 'text-brand-orange' : ''}`}
                >
                  Pages 
                  <div className={`p-2 bg-white/5 transition-transform ${pagesExpanded ? 'rotate-180' : ''}`}>
                    <FaChevronDown size={14} />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${pagesExpanded ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col gap-4 pt-2">
                    <Link to="/secret" onClick={closeDrawer} className="text-white/80 font-Oswald uppercase flex items-center gap-2 hover:text-brand-orange">
                       <FaChevronRight size={10} className="text-brand-orange"/> Secret
                    </Link>
                    <Link to="/blog-details/1" onClick={closeDrawer} className="text-white/80 font-Oswald uppercase flex items-center gap-2 hover:text-brand-orange">
                       <FaChevronRight size={10} className="text-brand-orange"/> Blog Detail
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/blogs" onClick={closeDrawer} className="text-white font-Oswald text-lg font-bold uppercase py-4 border-b border-white/5">Blogs</Link>
           </nav>

           {/* Social Icons at Bottom */}
           <div className="mt-10 flex gap-3">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
                <div key={i} className="w-11 h-11 rounded-full bg-brand-orange flex items-center justify-center text-white cursor-pointer hover:bg-white hover:text-brand-orange transition-all">
                  <Icon size={16} />
                </div>
              ))}
           </div>
        </div>
      </div>
    </>
  );
};

export default Header2;