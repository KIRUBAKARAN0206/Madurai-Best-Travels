import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Car } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { PHONE_NUMBER, PHONE_NUMBER_RAW } from '../data/taxiData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Home -> About Us -> Routes -> Vehicles & Tariff -> Tour Packages -> Contact
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Routes', path: '/routes' },
    { name: 'Vehicles & Tariff', path: '/vehicles' },
    { name: 'Tour Packages', path: '/packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo - strictly on one line, never shrinks */}
          <Link to="/" className="shrink-0 flex items-center mr-4">
            <BrandLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-7 whitespace-nowrap">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-amber-400 after:transition-all ${
                    isActive
                      ? 'text-amber-500 after:w-full font-black'
                      : 'text-slate-700 hover:text-amber-500 after:w-0 hover:after:w-full'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Compact Nav for Laptops (lg to xl) */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-4 whitespace-nowrap">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs font-bold transition-colors ${
                    isActive ? 'text-amber-500 font-black' : 'text-slate-700 hover:text-amber-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Dedicated Book a Cab CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/book"
              className="bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black px-5 py-2.5 rounded-xl shadow-md flex items-center space-x-2 text-sm transition-all active:scale-95 hover:shadow-lg"
            >
              <Car className="w-4 h-4 fill-slate-950" />
              <span>Book a Cab</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              to="/book"
              className="bg-amber-400 text-slate-950 px-3.5 py-2 rounded-xl text-xs font-black flex items-center space-x-1 shadow-sm"
            >
              <Car className="w-3.5 h-3.5 fill-slate-950" />
              <span>Book</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-xl text-base font-bold transition-colors ${
                  isActive ? 'bg-amber-50 text-amber-600' : 'text-slate-800 hover:bg-slate-50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-2 border-t border-slate-200 flex flex-col space-y-2">
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black py-3.5 rounded-xl shadow"
            >
              <Car className="w-4 h-4 fill-slate-950" />
              <span>Book a Cab Online</span>
            </Link>
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="w-full flex items-center justify-center space-x-2 bg-slate-900 text-amber-400 font-black py-3.5 rounded-xl shadow"
            >
              <Phone className="w-4 h-4 fill-amber-400" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER_RAW}?text=Hi%20Madurai%20Best%20Travels,%20I%20want%20to%20book%20a%20cab`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
