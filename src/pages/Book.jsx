import PageTitle from '../components/PageTitle';
import { BOOK_DRIVE_FILE_ID } from '../data/site';

export default function Book() {
  return (
    <div className="container container--wide container--fill">
      <PageTitle sub="온라인 도록 공개" note="* 로드 오류 발생 시 새로고침 권장" />
      {BOOK_DRIVE_FILE_ID && (
        <div className="book-viewer">
          <iframe
            src={`https://drive.google.com/file/d/${BOOK_DRIVE_FILE_ID}/preview`}
            title="졸업전시회 ROOT 온라인 도록"
            allow="autoplay"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
