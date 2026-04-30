import React from 'react'

const BannerSection = ({title}) => {
  return (
     <div className="relative w-full h-[80vh] bg-[url('../images/aboutbanner.jpg')] bg-cover bg-center flex items-center justify-center">

  <div className="absolute inset-0 bg-black/50"></div>

        <h1 className='text-[60px] font-bold text-center font-[Oswald] text-white  relative top-[10vh] z-20'>{title}</h1>

      </div>
  )
}

export default BannerSection