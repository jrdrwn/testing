import Navbar from '../../components/private/shared/Navbar';
import Promotion from '../../components/private/DashboardPage/PromotionBar';
import Recently from '../../components/private/DashboardPage/Recently';
import Trending from '../../components/private/DashboardPage/Trending';
import Personalized from '../../components/private/DashboardPage/Personalized';
import Courses from '../../components/private/DashboardPage/Courses';
import Footer from '../../components/public/shared/Footer';

import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <Navbar />
      <Promotion />
      <Recently />
      <Trending />
      <Personalized />
      <Courses />
      <Footer />
    </div>
  )
}

export default DashboardPage
