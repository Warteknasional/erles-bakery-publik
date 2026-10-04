import { Link } from 'react-router-dom';
import {
  Heart,
  MapPin,
  Clock,
  MessageCircle,
  ShoppingBag,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';

const homeBakeImg =
  'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85';
const donutCraftImg =
  'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=900&q=85';

export default function TentangPage() {
  return (
    <div className="about-page">
      {/* HERO TENTANG KAMI */}
      <section className="about-hero-section">
        <div className="about-container">
          <div className="about-hero-content">
            <span className="about-eyebrow">Cerita Dapur Kami</span>
            <h1 className="about-title">Kehangatan Donat &amp; Roti Rumahan Asli Malang</h1>
            <p className="about-lead">
              Bukan pabrik atau waralaba besar, melainkan sebuah dapur rumah tangga di mana setiap adonan diuleni, dibentuk, dan dipanggang dengan perhatian penuh satu per satu.
            </p>
          </div>
        </div>
      </section>

      {/* CERITA & FILOSOFI DAPUR */}
      <section className="about-story-section reveal-on-scroll">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="about-story-text">
              <div className="story-badge">
                <Heart size={16} className="badge-heart-icon" />
                <span>Dari Dapur ke Meja Keluarga</span>
              </div>
              <h2 className="story-heading">Dimulai dari Kecintaan pada Roti yang Jujur</h2>
              <p>
                Erles Bakery tumbuh dari dapur rumah di Malang dengan sebuah tujuan sederhana: menyajikan donat empuk dan roti manis yang rasanya selalu menenangkan, seperti sajian buatan ibu di rumah.
              </p>
              <p>
                Kami tidak memakai pengawet sintesis atau pelembut instan berlebih. Rahasia kelembutan donat dan roti kami ada pada kesabaran proses fermentasi, kebersihan pengolahan, dan pemilihan bahan baku yang segar.
              </p>
              <p>
                Setiap donat topping almond kami taburi kacang yang baru dipanggang agar tetap renyah saat digigit. Sementara untuk hampers, kami merangkai dan mengikat pitanya sendiri agar bingkisan Anda benar-benar terasa personal bagi penerimanya.
              </p>

              <div className="story-owner-note">
                <p className="owner-quote">
                  &ldquo;Bagi kami, setiap pesanan yang masuk adalah bentuk kepercayaan sebuah keluarga. Karena itu, kami merawat rasanya seperti memasak untuk keluarga kami sendiri.&rdquo;
                </p>
                <span className="owner-signature">Pemilik &amp; Pengelola Erles Bakery</span>
              </div>
            </div>

            <div className="about-story-media">
              <div className="story-image-frame">
                <img
                  src={homeBakeImg}
                  alt="Aktivitas membuat donat dan roti di dapur Erles Bakery"
                  className="story-img"
                  loading="lazy"
                />
                <div className="story-caption-card">
                  <strong>Dibuat dalam Batch Terbatas</strong>
                  <p>Adonan segar setiap hari untuk memastikan cita rasa terbaik.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINSIP DAPUR ERLES BAKERY */}
      <section className="about-values-section reveal-on-scroll">
        <div className="about-container">
          <div className="values-intro">
            <span className="section-eyebrow">Prinsip Kami</span>
            <h2 className="section-heading">Mengapa Tetap Memilih Skala Rumahan?</h2>
          </div>

          <div className="values-cards-row">
            <article className="value-card">
              <div className="value-icon-box terracotta">
                <Heart size={20} />
              </div>
              <h3>Kualitas yang Terjaga</h3>
              <p>
                Karena dikelola mandiri, kontrol mutu dilakukan langsung di setiap loyang yang keluar dari pemanggang. Kami tidak berkompromi dengan rasa.
              </p>
            </article>

            <article className="value-card">
              <div className="value-icon-box gold">
                <Sparkles size={20} />
              </div>
              <h3>Sentuhan Personal</h3>
              <p>
                Anda bisa meminta variasi topping donat kesukaan, pilihan kartu ucapan hampers, hingga waktu pengambilan yang pas dengan jadwal acara Anda.
              </p>
            </article>

            <article className="value-card">
              <div className="value-icon-box pink">
                <Clock size={20} />
              </div>
              <h3>Pemberitahuan Jujur</h3>
              <p>
                Kami menyampaikan ketersediaan stok apa adanya. Jika kapasitas hari itu telah penuh, kami informasikan dengan jujur demi menjaga mutu pesanan.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* LOKASI ASLI & KONTAK */}
      <section className="about-location-section reveal-on-scroll">
        <div className="about-container">
          <div className="location-box-card">
            <div className="location-info-side">
              <span className="section-eyebrow">Dapur Kami</span>
              <h2 className="location-title">Lokasi &amp; Titik Pengambilan</h2>
              <p className="location-desc">
                Dapur kami berlokasi di kawasan permukiman yang tenang di Kota Malang. Anda dipersilakan mengambil langsung pesanan yang telah dikonfirmasi atau meminta pengiriman melalui kurir lokal.
              </p>

              <div className="location-detail-list">
                <div className="location-detail-item">
                  <MapPin size={20} className="detail-icon" />
                  <div>
                    <strong>Alamat Dapur:</strong>
                    <p>Jl. Ikan Gurami No. 7, Malang, Jawa Timur 65142</p>
                    <a
                      href="https://maps.google.com/?q=Jl.+Ikan+Gurami+No.+7,+Malang"
                      target="_blank"
                      rel="noreferrer"
                      className="location-map-link"
                    >
                      <span>Lihat Rute di Google Maps</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="location-detail-item">
                  <Clock size={20} className="detail-icon" />
                  <div>
                    <strong>Waktu Layanan &amp; Pengambilan:</strong>
                    <p>Senin - Sabtu: 07.00 - 17.00 WIB</p>
                    <small className="time-note">
                      *Disarankan konfirmasi melalui WhatsApp sebelum datang untuk memastikan pesanan Anda sudah siap dikemas.
                    </small>
                  </div>
                </div>

                <div className="location-detail-item">
                  <MessageCircle size={20} className="detail-icon" />
                  <div>
                    <strong>Kontak Langsung (WhatsApp):</strong>
                    <p>0821-4534-5270</p>
                    <a
                      href="https://wa.me/6282145345270"
                      target="_blank"
                      rel="noreferrer"
                      className="location-wa-link"
                    >
                      Kirim Pesan WhatsApp Sekarang
                    </a>
                  </div>
                </div>

                <div className="location-detail-item">
                  <InstagramIcon size={20} className="detail-icon" />
                  <div>
                    <strong>Instagram Resmi:</strong>
                    <p>@erles_donut.mlg</p>
                    <a
                      href="https://www.instagram.com/erles_donut.mlg/"
                      target="_blank"
                      rel="noreferrer"
                      className="location-ig-link"
                    >
                      Buka Profil Instagram @erles_donut.mlg
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="location-action-side">
              <div className="action-card-warm">
                <img
                  src={donutCraftImg}
                  alt="Donat istimewa Erles Bakery"
                  className="action-card-img"
                  loading="lazy"
                />
                <div className="action-card-content">
                  <h3>Ingin Mencoba Donat &amp; Roti Kami?</h3>
                  <p>
                    Lihat daftar menu lengkap dan tentukan varian favorit untuk keluarga hari ini.
                  </p>
                  <Link to="/pesanan" className="btn-primary-terracotta btn-full-width">
                    <ShoppingBag size={18} />
                    <span>Lihat Menu &amp; Pesan Sekarang</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}