# ROOT 2026 — 덕성여대 디지털소프트웨어공학부 제1회 졸업전시 웹사이트

Vite + React + React Router. Vercel 정적 배포 (`root2026.vercel.app`).

## 실행
```bash
npm install
cp .env.example .env   # 키 입력
npm run dev            # http://localhost:5173
npm run build
```

## Vercel 배포
1. GitHub에 push → Vercel에서 Import (Framework: Vite 자동 인식)
2. Project name을 `root2026` 으로 → `root2026.vercel.app`
3. Settings > Environment Variables 에 `.env.example` 항목 입력 후 Redeploy
4. `vercel.json` 이 SPA 라우팅(`/project/:id` 새로고침 404 방지)을 처리합니다.

## 콘텐츠 채우는 곳 (코드 수정 없이 데이터만)
| 내용 | 파일 |
|---|---|
| 프로젝트(노션) 내용, 썸네일, 갤러리 | `src/data/projects.js` |
| 교수님 축사·사진 | `src/data/people.js` (`PROFESSORS`) |
| 참여 학생 / 졸준위 | `src/data/people.js` |
| 전시 정보, 주소, 카톡 초대장 문구 | `src/data/site.js` |
| 도록 PDF (구글 드라이브 파일 ID) | `src/data/site.js` → `BOOK_DRIVE_FILE_ID` |
| 부스 배치표 이미지 | `src/data/site.js` → `BOOTH_MAP_IMAGE` |
| 전시장 안내 사진 추가 | `src/pages/Home.jsx` → `VENUE_PHOTOS` |

이미지는 `public/projects/팀id/1.webp` 처럼 넣고 `'/projects/팀id/1.webp'` 로 쓰는 게 가장 간단합니다.

## 카카오톡 공유
- 카카오 디벨로퍼스 > 앱 > 플랫폼 > Web 에 `https://root2026.vercel.app` (와 `http://localhost:5173`) 등록
- JavaScript 키를 `VITE_KAKAO_JS_KEY` 에 입력
- 키가 없으면 버튼이 링크 복사로 동작합니다.

## 방명록 (Firestore)
- Firebase 웹앱 구성값을 `VITE_FIREBASE_*` 에 입력하면 실시간 공유 방명록으로 동작
- 비워두면 해당 브라우저에만 저장되는 데모 모드
- Firestore 보안 규칙은 `firestore.rules` 내용을 콘솔에 붙여넣기 (읽기·작성만 허용, 수정/삭제 금지)
- 내 메시지 구분: 브라우저별 `userId`(localStorage) 를 함께 저장해 오른쪽 초록 말풍선으로 표시

## 구조
```
src/
  components/  Splash, Header(+햄버거 메뉴), Footer, ScrollTopButton, CustomCursor, FadeIn, Slider, PageTitle, Layout
  pages/       Home, Projects, ProjectDetail, Maps, Messages, Book, ThanksTo
  data/        site.js, projects.js, people.js
  lib/         kakao.js, guestbook.js
```
