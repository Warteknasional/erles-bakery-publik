import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const bakerPortrait =
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=85';

const cardsWhy = [
  {
    title: 'Made Fresh Daily',
    desc: 'Seluruh roti dan donat dipanggang setiap subuh, memastikan setiap gigitan memiliki aroma mentega dan kelembutan terbaik.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    tag: 'Setiap Subuh',
  },
  {
    title: 'Quality Ingredients',
    desc: 'Kami memilih mentega murni, ragi sourdough alami, dan tepung artisan tanpa bahan pengawet sintetis.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80',
    tag: 'Bahan Alami',
  },
  {
    title: 'Made To Share',
    desc: 'Diciptakan untuk menemani sarapan hangat keluarga, secangkir kopi sore, dan bingkisan hampers penuh cinta.',
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80',
    tag: 'Penuh Berkah',
  },
];

const stats = [
  {
    num: '5+',
    label: 'Tahun Memanggang',
    desc: 'Mengasah resep artisan dan kelembutan donat kentang autentik sejak 2021.',
  },
  {
    num: '25+',
    label: 'Varian Pilihan',
    desc: 'Koleksi sourdough, brioche, donat kentang, dan box hampers tematik.',
  },
  {
    num: '10.000+',
    label: 'Pelanggan Bahagia',
    desc: 'Momen kehangatan panggangan yang dibagikan kepada keluarga di Kota Malang.',
  },
  {
    num: '100%',
    label: 'Tanpa Pengawet',
    desc: 'Komitmen bahan bersih dan sehat tanpa pemanis atau pengawet buatan.',
  },
];

const teamMembers = [
  {
    name: 'ERLES',
    role: 'Founder & Head Baker',
    desc: 'Memulai dari oven rumahan dengan cinta pada sourdough tradisional dan donat kentang khas Malang.',
    image:
      'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'SITI RAHMA',
    role: 'Sourdough Artisan',
    desc: 'Merawat ragi alami (starter) dan mengontrol fermentasi lambat 24 jam untuk tekstur kerak sempurna.',
    image:
      'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'DIMAS ARDIAN',
    role: 'Donut & Pastry Chef',
    desc: 'Menjaga kelembutan donat kentang asli, racikan glaze cokelat, dan adonan brioche yang harum.',
    image:
      'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'ANISA PUTRI',
    role: 'Hampers Stylist',
    desc: 'Mendesain packaging hampers estetik, pita satin elegan, dan kartu ucapan kustom untuk momen spesial.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
  },
];

export default function TentangPage() {
  return (
    <div className="deux-about-page">
      {/* 1. HERO ABOUT (DEUX STYLE) */}
      <section className="deux-about-hero">
        <div className="deux-container">
          <div className="deux-about-hero-center reveal-up">
            <span className="deux-scallop-tag">about</span>
            <span className="deux-about-mini-brand">erles bakery</span>
            <h1 className="deux-about-title">
              neighborhood bakery
              <br />
              with a soft spot
            </h1>
            <p className="deux-about-lead">
              Kami memanggang kehangatan klasik dengan sepenuh hati — dibuat tangan oleh pengrajin
              lokal, dalam kelompok kecil (small batches), setiap subuh di dapur kami di Kota Malang.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FOUNDER NOTE & MISSION (MEET THE BAKER) */}
      <section className="deux-mission-section">
        <div className="deux-container">
          <div className="deux-mission-grid">
            {/* PORTRAIT WITH SCOTCH TAPE */}
            <div className="deux-founder-visual reveal-left">
              <div className="deux-tape-decor"></div>
              <div className="deux-portrait-frame">
                <img
                  src={bakerPortrait}
                  alt="Baker Erles Bakery"
                  className="deux-portrait-img"
                />
                <div className="deux-portrait-badge">
                  <Sparkles size={14} />
                  <span>Dapur Artisan Malang</span>
                </div>
              </div>
            </div>

            {/* FOUNDER NOTE JOURNAL CARD */}
            <div className="deux-founder-card reveal-right">
              <div className="founder-card-top">
                <span className="founder-note-pill">FOUNDER NOTE</span>
                <Heart size={16} fill="#CC4A3B" color="#CC4A3B" />
              </div>

              <blockquote className="founder-quote">
                “SAYA INGIN ERLES BAKERY MENJADI DAPUR HANGAT YANG SELALU ANDA RINDUKAN — PENUH
                KEJUJURAN RASA DAN SENTUHAN PERSONAL.”
              </blockquote>

              <p className="founder-body">
                Bagi kami, membuat roti bukan sekadar mencampur tepung dan air. Itu berarti
                merasakan elastisitas adonan dengan sentuhan tangan, mengingat pesanan favorit setiap
                pelanggan setia di Malang, dan menolak jalan pintas bahan pengawet demi menghasilkan
                roti dan donat yang layak dikenang di meja makan Anda.
              </p>

              <div className="founder-signature-box">
                <strong className="founder-name">ERLES & TIM BAKERS</strong>
                <span className="founder-role">Dapur Erles Bakery • Lowokwaru, Kota Malang</span>
              </div>

              <div className="founder-proof-strip">
                <span>BAKED BY HAND</span>
                <span className="dot">•</span>
                <span>SERVED SAME DAY</span>
                <span className="dot">•</span>
                <span>NO SHORTCUTS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY ERLES (3 PHOTO CARDS) */}
      <section className="deux-why-section">
        <div className="deux-container">
          <div className="deux-center-header reveal-up">
            <span className="deux-scallop-tag">why erles</span>
            <h2 className="deux-display-title">
              Freshly Made With Care For Everyday
            </h2>
          </div>

          <div className="deux-why-cards-grid">
            {cardsWhy.map((c, idx) => (
              <div key={idx} className={`deux-why-card reveal-scale stagger-${idx + 1}`}>
                <div className="why-card-image">
                  <img src={c.image} alt={c.title} />
                  <span className="why-card-tag">{c.tag}</span>
                </div>
                <div className="why-card-body">
                  <h3 className="why-card-title">{c.title}</h3>
                  <p className="why-card-desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IN NUMBERS SECTION */}
      <section className="deux-numbers-section">
        <div className="deux-container">
          <div className="deux-center-header reveal-up">
            <span className="deux-scallop-tag light">in numbers</span>
            <h2 className="deux-display-title">
              The Numbers Behind Every Loaf We Bake
            </h2>
          </div>

          <div className="deux-stats-grid">
            {stats.map((s, idx) => (
              <div key={idx} className={`deux-stat-item reveal-up stagger-${idx + 1}`}>
                <span className="stat-big-num">{s.num}</span>
                <strong className="stat-label">{s.label}</strong>
                <p className="stat-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MEET OUR TEAM / BAKERS */}
      <section className="deux-team-section">
        <div className="deux-container">
          <div className="deux-center-header reveal-up">
            <span className="deux-scallop-tag">team member</span>
            <h2 className="deux-display-title">THE HANDS BEHIND OUR OVEN</h2>
            <p className="deux-team-subtitle">
              Orang-orang berdedikasi yang bangun sebelum fajar untuk menyiapkan panggangan terbaik
              bagi Anda.
            </p>
          </div>

          <div className="deux-team-grid">
            {teamMembers.map((m, idx) => (
              <div key={idx} className={`deux-team-card reveal-up stagger-${idx + 1}`}>
                <div className="team-photo-wrap">
                  <img src={m.image} alt={m.name} />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{m.name}</h4>
                  <span className="team-role">{m.role}</span>
                  <p className="team-desc">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM BANNER CTA (DEUX BAKERY SIGNATURE SHOWCASE) */}
      <section className="deux-banner-cta">
        <div className="deux-container">
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
              <span className="deux-scallop-tag">VISIT THE NEAREST</span>
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
                  href={SITE_CONFIG.whatsappUrl}
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
