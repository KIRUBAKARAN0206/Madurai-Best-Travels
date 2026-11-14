import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoutesPage from './pages/RoutesPage';
import VehiclesPage from './pages/VehiclesPage';
import TourPackagesPage from './pages/TourPackagesPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

export default function App() {
  const [lang] = useState('en');

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-ambient-mesh text-slate-800 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/about" element={<AboutPage lang={lang} />} />
            <Route path="/routes" element={<RoutesPage lang={lang} />} />
            <Route path="/vehicles" element={<VehiclesPage lang={lang} />} />
            <Route path="/packages" element={<TourPackagesPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/booking" element={<BookingPage />} />
            {/* Fallback redirect */}
            <Route path="/calculator" element={<VehiclesPage lang={lang} />} />
          </Routes>
        </main>

        <Footer lang={lang} />
        <FloatingButtons />
      </div>
    </Router>
  );
}
