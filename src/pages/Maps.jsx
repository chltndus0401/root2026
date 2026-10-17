import PageTitle from '../components/PageTitle';
import FadeIn from '../components/FadeIn';
import { BOOTH_MAP_IMAGE } from '../data/site';

export default function Maps() {
  return (
    <div className="container container--maps container--fill">
      <PageTitle sub="부스배치도" />
      {BOOTH_MAP_IMAGE && (
        <FadeIn as="div" className="booth-map">
          {/* 원본은 2배 크기(1400x1634)로 넣으면 레티나 화면에서도 선명하게 보임 */}
          <img src={BOOTH_MAP_IMAGE} alt="부스배치도" width="700" height="817" decoding="async" />
        </FadeIn>
      )}
    </div>
  );
}
