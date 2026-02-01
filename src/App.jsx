import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import KiteNavbar from './components/layout/Navbar';
import Home from './pages/home/Home';
import Branding from './pages/branding/Branding';
import Creative from './pages/creative/Creative';
import Marketing from './pages/marketing/Marketing';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import Footer from './components/layout/Footer';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <KiteNavbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}