import { useState, useEffect, useRef } from "react";
import { BiChevronDown, BiPhone } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logoimg from "/images/logo-white.png";
import ShiftingButton from "../common/ShiftingButton";

/* ═══════════════════════════════════════════════════════════
   Header
═══════════════════════════════════════════════════════════ */
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [pagesExpanded, setPagesExpanded] = useState(false);

  /* ── sticky on scroll ── */
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── lock body scroll when drawer open ── */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = () => {
    setDrawerOpen(false);
    setPagesExpanded(false);
  };

  /* ── nav links (shared between desktop & drawer) ── */
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Blogs", to: "/blogs" },
  ];

  return (
    <>
      {/* ════════════════ HEADER ════════════════ */}
      <header
        className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${isSticky ? "-translate-y-12" : "translate-y-0"
          }`}
      >
        {/* ── decorative background strips (desktop only) ── */}
        <div className="absolute inset-0 w-full h-full flex flex-col pointer-events-none">
          {/* top bar strip */}
          <div className="h-12 w-full hidden md:flex">
            <div
              className="w-[24%] bg-brand-navy"
              style={{ clipPath: "polygon(0px 0px, 92% 0, 98% 100%, 0% 100%)" }}
            />
            <div className="flex-1 bg-brand-orange" />
          </div>

          {/* nav bar strip */}
          <div className="h-24 w-full flex bg-brand-navy shadow-lg">
            <div className="w-[24%] bg-logo-bg relative hidden md:block">
              <div className="absolute top-0 right-0 h-full w-1.5 bg-brand-orange origin-top skew-x-15" />
            </div>
            <div className="flex-1 bg-brand-navy" />
          </div>
        </div>

        {/* ── mobile: orange accent line under nav bar ── */}
        <div className="md:hidden absolute bottom-0 left-0 w-full h-[3px] bg-brand-orange z-10" />

        {/* ── CONTENT layer ── */}
        <div className="relative z-10 w-full">

          {/* ── DESKTOP TOP BAR ── */}
          <div
            className={`h-12 hidden md:flex items-center justify-end container mx-auto px-4 transition-opacity duration-300 ${isSticky ? "opacity-0" : "opacity-100"
              }`}
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

          {/* ── NAV BAR ── */}
          <div className="h-16 md:h-24 flex items-center container mx-auto px-4 gap-30">

            {/* Logo */}
            <div className="w-auto md:w-[20%] flex items-center flex-1 md:flex-none">
              <Link to="/" onClick={closeDrawer}>
                <img src={logoimg} alt="Indiro" className="w-32 md:w-48" />
              </Link>
            </div>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden md:flex items-center justify-between w-[70%]">
              <nav className="flex font-Oswald items-center gap-10 mr-12 text-white text-[16px] font-bold uppercase tracking-widest">
                <Link to="/" className="hover:text-brand-orange font-[Oswald] transition-colors">
                  Home
                </Link>
                <Link to="/about" className="hover:text-brand-orange font-[Oswald] transition-colors">
                  About
                </Link>

                {/* Pages dropdown */}
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
                        className="px-6 py-3 text-sm text-white hover:bg-[#0E1828] hover:text-white transition-colors border-b border-white/5 last:border-0"
                      >
                        Secret
                      </Link>
                      <Link
                        to="/blog-details"
                        className="px-6 py-3 text-sm text-white hover:bg-[#0E1828] hover:text-white transition-colors"
                      >
                        Blog Details
                      </Link>
                    </div>
                  </div>
                </div>

                <Link to="/blogs" className="hover:text-brand-orange font-[Oswald] transition-colors">
                  Blogs
                </Link>
              </nav>

              <ShiftingButton to="/contact" children="CONTACT US" />
            </div>

            {/* ── HAMBURGER (mobile only) ── */}
            <button
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              onClick={() => setDrawerOpen((o) => !o)}
              className="md:hidden flex-shrink-0 w-12 h-12 flex items-center justify-center bg-brand-orange text-white z-[1001]"
              style={{ position: "relative" }}
            >
              {drawerOpen ? (
                /* ✕ icon */
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="3" y1="3" x2="17" y2="17" />
                  <line x1="17" y1="3" x2="3" y2="17" />
                </svg>
              ) : (
                /* ☰ icon */
                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="0" y1="2" x2="22" y2="2" />
                  <line x1="0" y1="8" x2="22" y2="8" />
                  <line x1="0" y1="14" x2="22" y2="14" />
                </svg>
              )}
            </button>

          </div>{/* end nav bar */}
        </div>{/* end content layer */}
      </header>

      {/* ════════════════ MOBILE DRAWER ════════════════ */}

      {/* Dark overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 bg-black/60 z-[1000] md:hidden transition-opacity duration-300 ${drawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      />

      {/* Slide-in panel */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-[320px] bg-[#0e1828] z-[1001] md:hidden
          flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Logo inside drawer */}
        <div className="px-7 pt-8 pb-6">
          <Link to="/" onClick={closeDrawer}>
            <img src={logoimg} alt="Indiro" className="w-36" />
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col flex-1 px-0">

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeDrawer}
              className="
                px-7 py-4 text-white font-[Oswald] font-bold uppercase tracking-widest text-[17px]
                border-b border-white/10
                hover:text-brand-orange transition-colors duration-200
              "
            >
              {link.label}
            </Link>
          ))}

          {/* Pages — accordion */}
          <div className="border-b border-white/10">
            <button
              onClick={() => setPagesExpanded((v) => !v)}
              className="w-full flex items-center justify-between px-7 py-4 text-white font-[Oswald] font-bold uppercase tracking-widest text-[17px] hover:text-brand-orange transition-colors duration-200"
            >
              <span>Pages</span>
              <span
                className="w-9 h-9 bg-brand-orange flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                style={{ transform: pagesExpanded ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                <FaChevronRight size={13} color="white" />
              </span>
            </button>

            {/* Sub-links */}
            <div
              style={{
                maxHeight: pagesExpanded ? "200px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div className="bg-[#0a1220] flex flex-col">
                <Link
                  to="/secret"
                  onClick={closeDrawer}
                  className="px-10 py-3 text-white/80 text-[15px] font-[Oswald] uppercase tracking-wide border-b border-white/5 hover:text-brand-orange transition-colors"
                >
                  Secret
                </Link>
                <Link
                  to="/blog-details"
                  onClick={closeDrawer}
                  className="px-10 py-3 text-white/80 text-[15px] font-[Oswald] uppercase tracking-wide hover:text-brand-orange transition-colors"
                >
                  Blog Details
                </Link>
              </div>
            </div>
          </div>

        </nav>

        {/* Social icons at bottom */}
        <div className="px-7 py-8 flex items-center gap-4">
          {[
            { icon: <FaFacebookF size={15} />, href: "#" },
            { icon: <FaTwitter size={15} />, href: "#" },
            { icon: <FaLinkedinIn size={15} />, href: "#" },
            { icon: <FaInstagram size={15} />, href: "#" },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white hover:bg-white hover:text-brand-orange transition-colors duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>

      </div>{/* end drawer */}
    </>
  );
};

export default Header;
