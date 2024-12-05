import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/private/DashboardPage';
import DetailContent from '../pages/private/DetailContent';
import ProfilePage from '../pages/private/settings/ProfilePage';
import NotificationsPage from '../pages/private/settings/NotificationsPage';
import SocialLinksPage from '../pages/private/settings/SocialLinksPage';
import SubscriptionPage from '../pages/private/settings/SubscriptionPage';
import Inprogress from '../pages/private/mycourses/Inprogress';
import Completed from '../pages/private/mycourses/completed';
import Certificate from '../pages/private/mycourses/certificate';
import Career from '../pages/private/career/career';
import Articles from '../pages/private/career/article';
import ArticleContents from '../pages/private/career/articlecontent';

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard/home" element={<DashboardPage />} />
      <Route path="/dashboard/detailcontent" element={<DetailContent />} />
      <Route path="/dashboard/setting" element={<ProfilePage />} />
      <Route path="/dashboard/setting/notifications" element={<NotificationsPage />} />
        <Route path="/dashboard/setting/sociallinks" element={<SocialLinksPage />} />
        <Route path="/dashboard/setting/subscriptions" element={<SubscriptionPage />} />
      <Route path="/dashboard/mycourses" element={<Inprogress />} />
      <Route path="/dashboard/mycourses/completed" element={<Completed />} />
      <Route path="/dashboard/mycourses/certificate" element={<Certificate />} />
      <Route path="/dashboard/workshop" element={<Career />} />
      <Route path="/dashboard/workshop/article" element={<Articles />} />
      <Route path="/dashboard/workshop/articlecontents" element={<ArticleContents />} />
    </Routes>
  );
};

export default PrivateRoutes;
