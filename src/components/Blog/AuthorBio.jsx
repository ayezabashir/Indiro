import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const AuthorBio = ({ authorImage, authorName, socialLinks }) => {
  // Default values based on the reference image
  const defaultAuthor = {
    name: "KheleshMehra",
    image: "/images/author.jpg", // Replace with your image path
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
    <div className="bg-[#152236] mt-30 p-10 max-w-5xl mx-auto flex items-center gap-8 border-y border-zinc-800/50">
      {/* Author Avatar */}
      <div className="w-32 h-32 flex-shrink-0 border-2 border-zinc-800">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Author Details */}
      <div className="flex flex-col gap-4">
        <h3 className="text-white text-3xl font-bold font-[Oswald] tracking-tight leading-none">
          {name}
        </h3>

        {/* Social Icons */}
        <div className="flex gap-3">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="w-10 h-10 bg-[#fb4e14] flex items-center justify-center text-white text-sm hover:opacity-80 transition-opacity"
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