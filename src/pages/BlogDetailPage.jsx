import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, ArrowRight, Sparkles } from 'lucide-react';

const BLOG_ARTICLES = {
  'panggangan-musim-ini-dapur-malang': {
    title: 'Apa yang Sedang Kami Panggang Musim Ini di Dapur Malang',
    category: 'SEASONAL',
    date: '15 April 2026',
    author: 'Bu Erni Lestari',
    role: 'Founder & Head Baker',
    readTime: '4 menit baca',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'Kisah pemilihan varietas gandum utuh, fermentasi sourdough 24 jam, dan racikan donat kentang lokal segar langsung dari dapur Tunjungsekar, Lowokwaru.',
    content: [
      {
        type: 'paragraph',
        text: 'Pagi di Lowokwaru selalu dimulai lebih awal bagi kami. Tepat pukul 04.00 subuh, saat udara Kota Malang masih diselimuti hawa dingin yang menusuk tulang, oven gas dan loyang batu di dapur Erles Bakery sudah mulai memancarkan kehangatan pertama. Bagi saya, memanggang bukan sekadar memproses tepung dan air menjadi makanan pokok, melainkan sebuah percakapan intim antara waktu, suhu ruang, dan ragi alami yang hidup.',
      },
      {
        type: 'heading',
        text: 'Memilih Kentang Segar Lokal Malang untuk Tekstur Donat Legendaris',
      },
      {
        type: 'paragraph',
        text: 'Musim ini, salah satu fokus utama kami adalah menjaga konsistensi tekstur donat kentang. Banyak orang bertanya mengapa donat kentang Erles Bakery memiliki kelembutan yang bertahan hingga malam hari tanpa terasa berminyak. Kuncinya terletak pada pemilihan varietas kentang lokal dataran tinggi Malang yang memiliki kadar pati seimbang dan kelembapan alami yang pas.',
      },
      {
        type: 'paragraph',
        text: 'Kami mengukus kentang di hari yang sama dengan jadwal adonan, melumatkannya selagi hangat, lalu mencampurkannya ke adonan tepung berprotein tinggi bersama mentega murni. Kami menolak penggunaan pelembut sintetis (bread improver kimiawi) atau perisa kentang instan. Ketika Anda menggigit donat kentang kami, serat lembut kenyal dan aroma wangi mentega yang murni adalah bukti nyata dari kejujuran bahan.',
      },
      {
        type: 'heading',
        text: 'Sourdough Fermentasi 24 Jam: Kesabaran yang Membuahkan Rongga Sempurna',
      },
      {
        type: 'paragraph',
        text: 'Di sudut lain dapur, adonan Sourdough Country Boule sedang melalui tahap akhir fermentasi dingin (cold fermentation) selama 24 jam di lemari pendingin. Proses lambat ini memungkinkan bakteri asam laktat alami memecah gluten dan asam fitat secara alami, menghasilkan roti yang jauh lebih mudah dicerna oleh tubuh serta memiliki indeks glikemik yang lebih ramah.',
      },
      {
        type: 'paragraph',
        text: 'Saat dimasukkan ke dalam oven bersuhu tinggi dengan injeksi uap air panas, adonan tersebut mengembang mekar (*oven spring*) dengan kerak (*crust*) keemasan berpola renyah, sementara bagian dalamnya membentuk sarang lebah (*open crumb*) yang kenyal dan lembap. Inilah karakter roti sejati yang kami banggakan dari dapur artisan kecil di Jawa Timur.',
      },
      {
        type: 'tip',
        title: 'Tips Menikmati dari Dapur Bu Erni:',
        text: 'Potong sourdough setebal 1,5 cm, panggang sebentar di atas wajan anti-lengket dengan sedikit salted butter hingga kecokelatan. Nikmati bersama segelas kopi tubruk atau teh melati hangat khas Malang.',
      },
    ],
    recommendedProducts: [
      { name: 'Sourdough Country Boule', price: 'Rp 45.000', tag: 'Artisan Favorite' },
      { name: 'Donat Kentang Gula Halus', price: 'Rp 8.000', tag: 'Best Seller' },
    ],
  },
  'suhu-mentega-dan-serat-roti': {
    title: 'Mengapa Suhu Mentega Mengubah Seluruh Hasil Panggangan Roti',
    category: 'BAKING CRAFT',
    date: '10 April 2026',
    author: 'Bu Erni Lestari',
    role: 'Founder & Head Baker',
    readTime: '5 menit baca',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'Eksplorasi teknik memasukkan mentega dingin vs mentega cair, titik leleh lemak susu, dan pengaruhnya terhadap jalinan gluten roti artisan.',
    content: [
      {
        type: 'paragraph',
        text: 'Dalam dunia tata boga dan baking artisan, mentega (*butter*) sering kali diperlakukan sebagai bahan pelengkap semata. Namun di dapur Erles Bakery, mentega adalah pemeran utama yang menentukan apakah sepotong roti akan terasa kering dan rapuh, ataukah empuk dengan serat halus yang membelai lidah saat disobek.',
      },
      {
        type: 'heading',
        text: 'Titik Kritis Emulsi Lemak dan Jalinan Gluten',
      },
      {
        type: 'paragraph',
        text: 'Tepung terigu membutuhkan air untuk membentuk jaringan gluten yang kuat dan elastis. Jika Anda memasukkan mentega dalam kondisi cair atau terlalu awal bersama tepung dan air, molekul lemak akan membungkus butiran protein gandum sebelum sempat mengikat air. Akibatnya, gluten gagal berkembang optimal dan roti akan terasa bantat serta mudah remuk.',
      },
      {
        type: 'paragraph',
        text: 'Di Erles Bakery, kami selalu menerapkan teknik *delayed butter addition*. Kami menguleni adonan dasar hingga mencapai tahap setengah kalis (*medium gluten development*), barulah mentega bersuhu 16°C–18°C dimasukkan secara bertahap. Suhu ini krusial: tidak terlalu beku sehingga mudah menyatu, namun tidak meleleh sehingga emulsi lemak tetap stabil di antara serat gluten.',
      },
      {
        type: 'heading',
        text: 'Perbedaan Mentega Murni dan Margarin Sintetis',
      },
      {
        type: 'paragraph',
        text: 'Banyak produk toko roti komersial beralih ke margarin atau shortening kelapa sawit terhidrogenasi karena harganya yang murah dan titik lelehnya yang tinggi. Namun lemak nabati sintetis meninggalkan lapisan lilin di langit-langit mulut (*waxy mouthfeel*) dan tidak memiliki aroma karamel susu alami.',
      },
      {
        type: 'paragraph',
        text: 'Kami berkomitmen hanya menggunakan mentega murni berkualitas tinggi (*unsalted butter* dengan kandungan lemak susu minimal 82%). Pada suhu mulut manusia (sekitar 36,5°C), mentega murni langsung meleleh sempurna dan melepaskan aroma gurih manis alami yang bersih tanpa residu berminyak.',
      },
      {
        type: 'tip',
        title: 'Rahasia Baker Rumahan:',
        text: 'Jika Anda memanggang di rumah pada siang hari Kota Malang yang agak terik, dinginkan mangkuk mixer dan simpan mentega di kulkas bawah hingga 15 menit sebelum diaduk agar adonan tidak mengalami overheat.',
      },
    ],
    recommendedProducts: [
      { name: 'Olive & Rosemary Ciabatta', price: 'Rp 32.000', tag: 'High Hydration' },
      { name: 'French Baguette Tradisi', price: 'Rp 28.000', tag: 'Crispy Crust' },
    ],
  },
  'ritual-roti-akhir-pekan-sourdough': {
    title: 'Roti Akhir Pekan: Ritual Panggangan Lambat Penuh Makna',
    category: 'STORIES & RECIPES',
    date: '02 April 2026',
    author: 'Bu Erni Lestari',
    role: 'Founder & Head Baker',
    readTime: '4 menit baca',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=1200&q=85',
    excerpt: 'Bagaimana tradisi menikmati sepotong roti hangat bersama keluarga di akhir pekan mengajarkan kita tentang arti kesabaran dan kebersamaan.',
    content: [
      {
        type: 'paragraph',
        text: 'Akhir pekan di rumah selalu memiliki aroma yang berbeda. Saat hari kerja menuntut ritme serba cepat dan instan, Sabtu dan Minggu pagi adalah ruang hening untuk melambatkan langkah. Di dapur Erles Bakery Malang, pesanan akhir pekan biasanya didominasi oleh keluarga yang ingin menikmati sarapan santai bersama roti panggang segar dan donat kentang hangat.',
      },
      {
        type: 'heading',
        text: 'Ritual Membelah Sourdough yang Masih Hangat',
      },
      {
        type: 'paragraph',
        text: 'Ada bunyi gemerisik khas (*the song of bread*) saat sourdough baru saja keluar dari oven. Kerak luarnya merekah halus saat bersentuhan dengan udara ruang yang lebih sejuk. Membelah roti sourdough artisan tidak boleh terburu-buru; Anda membutuhkan pisau bergerigi tajam (*serrated bread knife*) agar sarang lebah di dalam remahnya tidak kempes tertindih.',
      },
      {
        type: 'paragraph',
        text: 'Saat uap hangat pertama membubung keluar, aroma asam buah yang lembut berpadu dengan karamel gandum langsung memenuhi seisi ruangan. Ini adalah kenikmatan sederhana yang tidak bisa dibeli dari roti produksi pabrik massal yang dipenuhi pengawet berhari-hari di rak supermarket.',
      },
      {
        type: 'heading',
        text: 'Hampers dan Donat: Membawa Kehangatan ke Rumah Kerabat',
      },
      {
        type: 'paragraph',
        text: 'Bagi banyak pelanggan setia kami di Malang Raya, kotak hampers dan donat kentang gula halus sering kali dipesan untuk dikirimkan ke rumah orang tua, sahabat, atau rekan kerja. Kami selalu menyertakan kartu ucapan bertuliskan tangan dengan pesan hangat dari pemesan, karena kami percaya sepotong roti bukan sekadar panganan, melainkan wujud perhatian dan kasih sayang yang tulus.',
      },
      {
        type: 'tip',
        title: 'Saran Penyajian Akhir Pekan:',
        text: 'Sediakan semangkuk kecil extra virgin olive oil yang ditaburi sedikit sea salt flakes dan lada hitam tumbuk. Celupkan potongan ciabatta atau sourdough ke dalamnya sebagai pembuka selera santai.',
      },
    ],
    recommendedProducts: [
      { name: 'Donat Coklat Almond Panggang', price: 'Rp 12.000', tag: 'Weekend Treat' },
      { name: 'Hampers Lebaran Deluxe', price: 'Rp 350.000', tag: 'Gift Box' },
    ],
  },
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const article = BLOG_ARTICLES[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      document.title = `${article.title} – Erles Bakery Malang`;
    } else {
      document.title = 'Artikel Tidak Ditemukan – Erles Bakery';
    }
  }, [article, slug]);

  if (!article) {
    return <Navigate to="/" replace />;
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF7F2', color: '#241B14', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Top Header Navigation */}
      <header style={{ padding: '20px 24px', borderBottom: '1px solid #EAE0D5', backgroundColor: '#FFFFFF', position: 'sticky', top: 0, zIndex: 30 }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#2D2017',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '700',
              padding: '8px 14px',
              borderRadius: '8px',
              backgroundColor: '#F5EFEB',
              transition: 'background 0.2s',
            }}
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Beranda</span>
          </Link>

          <Link to="/" style={{ textDecoration: 'none', color: '#C25E34', fontWeight: '800', fontSize: '18px', letterSpacing: '-0.02em' }}>
            Erles Bakery
          </Link>

          <Link
            to="/pesanan"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#FFFFFF',
              backgroundColor: '#C25E34',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '700',
              padding: '8px 16px',
              borderRadius: '8px',
            }}
          >
            <span>Pesan Roti</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </header>

      {/* Main Article Container */}
      <main style={{ maxWidth: '780px', margin: '0 auto', padding: '40px 20px 80px 20px' }}>
        {/* Meta Header */}
        <div style={{ marginBottom: '24px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '4px 12px',
              borderRadius: '20px',
              backgroundColor: '#F3E8DF',
              color: '#C25E34',
              fontSize: '11.5px',
              fontWeight: '800',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '14px',
            }}
          >
            {article.category}
          </span>
          <h1
            style={{
              fontSize: '32px',
              fontWeight: '800',
              lineHeight: '1.25',
              color: '#241B14',
              margin: '0 0 16px 0',
              letterSpacing: '-0.02em',
            }}
          >
            {article.title}
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
              flexWrap: 'wrap',
              fontSize: '13px',
              color: '#7A6658',
              borderBottom: '1px solid #EAE0D5',
              paddingBottom: '20px',
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: '600' }}>
              <User size={15} color="#C25E34" />
              {article.author} ({article.role})
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={15} />
              {article.date}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={15} />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Featured Image */}
        <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '36px', boxShadow: '0 12px 30px rgba(45, 32, 23, 0.08)' }}>
          <img
            src={article.image}
            alt={article.title}
            style={{ width: '100%', height: 'auto', maxHeight: '440px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Article Excerpt */}
        <p
          style={{
            fontSize: '17.5px',
            lineHeight: '1.65',
            color: '#4A3B30',
            fontWeight: '500',
            fontStyle: 'italic',
            borderLeft: '4px solid #C25E34',
            paddingLeft: '18px',
            margin: '0 0 32px 0',
          }}
        >
          {article.excerpt}
        </p>

        {/* Body Content */}
        <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#33271F' }}>
          {article.content.map((block, idx) => {
            if (block.type === 'heading') {
              return (
                <h2
                  key={idx}
                  style={{
                    fontSize: '22px',
                    fontWeight: '800',
                    color: '#241B14',
                    margin: '36px 0 16px 0',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === 'tip') {
              return (
                <div
                  key={idx}
                  style={{
                    margin: '32px 0',
                    padding: '20px 22px',
                    borderRadius: '12px',
                    backgroundColor: '#FFF9F3',
                    border: '1px solid #F3E0CF',
                    color: '#60412B',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '14.5px', marginBottom: '6px', color: '#C25E34' }}>
                    <Sparkles size={16} />
                    <span>{block.title}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.6' }}>{block.text}</p>
                </div>
              );
            }

            return (
              <p key={idx} style={{ margin: '0 0 20px 0' }}>
                {block.text}
              </p>
            );
          })}
        </div>

        {/* Author Bio Box */}
        <div
          style={{
            marginTop: '48px',
            padding: '24px',
            borderRadius: '14px',
            backgroundColor: '#FFFFFF',
            border: '1px solid #EAE0D5',
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
          }}
        >
          <img
            src="/logo.jpg"
            alt="Bu Erni Lestari Erles Bakery"
            style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: '2px solid #C25E34' }}
          />
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '800', color: '#241B14' }}>
              Bu Erni Lestari
            </h3>
            <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#8C7A6B' }}>
              Pendiri & Head Baker Erles Bakery • Lowokwaru, Kota Malang
            </p>
            <p style={{ margin: 0, fontSize: '13.5px', color: '#5C4B3E', lineHeight: '1.5' }}>
              Memulai panggangan rumahan dari Jl. Ikan Gurami No. 7e, mendedikasikan waktu setiap subuh pukul 04.00 WIB untuk menghidangkan donat kentang lembut dan sourdough alami bagi warga Malang Raya.
            </p>
          </div>
        </div>

        {/* Recommended Menu Cards */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #EAE0D5' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#241B14', marginBottom: '16px' }}>
            Menu Terkait yang Dipanggang Segar Hari Ini:
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {article.recommendedProducts.map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '16px 18px',
                  border: '1px solid #EAE0D5',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#C25E34', textTransform: 'uppercase' }}>
                    {p.tag}
                  </span>
                  <div style={{ fontWeight: '700', fontSize: '15px', color: '#241B14', marginTop: '2px' }}>
                    {p.name}
                  </div>
                  <div style={{ fontWeight: '600', fontSize: '13.5px', color: '#8C7A6B' }}>{p.price}</div>
                </div>
                <Link
                  to="/pesanan"
                  style={{
                    padding: '8px 14px',
                    borderRadius: '8px',
                    backgroundColor: '#C25E34',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '12.5px',
                    fontWeight: '700',
                  }}
                >
                  Pesan
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Back Button */}
        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '10px',
              backgroundColor: '#2D2017',
              color: '#FFFFFF',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '14px',
            }}
          >
            <ArrowLeft size={16} />
            <span>Kembali ke Beranda Erles Bakery</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#241B14', color: '#EAE0D5', padding: '30px 20px', textAlign: 'center', fontSize: '13px' }}>
        <p style={{ margin: '0 0 6px 0' }}>&copy; 2026 Erles Bakery. Dirintis oleh Bu Erni Lestari di Lowokwaru, Kota Malang.</p>
        <p style={{ margin: 0, color: '#9C8B7E' }}>Panggangan subuh 04.00 WIB • Kentang kukus lokal & mentega murni tanpa pengawet.</p>
      </footer>
    </div>
  );
}
