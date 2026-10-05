// 사용법: node scripts/build-projects.mjs
// content/*.txt (노션 내보내기) → src/data/projects.js 생성
// public/projects/<id>/ 에 이미 변환된 사진이 있으면 thumbnail / images 도 자동으로 채움
import fs from 'node:fs';
import path from 'node:path';
import { ROOT, CONTENT_DIR, PUBLIC_PROJECTS, listTeams } from './lib.mjs';

// Special Thanks 가 이 값 중 하나뿐이면 '없음'으로 보고 빈 문자열 처리 (필요 시 수정)
const EMPTY_MARKERS = ['X', 'x', '-', '–', '—', '.', '없음'];
const warnings = [];
const emptyThanks = [];
const warn = (team, msg) => warnings.push(`[${team}] ${msg}`);

// ---------- 문자열 유틸 ----------
const clean = (s) =>
  s
    .replace(/\*\*/g, '')
    .replace(/`/g, '')
    .replace(/^[“"'‘]+|[”"'’]+$/g, '')
    .trim();

// 괄호 안의 쉼표는 무시하고 쉼표로 분리
function splitComma(s) {
  const out = [];
  let depth = 0, cur = '';
  for (const ch of s) {
    if ('([{（'.includes(ch)) depth++;
    if (')]}）'.includes(ch)) depth = Math.max(0, depth - 1);
    if ((ch === ',' || ch === '，' || ch === '·') && depth === 0) { out.push(cur); cur = ''; } else cur += ch;
  }
  out.push(cur);
  return out.map((x) => clean(x)).filter(Boolean);
}

const strip = (x) => x.normalize('NFC').replace(/\p{Extended_Pictographic}|\s/gu, '');
const indentOf = (l) => l.match(/^\s*/)[0].length;
const stripAside = (s) => s.replace(/<aside>[\s\S]*?<\/aside>/g, '');
const paragraphs = (s) =>
  s.split(/\n\s*\n/).map((p) => p.split('\n').map((l) => l.trim()).filter(Boolean).join('\n')).filter(Boolean);

// ---------- 섹션 분리 ----------
function splitSections(text) {
  const lines = text.split('\n');
  const sections = {};
  let key = null;
  for (const line of lines) {
    const m = line.match(/^- `([^`]+)`/);
    if (m) { key = m[1].trim(); sections[key] = []; continue; }
    if (key) sections[key].push(line);
  }
  return Object.fromEntries(Object.entries(sections).map(([k, v]) => [k, v.join('\n')]));
}

const pick = (sections, name) => {
  const k = Object.keys(sections).find((x) => x.toLowerCase().startsWith(name.toLowerCase()));
  return k ? sections[k] : '';
};

// ---------- 각 섹션 파서 ----------
function parseKeywords(body) {
  return stripAside(body)
    .split('\n')
    .filter((l) => /^\s*-\s+/.test(l))
    .map((l) => clean(l.replace(/^\s*-\s+/, '')))
    .filter(Boolean);
}

function parseStack(body, team) {
  const lines = stripAside(body).split('\n').filter((l) => l.trim());
  const bullets = lines.filter((l) => /^\s*-\s+/.test(l));
  const base = bullets.length ? Math.min(...bullets.map(indentOf)) : 0;
  const stack = { skill: [], tool: [], device: [] };
  let cur = null;
  const addValues = (key, raw) => {
    // "라벨: 값1, 값2" 형태면 라벨은 버리고 값만
    const m = raw.match(/^([^:：,]{1,25})\s*[:：]\s*(.*)$/);
    stack[key].push(...splitComma(m ? m[2] : raw));
  };
  for (const l of lines) {
    const isBullet = /^\s*-\s+/.test(l);
    const text = l.replace(/^\s*-\s+/, '').replace(/\*\*/g, '').trim();
    if (isBullet && indentOf(l) === base) {
      const m = text.match(/^([^:：]+?)\s*[:：]\s*(.*)$/);
      if (!m) { warn(team, `Stack 항목 인식 실패: ${text.slice(0, 40)}`); cur = null; continue; }
      const label = m[1].trim().toLowerCase();
      // Skill / Tool / Device 외의 라벨(기타, 외부 API 등)은 화면에 보이도록 tool 로 합침
      cur = ['skill', 'tool', 'device'].includes(label) ? label : 'tool';
      if (cur === 'tool' && label !== 'tool') warn(team, `Stack 라벨 "${m[1].trim()}" → tool 로 합침`);
      if (m[2]) stack[cur].push(...splitComma(m[2]));
    } else if (cur) {
      if (isBullet) stack[cur].push(clean(text)); // 하위 불릿: 한 줄 = 한 항목
      else addValues(cur, text); // 줄바꿈된 이어쓰기
    }
  }
  if (!stack.skill.length && !stack.tool.length && !stack.device.length) warn(team, 'Stack 전부 비어 있음');
  else if (!stack.skill.length) warn(team, 'Stack/Skill 비어 있음 (필요하면 직접 채우기)');
  return stack;
}

function parseMembers(body, team) {
  const lines = stripAside(body).split('\n').filter((l) => l.trim());
  const bullets = lines.filter((l) => /^\s*-\s+/.test(l));
  if (!bullets.length) return [];
  const base = Math.min(...bullets.map(indentOf));
  const members = [];
  let m = null, field = null;
  for (const l of lines) {
    const isBullet = /^\s*-\s+/.test(l);
    const text = l.replace(/^\s*-\s+/, '').replace(/\*\*/g, '').trim();
    if (isBullet && indentOf(l) === base) {
      m = { name: clean(text), role: '', comment: '', song: '' };
      members.push(m); field = null;
    } else if (m && isBullet) {
      // "역할: x" / "역할 : x" / "역할 x" / "포지션 : PM" / "개발 파트 : x" / "노래 [가수-제목]: x"
      const f = text.match(/^(역할|포지션|개발 파트|하고 싶은 말|노래(?:\s*\[[^\]]*\])?)\s*[:：]?\s*(.*)$/);
      if (!f) { warn(team, `멤버(${m.name}) 항목 인식 실패: ${text.slice(0, 30)}`); continue; }
      const k = f[1];
      field = k === '역할' || k === '포지션' || k === '개발 파트' ? 'role' : k.startsWith('하고') ? 'comment' : 'song';
      m[field] = m[field] && field === 'role' ? m[field] + ', ' + f[2].trim() : f[2].trim();
    } else if (m && field) {
      m[field] += ' ' + text; // 줄바꿈된 이어쓰기
    }
  }
  for (const x of members) {
    if (!x.role) warn(team, `멤버 ${x.name}: 역할 비어 있음`);
    if (!x.comment) warn(team, `멤버 ${x.name}: 하고 싶은 말 비어 있음`);
  }
  return members;
}

function parseQuestions(body, team) {
  const txt = stripAside(body).replace(/\*\*/g, '').split('\n').map((l) => l.trim()).join('\n').trim();
  if (!txt) return [];
  // "Q." 로 시작하는 블록 단위로 분리
  const blocks = txt.split(/^Q\s*[.．]\s*/m).map((b) => b.trim()).filter(Boolean);
  const out = [];
  for (const b of blocks) {
    const idx = b.search(/^A\s*[.．]/m);
    let q, a;
    if (idx >= 0) {
      q = b.slice(0, idx);
      a = b.slice(idx).replace(/^A\s*[.．]\s*/gm, '');
    } else {
      const ps = b.split(/\n\s*\n/);
      q = ps[0];
      a = ps.slice(1).join('\n');
    }
    q = q.replace(/\s*\n\s*/g, ' ').trim();
    a = a.split('\n').map((l) => l.trim()).filter(Boolean).join('\n');
    if (!a) warn(team, `질문 답변이 비어 있거나 인식 실패: "${q.slice(0, 25)}…"`);
    out.push({ q, a });
  }
  return out;
}

// ---------- 파일 1개 → 프로젝트 객체 ----------
function parseTeam(t) {
  const text = fs.readFileSync(path.join(CONTENT_DIR, t.file), 'utf8').replace(/\r/g, '').replace(/\u00a0/g, ' ');
  const head = (label) => {
    const m = text.match(new RegExp('`' + label + '`\\s*[:：]\\s*(.*)'));
    return m ? clean(m[1]) : '';
  };
  const sections = splitSections(text);
  const intent = paragraphs(stripAside(pick(sections, '기획 의도'))).join('\n\n');
  let thanks = paragraphs(stripAside(pick(sections, 'Special Thanks'))).join('\n\n');
  // 노션 템플릿 안내문("(괄호 삭제 후 작성)")이 그대로 남아 있거나, 공백/엔터뿐이면 빈 문자열로 처리
  thanks = thanks.replace(/\(\s*괄호\s*삭제\s*후\s*작성\s*\)/g, '').trim();
  if (EMPTY_MARKERS.includes(thanks)) thanks = ''; // 'X' 등 '없음' 표기

  const p = {
    id: t.id,
    division: t.division,
    subtitle: head('프로젝트 부제'),
    name: head('프로젝트명'),
    team: head('팀명') || t.teamFile,
    thumbnail: null,
    keywords: parseKeywords(pick(sections, 'KEYWORDS')),
    images: [],
    intent,
    stack: parseStack(pick(sections, 'Stack'), t.label),
    members: parseMembers(pick(sections, 'Members'), t.label),
    questions: parseQuestions(pick(sections, 'Team Question'), t.label),
    thanksTo: thanks,
  };

  if (!p.name) warn(t.label, '프로젝트명 비어 있음');
  if (p.keywords.length < 3 || p.keywords.length > 5) warn(t.label, `키워드 ${p.keywords.length}개 (3~5개 권장)`);
  if (!p.intent) warn(t.label, '기획 의도 비어 있음');
  if (p.intent.replace(/\s/g, '').length > 650) warn(t.label, `기획 의도 ${p.intent.replace(/\s/g, '').length}자 (공백 제외, 제한 500-550자)`);
  if (!p.members.length) warn(t.label, '멤버 없음');
  if (!p.thanksTo) emptyThanks.push(t.label);
  else if (p.thanksTo.length < 20) warn(t.label, `Special Thanks 가 매우 짧음: "${p.thanksTo}"`);

  // 폴더 이름 = 파일명 앞부분과 팀명이 다르면 알려주기
  if (head('팀명') && strip(head('팀명')) !== strip(t.teamFile)) {
    warn(t.label, `파일명 팀명(${t.teamFile}) ≠ 문서 안 팀명(${head('팀명')})`);
  }

  // 사진: public/projects/<id>/ 에 있는 파일 자동 연결
  const dir = path.join(PUBLIC_PROJECTS, t.id);
  if (fs.existsSync(dir)) {
    const imgs = fs.readdirSync(dir).filter((f) => /\.(webp|png|jpe?g)$/i.test(f)).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
    const thumb = imgs.find((f) => /^thumbnail\./i.test(f));
    const gallery = imgs.filter((f) => !/^thumbnail\./i.test(f));
    p.images = gallery.map((f) => `/projects/${t.id}/${f}`);
    p.thumbnail = thumb ? `/projects/${t.id}/${thumb}` : p.images[0] || null;
  }
  return p;
}

// ---------- 실행 ----------
const teams = listTeams();
const projects = teams.map(parseTeam);

const header = `// 프로젝트 데이터 — scripts/build-projects.mjs 가 content/*.txt 로부터 생성한 파일입니다.
// (직접 수정해도 되지만, 다시 build 하면 덮어써집니다. 수정은 txt 를 고친 뒤 재실행하는 것을 권장)
// id 는 URL(/project/:id) 에 쓰이므로 영문 소문자/숫자/하이픈으로.
// 이미지는 public/projects/<id>/ 에 두고 '/projects/<id>/파일명' 으로 참조.
// 순서 = 목록 순서 = 상세 하단 이전/다음 순서

`;
const out = header + 'export const PROJECTS = ' + JSON.stringify(projects, null, 2) + ';\n';
fs.mkdirSync(path.join(ROOT, 'src', 'data'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'src', 'data', 'projects.js'), out);

console.log(`✔ ${projects.length}팀 → src/data/projects.js`);
console.log('\nid ↔ 파일 매핑');
for (const t of teams) console.log(`  ${t.id}  ←  ${t.label}`);
console.log(`\nSpecial Thanks 빈 문자열 처리 ${emptyThanks.length}팀:` + (emptyThanks.length ? '\n  ' + emptyThanks.join('\n  ') : ' 없음'));
const noPhoto = projects.filter((p) => !p.images.length).length;
console.log(`\n사진 연결: ${projects.length - noPhoto}팀 / 미연결 ${noPhoto}팀`);
if (warnings.length) {
  console.log(`\n⚠ 확인 필요 ${warnings.length}건`);
  warnings.forEach((w) => console.log('  ' + w));
} else console.log('\n경고 없음');
