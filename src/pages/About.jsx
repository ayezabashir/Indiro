import React from 'react'
import ExperienceSection from '../components/About/ExperienceSection'
import ExpertsCtaSection from '../components/About/ExpertsCTASection'
import StatsSection from '../components/About/StatsSection'
import LogoNewsletterSection from '../components/About/LogoNewsLetter'
import TeamSection from '../components/About/TeamSection'
import BannerSection from '../components/common/BannerSection'

const About = () => {
  return (
    <div className="w-full">
   <BannerSection title="About" />

      <div className=''>
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