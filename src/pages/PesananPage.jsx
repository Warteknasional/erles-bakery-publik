import { useState } from 'react';
import {
  ShoppingBag,
  X,
  Search,
  Plus,
  Minus,
  ShoppingCart,
} from 'lucide-react';

const dummyProducts = [
  {
    id: 1,
    nama: 'Roti Tawar Premium',
    harga: 25000,
    kategori: 'Roti',
    stok: 50,
    deskripsi:
      'Tekstur sangat lembut dan wangi susu segar, cocok untuk santapan keluarga setiap hari.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCD_uknovKEHZ9EoHPpe-xkLdcsADeFVDG0knPyxCM1PvQOY8jFARPun8nTd7afhy_H01n0XPOr5EwBK2VmE41YSUJRys-B9NGyVHlK_dM_ZBqnwlgtvVJNIvqrVYEtCneLaIPBiAdj7peXbDxu30svoCxnuQIGrIEWhZ8_QwbfpN_wJl0KdiNaVxqOSgAVEwpxM0_-fwZyXpf3RBjGVl6ZtQnXeRGDbbawSRWcv-VBxHHoaLxqsbpI4g',
  },
  {
    id: 2,
    nama: 'Butter Croissant',
    harga: 18000,
    kategori: 'Roti',
    stok: 30,
    deskripsi:
      'Flaky, buttery dengan lapisan renyah khas Prancis dan aroma mentega murni.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBAGsqjIfAEamDCqyscuQDII_wUjawjN597Ybf2qouDd9f9HTmVtBtePAAAylNWKSkz_BKsi5KI6Px7M_CEZLD-v1iXiCkyE40sq9wbkjCZJysyVljop5MtuMr-w-9OcR2OXww3luQYwLdTC3p_Hc8DPuoh6JYdsyN_sPgPMTn9EgXjfCX_d9vE3ovl3V-1QOKugjvUXS3KZrI3CzYQlon2Ot5VG2cs9G7SVjl3Lnlo__Ay30kynNCcLg',
  },
  {
    id: 3,
    nama: 'Brownies Coklat',
    harga: 35000,
    kategori: 'Kue',
    stok: 20,
    deskripsi:
      'Brownies coklat lembut dan fudgy dengan rasa coklat premium.',
  },
  {
    id: 4,
    nama: 'Red Velvet Cake',
    harga: 150000,
    kategori: 'Kue',
    stok: 10,
    deskripsi:
      'Kue lembut dengan cream cheese frosting yang manis dan segar.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcapKvZmb2_DRCqVo4cYbOPMpf4ne9PwvSXN68WwJ-Mlj1XTFh4zt_eGVrqMypyu3j_v0_PbOov5yyi-tRisd2MS09cofgxIsNzFd0bblJeDas-zm9UPXoyT0KrDbD__HMSjJrfLqrSZg6FYvdY5k1Qt35SbHLc7qvjxcCxiglgF731I7nxmPiOO10-toTKIb-W17OQyGARmJteqXwYB0I00MD729CVp2IRTU8rQ-Yqw7HmyqH-3qGDw',
  },
  {
    id: 5,
    nama: 'Hampers Lebaran Deluxe',
    harga: 350000,
    kategori: 'Hampers',
    stok: 15,
    deskripsi:
      'Paket hampers premium berisi aneka kue pilihan dengan kemasan elegan.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA699ixzAfxDLv2kn9VG6y1inXtUwNodFyNwvoyY7dNs9vkyQ6UHfQdU0m6UxhD-E-AottAqOgCpw1kE20Vp7ti4qaTo2Jz-bRmobWHdcP8JfE6QDKnaUh_YRvY5XpIRcIvIj2tK7r4gxYeBdQEeAnXL9yN664dSlI0q4GrYrpbxoMS7mF6g7vqjd-KLLivygHgboOPIK0VO17q8QySmmy9k0iSjA7ax8DV6nSwQsCq2ob8QnPCgp5hbw',
  },
  {
    id: 6,
    nama: 'Hampers Wedding Classic',
    harga: 275000,
    kategori: 'Hampers',
    stok: 25,
    deskripsi:
      'Hampers pernikahan elegan dengan pilihan kue favorit untuk hari spesial.',
  },
  {
    id: 7,
    nama: 'Hampers Birthday Joy',
    harga: 200000,
    kategori: 'Hampers',
    stok: 20,
    deskripsi:
      'Paket ulang tahun berisi kue dan cookies pilihan dalam kemasan istimewa.',
  },
  {
    id: 8,
    nama: 'Donat Gula',
    harga: 8000,
    kategori: 'Roti',
    stok: 40,
    deskripsi:
      'Donat empuk dengan taburan gula halus dan tekstur lembut.',
  },
  {
    id: 9,
    nama: 'Kue Lapis Legit',
    harga: 180000,
    kategori: 'Kue',
    stok: 8,
    deskripsi:
      'Lapis legit tradisional dengan aroma rempah dan rasa premium.',
  },
];

const categories = ['Semua', 'Roti', 'Kue', 'Hampers'];

const getProductEmoji = (kategori) => {
  if (kategori === 'Hampers') return '🎁';
  if (kategori === 'Kue') return '🎂';
  return '🍞';
};

const getCategoryClass = (kategori) => {
  if (kategori === 'Hampers') return 'hamper';
  if (kategori === 'Kue') return 'cake';
  return 'bread';
};

export default function PesananPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([]);

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    catatan: '',
  });

  const filteredProducts = dummyProducts.filter((product) => {
    const matchCategory =
      selectedCategory === 'Semua' ||
      product.kategori === selectedCategory;

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
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );
      }

      return [
        ...previousCart,
        {
          ...product,
          qty: 1,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  const totalCart = cart.reduce(
    (total, item) => total + item.harga * item.qty,
    0
  );

  const handleSubmitOrder = (event) => {
    event.preventDefault();

    alert(
      `Pesanan berhasil dibuat!\n\n` +
        `Nama: ${form.name}\n` +
        `WhatsApp: ${form.phone}\n` +
        `Alamat: ${form.address}\n` +
        `Total: ${formatRupiah(totalCart)}\n\n` +
        `(Demo: pesanan belum terhubung ke backend)`
    );

    setShowModal(false);
    setCart([]);

    setForm({
      name: '',
      phone: '',
      address: '',
      catatan: '',
    });
  };

  return (
    <div className="order-page">

      {/* HERO PESANAN */}
      <section className="order-hero">
        <div className="order-hero-glow order-glow-one"></div>
        <div className="order-hero-glow order-glow-two"></div>

        <div className="order-hero-content">
          <div className="order-mini-badge">
            <ShoppingBag size={14} />
            <span>Katalog Erles Bakery</span>
          </div>

          <h1>
            Temukan Favoritmu,
            <br />
            <em>Pesan dengan Mudah</em>
          </h1>

          <p>
            Pilih roti, kue, donat, dan hampers favorit Anda.
            Tidak perlu membuat akun, cukup pilih produk lalu
            lengkapi data pemesanan.
          </p>
        </div>
      </section>


      {/* KATALOG */}
      <section className="order-container">

        <div className="order-section-heading">
          <div>
            <span className="order-small-label">
              🍞 Fresh From The Oven
            </span>

            <h2>
              Katalog Produk
            </h2>

            <p>
              Pilih produk favorit dan tambahkan ke keranjang.
            </p>
          </div>

          <div className="order-product-count">
            {filteredProducts.length} Produk
          </div>
        </div>


        {/* SEARCH & FILTER */}
        <div className="order-toolbar">

          <div className="order-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Cari roti, kue, atau hampers..."
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
            />
          </div>

          <div className="order-categories">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() =>
                  setSelectedCategory(category)
                }
                className={
                  selectedCategory === category
                    ? 'order-category active'
                    : 'order-category'
                }
              >
                {category}
              </button>
            ))}
          </div>

        </div>


        {/* PRODUCT GRID */}
        <div className="order-product-grid">

          {filteredProducts.map((product) => {
            const itemInCart = cart.find(
              (item) => item.id === product.id
            );

            return (
              <article
                className="order-product-card"
                key={product.id}
              >

                <div className="order-product-image">

                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.nama}
                    />
                  ) : (
                    <div
                      className={`order-image-placeholder ${getCategoryClass(
                        product.kategori
                      )}`}
                    >
                      <span>
                        {getProductEmoji(product.kategori)}
                      </span>
                    </div>
                  )}

                  <span
                    className={`order-product-category ${getCategoryClass(
                      product.kategori
                    )}`}
                  >
                    {product.kategori}
                  </span>

                  <span className="order-product-emoji">
                    {getProductEmoji(product.kategori)}
                  </span>

                </div>


                <div className="order-product-content">

                  <div>
                    <div className="order-stock">
                      Stok {product.stok}
                    </div>

                    <h3>
                      {product.nama}
                    </h3>

                    <p>
                      {product.deskripsi}
                    </p>
                  </div>


                  <div className="order-product-bottom">

                    <div className="order-price">
                      <small>Harga</small>

                      <strong>
                        {formatRupiah(product.harga)}
                      </strong>
                    </div>


                    {itemInCart ? (
                      <div className="quantity-control">

                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(product.id)
                          }
                        >
                          <Minus size={14} />
                        </button>

                        <span>
                          {itemInCart.qty}
                        </span>

                        <button
                          type="button"
                          className="quantity-plus"
                          onClick={() =>
                            addToCart(product)
                          }
                        >
                          <Plus size={14} />
                        </button>

                      </div>
                    ) : (
                      <button
                        type="button"
                        className="add-product-button"
                        onClick={() =>
                          addToCart(product)
                        }
                      >
                        <Plus size={14} />
                        Tambah
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

            <p>
              Coba gunakan kata pencarian atau kategori lainnya.
            </p>
          </div>
        )}

      </section>

      {/* FLOATING CART */}
      {cart.length > 0 && (
        <button
          type="button"
          className="floating-cart-button"
          onClick={() => setShowModal(true)}
        >

          <span className="floating-cart-icon">
            <ShoppingCart size={20} />

            <span className="cart-counter">
              {cartCount}
            </span>
          </span>

          <span className="floating-cart-text">
            <small>Keranjang</small>

            <strong>
              {formatRupiah(totalCart)}
            </strong>
          </span>

        </button>
      )}


      {/* MODAL CHECKOUT */}
      {showModal && (
        <div
          className="order-modal-overlay"
          onClick={() => setShowModal(false)}
        >

          <div
            className="order-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="order-modal-header">

              <div>
                <span className="modal-small-label">
                  Keranjang Anda
                </span>

                <h2>
                  Form Pemesanan
                </h2>
              </div>

              <button
                type="button"
                className="close-modal-button"
                onClick={() => setShowModal(false)}
              >
                <X size={20} />
              </button>

            </div>


            {/* CART SUMMARY */}
            <div className="order-summary">

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="order-summary-item"
                >

                  <div className="summary-product">

                    <div className="summary-product-icon">
                      {getProductEmoji(item.kategori)}
                    </div>

                    <div>
                      <strong>
                        {item.nama}
                      </strong>

                      <span>
                        {formatRupiah(item.harga)}
                        {' '}× {item.qty}
                      </span>
                    </div>

                  </div>

                  <strong>
                    {formatRupiah(
                      item.harga * item.qty
                    )}
                  </strong>

                </div>
              ))}


              <div className="order-summary-total">

                <span>
                  Total Pesanan
                </span>

                <strong>
                  {formatRupiah(totalCart)}
                </strong>

              </div>

            </div>


            {/* FORM */}
            <form
              className="checkout-form"
              onSubmit={handleSubmitOrder}
            >

              <div className="form-group">
                <label>
                  Nama Lengkap
                </label>

                <input
                  type="text"
                  required
                  placeholder="Masukkan nama lengkap"
                  value={form.name}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      name: event.target.value,
                    })
                  }
                />
              </div>


              <div className="form-group">
                <label>
                  Nomor WhatsApp
                </label>

                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={form.phone}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      phone: event.target.value,
                    })
                  }
                />
              </div>


              <div className="form-group">
                <label>
                  Alamat Pengiriman
                </label>

                <textarea
                  required
                  rows="3"
                  placeholder="Masukkan alamat lengkap"
                  value={form.address}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      address: event.target.value,
                    })
                  }
                />
              </div>


              <div className="form-group">
                <label>
                  Catatan
                  <span> (Opsional)</span>
                </label>

                <textarea
                  rows="3"
                  placeholder="Contoh: tulis ucapan di kotak..."
                  value={form.catatan}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      catatan: event.target.value,
                    })
                  }
                />
              </div>


              <button
                type="submit"
                className="submit-order-button"
              >
                <ShoppingBag size={17} />

                Buat Pesanan
              </button>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}