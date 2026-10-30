import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollManager />
        <div className="app-shell">
          <Navbar />

          <main className="app-main">
            <AppRoutes />
          </main>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
