import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/site';
import {
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Send,
  CheckCircle2,
  Sparkles,
  Store,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';

function InstagramIcon({ size = 20, ...props }) {
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

const contactFaq = [
  {
    q: 'Apakah bisa memesan roti atau hampers untuk hari yang sama (Same-Day)?',
    a: 'Bisa! Untuk varian menu harian seperti Sourdough, Donat Kentang, dan Roti Manis, Anda dapat memesan langsung via katalog web atau WhatsApp selama stok panggangan hari ini masih tersedia. Untuk pesanan hampers dalam jumlah di atas 5 box, disarankan reservasi H-1.',
  },
  {
    q: 'Berapa biaya pengiriman kurir untuk wilayah Malang?',
    a: 'Pengiriman kurir flat Rp 12.000 untuk seluruh area perkotaan Malang (Lowokwaru, Klojen, Blimbing, Sukun, Kedungkandang). Anda juga dapat memilih opsi "Ambil Sendiri di Dapur" secara gratis.',
  },
  {
    q: 'Apakah toko fisik di Vinolia menyediakan tempat makan di tempat (Dine-in)?',
    a: 'Toko dan dapur kami menyediakan area duduk santai (*seating area*) untuk menikmati kopi dan roti hangat langsung dari oven, serta melayani pembelian take-away higienis.',
  },
  {
    q: 'Bagaimana cara mengajukan pesanan khusus atau kerjasama kemitraan (B2B)?',
    a: 'Silakan isi formulir pesan di halaman ini dengan memilih topik "Kustom Hampers & Event" atau hubungi langsung WhatsApp Business kami di +62 821-4534-6270 untuk penawaran harga grosir khusus instansi/kafe.',
  },
];

export default function KontakPage() {
  const [copiedWA, setCopiedWA] = useState(false);
  const [copiedIG, setCopiedIG] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [form, setForm] = useState({
    name: '',
    contact: '',
    topic: 'Pemesanan Menu Harian',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'wa') {
      setCopiedWA(true);
      setTimeout(() => setCopiedWA(false), 2200);
    } else if (type === 'ig') {
      setCopiedIG(true);
      setTimeout(() => setCopiedIG(false), 2200);
    } else if (type === 'addr') {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2200);
    } else if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleSendFormToWA = () => {
    const text = `*PESAN DARI WEBSITE ERLES BAKERY*%0A%0A*Nama:* ${encodeURIComponent(
      form.name
    )}%0A*Kontak Pengirim:* ${encodeURIComponent(
      form.contact
    )}%0A*Topik:* ${encodeURIComponent(
      form.topic
    )}%0A*Isi Pesan:*%0A${encodeURIComponent(form.message)}`;

    window.open(`https://wa.me/6282145346270?text=${text}`, '_blank');
  };

  const handleResetForm = () => {
    setForm({
      name: '',
      contact: '',
      topic: 'Pemesanan Menu Harian',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="deux-contact-page">
      {/* 1. HERO HEADER */}
      <section className="deux-contact-hero">
        <div className="deux-container">
          <div className="deux-contact-hero-center reveal-up">
            <span className="deux-scallop-tag">CONTACT & SERVICE DESK</span>
            <span className="deux-contact-mini-brand">erles bakery kitchen</span>

            <h1 className="deux-contact-title">
              LET’S CONNECT WITH
              <br />
              OUR BAKERY
            </h1>

            <p className="deux-contact-lead">
              Punya pertanyaan seputar ketersediaan roti hari ini, kustom hampers acara istimewa,
              atau ingin berkunjung ke dapur kami di Malang? Tim Erles Bakery siap melayani Anda
              dengan senang hati.
            </p>

            <div className="deux-contact-status-bar">
              <span className="status-live-dot"></span>
              <span className="status-text">
                <strong>Dapur Buka Hari Ini</strong> • Panggangan Segar 07.00 – 21.00 WIB
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHANNELS HUB GRID (4 MAIN TOUCHPOINTS) */}
      <section className="deux-container">
        <div className="deux-channels-grid">
          {/* CARD 1: WHATSAPP */}
          <div className="deux-channel-card highlight-wa reveal-scale stagger-1">
            <div className="channel-card-top">
              <div className="channel-icon-pill wa">
                <MessageCircle size={24} />
              </div>
              <span className="channel-badge green">RESPONS CEPAT</span>
            </div>

            <div className="channel-card-body">
              <h3 className="channel-title">WhatsApp Customer Care</h3>
              <p className="channel-desc">
                Konsultasi langsung dengan tim dapur kami untuk cek stok hangat hari ini, reservasi
                kurir instan, atau panduan hampers.
              </p>
              <div className="channel-contact-val">
                <span>{SITE_CONFIG.phone}</span>
              </div>
            </div>

            <div className="channel-actions">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="channel-primary-btn wa"
              >
                <MessageCircle size={16} />
                <span>Chat WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(SITE_CONFIG.phone, 'wa')}
                className="channel-secondary-btn"
                title="Salin Nomor WhatsApp"
              >
                {copiedWA ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                <span>{copiedWA ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>
          </div>

          {/* CARD 2: INSTAGRAM */}
          <div className="deux-channel-card highlight-ig reveal-scale stagger-2">
            <div className="channel-card-top">
              <div className="channel-icon-pill ig">
                <InstagramIcon size={24} />
              </div>
              <span className="channel-badge purple">UPDATE HARIAN</span>
            </div>

            <div className="channel-card-body">
              <h3 className="channel-title">Instagram Resmi</h3>
              <p className="channel-desc">
                Ikuti story harian saat roti keluar dari oven, foto inspirasi kemasan hampers,
                serta promo giveaway komunitas kami.
              </p>
              <div className="channel-contact-val">
                <span>@erles_donut.mlg</span>
              </div>
            </div>

            <div className="channel-actions">
              <a
                href="https://www.instagram.com/erles_donut.mlg"
                target="_blank"
                rel="noreferrer"
                className="channel-primary-btn ig"
              >
                <ExternalLink size={16} />
                <span>Buka Instagram</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy('@erles_donut.mlg', 'ig')}
                className="channel-secondary-btn"
                title="Salin Username Instagram"
              >
                {copiedIG ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                <span>{copiedIG ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>
          </div>

          {/* CARD 3: STORE LOCATION */}
          <div className="deux-channel-card highlight-store reveal-scale stagger-3">
            <div className="channel-card-top">
              <div className="channel-icon-pill store">
                <MapPin size={24} />
              </div>
              <span className="channel-badge gold">DAPUR & TOKO FISIK</span>
            </div>

            <div className="channel-card-body">
              <h3 className="channel-title">Dapur Erles Bakery Malang</h3>
              <p className="channel-desc">
                Kunjungi kami di Lowokwaru untuk mencium wangi panggangan roti langsung dan menikmati
                suguhan donat empuk.
              </p>
              <div className="channel-contact-val small">
                <span>Jl. Vinolia No. 25B, Lowokwaru, Kota Malang 65142</span>
              </div>
            </div>

            <div className="channel-actions">
              <a
                href={SITE_CONFIG.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="channel-primary-btn dark"
              >
                <MapPin size={16} />
                <span>Petunjuk Maps</span>
              </a>
              <button
                type="button"
                onClick={() =>
                  handleCopy('Jl. Vinolia No. 25B, Lowokwaru, Kota Malang 65142', 'addr')
                }
                className="channel-secondary-btn"
                title="Salin Alamat Lengkap"
              >
                {copiedAddress ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                <span>{copiedAddress ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>
          </div>

          {/* CARD 4: CORPORATE / EMAIL */}
          <div className="deux-channel-card highlight-corp reveal-scale stagger-4">
            <div className="channel-card-top">
              <div className="channel-icon-pill mail">
                <Mail size={24} />
              </div>
              <span className="channel-badge brown">KEMITRAAN & EVENT</span>
            </div>

            <div className="channel-card-body">
              <h3 className="channel-title">Pesanan Acara & Kantor</h3>
              <p className="channel-desc">
                Layanan khusus kebutuhan konsumsi meeting, souvenir reuni, hantaran pernikahan, atau
                pasokan cafe dengan penawaran resmi.
              </p>
              <div className="channel-contact-val">
                <span>erlesbakery.mlg@gmail.com</span>
              </div>
            </div>

            <div className="channel-actions">
              <a
                href="mailto:erlesbakery.mlg@gmail.com?subject=Inquiry%20Kerjasama%20Erles%20Bakery"
                className="channel-primary-btn dark"
              >
                <Mail size={16} />
                <span>Kirim Email</span>
              </a>
              <button
                type="button"
                onClick={() => handleCopy('erlesbakery.mlg@gmail.com', 'email')}
                className="channel-secondary-btn"
                title="Salin Alamat Email"
              >
                {copiedEmail ? <Check size={16} color="#16a34a" /> : <Copy size={16} />}
                <span>{copiedEmail ? 'Tersalin' : 'Salin'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL SECTION: INTERACTIVE MESSAGE DESK & STORE DETAILS */}
      <section className="deux-container deux-contact-split-section">
        <div className="deux-split-grid">
          {/* LEFT: INTERACTIVE MESSAGE FORM */}
          <div className="deux-inquiry-box reveal-left">
            <div className="inquiry-box-header">
              <span className="deux-retro-sticker">MESSAGE DESK</span>
              <h2 className="deux-inquiry-title">Kirim Pertanyaan Langsung</h2>
              <p className="deux-inquiry-sub">
                Isi formulir di bawah ini untuk konsultasi pesanan, pertanyaan stok, atau kritik
                saran. Pesan Anda akan langsung dicatat oleh tim pengelola.
              </p>
            </div>

            {isSubmitted ? (
              <div className="inquiry-success-card">
                <div className="success-icon-badge">
                  <CheckCircle2 size={36} color="#16a34a" />
                </div>
                <h3>Pesan Anda Berhasil Diterima!</h3>
                <p>
                  Halo <strong>{form.name}</strong>, terima kasih atas pesan Anda mengenai topik{' '}
                  <strong>"{form.topic}"</strong>.
                </p>
                <p className="success-note">
                  Untuk tanggapan instan dalam beberapa menit, Anda dapat langsung meneruskan pesan ini
                  ke WhatsApp resmi kami:
                </p>

                <div className="success-actions-row">
                  <button
                    type="button"
                    onClick={handleSendFormToWA}
                    className="success-wa-forward-btn"
                  >
                    <MessageCircle size={18} />
                    <span>Teruskan ke WhatsApp ({SITE_CONFIG.phone})</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="success-reset-btn"
                  >
                    Tulis Pesan Baru
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="deux-inquiry-form">
                <div className="form-group-custom">
                  <label>Nama Lengkap Anda *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rina Melati"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="form-group-custom">
                  <label>Nomor WhatsApp atau Email Anda *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 08123456789 atau rina@email.com"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  />
                </div>

                <div className="form-group-custom">
                  <label>Topik Keperluan *</label>
                  <select
                    value={form.topic}
                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                    className="deux-contact-select"
                  >
                    <option value="Pemesanan Menu Harian">🥐 Pemesanan Menu Harian & Stok</option>
                    <option value="Kustom Hampers & Event">🎁 Kustom Paket Hampers & Souvenir</option>
                    <option value="Pesanan Rapat Kantor">🏢 Pesanan Konsumsi Acara / Kantor</option>
                    <option value="Kemitraan & Konsinyasi">🤝 Kemitraan Kafe & Reseller</option>
                    <option value="Kritik & Saran Layanan">💬 Kritik, Saran & Pertanyaan Umum</option>
                  </select>
                </div>

                <div className="form-group-custom">
                  <label>Pesan / Keterangan Kebutuhan *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tuliskan pertanyaan, jumlah box yang dibutuhkan, tanggal acara, atau detail pesanan Anda..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-privacy-note">
                  <ShieldCheck size={16} color="#7C5D44" />
                  <span>
                    Data Anda aman dan hanya digunakan oleh tim Erles Bakery untuk membalas pesan.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="deux-inquiry-submit-btn"
                >
                  {isSubmitting ? (
                    <span>Mengirimkan Pesan...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Kirim Pesan ke Dapur Erles</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: MAP & OPERATIONAL HUB */}
          <div className="deux-location-box reveal-right">
            <div className="location-box-header">
              <span className="deux-retro-sticker">STORE VISIT</span>
              <h2 className="deux-inquiry-title">Dapur & Toko Fisik</h2>
              <p className="deux-inquiry-sub">
                Datang langsung untuk menikmati kehangatan roti dari panggangan pertama pagi hari.
              </p>
            </div>

            {/* EMBED GOOGLE MAPS */}
            <div className="deux-maps-frame">
              <iframe
                title="Peta Lokasi Erles Bakery Malang"
                src="https://maps.google.com/maps?q=-7.9254188,112.6231506&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="maps-bottom-link-row">
                <a
                  href={SITE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="maps-open-ext-link"
                >
                  <MapPin size={13} />
                  <span>Buka di Google Maps Langsung</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* STORE HIGHLIGHT DETAILS */}
            <div className="store-specs-list">
              <div className="spec-item">
                <Clock size={20} className="spec-icon" />
                <div>
                  <strong>Jam Operasional Toko</strong>
                  <p>Senin – Minggu: 07.00 – 21.00 WIB (Setiap Hari Buka)</p>
                  <small>*Panggangan sourdough & donat pertama keluar oven jam 06.30 WIB</small>
                </div>
              </div>

              <div className="spec-item">
                <Store size={20} className="spec-icon" />
                <div>
                  <strong>Fasilitas Pengunjung</strong>
                  <p>Area Parkir Motor & Mobil • Ruang Seating Santai • Pembayaran QRIS / Tunai</p>
                </div>
              </div>

              <div className="spec-item">
                <Sparkles size={20} className="spec-icon" />
                <div>
                  <strong>Pemesanan Pengiriman Cepat</strong>
                  <p>Mendukung pengantaran instan kurir lokal se-Kota Malang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION FOR CONTACT */}
      <section className="deux-container deux-contact-faq-section">
        <div className="deux-exact-header center reveal-up">
          <span className="deux-scallop-tag">QUESTIONS & ASSISTANCE</span>
          <h2 className="deux-display-title">PERTANYAAN SEPUTAR LAYANAN</h2>
          <p className="deux-team-subtitle">
            Informasi penting terkait jam pemesanan, pengiriman instan, dan reservasi hampers.
          </p>
        </div>

        <div className="deux-contact-faq-stack reveal-up stagger-1">
          {contactFaq.map((item, idx) => (
            <div
              key={idx}
              className={`deux-contact-faq-item ${openFaq === idx ? 'open' : ''}`}
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
            >
              <div className="faq-question-bar">
                <div className="faq-q-left">
                  <HelpCircle size={18} className="faq-icon-accent" />
                  <span>{item.q}</span>
                </div>
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
      </section>

      {/* 5. PRE-FOOTER BANNER CTA (DEUX BAKERY SIGNATURE CAPSULE) */}
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
                  <MessageCircle size={16} />
                  <span>Chat WhatsApp ({SITE_CONFIG.phone})</span>
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

