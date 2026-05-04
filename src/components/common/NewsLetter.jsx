import React from 'react'
import { Mail, MailOpenIcon } from 'lucide-react';

const NewsLetter = () => {
  return (
    /* Absolute ko container ke mutabiq adjust kiya aur mobile pe positioning fix ki */
    <div className="px-4 sm:px-11 absolute w-full left-0 lg:-bottom-20 -bottom-35 mx-auto z-10">
      {/* h-50 ko h-auto kiya taake mobile pe content fit ho sakay */}
      <div className="bg-[#FE4C1C] p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between min-h-[140px] lg:h-40 gap-6 sm:gap-8 shadow-xl">

        {/* Heading row */}
        <div className="flex items-center gap-4 sm:gap-6 w-full lg:w-auto">
          {/* Icon size mobile ke liye thora chota kiya */}
          <div className="p-3 sm:p-4 border border-white/20 flex-shrink-0">
            <MailOpenIcon className='text-white' size={24} />
          </div>
          <h2 className="text-white font-[Oswald] text-[20px] sm:text-[28px] font-bold uppercase leading-tight">
            Sign up to get latest updates
          </h2>
        </div>

        {/* Input + button */}
        <div className="w-full lg:w-1/2 flex flex-row bg-[#0E1828] text-white p-1">
          <input
            type="email"
            placeholder="Email Address..."
            className="flex-grow bg-transparent px-4 sm:px-6 py-3 text-white outline-none w-full text-sm sm:text-base"
          />
         
          <button
            className="
              bg-[#FE4C1C] text-white
              flex items-center justify-center
              w-12 h-12
              sm:w-14 sm:h-14
              flex-shrink-0
              transition-colors duration-200
              hover:bg-white hover:text-[#FE4C1C]
            "
          >
            <Mail size={20} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default NewsLetter;