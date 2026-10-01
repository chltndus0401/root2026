import PageTitle from '../components/PageTitle';
import FadeIn from '../components/FadeIn';
import { BOOTH_MAP_IMAGE } from '../data/site';

export default function Maps() {
  return (
    <div className="container container--wide container--fill">
      <PageTitle sub="부스 배치표" />
      {BOOTH_MAP_IMAGE && (
        <FadeIn as="div" className="booth-map">
          <img src={BOOTH_MAP_IMAGE} alt="부스 배치표" />
        </FadeIn>
      )}
    </div>
  );
}
