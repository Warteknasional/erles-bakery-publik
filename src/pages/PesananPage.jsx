import { useState } from 'react';
import { ShoppingBag, X, Filter, Search, Plus, Minus, ShoppingCart } from 'lucide-react';

const dummyProducts = [
  { id: 1, nama: 'Roti Tawar Premium', harga: 25000, kategori: 'Roti', stok: 50, deskripsi: 'Roti tawar lembut dengan bahan premium' },
  { id: 2, nama: 'Croissant Butter', harga: 18000, kategori: 'Roti', stok: 30, deskripsi: 'Croissant renyah dengan butter asli' },
  { id: 3, nama: 'Brownies Coklat', harga: 35000, kategori: 'Kue', stok: 20, deskripsi: 'Brownies coklat fudgy premium' },
  { id: 4, nama: 'Red Velvet Cake', harga: 150000, kategori: 'Kue', stok: 10, deskripsi: 'Kue red velvet dengan cream cheese frosting' },
  { id: 5, nama: 'Hampers Lebaran Deluxe', harga: 350000, kategori: 'Hampers', stok: 15, deskripsi: 'Paket hampers lengkap berisi aneka kue kering premium' },
  { id: 6, nama: 'Hampers Wedding Classic', harga: 275000, kategori: 'Hampers', stok: 25, deskripsi: 'Hampers pernikahan elegan dengan pilihan kue favorit' },
  { id: 7, nama: 'Hampers Birthday Joy', harga: 200000, kategori: 'Hampers', stok: 20, deskripsi: 'Paket ulang tahun berisi kue dan cookies pilihan' },
  { id: 8, nama: 'Donat Gula', harga: 8000, kategori: 'Roti', stok: 40, deskripsi: 'Donat empuk dengan taburan gula halus' },
  { id: 9, nama: 'Kue Lapis Legit', harga: 180000, kategori: 'Kue', stok: 8, deskripsi: 'Lapis legit tradisional dengan rempah pilihan' },
];

const categories = ['Semua', 'Roti', 'Kue', 'Hampers'];

export default function PesananPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', catatan: '' });

  const filteredProducts = dummyProducts.filter(p => {
    const matchCat = selectedCategory === 'Semua' || p.kategori === selectedCategory;
    const matchSearch = p.nama.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  const formatRupiah = (num) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(num);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.map(i => i.id === productId ? { ...i, qty: i.qty - 1 } : i).filter(i => i.qty > 0));
  };

  const totalCart = cart.reduce((sum, item) => sum + item.harga * item.qty, 0);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    alert(`Pesanan berhasil dibuat!\n\nNama: ${form.name}\nTelepon: ${form.phone}\nTotal: ${formatRupiah(totalCart)}\n\n(Demo: belum terhubung ke backend)`);
    setShowModal(false);
    setCart([]);
    setForm({ name: '', phone: '', catatan: '' });
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <ShoppingBag size={28} color="#92400E" />
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1E293B', margin: 0 }}>Katalog Produk</h1>
      </div>
      <p style={{ color: '#64748B', marginBottom: '24px', fontSize: '14px' }}>Pilih produk favorit Anda dan buat pesanan</p>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
          <input type="text" placeholder="Cari produk..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '10px 12px 10px 40px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px', borderRadius: '20px', border: 'none', fontSize: '13px', fontWeight: '500',
                cursor: 'pointer', transition: 'all 0.15s',
                background: selectedCategory === cat ? '#92400E' : '#F1F5F9',
                color: selectedCategory === cat ? 'white' : '#64748B',
              }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {filteredProducts.map(product => {
          const inCart = cart.find(i => i.id === product.id);
          return (
            <div key={product.id} style={{
              background: 'white', borderRadius: '16px', overflow: 'hidden',
              border: '1px solid #F1F5F9', boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)'; }}
            >
              <div style={{ height: '140px', background: 'linear-gradient(135deg, #FEF3C7, #FDE68A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '48px' }}>{product.kategori === 'Hampers' ? '🎁' : product.kategori === 'Kue' ? '🎂' : '🍞'}</span>
              </div>
              <div style={{ padding: '16px' }}>
                <span style={{
                  display: 'inline-block', padding: '2px 10px', borderRadius: '12px', fontSize: '11px',
                  fontWeight: '600', marginBottom: '8px',
                  background: product.kategori === 'Hampers' ? '#FEE2E2' : product.kategori === 'Kue' ? '#E0E7FF' : '#D1FAE5',
                  color: product.kategori === 'Hampers' ? '#991B1B' : product.kategori === 'Kue' ? '#3730A3' : '#065F46',
                }}>{product.kategori}</span>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#1E293B', marginBottom: '4px' }}>{product.nama}</h3>
                <p style={{ fontSize: '12px', color: '#94A3B8', marginBottom: '12px', lineHeight: '1.4' }}>{product.deskripsi}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '18px', fontWeight: '700', color: '#92400E' }}>{formatRupiah(product.harga)}</span>
                  {inCart ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button onClick={() => removeFromCart(product.id)}
                        style={{ width: '28px', height: '28px', borderRadius: '6px', border: '1px solid #E2E8F0', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Minus size={14} />
                      </button>
                      <span style={{ fontWeight: '600', fontSize: '14px', minWidth: '20px', textAlign: 'center' }}>{inCart.qty}</span>
                      <button onClick={() => addToCart(product)}
                        style={{ width: '28px', height: '28px', borderRadius: '6px', border: 'none', background: '#92400E', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Plus size={14} />
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => addToCart(product)}
                      style={{ padding: '6px 14px', borderRadius: '8px', border: 'none', background: '#FEF3C7', color: '#92400E', fontWeight: '600', fontSize: '12px', cursor: 'pointer', transition: 'background 0.15s' }}>
                      + Tambah
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Cart Button */}
      {cart.length > 0 && (
        <button onClick={() => setShowModal(true)} style={{
          position: 'fixed', bottom: '24px', right: '24px', display: 'flex', alignItems: 'center', gap: '10px',
          padding: '14px 24px', background: '#92400E', color: 'white', border: 'none', borderRadius: '16px',
          fontWeight: '600', fontSize: '15px', cursor: 'pointer', zIndex: 50,
          boxShadow: '0 8px 24px rgba(146,64,14,0.4)', transition: 'transform 0.15s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          <ShoppingCart size={20} />
          {cart.reduce((s, i) => s + i.qty, 0)} item — {formatRupiah(totalCart)}
        </button>
      )}

      {/* Order Modal */}
      {showModal && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex',
          alignItems: 'center', justifyContent: 'center', zIndex: 200, padding: '24px',
        }} onClick={() => setShowModal(false)}>
          <div style={{
            background: 'white', borderRadius: '16px', maxWidth: '500px', width: '100%',
            maxHeight: '80vh', overflow: 'auto', padding: '24px',
          }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#1E293B', margin: 0 }}>Form Pemesanan</h2>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}><X size={20} color="#94A3B8" /></button>
            </div>
            {/* Cart summary */}
            <div style={{ background: '#F8FAFC', borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
              {cart.map(item => (
                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
                  <span style={{ color: '#1E293B' }}>{item.nama} x{item.qty}</span>
                  <span style={{ fontWeight: '600', color: '#64748B' }}>{formatRupiah(item.harga * item.qty)}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '8px', marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: '700', color: '#1E293B' }}>Total</span>
                <span style={{ fontWeight: '700', color: '#92400E', fontSize: '16px' }}>{formatRupiah(totalCart)}</span>
              </div>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmitOrder}>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#64748B', marginBottom: '6px' }}>Nama Lengkap</label>
                <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  style={{ width: '100%', padding: '10px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '14px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#64748B', marginBottom: '6px' }}>No. Telepon</label>
                <input type="tel" required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  style={{ width: '100%', padding: '10px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#64748B', marginBottom: '6px' }}>Catatan (Opsional)</label>
                <textarea value={form.catatan} onChange={e => setForm({ ...form, catatan: e.target.value })} rows="3"
                  style={{ width: '100%', padding: '10px', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '14px', resize: 'vertical', boxSizing: 'border-box' }} />
              </div>
              <button type="submit" style={{
                width: '100%', padding: '12px', background: '#92400E', color: 'white', border: 'none',
                borderRadius: '10px', fontWeight: '600', fontSize: '15px', cursor: 'pointer',
              }}>
                Buat Pesanan
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
