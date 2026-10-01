// 전시 기본 정보 — 문구 수정은 이 파일에서
export const SITE = {
  title: '덕성여자대학교 디지털소프트웨어공학부',
  exhibition: '제 1회 졸업전시회: ROOT',
  venueShort: '서울창업허브 창동 B1F',
  period: '2026. 11. 12. - 2026. 11. 13.',
  // D-DAY 기준 (KST)
  startAt: '2026-11-12T09:00:00+09:00',
  url: 'https://root2026.vercel.app',
};

export const SCHEDULE = [
  { label: '11월 12일 (목)', time: '09:00-18:00' },
  { label: '11월 13일 (금)', time: '09:00-17:00' },
];

export const ADDRESS = {
  zip: '01411',
  road: '서울특별시 도봉구 마들로13길 84',
  detail: '서울창업허브 창동 지하 1층',
  naver: 'https://map.naver.com/p/search/' + encodeURIComponent('서울창업허브 창동'),
  kakao: 'https://map.kakao.com/link/search/' + encodeURIComponent('서울창업허브 창동'),
};

export const INTRO = {
  slogan: '하나의 ROOT에서, 무한한 가능성으로',
  paragraphs: [
    '덕성여자대학교 디지털소프트웨어공학부는 웹&앱, 인공지능, 사이버보안, 사물인터넷, 빅데이터, 미디어, 게임이라는 일곱 개의 트랙을 중심으로 다양한 기술과 분야를 탐구합니다. 서로 다른 분야를 배우고, 서로 다른 기술을 다루며, 각자의 관심과 가능성을 따라 저마다의 방향으로 나아갑니다.',
    '하지만 그 시작에는 하나의 공통된 뿌리가 있습니다. 우리는 모두 디지털소프트웨어공학부라는 하나의 ‘ROOT’에서 배우고, 연결되고, 성장해 왔습니다. 하나의 뿌리에서 시작된 배움은 각자의 관심과 경험을 만나 여러 갈래로 뻗어나갑니다.',
    '이번 졸업 전시회는 그동안 쌓아온 배움과 고민이 각자의 방식으로 뻗어나간 결과를 보여주는 자리입니다. 서로 다른 기술과 아이디어가 만나 만들어낸 프로젝트를 통해 우리가 지나온 과정과 앞으로 펼쳐질 가능성을 담았습니다.',
    '하나의 ROOT에서 시작해, 각자의 방향으로 뻗어나가는 우리. 그 시작인 졸업 전시회 ROOT에서 여러분을 초대합니다.',
  ],
};

// 카카오톡 초대장 문구 (변경 시 졸준위장 확인)
export const KAKAO_SHARE = {
  title: '덕성여자대학교 디지털소프트웨어공학부 제1회 졸업전시회: ROOT',
  description: '11월 12일(목) - 11월 13일(금)',
  imagePath: '/og-poster.jpg',
};

// 온라인 도록: 구글 드라이브 PDF의 파일 ID
// (https://drive.google.com/file/d/<여기>/view) — 공유 설정 '링크가 있는 모든 사용자'
export const BOOK_DRIVE_FILE_ID = '';

// 부스 배치표 이미지: src/assets 에 넣고 import 해서 넣어주세요 (없으면 null)
export const BOOTH_MAP_IMAGE = null;
