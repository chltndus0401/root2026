import { useEffect, useState } from 'react';
import FadeIn from '../components/FadeIn';
import Slider from '../components/Slider';
import { ADDRESS, INTRO, SCHEDULE, SITE } from '../data/site';
import { shareInvitation } from '../lib/kakao';
import naverIcon from '../assets/icon-naver-map.webp';
import kakaoMapIcon from '../assets/icon-kakao-map.webp';
import talkIcon from '../assets/icon-kakaotalk.webp';
import poster from '../assets/poster.webp';
import venue01 from '../assets/venue-01.webp';

// 전시장 안내 사진 — 추가 사진은 import 후 배열에 넣기
const VENUE_PHOTOS = [venue01];

function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, new Date(target).getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor(diff / 3600000) % 24,
      minutes: Math.floor(diff / 60000) % 60,
      seconds: Math.floor(diff / 1000) % 60,
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return t;
}

export default function Home() {
  const t = useCountdown(SITE.startAt);
  const [school, ...dept] = SITE.title.split(' ');

  return (
    <div className="container container--home">
      <FadeIn className="home-hero">
        <h1 className="home-hero__title">
          <span className="page-title__line">{school}</span>{' '}
          <span className="page-title__line">{dept.join(' ')}</span>
          <span className="page-title__line page-title__line--block">{SITE.exhibition}</span>
        </h1>
        <p className="home-hero__meta">
          {SITE.venueShort}
          <br />
          {SITE.period}
        </p>
      </FadeIn>

      <FadeIn className="home-intro">
        <h2 className="home-intro__slogan">{INTRO.slogan}</h2>
        {INTRO.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </FadeIn>

      <FadeIn className="home-block">
        <h2 className="home-block__title">
          WHERE
          <br />
          AND WHEN
        </h2>
        <p className="home-block__text">
          {ADDRESS.detail}
          {SCHEDULE.map((s) => (
            <span key={s.label}>
              <br />
              {s.label} {s.time}
            </span>
          ))}
        </p>
      </FadeIn>

      <FadeIn className="home-block">
        <h2 className="home-block__title">D-DAY</h2>
        <div className="dday" role="timer" aria-live="off">
          {[
            [t.days, '일'],
            [t.hours, '시간'],
            [t.minutes, '분'],
            [t.seconds, '초'],
          ].map(([v, l]) => (
            <div className="dday__cell" key={l}>
              <span className="dday__num">{v}</span>
              <span className="dday__label">{l}</span>
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn className="home-block">
        <h2 className="home-block__title home-block__title--kr">오시는 길</h2>
        <p className="home-block__text selectable">
          [{ADDRESS.zip}] {ADDRESS.road} <br className="br-mobile" />
          {ADDRESS.detail}
        </p>
        <div className="map-links">
          <a className="map-link map-link--naver" href={ADDRESS.naver} target="_blank" rel="noreferrer">
            <img src={naverIcon} alt="" />
            네이버지도
          </a>
          <a className="map-link map-link--kakao" href={ADDRESS.kakao} target="_blank" rel="noreferrer">
            <img src={kakaoMapIcon} alt="" />
            카카오맵
          </a>
        </div>
        <Slider
          className="venue-slider"
          items={VENUE_PHOTOS}
          progress={false}
          label="전시장 안내 사진"
          render={(src, i) => <img src={src} alt={`전시장 안내 사진 ${i + 1}`} loading="lazy" />}
        />
      </FadeIn>

      <FadeIn className="home-block">
        <h2 className="home-block__title">POSTER</h2>
        <img className="poster" src={poster} alt="졸업전시회 ROOT 포스터" loading="lazy" />
        <button className="kakao-share" onClick={shareInvitation}>
          <img src={talkIcon} alt="" />
          <span>카카오톡 초대장 공유</span>
        </button>
      </FadeIn>
    </div>
  );
}
