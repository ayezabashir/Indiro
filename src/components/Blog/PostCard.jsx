import React, { useState } from 'react'; // useState import kiya
import { Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentPostCard = ({ 
  image, 
  date, 
  author, 
  title, 
  description ,id
}) => {
  // Image error handle karne ke liye state
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full bg-[#192436] h-[300px] flex flex-col sm:flex-row items-stretch overflow-hidden mb-6 group cursor-pointer transition-all duration-300 hover:shadow-2xl">
      
      {/* Post Image Section */}
      <div className="w-full sm:w-[39%] \ sm:h-auto overflow-hidden bg-[#F1F1F1] flex items-center justify-center">
        {!imgError && image ? (
          <img 
            src={image} 
            alt={title} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
        
          <div className="flex flex-col items-center justify-center p-4">
            <span className="text-[#9ca3af]  text-2xl md:text-3xl  text-center leading-tight opacity-60">
              No preview <br /> available
            </span>
          </div>
        )}
      </div>

      {/* Post Content Section */}
      <div className="w-full sm:w-[60%] p-6 md:p-8 flex flex-col justify-center">
        
        {/* Meta Info: Date & Author */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-xs md:text-sm uppercase tracking-widest text-[#9ca3af]">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <div className="flex items-center font-[Oswald] gap-2">
            <User size={14} />
            <span className="opacity-80">By {author}</span>
          </div>
        </div>

        {/* Title */}
        <Link to={`/blog-details/${id}`}>
           <h3 className="text-white font-[Oswald] text-xl md:text-[28px] font-bold leading-snug uppercase mb-4 group-hover:text-[#fe4c1c] transition-colors">
          {title}
        </h3>
    
        </Link>
       

        {/* Description/Excerpt */}
        <p className="text-[#9ca3af] text-sm md:text-base font-sans line-clamp-2 leading-relaxed opacity-80">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RecentPostCard;