import React from 'react';

const SidebarPostItem = ({ image, date, title }) => {
  return (
    <div className="flex items-center gap-4 mb-6 group cursor-pointer">
      {/* Thumbnail Image */}
      <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md bg-[#2a374a] flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        ) : (
          <span className="text-zinc-500 text-[10px] text-center px-2 uppercase leading-tight">
            No preview available
          </span>
        )}
      </div>

      {/* Post Info */}
      <div className="flex flex-col">
        <span className="text-[#fe4c1c]  text-sm uppercase tracking-wider mb-1">
          {date}
        </span>
        <h4 className="text-white font-[Oswald] text-lg font-bold uppercase leading-tight group-hover:text-[#fe4c1c] transition-colors line-clamp-2">
          {title}
        </h4>
      </div>
    </div>
  );
};

export default function RecentPostSidebar({ title, posts }) {
  return (
    <div className="w-full bg-[#192436] p-8 md:p-10 relative border-b-4 border-[#fe4c1c] mt-10">
      {/* Widget Title */}
      <div className="mb-6">
        <h3 className="text-white font-[Oswald] text-3xl font-bold uppercase tracking-wider">
          {title || "Recent Post"}
        </h3>
        <div className="w-full h-[1px] bg-zinc-700 mt-4" />
      </div>

      {/* Posts List */}
      <div className="flex flex-col">
        {posts && posts.slice(0, 3).map((post, index) => (
          <SidebarPostItem 
            key={index}
            image={post.image}
            date={post.date}
            title={post.title}
          />
        ))}
      </div>
    </div>
  );
}