import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="app-shell">
        <Navbar />

        <main className="app-main">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
