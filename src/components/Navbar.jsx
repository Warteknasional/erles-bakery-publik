import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, UserRound } from 'lucide-react';

const logoUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAVlyEgWtpuj1LwQbi_XQd5fu4Ii2nGknZ1Qm2LKybnrrj6McmJqNPPfExWhH4GO8pCr5NOmQBF1F5GS7hZgpj6Qr-e3ZWa12E43XKiu3o3UEaoEGviBsj7h1OJVAkcm9SafHYCPUyku7u-IQbsTbWPxL4dAQDvGU5M200jaP_xDk6J_BG6lRlBxBvAe0yMRcQ-ci4518oKZrVIWrYpWYRF2uCHjRCxiuOCEd5WqBh9V0zt343tqVxoOg';

const navItems = [
  { to: '/', label: 'Beranda' },
  { to: '/pesanan', label: 'Pesan Sekarang' },
  { to: '/tentang', label: 'Tentang Kami' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="erles-header">
      <div className="erles-navbar">
        <Link to="/" className="erles-brand">
          <img
            src={logoUrl}
            alt="Erles Bakery"
            className="erles-logo"
          />

          <span className="erles-brand-name">
            Erles Bakery <span>🍞</span>
          </span>
        </Link>

        <nav className="erles-nav-desktop">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `erles-nav-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="erles-nav-actions">
          <Link to="/pesanan" className="erles-quick-button">
            Pesan Cepat
          </Link>

          <div className="erles-user-circle">
            <UserRound size={17} />
          </div>

          <button
            type="button"
            className="erles-mobile-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Buka menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="erles-mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `erles-mobile-link ${isActive ? 'active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}