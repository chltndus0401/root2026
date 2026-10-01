// 프로젝트 데이터 — 노션 내용 받아서 여기에 채우면 목록/상세에 자동 반영됩니다.
// id 는 URL(/project/:id)에 쓰이므로 영문 소문자/숫자/하이픈으로.
// images: src/assets/projects/ 에 넣고 import 하거나, public/projects/ 에 넣고 '/projects/파일명' 경로로.
// 순서 = 목록 순서 = 상세 하단 이전/다음 순서

const sample = (n) => ({
  id: `team-${n}`,
  subtitle: '부제',
  name: '프로젝트명',
  team: `팀명 ${n}`,
  thumbnail: null,
  keywords: ['IoT', 'Android', 'Deep Learning', 'MSA', 'WebRTC SFU'],
  images: [null, null, null],
  intent: '상세 내용 기입 예정',
  stack: {
    skill: ['React', 'Spring Boot'],
    tool: ['Figma', 'GitHub'],
    device: ['Raspberry Pi'],
  },
  members: [
    { name: '이름', role: '역할', comment: '졸업 소감' },
  ],
  questions: [
    { q: '팀 질문', a: '답변' },
  ],
  thanksTo: '',
});

export const PROJECTS = Array.from({ length: 9 }, (_, i) => sample(i + 1));
