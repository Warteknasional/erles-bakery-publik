import { MapPin, Phone, Clock, Heart } from 'lucide-react';

export default function TentangPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>🍞</span>
        <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#78350F', marginBottom: '12px' }}>Tentang Erles Bakery</h1>
        <p style={{ fontSize: '16px', color: '#92400E', lineHeight: '1.6' }}>
          Menyajikan roti, kue, dan hampers berkualitas sejak 2020
        </p>
      </div>

      {/* Story */}
      <div style={{
        background: 'white', borderRadius: '16px', padding: '32px',
        border: '1px solid #F1F5F9', marginBottom: '32px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
      }}>
        <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1E293B', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Heart size={20} color="#EF4444" /> Cerita Kami
        </h2>
        <p style={{ color: '#64748B', lineHeight: '1.8', fontSize: '15px', marginBottom: '12px' }}>
          Erles Bakery didirikan dengan semangat untuk menghadirkan roti dan kue berkualitas tinggi dengan harga terjangkau.
          Kami percaya bahwa setiap gigitan harus menjadi pengalaman yang menyenangkan.
        </p>
        <p style={{ color: '#64748B', lineHeight: '1.8', fontSize: '15px' }}>
          Dengan menggunakan bahan-bahan pilihan dan resep yang telah disempurnakan, kami berkomitmen untuk selalu
          memberikan produk terbaik bagi pelanggan kami. Dari roti harian hingga hampers eksklusif untuk momen spesial.
        </p>
      </div>

      {/* Contact Info */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {[
          { icon: MapPin, label: 'Alamat', value: 'Jl. Roti Sejahtera No. 123\nKota, Indonesia', color: '#6366F1', bg: '#E0E7FF' },
          { icon: Phone, label: 'Telepon', value: '0812-3456-7890\nWhatsApp tersedia', color: '#10B981', bg: '#D1FAE5' },
          { icon: Clock, label: 'Jam Buka', value: 'Senin - Sabtu\n07:00 - 21:00 WIB', color: '#F59E0B', bg: '#FEF3C7' },
        ].map((info, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center',
            border: '1px solid #F1F5F9', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              display: 'inline-flex', background: info.bg, borderRadius: '12px', padding: '12px', marginBottom: '12px',
            }}>
              <info.icon size={24} color={info.color} />
            </div>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#1E293B', marginBottom: '6px' }}>{info.label}</h3>
            <p style={{ fontSize: '13px', color: '#64748B', whiteSpace: 'pre-line', lineHeight: '1.5' }}>{info.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
