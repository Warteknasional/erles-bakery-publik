import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  X,
  Search,
  Plus,
  Minus,
  ShoppingCart,
  Gift,
  CheckCircle2,
  Truck,
  Store,
  MessageCircle,
  Copy,
  Check,
  FileText,
  ArrowRight,
  Info,
  QrCode,
  ExternalLink,
  AlertCircle,
  Loader2,
  Landmark,
  Banknote,
} from 'lucide-react';
import { useCart } from '../context/useCart';
import { productService, orderService } from '../services/api';
import { SITE_CONFIG } from '../config/site';

const fallbackProducts = [
  // 1. SOURDOUGH & ARTISAN BREADS
  {
    id: 5,
    nama: 'Sourdough Country Boule',
    harga: 45000,
    kategori: 'Sourdough',
    stok: 20,
    deskripsi:
      'Kerak renyah keemasan dengan remah berongga lembut hasil fermentasi lambat 24 jam dengan ragi alami pilihan.',
    image:
      'https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 6,
    nama: 'Olive & Rosemary Ciabatta',
    harga: 32000,
    kategori: 'Sourdough',
    stok: 25,
    deskripsi:
      'Roti klasik Italia bertekstur empuk kenyal dengan potongan buah zaitun hitam dan taburan rosemary wangi.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80',
  },

  // 2. DONAT KENTANG KHAS MALANG
  {
    id: 11,
    nama: 'Donat Gula Halus Klasik',
    harga: 8000,
    kategori: 'Donat',
    stok: 45,
    deskripsi:
      'Donat kentang tradisional super empuk dan kenyal, ditaburi gula halus dingin yang pas manisnya.',
    image:
      'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 12,
    nama: 'Donat Coklat Almond Panggang',
    harga: 12000,
    kategori: 'Donat',
    stok: 30,
    deskripsi:
      'Glaze dark chocolate pekat bertabur irisan kacang almond sangrai renyah dan gurih.',
    image:
      'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 13,
    nama: 'Donat Bomboloni Nutella',
    harga: 14000,
    kategori: 'Donat',
    stok: 35,
    deskripsi:
      'Donat montok bulat tanpa lubang khas Italia berisi lelehan selai coklat hazelnut Nutella melimpah.',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=700&q=80',
  },

  // 3. ROTI & VIENNOISERIE HARIAN
  {
    id: 7,
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
    id: 8,
    nama: 'Butter Croissant Prancis',
    harga: 18000,
    kategori: 'Roti',
    stok: 30,
    deskripsi:
      'Flaky, buttery dengan lapisan renyah khas Prancis dan aroma mentega murni dari panggangan pertama pagi hari.',
    image:
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 9,
    nama: 'Roti Sisir Mentega Jadul',
    harga: 15000,
    kategori: 'Roti',
    stok: 40,
    deskripsi:
      'Roti sisir empuk dengan olesan butter cream manis gurih nostalgia khas resep rumahan tempo dulu.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 10,
    nama: 'Roti Sobek Coklat Keju',
    harga: 28000,
    kategori: 'Roti',
    stok: 25,
    deskripsi:
      'Roti sobek porsi keluarga dengan isian coklat leleh belgian dan potongan keju cheddar gurih di tiap sobekannya.',
    image:
      'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=700&q=80',
  },

  // 4. KUE & CAKE
  {
    id: 14,
    nama: 'Fudgy Brownies Coklat',
    harga: 35000,
    kategori: 'Kue',
    stok: 20,
    deskripsi:
      'Brownies panggang coklat fudgy legit dengan shiny crust renyah di atas dan lumer di dalam mulut.',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 15,
    nama: 'Red Velvet Cake Slice',
    harga: 45000,
    kategori: 'Kue',
    stok: 18,
    deskripsi:
      'Cake lembut warna merah merona dengan olesan cream cheese frosting segar dan taburan remahan red velvet.',
    image:
      'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 16,
    nama: 'Kue Lapis Legit Tradisional',
    harga: 180000,
    kategori: 'Kue',
    stok: 8,
    deskripsi:
      'Lapis legit panggang otentik bertabur aroma kapulaga manis dan wisman gurih di setiap helai lapisannya.',
    image:
      'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=80',
  },

  // 5. HAMPERS & GIFT SET SPESIAL
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
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80',
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
    image:
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=700&q=80',
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
    image:
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=700&q=80',
  },
];

const categories = ['Semua', 'Sourdough', 'Donat', 'Roti', 'Kue', 'Hampers'];

const getDefaultDeliveryDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

export default function PesananPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const kategoriFromUrl = searchParams.get('kategori');

  const {
    cart,
    cartCount,
    subtotalCart,
    hasHampersInCart,
    addToCart,
    removeFromCart,
    clearCart,
    isCheckoutOpen,
    setIsCheckoutOpen,
  } = useCart();

  const selectedCategory =
    kategoriFromUrl && categories.includes(kategoriFromUrl)
      ? kategoriFromUrl
      : 'Semua';

  const handleCategoryChange = (cat) => {
    const nextParams = new URLSearchParams(searchParams);
    if (cat === 'Semua') {
      nextParams.delete('kategori');
    } else {
      nextParams.set('kategori', cat);
    }
    setSearchParams(nextParams);
  };

  const [products, setProducts] = useState(fallbackProducts);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [apiError, setApiError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Modal States
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  // Form State
  const [form, setForm] = useState({
    name: '',
    phone: '',
    deliveryMethod: 'pickup',
    address: '',
    deliveryDate: getDefaultDeliveryDate(),
    deliveryTime: '10:00',
    paymentMethod: 'qris',
    notes: '',
    greetingTo: '',
    greetingFrom: '',
    greetingMessage: '',
  });

  const [latestOrder, setLatestOrder] = useState(null);
  const [orderHistory, setOrderHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('erles_orders_history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Check query param to auto-open checkout
  useEffect(() => {
    if (searchParams.get('openCart') === 'true') {
      setIsCheckoutOpen(true);
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('openCart');
      setSearchParams(nextParams, { replace: true });
    }
  }, [searchParams, setSearchParams, setIsCheckoutOpen]);

  // Fetch real products from Laravel Backend API
  useEffect(() => {
    let isMounted = true;
    async function loadProducts() {
      setIsLoadingProducts(true);
      setApiError(null);
      try {
        const response = await productService.getAll();
        if (isMounted && response?.data && Array.isArray(response.data) && response.data.length > 0) {
          // Map backend products and merge with fallback metadata if missing
          const mapped = response.data.map((item) => {
            const fallback = fallbackProducts.find((f) => f.id === item.id) || {};
            return {
              id: item.id,
              nama: item.nama,
              harga: Number(item.harga),
              stok: Number(item.stok ?? 20),
              kategori: item.kategori || fallback.kategori || 'Roti',
              deskripsi: item.deskripsi || fallback.deskripsi || '',
              image: item.gambar || fallback.image || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80',
              isHampers: item.kategori === 'Hampers' || fallback.isHampers,
              hampersBadge: fallback.hampersBadge,
              isiPaket: fallback.isiPaket,
            };
          });
          setProducts(mapped);
        }
      } catch (err) {
        if (isMounted) {
          // If backend is offline or returns error, use fallback gracefully
          console.warn('API backend belum terhubung, menggunakan katalog lokal:', err.message);
          setApiError('Menggunakan katalog lokal sementara (Backend belum tersambung).');
        }
      } finally {
        if (isMounted) setIsLoadingProducts(false);
      }
    }

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  // Keyboard Escape listener for modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsCheckoutOpen(false);
        setShowReceiptModal(false);
        setShowHistoryModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsCheckoutOpen]);

  // Filter & Sort
  const filteredProducts = products
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

  const deliveryFee =
    form.deliveryMethod === 'delivery' && subtotalCart > 0 ? SITE_CONFIG.deliveryFee : 0;
  const totalCart = subtotalCart + deliveryFee;

  const handleSubmitOrder = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Payload formatted for Laravel backend OrderStoreRequest
    const orderPayload = {
      customer_name: form.name.trim(),
      customer_phone: form.phone.trim(),
      alamat:
        form.deliveryMethod === 'delivery'
          ? form.address.trim()
          : `Ambil di Toko (${SITE_CONFIG.addressShort})`,
      catatan: [
        form.notes ? `Catatan: ${form.notes.trim()}` : '',
        form.deliveryTime ? `Waktu: ${form.deliveryTime} WIB` : '',
        hasHampersInCart && form.greetingMessage
          ? `[Ucapan] To: ${form.greetingTo || 'Penerima'} | From: ${form.greetingFrom || form.name} | Pesan: "${form.greetingMessage}"`
          : '',
        `Bayar: ${form.paymentMethod.toUpperCase()}`,
      ]
        .filter(Boolean)
        .join(' • '),
      tanggal_ambil: form.deliveryDate || null,
      items: cart.map((item) => ({
        product_id: item.id,
        qty: item.qty,
      })),
    };

    let orderCode = `ERL-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;
    let isRealApiSuccess = false;

    try {
      const res = await orderService.create(orderPayload);
      if (res?.data?.kode_pesanan) {
        orderCode = res.data.kode_pesanan;
        isRealApiSuccess = true;
      }
    } catch (err) {
      console.warn('Order API backend belum aktif, melanjutkan dengan struk lokal:', err.message);
      // Still allow order completion locally so user can confirm via WhatsApp
    }

    const newOrder = {
      code: orderCode,
      isSynced: isRealApiSuccess,
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
            : `Ambil di Toko (${SITE_CONFIG.address})`,
        deliveryDate: form.deliveryDate,
        deliveryTime: form.deliveryTime,
        paymentMethod: form.paymentMethod,
        notes: form.notes,
      },
      items: [...cart],
      subtotal: subtotalCart,
      deliveryFee,
      total: totalCart,
      greetingCard: hasHampersInCart
        ? {
            to: form.greetingTo || 'Penerima Terkasih',
            from: form.greetingFrom || form.name,
            message: form.greetingMessage || 'Semoga hari Anda menyenangkan bersama sajian hangat Erles Bakery.',
          }
        : null,
    };

    setLatestOrder(newOrder);
    const updatedHistory = [newOrder, ...orderHistory].slice(0, 15);
    setOrderHistory(updatedHistory);
    try {
      localStorage.setItem('erles_orders_history', JSON.stringify(updatedHistory));
    } catch {
      // Ignore storage errors
    }

    setIsSubmitting(false);
    setIsCheckoutOpen(false);
    setShowReceiptModal(true);
    clearCart();
  };

  const handleCopyOrderText = () => {
    if (!latestOrder) return;
    const itemsList = latestOrder.items
      .map((it) => `- ${it.nama} (${it.qty}x) = ${formatRupiah(it.harga * it.qty)}`)
      .join('\n');

    const textToCopy = `Halo Erles Bakery, saya ingin mengonfirmasi pesanan #${latestOrder.code}:
Nama: ${latestOrder.customer.name}
No. WA: ${latestOrder.customer.phone}
Metode: ${latestOrder.customer.deliveryMethod === 'delivery' ? 'Kurir Antar' : 'Ambil di Toko'}
Alamat: ${latestOrder.customer.address}
Jadwal: ${latestOrder.customer.deliveryDate} jam ${latestOrder.customer.deliveryTime} WIB

Rincian Pesanan:
${itemsList}

Subtotal: ${formatRupiah(latestOrder.subtotal)}
Ongkir: ${formatRupiah(latestOrder.deliveryFee)}
Total Bayar: ${formatRupiah(latestOrder.total)}
Pembayaran: ${latestOrder.customer.paymentMethod.toUpperCase()}
Catatan: ${latestOrder.customer.notes || '-'}
${
  latestOrder.greetingCard
    ? `\nKartu Ucapan:\nUntuk: ${latestOrder.greetingCard.to}\nDari: ${latestOrder.greetingCard.from}\nPesan: "${latestOrder.greetingCard.message}"`
    : ''
}`;

    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleSendToWhatsApp = () => {
    if (!latestOrder) return;
    const itemsList = latestOrder.items
      .map((it) => `• ${it.nama} (${it.qty}x) = ${formatRupiah(it.harga * it.qty)}`)
      .join('%0A');

    const waText = `*KONFIRMASI PESANAN #${latestOrder.code}*%0A%0A*Nama:* ${encodeURIComponent(latestOrder.customer.name)}%0A*WhatsApp:* ${encodeURIComponent(latestOrder.customer.phone)}%0A*Metode:* ${latestOrder.customer.deliveryMethod === 'delivery' ? 'Kurir Antar' : 'Ambil di Toko'}%0A*Alamat:* ${encodeURIComponent(latestOrder.customer.address)}%0A*Jadwal:* ${latestOrder.customer.deliveryDate} jam ${latestOrder.customer.deliveryTime} WIB%0A%0A*Daftar Produk:*%0A${itemsList}%0A%0A*Total Bayar:* ${encodeURIComponent(formatRupiah(latestOrder.total))}%0A*Metode Bayar:* ${latestOrder.customer.paymentMethod.toUpperCase()}${
      latestOrder.greetingCard
        ? `%0A%0A*Kartu Ucapan:*%0AUntuk: ${encodeURIComponent(latestOrder.greetingCard.to)}%0ADari: ${encodeURIComponent(latestOrder.greetingCard.from)}%0APesan: "${encodeURIComponent(latestOrder.greetingCard.message)}"`
        : ''
    }`;

    window.open(`${SITE_CONFIG.whatsappUrl}?text=${waText}`, '_blank');
  };

  return (
    <div className="deux-menu-page">
      {/* 1. DEUX STYLE MENU HERO */}
      <section className="deux-menu-hero">
        <div className="deux-container">
          <div className="deux-menu-hero-center reveal-up">
            {/* ROTATING BADGE */}
            <div className="deux-stamp-badge" title="Discover Our Fresh Bakes">
              <svg
                className="deux-stamp-svg"
                viewBox="0 0 100 100"
                width="80"
                height="80"
                aria-hidden="true"
              >
                <defs>
                  <path
                    id="menuCirclePath"
                    d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                  />
                </defs>
                <circle cx="50" cy="50" r="48" fill="#FFE480" stroke="#4A2E17" strokeWidth="2" />
                <text
                  fontSize="9.2"
                  fontWeight="800"
                  fill="#4A2E17"
                  letterSpacing="2.2"
                >
                  <textPath href="#menuCirclePath">
                    DISCOVER OUR FRESH BAKES •
                  </textPath>
                </text>
                <circle cx="50" cy="50" r="14" fill="#CC4A3B" />
                <polygon
                  points="50,42 53,48 59,49 55,54 56,60 50,57 44,60 45,54 41,49 47,48"
                  fill="#FFFFFF"
                />
              </svg>
            </div>

            <span className="deux-scallop-tag">menu catalog</span>

            <h1 className="deux-menu-hero-title">
              <span className="deux-hl-brown">OUR</span>{' '}
              <span className="deux-hl-red">Fresh MENU</span>
            </h1>

            <p className="deux-menu-desc">
              Pilihan lengkap artisan sourdough berkerak renyah, donat kentang lembut khas Malang,
              aneka pastry mentega Prancis, dan paket hampers bingkisan istimewa.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TOOLBAR & CATEGORY PILLS */}
      <section className="deux-container">
        <div className="deux-menu-toolbar reveal-up stagger-1">
          {/* SEARCH & SORT & HISTORY */}
          <div className="deux-toolbar-top">
            <div className="deux-search-box">
              <Search size={18} color="#7C5D44" aria-hidden="true" />
              <input
                id="product-search-input"
                type="text"
                placeholder="Cari sourdough, donat kentang, hampers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Cari produk pada menu"
              />
            </div>

            <div className="deux-toolbar-actions">
              {orderHistory.length > 0 && (
                <button
                  type="button"
                  className="deux-history-pill"
                  onClick={() => setShowHistoryModal(true)}
                  aria-label="Buka riwayat pesanan"
                >
                  <FileText size={15} />
                  <span>Riwayat Pesanan ({orderHistory.length})</span>
                </button>
              )}

              <select
                id="product-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="deux-sort-select"
                aria-label="Urutkan produk berdasarkan harga"
              >
                <option value="default">Urutkan: Rekomendasi</option>
                <option value="price-low">Harga: Termurah</option>
                <option value="price-high">Harga: Tertinggi</option>
              </select>
            </div>
          </div>

          {/* CATEGORY TABS PILL BAR */}
          <div className="deux-category-tabs-bar" role="tablist" aria-label="Kategori Produk">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                role="tab"
                aria-selected={selectedCategory === category}
                onClick={() => handleCategoryChange(category)}
                className={`deux-cat-pill ${
                  selectedCategory === category ? 'active' : ''
                } ${category === 'Hampers' ? 'is-hampers' : ''}`}
              >
                {category === 'Hampers' && <Gift size={13} style={{ marginRight: '6px' }} />}
                {category === 'Hampers' ? 'Hampers & Gift' : category}
              </button>
            ))}
          </div>
        </div>

        {/* HAMPERS HIGHLIGHT NOTIFICATION IF HAMPERS SELECTED */}
        {selectedCategory === 'Hampers' && (
          <div className="deux-hampers-banner-highlight">
            <div className="hampers-banner-gift-icon">
              <Gift size={28} color="#4A2E17" />
            </div>
            <div>
              <h4 className="hampers-banner-title">
                Koleksi Hampers & Bingkisan Eksklusif Erles Bakery
              </h4>
              <p className="hampers-banner-text">
                Setiap box hampers dikemas elegan dengan pita satin, box kokoh estetik, dan <strong>GRATIS kustom kartu ucapan</strong> langsung pada formulir pemesanan. Siap dikirim ke seluruh Malang & sekitarnya.
              </p>
            </div>
          </div>
        )}

        {/* LOADING & FALLBACK INDICATOR */}
        {isLoadingProducts && (
          <div className="deux-loading-state">
            <Loader2 size={24} className="spin-animate" />
            <span>Memuat katalog segar dari dapur...</span>
          </div>
        )}

        {apiError && !isLoadingProducts && (
          <div className="deux-api-notice">
            <Info size={15} />
            <span>{apiError}</span>
          </div>
        )}

        {/* 3. PRODUCT CARDS GRID */}
        <div className="deux-product-cards-grid">
          {filteredProducts.map((product, idx) => {
            const itemInCart = cart.find((item) => item.id === product.id);

            return (
              <article key={product.id} className={`deux-prod-card reveal-scale stagger-${(idx % 4) + 1}`}>
                <div className="deux-prod-thumb">
                  <img src={product.image} alt={product.nama} loading="lazy" />
                  <span className="deux-prod-tag">{product.kategori}</span>
                  {product.hampersBadge && (
                    <span className="deux-prod-hampers-badge">
                      {product.hampersBadge}
                    </span>
                  )}
                </div>

                <div className="deux-prod-body">
                  <span className="deux-prod-cat">STOK {product.stok}</span>
                  <h3 className="deux-prod-title">{product.nama}</h3>
                  <p className="deux-prod-desc">{product.deskripsi}</p>

                  {product.isiPaket && (
                    <div className="deux-prod-package">
                      <strong>Paket termasuk:</strong>
                      <ul>
                        {product.isiPaket.map((item, pIdx) => (
                          <li key={pIdx}>✓ {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="deux-prod-footer">
                    <span className="deux-prod-price">{formatRupiah(product.harga)}</span>

                    {itemInCart ? (
                      <div className="deux-qty-pill">
                        <button
                          type="button"
                          className="deux-qty-btn"
                          onClick={() => removeFromCart(product.id)}
                          aria-label={`Kurangi ${product.nama}`}
                        >
                          <Minus size={13} />
                        </button>
                        <span>{itemInCart.qty}</span>
                        <button
                          type="button"
                          className="deux-qty-btn"
                          onClick={() => addToCart(product)}
                          aria-label={`Tambah ${product.nama}`}
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="deux-prod-add-btn"
                        onClick={() => addToCart(product)}
                        aria-label={`Tambahkan ${product.nama} ke keranjang`}
                      >
                        <Plus size={14} />
                        <span>{product.isHampers ? 'PILIH HAMPERS' : 'TAMBAH'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {filteredProducts.length === 0 && !isLoadingProducts && (
          <div className="deux-empty-box">
            <h3 className="empty-box-title">Produk Tidak Ditemukan</h3>
            <p className="empty-box-desc">
              Coba gunakan kata pencarian lain atau pilih kategori di atas.
            </p>
          </div>
        )}
      </section>

      {/* 4. FLOATING CART CAPSULE BUTTON */}
      {cart.length > 0 && (
        <button
          type="button"
          className="deux-floating-cart"
          onClick={() => setIsCheckoutOpen(true)}
          aria-label={`Buka Keranjang: ${cartCount} item, total ${formatRupiah(subtotalCart)}`}
        >
          <div className="floating-cart-badge">
            <ShoppingCart size={18} />
            <span className="cart-bubble">{cartCount}</span>
          </div>
          <div className="floating-cart-label">
            <small>{hasHampersInCart ? 'Keranjang (Ada Hampers 🎁)' : 'Keranjang Belanja'}</small>
            <strong>{formatRupiah(subtotalCart)}</strong>
          </div>
          <ArrowRight size={18} />
        </button>
      )}

      {/* 5. CHECKOUT MODAL (DEUX STYLED) */}
      {isCheckoutOpen && (
        <div
          className="modal-backdrop-custom"
          onClick={() => setIsCheckoutOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-modal-title"
        >
          <div className="modal-card-custom" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-custom">
              <div className="modal-title-with-icon">
                <div className="modal-icon-badge">
                  <ShoppingCart size={20} />
                </div>
                <div>
                  <h3 id="checkout-modal-title">Formulir Pesanan Online</h3>
                  <p>Lengkapi detail pemesanan untuk konfirmasi ke dapur Erles Bakery.</p>
                </div>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setIsCheckoutOpen(false)}
                aria-label="Tutup form pesanan"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmitOrder} className="modal-form-custom">
              <div className="modal-columns-grid">
                {/* KOLOM KIRI: FORM DATA */}
                <div className="modal-left-column">
                  <div className="form-group-custom">
                    <label htmlFor="order-customer-name">Nama Pemesan *</label>
                    <input
                      id="order-customer-name"
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group-custom">
                    <label htmlFor="order-customer-phone">Nomor WhatsApp *</label>
                    <input
                      id="order-customer-phone"
                      type="tel"
                      required
                      placeholder="Contoh: 08123456789"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group-custom">
                    <span className="form-label-text">Metode Pengambilan *</span>
                    <div className="delivery-method-grid" role="radiogroup" aria-label="Metode Pengambilan">
                      <button
                        type="button"
                        role="radio"
                        aria-checked={form.deliveryMethod === 'pickup'}
                        className={`method-select-btn ${form.deliveryMethod === 'pickup' ? 'active' : ''}`}
                        onClick={() => setForm({ ...form, deliveryMethod: 'pickup' })}
                      >
                        <Store size={18} />
                        <div>
                          <strong>Ambil di Toko</strong>
                          <small>Gratis ({SITE_CONFIG.addressShort})</small>
                        </div>
                      </button>

                      <button
                        type="button"
                        role="radio"
                        aria-checked={form.deliveryMethod === 'delivery'}
                        className={`method-select-btn ${form.deliveryMethod === 'delivery' ? 'active' : ''}`}
                        onClick={() => setForm({ ...form, deliveryMethod: 'delivery' })}
                      >
                        <Truck size={18} />
                        <div>
                          <strong>Kurir Antar</strong>
                          <small>Kota Malang (+{formatRupiah(SITE_CONFIG.deliveryFee)})</small>
                        </div>
                      </button>
                    </div>
                  </div>

                  {form.deliveryMethod === 'delivery' && (
                    <div className="form-group-custom">
                      <label htmlFor="order-delivery-address">Alamat Pengantaran Lengkap *</label>
                      <textarea
                        id="order-delivery-address"
                        required
                        rows="2"
                        placeholder="Nama jalan, nomor rumah, kelurahan/kecamatan di Malang..."
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                      ></textarea>
                    </div>
                  )}

                  <div className="form-row-custom">
                    <div className="form-group-custom">
                      <label htmlFor="order-delivery-date">Tanggal Diambil / Diantar</label>
                      <input
                        id="order-delivery-date"
                        type="date"
                        required
                        value={form.deliveryDate}
                        onChange={(e) => setForm({ ...form, deliveryDate: e.target.value })}
                      />
                    </div>

                    <div className="form-group-custom">
                      <label htmlFor="order-delivery-time">Perkiraan Jam</label>
                      <input
                        id="order-delivery-time"
                        type="time"
                        required
                        value={form.deliveryTime}
                        onChange={(e) => setForm({ ...form, deliveryTime: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group-custom">
                    <span className="form-label-text">Metode Pembayaran *</span>
                    <div className="payment-options-grid" role="radiogroup" aria-label="Metode Pembayaran">
                      <button
                        type="button"
                        role="radio"
                        aria-checked={form.paymentMethod === 'qris'}
                        className={`payment-select-card ${form.paymentMethod === 'qris' ? 'active' : ''}`}
                        onClick={() => setForm({ ...form, paymentMethod: 'qris' })}
                      >
                        <QrCode size={18} />
                        <div>
                          <strong>QRIS / E-Wallet</strong>
                          <small>Semua Bank & E-Wallet</small>
                        </div>
                      </button>

                      <button
                        type="button"
                        role="radio"
                        aria-checked={form.paymentMethod === 'transfer'}
                        className={`payment-select-card ${form.paymentMethod === 'transfer' ? 'active' : ''}`}
                        onClick={() => setForm({ ...form, paymentMethod: 'transfer' })}
                      >
                        <Landmark size={18} />
                        <div>
                          <strong>Transfer Bank</strong>
                          <small>BCA / Mandiri / BRI</small>
                        </div>
                      </button>

                      <button
                        type="button"
                        role="radio"
                        aria-checked={form.paymentMethod === 'tunai'}
                        className={`payment-select-card ${form.paymentMethod === 'tunai' ? 'active' : ''}`}
                        onClick={() => setForm({ ...form, paymentMethod: 'tunai' })}
                      >
                        <Banknote size={18} />
                        <div>
                          <strong>Bayar di Tempat</strong>
                          <small>Tunai / COD saat terima</small>
                        </div>
                      </button>
                    </div>

                    {/* QRIS CHECKOUT PREVIEW JIKA QRIS DIPILIH */}
                    {form.paymentMethod === 'qris' && (
                      <div className="checkout-qris-card">
                        <div className="checkout-qris-header">
                          <div className="qris-badge-tag">
                            <QrCode size={16} />
                            <span>QRIS PEMBAYARAN RESMI</span>
                          </div>
                          <a
                            href="/qris.jpg"
                            target="_blank"
                            rel="noreferrer"
                            className="qris-zoom-btn"
                            title="Buka QRIS Gambar Penuh"
                          >
                            <span>Perbesar QR</span>
                            <ExternalLink size={13} />
                          </a>
                        </div>

                        <div className="checkout-qris-body">
                          <div className="checkout-qris-frame">
                            <img
                              src="/qris.jpg"
                              alt="Barcode QRIS Resmi Erles Bakery"
                              className="checkout-qris-img"
                            />
                          </div>

                          <div className="checkout-qris-info">
                            <strong className="qris-merchant-title">ERLES BAKERY</strong>
                            <span className="qris-merchant-nmid">NMID: <strong>{SITE_CONFIG.qrisNmid}</strong></span>
                            <span className="qris-merchant-tag">A01 • SATU QRIS UNTUK SEMUA</span>
                            <p className="qris-merchant-guide">
                              Scan QR di atas menggunakan aplikasi <strong>BCA Mobile, Livin, BRImo, BNI, GoPay, OVO, Dana, ShopeePay</strong>, atau e-wallet lainnya.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* KUSTOM KARTU UCAPAN JIKA ADA HAMPERS */}
                  {hasHampersInCart && (
                    <div className="hampers-card-form-box">
                      <div className="hampers-card-title">
                        <Gift size={16} />
                        <span>Kustom Kartu Ucapan Hampers (Gratis)</span>
                      </div>

                      <div className="form-row-custom">
                        <div className="form-group-custom">
                          <label htmlFor="order-greeting-to">Kepada (To):</label>
                          <input
                            id="order-greeting-to"
                            type="text"
                            placeholder="Contoh: Keluarga Ibu Rina"
                            value={form.greetingTo}
                            onChange={(e) => setForm({ ...form, greetingTo: e.target.value })}
                          />
                        </div>

                        <div className="form-group-custom">
                          <label htmlFor="order-greeting-from">Dari (From):</label>
                          <input
                            id="order-greeting-from"
                            type="text"
                            placeholder="Contoh: Keluarga Budi Santoso"
                            value={form.greetingFrom}
                            onChange={(e) => setForm({ ...form, greetingFrom: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="form-group-custom">
                        <label htmlFor="order-greeting-msg">Pesan Ucapan Hangat:</label>
                        <textarea
                          id="order-greeting-msg"
                          rows="2"
                          placeholder="Tulis ucapan selamat hari raya, ulang tahun, atau doa terbaik Anda..."
                          value={form.greetingMessage}
                          onChange={(e) => setForm({ ...form, greetingMessage: e.target.value })}
                        ></textarea>
                      </div>
                    </div>
                  )}

                  <div className="form-group-custom">
                    <label htmlFor="order-additional-notes">Catatan Tambahan untuk Dapur</label>
                    <input
                      id="order-additional-notes"
                      type="text"
                      placeholder="Contoh: Roti jangan dipotong, minta dipisah..."
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    />
                  </div>
                </div>

                {/* KOLOM KANAN: RINGKASAN KERANJANG */}
                <div className="modal-right-column">
                  <div className="cart-summary-box">
                    <h4>Ringkasan Pesanan ({cartCount} item)</h4>

                    <div className="cart-items-scroll">
                      {cart.map((item) => (
                        <div key={item.id} className="cart-summary-item">
                          <div className="cart-item-title-col">
                            <strong>{item.nama}</strong>
                            <small>{formatRupiah(item.harga)} x {item.qty}</small>
                          </div>
                          <div className="cart-item-controls">
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="cart-mini-btn"
                              aria-label={`Kurangi ${item.nama}`}
                            >
                              <Minus size={11} />
                            </button>
                            <span className="cart-mini-qty">{item.qty}</span>
                            <button
                              type="button"
                              onClick={() => addToCart(item)}
                              className="cart-mini-btn"
                              aria-label={`Tambah ${item.nama}`}
                            >
                              <Plus size={11} />
                            </button>
                            <span className="cart-item-subtotal">
                              {formatRupiah(item.harga * item.qty)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="cart-calculation-rows">
                      <div className="calc-row">
                        <span>Subtotal Produk</span>
                        <strong>{formatRupiah(subtotalCart)}</strong>
                      </div>

                      <div className="calc-row">
                        <span>Biaya Pengantaran</span>
                        <span>{deliveryFee === 0 ? 'GRATIS' : formatRupiah(deliveryFee)}</span>
                      </div>

                      <div className="calc-row total-row">
                        <span>Estimasi Total</span>
                        <strong className="total-accent">{formatRupiah(totalCart)}</strong>
                      </div>
                    </div>

                    {submitError && (
                      <div className="checkout-error-pill">
                        <AlertCircle size={14} />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="simulation-notice-pill">
                      <Info size={14} />
                      <span>
                        Pesanan akan tercatat di sistem ERP dan struk belanja dapat langsung dikirimkan ke WhatsApp dapur kami.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting || cart.length === 0}
                      className="submit-checkout-btn"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="spin-animate" />
                          <span>Menyimpan Pesanan ke Sistem...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 size={18} />
                          <span>Konfirmasi & Buat Pesanan</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 6. RECEIPT MODAL (DEUX STYLED STRUK BELANJA) */}
      {showReceiptModal && latestOrder && (
        <div
          className="modal-backdrop-custom"
          onClick={() => setShowReceiptModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="receipt-modal-title"
        >
          <div className="receipt-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="receipt-scrollable-body">
              <button
                type="button"
                className="receipt-close-x-btn"
                onClick={() => setShowReceiptModal(false)}
                aria-label="Tutup Struk"
              >
                <X size={18} />
              </button>

              {/* RECEIPT HEADER */}
              <div className="receipt-top-header">
                <span className="receipt-brand-logo">erles bakery</span>
                <p className="receipt-subtitle">Dapur Artisan Roti & Donat Malang</p>
                <div className="receipt-stamp-badge" id="receipt-modal-title">
                  {latestOrder.isSynced ? 'PESANAN BERHASIL TERCATAT' : 'STRUK PESANAN DISIAPKAN'}
                </div>
              </div>

              {/* ORDER CODE STRIP */}
              <div className="receipt-meta-box">
                <div className="receipt-meta-row">
                  <span>No. Pesanan:</span>
                  <strong>#{latestOrder.code}</strong>
                </div>
                <div className="receipt-meta-row">
                  <span>Waktu:</span>
                  <span>{latestOrder.createdAt}</span>
                </div>
                <div className="receipt-meta-row">
                  <span>Pemesan:</span>
                  <strong>{latestOrder.customer.name} ({latestOrder.customer.phone})</strong>
                </div>
                <div className="receipt-meta-row">
                  <span>Metode:</span>
                  <span>
                    {latestOrder.customer.deliveryMethod === 'delivery'
                      ? `Diantar Kurir (+${formatRupiah(SITE_CONFIG.deliveryFee)})`
                      : 'Ambil Sendiri di Dapur'}
                  </span>
                </div>
                <div className="receipt-meta-row">
                  <span>Jadwal:</span>
                  <span>{latestOrder.customer.deliveryDate} jam {latestOrder.customer.deliveryTime} WIB</span>
                </div>
                <div className="receipt-meta-row">
                  <span>Alamat:</span>
                  <span className="receipt-addr">{latestOrder.customer.address}</span>
                </div>
              </div>

              {/* ITEMS TABLE */}
              <div className="receipt-items-section">
                <div className="receipt-items-head">
                  <span>Produk</span>
                  <span style={{ textAlign: 'right' }}>Total</span>
                </div>
                <div className="receipt-items-body">
                  {latestOrder.items.map((it, idx) => (
                    <div key={idx} className="receipt-item-row">
                      <div>
                        <strong>{it.nama}</strong>
                        <small>{formatRupiah(it.harga)} x {it.qty}</small>
                      </div>
                      <span className="receipt-row-val">{formatRupiah(it.harga * it.qty)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TOTALS */}
              <div className="receipt-totals-box">
                <div className="receipt-total-line">
                  <span>Subtotal</span>
                  <span>{formatRupiah(latestOrder.subtotal)}</span>
                </div>
                <div className="receipt-total-line">
                  <span>Ongkir</span>
                  <span>{latestOrder.deliveryFee === 0 ? 'Rp 0' : formatRupiah(latestOrder.deliveryFee)}</span>
                </div>
                <div className="receipt-total-line grand-total">
                  <span>TOTAL PEMBAYARAN</span>
                  <strong>{formatRupiah(latestOrder.total)}</strong>
                </div>
              </div>

              {/* QRIS OFFICIAL PAYMENT BOX */}
              {latestOrder.customer.paymentMethod === 'qris' && (
                <div className="receipt-qris-card">
                  <div className="receipt-qris-top">
                    <div className="receipt-qris-pill">
                      <QrCode size={15} />
                      <span>PEMBAYARAN QRIS RESMI</span>
                    </div>
                    <span className="receipt-qris-nmid">NMID: {SITE_CONFIG.qrisNmid}</span>
                  </div>

                  <div className="receipt-qris-body">
                    <div className="receipt-qris-img-wrap">
                      <img
                        src="/qris.jpg"
                        alt="QRIS Pembayaran Erles Bakery"
                        className="receipt-qris-img"
                      />
                    </div>
                    <div className="receipt-qris-info">
                      <strong className="receipt-merchant-name">ERLES BAKERY</strong>
                      <div className="receipt-qris-amount-box">
                        <span>Nominal Bayar:</span>
                        <strong className="receipt-amount-val">{formatRupiah(latestOrder.total)}</strong>
                      </div>
                      <p className="receipt-qris-step-guide">
                        Scan QRIS dengan aplikasi m-Banking atau e-wallet apa saja. Simpan bukti transfer dan sertakan saat mengirim pesanan ke WhatsApp admin.
                      </p>
                      <a
                        href="/qris.jpg"
                        target="_blank"
                        rel="noreferrer"
                        className="receipt-qris-expand-link"
                      >
                        <ExternalLink size={13} />
                        <span>Buka QRIS Layar Penuh</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* KARTU UCAPAN JIKA ADA */}
              {latestOrder.greetingCard && (
                <div className="receipt-greeting-box">
                  <div className="greeting-preview-header">
                    <Gift size={14} />
                    <span>Kartu Ucapan Hampers:</span>
                  </div>
                  <p><strong>Untuk:</strong> {latestOrder.greetingCard.to}</p>
                  <p><strong>Dari:</strong> {latestOrder.greetingCard.from}</p>
                  <blockquote className="greeting-quote">"{latestOrder.greetingCard.message}"</blockquote>
                </div>
              )}

              {/* RECEIPT FOOTER ACTIONS */}
              <div className="receipt-action-buttons">
                <button
                  type="button"
                  className="receipt-btn-whatsapp"
                  onClick={handleSendToWhatsApp}
                >
                  <MessageCircle size={18} />
                  <span>Kirim Konfirmasi ke WhatsApp Admin</span>
                </button>

                <div className="receipt-btn-duo">
                  <button
                    type="button"
                    className="receipt-btn-outline"
                    onClick={handleCopyOrderText}
                  >
                    {isCopied ? <Check size={16} /> : <Copy size={16} />}
                    <span>{isCopied ? 'Tersalin ke Clipboard!' : 'Salin Teks Struk'}</span>
                  </button>

                  <button
                    type="button"
                    className="receipt-btn-close"
                    onClick={() => setShowReceiptModal(false)}
                  >
                    Selesai & Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 7. ORDER HISTORY MODAL */}
      {showHistoryModal && (
        <div
          className="modal-backdrop-custom"
          onClick={() => setShowHistoryModal(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="history-modal-title"
        >
          <div className="history-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-custom">
              <div className="modal-title-with-icon">
                <div className="modal-icon-badge">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 id="history-modal-title">Riwayat Pesanan Anda</h3>
                  <p>Daftar pesanan yang pernah Anda buat di browser ini.</p>
                </div>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setShowHistoryModal(false)}
                aria-label="Tutup riwayat"
              >
                <X size={20} />
              </button>
            </div>

            <div className="history-list-scroll">
              {orderHistory.map((item, idx) => (
                <div key={idx} className="history-item-card">
                  <div className="history-item-top">
                    <div>
                      <strong>#{item.code}</strong>
                      <small>{item.createdAt}</small>
                    </div>
                    <span className="history-item-total">{formatRupiah(item.total)}</span>
                  </div>

                  <p className="history-customer-info">
                    {item.customer.name} • {item.customer.deliveryMethod === 'delivery' ? 'Antar Kurir' : 'Ambil di Toko'} • {item.items.length} macam produk
                  </p>

                  <div className="history-actions-row">
                    <button
                      type="button"
                      className="history-reopen-btn"
                      onClick={() => {
                        setLatestOrder(item);
                        setShowHistoryModal(false);
                        setShowReceiptModal(true);
                      }}
                    >
                      Buka Struk Lengkap
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
