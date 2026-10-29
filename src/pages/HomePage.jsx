import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Star,
  Clock,
  MapPin,
  Heart,
  Gift,
  ShieldCheck,
  Wheat,
  MessageCircle,
} from 'lucide-react';

const heroImage =
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85';

const storyImage =
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=85';

const featuredProducts = [
  {
    id: 1,
    nama: 'Butter Croissant Prancis',
    kategori: 'Roti',
    harga: 'Rp 18.000',
    tag: 'Best Seller',
    deskripsi: 'Flaky, renyah berlapis dengan aroma butter New Zealand murni yang wangi semerbak.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAGsqjIfAEamDCqyscuQDII_wUjawjN597Ybf2qouDd9f9HTmVtBtePAAAylNWKSkz_BKsi5KI6Px7M_CEZLD-v1iXiCkyE40sq9wbkjCZJysyVljop5MtuMr-w-9OcR2OXww3luQYwLdTC3p_Hc8DPuoh6JYdsyN_sPgPMTn9EgXjfCX_d9vE3ovl3V-1QOKugjvUXS3KZrI3CzYQlon2Ot5VG2cs9G7SVjl3Lnlo__Ay30kynNCcLg',
  },
  {
    id: 2,
    nama: 'Roti Tawar Gandum Susu',
    kategori: 'Roti',
    harga: 'Rp 25.000',
    tag: 'Daily Favorite',
    deskripsi: 'Tekstur super empuk berserat lembut dengan taburan gandum utuh bernutrisi.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCD_uknovKEHZ9EoHPpe-xkLdcsADeFVDG0knPyxCM1PvQOY8jFARPun8nTd7afhy_H01n0XPOr5EwBK2VmE41YSUJRys-B9NGyVHlK_dM_ZBqnwlgtvVJNIvqrVYEtCneLaIPBiAdj7peXbDxu30svoCxnuQIGrIEWhZ8_QwbfpN_wJl0KdiNaVxqOSgAVEwpxM0_-fwZyXpf3RBjGVl6ZtQnXeRGDbbawSRWcv-VBxHHoaLxqsbpI4g',
  },
  {
    id: 3,
    nama: 'Donat Coklat Almond Panggang',
    kategori: 'Donat',
    harga: 'Rp 12.000',
    tag: 'Signature Donut',
    deskripsi: 'Donat kentang empuk khas Malang berbalut dark chocolate ganache dan cacahan almond gurih.',
    image:
      'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    nama: 'Hampers Lebaran Deluxe',
    kategori: 'Hampers',
    harga: 'Rp 350.000',
    tag: 'Exclusive Gift',
    deskripsi: 'Box velvet premium berisi 3 toples kue kering wisman, pita satin, dan kartu ucapan custom.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA699ixzAfxDLv2kn9VG6y1inXtUwNodFyNwvoyY7dNs9vkyQ6UHfQdU0m6UxhD-E-AottAqOgCpw1kE20Vp7ti4qaTo2Jz-bRmobWHdcP8JfE6QDKnaUh_YRvY5XpIRcIvIj2tK7r4gxYeBdQEeAnXL9yN664dSlI0q4GrYrpbxoMS7mF6g7vqjd-KLLivygHgboOPIK0VO17q8QySmmy9k0iSjA7ax8DV6nSwQsCq2ob8QnPCgp5hbw',
  },
];

const testimonials = [
  {
    quote:
      'Roti dan croissant-nya luar biasa! Renyah di luar, empuk dan lembut di dalam dengan aroma mentega asli. Tidak terasa enek sama sekali.',
    author: 'Dian Pratiwi',
    role: 'Pelanggan Setia di Malang',
    avatar: 'DP',
  },
  {
    quote:
      'Hampers Lebaran dari Erles Bakery benar-benar bikin keluarga terkesan. Kemasannya elegan banget, kuenya enak dan fresh!',
    author: 'Bambang Handoko',
    role: 'Pemesan Hampers Kantor',
    avatar: 'BH',
  },
  {
    quote:
      'Donat kentangnya bikin nostalgia donat tempo dulu tapi dengan topping yang modern dan premium. Selalu jadi camilan favorit anak-anak.',
    author: 'Rina Kusuma',
    role: 'Ibu Rumah Tangga',
    avatar: 'RK',
  },
];

export default function HomePage() {
  return (
    <div className="deux-home">
      {/* 1. HERO SECTION (DEUX STYLE) */}
      <section className="deux-hero-section">
        <div className="deux-hero-container">
          {/* LEFT: COPY & CTAS */}
          <div className="deux-hero-copy">
            <div className="deux-badge-pill">
              <Sparkles size={13} />
              <span>DIPANGGANG SEGAR SETIAP HARI • KOTA MALANG</span>
            </div>

            <h1 className="deux-hero-title">
              Freshly Baked Goods <br />
              <em>Every Single Day.</em>
            </h1>

            <p className="deux-hero-subtitle">
              Sajian hangat roti artisan, donat kentang lembut, dan hampers istimewa yang dibuat
              dengan sepenuh hati dari dapur rumahan kami di Malang.
            </p>

            <div className="deux-hero-cta-group">
              <Link to="/pesanan" className="deux-btn-primary">
                <span>Pesan Sekarang</span>
                <ArrowRight size={17} />
              </Link>

              <Link to="/tentang" className="deux-btn-secondary">
                <span>Cerita Dapur Kami</span>
              </Link>
            </div>

            {/* TRUST PILLS */}
            <div className="deux-trust-pills">
              <div className="deux-trust-item">
                <Wheat size={16} />
                <span>100% Mentega Murni</span>
              </div>
              <div className="deux-trust-item">
                <Clock size={16} />
                <span>Panggang Subuh 05.00</span>
              </div>
              <div className="deux-trust-item">
                <ShieldCheck size={16} />
                <span>Tanpa Pengawet</span>
              </div>
            </div>
          </div>

          {/* RIGHT: SHOWCASE IMAGE & STICKERS */}
          <div className="deux-hero-visual">
            <div className="deux-image-frame">
              <img
                src={heroImage}
                alt="Freshly baked artisan bread at Erles Bakery"
                className="deux-hero-img"
              />

              {/* FLOATING STICKER 1: PROMO BADGE */}
              <div className="deux-floating-badge top-right">
                <span className="badge-discount">DISCOUNT 15%</span>
                <span className="badge-sub">Setiap Pembelian Hampers</span>
              </div>

              {/* FLOATING STICKER 2: RATING CARD */}
              <div className="deux-floating-card bottom-left">
                <div className="card-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="#4A2E17" color="#4A2E17" />
                  ))}
                  <strong>4.9 / 5.0</strong>
                </div>
                <p>1.200+ ulasan pelanggan puas di Malang</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RUNNING MARQUEE TICKER (DEUX SIGNATURE) */}
      <div className="deux-marquee-bar">
        <div className="deux-marquee-track">
          {[...Array(2)].map((_, trackIdx) => (
            <div key={trackIdx} className="deux-marquee-content">
              <span>FRESHLY BAKED GOODS EVERY DAY</span>
              <span className="sep">✦</span>
              <span>100% PURE BUTTER</span>
              <span className="sep">✦</span>
              <span>ARTISAN SOURDOUGH</span>
              <span className="sep">✦</span>
              <span>HOMEMADE DONUTS</span>
              <span className="sep">✦</span>
              <span>EXCLUSIVE HAMPERS</span>
              <span className="sep">✦</span>
              <span>DIKIRIM HANGAT DARI MALANG</span>
              <span className="sep">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FEATURED PRODUCTS (A LITTLE TASTE OF EVERYTHING WE BAKE) */}
      <section className="deux-section">
        <div className="deux-container">
          <div className="deux-section-header">
            <div>
              <span className="deux-pretitle">Koleksi Favorit</span>
              <h2 className="deux-section-title">A Little Taste of Everything We Bake</h2>
            </div>
            <Link to="/pesanan" className="deux-view-all-link">
              <span>Lihat Semua Menu</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="deux-product-grid">
            {featuredProducts.map((product) => (
              <article key={product.id} className="deux-product-card">
                <div className="deux-card-media">
                  <img src={product.image} alt={product.nama} loading="lazy" />
                  <span className="deux-card-tag">{product.tag}</span>
                </div>

                <div className="deux-card-body">
                  <div className="deux-card-top">
                    <span className="deux-card-category">{product.kategori}</span>
                    <strong className="deux-card-price">{product.harga}</strong>
                  </div>

                  <h3 className="deux-card-title">{product.nama}</h3>
                  <p className="deux-card-desc">{product.deskripsi}</p>

                  <Link to="/pesanan" className="deux-card-button">
                    <span>Pesan Sekarang</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STORY / PHILOSOPHY SECTION (DEUX STYLE) */}
      <section className="deux-section deux-story-section">
        <div className="deux-container">
          <div className="deux-story-grid">
            <div className="deux-story-image-wrap">
              <img
                src={storyImage}
                alt="Baker shaping artisanal bread dough"
                className="deux-story-img"
              />
              <div className="deux-story-stamp">
                <Heart size={20} />
                <span>BAKED WITH LOVE</span>
              </div>
            </div>

            <div className="deux-story-content">
              <span className="deux-pretitle">CERITA KAMI</span>
              <h2 className="deux-section-title">
                Thoughtfully Baked For <br />
                <em>Everyday Moments.</em>
              </h2>

              <p className="deux-story-lead">
                Kami percaya memanggang roti bukan sekadar mencampur tepung dan ragi, tetapi tentang
                menghadirkan kehangatan dan kebersamaan di meja makan keluarga Anda.
              </p>

              <p className="deux-story-text">
                Berawal dari dapur rumah tangga di Lowokwaru, Malang, Erles Bakery terus menjaga
                komitmen membuat roti dengan metode tradisional, fermentasi lambat, dan bahan-bahan
                pilihan bermutu tinggi tanpa kompromi.
              </p>

              <div className="deux-story-features">
                <div className="story-feature-item">
                  <span className="feature-num">01</span>
                  <div>
                    <h4>Fermentasi Alami & Waktu</h4>
                    <p>Adonan diberi waktu mengembang alami demi tekstur roti yang empuk dan harum.</p>
                  </div>
                </div>

                <div className="story-feature-item">
                  <span className="feature-num">02</span>
                  <div>
                    <h4>Hanya Mentega Pilihan</h4>
                    <p>Kami hanya menggunakan mentega murni berkualitas tinggi tanpa campuran margarin murah.</p>
                  </div>
                </div>
              </div>

              <Link to="/tentang" className="deux-btn-primary story-btn">
                <span>Kenali Lebih Dekat Tentang Kami</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPOTLIGHT HAMPERS (SPECIAL GIFTING) */}
      <section className="deux-section">
        <div className="deux-container">
          <div className="deux-hampers-spotlight">
            <div className="hampers-spotlight-content">
              <div className="hampers-spotlight-pill">
                <Gift size={15} />
                <span>PAKET HADIAH & HANTARAN</span>
              </div>

              <h2>Kirimkan Kehangatan Lewat Parsel & Hampers Eksklusif</h2>

              <p>
                Sajikan bingkisan istimewa untuk hari raya Idul Fitri, pernikahan, ulang tahun, atau
                ucapan terima kasih bisnis. Setiap paket dilengkapi kotak velvet elegan, pita satin,
                dan <strong>kartu ucapan personal gratis</strong>.
              </p>

              <Link to="/pesanan" className="deux-btn-gold">
                <span>Pilih Paket Hampers Sekarang</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="deux-section deux-testimonials-section">
        <div className="deux-container">
          <div className="deux-section-header center">
            <span className="deux-pretitle">TESTIMONI</span>
            <h2 className="deux-section-title">Apa Kata Mereka Tentang Erles Bakery</h2>
          </div>

          <div className="deux-testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="deux-testimonial-card">
                <div className="testi-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#CC4A3B" color="#CC4A3B" />
                  ))}
                </div>
                <blockquote className="testi-quote">"{t.quote}"</blockquote>
                <div className="testi-author">
                  <div className="testi-avatar">{t.avatar}</div>
                  <div>
                    <strong>{t.author}</strong>
                    <small>{t.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VISIT STORE & ORDER BANNER */}
      <section className="deux-section">
        <div className="deux-container">
          <div className="deux-visit-box">
            <div className="visit-left">
              <span className="deux-pretitle light">LOKASI & PEMESANAN</span>
              <h2>Pesan Sekarang & Ambil Hangat di Dapur Kami</h2>
              <div className="visit-info-list">
                <div className="visit-info-item">
                  <MapPin size={18} />
                  <span>Jl. Vinolia No. 25B, Lowokwaru, Kota Malang</span>
                </div>
                <div className="visit-info-item">
                  <Clock size={18} />
                  <span>Buka Setiap Hari: 07.00 - 21.00 WIB</span>
                </div>
              </div>
            </div>

            <div className="visit-right">
              <a
                href="https://wa.me/6285717224420"
                target="_blank"
                rel="noreferrer"
                className="deux-btn-whatsapp"
              >
                <MessageCircle size={18} />
                <span>Chat WhatsApp Admin (+62 857-1722-4420)</span>
              </a>
              <Link to="/pesanan" className="deux-btn-white">
                <span>Buka Katalog Online</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
