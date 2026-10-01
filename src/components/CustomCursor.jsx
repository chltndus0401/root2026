import { useEffect, useRef, useState } from 'react';

// 데스크톱(정밀 포인터)에서만 동작. #766B7E + difference 블렌드
export default function CustomCursor() {
  const ref = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add('has-custom-cursor');
    const el = ref.current;
    let x = -100, y = -100, raf = 0;

    const render = () => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = 0;
    };
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add('is-active');
      const hovering = e.target.closest?.('a, button, [role="button"], input, textarea, label');
      el.classList.toggle('is-hover', Boolean(hovering));
      if (!raf) raf = requestAnimationFrame(render);
    };
    const onLeave = () => el.classList.remove('is-active');

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={ref} className="custom-cursor" aria-hidden="true">
      <span />
    </div>
  );
}
