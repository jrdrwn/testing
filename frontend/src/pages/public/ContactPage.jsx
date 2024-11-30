import Navbar from '../../components/public/shared/Navbar';
import ContactForm from '../../components/public/ContactPage/ContactForm';
import FaqsSection from '../../components/public/ContactPage/FaqsSection';
import EmailSection from '../../components/public/ContactPage/EmailSection';
import SocialMediaSection from '../../components/public/ContactPage/SocialMediaSection';
import Footer from '../../components/public/shared/Footer';

import React from 'react'

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <ContactForm />
      <FaqsSection />
      <EmailSection />
      <SocialMediaSection />
      <Footer />
    </div>
  )
}

export default ContactPage
