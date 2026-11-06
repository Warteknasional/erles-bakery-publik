import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PesananPage from '../pages/PesananPage';
import TentangPage from '../pages/TentangPage';
import KontakPage from '../pages/KontakPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pesanan" element={<PesananPage />} />
      <Route path="/tentang" element={<TentangPage />} />
      <Route path="/kontak" element={<KontakPage />} />
    </Routes>
  );
}
