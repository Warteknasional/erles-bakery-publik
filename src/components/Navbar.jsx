import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="deux-top-bar">
      <div className="deux-nav-wrapper">
        {/* DESKTOP CENTERED PILL NAVBAR */}
        <nav className="deux-nav-pill">
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
            <img src="/logo.jpg" alt="Erles Bakery" className="deux-nav-logo-badge" />
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
              href="https://wa.me/6285717224420"
              target="_blank"
              rel="noreferrer"
              className="deux-nav-item highlight"
            >
              KONTAK
            </a>
          </div>

          {/* MOBILE TOGGLE (INSIDE PILL ON SMALL SCREENS) */}
          <button
            type="button"
            className="deux-burger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigasi"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="deux-drawer-overlay" onClick={() => setMobileOpen(false)}>
          <div
            className="deux-drawer-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="deux-drawer-header">
              <Link to="/" onClick={() => setMobileOpen(false)} className="deux-drawer-brand-link">
                <img src="/logo.jpg" alt="Erles Bakery" className="deux-drawer-logo-badge" />
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
                onClick={() => setMobileOpen(false)}
                className="deux-drawer-cta"
              >
                <ShoppingBag size={18} />
                <span>Pesan Online Sekarang</span>
                <ArrowRight size={16} />
              </Link>
              <p className="deux-drawer-phone">
                WhatsApp: <strong>+62 857-1722-4420</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
