import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SetupPage from './pages/SetupPage';
import ChatPage from './pages/ChatPage';
import MoodPage from './pages/MoodPage';
import PeacefulPage from './pages/PeacefulPage';
import StoryPage from './pages/StoryPage';
import LearningPage from './pages/LearningPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import RemindersPage from './pages/RemindersPage';
import ReportPage from './pages/ReportPage';
import AlertPage from './pages/AlertPage';
import ProfilePage from './pages/ProfilePage';
import ActivitiesPage from './pages/ActivitiesPage';
import LandingPage from './pages/LandingPage';
import { ToastProvider } from './context/ToastContext';

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="reminders" element={<RemindersPage />} />
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
