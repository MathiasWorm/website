import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

