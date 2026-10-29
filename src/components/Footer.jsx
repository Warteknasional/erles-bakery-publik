import { Send, Heart, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <span className="footer-mini-brand">erles bakery</span>
            <p className="footer-intro-desc">
              Homemade bakery and artisan kitchen based in Malang. Menyajikan roti hangat,
              donat kentang, dan hampers spesial yang dibuat dengan bahan jujur dan penuh ketulusan.
            </p>
            <div className="footer-contact-links">
              <a href="https://wa.me/6285717224420" target="_blank" rel="noreferrer">
                WA: +62 857-1722-4420
              </a>
              <span className="sep">•</span>
              <a
                href="https://www.instagram.com/erles_donut.mlg"
                target="_blank"
                rel="noreferrer"
                className="insta-link"
              >
                <InstagramIcon size={14} />
                <span>@erles_donut.mlg</span>
              </a>
            </div>
          </div>

          <div className="footer-news-col">
            <h4>Subscribe Newsletter</h4>
            <p>Dapatkan kabar roti mingguan, varian hampers terbatas, dan promo spesial.</p>
            <form className="deux-footer-news-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Alamat email Anda..." />
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
              <strong>Senin - Minggu:</strong>
              <br />
              07.00 - 21.00 WIB
            </p>
            <p className="fresh-note">
              <em>*Panggangan pertama siap pukul 06.30 WIB setiap pagi</em>
            </p>
          </div>

          <div className="footer-links-col">
            <h5>Alamat Dapur</h5>
            <p className="address-text">
              Jl. Vinolia No. 25B, Lowokwaru,
              <br />
              Kota Malang, Jawa Timur 65142
            </p>
            <a
              href="https://maps.google.com/?q=Jl.+Vinolia+No.+25B+Lowokwaru+Malang"
              target="_blank"
              rel="noreferrer"
              className="footer-map-link"
            >
              <span>Petunjuk Arah Google Maps</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="deux-footer-legal-row">
          <p>© 2026 ERLES BAKERY. Seluruh hak cipta dilindungi.</p>
          <p className="deux-footer-baked">
            Baked with <Heart size={13} fill="#CC4A3B" color="#CC4A3B" /> in Malang, Indonesia
          </p>
        </div>

        {/* GIANT ICONIC BRAND TITLE (DEUX BAKERY SIGNATURE) */}
        <div className="deux-giant-footer-title">
          <span>erles bakery</span>
        </div>
      </div>
    </footer>
  );
}
