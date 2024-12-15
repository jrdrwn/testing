import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/private/DashboardPage';
import DetailContent from '../pages/private/DetailContent';
import Articles from '../pages/private/career/article';
import ArticleContents from '../pages/private/career/articlecontent';
import Career from '../pages/private/career/career';
import LearningOverviewComponent from '../pages/private/career/learningOverview';
import Inprogress from '../pages/private/mycourses/Inprogress';
import InprogressNone from '../pages/private/mycourses/Inprogressnone';
import Certificate from '../pages/private/mycourses/certificate';
import Completed from '../pages/private/mycourses/completed';
import CompletedNone from '../pages/private/mycourses/completednone';
import LearningSectionComentcomponent from '../pages/private/mycourses/learningSectionComent';
import LearningSectionVideocomponent from '../pages/private/mycourses/learningSectionVideo';
import LearningafterQuizPage from '../pages/private/mycourses/learningafterquiz';
import LearningQuizPage from '../pages/private/mycourses/learningquiz';
import LearningStartQuizPage from '../pages/private/mycourses/learningstartquiz';
import LearningViewQuizPage from '../pages/private/mycourses/learningviewdetail';
import NotificationsPage from '../pages/private/settings/NotificationsPage';
import ProfilePage from '../pages/private/settings/ProfilePage';
import SocialLinksPage from '../pages/private/settings/SocialLinksPage';
import SubscriptionPage from '../pages/private/settings/SubscriptionPage';

import Community from '../pages/private/community/CommunityPage'

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
      <Route path="/dashboard/workshop/learningoverview/:id" element={<LearningOverviewComponent />} />
      <Route path="/dashboard/mycourses/learningstartquiz" element={<LearningStartQuizPage />} />
      <Route path="/dashboard/mycourses/learningquiz" element={<LearningQuizPage />} />
      <Route path="/dashboard/mycourses/learningafterquiz" element={<LearningafterQuizPage />} />
      <Route path="/dashboard/mycourses/learningviewdetail/:course_id" element={<LearningViewQuizPage />} />
      <Route path="/dashboard/mycourses/learningsectioncoment" element={<LearningSectionComentcomponent />} />
      <Route path="/dashboard/mycourses/learningsectionvideo/:course_id" element={<LearningSectionVideocomponent />} />
      <Route path="/dashboard/mycourses/Inprogressnone" element={<InprogressNone />} />
      <Route path="/dashboard/mycourses/Completednone" element={<CompletedNone />} />
      <Route path="/dashboard/workshop/learningstartquiz" element={<LearningStartQuizPage />} />
      <Route path="/dashboard/workshop/learningquiz" element={<LearningQuizPage />} />
      <Route path="/dashboard/workshop/learningafterquiz" element={<LearningafterQuizPage />} />
      <Route path="/dashboard/workshop/learningviewdetail" element={<LearningViewQuizPage />} />
      <Route path="/dashboard/community" element={<Community />} />
    </Routes>
  );
};

export default PrivateRoutes;
