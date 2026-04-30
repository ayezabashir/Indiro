import React from 'react';
import { Search } from 'lucide-react';

export default function BlogSearchWidget() {
  return (
    <div className="w-full  ">
      {/* Sidebar Widget Container */}
      <div className="bg-[#192436] p-8 md:p-10 relative group border-b-4 
      border-[#fe4c1c]">
        
        {/* Widget Title */}
        <div className="mb-6">
          <h3 className="text-white font-[Oswald] text-3xl font-bold uppercase tracking-wider">
            Search
          </h3>
          {/* Subtle Divider */}
          <div className="w-full h-[1px] bg-zinc-700 mt-4" />
        </div>

        {/* Search Input Box */}
        <div className="relative p-1 flex items-center bg-[#0b1119] border border-zinc-800 focus-within:border-[#fe4c1c] transition-all duration-300">
          <input
            type="text"
            placeholder="Search Here..."
            className="w-full bg-transparent px-6 py-5 text-zinc-400 outline-none placeholder:text-zinc-600 font-sans"
          />
          
          {/* Search Button */}
          <button 
            className="bg-[#fe4c1c] hover:bg-[#e6451a] text-white p-5 transition-colors duration-300 group-hover:scale-105 active:scale-95"
            aria-label="Search"
          >
            <Search size={24} strokeWidth={3} />
          </button>
        </div>

      </div>
    </div>
  );
}