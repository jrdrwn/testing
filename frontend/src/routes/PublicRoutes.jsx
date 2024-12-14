import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/public/HomePage';
import AboutPage from '../pages/public/AboutPage';
import ContactPage from '../pages/public/ContactPage';
import PricingPage from '../pages/public/PricingPage';
import PaymentPage from '../pages/public/Subscription/payment';
import LoginPage from '../pages/public/LoginPage';
import RegisterPage from '../pages/public/RegisterPage';
import ForgotPasswordPage from '../pages/public/ForgotPasswordPage';
import AktivationPage from '../pages/public/Aktivationpage';
import ChangePasswordPage from '../pages/public/ChangePasswordPage';
import VerificationCodePage from '../pages/public/VerificationCodePage';
import VerificationCodeResetPassPage from '../pages/public/VerificationCodeResetPassPage';


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/pricing/payment" element={<PaymentPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
      <Route path="/Aktivationpage" element={<AktivationPage />} />
      <Route path="/ChangePasswordPage" element={<ChangePasswordPage />} />
      <Route path="/VerificationPage" element={<VerificationCodePage />} />
      <Route path="/VerificationResetPassPage" element={<VerificationCodeResetPassPage />} />
    </Routes>
  );
};

export default PublicRoutes;
