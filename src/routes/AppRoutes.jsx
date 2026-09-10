import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import PesananPage from '../pages/PesananPage';
import TentangPage from '../pages/TentangPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pesanan" element={<PesananPage />} />
      <Route path="/tentang" element={<TentangPage />} />
    </Routes>
  );
}
