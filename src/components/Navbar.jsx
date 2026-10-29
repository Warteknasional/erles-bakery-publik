import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

const logoUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAVlyEgWtpuj1LwQbi_XQd5fu4Ii2nGknZ1Qm2LKybnrrj6McmJqNPPfExWhH4GO8pCr5NOmQBF1F5GS7hZgpj6Qr-e3ZWa12E43XKiu3o3UEaoEGviBsj7h1OJVAkcm9SafHYCPUyku7u-IQbsTbWPxL4dAQDvGU5M200jaP_xDk6J_BG6lRlBxBvAe0yMRcQ-ci4518oKZrVIWrYpWYRF2uCHjRCxiuOCEd5WqBh9V0zt343tqVxoOg';

const navItems = [
  { to: '/', label: 'Beranda' },
  { to: '/pesanan', label: 'Katalog & Pesan' },
  { to: '/tentang', label: 'Tentang Kami' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="deux-header">
      <div className="deux-navbar">
        {/* BRAND LOGO */}
        <Link to="/" className="deux-brand">
          <img
            src={logoUrl}
            alt="Erles Bakery"
            className="deux-logo-img"
          />
          <span className="deux-brand-text">erles bakery</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="deux-nav-desktop">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `deux-nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="deux-nav-actions">
          <Link to="/pesanan" className="deux-cta-button">
            <span>Pesan Sekarang</span>
            <ArrowUpRight size={15} />
          </Link>

          <button
            type="button"
            className="deux-mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu navigasi"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="deux-mobile-drawer">
          <div className="deux-mobile-badge">
            <Sparkles size={13} />
            <span>Freshly Baked Every Morning in Malang</span>
          </div>

          <nav className="deux-mobile-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `deux-mobile-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/pesanan"
            onClick={() => setMobileOpen(false)}
            className="deux-mobile-cta"
          >
            <span>Pesan Roti & Hampers Sekarang</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
