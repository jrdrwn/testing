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
import LearningOverviewComponent from '../pages/private/career/learningOverview';
import LearningStartQuizPage from '../pages/private/mycourses/learningstartquiz';
import LearningQuizPage from '../pages/private/mycourses/learningquiz';
import LearningafterQuizPage from '../pages/private/mycourses/learningafterquiz';
import LearningViewQuizPage from '../pages/private/mycourses/learningviewdetail';
import LearningComentComponent from '../pages/private/career/learningComent';
import LearningSectionComentcomponent from '../pages/private/mycourses/learningSectionComent';
import LearningSectionVideocomponent from '../pages/private/mycourses/learningSectionVideo';
import InprogressNone from '../pages/private/mycourses/Inprogressnone';
import CompletedNone from '../pages/private/mycourses/completednone';


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
      <Route path="/dashboard/workshop/article/:id" element={<Articles />} />
      <Route path="/dashboard/workshop/articlecontent" element={<ArticleContents />} />
      <Route path="/dashboard/workshop/learningoverview" element={<LearningOverviewComponent />} />
      <Route path="/dashboard/workshop/learningcomment" element={<LearningComentComponent />} />
      <Route path="/dashboard/mycourses/learningstartquiz" element={<LearningStartQuizPage />} />
      <Route path="/dashboard/mycourses/learningquiz" element={<LearningQuizPage />} />
      <Route path="/dashboard/mycourses/learningafterquiz" element={<LearningafterQuizPage />} />
      <Route path="/dashboard/mycourses/learningviewdetail" element={<LearningViewQuizPage />} />
      <Route path="/dashboard/mycourses/learningsectioncoment" element={<LearningSectionComentcomponent />} />
      <Route path="/dashboard/mycourses/learningsectionvideo" element={<LearningSectionVideocomponent />} />
      <Route path="/dashboard/mycourses/Inprogressnone" element={<InprogressNone />} />
      <Route path="/dashboard/mycourses/Completednone" element={<CompletedNone />} />
    </Routes>
  );
};

export default PrivateRoutes;
