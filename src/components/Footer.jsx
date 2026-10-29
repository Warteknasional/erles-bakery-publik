import { MapPin, Phone, Send, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

function InstagramIcon({ size = 17, ...props }) {
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
    <footer className="deux-footer">
      <div className="deux-footer-container">
        {/* TOP BRAND & NEWSLETTER STRIP */}
        <div className="deux-footer-top">
          <div className="deux-footer-brand-col">
            <span className="deux-footer-logo">erles bakery</span>
            <p className="deux-footer-tagline">
              Produsen roti manis, artisan sourdough, donat kentang, dan hampers istimewa dari dapur
              rumahan di Kota Malang.
            </p>
          </div>

          <div className="deux-footer-newsletter">
            <h4>Langganan Kabar Dapur & Promo</h4>
            <p>Dapatkan info varian roti mingguan dan promo hampers spesial.</p>
            <form className="deux-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Masukkan alamat email Anda..." />
              <button type="submit" aria-label="Langganan">
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER GRID */}
        <div className="deux-footer-grid">
          {/* KOLOM 1: NAVIGASI */}
          <div className="deux-footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li>
                <Link to="/">Beranda</Link>
              </li>
              <li>
                <Link to="/pesanan">Katalog Produk & Hampers</Link>
              </li>
              <li>
                <Link to="/tentang">Tentang Erles Bakery</Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 2: JAM OPERASIONAL */}
          <div className="deux-footer-col">
            <h4>Jam Buka & Dapur</h4>
            <p>
              <strong>Senin - Sabtu:</strong>
              <br />
              07.00 - 21.00 WIB
            </p>
            <p>
              <strong>Minggu:</strong>
              <br />
              08.00 - 18.00 WIB
            </p>
          </div>

          {/* KOLOM 3: LOKASI & KONTAK */}
          <div className="deux-footer-col">
            <h4>Lokasi Dapur & Toko</h4>
            <div className="deux-footer-contact-item">
              <MapPin size={16} />
              <span>
                Jl. Vinolia No. 25B, Lowokwaru,
                <br />
                Kota Malang, Jawa Timur
              </span>
            </div>

            <div className="deux-footer-contact-item">
              <Phone size={16} />
              <a
                href="https://wa.me/6285717224420"
                target="_blank"
                rel="noreferrer"
                className="footer-wa-link"
              >
                +62 857-1722-4420 (WhatsApp)
              </a>
            </div>
          </div>

          {/* KOLOM 4: SOSIAL MEDIA */}
          <div className="deux-footer-col">
            <h4>Media Sosial</h4>
            <p>Ikuti kreasi panggangan harian kami di Instagram:</p>
            <div className="deux-footer-socials">
              <a
                href="https://www.instagram.com/erles_donut.mlg"
                target="_blank"
                rel="noreferrer"
                className="deux-social-btn"
                aria-label="Instagram @erles_donut.mlg"
              >
                <InstagramIcon size={17} />
                <span>@erles_donut.mlg</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="deux-footer-bottom">
          <p>© 2026 Erles Bakery. Seluruh hak cipta dilindungi.</p>
          <p className="deux-footer-credit">
            Baked with <Heart size={13} fill="#CC4A3B" color="#CC4A3B" /> in Malang, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
