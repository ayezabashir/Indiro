import React from 'react'
import ExperienceSection from '../components/About/ExperienceSection'
import ExpertsCtaSection from '../components/About/ExpertsCTASection'
import StatsSection from '../components/About/StatsSection'
import LogoNewsletterSection from '../components/About/LogoNewsLetter'
import TeamSection from '../components/About/TeamSection'

const About = () => {
  return (
    <div className="w-full">
    <div className="relative w-full h-[50vh] top-[20vh] bg-[url('../images/aboutbanner.jpg')] bg-cover bg-center flex items-center justify-center">

  <div className="absolute inset-0 bg-black/50"></div>

        <h1 className='text-[60px] font-bold text-center font-[Oswald] text-white  z-20'>About</h1>

      </div>

      <div className='relative top-[20vh]'>
       <ExperienceSection />
       <ExpertsCtaSection />
       <StatsSection />
      
       <TeamSection />
        <LogoNewsletterSection />
      </div>
    </div>
  )
}

export default About