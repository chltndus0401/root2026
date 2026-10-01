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

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <CustomCursor />
      {showSplash && <Splash onDone={() => setShowSplash(false)} />}
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
