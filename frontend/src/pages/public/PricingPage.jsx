import Navbar from '../../components/public/shared/Navbar';
import PromoBar from '../../components/public/PricingPage/PromoBar';
import PricingSection from '../../components/public/PricingPage/PricingSection';
import TopCoursesSection from '../../components/public/PricingPage/TopCoursesSection';
import Learners from '../../components/public/PricingPage/Learners';
import NewsletterSection from '../../components/public/PricingPage/NewsletterSection';
import Footer from '../../components/public/shared/Footer';

import React from 'react'

const PricingPage = () => {
  return (
    <div>
        <Navbar />
        <PromoBar />
        <PricingSection />
        <TopCoursesSection />
        <Learners />
        <NewsletterSection />
        <Footer />
    </div>
  )
}

export default PricingPage
