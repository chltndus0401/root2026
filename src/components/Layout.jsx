import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollTopButton from './ScrollTopButton';

export default function Layout() {
  const { pathname } = useLocation();
  const isMessages = pathname.startsWith('/messages');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
