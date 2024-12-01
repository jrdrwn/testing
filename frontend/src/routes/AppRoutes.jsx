import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DashboardPage from '../pages/private/DashboardPage';
import DetailContent from '../pages/private/DetailContent';
import AboutPage from '../pages/public/AboutPage';
import ContactPage from '../pages/public/ContactPage';
import ForgotPasswordPage from '../pages/public/ForgotPasswordPage';
import GoogleCallback from '../pages/public/GoogleCallback';
import HomePage from '../pages/public/HomePage';
import LoginPage from '../pages/public/LoginPage';
import PricingPage from '../pages/public/PricingPage';
import RegisterPage from '../pages/public/RegisterPage';
import SettingPage from '../pages/private/SettingPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/dashboard/home" element={<DashboardPage />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route path="/dashboard/detailcontent" element={<DetailContent />} />
        <Route path="/dashboard/setting" element={<SettingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
