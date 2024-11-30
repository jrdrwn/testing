import Navbar from '../../components/public/shared/Navbar';
import HeroV1 from '../../components/public/HomePage/HeroV1';
import StripV1 from '../../components/public/HomePage/StripV1';
import SectionV3 from '../../components/public/HomePage/SectionV3';
import StatsV1 from '../../components/public/HomePage/StatsV1';
import CardsV9 from '../../components/public/HomePage/CardsV9';
import Highlight from '../../components/public/HomePage/Highlight';
import Courses from '../../components/public/HomePage/Courses';
import Testimonials from '../../components/public/HomePage/Testimonials';
import CallToAction from '../../components/public/HomePage/CallToAction';
import Footer from '../../components/public/shared/Footer';

import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroV1 />
      <StripV1 />
      <SectionV3 />
      <StatsV1 />
      <CardsV9 />
      <Highlight />
      <Courses />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default HomePage
