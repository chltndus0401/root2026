import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo-root-light.webp';

export const NAV = [
  { to: '/projects', label: 'PROJECTS' },
  { to: '/maps', label: 'MAPS' },
  { to: '/messages', label: 'MESSAGES' },
  { to: '/book', label: 'BOOK' },
  { to: '/thanksto', label: 'THANKS-TO' },
];

const MENU_MS = 700;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { pathname } = useLocation();

  const closeTimer = useRef(null);

  // 열기/닫기 애니메이션은 CSS keyframes(menuDown/menuUp)로 처리
  // (기존 rAF + transition 방식은 모바일 브라우저에서 첫 프레임이 건너뛰어져 애니메이션이 안 보였음)
  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setMounted(true);
    setOpen(true);
  };
  const closeMenu = () => {
    setOpen(false);
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMounted(false), MENU_MS);
  };

  // 페이지 이동 시 메뉴 닫기
  useEffect(() => {
    if (mounted) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mounted ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && closeMenu();
    if (mounted) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mounted]);

  return (
    <>
      <header className="gnb">
        <Link to="/" className="gnb__logo" aria-label="홈으로">
          <img src={logo} alt="ROOT" />
        </Link>
        <nav className="gnb__nav" aria-label="주요 메뉴">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button className="gnb__menu" onClick={openMenu} aria-expanded={open}>
          MENU
        </button>
      </header>

      {mounted && (
        <div className={`menu-overlay ${open ? 'is-open' : 'is-closing'}`} role="dialog" aria-modal="true">
          <nav className="menu-overlay__list">
            <NavLink to="/" end onClick={closeMenu}>HOME</NavLink>
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} onClick={closeMenu}>
                {n.label}
              </NavLink>
            ))}
            <button onClick={closeMenu}>CLOSE</button>
          </nav>
        </div>
      )}
    </>
  );
}
