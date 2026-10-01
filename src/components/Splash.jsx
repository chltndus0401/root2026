import { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo-root-light.webp';

const DURATION = 3000;
const FADE = 600;

export default function Splash({ onDone }) {
  const [leaving, setLeaving] = useState(false);
  const timer = useRef(null);
  const done = useRef(false);

  const leave = () => {
    if (done.current) return;
    done.current = true;
    clearTimeout(timer.current); // 클릭으로 조기 진입 시 타이머 해제
    setLeaving(true);
    setTimeout(onDone, FADE);
  };

  useEffect(() => {
    timer.current = setTimeout(leave, DURATION);
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`splash ${leaving ? 'is-leaving' : ''}`}
      onClick={leave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && leave()}
      aria-label="사이트 입장"
    >
      <div className="splash__inner">
        <img className="splash__logo" src={logo} alt="ROOT" />
        <p className="splash__text">
          2026
          <br />덕성여자대학교
          <br />디지털소프트웨어공학부
          <br />제 1회 졸업전시회
        </p>
        <span className="splash__enter">Click to Enter!</span>
      </div>
    </div>
  );
}
