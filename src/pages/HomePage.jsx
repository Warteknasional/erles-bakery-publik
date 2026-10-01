import { Link } from 'react-router-dom';

import {
  BadgeCheck,
  Leaf,
  AlarmClock,
  Star,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Zap,
  ShoppingCart,
  Award,
} from 'lucide-react';

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBsi8Gqqc4jzcGezqGJu2_CoK5KyQBAZ6J-L0Yb4OIL-O3UQcDIP8AY1cBXGy6T1RvlKY9P6rx7PsW05YLLeRCfjBOTeM_uV42qi49J6qL9oUUFQxgnzjOfkNnx0d8dboomdh7pE4e2DjXq_aqkXsVW7BjcIZQbfWJ0UJE17IXqCo-BWLYjI1to8X949HL4LP4C9YFAlAvpyKG48YibFReYpAg7IipDNsnTXTL5ck2YmnogYEJNT-48sw';

const features = [
  {
    emoji: '🎂',
    type: 'green',
    label: 'KUALITAS TERJAMIN',
    title: 'Roti & Kue Segar',
    description:
      'Dipanggang setiap hari langsung dari oven kami dengan bahan alami pilihan tanpa bahan pengawet sintesis, menjaga rasa asli gandum.',
    bottom: 'Fresh From The Oven',
  },
  {
    emoji: '🎁',
    type: 'red',
    label: 'GIFTING & ACARA',
    title: 'Hampers Eksklusif',
    description:
      'Paket hadiah dan bingkisan spesial yang dikemas elegan untuk momen berharga Anda seperti hari raya, ulang tahun, dan corporate gift.',
    bottom: 'Custom Pita & Kartu Ucapan',
  },
  {
    emoji: '⭐',
    type: 'yellow',
    label: 'ARTISAN BAKERY',
    title: 'Rasa Premium',
    description:
      'Dibuat dengan resep rahasia turun-temurun dan mentega berkualitas tinggi untuk cita rasa autentik, lembut, dan wangi yang memikat.',
    bottom: '100% Pure Butter Blend',
  },
];

const products = [
  {
    id: 1,
    name: 'Roti Tawar Premium',
    description:
      'Tekstur sangat lembut dan wangi susu segar, cocok untuk santapan keluarga setiap hari.',
    price: 'Rp 25.000',
    category: 'Roti 🍞',
    categoryClass: 'bread',
    emoji: '🍞',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCD_uknovKEHZ9EoHPpe-xkLdcsADeFVDG0knPyxCM1PvQOY8jFARPun8nTd7afhy_H01n0XPOr5EwBK2VmE41YSUJRys-B9NGyVHlK_dM_ZBqnwlgtvVJNIvqrVYEtCneLaIPBiAdj7peXbDxu30svoCxnuQIGrIEWhZ8_QwbfpN_wJl0KdiNaVxqOSgAVEwpxM0_-fwZyXpf3RBjGVl6ZtQnXeRGDbbawSRWcv-VBxHHoaLxqsbpI4g',
  },
  {
    id: 2,
    name: 'Butter Croissant',
    description:
      'Flaky, buttery dengan lapisan renyah khas Prancis dan aroma mentega murni yang menggoda.',
    price: 'Rp 18.000',
    category: 'Roti 🥐',
    categoryClass: 'bread',
    emoji: '🥐',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAGsqjIfAEamDCqyscuQDII_wUjawjN597Ybf2qouDd9f9HTmVtBtePAAAylNWKSkz_BKsi5KI6Px7M_CEZLD-v1iXiCkyE40sq9wbkjCZJysyVljop5MtuMr-w-9OcR2OXww3luQYwLdTC3p_Hc8DPuoh6JYdsyN_sPgPMTn9EgXjfCX_d9vE3ovl3V-1QOKugjvUXS3KZrI3CzYQlon2Ot5VG2cs9G7SVjl3Lnlo__Ay30kynNCcLg',
  },
  {
    id: 3,
    name: 'Red Velvet Cake',
    description:
      'Kue lembut dilapisi cream cheese frosting mewah dengan keseimbangan rasa manis dan segar.',
    price: 'Rp 150.000',
    category: 'Kue 🎂',
    categoryClass: 'cake',
    emoji: '🎂',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcapKvZmb2_DRCqVo4cYbOPMpf4ne9PwvSXN68WwJ-Mlj1XTFh4zt_eGVrqMypyu3j_v0_PbOov5yyi-tRisd2MS09cofgxIsNzFd0bblJeDas-zm9UPXoyT0KrDbD__HMSjJrfLqrSZg6FYvdY5k1Qt35SbHLc7qvjxcCxiglgF731I7nxmPiOO10-toTKIb-W17OQyGARmJteqXwYB0I00MD729CVp2IRTU8rQ-Yqw7HmyqH-3qGDw',
  },
  {
    id: 4,
    name: 'Hampers Deluxe Spesial',
    description:
      'Paket lengkap aneka kue kering dan cookies premium dalam kotak mewah berpita satin emas.',
    price: 'Rp 350.000',
    category: 'Hampers 🎁',
    categoryClass: 'hamper',
    emoji: '🎁',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA699ixzAfxDLv2kn9VG6y1inXtUwNodFyNwvoyY7dNs9vkyQ6UHfQdU0m6UxhD-E-AottAqOgCpw1kE20Vp7ti4qaTo2Jz-bRmobWHdcP8JfE6QDKnaUh_YRvY5XpIRcIvIj2tK7r4gxYeBdQEeAnXL9yN664dSlI0q4GrYrpbxoMS7mF6g7vqjd-KLLivygHgboOPIK0VO17q8QySmmy9k0iSjA7ax8DV6nSwQsCq2ob8QnPCgp5hbw',
  },
];

export default function HomePage() {
  return (
    <div className="home-page">

      {/* TOP INFO */}
      <div className="bakery-info-bar">
        <span>♨</span>

        <span>
          DIPANGGANG SEGAR SETIAP HARI PUKUL 05.00 WIB • 100% BAHAN ALAMI
          BEBAS PENGAWET
        </span>

        <span>♨</span>
      </div>

      {/* HERO */}
      <section className="home-container hero-section">
        <div className="hero-card">

          <div className="hero-light hero-light-top"></div>
          <div className="hero-light hero-light-bottom"></div>

          <div className="hero-grid">

            <div className="hero-copy">

              <div className="hero-pill">
                <span className="hero-pill-dot"></span>
                <span>✨ Roti & Kue Artisan</span>
              </div>

              <h1>
                Selamat Datang di
                <br />

                <em>Erles Bakery</em>
              </h1>

              <p className="hero-description">
                Nikmati kehangatan dan kelezatan aneka roti artisan, donat
                lembut, kue istimewa, serta hampers elegan yang dipanggang
                segar dengan bahan berkualitas tinggi setiap hari.
              </p>

              <div className="hero-buttons">
                <Link
                  to="/pesanan"
                  className="button-primary"
                >
                  <span>Pesan Sekarang</span>
                  <span>🍞</span>
                </Link>

                <Link
                  to="/tentang"
                  className="button-secondary"
                >
                  <span>Lihat Cerita Kami</span>
                  <span>✨</span>
                </Link>
              </div>

              <div className="trust-row">

                <div>
                  <BadgeCheck size={17} />
                  <span>Mentega New Zealand</span>
                </div>

                <div>
                  <Leaf size={17} />
                  <span>Ragi Alami Sourdough</span>
                </div>

                <div>
                  <AlarmClock size={17} />
                  <span>Siap Kirim Pagi</span>
                </div>

              </div>

            </div>

            <div className="hero-visual">

              <div className="hero-fresh-badge">
                <span>🚀</span>
                <span>Dipanggang Segar Setiap Pagi</span>
              </div>

              <div className="hero-showcase">

                <div className="hero-showcase-image">

                  <img
                    src={heroImage}
                    alt="Country Sourdough Erles Bakery"
                  />

                  <div className="hero-product-floating">

                    <div className="floating-left">

                      <span className="floating-emoji">
                        🍞
                      </span>

                      <div>
                        <strong>
                          Country Sourdough
                        </strong>

                        <small>
                          Fermentasi 24 Jam
                        </small>
                      </div>

                    </div>

                    <strong className="floating-price">
                      Rp 38.000
                    </strong>

                  </div>

                </div>

                <div className="hero-showcase-bottom">

                  <div className="breakfast-text">
                    <span>🥐</span>
                    <span>☕</span>
                    <span>Pilihan Sarapan Hangat</span>
                  </div>

                  <div className="showcase-rating">
                    <Star
                      size={15}
                      fill="currentColor"
                    />

                    <strong>4.9</strong>

                    <span>(1.2k ulasan)</span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* WHY US */}
      <section className="home-container why-section">

        <div className="section-title-center">

          <div className="section-label">
            <Award size={14} />
            <span>Keunggulan Kami</span>
          </div>

          <h2>
            Kenapa Memilih Erles Bakery?
          </h2>

          <p>
            Dedikasi rasa dan kesempurnaan di setiap gigitan untuk menghadirkan
            momen manis bagi Anda dan keluarga.
          </p>

        </div>

        <div className="feature-grid">

          {features.map((feature) => (
            <article
              key={feature.title}
              className="feature-card"
            >

              <div
                className={`feature-emoji ${feature.type}`}
              >
                {feature.emoji}
              </div>

              <span
                className={`feature-label ${feature.type}`}
              >
                {feature.label}
              </span>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

              <div className="feature-bottom">

                <span>
                  {feature.bottom}
                </span>

                <CheckCircle2 size={17} />

              </div>

            </article>
          ))}

        </div>

      </section>


      {/* POPULAR PRODUCTS */}
      <section className="home-container product-section">

        <div className="product-heading">

          <div>

            <div className="popular-label">
              <span>🔥</span>
              <span>Paling Diminati</span>
            </div>

            <h2>
              Produk Terpopuler Minggu Ini
            </h2>

            <p>
              Pilihan favorit para pelanggan setia kami yang selalu habis
              terjual sebelum sore hari.
            </p>

          </div>

          <Link
            to="/pesanan"
            className="all-product-link"
          >
            <span>
              Lihat Semua Produk di Katalog
            </span>

            <ArrowRight size={17} />
          </Link>

        </div>

        <div className="home-product-grid">

          {products.map((product) => (
            <article
              key={product.id}
              className="home-product-card"
            >

              <div className="product-image-wrapper">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <span
                  className={`product-category ${product.categoryClass}`}
                >
                  {product.category}
                </span>

                <span className="product-corner-emoji">
                  {product.emoji}
                </span>

              </div>

              <div className="home-product-content">

                <div>

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {product.description}
                  </p>

                </div>

                <div className="product-card-bottom">

                  <div className="product-price">

                    <small>
                      Harga
                    </small>

                    <strong>
                      {product.price}
                    </strong>

                  </div>

                  <Link
                    to="/pesanan"
                    className="product-order"
                  >
                    Pesan Sekarang
                  </Link>

                </div>

              </div>

            </article>
          ))}

        </div>

        <div className="catalog-center">

          <Link
            to="/pesanan"
            className="catalog-button"
          >
            <span>
              Buka Katalog Lengkap Roti & Kue
            </span>

            <BookOpen size={19} />
          </Link>

        </div>

      </section>


      {/* QUICK ORDER */}
      <section className="home-container quick-section">

        <div className="quick-banner">

          <div className="quick-decoration quick-decoration-right"></div>
          <div className="quick-decoration quick-decoration-left"></div>

          <div className="quick-text">

            <div className="quick-label">
              <Zap
                size={15}
                fill="currentColor"
              />

              <span>
                Instan • Tanpa Ribet
              </span>
            </div>

            <h2>
              Pesan Langsung Tanpa Perlu Daftar Akun!
            </h2>

            <p>
              Cukup pilih produk favorit Anda, masukkan nama dan nomor WhatsApp,
              pesanan langsung kami siapkan dengan cepat dan diantar dalam
              kondisi hangat.
            </p>

            <div className="quick-steps">

              <div>
                <span className="step-number">
                  1
                </span>

                <span>
                  Pilih Roti Favorit
                </span>
              </div>

              <div>
                <span className="step-number">
                  2
                </span>

                <span>
                  Isi WhatsApp & Alamat
                </span>
              </div>

              <div>
                <span className="step-number">
                  3
                </span>

                <span>
                  Kurir Siap Meluncur
                </span>
              </div>

            </div>

          </div>

          <Link
            to="/pesanan"
            className="quick-main-button"
          >
            <ShoppingCart size={20} />

            <strong>
              Buka Menu & Pesan
            </strong>
          </Link>

        </div>

      </section>

    </div>
  );
}