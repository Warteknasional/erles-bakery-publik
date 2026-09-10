import { ArrowRight, Star, Cake, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: Cake, title: 'Roti & Kue Segar', desc: 'Dipanggang setiap hari dengan bahan-bahan berkualitas tinggi' },
  { icon: Gift, title: 'Hampers Eksklusif', desc: 'Paket hadiah sempurna untuk momen spesial Anda' },
  { icon: Star, title: 'Rasa Premium', desc: 'Resep turun-temurun dengan sentuhan modern' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 50%, #FBBF24 100%)',
        padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px',
          background: 'rgba(255,255,255,0.2)', borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute', bottom: '-30px', left: '-30px', width: '150px', height: '150px',
          background: 'rgba(255,255,255,0.15)', borderRadius: '50%',
        }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block', background: 'rgba(146,64,14,0.1)', color: '#92400E',
            padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', marginBottom: '16px',
          }}>
            ✨ Roti & Kue Artisan
          </span>
          <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#78350F', lineHeight: '1.2', marginBottom: '16px' }}>
            Selamat Datang di<br />Erles Bakery
          </h1>
          <p style={{ fontSize: '18px', color: '#92400E', marginBottom: '32px', lineHeight: '1.6' }}>
            Nikmati kelezatan roti, kue, dan hampers eksklusif kami yang dibuat dengan penuh cinta dan bahan-bahan premium.
          </p>
          <Link
            to="/pesanan"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px',
              background: '#92400E', color: 'white', borderRadius: '12px', textDecoration: 'none',
              fontWeight: '600', fontSize: '16px', transition: 'transform 0.15s',
              boxShadow: '0 4px 14px rgba(146,64,14,0.3)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Pesan Sekarang <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '64px 24px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', fontWeight: '700', color: '#1E293B', marginBottom: '40px' }}>
          Kenapa Memilih Erles Bakery?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: '16px', padding: '32px', textAlign: 'center',
              border: '1px solid #F1F5F9', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; }}
            >
              <div style={{
                display: 'inline-flex', background: '#FEF3C7', borderRadius: '12px', padding: '12px', marginBottom: '16px',
              }}>
                <f.icon size={28} color="#92400E" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1E293B', marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
