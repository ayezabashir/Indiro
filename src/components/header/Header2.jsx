import React from 'react'
import { Phone, Mail, ChevronDown } from 'lucide-react';
import logoimg from "/images/logo-white.png";
const Header2 = () => {
  return (
 <header className="w-full h-40 flex  font-[Oswald]">
          <div 
            className="w-[30%] h-full bg-[#2D384A] flex items-center px-10 pointer-events-auto"
            style={{ clipPath: 'polygon(0% 0, 90% 0%, 100% 100%, 0 100%)' }}
          >
         <img src={logoimg} alt="Indiro" className="w-32 md:w-48" />
          </div>

        <div 
            className="w-[80vw] h-full relative -left-6 bg-brand-orange flex items-center px-10 pointer-events-auto"
  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 5% 100%)' }}
          >
       
          </div>
   


    </header>
  )
}

export default Header2