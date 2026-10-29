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
  Sparkles,
} from 'lucide-react';

const heroImage =
  'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85';

const allProducts = [
  {
    id: 1,
    category: 'BREADS',
    name: 'Sourdough Country Boule',
    price: 'Rp 45.000',
    desc: 'Kerak renyah keemasan dengan remah berongga lembut hasil fermentasi 24 jam.',
    image:
      'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80',
    tag: 'Favorite',
  },
  {
    id: 2,
    category: 'BREADS',
    name: 'Olive & Herb Ciabatta',
    price: 'Rp 32.000',
    desc: 'Roti klasik Italia dengan potongan buah zaitun hitam dan taburan rosemary wangi.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80',
    tag: 'Artisan',
  },
  {
    id: 3,
    category: 'BREADS',
    name: 'French Baguette Tradisi',
    price: 'Rp 28.000',
    desc: 'Baguette renyah autentik Prancis, pasangan sempurna untuk selai atau keju.',
    image:
      'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?auto=format&fit=crop&w=600&q=80',
    tag: 'Classic',
  },
  {
    id: 4,
    category: 'PASTRIES',
    name: 'Donat Kentang Klasik Gula',
    price: 'Rp 8.000',
    desc: 'Donat kentang asli Malang super lembut dan montok dengan taburan icing sugar.',
    image:
      'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=600&q=80',
    tag: 'Best Seller',
  },
  {
    id: 5,
    category: 'PASTRIES',
    name: 'Donat Kentang Cokelat Meses',
    price: 'Rp 9.500',
    desc: 'Donat kentang empuk berbalut dark chocolate glaze dan taburan meses premium.',
    image:
      'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=600&q=80',
    tag: 'Kids Fav',
  },
  {
    id: 6,
    category: 'HAMPERS',
    name: 'Hampers Artisan Heritage',
    price: 'Rp 175.000',
    desc: 'Paket box anyaman rotan berisi 1 Country Boule, 4 Donat Kentang, dan jar selai.',
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80',
    tag: 'Special Box',
  },
  {
    id: 7,
    category: 'HAMPERS',
    name: 'Hampers Manis Lebaran Box',
    price: 'Rp 145.000',
    desc: 'Box eksklusif 6 donat kentang aneka topping, kartu ucapan kustom, dan pita satin.',
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    tag: 'Gift Ready',
  },
  {
    id: 8,
    category: 'SWEETS',
    name: 'Brioche Cokelat Leleh',
    price: 'Rp 22.000',
    desc: 'Roti mentega Prancis yang kaya rasa dengan isian cokelat couverture leleh.',
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=600&q=80',
    tag: 'Sweet Bake',
  },
];

const faqData = [
  {
    q: 'Apakah semua roti dan donat dipanggang segar setiap hari?',
    a: 'Ya! Seluruh produk Erles Bakery mulai diproses dan dipanggang sejak jam 4 subuh setiap hari tanpa bahan pengawet sintetis sehingga Anda selalu menerima bakes dalam kondisi paling segar.',
  },
  {
    q: 'Apakah bisa memesan untuk pengiriman instan di Kota Malang?',
    a: 'Tentu bisa. Kami melayani kurir instan (GrabExpress/GoSend) ke seluruh wilayah Kota Malang, Batu, dan sekitarnya dari dapur kami di Lowokwaru.',
  },
  {
    q: 'Bagaimana cara memesan paket Hampers kustom untuk acara?',
    a: 'Anda dapat memilih kategori Hampers pada menu pesanan, memilih jenis box, menentukan isian roti/donat, serta menuliskan pesan kartu ucapan langsung sebelum checkout atau konsultasi lewat WhatsApp.',
  },
  {
    q: 'Berapa lama daya tahan roti artisan sourdough dan donat kentang?',
    a: 'Roti artisan sourdough dapat bertahan 3-4 hari di suhu ruang dalam wadah tertutup, atau hingga 2 minggu jika dibekukan di freezer. Donat kentang terbaik dinikmati dalam 1-2 hari.',
  },
];

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState('ALL');
  const [openFaq, setOpenFaq] = useState(0);

  const filteredProducts =
    selectedTab === 'ALL'
      ? allProducts
      : allProducts.filter((p) => p.category === selectedTab);

  return (
    <div className="deux-page">
      {/* 1. HERO SECTION (DEUX STYLE) */}
      <section className="deux-hero-wrap">
        <div className="deux-container">
          <div className="deux-hero-grid">
            {/* LEFT TEXT COLUMN */}
            <div className="deux-hero-content">
              {/* ROTATING HOMEMADE BADGE */}
              <div className="deux-stamp-badge" title="Homemade Bakery Malang">
                <svg
                  className="deux-stamp-svg"
                  viewBox="0 0 100 100"
                  width="84"
                  height="84"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="#FFE480" stroke="#4A2E17" strokeWidth="2" />
                  <text
                    fontSize="9.5"
                    fontWeight="800"
                    fill="#4A2E17"
                    letterSpacing="2.2"
                  >
                    <textPath href="#circlePath">
                      HOMEMADE BAKERY • MALANG •
                    </textPath>
                  </text>
                  <circle cx="50" cy="50" r="14" fill="#CC4A3B" />
                  <polygon
                    points="50,42 53,48 59,49 55,54 56,60 50,57 44,60 45,54 41,49 47,48"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>

              {/* GIANT SPLIT HERO TITLE (MOUSE MEMOIRS) */}
              <h1 className="deux-hero-headline">
                <span className="deux-hl-red">Freshly Baked</span>
                <span className="deux-hl-brown"> Goods</span>
                <br />
                <span className="deux-hl-brown">Every Day</span>
              </h1>

              <p className="deux-hero-desc">
                Dapur artisan Erles Bakery hadir menyajikan kehangatan roti segar,
                artisan sourdough fermentasi alami, donat kentang lembut, dan paket hampers
                istimewa setiap hari di Kota Malang.
              </p>

              {/* THREE PILLS */}
              <div className="deux-category-pills">
                <span className="pill-item">FRESH</span>
                <span className="pill-dot">•</span>
                <span className="pill-item">TASTY</span>
                <span className="pill-dot">•</span>
                <span className="pill-item">SWEET</span>
              </div>

              {/* HERO CTA BUTTON */}
              <div className="deux-hero-action">
                <Link to="/pesanan" className="deux-btn-dark">
                  <span>SHOP NOW</span>
                  <ArrowRight size={17} />
                </Link>
                <a
                  href="https://wa.me/6285717224420"
                  target="_blank"
                  rel="noreferrer"
                  className="deux-btn-outline"
                >
                  <MessageCircle size={17} />
                  <span>HUBUNGI KAMI</span>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE COLUMN */}
            <div className="deux-hero-visual-col">
              <div className="deux-hero-image-box">
                <img
                  src={heroImage}
                  alt="Freshly Baked Goods at Erles Bakery"
                  className="deux-hero-img-element"
                />

                {/* FLOATING TOP BADGE */}
                <div className="deux-float-pill top-right">
                  <Sparkles size={14} />
                  <span>Dipanggang Hangat Subuh Ini</span>
                </div>

                {/* FLOATING REVIEW CARD */}
                <div className="deux-float-card bottom-left">
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} fill="#CC4A3B" color="#CC4A3B" />
                    ))}
                    <span className="rating-val">4.9</span>
                  </div>
                  <p>“Sourdough renyah & donat kentang paling empuk di Malang.”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MENU SHOWCASE: "A LITTLE TASTE OF EVERYTHING WE BAKE" */}
      <section className="deux-section-featured">
        <div className="deux-container">
          <div className="deux-center-header">
            <span className="deux-scallop-tag">featured</span>
            <h2 className="deux-display-title">
              A LITTLE TASTE OF EVERYTHING WE BAKE
            </h2>
          </div>

          {/* CATEGORY TABS (DEUX STYLE) */}
          <div className="deux-tabs-row">
            {[
              { id: 'ALL', label: 'SEMUA MENU' },
              { id: 'BREADS', label: 'BREADS' },
              { id: 'PASTRIES', label: 'PASTRIES' },
              { id: 'HAMPERS', label: 'HAMPERS' },
              { id: 'SWEETS', label: 'SWEETS' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`deux-tab-btn ${selectedTab === tab.id ? 'active' : ''}`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* PRODUCT CARDS GRID */}
          <div className="deux-cards-grid">
            {filteredProducts.map((p) => (
              <article key={p.id} className="deux-card-item">
                <div className="deux-card-thumb">
                  <img src={p.image} alt={p.name} loading="lazy" />
                  <span className="deux-thumb-badge">{p.tag}</span>
                </div>

                <div className="deux-card-info">
                  <span className="deux-card-type">{p.category}</span>
                  <h3 className="deux-card-heading">{p.name}</h3>
                  <p className="deux-card-snippet">{p.desc}</p>

                  <div className="deux-card-price-row">
                    <span className="deux-card-cost">{p.price}</span>
                    <Link to="/pesanan" className="deux-shop-btn">
                      <span>SHOP</span>
                      <Plus size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* VIEW ALL MENU LINK */}
          <div className="deux-center-cta">
            <Link to="/pesanan" className="deux-view-all-button">
              <span>VIEW ALL MENU</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. TWIN PROMO BANNERS (DEUX TWIN CARDS) */}
      <section className="deux-promo-section">
        <div className="deux-container">
          <div className="deux-promo-grid">
            {/* CARD 1: LIMITED OFFER */}
            <div className="deux-promo-card yellow">
              <span className="promo-badge-tag">limited offer</span>
              <h3 className="promo-big-title">upto 20% OFF</h3>
              <p className="promo-sub">most FAVORITES loaf & custom hampers</p>
              <Link to="/pesanan" className="promo-cta-btn">
                <span>SHOP NOW</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* CARD 2: NEW ARRIVAL */}
            <div className="deux-promo-card wheat">
              <span className="promo-badge-tag">new arrival</span>
              <h3 className="promo-big-title">FRESH DAILY</h3>
              <p className="promo-sub">handcrafted sourdough & potato donuts</p>
              <Link to="/pesanan" className="promo-cta-btn">
                <span>SHOP NOW</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY ERLES / STORY SECTION */}
      <section className="deux-story-section">
        <div className="deux-container">
          <div className="deux-story-layout">
            <div className="deux-story-left">
              <span className="deux-scallop-tag">why erles</span>
              <h2 className="deux-display-title">
                Freshly Made With Care
                <br />
                Thoughtfully Baked For
                <br />
                Everyday Moments
              </h2>
              <blockquote className="deux-story-quote">
                “Kami percaya seni memanggang adalah tentang mempertemukan keluarga dan
                sahabat lewat aroma kehangatan roti yang jujur dan tulus.”
              </blockquote>
            </div>

            <div className="deux-story-right">
              <div className="deux-feature-stack">
                <div className="deux-feature-item">
                  <span className="feature-num">01</span>
                  <div>
                    <h4>Made Fresh Daily</h4>
                    <p>
                      Seluruh roti dan donat dipanggang setiap subuh, memastikan setiap gigitan
                      memiliki tekstur dan kesegaran terbaik.
                    </p>
                  </div>
                </div>

                <div className="deux-feature-item">
                  <span className="feature-num">02</span>
                  <div>
                    <h4>Quality Ingredients</h4>
                    <p>
                      Memilih mentega berkualitas tinggi, tepung tanpa pemutih sintetis, dan ragi
                      alami untuk cita rasa yang bersih dan alami.
                    </p>
                  </div>
                </div>

                <div className="deux-feature-item">
                  <span className="feature-num">03</span>
                  <div>
                    <h4>Crafted By Hand</h4>
                    <p>
                      Fermentasi perlahan serta pembentukan adonan menggunakan tangan terampil
                      pengrajin roti kami.
                    </p>
                  </div>
                </div>

                <div className="deux-feature-item">
                  <span className="feature-num">04</span>
                  <div>
                    <h4>Made To Share</h4>
                    <p>
                      Sangat cocok untuk sarapan santai, bekal anak, bingkisan hampers hari raya,
                      maupun hidangan arisan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TICKER MARQUEE BANNER */}
      <div className="deux-ticker-strip">
        <div className="deux-ticker-runner">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="deux-ticker-chunk">
              <span>Freshly Baked Goods</span>
              <span className="star-sep">★</span>
              <span>Artisan Sourdough</span>
              <span className="star-sep">★</span>
              <span>Soft Potato Donuts</span>
              <span className="star-sep">★</span>
              <span>Special Hampers Box</span>
              <span className="star-sep">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* 6. VISIT STORE & HOURS SECTION */}
      <section className="deux-store-section">
        <div className="deux-container">
          <div className="deux-store-panel">
            <div className="deux-store-left">
              <span className="deux-scallop-tag light">VISIT OUR STORE</span>
              <h2 className="deux-store-title">We are waiting for your visit</h2>
              <p className="deux-store-sub">
                Datang langsung ke dapur kami di Malang atau pesan secara online dengan kurir instan
                agar tiba selagi hangat.
              </p>

              <div className="deux-store-details">
                <div className="store-detail-row">
                  <Clock size={20} className="store-icon" />
                  <div>
                    <strong>Jam Operasional Toko</strong>
                    <p>Senin - Minggu: 07.00 - 21.00 WIB</p>
                  </div>
                </div>

                <div className="store-detail-row">
                  <MapPin size={20} className="store-icon" />
                  <div>
                    <strong>Lokasi Dapur</strong>
                    <p>Jl. Vinolia No. 25B, Lowokwaru, Kota Malang, Jawa Timur 65142</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="deux-store-right">
              <div className="store-cta-box">
                <h4>Pesan & Konsultasi Langsung</h4>
                <p>Mau custom hampers atau cek ketersediaan varian roti hari ini?</p>
                <a
                  href="https://wa.me/6285717224420"
                  target="_blank"
                  rel="noreferrer"
                  className="deux-wa-big-btn"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Admin (+62 857-1722-4420)</span>
                </a>
                <Link to="/pesanan" className="deux-menu-big-btn">
                  <span>Lihat Katalog Lengkap</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIAL SECTION */}
      <section className="deux-section-testi">
        <div className="deux-container">
          <div className="deux-center-header">
            <span className="deux-scallop-tag">testimonials</span>
            <h2 className="deux-display-title">WORDS FROM OUR GUESTS</h2>
          </div>

          <div className="deux-testi-single">
            <div className="testi-stars-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="#CC4A3B" color="#CC4A3B" />
              ))}
            </div>
            <blockquote className="deux-testi-quote-text">
              “The bread is incredible, crisp on the outside, soft in the middle, and full of flavor.
              Everything tastes so fresh and thoughtfully made, from the potato donuts to the sourdough.
              It’s easily become one of my favorite places in Malang.”
            </blockquote>
            <div className="deux-testi-author-info">
              <strong>BUDI SANTOSO</strong>
              <span>Pelanggan Setia • Lowokwaru, Malang</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="deux-faq-section">
        <div className="deux-container">
          <div className="deux-center-header">
            <span className="deux-scallop-tag">faqs</span>
            <h2 className="deux-display-title">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="deux-faq-intro">
              Pertanyaan umum mengenai bakes harian, sistem pemesanan, hampers, dan pengiriman kami.
            </p>
          </div>

          <div className="deux-faq-accordion">
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className={`deux-faq-item ${openFaq === idx ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <div className="deux-faq-question">
                  <span>{item.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                {openFaq === idx && (
                  <div className="deux-faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CTA STRIP BEFORE FOOTER */}
      <section className="deux-banner-cta">
        <div className="deux-container">
          <div className="deux-banner-inner">
            <span className="deux-scallop-tag light">VISIT THE NEAREST</span>
            <h2 className="deux-banner-heading">
              Let’s Get A Perfect Loaf For Today
            </h2>
            <Link to="/pesanan" className="deux-banner-button">
              <span>FIND US & ORDER</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
