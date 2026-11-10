import { Heart, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/site';

function InstagramIcon({ size = 13, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="deux-footer-compact">
      <div className="deux-container">
        <div className="footer-compact-main">
          {/* BRAND & SHORT ADDRESS */}
          <div className="footer-compact-brand">
            <img src="/logo.jpg" alt="Erles Bakery" className="footer-compact-logo" />
            <div className="footer-compact-brand-text">
              <span className="footer-compact-name">erles bakery</span>
              <a href={SITE_CONFIG.mapsUrl} target="_blank" rel="noreferrer" className="footer-compact-tagline" title="Buka di Google Maps">{SITE_CONFIG.addressShort} ↗</a>
            </div>
          </div>

          {/* COMPACT NAV LINKS */}
          <nav className="footer-compact-nav" aria-label="Footer Navigasi">
            <Link to="/">Beranda</Link>
            <Link to="/pesanan">Menu</Link>
            <Link to="/lacak-pesanan" className="footer-nav-track">
              Lacak Pesanan ⚡
            </Link>
            <Link to="/tentang">Tentang</Link>
            <Link to="/kontak">Kontak</Link>
          </nav>

          {/* SOCIAL & WA SHORTCUTS */}
          <div className="footer-compact-socials">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-social-pill"
              title="Instagram Erles Bakery"
            >
              <InstagramIcon size={13} />
              <span>{SITE_CONFIG.instagramHandle}</span>
            </a>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-social-pill wa"
              title="WhatsApp Dapur"
            >
              <MessageCircle size={13} />
              <span>WhatsApp Dapur</span>
            </a>
          </div>
        </div>

        {/* BOTTOM MINIMAL COPYRIGHT ROW */}
        <div className="footer-compact-bottom">
          <p>© 2026 Erles Bakery. Seluruh hak cipta dilindungi.</p>
          <p className="footer-compact-baked">
            Baked with <Heart size={12} fill="#CC4A3B" color="#CC4A3B" /> in Malang, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
