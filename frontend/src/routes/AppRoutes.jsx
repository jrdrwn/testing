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
import PaymentPage from '../pages/public/Subscription/payment';
import RegisterPage from '../pages/public/RegisterPage';
import AktivationPage from '../pages/public/Aktivationpage';
import ChangePasswordPage from '../pages/public/ChangePasswordPage';
import VerificationCodePage from '../pages/public/VerificationCodePage';
import VerificationCodeResetPassPage from '../pages/public/VerificationCodeResetPassPage';
import ProfilePage from '../pages/private/settings/ProfilePage';
import NotificationsPage from '../pages/private/settings/NotificationsPage';
import SocialLinksPage from '../pages/private/settings/SocialLinksPage';
import SubscriptionPage from '../pages/private/settings/SubscriptionPage';
import Inprogress from '../pages/private/mycourses/Inprogress';
import Completed from '../pages/private/mycourses/completed';
import Certificate from '../pages/private/mycourses/certificate';
import ScrollToTop from '@/components/public/HomePage/ScrollToTop';
import Carrer from '../pages/private/career/career';
import Articles from '../pages/private/career/article';
import Articlecontents from '../pages/private/career/articlecontent';


const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/pricing/payment" element={<PaymentPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        <Route path="/dashboard/home" element={<DashboardPage />} />
        <Route path="/auth/google/callback" element={<GoogleCallback />} />
        <Route path="/dashboard/detailcontent" element={<DetailContent />} />
        <Route path="/Aktivationpage" element={<AktivationPage />} />
        <Route path="/ChangePasswordPage" element={<ChangePasswordPage />} />
        <Route path="/VerificationPage" element={<VerificationCodePage />} />
        <Route path="/VerificationResetPassPage" element={<VerificationCodeResetPassPage />} />
        <Route path="/dashboard/setting" element={<ProfilePage />} />
        <Route path="/dashboard/setting/notifications" element={<NotificationsPage />} />
        <Route path="/dashboard/setting/sociallinks" element={<SocialLinksPage />} />
        <Route path="/dashboard/setting/subscriptions" element={<SubscriptionPage />} />
        <Route path="/dashboard/mycourses" element={<Inprogress />} />
        <Route path="/dashboard/mycourses/completed" element={<Completed/>} />
        <Route path="/dashboard/mycourses/certificate" element={<Certificate />} />
        <Route path="/dashboard/workshop" element={<Carrer />} />
        <Route path="/dashboard/workshop/article" element={<Articles />} />
        <Route path="/dashboard/workshop/articlecontents" element={<Articlecontents />} />
        <Route path="/dashboard/workshop" element={<Carrer />} />
        <Route path="/dashboard/workshop/article" element={<Articles />} />
        <Route path="/dashboard/workshop/articlecontents" element={<Articlecontents />} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
