import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Search,
  Package,
  Clock,
  CheckCircle2,
  Truck,
  Store,
  ChefHat,
  Flame,
  Sparkles,
  AlertCircle,
  ArrowRight,
  Copy,
  Check,
  MessageCircle,
  Gift,
  MapPin,
  User,
  Phone,
  RefreshCw,
} from 'lucide-react';
import { orderService } from '../services/api';
import { SITE_CONFIG } from '../config/site';

// Status steps definition
const ORDER_STEPS = [
  {
    key: 'pending',
    label: 'Pesanan Diterima',
    sublabel: 'Menunggu konfirmasi',
    icon: Clock,
    color: '#D97706',
    description: 'Pesanan berhasil masuk ke sistem antrean dapur Erles Bakery.',
  },
  {
    key: 'confirmed',
    label: 'Dikonfirmasi',
    sublabel: 'Pembayaran terverifikasi',
    icon: CheckCircle2,
    color: '#059669',
    description: 'Pembayaran telah dicek & pesanan dijadwalkan untuk diproduksi.',
  },
  {
    key: 'processing',
    label: 'Sedang Dipanggang',
    sublabel: 'Artisan oven baking',
    icon: Flame,
    color: '#CC4A3B',
    description: 'Adonan difermentasi dengan ragi alami dan dipanggang segar di oven dapur.',
  },
  {
    key: 'ready',
    label: 'Siap Diambil / Diantar',
    sublabel: 'Quality check selesai',
    icon: Package,
    color: '#2563EB',
    description: 'Roti selesai dipanggang, lolos quality check, dan dikemas higienis dengan box artisan.',
  },
  {
    key: 'completed',
    label: 'Pesanan Selesai',
    sublabel: 'Telah diterima customer',
    icon: Sparkles,
    color: '#15803D',
    description: 'Pesanan telah diterima. Selamat menikmati kehangatan sajian Erles Bakery!',
  },
];

// Helper to normalize status key
function normalizeStatusKey(rawStatus) {
  if (!rawStatus) return 'pending';
  const s = String(rawStatus).toLowerCase();
  if (s.includes('selesai') || s.includes('completed')) return 'completed';
  if (s.includes('siap') || s.includes('ready')) return 'ready';
  if (s.includes('proses') || s.includes('panggang') || s.includes('processing') || s.includes('baking')) return 'processing';
  if (s.includes('konfirm') || s.includes('confirmed')) return 'confirmed';
  if (s.includes('batal') || s.includes('cancel')) return 'cancelled';
  return 'pending';
}

function getStepIndex(normalizedKey) {
  const idx = ORDER_STEPS.findIndex((step) => step.key === normalizedKey);
  return idx >= 0 ? idx : 0;
}

// Built-in Demo Orders for instant testing
const DEMO_ORDERS = {
  'ERL-LIVE-001': {
    code: 'ERL-LIVE-001',
    status: 'processing',
    statusText: 'Sedang Dipanggang di Oven Batu',
    createdAt: 'Hari ini, 08:30 WIB',
    estimatedReady: 'Hari ini, 11:00 WIB',
    customer: {
      name: 'Nabila Safitri',
      phone: '+62 812-3456-7890',
      deliveryMethod: 'delivery',
      address: 'Jl. Ijen No. 42, Klojen, Kota Malang (Antar Kurir Dapur)',
      deliveryDate: 'Hari ini',
      deliveryTime: '11:00 - 12:00 WIB',
      paymentMethod: 'qris',
      notes: 'Tolong beri label hangat & jangan dipipihkan rotinya.',
    },
    items: [
      {
        id: 101,
        name: 'Artisan Country Sourdough',
        nama: 'Artisan Country Sourdough',
        price: 38000,
        harga: 38000,
        qty: 2,
        image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&auto=format&fit=crop&q=80',
      },
      {
        id: 102,
        name: 'Donat Kentang Klasik Gula Halus',
        nama: 'Donat Kentang Klasik Gula Halus',
        price: 8000,
        harga: 8000,
        qty: 6,
        image: 'https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?w=400&auto=format&fit=crop&q=80',
      },
    ],
    subtotal: 124000,
    deliveryFee: 15000,
    total: 139000,
    greetingCard: null,
    isDemo: true,
  },
  'ERL-LIVE-002': {
    code: 'ERL-LIVE-002',
    status: 'ready',
    statusText: 'Siap Diambil di Dapur Vinolia',
    createdAt: 'Kemarin, 14:15 WIB',
    estimatedReady: 'Siap diambil sekarang',
    customer: {
      name: 'Bima Arya Perkasa',
      phone: '+62 858-9900-1122',
      deliveryMethod: 'pickup',
      address: 'Ambil di Toko (Jl. Vinolia No. 25B, Lowokwaru, Malang)',
      deliveryDate: 'Hari ini',
      deliveryTime: '10:00 - 15:00 WIB',
      paymentMethod: 'qris',
      notes: 'Akan diambil sekitar jam 10 pagi dengan motor Vario hitam.',
    },
    items: [
      {
        id: 201,
        name: 'Hampers Signature Erles Artisan',
        nama: 'Hampers Signature Erles Artisan',
        price: 185000,
        harga: 185000,
        qty: 1,
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80',
      },
    ],
    subtotal: 185000,
    deliveryFee: 0,
    total: 185000,
    greetingCard: {
      to: 'Keluarga Bpk. Hendrawan',
      from: 'Bima & Rekan Kerja',
      message: 'Selamat menikmati hampers artisanal Erles Bakery. Semoga berkah dan sehat selalu sekeluarga!',
    },
    isDemo: true,
  },
  'ERL-LIVE-003': {
    code: 'ERL-LIVE-003',
    status: 'completed',
    statusText: 'Pesanan Telah Diterima dengan Selamat',
    createdAt: '04 Nov 2026, 09:00 WIB',
    estimatedReady: 'Selesai 04 Nov 2026, 12:45 WIB',
    customer: {
      name: 'dr. Sarah Amanda',
      phone: '+62 813-7788-9900',
      deliveryMethod: 'delivery',
      address: 'Klinik Vinolia Medika, Jl. Vinolia No. 10, Lowokwaru, Malang',
      deliveryDate: '04 Nov 2026',
      deliveryTime: 'Siang',
      paymentMethod: 'transfer',
      notes: 'Titipkan ke resepsionis atas nama Dokter Sarah.',
    },
    items: [
      {
        id: 301,
        name: 'Cranberry Walnut Batard',
        nama: 'Cranberry Walnut Batard',
        price: 45000,
        harga: 45000,
        qty: 2,
        image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&auto=format&fit=crop&q=80',
      },
      {
        id: 302,
        name: 'Donat Cokelat Meses Vintage',
        nama: 'Donat Cokelat Meses Vintage',
        price: 9000,
        harga: 9000,
        qty: 10,
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&auto=format&fit=crop&q=80',
      },
    ],
    subtotal: 180000,
    deliveryFee: 12000,
    total: 192000,
    greetingCard: null,
    isDemo: true,
  },
};

export default function LacakPesananPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCode = searchParams.get('kode');

  const [searchQuery, setSearchQuery] = useState(urlCode || '');
  const [activeOrder, setActiveOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // Lazy initialize recent orders from localStorage
  const [recentOrders] = useState(() => {
    try {
      const stored = localStorage.getItem('erles_orders_history');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // Ignore localStorage read errors
    }
    return [];
  });

  const performSearch = useCallback(async (codeToSearch) => {
    const cleanCode = (codeToSearch || '').trim().toUpperCase();
    if (!cleanCode) {
      setErrorMessage('Silakan masukkan nomor pesanan Anda.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    // 1. Check in DEMO_ORDERS
    if (DEMO_ORDERS[cleanCode]) {
      setActiveOrder(DEMO_ORDERS[cleanCode]);
      setLoading(false);
      return;
    }

    // 2. Check in LocalStorage history
    try {
      const stored = localStorage.getItem('erles_orders_history');
      if (stored) {
        const parsed = JSON.parse(stored);
        const found = parsed.find(
          (o) =>
            o.code?.toUpperCase() === cleanCode ||
            o.kode_pesanan?.toUpperCase() === cleanCode
        );
        if (found) {
          const normalized = {
            ...found,
            status: found.status || 'confirmed',
            statusText: found.status ? `Status: ${found.status}` : 'Menunggu Konfirmasi Dapur',
            items: found.items || [],
            customer: found.customer || {
              name: found.customer_name,
              phone: found.customer_phone,
              address: found.alamat,
              notes: found.catatan,
              deliveryMethod: found.deliveryMethod || 'delivery',
            },
            isLocal: true,
          };
          setActiveOrder(normalized);
          setLoading(false);
          return;
        }
      }
    } catch {
      // Ignore
    }

    // 3. Try Real API backend
    try {
      const res = await orderService.track(cleanCode);
      const data = res?.data || res;
      if (data && (data.kode_pesanan || data.id)) {
        const normalized = {
          code: data.kode_pesanan || `#${data.id}`,
          status: data.status || 'pending',
          statusText: `Status Pesanan: ${data.status}`,
          createdAt: data.created_at || 'Baru Saja',
          customer: {
            name: data.customer_name || 'Pelanggan Setia',
            phone: data.customer_phone || '-',
            address: data.alamat || 'Ambil di Toko',
            notes: data.catatan || '-',
            deliveryMethod: data.alamat ? 'delivery' : 'pickup',
            deliveryDate: data.tanggal_ambil || 'Sesuai Jadwal',
            paymentMethod: data.payment_status === 'paid' ? 'Lunas' : 'Belum Lunas',
          },
          items: (data.items || []).map((it) => ({
            id: it.id,
            name: it.product?.nama || it.nama_produk || 'Roti Artisan',
            price: Number(it.unit_price || it.harga || 0),
            qty: it.qty || 1,
            image: it.product?.gambar_url || 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&auto=format&fit=crop&q=80',
          })),
          subtotal: Number(data.total_price || 0),
          deliveryFee: 0,
          total: Number(data.total_price || 0),
          greetingCard: null,
          isFromApi: true,
        };
        setActiveOrder(normalized);
        setLoading(false);
        return;
      }
    } catch {
      // Fallback
    }

    // Not found
    setLoading(false);
    setErrorMessage(
      `Nomor pesanan "${cleanCode}" tidak ditemukan. Pastikan nomor yang dimasukkan sesuai dengan yang tertera pada struk belanja Anda.`
    );
  }, []);

  // Sync with searchParams on change
  useEffect(() => {
    let ignore = false;
    const code = searchParams.get('kode') || 'ERL-LIVE-001';
    (async () => {
      if (!ignore) {
        await performSearch(code);
      }
    })();
    return () => {
      ignore = true;
    };
  }, [searchParams, performSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchParams({ kode: searchQuery.trim().toUpperCase() });
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const formatRupiah = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(val || 0);
  };

  const currentStatusKey = normalizeStatusKey(activeOrder?.status);
  const currentStepIdx = getStepIndex(currentStatusKey);
  const activeStepObj = ORDER_STEPS[currentStepIdx];

  // Helper for WhatsApp asking about status
  const waOrderLink = () => {
    if (!activeOrder) return `https://wa.me/${SITE_CONFIG.whatsappRaw}`;
    const text = encodeURIComponent(
      `Halo Dapur Erles Bakery! Saya ingin mengecek progres pesanan saya: *#${activeOrder.code}* atas nama *${activeOrder.customer?.name}*. Apakah bisa dibantu? Terima kasih!`
    );
    return `https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${text}`;
  };

  return (
    <div className="deux-tracking-page">
      {/* 1. HERO HEADER */}
      <section className="tracking-hero">
        <div className="deux-container">
          <div className="tracking-hero-badge">
            <Flame size={14} className="tracking-badge-flame" />
            <span>LIVE ORDER TRACKER • DAPUR ARTISAN ERLES BAKERY</span>
          </div>

          <h1 className="tracking-hero-title">Pelacakan Pesanan</h1>

          <p className="tracking-hero-subtitle">
            Pantau setiap tahapan roti & donat Anda secara real-time. Mulai dari
            proses pencampuran adonan, proofing ragi alami, pemanggangan di oven batu,
            hingga siap dijemput atau diantar hangat ke pintu Anda.
          </p>

          {/* SEARCH INPUT BAR */}
          <form className="tracking-search-bar" onSubmit={handleSubmit}>
            <div className="tracking-input-wrap">
              <Search size={20} className="tracking-search-icon" />
              <input
                type="text"
                placeholder="Masukkan Nomor Pesanan (misal: ERL-LIVE-001 atau dari struk)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Nomor Pesanan"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="tracking-input-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Bersihkan"
                >
                  ×
                </button>
              )}
            </div>

            <button
              type="submit"
              className="tracking-submit-btn"
              disabled={loading}
            >
              {loading ? (
                <>
                  <RefreshCw size={16} className="animate-spin" />
                  <span>Mencari...</span>
                </>
              ) : (
                <>
                  <span>Lacak Pesanan</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          {/* DEMO SHORTCUTS & RECENT ORDERS PILLS */}
          <div className="tracking-quick-demos">
            <span className="quick-demos-label">
              <Sparkles size={14} /> Coba Demo Status:
            </span>
            <div className="quick-demos-pills">
              <button
                type="button"
                className={`demo-pill ${searchQuery === 'ERL-LIVE-001' ? 'active' : ''}`}
                onClick={() => {
                  setSearchQuery('ERL-LIVE-001');
                  setSearchParams({ kode: 'ERL-LIVE-001' });
                }}
              >
                🔥 Sedang Dipanggang (#ERL-001)
              </button>
              <button
                type="button"
                className={`demo-pill ${searchQuery === 'ERL-LIVE-002' ? 'active' : ''}`}
                onClick={() => {
                  setSearchQuery('ERL-LIVE-002');
                  setSearchParams({ kode: 'ERL-LIVE-002' });
                }}
              >
                📦 Siap Diambil (#ERL-002)
              </button>
              <button
                type="button"
                className={`demo-pill ${searchQuery === 'ERL-LIVE-003' ? 'active' : ''}`}
                onClick={() => {
                  setSearchQuery('ERL-LIVE-003');
                  setSearchParams({ kode: 'ERL-LIVE-003' });
                }}
              >
                ✨ Selesai Diterima (#ERL-003)
              </button>
            </div>
          </div>

          {/* RECENT ORDERS PILLS IF ANY IN LOCALSTORAGE */}
          {recentOrders.length > 0 && (
            <div className="tracking-recent-strip">
              <span className="recent-strip-label">
                <Clock size={13} /> Pesanan Terbaru Anda:
              </span>
              <div className="recent-strip-list">
                {recentOrders.slice(0, 4).map((rec, i) => (
                  <button
                    key={rec.code || i}
                    type="button"
                    className="recent-order-chip"
                    onClick={() => {
                      setSearchQuery(rec.code);
                      setSearchParams({ kode: rec.code });
                    }}
                  >
                    <span>#{rec.code}</span>
                    <span className="recent-order-chip-meta">
                      ({rec.customer?.name || 'Pesanan'})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. ERROR STATE */}
      {errorMessage && !loading && (
        <section className="tracking-error-section">
          <div className="deux-container">
            <div className="tracking-error-card">
              <AlertCircle size={28} className="error-icon" />
              <div className="error-body">
                <h4>Pesanan Tidak Ditemukan</h4>
                <p>{errorMessage}</p>
                <div className="error-actions">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                      `Halo Admin Erles Bakery, saya ingin menanyakan pesanan dengan kode: ${searchQuery}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="error-btn-wa"
                  >
                    <MessageCircle size={16} />
                    <span>Tanya Admin via WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('ERL-LIVE-001');
                      setSearchParams({ kode: 'ERL-LIVE-001' });
                    }}
                    className="error-btn-demo"
                  >
                    Lihat Contoh Demo Pelacakan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. ACTIVE ORDER DETAILS & STEPPER */}
      {activeOrder && !loading && (
        <section className="tracking-content-section">
          <div className="deux-container">
            {/* TOP CARD: ORDER ID & CURRENT STATUS BANNER */}
            <div className="tracking-main-card">
              <div className="tracking-order-head">
                <div className="order-id-group">
                  <span className="order-head-eyebrow">NOMOR PESANAN RESMI</span>
                  <div className="order-head-id-row">
                    <h2 className="order-code-display">#{activeOrder.code}</h2>
                    <button
                      type="button"
                      className="order-copy-chip"
                      onClick={() => handleCopyCode(activeOrder.code)}
                      title="Salin Kode Pesanan"
                    >
                      {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedCode ? 'Disalin' : 'Salin'}</span>
                    </button>
                    {activeOrder.isDemo && (
                      <span className="order-demo-tag">SIMULASI DEMO</span>
                    )}
                  </div>
                  <span className="order-created-time">
                    Waktu Pemesanan: <strong>{activeOrder.createdAt}</strong>
                  </span>
                </div>

                <div className="order-status-badge-box">
                  <span className="status-badge-pill" style={{ borderColor: activeStepObj.color }}>
                    <span
                      className="status-pulse-dot"
                      style={{ backgroundColor: activeStepObj.color }}
                    />
                    <strong style={{ color: activeStepObj.color }}>
                      {activeStepObj.label.toUpperCase()}
                    </strong>
                  </span>
                  <p className="status-live-subtext">
                    {activeOrder.statusText || activeStepObj.description}
                  </p>
                </div>
              </div>

              {/* TIMELINE STEPPER (5 STAGES) */}
              <div className="tracking-stepper-wrap">
                <h3 className="stepper-section-title">
                  <ChefHat size={18} /> Progres Dapur & Pengiriman
                </h3>

                <div className="tracking-stepper">
                  {/* PROGRESS BAR BACKGROUND & FILL */}
                  <div className="stepper-track-bar">
                    <div
                      className="stepper-fill-bar"
                      style={{
                        width: `${(currentStepIdx / (ORDER_STEPS.length - 1)) * 100}%`,
                      }}
                    />
                  </div>

                  {ORDER_STEPS.map((step, idx) => {
                    const isPassed = idx < currentStepIdx;
                    const isCurrent = idx === currentStepIdx;
                    const StepIcon = step.icon;

                    return (
                      <div
                        key={step.key}
                        className={`stepper-node ${isPassed ? 'passed' : ''} ${
                          isCurrent ? 'current' : ''
                        }`}
                      >
                        <div
                          className="stepper-node-bubble"
                          style={{
                            borderColor: isCurrent || isPassed ? step.color : '#E5D8CC',
                            backgroundColor: isPassed
                              ? step.color
                              : isCurrent
                              ? '#FFF9F0'
                              : '#FAF5EE',
                            color: isPassed ? '#FFF' : isCurrent ? step.color : '#8C7765',
                          }}
                        >
                          <StepIcon size={18} />
                        </div>
                        <div className="stepper-node-text">
                          <strong className="stepper-node-title">{step.label}</strong>
                          <span className="stepper-node-sub">{step.sublabel}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* CURRENT STAGE DESCRIPTION BOX */}
                <div className="current-stage-info-box">
                  <div className="stage-info-icon" style={{ backgroundColor: `${activeStepObj.color}15`, color: activeStepObj.color }}>
                    <activeStepObj.icon size={22} />
                  </div>
                  <div className="stage-info-content">
                    <h4>{activeStepObj.label}</h4>
                    <p>{activeOrder.statusText || activeStepObj.description}</p>
                    {activeOrder.estimatedReady && (
                      <span className="stage-est-pill">
                        <Clock size={13} /> Estimasi: {activeOrder.estimatedReady}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* DETAILS GRID: ITEMS ON LEFT, CUSTOMER & SUMMARY ON RIGHT */}
              <div className="tracking-details-grid">
                {/* LEFT: ORDER ITEMS */}
                <div className="tracking-items-col">
                  <h4 className="detail-col-title">
                    <Package size={17} /> Rincian Menu Dipesan (
                    {activeOrder.items?.reduce((acc, it) => acc + (it.qty || 1), 0)} Pcs)
                  </h4>

                  <div className="tracking-items-table">
                    {activeOrder.items && activeOrder.items.length > 0 ? (
                      activeOrder.items.map((it, idx) => {
                        const name = it.name || it.nama || 'Roti Artisan';
                        const price = it.price || it.harga || 0;
                        const qty = it.qty || 1;
                        const totalItem = price * qty;
                        return (
                          <div key={it.id || idx} className="tracking-item-row">
                            {it.image && (
                              <img
                                src={it.image}
                                alt={name}
                                className="tracking-item-thumb"
                              />
                            )}
                            <div className="tracking-item-info">
                              <span className="tracking-item-name">{name}</span>
                              <span className="tracking-item-qtyprice">
                                {qty}x @ {formatRupiah(price)}
                              </span>
                            </div>
                            <span className="tracking-item-subtotal">
                              {formatRupiah(totalItem)}
                            </span>
                          </div>
                        );
                      })
                    ) : (
                      <p className="no-items-text">Rincian produk tidak tersedia.</p>
                    )}
                  </div>

                  {/* KARTU UCAPAN JIKA HAMPERS */}
                  {activeOrder.greetingCard && (
                    <div className="tracking-greeting-card">
                      <div className="greeting-head">
                        <Gift size={15} />
                        <strong>Kartu Ucapan Pesan Spesial</strong>
                      </div>
                      <div className="greeting-body">
                        <p className="greeting-to">
                          Untuk: <strong>{activeOrder.greetingCard.to}</strong>
                        </p>
                        <blockquote className="greeting-quote">
                          &ldquo;{activeOrder.greetingCard.message}&rdquo;
                        </blockquote>
                        <p className="greeting-from">
                          Dari: <strong>{activeOrder.greetingCard.from}</strong>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* CATATAN TAMBAHAN */}
                  {activeOrder.customer?.notes && (
                    <div className="tracking-notes-box">
                      <strong>Catatan Dapur:</strong>
                      <p>{activeOrder.customer.notes}</p>
                    </div>
                  )}
                </div>

                {/* RIGHT: CUSTOMER & PAYMENT SUMMARY */}
                <div className="tracking-summary-col">
                  {/* CUSTOMER CARD */}
                  <div className="tracking-customer-box">
                    <h4 className="detail-col-title">
                      <User size={17} /> Informasi Pengiriman
                    </h4>
                    <div className="customer-info-list">
                      <div className="customer-info-item">
                        <span className="label">Nama Pemesan:</span>
                        <strong>{activeOrder.customer?.name || '-'}</strong>
                      </div>
                      <div className="customer-info-item">
                        <span className="label">No. WhatsApp:</span>
                        <span>{activeOrder.customer?.phone || '-'}</span>
                      </div>
                      <div className="customer-info-item">
                        <span className="label">Metode:</span>
                        <span className="delivery-type-tag">
                          {activeOrder.customer?.deliveryMethod === 'pickup' ? (
                            <>
                              <Store size={13} /> Ambil Sendiri di Toko
                            </>
                          ) : (
                            <>
                              <Truck size={13} /> Pengantaran Kurir Dapur
                            </>
                          )}
                        </span>
                      </div>
                      <div className="customer-info-item full">
                        <span className="label">Alamat / Lokasi:</span>
                        <div className="address-val">
                          <MapPin size={14} className="address-pin-icon" />
                          <span>{activeOrder.customer?.address || SITE_CONFIG.address}</span>
                        </div>
                      </div>
                      {activeOrder.customer?.deliveryDate && (
                        <div className="customer-info-item">
                          <span className="label">Jadwal Pengambilan:</span>
                          <span>
                            {activeOrder.customer.deliveryDate}{' '}
                            {activeOrder.customer.deliveryTime ? `(${activeOrder.customer.deliveryTime})` : ''}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* PAYMENT CALCULATION BOX */}
                  <div className="tracking-payment-box">
                    <h4 className="detail-col-title">
                      <CheckCircle2 size={17} /> Rincian Pembayaran
                    </h4>
                    <div className="payment-calc-rows">
                      <div className="calc-row">
                        <span>Subtotal Produk</span>
                        <span>{formatRupiah(activeOrder.subtotal || activeOrder.total)}</span>
                      </div>
                      <div className="calc-row">
                        <span>Biaya Pengantaran</span>
                        <span>
                          {activeOrder.deliveryFee && activeOrder.deliveryFee > 0
                            ? formatRupiah(activeOrder.deliveryFee)
                            : 'GRATIS / Pick-up'}
                        </span>
                      </div>
                      <div className="calc-divider" />
                      <div className="calc-row total">
                        <strong>Total Pembayaran</strong>
                        <strong className="calc-total-val">
                          {formatRupiah(activeOrder.total)}
                        </strong>
                      </div>
                    </div>

                    <div className="payment-status-strip">
                      <span className="payment-method-lbl">
                        Metode: <strong>QRIS Standar Nasional</strong>
                      </span>
                      <span className="payment-status-pill paid">
                        <Check size={12} /> Terverifikasi
                      </span>
                    </div>
                  </div>

                  {/* QUICK ACTIONS BUTTONS */}
                  <div className="tracking-actions-wrap">
                    <a
                      href={waOrderLink()}
                      target="_blank"
                      rel="noreferrer"
                      className="track-wa-btn"
                    >
                      <MessageCircle size={18} />
                      <span>Tanya Status ke WhatsApp Dapur</span>
                    </a>

                    <Link to="/pesanan" className="track-order-again-btn">
                      <span>Pesan Roti Hangat Lainnya</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. PRE-FOOTER ASSISTANCE BANNER */}
      <section className="tracking-help-banner">
        <div className="deux-container">
          <div className="tracking-help-card">
            <div className="help-text">
              <span className="help-eyebrow">BANTUAN & KONFIRMASI LANGSUNG</span>
              <h3>Ada Kendala dengan Pesanan Anda?</h3>
              <p>
                Dapur artisan kami selalu siap membantu setiap pertanyaan mengenai pesanan,
                permintaan khusus, atau penjadwalan hampers Anda.
              </p>
            </div>
            <div className="help-buttons">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappRaw}?text=${encodeURIComponent(
                  'Halo Erles Bakery, saya butuh bantuan terkait pesanan saya.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="help-wa-btn"
              >
                <Phone size={16} />
                <span>WhatsApp: {SITE_CONFIG.phone}</span>
              </a>
              <Link to="/kontak" className="help-contact-btn">
                <span>Pusat Layanan Kontak →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
