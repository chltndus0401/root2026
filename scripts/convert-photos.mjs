// 사용법: node scripts/convert-photos.mjs
// raw-photos/<분반-팀명>/*.png|jpg  →  public/projects/<id>/1.webp, 2.webp, ...
//   - raw-photos 폴더 이름은 content 의 txt 파일명과 똑같이 (예: raw-photos/01-EEG/)
//   - 파일은 이름순(자연 정렬)으로 1.webp, 2.webp… 로 저장. 첫 번째 사진이 기본 썸네일.
//   - 특정 사진을 썸네일로 쓰고 싶으면 파일명을 thumbnail.png / thumbnail.jpg 로.
//   - 긴 변 1600px 이하, webp 품질 80 으로 변환 (원본은 건드리지 않음)
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { PHOTO_DIR, PUBLIC_PROJECTS, listTeams, nfc } from './lib.mjs';

const MAX = 1600;
const QUALITY = 80;
const isImg = (f) => /\.(png|jpe?g|webp|heic)$/i.test(f);
const natural = (a, b) => a.localeCompare(b, 'ko', { numeric: true });

if (!fs.existsSync(PHOTO_DIR)) {
  console.error(`raw-photos 폴더가 없습니다: ${PHOTO_DIR}\n팀별 폴더(예: raw-photos/01-EEG/)를 만들고 사진을 넣어주세요.`);
  process.exit(1);
}

const teams = listTeams();
const byLabel = new Map(teams.map((t) => [nfc(t.label), t]));
const folders = fs.readdirSync(PHOTO_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);

const unmatched = [];
const done = new Set();
let total = 0, bytesIn = 0, bytesOut = 0;

for (const folder of folders) {
  const t = byLabel.get(nfc(folder));
  if (!t) { unmatched.push(folder); continue; }
  const src = path.join(PHOTO_DIR, folder);
  const files = fs.readdirSync(src).filter(isImg).sort(natural);
  if (!files.length) continue;

  const outDir = path.join(PUBLIC_PROJECTS, t.id);
  fs.rmSync(outDir, { recursive: true, force: true }); // 샘플/이전 결과 제거 후 다시 생성
  fs.mkdirSync(outDir, { recursive: true });

  let n = 0;
  for (const f of files) {
    const isThumb = /^thumbnail\./i.test(f);
    const outName = isThumb ? 'thumbnail.webp' : `${++n}.webp`;
    const input = path.join(src, f);
    await sharp(input)
      .rotate() // 폰 사진의 회전 정보(EXIF) 반영
      .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(path.join(outDir, outName));
    bytesIn += fs.statSync(input).size;
    bytesOut += fs.statSync(path.join(outDir, outName)).size;
    total++;
  }
  done.add(t.id);
  console.log(`✔ ${t.label}  →  public/projects/${t.id}/  (${files.length}장)`);
}

const mb = (b) => (b / 1024 / 1024).toFixed(1) + 'MB';
console.log(`\n총 ${total}장 변환: ${mb(bytesIn)} → ${mb(bytesOut)}`);
const missing = teams.filter((t) => !done.has(t.id));
if (missing.length) console.log(`\n⚠ 사진이 없는 팀 ${missing.length}팀:\n  ` + missing.map((t) => t.label).join('\n  '));
if (unmatched.length) console.log(`\n⚠ 팀과 이름이 안 맞는 폴더 ${unmatched.length}개 (폴더명을 txt 파일명과 똑같이 바꿔주세요):\n  ` + unmatched.join('\n  '));
console.log('\n다음: node scripts/build-projects.mjs  (사진 경로가 projects.js 에 자동 반영됩니다)');
