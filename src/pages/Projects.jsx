import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import FadeIn from '../components/FadeIn';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  return (
    <div className="container container--projects">
      <PageTitle />
      <FadeIn as="ul" className="project-grid">
        {PROJECTS.map((p) => (
          <li key={p.id}>
            <Link to={`/project/${p.id}`} className="project-card">
              <div className="project-card__thumb">
                {p.thumbnail && <img src={p.thumbnail} alt="" loading="lazy" />}
              </div>
              <p className="project-card__sub">{p.subtitle}</p>
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__team">| {p.team}</p>
            </Link>
          </li>
        ))}
      </FadeIn>
    </div>
  );
}
