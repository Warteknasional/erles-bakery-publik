import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PesananPage from '../pages/PesananPage';
import TentangPage from '../pages/TentangPage';
import KontakPage from '../pages/KontakPage';
import LacakPesananPage from '../pages/LacakPesananPage';
import BlogDetailPage from '../pages/BlogDetailPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pesanan" element={<PesananPage />} />
      <Route path="/tentang" element={<TentangPage />} />
      <Route path="/kontak" element={<KontakPage />} />
      <Route path="/lacak-pesanan" element={<LacakPesananPage />} />
      <Route path="/lacak" element={<LacakPesananPage />} />
      <Route path="/blog/:slug" element={<BlogDetailPage />} />
    </Routes>
  );
}
