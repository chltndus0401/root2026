import { useState } from 'react';
import PageTitle from '../components/PageTitle';
import FadeIn from '../components/FadeIn';
import { COMMITTEE, DEVELOPERS, PROFESSORS } from '../data/people';
import rootLogo from '../assets/logo-root-green.webp';
import duksung from '../assets/logo-duksung.webp';

export default function ThanksTo() {
  const [active, setActive] = useState(null);
  const prof = active != null ? PROFESSORS[active] : null;

  return (
    <div className="container container--thanks">
      <PageTitle />
      <img className="thanks-logo" src={rootLogo} alt="ROOT" />

      <div className="thanks-body">
        <FadeIn className="thanks-sec">
          <h2>PROFESSORS</h2>
          <p className="thanks-sec__sub">지도교수</p>
          <p className="thanks-hint">✦ Click to check out Messages!</p>
          <ul className="prof-list">
            {PROFESSORS.map((p, i) => (
              <li key={p.name}>
                <button
                  className={active === i ? 'is-active' : ''}
                  onClick={() => setActive(active === i ? null : i)}
                  aria-expanded={active === i}
                >
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
          {prof && (
            <div className="prof-message" key={prof.name}>
              {prof.photo && <img src={prof.photo} alt={`${prof.name} 교수님`} />}
              <p className="pre">{prof.message}</p>
            </div>
          )}
        </FadeIn>

        <FadeIn className="thanks-sec">
          <h2>DEVELOPERS</h2>
          <p className="thanks-sec__sub">참여 학생</p>
          <p className="dev-list">
            {DEVELOPERS.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </p>
        </FadeIn>

        <FadeIn className="thanks-sec">
          <h2>COMMITTEE</h2>
          <p className="thanks-sec__sub">졸업전시준비위원회</p>
          <dl className="committee">
            {COMMITTEE.map((c) => (
              <div key={c.role}>
                <dt>{c.role}</dt>
                <dd>{c.names.join(' ')}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn className="thanks-sec">
          <h2>SPONSORS</h2>
          <p className="thanks-sec__sub">후원사</p>
          <div className="sponsors">
            <img src={duksung} alt="덕성여자대학교" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
