# ROOT 2026 — 덕성여대 디지털소프트웨어공학부 제1회 졸업전시 웹사이트

Vite + React + React Router. Vercel 정적 배포 (`root2026.vercel.app`).

## 실행
```bash
npm install
cp .env.example .env   # 키 입력
npm run dev            # http://localhost:5173
npm run build
```

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


## 방명록 (Firestore)
- Firebase 웹앱 구성값을 `VITE_FIREBASE_*` 에 입력하면 실시간 공유 방명록으로 동작
- 비워두면 해당 브라우저에만 저장되는 데모 모드


## 구조
```
src/
  components/  Splash, Header, Footer, ScrollTopButton, CustomCursor, FadeIn, Slider, PageTitle, Layout
  pages/       Home, Projects, ProjectDetail, Maps, Messages, Book, ThanksTo
  data/        site.js, projects.js, people.js
  lib/         kakao.js, guestbook.js
```
