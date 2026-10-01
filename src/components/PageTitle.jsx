import { SITE } from '../data/site';

// "덕성여자대학교 디지털소프트웨어공학부 / 제 1회 졸업전시회: ROOT"
// 모바일에서는 학교 / 학부가 줄바꿈됩니다.
export default function PageTitle({ sub, note, className = '' }) {
  const [school, ...dept] = SITE.title.split(' ');
  return (
    <div className={`page-title ${className}`}>
      <h1>
        <span className="page-title__line">{school}</span>{' '}
        <span className="page-title__line">{dept.join(' ')}</span>
        <span className="page-title__line page-title__line--block">{SITE.exhibition}</span>
      </h1>
      {sub && <h2>{sub}</h2>}
      {note && <p className="page-title__note">{note}</p>}
    </div>
  );
}
