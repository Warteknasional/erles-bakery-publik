import { useState, useEffect } from 'react';
import { CartContext } from './cartContextInstance';

const STORAGE_KEY = 'erles_cart';

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage errors in private mode
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          nama: product.nama,
          harga: Number(product.harga),
          kategori: product.kategori,
          image: product.image || product.gambar,
          isHampers: Boolean(product.isHampers || product.kategori === 'Hampers'),
          hampersBadge: product.hampersBadge,
          qty: 1,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.qty, 0);
  const subtotalCart = cart.reduce(
    (total, item) => total + item.harga * item.qty,
    0
  );
  const hasHampersInCart = cart.some(
    (item) => item.kategori === 'Hampers' || item.isHampers
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        subtotalCart,
        hasHampersInCart,
        addToCart,
        removeFromCart,
        clearCart,
        isCheckoutOpen,
        setIsCheckoutOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
