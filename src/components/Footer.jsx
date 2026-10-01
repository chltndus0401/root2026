import { SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <p>{SITE.title}</p>
      <p>{SITE.exhibition}</p>
      <p>
        {SITE.period} {SITE.venueShort}
      </p>
      <p>Copyright ⓒ {SITE.title} All rights reserved.</p>
    </footer>
  );
}
