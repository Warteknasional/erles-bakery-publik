import { Link } from 'react-router-dom';
import {
  Heart,
  MapPin,
  Clock,
  ArrowRight,
  Leaf,
  BadgeCheck,
} from 'lucide-react';

const bakerImage =
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85';

const storeImage =
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85';

export default function TentangPage() {
  return (
    <div className="tentang-stitch-page">

      {/* =========================
          HERO
      ========================== */}
      <section className="tentang-stitch-hero">

        <div className="tentang-logo-circle">
          <span>📦</span>

          <div className="tentang-logo-small">
            ⚙
          </div>
        </div>

        <div className="tentang-est-label">
          <span className="tentang-est-dot"></span>
          ARTISANAL BAKERY EST. 2020
        </div>

        <h1>
          Tentang Erles Bakery
        </h1>

        <p>
          Menyajikan roti, kue, donat, dan hampers berkualitas sejak 2020
          dengan kehangatan cinta dan resep autentik.
        </p>

      </section>


      {/* =========================
          CERITA KAMI
      ========================== */}
      <section className="tentang-story-container">

        <div className="tentang-story-card">

          <div className="tentang-story-header">

            <div className="tentang-heart-icon">
              <Heart
                size={16}
                fill="currentColor"
              />
            </div>

            <div>
              <span>
                FILOSOFI DAPUR KAMI
              </span>

              <h2>
                Cerita Kami
              </h2>
            </div>

          </div>


          <div className="tentang-story-content">

            <div className="tentang-story-text">

              <p>
                Berawal dari oven rumahan kecil di tahun 2020, Erles Bakery
                lahir dari kecintaan kami terhadap aroma roti segar yang baru
                keluar dari pemanggang. Kami percaya bahwa setiap potong
                roti bukan sekadar makanan, melainkan lambang kehangatan
                dan kebersamaan keluarga di meja makan.
              </p>

              <p>
                Hingga kini, kami terus berkomitmen menggunakan bahan-bahan
                alami pilihan tanpa pengawet buatan — mulai dari mentega
                impor berkualitas tinggi hingga ragi alami sourdough.
                Setiap hari, artisan baker kami memulai hari sebelum fajar
                menyingsing agar Anda dapat menikmati roti dan kue dengan
                kesegaran maksimal.
              </p>

            </div>


            <div className="tentang-baker-image">

              <img
                src={bakerImage}
                alt="Artisan baker Erles Bakery"
              />

              <div className="tentang-image-caption">
                <span>
                  HANDMADE DAILY
                </span>

                <strong>
                  Sentuhan Kasih Tangan
                </strong>
              </div>

            </div>

          </div>


          {/* 3 KEUNGGULAN */}
          <div className="tentang-benefit-box">

            <div className="tentang-benefit-item">

              <div className="tentang-benefit-icon green">
                ♨
              </div>

              <strong>
                Dipanggang Segar
              </strong>

              <span>
                Setiap pagi sebelum fajar
              </span>

            </div>


            <div className="tentang-benefit-item">

              <div className="tentang-benefit-icon yellow">
                <BadgeCheck size={17} />
              </div>

              <strong>
                100% Halal & Alami
              </strong>

              <span>
                Bahan premium terseleksi
              </span>

            </div>


            <div className="tentang-benefit-item">

              <div className="tentang-benefit-icon red">
                <Leaf size={17} />
              </div>

              <strong>
                Tanpa Pengawet
              </strong>

              <span>
                Sehat untuk seluruh keluarga
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          KONTAK
      ========================== */}
      <section className="tentang-contact-section">

        <div className="tentang-contact-heading">

          <span>
            INFORMASI LAYANAN
          </span>

          <h2>
            Kontak & Operasional
          </h2>

          <p>
            Kami siap menyambut kedatangan Anda dan melayani
            pemesanan setiap hari.
          </p>

        </div>


        <div className="tentang-contact-grid">

          {/* LOKASI */}
          <article className="tentang-contact-card">

            <div className="tentang-contact-icon location">
              <MapPin size={18} />
            </div>

            <span className="tentang-contact-label">
              LOKASI TOKO
            </span>

            <h3>
              Jl. Roti Sejahtera No. 123
            </h3>

            <p>
              RT 02 / RW 05, Kota Kuliner
            </p>

            <div className="tentang-contact-note">
              <span>🅿</span>

              <span>
                Tersedia area dine-in hangat & parkir luas
              </span>
            </div>

          </article>


          {/* KONTAK */}
          <article className="tentang-contact-card">

            <div className="tentang-contact-icon whatsapp">
              ▤
            </div>

            <span className="tentang-contact-label">
              KONTAK PEMESANAN
            </span>

            <h3>
              0812–3456–7890
            </h3>

            <p>
              WhatsApp & Telepon Toko
            </p>

            <div className="tentang-contact-note">
              <span>🎧</span>

              <span>
                Langsung terhubung dengan customer service kami
              </span>
            </div>

          </article>


          {/* JAM */}
          <article className="tentang-contact-card">

            <div className="tentang-contact-icon time">
              <Clock size={18} />
            </div>

            <span className="tentang-contact-label">
              JAM OPERASIONAL
            </span>

            <h3>
              Senin – Sabtu
            </h3>

            <p className="tentang-hours">
              07:00 – 21:00 WIB
            </p>

            <div className="tentang-contact-note tentang-open-note">

              <span>
                ☀️ Minggu: 08:00 – 18:00 WIB
              </span>

              <strong>
                BUKA
              </strong>

            </div>

          </article>

        </div>

      </section>


      {/* =========================
          VISIT STORE
      ========================== */}
      <section className="tentang-visit-container">

        <div className="tentang-visit-card">

          <div className="tentang-visit-copy">

            <span className="tentang-visit-label">
              ▦ SUASANA HANGAT TOKO
            </span>

            <h2>
              Kunjungi Toko Fisik Kami atau Pesan
              <br />
              Online Tanpa Ribet
            </h2>

            <p>
              Nikmati semerbak wangi roti yang baru matang, segelas kopi
              arabika hangat, dan keramahan barista kami di toko langsung,
              atau pesan paket roti dan hampers kesukaan Anda langsung
              ke rumah.
            </p>


            <div className="tentang-visit-buttons">

              <Link
                to="/pesanan"
                className="tentang-menu-button"
              >
                Lihat Menu & Mulai Pesan
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/pesanan"
                className="tentang-recommend-button"
              >
                <span>▤</span>
                Tanya Rekomendasi
              </Link>

            </div>

          </div>


          <div className="tentang-store-image">

            <img
              src={storeImage}
              alt="Suasana Erles Bakery"
            />

            <div className="tentang-warm-badge">
              <span className="tentang-online-dot"></span>
              Tersedia Roti Hangat Setiap Jam
            </div>

          </div>

        </div>

      </section>


      {/* =========================
          MAP
      ========================== */}
      <section className="tentang-map-container">

        <div className="tentang-map-card">

          <div className="tentang-map-heading">

            <div>
              <span>
                NAVIGASI PETA
              </span>

              <h2>
                Panduan Menuju Lokasi
              </h2>
            </div>

            <p>
              ◇ Akses mudah dari pusat kota & halte transportasi
            </p>

          </div>


          <div className="tentang-map-frame">

            <iframe
              title="Lokasi Erles Bakery"
              src="https://www.google.com/maps?q=Kediri%20Jawa%20Timur&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </section>

    </div>
  );
}