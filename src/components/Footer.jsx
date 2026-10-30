import { Send, Heart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/site';

function InstagramIcon({ size = 18, ...props }) {
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
    <footer className="deux-footer-actual">
      <div className="deux-container">
        {/* TOP ROW: NEWSLETTER & INFO */}
        <div className="deux-footer-top-grid">
          <div className="footer-intro-col">
            <div className="footer-brand-header">
              <img src="/logo.jpg" alt={SITE_CONFIG.name} className="footer-logo-badge" />
              <span className="footer-mini-brand">erles bakery</span>
            </div>
            <p className="footer-intro-desc">
              Homemade bakery and artisan kitchen based in Malang. Menyajikan roti hangat,
              donat kentang, dan hampers spesial yang dibuat dengan bahan jujur dan penuh ketulusan.
            </p>
            <div className="footer-contact-links">
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noreferrer">
                WA: {SITE_CONFIG.phone}
              </a>
              <span className="sep">•</span>
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="insta-link"
              >
                <InstagramIcon size={14} />
                <span>{SITE_CONFIG.instagramHandle}</span>
              </a>
            </div>
          </div>

          <div className="footer-news-col">
            <h4>Subscribe Newsletter</h4>
            <p>Dapatkan kabar roti mingguan, varian hampers terbatas, dan promo spesial.</p>
            <form className="deux-footer-news-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Alamat email Anda..."
                aria-label="Alamat email untuk newsletter"
                required
              />
              <button type="submit" aria-label="Kirim langganan">
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE ROW: NAV LINKS & STORE */}
        <div className="deux-footer-mid-grid">
          <div className="footer-links-col">
            <h5>Navigasi</h5>
            <ul>
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/pesanan">Menu & Katalog</Link>
              </li>
              <li>
                <Link to="/pesanan?kategori=Hampers">Hampers Spesial</Link>
              </li>
              <li>
                <Link to="/tentang">Tentang Kami</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5>Jam Operasional</h5>
            <p className="hours-text">
              <strong>{SITE_CONFIG.hours.split(':')[0]}:</strong>
              <br />
              {SITE_CONFIG.hours.split(': ').slice(1).join(': ')}
            </p>
            <p className="fresh-note">
              <em>{SITE_CONFIG.freshNote}</em>
            </p>
          </div>

          <div className="footer-links-col">
            <h5>Lokasi & Kontak</h5>
            <p className="address-text">{SITE_CONFIG.address}</p>
            <div className="footer-links-sub">
              <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noreferrer">
                <span>Chat Admin WhatsApp</span>
                <ArrowUpRight size={13} />
              </a>
              <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noreferrer">
                <span>Instagram Resmi</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="deux-footer-bottom">
          <p>© {new Date().getFullYear()} Erles Bakery. Homemade in Malang. Seluruh hak cipta dilindungi.</p>
          <div className="made-with-love">
            <span>Dipanggang dengan</span>
            <Heart size={13} fill="#CC4A3B" color="#CC4A3B" />
            <span>untuk keluarga Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
