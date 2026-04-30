import { IoClose } from "react-icons/io5";

const VideoModal = ({ isOpen, onClose, videoId }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center bg-black/90 p-4">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white hover:text-brand-orange transition-colors"
      >
        <IoClose size={40} />
      </button>

      <div className="w-full max-w-5xl aspect-video bg-black shadow-2xl relative">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
