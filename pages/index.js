import AboutMe from '@/components/About_me/AboutMe'
import ContactMe from '@/components/Contact_me/ContactMe'
import HeroSection from '@/components/Hero_Section/HeroSection'
import Social from '@/components/Socials/Social'
import React from 'react'

const index = () => {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ContactMe />
      <Social />
    </>
  )
}

export default index