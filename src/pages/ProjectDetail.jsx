import { useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import Slider from '../components/Slider';
import { PROJECTS } from '../data/projects';

function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`accordion ${open ? 'is-open' : ''}`}>
      <button className="accordion__head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <svg className="accordion__icon" viewBox="0 0 12 13" aria-hidden="true"><path d="M12 6.5 0 0v13z" /></svg>
        {title}
      </button>
      <div className="accordion__body">
        <div className="accordion__inner">{children}</div>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = PROJECTS.findIndex((p) => p.id === id);
  if (index === -1) return <Navigate to="/projects" replace />;

  const p = PROJECTS[index];
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const images = p.images?.length ? p.images : [null];

  const back = () => (window.history.length > 1 ? navigate(-1) : navigate('/projects'));

  return (
    <div className="container container--detail">
      <button className="back-link" onClick={back}>
        ⇠ 이전 페이지
      </button>

      <header className="detail-head">
        <p className="detail-head__sub">{p.subtitle}</p>
        <h1 className="detail-head__name">{p.name}</h1>
        <p className="detail-head__team">| {p.team}</p>
        {p.keywords?.length > 0 && (
          <div className="keywords">
            <span className="keywords__label">KEYWORDS</span>
            <ul>
              {p.keywords.map((k, i) => (
                <li key={k} className={i % 2 ? 'is-dark' : ''}>{k}</li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <Slider
        className="detail-slider"
        items={images}
        label={`${p.name} 소개 이미지`}
        render={(src, i) =>
          src ? <img src={src} alt={`${p.name} 이미지 ${i + 1}`} loading={i ? 'lazy' : 'eager'} /> : <div className="placeholder" />
        }
      />

      <div className="accordions">
        <Accordion title="기획 의도">
          <p className="pre">{p.intent}</p>
        </Accordion>

        <Accordion title="Stack">
          <dl className="stack">
            {[
              ['Skill', p.stack?.skill],
              ['Tool', p.stack?.tool],
              ['Device', p.stack?.device],
            ]
              .filter(([, v]) => v?.length)
              .map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v.join(', ')}</dd>
                </div>
              ))}
          </dl>
        </Accordion>

        <Accordion title="Members">
          <ul className="members">
            {p.members?.map((m, i) => (
              <li key={i}>
                <p className="members__who">
                  <strong>{m.name}</strong> {m.role}
                </p>
                {m.comment && <p className="members__comment pre">{m.comment}</p>}
              </li>
            ))}
          </ul>
        </Accordion>

        <Accordion title="Team Question">
          <ul className="qna">
            {p.questions?.map((q, i) => (
              <li key={i}>
                <p className="qna__q">Q. {q.q}</p>
                <p className="qna__a pre">A. {q.a}</p>
              </li>
            ))}
          </ul>
        </Accordion>

        {p.thanksTo && (
          <Accordion title="Special Thanks To">
            <p className="pre">{p.thanksTo}</p>
          </Accordion>
        )}
      </div>

      <nav className="detail-nav" aria-label="다른 프로젝트">
        <Link to={`/project/${prev.id}`}>⇠ {prev.team}</Link>
        <Link to={`/project/${next.id}`}>{next.team} ⇢</Link>
      </nav>
    </div>
  );
}
