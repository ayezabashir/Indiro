import React from 'react';
import { Play } from 'lucide-react';

const CategoryItem = ({ label, subCategories, active }) => {
  return (
    <li className="group">
      <div className="flex items-center gap-3 py-1 cursor-pointer group-hover:pl-2 transition-all duration-300">
        <Play 
          size={10} 
          className={`fill-[#fe4c1c] text-[#fe4c1c] group-hover:scale-125 transition-transform`} 
        />
        <span className={` uppercase text-[16px] transition-colors ${active ? 'text-[#fe4c1c]' : 'text-zinc-400 group-hover:text-white'}`}>
          {label}
        </span>
      </div>

      {subCategories && subCategories.length > 0 && (
        <ul className="pl-8 border-l border-zinc-800 ml-1.5 space-y-1">
          {subCategories.map((sub, index) => (
            <CategoryItem key={index} label={sub.label} subCategories={sub.subCategories} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default function CategoryWidget({ title, items }) {
  if (!items) return null;

  return (
    <div className="w-full bg-[#192436] p-8  relative border-b-4 border-[#fe4c1c] mt-10">
      <div className="mb-6">
        <h3 className="text-white font-[Oswald] text-[24px] font-bold uppercase tracking-wider">
          {title}
        </h3>
        <div className="w-full h-[1px] bg-zinc-700 mt-4" />
      </div>

      <ul className="flex flex-col">
        {items.map((item, index) => (
          <CategoryItem 
            key={index} 
            label={item.label} 
            subCategories={item.subCategories} 
            active={item.active} // Archives mein active date dikhane ke liye
          />
        ))}
      </ul>
    </div>
  );
}