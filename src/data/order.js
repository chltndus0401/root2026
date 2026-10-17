// 프로젝트 목록 순서 — 분반별 팀 구성표 기준 (1분반 1팀 → 2팀 → … → 2분반 1팀 → …)
// 아래 배열에 팀명(projects.js 의 "team" 값)을 원하는 순서대로 적으면 목록과 상세 하단 이전/다음 순서가 그대로 바뀝니다.
// 배열에 없는 팀은 맨 뒤에 기존 순서대로 붙습니다. 비워두면 기존 순서 유지.
// (id 와 사진 폴더는 바뀌지 않으므로 URL·사진 경로는 그대로 유지됩니다)
import { PROJECTS } from './projects';

export const TEAM_ORDER = [
  // 1분반
  'EEG', '목이굽어슬프조', 'MJ', 'Lov3', '홈즈', 'OG',
  // 2분반
  'Surface', '줍줍단', 'HP', 'PenQueens', '바빠도 게임은 해야지', 'FHTC',
  // 3분반
  '로로', '함께해조', '취중감량', '삼시세끼',
  // 4분반
  '방과후 Securi티타임', 'SCP', '예의주시', 'LogFlow', 'ViVi', '이수경',
  // 5분반
  'Triple B', '따라큐', '가디언즈', 'StoryLab', 'SWAG',
  // 6분반 (파이팅 팀의 팀명 표기는 PIEating)
  'PIEating', '23이삼', '네박자', '심플텍',
];

const rank = new Map(TEAM_ORDER.map((t, i) => [t, i]));
export const ORDERED_PROJECTS = PROJECTS.map((p, i) => ({ p, i }))
  .sort((a, b) => (rank.get(a.p.team) ?? 1e4 + a.i) - (rank.get(b.p.team) ?? 1e4 + b.i))
  .map(({ p }) => p);

if (import.meta.env.DEV) {
  const known = new Set(PROJECTS.map((p) => p.team));
  TEAM_ORDER.filter((t) => !known.has(t)).forEach((t) => console.warn(`[order.js] 없는 팀명: ${t}`));
}
