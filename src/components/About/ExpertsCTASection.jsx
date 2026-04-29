import { Play } from "lucide-react";
import { useState } from "react";

const BG_IMAGE =
  "https://w3cms-cms-python-django-content-management-system.dexignzone.com/static/theme1/images/background/bg8.jpg";

const YOUTUBE_ID = "_FRZVScwggM";
const ORANGE = "#ff5e14";

export default function ExpertsCtaSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative w-full bg-cover bg-center py-20 md:py-28 lg:py-36"
      style={{ backgroundImage: `url('${BG_IMAGE}')` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
       <div className="flex items-center justify-center gap-4 mb-4">
  {/* Left Line */}
  <span className="h-[2px] w-10 sm:w-14" style={{ backgroundColor: ORANGE }}></span>
  
  <h6
    className="font-bold font-[Oswald] uppercase text-sm sm:text-base whitespace-nowrap"
    style={{ color: ORANGE }}
  >
    Our Experts
  </h6>

  {/* Right Line */}
  <span className="h-[2px] w-10 sm:w-14" style={{ backgroundColor: ORANGE }}></span>
</div>

        <h2 className="text-white font-[Oswald] font-extrabold leading-tight text-[48px] sm:text-4xl md:text-5xl lg:text-6xl mb-12 max-w-4xl mx-auto">
          Everyone Loves Got An Incredible Project Right Now.
        </h2>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Play video"
          className="group relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full text-white shadow-2xl transition-transform hover:scale-105"
          style={{ backgroundColor: ORANGE }}
        >
          {/* pulse rings */}
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-40"
            style={{ backgroundColor: ORANGE }}
            aria-hidden="true"
          />
          <span
            className="absolute -inset-3 rounded-full border opacity-30"
            style={{ borderColor: ORANGE }}
            aria-hidden="true"
          />
          <Play className="relative w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1" />
        </button>
      </div>

      {/* Video modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:opacity-70"
            >
              ×
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}