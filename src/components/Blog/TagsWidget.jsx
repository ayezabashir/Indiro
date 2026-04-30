import React from 'react';

const TagsWidget = ({ title, tags }) => {
  return (
    <div className="w-full bg-[#192436] p-8 md:p-10 relative border-b-4 border-[#fe4c1c] mt-10">
      {/* Title Section */}
      <div className="mb-6">
        <h3 className="text-white font-[Oswald] text-3xl font-bold uppercase tracking-wider">
          {title || "All Tags"}
        </h3>
        <div className="w-full h-[1px] bg-zinc-700 mt-4" />
      </div>

      {/* Tags Container */}
      <div className="flex flex-wrap gap-3">
        {tags && tags.map((tag, index) => (
          <button
            key={index}
            className="px-5 py-2 rounded-md border-2 border border-zinc-700 text-zinc-400 font-sans text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#fe4c1c] hover:text-white hover:border-[#fe4c1c] active:scale-95"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagsWidget;