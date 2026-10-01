import { useRef, useState } from 'react';

// 좌/우 버튼 + 터치 스와이프 + 진행률 게이지바
export default function Slider({ items, render, className = '', progress = true, label = '이미지' }) {
  const [index, setIndex] = useState(0);
  const start = useRef(null);
  const count = items.length;

  const go = (d) => setIndex((i) => (i + d + count) % count);

  const onTouchStart = (e) => {
    start.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (start.current == null) return;
    const dx = e.changedTouches[0].clientX - start.current;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
    start.current = null;
  };

  if (!count) return null;

  return (
    <div
      className={`slider ${className}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="slider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((item, i) => (
          <div className="slider__slide" key={i} aria-hidden={i !== index}>
            {render(item, i)}
          </div>
        ))}
      </div>
      {count > 1 && (
        <>
          <button className="slider__btn slider__btn--prev" onClick={() => go(-1)} aria-label="이전 이미지">
            <svg viewBox="0 0 20 22" aria-hidden="true"><path d="M0 11 20 0v22z" /></svg>
          </button>
          <button className="slider__btn slider__btn--next" onClick={() => go(1)} aria-label="다음 이미지">
            <svg viewBox="0 0 20 22" aria-hidden="true"><path d="M20 11 0 0v22z" /></svg>
          </button>
        </>
      )}
      {progress && count > 1 && (
        <div className="slider__progress" aria-hidden="true">
          <span style={{ width: `${100 / count}%`, transform: `translateX(${index * 100}%)` }} />
        </div>
      )}
    </div>
  );
}
