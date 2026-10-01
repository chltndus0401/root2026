import { useEffect, useRef, useState } from 'react';

// 스크롤 시 화면에 들어오면 페이드인 (fade-in-section)
export default function FadeIn({ as: Tag = 'section', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`fade-in-section ${visible ? 'is-visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
