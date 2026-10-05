// 사용법: node scripts/check-data.mjs   (그리고 생성된 check-report.html 을 더블클릭해서 브라우저로 열기)
// projects.js 의 모든 사진 경로가 실제로 있는지, 대소문자까지 맞는지 검사하고
// 31팀 전체를 한 페이지에서 훑어볼 수 있는 check-report.html 을 만듭니다. (git 에는 올리지 마세요)
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './lib.mjs';

const src = fs.readFileSync(path.join(ROOT, 'src', 'data', 'projects.js'), 'utf8').replace('export const PROJECTS =', 'return');
const PROJECTS = new Function(src)();
const PUB = path.join(ROOT, 'public');

const problems = [];
const bad = (p, msg) => problems.push(`[${p.id} ${p.team}] ${msg}`);

// 대소문자까지 정확히 일치하는지 (Windows/Mac 은 대소문자를 무시하지만 Vercel(리눅스)은 구분함)
function existsExact(webPath) {
  const parts = webPath.replace(/^\//, '').split('/');
  let dir = PUB;
  for (const part of parts) {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return false;
    if (!fs.readdirSync(dir).map((x) => x.normalize('NFC')).includes(part.normalize('NFC'))) return false;
    dir = path.join(dir, part);
  }
  return true;
}

const ids = new Set();
for (const p of PROJECTS) {
  if (ids.has(p.id)) bad(p, 'id 중복');
  ids.add(p.id);
  if (!/^[a-z0-9-]+$/.test(p.id)) bad(p, 'id 는 영문 소문자/숫자/하이픈만');
  if (!p.name) bad(p, '프로젝트명 비어 있음');
  if (!p.intent) bad(p, '기획 의도 비어 있음');
  if (!p.members?.length) bad(p, '멤버 없음');
  if (!p.thumbnail) bad(p, '썸네일 없음');
  if (!p.images?.length) bad(p, '갤러리 사진 없음');
  for (const img of [p.thumbnail, ...(p.images || [])].filter(Boolean)) {
    if (!existsExact(img)) bad(p, `사진 파일 없음(또는 대소문자 불일치): ${img}`);
    else {
      const kb = fs.statSync(path.join(PUB, img)).size / 1024;
      if (kb > 800) bad(p, `사진이 큼 ${Math.round(kb)}KB (800KB 이하 권장): ${img}`);
    }
  }
  // public/projects/<id>/ 에 있는데 projects.js 에서 안 쓰는 파일
  const dir = path.join(PUB, 'projects', p.id);
  if (fs.existsSync(dir)) {
    const used = new Set([p.thumbnail, ...(p.images || [])].filter(Boolean).map((x) => path.basename(x)));
    for (const f of fs.readdirSync(dir)) if (!used.has(f)) bad(p, `쓰이지 않는 파일: ${f} (build-projects 를 다시 실행했는지 확인)`);
  }
}
// projects.js 에 없는 팀 폴더
const projDir = path.join(PUB, 'projects');
if (fs.existsSync(projDir)) {
  for (const d of fs.readdirSync(projDir, { withFileTypes: true }))
    if (d.isDirectory() && !ids.has(d.name)) problems.push(`[폴더] public/projects/${d.name}/ 는 어느 팀 id 와도 안 맞음 (이전 샘플 폴더면 삭제)`);
}

// ---------- 콘솔 요약 ----------
console.log(`팀 ${PROJECTS.length}개`);
console.log('id      사진  썸네일  Thanks  팀명');
for (const p of PROJECTS)
  console.log(`${p.id}  ${String(p.images.length).padStart(3)}   ${p.thumbnail ? ' O ' : ' X '}    ${p.thanksTo ? ' O ' : '(빈)'}   ${p.team}`);
console.log(problems.length ? `\n⚠ 문제 ${problems.length}건\n` + problems.map((x) => '  ' + x).join('\n') : '\n✔ 문제 없음');

// ---------- HTML 리포트 ----------
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const rel = (p) => './public' + p;
const html = `<!doctype html><meta charset="utf-8"><title>데이터 점검</title>
<style>
body{font-family:system-ui,sans-serif;margin:24px;background:#fafafa;color:#222}
.team{background:#fff;border:1px solid #ddd;border-radius:10px;padding:16px;margin:0 0 18px}
h2{margin:0 0 4px;font-size:18px} .sub{color:#666;margin:0 0 10px;font-size:14px}
.row{display:flex;gap:10px;flex-wrap:wrap;align-items:flex-start}
figure{margin:0} figcaption{font-size:11px;color:#888;margin-top:2px}
img{height:150px;border:1px solid #ccc;border-radius:6px;background:#eee;display:block}
.thumb img{height:150px;outline:3px solid #4a9}
.meta{font-size:13px;color:#444;margin-top:10px;line-height:1.5}
.warn{color:#b00;font-weight:600} .ok{color:#080}
</style>
<h1>데이터 점검 (${PROJECTS.length}팀)</h1>
<p>초록 테두리 = 썸네일. 이미지가 깨져 보이면 경로/파일이 잘못된 것입니다.</p>
${problems.length ? `<div class="team warn"><b>문제 ${problems.length}건</b><br>${problems.map(esc).join('<br>')}</div>` : '<div class="team ok"><b>파일/경로 검사 문제 없음</b></div>'}
${PROJECTS.map((p) => `<div class="team"><h2>${esc(p.id)} · ${esc(p.team)} — ${esc(p.name)}</h2>
<p class="sub">${esc(p.subtitle)}</p>
<div class="row">
${p.thumbnail ? `<figure class="thumb"><img src="${esc(rel(p.thumbnail))}"><figcaption>thumbnail</figcaption></figure>` : '<span class="warn">썸네일 없음</span>'}
${p.images.map((x, i) => `<figure><img src="${esc(rel(x))}"><figcaption>${i + 1}</figcaption></figure>`).join('')}
</div>
<div class="meta">키워드: ${esc(p.keywords.join(' / '))}<br>멤버 ${p.members.length}명: ${esc(p.members.map((m) => m.name).join(', '))}<br>
기획 의도 ${p.intent.replace(/\s/g, '').length}자(공백 제외) · Special Thanks: ${p.thanksTo ? p.thanksTo.length + '자' : '<b>(빈 문자열)</b>'}</div></div>`).join('\n')}`;
fs.writeFileSync(path.join(ROOT, 'check-report.html'), html);
console.log('\n→ check-report.html 생성됨 (브라우저로 열어서 사진 확인)');
