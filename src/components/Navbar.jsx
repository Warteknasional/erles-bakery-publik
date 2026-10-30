import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/useCart';
import { SITE_CONFIG } from '../config/site';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, setIsCheckoutOpen } = useCart();

  // Close drawer on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="deux-top-bar">
      <div className="deux-nav-wrapper">
        {/* DESKTOP CENTERED PILL NAVBAR */}
        <nav className="deux-nav-pill" aria-label="Navigasi Utama">
          {/* LEFT LINKS */}
          <div className="deux-nav-side left">
            <NavLink
              to="/tentang"
              className={({ isActive }) =>
                `deux-nav-item ${isActive ? 'active' : ''}`
              }
            >
              TENTANG
            </NavLink>
            <NavLink
              to="/pesanan"
              className={({ isActive }) =>
                `deux-nav-item ${isActive ? 'active' : ''}`
              }
            >
              MENU
            </NavLink>
          </div>

          {/* CENTER BRAND LOGO WITH EMBLEM */}
          <Link to="/" className="deux-nav-logo" aria-label="Erles Bakery Beranda">
            <img src="/logo.jpg" alt={SITE_CONFIG.name} className="deux-nav-logo-badge" />
            <span className="deux-logo-text">erles</span>
          </Link>

          {/* RIGHT LINKS */}
          <div className="deux-nav-side right">
            <NavLink
              to="/pesanan?kategori=Hampers"
              className={({ isActive }) =>
                `deux-nav-item ${isActive ? 'active' : ''}`
              }
            >
              HAMPERS
            </NavLink>
            <a
              href={SITE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="deux-nav-item highlight"
            >
              KONTAK
            </a>

            {/* CART TRIGGER BUTTON (DEUX STYLE) */}
            <Link
              to="/pesanan"
              onClick={() => {
                if (cartCount > 0) setIsCheckoutOpen(true);
              }}
              className="deux-nav-cart-pill"
              aria-label={`Keranjang Belanja: ${cartCount} item`}
              title="Buka Keranjang Belanja"
            >
              <ShoppingBag size={15} />
              {cartCount > 0 && (
                <span className="deux-nav-cart-badge">{cartCount}</span>
              )}
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="deux-nav-mobile-actions">
            <Link
              to="/pesanan"
              onClick={() => {
                if (cartCount > 0) setIsCheckoutOpen(true);
              }}
              className="deux-nav-cart-pill mobile"
              aria-label={`Keranjang Belanja: ${cartCount} item`}
            >
              <ShoppingBag size={16} />
              {cartCount > 0 && (
                <span className="deux-nav-cart-badge">{cartCount}</span>
              )}
            </Link>

            <button
              type="button"
              className="deux-burger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigasi"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div
          className="deux-drawer-overlay"
          onClick={() => setMobileOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Menu Navigasi Mobile"
        >
          <div
            className="deux-drawer-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="deux-drawer-header">
              <Link to="/" onClick={() => setMobileOpen(false)} className="deux-drawer-brand-link">
                <img src="/logo.jpg" alt={SITE_CONFIG.name} className="deux-drawer-logo-badge" />
                <span className="deux-drawer-brand">erles</span>
              </Link>
              <button
                type="button"
                className="deux-drawer-close"
                onClick={() => setMobileOpen(false)}
                aria-label="Tutup menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="deux-drawer-links">
              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `deux-drawer-link ${isActive ? 'active' : ''}`
                }
              >
                BERANDA
              </NavLink>
              <NavLink
                to="/pesanan"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `deux-drawer-link ${isActive ? 'active' : ''}`
                }
              >
                MENU & KATALOG
              </NavLink>
              <NavLink
                to="/pesanan?kategori=Hampers"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `deux-drawer-link ${isActive ? 'active' : ''}`
                }
              >
                HAMPERS SPESIAL
              </NavLink>
              <NavLink
                to="/tentang"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `deux-drawer-link ${isActive ? 'active' : ''}`
                }
              >
                TENTANG KAMI
              </NavLink>
            </div>

            <div className="deux-drawer-footer">
              <Link
                to="/pesanan"
                onClick={() => {
                  setMobileOpen(false);
                  if (cartCount > 0) setIsCheckoutOpen(true);
                }}
                className="deux-drawer-cta"
              >
                <ShoppingBag size={18} />
                <span>Pesan Online {cartCount > 0 ? `(${cartCount} item)` : 'Sekarang'}</span>
                <ArrowRight size={16} />
              </Link>
              <p className="deux-drawer-phone">
                WhatsApp: <strong>{SITE_CONFIG.phone}</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
