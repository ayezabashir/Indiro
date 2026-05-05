import React from 'react'

const BannerSection = ({title}) => {
  return (
     <div className="relative w-full h-[40vh] lg:h-[80vh] bg-[url('../images/aboutbanner.jpg')] bg-cover bg-center flex items-center justify-center">

  <div className="absolute inset-0 bg-black/50"></div>

        <h1 className='lg:text-[60px]  text-4xl font-bold text-center font-[Oswald] text-white  relative top-[4vh] lg:top-[10vh] z-20'>{title}</h1>

      </div>
  )
}

export default BannerSection