import axios from 'axios';

const isLocalhost =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname.startsWith('192.168.') ||
    window.location.hostname.startsWith('10.') ||
    window.location.hostname.endsWith('.local'));

const api = axios.create({
  baseURL: isLocalhost
    ? 'http://localhost:8000/api'
    : import.meta.env.VITE_API_URL || import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

export const productService = {
  async getAll(params = {}) {
    const res = await api.get('/products', { params: { all: true, ...params } });
    return res.data;
  },
  async getCategories() {
    const res = await api.get('/categories');
    return res.data;
  },
};

export const orderService = {
  async create(orderData) {
    const res = await api.post('/orders', orderData);
    return res.data;
  },
  async track(idOrCode) {
    const res = await api.get(`/orders/track/${idOrCode}`);
    return res.data;
  },
};

export const customerService = {
  async lookupByPhone(phone) {
    try {
      const res = await api.get('/customers/lookup', { params: { phone } });
      return res.data;
    } catch {
      return null;
    }
  },
};

export default api;
