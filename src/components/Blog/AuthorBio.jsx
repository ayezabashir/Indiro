import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const AuthorBio = ({ authorImage, authorName, socialLinks }) => {
  // Default values
  const defaultAuthor = {
    name: "KheleshMehra",
    image: "/images/author.jpg", 
    socials: [
      { icon: <FaFacebookF />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
      { icon: <FaLinkedinIn />, url: "#" },
    ]
  };

  const name = authorName || defaultAuthor.name;
  const image = authorImage || defaultAuthor.image;
  const socials = socialLinks || defaultAuthor.socials;

  return (
    <div className="bg-[#152236] mt-10 md:mt-30 p-6 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8 border-y border-zinc-800/50">
      
      {/* Author Avatar */}
      <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 border-2 border-zinc-800 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Author Details */}
      <div className="flex flex-col items-center md:items-start gap-4">
        <h3 className="text-white text-2xl md:text-3xl font-bold font-[Oswald] tracking-tight leading-none uppercase">
          {name}
        </h3>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="w-9 h-9 md:w-10 md:h-10 bg-[#fb4e14] flex items-center justify-center text-white text-sm hover:opacity-80 transition-opacity"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;