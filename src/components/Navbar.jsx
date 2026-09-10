import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Info, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/', label: 'Beranda', icon: Home },
  { to: '/pesanan', label: 'Pesan Sekarang', icon: ShoppingBag },
  { to: '/tentang', label: 'Tentang Kami', icon: Info },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #F1F5F9', padding: '0 24px',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between', height: '64px',
      }}>
        <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '24px' }}>🍞</span>
          <span style={{ fontSize: '18px', fontWeight: '700', color: '#92400E' }}>Erles Bakery</span>
        </NavLink>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '8px' }}>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px',
                borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: '500',
                color: isActive ? '#92400E' : '#64748B',
                background: isActive ? '#FEF3C7' : 'transparent',
                transition: 'all 0.15s',
              })}
            >
              <item.icon size={16} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
