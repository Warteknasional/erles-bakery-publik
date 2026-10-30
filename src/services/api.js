import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
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

export default api;
