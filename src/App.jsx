import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SetupPage from './pages/SetupPage';
import ChatPage from './pages/ChatPage';
import MoodPage from './pages/MoodPage';
import PeacefulPage from './pages/PeacefulPage';
import StoryPage from './pages/StoryPage';
import LearningPage from './pages/LearningPage';
import RemindersPage from './pages/RemindersPage';
import ReportPage from './pages/ReportPage';
import AlertPage from './pages/AlertPage';
import ProfilePage from './pages/ProfilePage';
import ActivitiesPage from './pages/ActivitiesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/setup" element={<SetupPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<RemindersPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="activities" element={<ActivitiesPage />} />
          <Route path="mood" element={<MoodPage />} />
          <Route path="peaceful" element={<PeacefulPage />} />
          <Route path="story" element={<StoryPage />} />
          <Route path="learning" element={<LearningPage />} />
          <Route path="reports" element={<ReportPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="alerts" element={<AlertPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
