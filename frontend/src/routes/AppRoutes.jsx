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

const AppRoutes = () => {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
};

export default AppRoutes;
