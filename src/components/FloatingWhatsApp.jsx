import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Kontak Cepat WhatsApp" className="floating-wa-wrapper">
      <a
        href="https://wa.me/6282145345270?text=Halo%20Erles%20Bakery,%20saya%20ingin%20tanya%20menu%20dan%20pesan"
        target="_blank"
        rel="noreferrer"
        className="floating-wa-btn"
        aria-label="Tanya pemilik langsung melalui WhatsApp 0821-4534-5270"
      >
        <MessageCircle size={22} className="floating-wa-icon" />
        <span className="floating-wa-label">Tanya Pemilik</span>
      </a>
    </aside>
  );
}
