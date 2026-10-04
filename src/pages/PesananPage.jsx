import { useState, useEffect } from 'react';
import {
  ShoppingBag,
  X,
  Search,
  Plus,
  Minus,
  MessageCircle,
  Gift,
  CheckCircle,
  Clock,
  Trash2,
} from 'lucide-react';

const products = [
  {
    id: 1,
    nama: 'Donat Topping Almond Panggang',
    harga: 9000,
    kategori: 'Donat',
    deskripsi: 'Donat kentang empuk berlapis glaze vanila manis lembut dengan taburan kacang almond panggang renyah melimpah.',
    image: 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=700&q=80',
    isFavorit: true,
  },
  {
    id: 2,
    nama: 'Donat Cokelat Glaze Spesial',
    harga: 8500,
    kategori: 'Donat',
    deskripsi: 'Donat lembut bertabur lelehan cokelat glaze pekat dengan rasa manis yang seimbang dan tidak bikin enek.',
    image: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=700&q=80',
    isFavorit: true,
  },
  {
    id: 3,
    nama: 'Donat Keju Cheddar Melimpah',
    harga: 8500,
    kategori: 'Donat',
    deskripsi: 'Olesan krim mentega lembut dengan parutan keju cheddar melimpah yang gurih manis.',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 4,
    nama: 'Donat Gula Halus Tradisional',
    harga: 6000,
    kategori: 'Donat',
    deskripsi: 'Donat kentang rumahan bertekstur empuk nostalgia dengan baluran gula halus lembut.',
    image: 'https://images.unsplash.com/photo-1579888944880-d98341245702?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 5,
    nama: 'Roti Manis Cokelat Rumahan',
    harga: 7000,
    kategori: 'Roti Manis',
    deskripsi: 'Roti manis berserat halus dengan isian cokelat lumer khas buatan dapur rumah yang padat dan wangi.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
    isFavorit: true,
  },
  {
    id: 6,
    nama: 'Roti Sisir Mentega Gula',
    harga: 12000,
    kategori: 'Roti Manis',
    deskripsi: 'Roti sisir mentega empuk yang lembut dikoyak, dioles mentega wangi dan taburan butiran gula pasir.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 7,
    nama: 'Roti Sobek Cokelat Keju',
    harga: 18000,
    kategori: 'Roti Manis',
    deskripsi: 'Satu loyang roti sobek dengan kombinasi separuh isi cokelat pekat dan separuh isi keju gurih.',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 8,
    nama: 'Hampers Parsel Manis Spesial',
    harga: 95000,
    kategori: 'Hampers',
    deskripsi: 'Box hampers eksklusif berisi 6 donat premium (almond & cokelat) dan 2 roti manis pilihan, diikat pita satin emas lengkap dengan kartu ucapan kustom.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=80',
    isHampers: true,
  },
  {
    id: 9,
    nama: 'Hampers Perayaan Deluxe Box',
    harga: 175000,
    kategori: 'Hampers',
    deskripsi: 'Kotak bingkisan kaku mewah berisi 12 donat aneka topping lengkap dan 4 roti manis spesial, cocok untuk hantaran kerabat, syukuran, atau hari raya.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=700&q=80',
    isHampers: true,
  },
];

const categories = ['Semua', 'Donat', 'Roti Manis', 'Hampers'];

export default function PesananPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [deliveryMethod, setDeliveryMethod] = useState('ambil');
  const [orderSent, setOrderSent] = useState(false);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    catatan: '',
  });

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === 'Semua' || product.kategori === selectedCategory;
    const matchSearch = product.nama
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  const formatRupiah = (value) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalCart = cart.reduce((sum, item) => sum + item.harga * item.qty, 0);

  const handleOpenCheckout = () => {
    if (cart.length === 0) return;
    setOrderSent(false);
    setIsModalOpen(true);
  };

  const handleSendWhatsAppOrder = (e) => {
    e.preventDefault();

    let orderListText = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.nama} (${item.qty}x) = ${formatRupiah(
            item.harga * item.qty
          )}`
      )
      .join('\n');

    const methodText =
      deliveryMethod === 'ambil'
        ? 'Ambil Sendiri di Toko (Jl. Ikan Gurami No. 7 Malang)'
        : `Kirim ke Alamat:\n${form.address}`;

    const message =
      `Halo Erles Bakery, saya ingin melakukan pemesanan:\n\n` +
      `*DATA PEMESAN:*\n` +
      `• Nama: ${form.name}\n` +
      `• No. WhatsApp: ${form.phone}\n` +
      `• Metode: ${methodText}\n\n` +
      `*DAFTAR PESANAN:*\n` +
      `${orderListText}\n\n` +
      `*TOTAL:* ${formatRupiah(totalCart)}\n\n` +
      (form.catatan ? `*Catatan Khusus:* ${form.catatan}\n\n` : '') +
      `Mohon info ketersediaan dan perkiraan waktu siap. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6282145345270?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
    setOrderSent(true);
  };

  return (
    <div className="order-page">
      {/* HEADER SECTION */}
      <section className="order-page-header">
        <div className="order-container">
          <div className="order-header-content">
            <span className="order-eyebrow">Katalog &amp; Pemesanan</span>
            <h1 className="order-title">Pilih Donat, Roti Manis &amp; Hampers</h1>
            <p className="order-subtitle">
              Pilih menu yang Anda sukai, tambahkan ke keranjang, dan kirimkan pesanan Anda langsung ke WhatsApp dapur Erles Bakery.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER & PENCARIAN */}
      <section className="order-controls-section">
        <div className="order-container">
          <div className="order-controls-bar">
            <div className="order-category-tabs" role="tablist" aria-label="Kategori Produk">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat}
                  className={`category-tab-btn ${
                    selectedCategory === cat ? 'active' : ''
                  } ${cat === 'Hampers' ? 'tab-hampers' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === 'Hampers' && <Gift size={15} className="tab-icon" />}
                  {cat}
                </button>
              ))}
            </div>

            <div className="order-search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Cari donat atau roti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                aria-label="Cari produk"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="search-clear-btn"
                  aria-label="Bersihkan pencarian"
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* DAFTAR PRODUK & KERANJANG FLOATING/STICKY */}
      <main className="order-catalog-main">
        <div className="order-container">
          <div className="order-main-layout">
            {/* GRID PRODUK */}
            <div className="products-grid-column">
              {filteredProducts.length === 0 ? (
                <div className="empty-catalog-state">
                  <p className="empty-state-title">Produk tidak ditemukan</p>
                  <p className="empty-state-desc">
                    Tidak ada menu yang sesuai dengan kata kunci &ldquo;{searchTerm}&rdquo;. Coba cari varian lain atau ganti kategori.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory('Semua');
                      setSearchTerm('');
                    }}
                    className="btn-reset-filter"
                  >
                    Tampilkan Semua Menu
                  </button>
                </div>
              ) : (
                <div className="catalog-grid">
                  {filteredProducts.map((product) => {
                    const isHampers = product.kategori === 'Hampers';
                    const inCartItem = cart.find((item) => item.id === product.id);

                    return (
                      <article
                        key={product.id}
                        className={`catalog-card ${isHampers ? 'card-hampers' : ''}`}
                      >
                        <div className="catalog-card-image-box">
                          <img
                            src={product.image}
                            alt={product.nama}
                            className="catalog-card-img"
                            loading="lazy"
                          />
                          <span
                            className={`catalog-card-tag ${
                              isHampers ? 'tag-hampers-gold' : 'tag-regular'
                            }`}
                          >
                            {isHampers ? 'Koleksi Hampers' : product.kategori}
                          </span>
                        </div>

                        <div className="catalog-card-body">
                          <h3 className="catalog-card-title">{product.nama}</h3>
                          <p className="catalog-card-desc">{product.deskripsi}</p>

                          <div className="catalog-card-footer">
                            <div className="catalog-price-area">
                              <span className="price-label">Harga</span>
                              <strong
                                className={`price-amount ${
                                  isHampers ? 'hampers-price' : ''
                                }`}
                              >
                                {formatRupiah(product.harga)}
                              </strong>
                            </div>

                            <div className="catalog-card-cta">
                              {inCartItem ? (
                                <div className="cart-qty-pill">
                                  <button
                                    type="button"
                                    onClick={() => updateQty(product.id, -1)}
                                    className="qty-btn"
                                    aria-label={`Kurangi ${product.nama}`}
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="qty-number">
                                    {inCartItem.qty}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => updateQty(product.id, 1)}
                                    className="qty-btn"
                                    aria-label={`Tambah ${product.nama}`}
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => addToCart(product)}
                                  className={`btn-add-cart ${
                                    isHampers ? 'btn-add-hampers' : ''
                                  }`}
                                  aria-label={`Tambah ${product.nama} ke keranjang`}
                                >
                                  <Plus size={16} />
                                  <span>Pilih</span>
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>

            {/* RINGKASAN KERANJANG SAMPING (DESKTOP) */}
            <aside className="order-sidebar-cart" aria-label="Keranjang Belanja">
              <div className="cart-card-sticky">
                <div className="cart-header">
                  <div className="cart-header-title">
                    <ShoppingBag size={20} className="cart-icon" />
                    <h2>Pesanan Anda</h2>
                  </div>
                  {cartCount > 0 && (
                    <span className="cart-badge">{cartCount} butir</span>
                  )}
                </div>

                {cart.length === 0 ? (
                  <div className="cart-empty-box">
                    <p className="cart-empty-text">Keranjang masih kosong.</p>
                    <p className="cart-empty-hint">
                      Silakan pilih donat, roti, atau paket hampers di sebelah kiri.
                    </p>
                  </div>
                ) : (
                  <div className="cart-filled-area">
                    <ul className="cart-item-list">
                      {cart.map((item) => (
                        <li key={item.id} className="cart-item-row">
                          <div className="cart-item-info">
                            <strong className="cart-item-name">{item.nama}</strong>
                            <span className="cart-item-sub">
                              {item.qty} x {formatRupiah(item.harga)}
                            </span>
                          </div>
                          <div className="cart-item-ctrl">
                            <span className="cart-item-subtotal">
                              {formatRupiah(item.harga * item.qty)}
                            </span>
                            <div className="cart-row-buttons">
                              <button
                                type="button"
                                onClick={() => updateQty(item.id, -1)}
                                className="cart-row-btn"
                                aria-label="Kurangi"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="cart-row-qty">{item.qty}</span>
                              <button
                                type="button"
                                onClick={() => updateQty(item.id, 1)}
                                className="cart-row-btn"
                                aria-label="Tambah"
                              >
                                <Plus size={12} />
                              </button>
                              <button
                                type="button"
                                onClick={() => removeItem(item.id)}
                                className="cart-row-btn-delete"
                                aria-label="Hapus"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="cart-total-section">
                      <div className="cart-subtotal-row">
                        <span>Total Rincian</span>
                        <strong className="cart-grand-total">
                          {formatRupiah(totalCart)}
                        </strong>
                      </div>
                      <button
                        type="button"
                        onClick={handleOpenCheckout}
                        className="btn-checkout-wa"
                      >
                        <MessageCircle size={18} />
                        <span>Kirim Pesanan ke WhatsApp</span>
                      </button>
                    </div>
                  </div>
                )}

                <div className="cart-note-box">
                  <Clock size={15} />
                  <span>Pesanan disiapkan langsung di dapur rumahan Malang.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* BAR KERANJANG BAWAH UNTUK MOBILE */}
      {cartCount > 0 && (
        <div className="mobile-cart-bar">
          <div className="mobile-cart-bar-content">
            <div className="mobile-cart-left">
              <span className="mobile-cart-qty">{cartCount} Menu</span>
              <strong className="mobile-cart-total">{formatRupiah(totalCart)}</strong>
            </div>
            <button
              type="button"
              onClick={handleOpenCheckout}
              className="btn-mobile-checkout"
            >
              <MessageCircle size={17} />
              <span>Lanjut Pesan</span>
            </button>
          </div>
        </div>
      )}

      {/* MODAL FORM PEMESANAN WHATSAPP */}
      {isModalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 id="modal-title">Konfirmasi &amp; Pengiriman</h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="modal-close-btn"
                aria-label="Tutup formulir"
              >
                <X size={20} />
              </button>
            </div>

            {orderSent ? (
              <div className="modal-success-state">
                <CheckCircle size={44} className="success-icon" />
                <h3>Rincian Pesanan Telah Dibuka di WhatsApp</h3>
                <p>
                  Pesan Anda telah dirangkum dan diteruskan ke nomor <strong>0821-4534-5270</strong>. Silakan tekan tombol kirim di WhatsApp untuk menyelesaikan pesanan Anda.
                </p>
                <div className="success-actions">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setCart([]);
                    }}
                    className="btn-primary-terracotta"
                  >
                    Selesai &amp; Kembali ke Menu
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendWhatsAppOrder} className="modal-form">
                <div className="form-summary-pill">
                  <span>Total {cartCount} item:</span>
                  <strong>{formatRupiah(totalCart)}</strong>
                </div>

                <div className="form-field">
                  <label htmlFor="customer-name">Nama Pemesan</label>
                  <input
                    id="customer-name"
                    type="text"
                    required
                    placeholder="Contoh: Ibu Rina"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="customer-phone">Nomor WhatsApp Anda</label>
                  <input
                    id="customer-phone"
                    type="tel"
                    required
                    placeholder="Contoh: 08123456789"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <span className="field-label-text">Cara Pengambilan</span>
                  <div className="delivery-toggle-group">
                    <label
                      className={`delivery-option ${
                        deliveryMethod === 'ambil' ? 'selected' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="delivery"
                        value="ambil"
                        checked={deliveryMethod === 'ambil'}
                        onChange={() => setDeliveryMethod('ambil')}
                      />
                      <span>Ambil Sendiri di Dapur (Jl. Ikan Gurami No. 7)</span>
                    </label>

                    <label
                      className={`delivery-option ${
                        deliveryMethod === 'kirim' ? 'selected' : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name="delivery"
                        value="kirim"
                        checked={deliveryMethod === 'kirim'}
                        onChange={() => setDeliveryMethod('kirim')}
                      />
                      <span>Kirim ke Alamat (Wilayah Malang)</span>
                    </label>
                  </div>
                </div>

                {deliveryMethod === 'kirim' && (
                  <div className="form-field">
                    <label htmlFor="customer-address">Alamat Pengiriman di Malang</label>
                    <textarea
                      id="customer-address"
                      rows={3}
                      required
                      placeholder="Tuliskan alamat lengkap beserta patokan rumah..."
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      className="form-textarea"
                    />
                  </div>
                )}

                <div className="form-field">
                  <label htmlFor="customer-notes">Catatan Khusus (Opsional)</label>
                  <input
                    id="customer-notes"
                    type="text"
                    placeholder="Contoh: Donat jangan terlalu manis, pita hampers warna emas"
                    value={form.catatan}
                    onChange={(e) =>
                      setForm({ ...form, catatan: e.target.value })
                    }
                    className="form-input"
                  />
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="btn-modal-cancel"
                  >
                    Batal
                  </button>
                  <button type="submit" className="btn-modal-submit">
                    <MessageCircle size={18} />
                    <span>Lanjutkan ke WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}