import { Mail } from 'lucide-react';

const NewsLetter = () => {
  return (
    <>
      <div className="bg-[#FE4C1C] h-50 p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="p-4 border border-white/20">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>
          <h2 className="text-white font-[Oswald] text-[28px] font-bold uppercase">
            Sign up to get latest updates
          </h2>
        </div>

        <div className="w-full lg:w-1/2 flex bg-[#0E1828] text-white p-1">
          <input
            type="email"
            placeholder="Email Address..."
            className="flex-grow bg-transparent px-6 py-3 text-white outline-none"
          />
          <button className="bg-[#ff5e14] w-14 h-14 flex items-center justify-center text-white">
            <Mail />
          </button>
        </div>
      </div>
    </>
  );
}

export default NewsLetter