import { useEffect, useLayoutEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTopButton from './ScrollTopButton';

// 페이지별 스크롤 위치 기억 (뒤로가기 시 보던 위치 그대로)
const positions = new Map();

export default function Layout() {
  const location = useLocation();
  const navType = useNavigationType();
  const keyRef = useRef(location.key);
  const isMessages = location.pathname.startsWith('/messages');

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  // 현재 페이지의 스크롤 위치 계속 저장
  useEffect(() => {
    keyRef.current = location.key;
    const onScroll = () => positions.set(keyRef.current, window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.key]);

  // 이동 시: 뒤로/앞으로가기면 기억한 위치로, 새 페이지면 맨 위로
  useLayoutEffect(() => {
    const saved = positions.get(location.key);
    if (navType === 'POP' && saved != null) {
      window.scrollTo(0, saved);
      requestAnimationFrame(() => window.scrollTo(0, saved));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.key, navType]);

  return (
    <div className={`app ${isMessages ? 'app--fixed' : ''}`}>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      {!isMessages && <Footer />}
      {!isMessages && <ScrollTopButton />}
    </div>
  );
}