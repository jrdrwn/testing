import Navbar from '../../components/public/shared/Navbar';
import HeroSection from '../../components/public/AboutPage/HeroSection';
import ValueSection from '../../components/public/AboutPage/ValueSection';
import TeamSection from '../../components/public/AboutPage/TeamSection';
import FeaturedSection from '../../components/public/AboutPage/FeaturedSection';
import TrustedSection from '../../components/public/AboutPage/TrustedSection';
import Footer from '../../components/public/shared/Footer';

import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ValueSection />
      <TeamSection />
      <FeaturedSection />
      <TrustedSection />
      <Footer />
    </div>
  )
}

export default AboutPage
