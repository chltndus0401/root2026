import { useState } from 'react';

// 사진 비율이 칸 비율(boxRatio)과 비슷하면 칸을 꽉 채우고(cover),
// 많이 다르면(세로 사진, 아주 넓은 사진 등) 잘리지 않게 사진 전체를 보여줌(contain).
// 이때 남는 자리는 사진 가장자리 색으로 채워서 여백이 티 나지 않게 함.
// tolerance: 비율 차이 허용 범위 (0.08 = 8%까지는 꽉 채움)
export default function FitImage({ boxRatio, tolerance = 0.08, className = '', style, onLoad, ...props }) {
  const [fit, setFit] = useState('cover');
  const [edge, setEdge] = useState(null);

  const handleLoad = (e) => {
    const img = e.currentTarget;
    const { naturalWidth: w, naturalHeight: h } = img;
    if (w && h) {
      const r = w / h;
      const diff = Math.max(r / boxRatio, boxRatio / r) - 1; // 가로·세로 어느 쪽으로 달라도 같은 기준
      const contain = diff > tolerance;
      setFit(contain ? 'contain' : 'cover');
      if (contain) setEdge(edgeFill(img, r < boxRatio));
    }
    onLoad?.(e);
  };

  return (
    <img
      {...props}
      className={`${className} is-${fit}`.trim()}
      style={edge ? { ...style, backgroundImage: edge } : style}
      onLoad={handleLoad}
    />
  );
}

// 여백이 생기는 쪽(세로 사진이면 좌우, 넓은 사진이면 위아래) 가장자리 색을 구간별로 읽어
// 그라데이션으로 이어 붙임 → 위아래(또는 좌우) 색이 다른 사진도 여백이 자연스럽게 이어짐
function edgeFill(img, sides) {
  try {
    const S = 48;
    const STOPS = 12;
    const c = document.createElement('canvas');
    c.width = S;
    c.height = S;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(img, 0, 0, S, S);
    const d = ctx.getImageData(0, 0, S, S).data;
    const stops = [];
    for (let s = 0; s < STOPS; s++) {
      let r = 0, g = 0, b = 0, n = 0;
      const from = Math.floor((s * S) / STOPS);
      const to = Math.floor(((s + 1) * S) / STOPS);
      for (let i = from; i < to; i++) {
        for (const j of [0, 1, S - 2, S - 1]) {
          const [x, y] = sides ? [j, i] : [i, j];
          const k = (y * S + x) * 4;
          r += d[k]; g += d[k + 1]; b += d[k + 2]; n++;
        }
      }
      stops.push(`rgb(${Math.round(r / n)}, ${Math.round(g / n)}, ${Math.round(b / n)}) ${Math.round(((s + 0.5) / STOPS) * 100)}%`);
    }
    return `linear-gradient(${sides ? 'to bottom' : 'to right'}, ${stops.join(', ')})`;
  } catch {
    return null; // 색을 못 읽으면 CSS 기본 여백색 사용
  }
}
