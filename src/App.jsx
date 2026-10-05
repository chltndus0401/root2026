import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Splash from './components/Splash';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Maps from './pages/Maps';
import Messages from './pages/Messages';
import Book from './pages/Book';
import ThanksTo from './pages/ThanksTo';

const SPLASH_KEY = 'root2026:splashSeen';

export default function App() {
  // 탭을 닫기 전까지는 한 번만 스플래시 노출 (새로고침해도 다시 안 나옴)
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return !sessionStorage.getItem(SPLASH_KEY);
    } catch {
      return true;
    }
  });

  const handleSplashDone = () => {
    try {
      sessionStorage.setItem(SPLASH_KEY, '1');
    } catch {
      // 저장이 막힌 브라우저에서는 무시
    }
    setShowSplash(false);
  };

  return (
    <>
      <CustomCursor />
      {showSplash && <Splash onDone={handleSplashDone} />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/book" element={<Book />} />
          <Route path="/books" element={<Navigate to="/book" replace />} />
          <Route path="/thanksto" element={<ThanksTo />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
}