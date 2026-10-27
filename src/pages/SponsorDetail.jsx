import { Fragment } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { SPONSOR_PAGES } from '../data/sponsors';
import instagramIcon from '../assets/icon-instagram.svg';
import smartstoreIcon from '../assets/icon-smartstore.svg';

// '**굵게**' 표시를 <strong> 으로 바꿔서 보여줌
function Rich({ text }) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>
  );
}

// 버튼 아이콘 (피그마에서 내보낸 SVG 그대로)
const LINK_ICONS = { instagram: instagramIcon, store: smartstoreIcon };

export default function SponsorDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const s = SPONSOR_PAGES[slug];
  if (!s) return <Navigate to="/thanksto" replace />;

  // 이전 페이지: 항상 THANKS-TO 로
  // - THANKS-TO 에서 들어왔으면 history 한 칸 뒤로 (보던 스크롤 위치 유지)
  // - 링크로 바로 들어온 경우엔 /thanksto 로 이동
  const back = () => (state?.fromThanks ? navigate(-1) : navigate('/thanksto'));

  return (
    <div className="container container--wide container--sponsor">
      <button className="back-link" onClick={back}>
        ⇠ 이전 페이지
      </button>

      <header className="sponsor-head">
        <h1 className="sponsor-head__title">{s.title}</h1>
        <p className="sponsor-head__sub">{s.subtitle}</p>
        <ul className="sponsor-links">
          {s.links.map((l) => (
            <li key={l.href}>
              <a className={`sponsor-link sponsor-link--${l.type}`} href={l.href} target="_blank" rel="noopener noreferrer">
                <img src={LINK_ICONS[l.type]} alt="" width="20" height="20" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <section className="sponsor-product">
        <h2 className="sponsor-product__name">{s.product}</h2>
        {s.note && <p className="sponsor-product__note">{s.note}</p>}
        <img className="sponsor-product__img" src={s.image} alt={s.imageAlt} width="700" height="467" decoding="async" />
        <ul className="sponsor-points">
          {s.points.map((p) => (
            <li key={p}>
              <Rich text={p} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
