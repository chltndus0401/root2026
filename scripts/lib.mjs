// 공통: content/*.txt 목록 → 팀 id 부여 (build-projects.mjs, convert-photos.mjs 가 같이 씀)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const CONTENT_DIR = path.join(ROOT, 'content');
export const PHOTO_DIR = path.join(ROOT, 'raw-photos');
export const PUBLIC_PROJECTS = path.join(ROOT, 'public', 'projects');

// macOS 는 한글 파일명을 NFD 로 저장하므로 항상 NFC 로 통일해서 비교
export const nfc = (s) => s.normalize('NFC');

// "01-EEG.txt" → { division: '01', label: '01-EEG', teamFile: 'EEG' }
// 정렬: 분반 → 팀명(가나다/ABC). id: t{분반}-{분반 내 순번 2자리}  예) t01-01
export function listTeams() {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .map(nfc)
    .filter((f) => f.endsWith('.txt'))
    .sort((a, b) => a.localeCompare(b, 'ko'));
  const counter = {};
  return files.map((file) => {
    const m = file.match(/^(\d{2})-(.+)\.txt$/);
    if (!m) throw new Error(`파일명 형식 오류(분반2자리-팀명.txt): ${file}`);
    const [, division, teamFile] = m;
    counter[division] = (counter[division] || 0) + 1;
    return {
      file,
      division,
      teamFile,
      label: `${division}-${teamFile}`,
      id: `t${division}-${String(counter[division]).padStart(2, '0')}`,
    };
  });
}
