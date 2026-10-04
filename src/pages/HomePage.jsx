import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const showcaseDonutImg =
  'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=900&q=80';
const donutSectionImg =
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80';
const sweetBreadImg =
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80';
const hamperImg =
  'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=80';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* 1. KITCHEN NOTICE BANNER (Sederhana & Bersahaja) */}
      <aside className="home-kitchen-banner" aria-label="Informasi Pemesanan">
        <div className="home-kitchen-banner-content">
          <span className="kitchen-status-text">
            Pesanan donat kentang, roti manis, dan hampers dibuat segar setiap hari dari dapur kami di Jl. Ikan Gurami No. 7, Malang.
          </span>
        </div>
      </aside>

      {/* 2. HERO SECTION ASIMETRIS (Headline + 1 CTA Primer + Catatan Tipografi Sederhana) */}
      <section className="home-hero-section">
        <div className="home-container">
          <div className="home-hero-layout">
            <div className="home-hero-text">
              <h1 className="home-hero-title">
                Donat Empuk, Roti Manis, dan Hampers Penuh Kehangatan
              </h1>

              <p className="home-hero-desc">
                Setiap adonan kami uleni dan panggang langsung dari dapur rumahan di Malang. Tanpa pengawet sintetis, dengan tekstur lembut yang pas menemani waktu santai keluarga.
              </p>

              <div className="home-hero-actions">
                <Link to="/pesanan" className="btn-primary-terracotta">
                  <span>Lihat Menu &amp; Pesan</span>
                  <ArrowRight size={18} />
                </Link>
              </div>

              <p className="hero-handcrafted-note">
                100% dibuat dengan tangan setiap hari dari dapur rumahan kami.
              </p>
            </div>

            <div className="home-hero-showcase reveal-on-scroll">
              <div className="showcase-photo-frame">
                <img
                  src={showcaseDonutImg}
                  alt="Sajian donat empuk dari dapur Erles Bakery"
                  className="showcase-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPESIALISASI 1: DONAT ANEKA TOPPING (Foto + Judul + Paragraf Pendek + Tautan Teks) */}
      <section className="home-donuts-section reveal-on-scroll">
        <div className="home-container">
          <div className="donuts-feature-layout">
            <div className="donuts-feature-media">
              <img
                src={donutSectionImg}
                alt="Donat kentang empuk Erles Bakery dengan topping pilihan"
                className="donuts-feature-img"
                loading="lazy"
              />
            </div>

            <div className="donuts-feature-content">
              <h2 className="section-feature-title">
                Donat Kentang Aneka Topping
              </h2>
              <p className="section-feature-body">
                Adonan kentang asli yang empuk alami seharian tanpa pelembut kimiawi, berpadu taburan almond panggang, cokelat glaze pekat, dan keju gurih. Tersedia satuan maupun box isi 6 dan 12.
              </p>
              <div className="feature-link-wrap">
                <Link to="/pesanan" className="editorial-text-link">
                  <span>Lihat varian donat</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SPESIALISASI 2: ROTI MANIS KLASIK (Judul + Paragraf Pendek + Tautan Teks + Foto) */}
      <section className="home-bread-section reveal-on-scroll">
        <div className="home-container">
          <div className="bread-editorial-panel">
            <div className="bread-editorial-text">
              <h2 className="section-feature-title">
                Roti Manis Tradisional Teman Kopi
              </h2>
              <p className="section-feature-body">
                Resep klasik beraroma mentega wangi sejak pagi hari dengan serat halus dan isian padat — mulai dari cokelat lumer, keju, hingga roti sisir mentega tempo dulu.
              </p>
              <div className="feature-link-wrap">
                <Link to="/pesanan" className="editorial-text-link">
                  <span>Lihat pilihan roti manis</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="bread-editorial-media">
              <img
                src={sweetBreadImg}
                alt="Roti manis klasik rumahan yang baru dipanggang"
                className="bread-editorial-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPESIALISASI 3: HAMPERS (Decorative Frame Emas Pudar: Foto + Judul + Paragraf + Tautan Aksen) */}
      <section className="home-hampers-section reveal-on-scroll">
        <div className="home-container">
          <div className="hampers-decorative-frame">
            <div className="hampers-frame-inner">
              <div className="hampers-media-side">
                <img
                  src={hamperImg}
                  alt="Paket hampers bingkisan kue dan donat terikat pita satin elegan"
                  className="hampers-frame-img"
                  loading="lazy"
                />
              </div>

              <div className="hampers-text-side">
                <h2 className="hampers-title">
                  Hantaran Manis yang Dirangkai Personal
                </h2>
                <p className="hampers-desc">
                  Kombinasi donat dan roti pilihan dalam kotak kaku eksklusif berpita satin dan kartu ucapan kustom untuk syukuran atau hari raya. Pemesanan disarankan H-2 agar kemasan disiapkan optimal.
                </p>
                <div className="hampers-action-wrap">
                  <Link to="/pesanan" className="hampers-link-accent">
                    <span>Pilih paket hampers</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BANNER PROMO KOTAK (3 Elemen: Judul + Paragraf Pendek + Tautan Teks Katalog) */}
      <section className="home-promo-section reveal-on-scroll">
        <div className="home-container">
          <div className="promo-box-warm">
            <div className="promo-box-content">
              <h2 className="promo-title">
                Pesanan Kotak untuk Acara &amp; Kumpul Keluarga
              </h2>
              <p className="promo-desc">
                Bebas pilih kombinasi rasa donat dan roti dalam kotak isi 6 atau 12 untuk kebutuhan arisan, syukuran, kantor, atau hantaran kerabat.
              </p>
              <div className="promo-link-wrap">
                <Link to="/pesanan" className="promo-catalog-link">
                  <span>Lihat daftar harga box di katalog</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DAPUR RUMAHAN & ALUR PESAN (Satu Section Terpadu yang Lega) */}
      <section className="home-kitchen-flow-section reveal-on-scroll">
        <div className="home-container">
          <div className="section-centered-header">
            <h2 className="section-main-heading">Dari Dapur Rumah Kami ke Meja Anda</h2>
            <p className="section-main-sub">
              Dibuat dengan kejujuran rasa dan proses pemesanan langsung ke pemilik.
            </p>
          </div>

          <div className="kitchen-flow-grid">
            {/* Sisi Kiri: Nilai Dapur Rumahan (Judul + Paragraf Ringkas + Tautan) */}
            <div className="kitchen-story-card">
              <h3 className="story-heading">Dikelola Sendiri Tanpa Kompromi Rasa</h3>
              <p className="story-paragraph">
                Erles Bakery beroperasi langsung dari dapur rumah tangga di Kota Malang. Kami tidak memproduksi massal di pabrik; setiap adonan diuleni, dibentuk, dan dipanggang di bawah pengawasan langsung pemilik demi menjaga mutu dan kebersihan.
              </p>
              <div className="story-link-wrap">
                <Link to="/tentang" className="editorial-text-link">
                  <span>Baca kisah dapur kami</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Sisi Kanan: 3 Langkah Pemesanan (Nomor + Judul + Penjelasan Ringkas) */}
            <div className="order-steps-card">
              <h3 className="steps-heading">Alur Pemesanan Mudah</h3>
              <ol className="steps-list">
                <li className="step-item">
                  <span className="step-number">1</span>
                  <div className="step-desc">
                    <strong>Pilih Menu</strong>
                    <p>Buka katalog untuk memilih donat kentang, roti manis, atau paket hampers.</p>
                  </div>
                </li>
                <li className="step-item">
                  <span className="step-number">2</span>
                  <div className="step-desc">
                    <strong>Kirim ke WhatsApp</strong>
                    <p>Rincian pesanan tersusun otomatis untuk diteruskan langsung ke pemilik.</p>
                  </div>
                </li>
                <li className="step-item">
                  <span className="step-number">3</span>
                  <div className="step-desc">
                    <strong>Ambil atau Kirim</strong>
                    <p>Ambil pesanan di Jl. Ikan Gurami No. 7 atau gunakan kurir se-Malang.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Penutup: CTA Primer Kedua di Akhir Halaman */}
          <div className="home-closing-cta-wrap">
            <Link to="/pesanan" className="btn-primary-terracotta">
              <span>Lihat Menu &amp; Pesan Sekarang</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}