import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import InstagramIcon from './InstagramIcon';

export default function Footer() {
  return (
    <footer className="erles-footer">
      <div className="erles-footer-container">
        <div className="erles-footer-grid">
          {/* KOLOM 1: Tentang Erles Bakery */}
          <div className="footer-column footer-about">
            <div className="footer-logo-title">
              <span>Erles Bakery</span>
            </div>
            <p>
              Produksi rumahan roti manis, donat lembut aneka topping, dan hampers spesial. Dibuat langsung dari dapur kami di Malang dengan bahan berkualitas untuk keluarga Anda.
            </p>
          </div>

          {/* KOLOM 2: Waktu Operasional & Pemesanan */}
          <div className="footer-column">
            <h4>
              <Clock size={16} className="footer-heading-icon" />
              Pemesanan &amp; Pengambilan
            </h4>
            <p>
              <strong>Senin - Sabtu:</strong>
              <br />
              07.00 - 17.00 WIB
            </p>
            <p className="footer-note-text">
              *Sebaiknya pesan H-1 untuk pesanan donat bervolume banyak dan hampers perayaan.
            </p>
          </div>

          {/* KOLOM 3: Alamat & Kontak Asli */}
          <div className="footer-column">
            <h4>
              <MapPin size={16} className="footer-heading-icon" />
              Dapur &amp; Kontak
            </h4>

            <div className="footer-contact-item">
              <MapPin size={16} className="footer-item-icon" />
              <a
                href="https://maps.google.com/?q=Jl.+Ikan+Gurami+No.+7,+Malang"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Jl. Ikan Gurami No. 7,
                <br />
                Malang, Jawa Timur 65142
              </a>
            </div>

            <div className="footer-contact-item">
              <Phone size={16} className="footer-item-icon" />
              <a
                href="https://wa.me/6282145345270"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                0821-4534-5270 (WhatsApp)
              </a>
            </div>
          </div>

          {/* KOLOM 4: Media Sosial & Menu Cepat */}
          <div className="footer-column">
            <h4>Ikuti Kami</h4>
            <p>
              Lihat update menu donat harian, promo spesial, dan katalog hampers terbaru.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.instagram.com/erles_donut.mlg/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @erles_donut.mlg"
                className="footer-social-btn"
              >
                <InstagramIcon size={18} />
              </a>

              <a
                href="https://wa.me/6282145345270"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat WhatsApp 0821-4534-5270"
                className="footer-social-btn"
              >
                <MessageCircle size={18} />
              </a>
            </div>

            <div className="footer-quick-links">
              <Link to="/pesanan" className="footer-text-link">Pesan Donat &amp; Roti</Link>
              <span className="footer-link-divider">•</span>
              <Link to="/tentang" className="footer-text-link">Cerita Kami</Link>
            </div>
          </div>
        </div>

        {/* BAGIAN BAWAH FOOTER */}
        <div className="footer-bottom">
          <p>
            &copy; 2026 Erles Bakery Malang. Dikelola langsung dari dapur rumah tangga.
          </p>
          <p className="footer-tagline">
            Donat lembut dan roti manis hangat untuk setiap senyum di meja Anda.
          </p>
        </div>
      </div>
    </footer>
  );
}