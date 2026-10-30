import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Plus,
  Star,
  MapPin,
  Clock,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
} from 'lucide-react';

const heroCroissantImg =
  'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80';

const heroCenterImg =
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85';

const featuredProducts = [
  {
    id: 1,
    category: 'BREADS',
    name: 'Sourdough Country Boule',
    price: 'Rp 45.000',
    desc: 'Kerak keemasan renyah berongga lembut hasil fermentasi alami 24 jam.',
    image:
      'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80',
    tag: 'Favorite',
  },
  {
    id: 2,
    category: 'BREADS',
    name: 'Olive & Rosemary Ciabatta',
    price: 'Rp 32.000',
    desc: 'Roti klasik Italia dengan potongan zaitun hitam dan taburan rosemary wangi.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80',
    tag: 'Artisan',
  },
  {
    id: 3,
    category: 'BREADS',
    name: 'French Baguette Tradisi',
    price: 'Rp 28.000',
    desc: 'Baguette renyah autentik Prancis, pasangan sempurna untuk selai atau keju.',
    image:
      'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?auto=format&fit=crop&w=800&q=80',
    tag: 'Classic',
  },
  {
    id: 4,
    category: 'PASTRIES',
    name: 'Donat Kentang Gula Halus',
    price: 'Rp 8.000',
    desc: 'Donat kentang asli Malang super empuk dan kenyal dengan taburan gula dingin.',
    image:
      'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller',
  },
  {
    id: 5,
    category: 'PASTRIES',
    name: 'Donat Coklat Almond Panggang',
    price: 'Rp 12.000',
    desc: 'Glaze dark chocolate pekat bertabur irisan kacang almond panggang gurih.',
    image:
      'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=800&q=80',
    tag: 'Favorit',
  },
  {
    id: 6,
    category: 'HAMPERS',
    name: 'Hampers Lebaran Deluxe',
    price: 'Rp 350.000',
    desc: 'Box eksklusif velvet gold berisi 3 toples kue kering wisman legendaris & kartu ucapan.',
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    tag: 'Special Gift',
  },
];

const blogArticles = [
  {
    category: 'SEASONAL',
    date: 'Apr 15, 2026',
    title: 'Apa yang Sedang Kami Panggang Musim Ini di Dapur Malang',
    desc: 'Dari sourdough gandum utuh hingga varian donat kentang rasa musiman terbaru.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
  },
  {
    category: 'BAKING',
    date: 'Apr 10, 2026',
    title: 'Mengapa Suhu Mentega Mengubah Seluruh Hasil Panggangan Roti',
    desc: 'Eksplorasi teknik laminasi butter Prancis dan efeknya terhadap kelembutan serat roti.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80',
  },
  {
    category: 'RECIPES',
    date: 'Apr 02, 2026',
    title: 'Roti Akhir Pekan: Ritual Panggangan Lambat Penuh Makna',
    desc: 'Menghabiskan pagi akhir pekan bersama aroma ragi alami dan kopi seduh manual.',
    image:
      'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80',
  },
];

const faqData = [
  {
    q: 'Apakah semua roti dan donat dipanggang segar setiap hari?',
    a: 'Ya! Seluruh produk Erles Bakery mulai dipanggang sejak jam 4 subuh setiap hari tanpa bahan pengawet sintetis, menjamin rasa dan tekstur terbaik.',
  },
  {
    q: 'Bisa kirim langsung (instan) ke seluruh area Malang?',
    a: 'Tentu bisa. Kami melayani kurir instan (GrabExpress/GoSend) maupun ambil langsung di toko (Jl. Vinolia No. 25B, Lowokwaru, Kota Malang).',
  },
  {
    q: 'Bagaimana cara memesan paket hampers dengan kartu ucapan kustom?',
    a: 'Pilih kategori Hampers di menu, lalu isi nama penerima, pengirim, dan pesan doa Anda pada formulir checkout gratis sebelum konfirmasi.',
  },
  {
    q: 'Berapa lama daya tahan roti artisan sourdough dan donat kentang?',
    a: 'Sourdough bertahan 3-4 hari di suhu ruang (atau 2 minggu di freezer). Donat kentang terbaik dinikmati dalam 1-2 hari agar kelembutan alaminya terjaga.',
  },
];

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState('ALL');
  const [openFaq, setOpenFaq] = useState(0);

  const displayedProducts =
    selectedTab === 'ALL'
      ? featuredProducts
      : featuredProducts.filter((p) => p.category === selectedTab);

  return (
    <div className="deux-exact-page">
      {/* =========================================================
          1. HERO SECTION (EXACT DEUX BAKERY CENTERED STACK)
      ========================================================= */}
      <section className="deux-exact-hero">
        <div className="deux-exact-container">
          {/* TOP FLOATING PASTRY IMAGE */}
          <div className="deux-hero-top-cutout">
            <img src={heroCroissantImg} alt="Croissant" />
          </div>

          {/* GIANT CENTERED TITLE & TILTED STAMP */}
          <div className="deux-hero-title-group">
            <h1 className="deux-exact-h1">
              <span className="deux-c-red">Freshly Baked</span>{' '}
              <span className="deux-c-brown">Goods</span>
              <br />
              <span className="deux-c-brown">Every Day</span>
            </h1>

            {/* TILTED BADGE AT -17 DEG */}
            <div className="deux-tilted-stamp">
              <span className="stamp-text">homemade bakery</span>
            </div>
          </div>

          {/* 3-PART HERO BOTTOM ROW: [LEFT TEXT] | [CENTER IMAGE] | [RIGHT CATEGORY & BUTTON] */}
          <div className="deux-hero-trio-row reveal-up">
            {/* LEFT TEXT */}
            <div className="deux-hero-trio-left">
              <p>
                Dapur artisan kami lahir dari kebahagiaan berbagi roti segar, donat kentang empuk,
                dan kue istimewa yang dibuat dengan ketulusan setiap pagi.
              </p>
            </div>

            {/* CENTER IMAGE FRAME */}
            <div className="deux-hero-trio-center">
              <div className="deux-hero-showcase-box">
                <img src={heroCenterImg} alt="Erles Bakery Fresh Bakes" />
              </div>
            </div>

            {/* RIGHT BUTTON & CATEGORY */}
            <div className="deux-hero-trio-right">
              <div className="deux-trio-pills">
                <span>FRESH</span>
                <span className="dot">•</span>
                <span>TASTY</span>
                <span className="dot">•</span>
                <span>SWEET</span>
              </div>

              <Link to="/pesanan" className="deux-exact-primary-btn">
                <span>SHOP NOW</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. FEATURED SECTION ("A LITTLE TASTE OF EVERYTHING WE BAKE")
      ========================================================= */}
      <section className="deux-exact-section">
        <div className="deux-exact-container">
          <div className="deux-exact-header center reveal-up">
            <span className="deux-retro-sticker">featured</span>
            <h2 className="deux-exact-h2">
              A LITTLE TASTE OF
              <br />
              EVERYTHING WE BAKE
            </h2>
          </div>

          {/* CATEGORY TABS */}
          <div className="deux-exact-tabs reveal-up stagger-1">
            {['ALL', 'BREADS', 'PASTRIES', 'HAMPERS'].map((tab) => (
              <button
                key={tab}
                type="button"
                className={`deux-exact-tab ${selectedTab === tab ? 'active' : ''}`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab === 'ALL' ? 'SEMUA MENU' : tab}
              </button>
            ))}
          </div>

          {/* 3-COLUMN CARDS GRID (DEUX STYLE) */}
          <div className="deux-exact-cards-grid">
            {displayedProducts.map((p, idx) => (
              <article key={p.id} className={`deux-exact-card reveal-scale stagger-${(idx % 3) + 1}`}>
                <div className="deux-exact-card-thumb">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <span className="card-badge-pill">{p.tag}</span>
                </div>

                <div className="deux-exact-card-content">
                  <span className="card-category-sub">{p.category}</span>
                  <h3 className="card-product-title">{p.name}</h3>
                  <p className="card-product-desc">{p.desc}</p>

                  <div className="card-bottom-row">
                    <span className="card-price-display">{p.price}</span>
                    <Link to="/pesanan" className="card-shop-pill">
                      <span>SHOP</span>
                      <Plus size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* VIEW ALL MENU LINK */}
          <div className="deux-exact-view-all reveal-up stagger-2">
            <Link to="/pesanan" className="deux-pill-outline-btn">
              <span>VIEW ALL MENU</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. TWIN PROMO CARDS (LIMITED OFFER & FRESH ARRIVAL)
      ========================================================= */}
      <section className="deux-exact-section-sm">
        <div className="deux-exact-container">
          <div className="deux-twin-promo-grid">
            {/* PROMO CARD 1 */}
            <div className="deux-twin-card yellow reveal-left">
              <div className="twin-top-content">
                <span className="deux-retro-sticker">limited offer</span>
                <h3 className="twin-headline">upto 20% OFF</h3>
                <p className="twin-subheadline">most FAVORITES loaf & hampers</p>
                <Link to="/pesanan" className="twin-cta-btn">
                  <span>SHOP NOW</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className="twin-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80"
                  alt="Limited offer loaf"
                />
              </div>
            </div>

            {/* PROMO CARD 2 */}
            <div className="deux-twin-card wheat reveal-right">
              <div className="twin-top-content">
                <span className="deux-retro-sticker">new arrival</span>
                <h3 className="twin-headline">FRESH DAILY</h3>
                <p className="twin-subheadline">handcrafted sourdough & potato donuts</p>
                <Link to="/pesanan" className="twin-cta-btn">
                  <span>SHOP NOW</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className="twin-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=700&q=80"
                  alt="Fresh daily sourdough"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          4. WHY ERLES (STORY & CRAFT)
      ========================================================= */}
      <section className="deux-exact-section why-bg">
        <div className="deux-exact-container">
          <div className="deux-why-exact-grid">
            <div className="why-left-quote-col reveal-left">
              <span className="deux-retro-sticker">why erles</span>
              <h2 className="deux-exact-h2">
                Freshly Made With Care
                <br />
                Thoughtfully Baked For
                <br />
                Everyday Moments
              </h2>
              <blockquote className="why-exact-quote">
                “Kami percaya memanggang adalah tentang menyatukan orang-orang terkasih lewat aroma
                kehangatan roti yang dibuat dengan kejujuran resep.”
              </blockquote>
            </div>

            <div className="why-right-features-col reveal-right">
              <div className="why-feature-block reveal-up stagger-1">
                <span className="f-num">01</span>
                <div>
                  <h4>Made Fresh Daily</h4>
                  <p>
                    Seluruh roti dan donat dipanggang setiap subuh, memastikan setiap gigitan
                    menghadirkan tekstur dan rasa terbaik.
                  </p>
                </div>
              </div>

              <div className="why-feature-block reveal-up stagger-2">
                <span className="f-num">02</span>
                <div>
                  <h4>Quality Ingredients</h4>
                  <p>
                    Mentega murni pilihan, ragi alami tanpa pengawet sintetis, dan bahan lokal
                    berkualitas tinggi.
                  </p>
                </div>
              </div>

              <div className="why-feature-block reveal-up stagger-3">
                <span className="f-num">03</span>
                <div>
                  <h4>Crafted By Hand</h4>
                  <p>
                    Fermentasi perlahan serta pembentukan adonan menggunakan tangan terampil
                    pengrajin roti kami.
                  </p>
                </div>
              </div>

              <div className="why-feature-block reveal-up stagger-4">
                <span className="f-num">04</span>
                <div>
                  <h4>Made To Share</h4>
                  <p>
                    Cocok untuk sarapan keluarga, teman kopi santai, maupun bingkisan hampers hari
                    raya.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          5. TICKER MARQUEE BANNER
      ========================================================= */}
      <div className="deux-marquee-exact">
        <div className="deux-marquee-exact-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="deux-marquee-exact-item">
              <span>Freshly Baked Goods</span>
              <span className="m-star">★</span>
              <span>Artisan Sourdough</span>
              <span className="m-star">★</span>
              <span>Soft Potato Donuts</span>
              <span className="m-star">★</span>
              <span>Special Hampers Box</span>
              <span className="m-star">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================
          6. VISIT STORE SECTION (DEUX STYLE)
      ========================================================= */}
      <section className="deux-exact-section">
        <div className="deux-exact-container">
          <div className="deux-exact-store-box reveal-scale">
            <div className="store-content-panel">
              <span className="deux-retro-sticker">VISIT OUR STORE</span>
              <h2 className="deux-exact-h2 light">We are waiting for your visit</h2>
              <p className="store-lead">
                Kunjungi dapur kami di Malang atau pesan secara online dengan kurir instan agar
                tiba selagi hangat.
              </p>

              <div className="store-details-list">
                <div className="store-info-row">
                  <Clock size={20} className="icon-gold" />
                  <div>
                    <strong>Malang Kitchen & Store</strong>
                    <span>Senin - Minggu: 07.00 - 21.00 WIB</span>
                  </div>
                </div>

                <div className="store-info-row">
                  <MapPin size={20} className="icon-gold" />
                  <div>
                    <strong>Lokasi Dapur</strong>
                    <span>Jl. Vinolia No. 25B, Lowokwaru, Kota Malang, Jawa Timur 65142</span>
                  </div>
                </div>
              </div>

              <div className="store-buttons-row">
                <a
                  href="https://wa.me/6285717224420"
                  target="_blank"
                  rel="noreferrer"
                  className="deux-whatsapp-btn"
                >
                  <MessageCircle size={18} />
                  <span>Chat WhatsApp (+62 857-1722-4420)</span>
                </a>
                <Link to="/pesanan" className="deux-white-pill-btn">
                  <span>Lihat Katalog Online</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          7. TESTIMONIALS (DEUX 2-COL WITH BUTTER CARD)
      ========================================================= */}
      <section className="deux-exact-section">
        <div className="deux-exact-container">
          <div className="deux-testi-exact-grid">
            {/* LEFT IMAGE */}
            <div className="testi-exact-image-col reveal-left">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85"
                alt="Bakery moment"
              />
            </div>

            {/* RIGHT BUTTER GOLD CARD (RADIUS 48px) */}
            <div className="testi-exact-card-col reveal-right">
              <div className="testi-quote-mark">“</div>
              <div className="testi-stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#CC4A3B" color="#CC4A3B" />
                ))}
              </div>
              <blockquote className="testi-quote-phrase">
                “The bread is incredible, crisp on the outside, soft in the middle, and full of
                flavor. Everything tastes so fresh and thoughtfully made, from the potato donuts to
                the sourdough.”
              </blockquote>
              <div className="testi-author-exact">
                <strong>BUDI SANTOSO</strong>
                <span>Pelanggan Setia • Lowokwaru, Malang</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          8. BLOG / INSPIRATION SECTION (FROM DEUX BAKERY)
      ========================================================= */}
      <section className="deux-exact-section">
        <div className="deux-exact-container">
          <div className="deux-exact-header center reveal-up">
            <span className="deux-retro-sticker">blog</span>
            <h2 className="deux-exact-h2">
              STORIES, RECIPES & INSPIRATION
              <br />
              FROM OUR OVEN
            </h2>
          </div>

          <div className="deux-blog-exact-grid">
            {blogArticles.map((art, idx) => (
              <article key={idx} className={`deux-blog-card reveal-up stagger-${idx + 1}`}>
                <div className="blog-thumb">
                  <img src={art.image} alt={art.title} />
                </div>
                <div className="blog-body">
                  <span className="blog-meta">
                    {art.category} • {art.date}
                  </span>
                  <h3 className="blog-title">{art.title}</h3>
                  <p className="blog-desc">{art.desc}</p>
                  <Link to="/pesanan" className="blog-read-more">
                    <span>Baca Selengkapnya</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          9. FAQ ACCORDION SECTION
      ========================================================= */}
      <section className="deux-exact-section faq-bg">
        <div className="deux-exact-container">
          <div className="deux-exact-header center reveal-up">
            <span className="deux-retro-sticker">faqs</span>
            <h2 className="deux-exact-h2">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="faq-subtitle">
              Pertanyaan umum mengenai bakes harian, pemesanan online, dan pengiriman kami di
              Malang.
            </p>
          </div>

          <div className="deux-exact-faq-stack reveal-up stagger-1">
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className={`deux-exact-faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <div className="faq-question-bar">
                  <span>{item.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openFaq === idx && (
                  <div className="faq-answer-bar">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          10. PRE-FOOTER BANNER CTA (DEUX BAKERY SIGNATURE SHOWCASE)
      ========================================================= */}
      <section className="deux-banner-cta">
        <div className="deux-exact-container">
          <div className="deux-banner-inner reveal-scale">
            {/* LEFT TILTED BREAD PHOTO */}
            <div className="banner-decor-photo left">
              <img
                src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=400&q=80"
                alt="Artisan Sourdough"
              />
            </div>

            {/* CENTER CONTENT */}
            <div className="banner-center-content">
              <span className="deux-retro-sticker">VISIT THE NEAREST</span>
              <h2 className="deux-banner-heading">
                Let’s Get A Perfect Sourdough Loaf For Today
              </h2>
              <p className="deux-banner-desc">
                Dipanggang segar setiap subuh di dapur artisan kami di Kota Malang. Nikmati
                kehangatan roti sourdough, donat kentang lembut, dan hampers istimewa hari ini.
              </p>

              <div className="deux-banner-btn-group">
                <Link to="/pesanan" className="deux-banner-button">
                  <span>EXPLORE OUR MENU</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/6285717224420"
                  target="_blank"
                  rel="noreferrer"
                  className="deux-banner-secondary-btn"
                >
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>

            {/* RIGHT TILTED CROISSANT PHOTO */}
            <div className="banner-decor-photo right">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80"
                alt="Golden Croissant"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
