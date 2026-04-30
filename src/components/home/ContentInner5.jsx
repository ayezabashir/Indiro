import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import VideoModal from "../common/VideoModal";

const ContentInner5 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      className="relative h-[70vh] min-h-[600px] flex items-center justify-center bg-fixed bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/contentinner5.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="relative inline-block mb-10">
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ping"></span>
          <span className="absolute inset-0 rounded-full bg-white/10 animate-pulse scale-150"></span>

          <button
            onClick={() => setIsVideoOpen(true)}
            className="relative cursor-pointer flex items-center justify-center w-24 h-24 rounded-full border-2 border-white text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group"
          >
            <FaPlay
              size={24}
              className="ml-1 group-hover:scale-110 transition-transform"
            />
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="h-[2px] w-8 bg-brand-orange"></span>
          <h5 className="text-brand-orange font-bold uppercase tracking-[0.2em] text-sm md:text-base">
            Watch Our Video
          </h5>
          <span className="h-[2px] w-8 bg-brand-orange"></span>
        </div>

        <h2 className="text-white text-2xl md:text-4xl font-bold uppercase mb-8 leading-tight max-w-3xl mx-auto">
          We Are Always Best For Industrial Solution
        </h2>

        <p className="text-white text-sm max-w-3xl mx-auto leading-relaxed">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration which don't look even slightly
          believable.
        </p>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId="y9j-BL5ocW8"
      />
    </section>
  );
};

export default ContentInner5;
