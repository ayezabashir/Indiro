import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { FaArrowUp } from "react-icons/fa";
/* ─── Blog links ─────────────────────────────────────────────── */
const blogLinks = [
  { label: "We Heard You Wanted To Add SSH Keys", to: "/blogs/1" },
  { label: "Black Friday: All Of Our Deals In One Spot", to: "/blogs/2" },
  {
    label: "React.Js Lifecycle — Initialization, Mounting, Updating, And Unmounting",
    to: "/blogs/3",
  },
  {
    label: "LastPass Admits To Severe Data Breach, Encrypted Password Vaults Stolen",
    to: "/blogs/4",
  },
];

/* ─── Latest posts ───────────────────────────────────────────── */
const latestPosts = [
  { id: 1, date: "Feb. 17, 2026", title: "test", to: "/blogs/test" },
  { id: 2, date: "Oct. 23, 2025", title: "feqfefeff", to: "/blogs/feqfefeff" },
];

/* ─── Social buttons ─────────────────────────────────────────── */
const socials = [
  { Icon: BiLogoFacebook, href: "#", label: "Facebook" },
  { Icon: BiLogoLinkedin, href: "#", label: "LinkedIn" },
  { Icon: BiLogoTwitter, href: "#", label: "Twitter" },
];

/* ════════════════════════════════════════════════════════════════
   Footer
════════════════════════════════════════════════════════════════ */
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#192436" }} className="z-100 pt-30">

      {/* ── Main content area ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ══ Col 1 · Logo + Address + Socials ══ */}
        <div>
          {/* Big logo */}
          <div className="mb-6">

            <img src="../../public/images/logo-white.png" className="w-57"/>
          </div>

          {/* Address */}
          <p
            className=" text-[16px] text-white mb-8"
         
          >
            Kalpana Chawala Circle, 23, near Mokshita Dairy,
            Sector B, Rama Krishna Puram, Kota, Rajasthan 324009
          </p>

          {/* Social icon buttons */}
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex items-center justify-center w-10 h-10 bg-brand-orange text-white hover:bg-orange-600 transition-colors duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* ══ Col 2 · Blogs ══ */}
        <div>
          <h3
            className="text-white font-['Oswald'] text-[24px] font-black uppercase  mb-7"
        
          >
            Blogs
          </h3>

          <ul className="space-y-4">
            {blogLinks.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-gray-400 text-[16px] text-sm leading-snug hover:text-[#FCFCFC] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ══ Col 3 · Latest Posts ══ */}
        <div>
          <h3
            className="text-white font-[Oswald] text-[24px] font-black uppercase  mb-7"
      
          >
            Latest Posts
          </h3>

          <ul className="space-y-5">
            {latestPosts.map(({ id, date, title, to }) => (
              <li key={id} className="flex items-start gap-4">
                {/* Thumbnail placeholder */}
                <div
                  className="shrink-0 w-33 h-32 rounded-md flex items-center justify-center text-center"
                  style={{ backgroundColor: "#F1F1F1" }}
                >
                  <span className="text-gray-400 text-[15px] leading-snug px-2">
                    No preview
                    <br />
                    available
                  </span>
                </div>

                {/* Date + Title */}
                <div className="flex flex-col gap-1 pt-1">
                  <span
                    className="text-brand-orange text-[15px] font-bold uppercase tracking-widest"
                    style={{ fontFamily: "'Oswald', sans-serif" }}
                  >
                    {date}
                  </span>
                  <Link
                    to={to}
                    className="text-gray-300  text-[16px] font-[Oswald] hover:text-brand-white transition-colors duration-200  font-bold"
                  >
                    {title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────────── */}
        <div className="max-w-7xl flex items-center justify-center border-t-2 border-[#303A4A] mx-auto ">
      <div className="p-5 ">
          <p className="text-gray-400 text-[15px] tracking-wide text-center">
            &copy; {new Date().getFullYear()} Designed &amp; Developed by{" "}
            <a
              href="https://dexignzone.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white  hover:underline"
            >
              DexignZone
            </a>
          </p>
        </div>
      </div>

      {/* ── Scroll-to-top button ─────────────────────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className="fixed bottom-6 right-6 w-13 h-13 bg-brand-orange text-white flex items-center justify-center hover:bg-orange-600 transition-colors duration-200 z-50 shadow-lg cursor-pointer"
        style={{ fontSize: "18px" }}
      >
     < FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
