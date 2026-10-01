import {
  MapPin,
  Phone,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="erles-footer">
      <div className="erles-footer-container">

        <div className="erles-footer-grid">

          {/* KOLOM 1 */}
          <div className="footer-column footer-about">
            <div className="footer-logo-title">
              <span>Erles Bakery</span>
              <span>🍞</span>
            </div>

            <p>
              Menyajikan roti artisan, kue spesial, donat, dan hampers
              premium yang dipanggang segar setiap hari dengan bahan-bahan
              pilihan berkualitas tinggi.
            </p>
          </div>

          {/* KOLOM 2 */}
          <div className="footer-column">
            <h4>Jam Buka</h4>

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

          {/* KOLOM 3 */}
          <div className="footer-column">
            <h4>Lokasi & Kontak</h4>

            <div className="footer-contact-item">
              <MapPin size={17} />

              <span>
                Jl. Roti Sejahtera No. 123,
                <br />
                Kota Bakery
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={17} />

              <span>
                0812-3456-7890 (WhatsApp)
              </span>
            </div>
          </div>

          {/* KOLOM 4 */}
          <div className="footer-column">
            <h4>Ikuti Kami</h4>

            <p>
              Dapatkan informasi promo, varian roti mingguan,
              dan hampers eksklusif.
            </p>

            <div className="footer-socials">

              <a
                href="#"
                aria-label="Bagikan"
                onClick={(e) => e.preventDefault()}
              >
                <span>↗</span>
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                onClick={(e) => e.preventDefault()}
              >
                <span>💬</span>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
              >
                <span>◎</span>
              </a>

            </div>
          </div>

        </div>

        {/* BAGIAN BAWAH FOOTER */}
        <div className="footer-bottom">

          <p>
            © 2026 Erles Bakery. Hak Cipta Dilindungi.
          </p>

          <p>
            Freshly Baked with Artisan Passion Daily
          </p>

        </div>

      </div>
    </footer>
  );
}