export default function SourceNotice({ className = '' }) {
  return (
    <p className={`source-notice ${className}`.trim()}>
      이 사이트는{' '}
      <a
        href="https://2025sw.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>2025학년도 덕성여자대학교 소프트웨어전공 졸업전시 사이트</strong>
      </a>
      를 참고하여 제작되었습니다.
    </p>
  );
}
