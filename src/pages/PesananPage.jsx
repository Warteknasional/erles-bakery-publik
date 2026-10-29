import { useState } from 'react';
import {
  ShoppingBag,
  X,
  Search,
  Plus,
  Minus,
  ShoppingCart,
  Gift,
  CheckCircle2,
  Clock,
  MapPin,
  Truck,
  Calendar,
  Store,
  MessageCircle,
  Copy,
  Check,
  RotateCcw,
  FileText,
  Sparkles,
  Info,
} from 'lucide-react';

const dummyProducts = [
  // HAMPERS
  {
    id: 1,
    nama: 'Hampers Lebaran Deluxe',
    harga: 350000,
    kategori: 'Hampers',
    stok: 15,
    isHampers: true,
    hampersBadge: '🎁 Best Seller Gift',
    isiPaket: ['Nastar Wisman 350g', 'Kastengel Keju Edam 350g', 'Putri Salju Mede 350g', 'Box Velvet & Kartu Ucapan'],
    deskripsi:
      'Paket hampers eksklusif dengan kotak premium bernuansa emas, pita satin, dan 3 toples kue kering resep legendaris Erles.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA699ixzAfxDLv2kn9VG6y1inXtUwNodFyNwvoyY7dNs9vkyQ6UHfQdU0m6UxhD-E-AottAqOgCpw1kE20Vp7ti4qaTo2Jz-bRmobWHdcP8JfE6QDKnaUh_YRvY5XpIRcIvIj2tK7r4gxYeBdQEeAnXL9yN664dSlI0q4GrYrpbxoMS7mF6g7vqjd-KLLivygHgboOPIK0VO17q8QySmmy9k0iSjA7ax8DV6nSwQsCq2ob8QnPCgp5hbw',
  },
  {
    id: 2,
    nama: 'Hampers Wedding & Event Classic',
    harga: 275000,
    kategori: 'Hampers',
    stok: 25,
    isHampers: true,
    hampersBadge: '💍 Hadiah Spesial',
    isiPaket: ['4 Roti Artisan Pilihan', 'Mini Lapis Legit', 'Artisan Cookies Box', 'Hangtag & Pita Estetik'],
    deskripsi:
      'Hampers hantaran pernikahan dan bingkisan acara formal dengan paduan roti artisan empuk dan kue lapis legit aroma rempah.',
  },
  {
    id: 3,
    nama: 'Hampers Birthday Sweet Box',
    harga: 200000,
    kategori: 'Hampers',
    stok: 20,
    isHampers: true,
    hampersBadge: '🎂 Sweet Surprise',
    isiPaket: ['6 Donat Artisan Pilihan', 'Fudgy Brownies Slice', 'Lilin Ulang Tahun', 'Custom Greeting Card'],
    deskripsi:
      'Bingkisan manis hari ulang tahun berisi donat topping melimpah, brownies coklat pekat, lengkap dengan kartu ucapan custom.',
  },
  {
    id: 4,
    nama: 'Hampers Mini Souvenir Bag',
    harga: 85000,
    kategori: 'Hampers',
    stok: 35,
    isHampers: true,
    hampersBadge: '✨ Bingkisan Personal',
    isiPaket: ['3 Roti Manis Favorit', 'Selai Buah Homemade', 'Tas Jinjing Goni Estetik'],
    deskripsi:
      'Paket bingkisan ramah kantong berukuran personal dalam balutan tas rami rustic, pas untuk oleh-oleh atau rapat kantor.',
  },

  // ROTI
  {
    id: 5,
    nama: 'Roti Tawar Gandum Susu',
    harga: 25000,
    kategori: 'Roti',
    stok: 50,
    deskripsi:
      'Tekstur sangat lembut dan wangi susu segar dengan serat gandum bergizi, cocok untuk sarapan keluarga setiap hari.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCD_uknovKEHZ9EoHPpe-xkLdcsADeFVDG0knPyxCM1PvQOY8jFARPun8nTd7afhy_H01n0XPOr5EwBK2VmE41YSUJRys-B9NGyVHlK_dM_ZBqnwlgtvVJNIvqrVYEtCneLaIPBiAdj7peXbDxu30svoCxnuQIGrIEWhZ8_QwbfpN_wJl0KdiNaVxqOSgAVEwpxM0_-fwZyXpf3RBjGVl6ZtQnXeRGDbbawSRWcv-VBxHHoaLxqsbpI4g',
  },
  {
    id: 6,
    nama: 'Butter Croissant Prancis',
    harga: 18000,
    kategori: 'Roti',
    stok: 30,
    deskripsi:
      'Flaky, buttery dengan lapisan renyah khas Prancis dan aroma mentega murni dari panggangan pertama pagi hari.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAGsqjIfAEamDCqyscuQDII_wUjawjN597Ybf2qouDd9f9HTmVtBtePAAAylNWKSkz_BKsi5KI6Px7M_CEZLD-v1iXiCkyE40sq9wbkjCZJysyVljop5MtuMr-w-9OcR2OXww3luQYwLdTC3p_Hc8DPuoh6JYdsyN_sPgPMTn9EgXjfCX_d9vE3ovl3V-1QOKugjvUXS3KZrI3CzYQlon2Ot5VG2cs9G7SVjl3Lnlo__Ay30kynNCcLg',
  },
  {
    id: 7,
    nama: 'Roti Sisir Mentega Jadul',
    harga: 15000,
    kategori: 'Roti',
    stok: 40,
    deskripsi:
      'Roti sisir empuk dengan olesan butter cream manis gurih nostalgia khas resep rumahan tempo dulu.',
  },
  {
    id: 8,
    nama: 'Roti Sobek Coklat Keju',
    harga: 28000,
    kategori: 'Roti',
    stok: 25,
    deskripsi:
      'Roti sobek porsi keluarga dengan isian coklat leleh belgian dan potongan keju cheddar gurih di tiap sobekannya.',
  },

  // DONAT (Khas Erles Bakery Malang)
  {
    id: 9,
    nama: 'Donat Gula Halus Klasik',
    harga: 8000,
    kategori: 'Donat',
    stok: 45,
    deskripsi:
      'Donat kentang tradisional super empuk dan kenyal, ditaburi gula halus dingin yang pas manisnya.',
  },
  {
    id: 10,
    nama: 'Donat Coklat Almond Panggang',
    harga: 12000,
    kategori: 'Donat',
    stok: 30,
    deskripsi:
      'Glaze dark chocolate pekat bertabur irisan kacang almond sangrai renyah dan gurih.',
  },
  {
    id: 11,
    nama: 'Donat Bomboloni Nutella',
    harga: 14000,
    kategori: 'Donat',
    stok: 35,
    deskripsi:
      'Donat montok bulat tanpa lubang khas Italia berisi lelehan selai coklat hazelnut Nutella melimpah.',
  },

  // KUE
  {
    id: 12,
    nama: 'Fudgy Brownies Coklat',
    harga: 35000,
    kategori: 'Kue',
    stok: 20,
    deskripsi:
      'Brownies panggang coklat fudgy legit dengan shiny crust renyah di atas dan lumer di dalam mulut.',
  },
  {
    id: 13,
    nama: 'Red Velvet Cake Slice',
    harga: 45000,
    kategori: 'Kue',
    stok: 18,
    deskripsi:
      'Cake lembut warna merah merona dengan olesan cream cheese frosting segar dan taburan remahan red velvet.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcapKvZmb2_DRCqVo4cYbOPMpf4ne9PwvSXN68WwJ-Mlj1XTFh4zt_eGVrqMypyu3j_v0_PbOov5yyi-tRisd2MS09cofgxIsNzFd0bblJeDas-zm9UPXoyT0KrDbD__HMSjJrfLqrSZg6FYvdY5k1Qt35SbHLc7qvjxcCxiglgF731I7nxmPiOO10-toTKIb-W17OQyGARmJteqXwYB0I00MD729CVp2IRTU8rQ-Yqw7HmyqH-3qGDw',
  },
  {
    id: 14,
    nama: 'Kue Lapis Legit Tradisional',
    harga: 180000,
    kategori: 'Kue',
    stok: 8,
    deskripsi:
      'Lapis legit panggang otentik bertabur aroma kapulaga manis dan wisman gurih di setiap helai lapisannya.',
  },
];

const categories = ['Semua', 'Hampers', 'Roti', 'Donat', 'Kue'];

const getProductEmoji = (kategori) => {
  if (kategori === 'Hampers') return '🎁';
  if (kategori === 'Donat') return '🍩';
  if (kategori === 'Kue') return '🎂';
  return '🍞';
};

const getCategoryClass = (kategori) => {
  if (kategori === 'Hampers') return 'hamper';
  if (kategori === 'Donat') return 'donut';
  if (kategori === 'Kue') return 'cake';
  return 'bread';
};

const getDefaultDeliveryDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

export default function PesananPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [cart, setCart] = useState([]);

  // Modal States
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    deliveryMethod: 'pickup', // 'pickup' | 'delivery'
    address: '',
    deliveryDate: getDefaultDeliveryDate(),
    deliveryTime: '10:00',
    paymentMethod: 'bca', // 'bca' | 'qris' | 'cash'
    notes: '',
    // Hampers Specific
    hampersSender: '',
    hampersRecipient: '',
    hampersMessage: '',
  });

  // Submitted Order Details for Receipt
  const [latestOrder, setLatestOrder] = useState(null);
  const [orderHistory, setOrderHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('erles_simulasi_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const hasHampersInCart = cart.some((item) => item.kategori === 'Hampers');

  // Filter & Sort
  const filteredProducts = dummyProducts
    .filter((product) => {
      const matchCategory =
        selectedCategory === 'Semua' || product.kategori === selectedCategory;

      const matchSearch =
        product.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.deskripsi.toLowerCase().includes(searchTerm.toLowerCase());

      return matchCategory && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.harga - b.harga;
      if (sortBy === 'price-high') return b.harga - a.harga;
      return 0;
    });

  const formatRupiah = (value) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const subtotalCart = cart.reduce(
    (total, item) => total + item.harga * item.qty,
    0
  );
  const deliveryFee =
    form.deliveryMethod === 'delivery' && subtotalCart > 0 ? 12000 : 0;
  const totalCart = subtotalCart + deliveryFee;

  const handleSubmitOrder = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay for realistic experience
    setTimeout(() => {
      const orderCode = `ERL-${new Date()
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;

      const newOrder = {
        code: orderCode,
        createdAt: new Date().toLocaleString('id-ID', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }),
        customer: {
          name: form.name,
          phone: form.phone,
          deliveryMethod: form.deliveryMethod,
          address:
            form.deliveryMethod === 'delivery'
              ? form.address
              : 'Ambil di Toko (Jl. Vinolia No. 25B, Lowokwaru, Malang)',
          deliveryDate: form.deliveryDate,
          deliveryTime: form.deliveryTime,
          paymentMethod: form.paymentMethod,
          notes: form.notes,
        },
        hampersCard: hasHampersInCart
          ? {
              sender: form.hampersSender || form.name,
              recipient: form.hampersRecipient || '-',
              message:
                form.hampersMessage ||
                'Selamat menikmati sajian istimewa dari Erles Bakery!',
            }
          : null,
        items: [...cart],
        subtotal: subtotalCart,
        deliveryFee: deliveryFee,
        total: totalCart,
        status: 'Menunggu Konfirmasi (Simulasi)',
      };

      setLatestOrder(newOrder);

      // Save to localStorage
      try {
        const updatedHistory = [newOrder, ...orderHistory].slice(0, 10);
        setOrderHistory(updatedHistory);
        localStorage.setItem(
          'erles_simulasi_orders',
          JSON.stringify(updatedHistory)
        );
      } catch {
        // ignore
      }

      setIsSubmitting(false);
      setShowCheckoutModal(false);
      setShowReceiptModal(true);
      setCart([]);
    }, 600);
  };

  const getWhatsAppMessage = (order) => {
    if (!order) return '';
    let msg = `Halo Erles Bakery, saya ingin konfirmasi pesanan (Simulasi):\n\n`;
    msg += `🧾 *Kode Pesanan:* ${order.code}\n`;
    msg += `👤 *Nama:* ${order.customer.name}\n`;
    msg += `📱 *WhatsApp:* ${order.customer.phone}\n`;
    msg += `🚚 *Metode:* ${
      order.customer.deliveryMethod === 'delivery'
        ? 'Kurir Delivery'
        : 'Ambil di Toko'
    }\n`;
    msg += `📍 *Alamat:* ${order.customer.address}\n`;
    msg += `📅 *Jadwal:* ${order.customer.deliveryDate} jam ${order.customer.deliveryTime} WIB\n\n`;

    msg += `📦 *Daftar Pesanan:*\n`;
    order.items.forEach((item, index) => {
      msg += `${index + 1}. ${item.nama} (${item.qty}x) - ${formatRupiah(
        item.harga * item.qty
      )}\n`;
    });

    if (order.hampersCard) {
      msg += `\n💌 *Kartu Ucapan Hampers:*\n`;
      msg += `• Dari: ${order.hampersCard.sender}\n`;
      msg += `• Untuk: ${order.hampersCard.recipient}\n`;
      msg += `• Pesan: "${order.hampersCard.message}"\n`;
    }

    msg += `\n💰 *Total Pembayaran:* ${formatRupiah(order.total)}\n`;
    msg += `💳 *Metode Bayar:* ${order.customer.paymentMethod.toUpperCase()}\n`;
    if (order.customer.notes) {
      msg += `📝 *Catatan:* ${order.customer.notes}\n`;
    }
    return msg;
  };

  const handleCopyReceipt = (order) => {
    const text = getWhatsAppMessage(order);
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="order-page">
      {/* HERO PESANAN */}
      <section className="order-hero">
        <div className="order-hero-glow order-glow-one"></div>
        <div className="order-hero-glow order-glow-two"></div>

        <div className="order-hero-content">
          <div className="order-mini-badge">
            <Sparkles size={14} />
            <span>Katalog Resmi & Simulasi Pemesanan</span>
          </div>

          <h1>
            Katalog Produk & <em>Hampers</em>
          </h1>

          <p>
            Pilih roti segar, donat empuk, aneka cake, dan <strong>paket hampers istimewa</strong>.
            Coba simulasi pemesanan langsung tanpa perlu registrasi akun.
          </p>
        </div>
      </section>

      {/* KATALOG UTAMA */}
      <section className="order-container">
        <div className="order-section-heading">
          <div>
            <span className="order-small-label">🍞 Fresh From The Oven</span>
            <h2>Katalog Produk & Hampers</h2>
            <p>Pilih produk favorit Anda dan klik tambah ke keranjang untuk membuat pesanan.</p>
          </div>

          <div className="order-heading-actions">
            {orderHistory.length > 0 && (
              <button
                type="button"
                className="order-history-btn"
                onClick={() => setShowHistoryModal(true)}
              >
                <FileText size={15} />
                Riwayat Simulasi ({orderHistory.length})
              </button>
            )}
            <div className="order-product-count">{filteredProducts.length} Produk Tersedia</div>
          </div>
        </div>

        {/* SEARCH, CATEGORIES & SORT */}
        <div className="order-toolbar">
          <div className="order-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Cari roti, donat, kue, hampers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="order-categories">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? `order-category active ${category === 'Hampers' ? 'hampers-tab' : ''}`
                    : `order-category ${category === 'Hampers' ? 'hampers-tab-inactive' : ''}`
                }
              >
                {category === 'Hampers' && <Gift size={13} style={{ marginRight: '5px' }} />}
                {category}
              </button>
            ))}
          </div>

          <div className="order-sort-wrapper">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="order-sort-select"
            >
              <option value="default">Urutkan: Rekomendasi</option>
              <option value="price-low">Harga: Termurah</option>
              <option value="price-high">Harga: Tertinggi</option>
            </select>
          </div>
        </div>

        {/* SPECIAL HAMPERS NOTICE BANNER IF HAMPERS CATEGORY SELECTED */}
        {selectedCategory === 'Hampers' && (
          <div className="hampers-special-banner">
            <div className="hampers-banner-icon">
              <Gift size={24} />
            </div>
            <div>
              <h4>Koleksi Hampers & Parsel Eksklusif Erles Bakery</h4>
              <p>
                Setiap paket hampers dikemas dalam kotak velvet premium dengan pita satin mewah dan <strong>GRATIS kartu ucapan custom</strong>. Siap kirim untuk hantaran Idul Fitri, pernikahan, ulang tahun, atau bingkisan rekan kerja di wilayah Malang & sekitarnya.
              </p>
            </div>
          </div>
        )}

        {/* PRODUCT GRID */}
        <div className="order-product-grid">
          {filteredProducts.map((product) => {
            const itemInCart = cart.find((item) => item.id === product.id);

            return (
              <article
                className={`order-product-card ${product.isHampers ? 'is-hampers-card' : ''}`}
                key={product.id}
              >
                <div className="order-product-image">
                  {product.image ? (
                    <img src={product.image} alt={product.nama} loading="lazy" />
                  ) : (
                    <div
                      className={`order-image-placeholder ${getCategoryClass(
                        product.kategori
                      )}`}
                    >
                      <span>{getProductEmoji(product.kategori)}</span>
                    </div>
                  )}

                  <span
                    className={`order-product-category ${getCategoryClass(
                      product.kategori
                    )}`}
                  >
                    {product.kategori}
                  </span>

                  {product.hampersBadge && (
                    <span className="hampers-card-badge">
                      <Gift size={11} /> {product.hampersBadge}
                    </span>
                  )}

                  <span className="order-product-emoji">
                    {getProductEmoji(product.kategori)}
                  </span>
                </div>

                <div className="order-product-content">
                  <div>
                    <div className="order-card-meta">
                      <span className="order-stock">Stok {product.stok}</span>
                      {product.isHampers && (
                        <span className="hampers-tag-mini">Free Kartu Ucapan</span>
                      )}
                    </div>

                    <h3>{product.nama}</h3>
                    <p>{product.deskripsi}</p>

                    {product.isiPaket && (
                      <div className="hampers-package-items">
                        <small className="package-title">Isi Paket Termasuk:</small>
                        <ul>
                          {product.isiPaket.map((item, idx) => (
                            <li key={idx}>✓ {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="order-product-bottom">
                    <div className="order-price">
                      <small>Harga</small>
                      <strong>{formatRupiah(product.harga)}</strong>
                    </div>

                    {itemInCart ? (
                      <div className="quantity-control">
                        <button
                          type="button"
                          onClick={() => removeFromCart(product.id)}
                          aria-label="Kurangi kuantitas"
                        >
                          <Minus size={14} />
                        </button>
                        <span>{itemInCart.qty}</span>
                        <button
                          type="button"
                          className="quantity-plus"
                          onClick={() => addToCart(product)}
                          aria-label="Tambah kuantitas"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className={`add-product-button ${
                          product.isHampers ? 'add-hampers-button' : ''
                        }`}
                        onClick={() => addToCart(product)}
                      >
                        <Plus size={14} />
                        {product.isHampers ? 'Pilih Hampers' : 'Tambah'}
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-product">
            <span>🥐</span>
            <h3>Produk tidak ditemukan</h3>
            <p>Coba gunakan kata pencarian atau pilih kategori lainnya.</p>
          </div>
        )}
      </section>

      {/* FLOATING CART BUTTON */}
      {cart.length > 0 && (
        <button
          type="button"
          className="floating-cart-button"
          onClick={() => setShowCheckoutModal(true)}
        >
          <span className="floating-cart-icon">
            <ShoppingCart size={20} />
            <span className="cart-counter">{cartCount}</span>
          </span>

          <span className="floating-cart-text">
            <small>{hasHampersInCart ? 'Keranjang (Ada Hampers 🎁)' : 'Keranjang Pesanan'}</small>
            <strong>{formatRupiah(subtotalCart)}</strong>
          </span>

          <span className="floating-cart-action">
            Checkout <Plus size={14} />
          </span>
        </button>
      )}

      {/* MODAL 1: FORM PEMESANAN (CHECKOUT) */}
      {showCheckoutModal && (
        <div className="order-modal-overlay" onClick={() => setShowCheckoutModal(false)}>
          <div className="order-modal checkout-modal" onClick={(e) => e.stopPropagation()}>
            <div className="order-modal-header">
              <div>
                <span className="modal-small-label">Langkah Terakhir</span>
                <h2>Form Pemesanan Pelanggan</h2>
              </div>
              <button
                type="button"
                className="close-modal-button"
                onClick={() => setShowCheckoutModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* RINGKASAN KERANJANG DI MODAL */}
            <div className="order-summary">
              <div className="order-summary-header">
                <strong>Rincian Item ({cartCount} item)</strong>
                <small className="order-badge-simulation">Mode Simulasi Dummy</small>
              </div>

              <div className="order-summary-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="order-summary-item">
                    <div className="summary-product">
                      <div className="summary-product-icon">
                        {getProductEmoji(item.kategori)}
                      </div>
                      <div>
                        <strong>{item.nama}</strong>
                        <span>
                          {formatRupiah(item.harga)} × {item.qty}
                        </span>
                      </div>
                    </div>
                    <strong>{formatRupiah(item.harga * item.qty)}</strong>
                  </div>
                ))}
              </div>

              <div className="order-summary-breakdown">
                <div className="breakdown-row">
                  <span>Subtotal Produk</span>
                  <span>{formatRupiah(subtotalCart)}</span>
                </div>
                <div className="breakdown-row">
                  <span>Ongkos Kirim</span>
                  <span>
                    {form.deliveryMethod === 'delivery'
                      ? formatRupiah(deliveryFee)
                      : 'Gratis (Ambil di Toko)'}
                  </span>
                </div>
                <div className="order-summary-total">
                  <span>Total Pembayaran</span>
                  <strong>{formatRupiah(totalCart)}</strong>
                </div>
              </div>
            </div>

            {/* FORM PEMESANAN */}
            <form className="checkout-form" onSubmit={handleSubmitOrder}>
              <div className="form-section-title">
                <Store size={16} /> 1. Informasi Pemesan
              </div>

              <div className="form-group">
                <label>
                  Nama Lengkap Pemesan <span className="req">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Rahma Safitri"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>
                  Nomor WhatsApp Aktif <span className="req">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div className="form-section-title">
                <Truck size={16} /> 2. Metode & Jadwal Pengiriman
              </div>

              <div className="delivery-method-grid">
                <label
                  className={`delivery-card ${
                    form.deliveryMethod === 'pickup' ? 'selected' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="pickup"
                    checked={form.deliveryMethod === 'pickup'}
                    onChange={() => setForm({ ...form, deliveryMethod: 'pickup' })}
                  />
                  <div className="delivery-card-content">
                    <Store size={18} />
                    <strong>Ambil Sendiri di Toko</strong>
                    <small>Jl. Vinolia No. 25B, Lowokwaru, Malang (Gratis)</small>
                  </div>
                </label>

                <label
                  className={`delivery-card ${
                    form.deliveryMethod === 'delivery' ? 'selected' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="deliveryMethod"
                    value="delivery"
                    checked={form.deliveryMethod === 'delivery'}
                    onChange={() => setForm({ ...form, deliveryMethod: 'delivery' })}
                  />
                  <div className="delivery-card-content">
                    <Truck size={18} />
                    <strong>Kurir Delivery Malang</strong>
                    <small>Tarif flat Rp 12.000 ke alamat tujuan</small>
                  </div>
                </label>
              </div>

              {form.deliveryMethod === 'delivery' && (
                <div className="form-group">
                  <label>
                    <MapPin size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                    Alamat Pengiriman Lengkap <span className="req">*</span>
                  </label>
                  <textarea
                    required
                    rows="3"
                    placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, dan patokan..."
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                </div>
              )}

              <div className="form-row-two">
                <div className="form-group">
                  <label>
                    <Calendar size={13} /> Tanggal Kirim / Ambil
                  </label>
                  <input
                    type="date"
                    required
                    value={form.deliveryDate}
                    onChange={(e) => setForm({ ...form, deliveryDate: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>
                    <Clock size={13} /> Estimasi Jam
                  </label>
                  <select
                    value={form.deliveryTime}
                    onChange={(e) => setForm({ ...form, deliveryTime: e.target.value })}
                  >
                    <option value="08:00">08:00 WIB (Pagi)</option>
                    <option value="10:00">10:00 WIB (Pagi)</option>
                    <option value="13:00">13:00 WIB (Siang)</option>
                    <option value="16:00">16:00 WIB (Sore)</option>
                    <option value="19:00">19:00 WIB (Malam)</option>
                  </select>
                </div>
              </div>

              {/* FITUR KHUSUS HAMPERS: KARTU UCAPAN CUSTOM */}
              {hasHampersInCart && (
                <div className="hampers-form-section">
                  <div className="hampers-form-title">
                    <Gift size={16} />
                    <div>
                      <strong>Personalisasi Kartu Ucapan Hampers (Gratis)</strong>
                      <small>Pesan ini akan dicetak indah di dalam box hampers Anda</small>
                    </div>
                  </div>

                  <div className="form-row-two">
                    <div className="form-group">
                      <label>Nama Pengirim (Dari)</label>
                      <input
                        type="text"
                        placeholder="Contoh: Keluarga Handoko"
                        value={form.hampersSender}
                        onChange={(e) =>
                          setForm({ ...form, hampersSender: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Nama Penerima (Untuk)</label>
                      <input
                        type="text"
                        placeholder="Contoh: Sahabatku Maya"
                        value={form.hampersRecipient}
                        onChange={(e) =>
                          setForm({ ...form, hampersRecipient: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Isi Pesan Ucapan</label>
                    <textarea
                      rows="2"
                      placeholder="Contoh: Selamat atas kelulusannya! Semoga semakin sukses dan berkah selalu..."
                      value={form.hampersMessage}
                      onChange={(e) =>
                        setForm({ ...form, hampersMessage: e.target.value })
                      }
                    />
                  </div>
                </div>
              )}

              {/* METODE PEMBAYARAN SIMULASI */}
              <div className="form-section-title">
                <CheckCircle2 size={16} /> 3. Metode Pembayaran (Simulasi)
              </div>

              <div className="payment-method-selector">
                <label
                  className={`payment-choice ${
                    form.paymentMethod === 'bca' ? 'active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bca"
                    checked={form.paymentMethod === 'bca'}
                    onChange={() => setForm({ ...form, paymentMethod: 'bca' })}
                  />
                  <span>Transfer Bank BCA (1234-567-890)</span>
                </label>

                <label
                  className={`payment-choice ${
                    form.paymentMethod === 'qris' ? 'active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="qris"
                    checked={form.paymentMethod === 'qris'}
                    onChange={() => setForm({ ...form, paymentMethod: 'qris' })}
                  />
                  <span>QRIS Instant Pay</span>
                </label>

                <label
                  className={`payment-choice ${
                    form.paymentMethod === 'cash' ? 'active' : ''
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={form.paymentMethod === 'cash'}
                    onChange={() => setForm({ ...form, paymentMethod: 'cash' })}
                  />
                  <span>Bayar Tunai saat Pengambilan (COD)</span>
                </label>
              </div>

              <div className="form-group">
                <label>
                  Catatan Khusus <span className="opt">(Opsional)</span>
                </label>
                <textarea
                  rows="2"
                  placeholder="Contoh: donat jangan pakai gula, packing dipisah, dsb."
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="submit-order-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Memproses Simulasi Pesanan...</>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    Kirim Pesanan Dummy ({formatRupiah(totalCart)})
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: OUTPUT STRUK PEMESANAN DUMMY (RECEIPT) */}
      {showReceiptModal && latestOrder && (
        <div className="order-modal-overlay" onClick={() => setShowReceiptModal(false)}>
          <div className="order-modal receipt-modal" onClick={(e) => e.stopPropagation()}>
            <div className="receipt-banner-success">
              <button
                type="button"
                className="receipt-close-btn"
                onClick={() => setShowReceiptModal(false)}
                aria-label="Tutup Struk"
              >
                <X size={18} />
              </button>
              <div className="receipt-success-icon">
                <CheckCircle2 size={32} />
              </div>
              <h3>Simulasi Pesanan Berhasil!</h3>
              <p>Pelanggan dummy telah berhasil membuat pesanan.</p>
              <div className="receipt-code-pill">Kode: {latestOrder.code}</div>
            </div>

            <div className="receipt-info-notice">
              <Info size={16} />
              <span>
                <strong>Mode Simulasi:</strong> Data pesanan ini disimpan secara lokal di peramban Anda dan siap dikonfirmasi ke WhatsApp toko.
              </span>
            </div>

            <div className="receipt-scrollable-body">
              {/* DETAIL STRUK */}
              <div className="receipt-card">
              <div className="receipt-row">
                <span className="receipt-label">Waktu Transaksi</span>
                <span className="receipt-val">{latestOrder.createdAt}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Nama Pemesan</span>
                <span className="receipt-val">{latestOrder.customer.name}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">WhatsApp</span>
                <span className="receipt-val">{latestOrder.customer.phone}</span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Metode Pengiriman</span>
                <span className="receipt-val">
                  {latestOrder.customer.deliveryMethod === 'delivery'
                    ? 'Kurir Delivery Malang'
                    : 'Ambil di Toko'}
                </span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Jadwal</span>
                <span className="receipt-val">
                  {latestOrder.customer.deliveryDate} ({latestOrder.customer.deliveryTime} WIB)
                </span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Alamat</span>
                <span className="receipt-val address-val">
                  {latestOrder.customer.address}
                </span>
              </div>
              <div className="receipt-row">
                <span className="receipt-label">Metode Bayar</span>
                <span className="receipt-val badge-pay">
                  {latestOrder.customer.paymentMethod.toUpperCase()} (Simulasi)
                </span>
              </div>

              {/* JIKA ADA KARTU UCAPAN HAMPERS */}
              {latestOrder.hampersCard && (
                <div className="receipt-hampers-preview">
                  <div className="hampers-preview-header">
                    <Gift size={15} /> <strong>Kartu Ucapan Hampers Terpasang</strong>
                  </div>
                  <p>
                    <strong>Dari:</strong> {latestOrder.hampersCard.sender} →{' '}
                    <strong>Untuk:</strong> {latestOrder.hampersCard.recipient}
                  </p>
                  <blockquote className="hampers-quote">
                    "{latestOrder.hampersCard.message}"
                  </blockquote>
                </div>
              )}

              {/* DAFTAR ITEM */}
              <div className="receipt-items-list">
                <div className="receipt-items-heading">Item Pesanan:</div>
                {latestOrder.items.map((item, idx) => (
                  <div key={idx} className="receipt-item-row">
                    <span>
                      {item.nama} × {item.qty}
                    </span>
                    <strong>{formatRupiah(item.harga * item.qty)}</strong>
                  </div>
                ))}
              </div>

              {/* TOTAL */}
              <div className="receipt-total-breakdown">
                <div className="receipt-total-row">
                  <span>Subtotal</span>
                  <span>{formatRupiah(latestOrder.subtotal)}</span>
                </div>
                <div className="receipt-total-row">
                  <span>Ongkos Kirim</span>
                  <span>
                    {latestOrder.deliveryFee > 0
                      ? formatRupiah(latestOrder.deliveryFee)
                      : 'Rp 0 (Gratis)'}
                  </span>
                </div>
                <div className="receipt-grand-total">
                  <span>Total Tagihan:</span>
                  <strong>{formatRupiah(latestOrder.total)}</strong>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="receipt-actions">
              <a
                href={`https://wa.me/6285717224420?text=${encodeURIComponent(
                  getWhatsAppMessage(latestOrder)
                )}`}
                target="_blank"
                rel="noreferrer"
                className="receipt-btn-whatsapp"
              >
                <MessageCircle size={18} />
                Kirim Konfirmasi ke WhatsApp Toko
              </a>

              <button
                type="button"
                className="receipt-btn-copy"
                onClick={() => handleCopyReceipt(latestOrder)}
              >
                {isCopied ? (
                  <>
                    <Check size={16} /> Rincian Berhasil Disalin!
                  </>
                ) : (
                  <>
                    <Copy size={16} /> Salin Rincian Pesanan
                  </>
                )}
              </button>

              <button
                type="button"
                className="receipt-btn-secondary"
                onClick={() => setShowReceiptModal(false)}
              >
                <RotateCcw size={15} /> Tutup & Buat Pesanan Lain
              </button>
            </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: RIWAYAT SIMULASI PESANAN */}
      {showHistoryModal && (
        <div className="order-modal-overlay" onClick={() => setShowHistoryModal(false)}>
          <div className="order-modal history-modal" onClick={(e) => e.stopPropagation()}>
            <div className="order-modal-header">
              <div>
                <span className="modal-small-label">LocalStorage Browser</span>
                <h2>Riwayat Pesanan Simulasi</h2>
              </div>
              <button
                type="button"
                className="close-modal-button"
                onClick={() => setShowHistoryModal(false)}
              >
                <X size={20} />
              </button>
            </div>

            {orderHistory.length === 0 ? (
              <p className="empty-history">Belum ada riwayat pesanan simulasi.</p>
            ) : (
              <div className="history-list">
                {orderHistory.map((order, idx) => (
                  <div key={idx} className="history-item-card">
                    <div className="history-card-header">
                      <strong>{order.code}</strong>
                      <span className="history-date">{order.createdAt}</span>
                    </div>
                    <div className="history-card-body">
                      <div>
                        <strong>{order.customer.name}</strong> ({order.customer.phone})
                      </div>
                      <small>
                        {order.items.length} jenis item •{' '}
                        {order.customer.deliveryMethod === 'delivery'
                          ? 'Kurir Delivery'
                          : 'Pickup Toko'}
                      </small>
                      <div className="history-total">
                        Total: <strong>{formatRupiah(order.total)}</strong>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="history-reopen-btn"
                      onClick={() => {
                        setLatestOrder(order);
                        setShowHistoryModal(false);
                        setShowReceiptModal(true);
                      }}
                    >
                      Buka Struk
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}