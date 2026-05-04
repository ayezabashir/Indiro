import React from 'react';
import { FaCalendarAlt, FaUser, FaFolder, FaEye, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const BlogDetailContent = ({ 
  image, 
  date, 
  author, 
  category, 
  views, 
  title, 
  content, 
  tags, 
  shareLinks 
}) => {
  // Default Data (Reference Image based)
  const defaultData = {
    image: "/images/wordpress-bg.jpg",
    date: "Dec. 4, 2022",
    author: "KHELESH MEHRA",
    category: "BACKEND",
    views: "1412",
    title: "Black Friday: All of Our Deals in One Spot",
    content: `
      <p>All the best Black Friday deals across our family of online solutions.</p>
      <p>You're already familiar with WordPress.com, but did you know we're part of a larger family of amazing products? Automattic provides a range of online solutions, from ecommerce shops to course-creation software to audience survey tools, and much, much more. No matter what's on your website wishlist this year, we've got you covered.</p>
      <p>After all, the best Black Friday deal isn't a disposable gadget or a trendy clothing item; it's something that will help you grow, and will grow along with you. Your website isn't just a website — it's the foundation for everything you hope to achieve.</p>
      <p>Below you'll find all the deals we're offering across our online ecosystem.</p>
    `,
    tags: ["#wp", "#wordpress"],
  };

  const displayData = {
    image: image || defaultData.image,
    date: date || defaultData.date,
    author: author || defaultData.author,
    category: category || defaultData.category,
    views: views || defaultData.views,
    title: title || defaultData.title,
    content: content || defaultData.content,
    tags: tags || defaultData.tags,
  };

  return (
    <div className=" text-zinc-300  mx-auto font-sans">
      {/* Featured Image */}
      <div className="w-full mb-8 overflow-hidden rounded-sm border border-zinc-800">
        <img 
          src={displayData.image} 
          alt={displayData.title} 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Meta Information */}
      <div className="flex flex-wrap items-center gap-6 text-[13px] font-bold uppercase tracking-widest text-zinc-500  mb-6 font-[Oswald]">
        <div className="flex font-[Roboto] text-[15px] text-white items-center gap-2">
          <FaCalendarAlt className="text-white" />
          <span>{displayData.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUser className="text-white"/>
          <span>BY {displayData.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaFolder className="text-white"/>
          <span>{displayData.category}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye className="text-white"/>
          <span>{displayData.views}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-white text-3xl md:text-5xl font-bold mb-8 leading-tight font-[Oswald] tracking-tight">
        {displayData.title}
      </h1>
<div 
  className="
   
  
    text-[18px] 

    text-left
 
  
    mb-12
  "
  dangerouslySetInnerHTML={{ __html: displayData.content }}
/>

      {/* Footer Section (Tags & Share) */}
      <div className="border-t border-dotted border-zinc-700 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Social Share */}
        <div className="flex items-center gap-4">
          <span className="text-white font-bold font-[Oswald] text-lg ">Share:</span>
          <div className="flex gap-2">
            <a href="#" className="w-10 h-10 bg-[#fb4e14] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 bg-[#fb4e14] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
              <FaLinkedinIn />
            </a>
            <a href="#" className="w-10 h-10 bg-[#fb4e14] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-3">
          {displayData.tags.map((tag, index) => (
            <span 
              key={index} 
              className="border-2 border-zinc-700 px-6 py-2 text-sm text-zinc-500 hover:border-zinc-500 hover:bg-brand-orange hover:text-white transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
};

export default BlogDetailContent;