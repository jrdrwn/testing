import Navbar from '../../components/private/shared/Navbar';
import Hero from '../../components/private/DetailContent/Hero';
import Tabs from '../../components/private/DetailContent/Tabs';
import Overview from '../../components/private/DetailContent/Overview';
import Modules from '../../components/private/DetailContent/Modules';
import Instructor from '../../components/private/DetailContent/Instructor';
import DetailSkills from '../../components/private/DetailContent/DetailSkills';
import Reviews from '../../components/private/DetailContent/Reviews';
import SimilarCourses from '../../components/private/DetailContent/SimilarCourses';
import Faqs from '../../components/private/DetailContent/Faqs';
import Footer from '../../components/public/shared/Footer';

import React from 'react'

const DetailContent = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tabs />
      <Overview />
      <Modules />
      <Instructor />
      <DetailSkills />
      <Reviews />
      <SimilarCourses />
      <Faqs />
      <Footer />
    </div>
  )
}

export default DetailContent
