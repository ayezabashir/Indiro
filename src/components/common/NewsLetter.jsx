import React from 'react'
import { Mail, MailOpenIcon } from 'lucide-react';
const NewsLetter = () => {
  return (
      <div className="p-11 absolute  w-full b-30 -bottom-35 mx-auto">
        <div className="bg-[#FE4C1C] p-10 flex flex-col lg:flex-row items-center justify-between h-50 gap-8">

          {/* Heading row */}
          <div className="flex  items-center gap-6 w-full lg:w-auto">
            <div className="p-4 border border-white/20 flex-shrink-0">
            <MailOpenIcon className='text-white ' size={30}/>
            </div>
            <h2 className="text-white font-[Oswald] text-[22px] sm:text-[28px] font-bold uppercase leading-tight">
              Sign up to get latest updates
            </h2>
          </div>

          {/* Input + button */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row bg-[#0E1828] text-white p-1 gap-0">
            <input
              type="email"
              placeholder="Email Address..."
              className="flex-grow bg-transparent px-6 py-3 text-white outline-none w-full"
            />
         
            <button
              className="
                bg-[#FE4C1C] text-white
                flex items-center justify-center
                w-full h-12
                sm:w-14 sm:h-14
                transition-colors duration-200
                hover:bg-white hover:text-[#FE4C1C]
              "
            >
              <Mail />
            </button>
          </div>

        </div>
      </div>
  )
}

export default NewsLetter