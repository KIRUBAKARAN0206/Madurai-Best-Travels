import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp, ShieldCheck, Clock, Award } from 'lucide-react';
import { PHONE_NUMBER, PHONE_NUMBER_RAW, EMAIL_ADDRESS, ADDRESS } from '../data/taxiData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm relative overflow-hidden">
      
      {/* Top CTA Ribbon - Vibrant Brand Amber Gradient */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 py-10 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Need an Immediate Cab in Madurai or Outstation?
            </h3>
            <p className="text-slate-900 font-semibold text-sm sm:text-base mt-1">
              Guaranteed on-time doorstep pickup at transparent, lowest per-km rates.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="bg-slate-950 text-amber-400 hover:bg-slate-900 px-6 py-3.5 rounded-xl font-black flex items-center space-x-2 shadow-xl transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 fill-amber-400" />
              <span>Call: {PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER_RAW}?text=Hi%20Madurai%20Best%20Travels,%20I%20want%20to%20book%20a%20cab`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3.5 rounded-xl font-black flex items-center space-x-2 shadow-xl transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer - 3 Clean Columns (Popular Routes Removed) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & About (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link to="/" className="inline-block py-1">
              <img
                src="/assets/logo.png"
                alt="Madurai Best Travels - Travel with Trust"
                className="h-16 sm:h-20 w-auto object-contain bg-white/5 rounded-2xl p-1.5 border border-white/10"
              />
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Madurai's trusted tourist taxi and outstation cab provider offering safe temple pilgrimages, hill station holidays, round trips, and prompt airport transfers across South India.
            </p>

            {/* Quality Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-amber-400 text-xs font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 Doorstep Service</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 text-xs font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Sanitized AC Cabs</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-yellow-400 text-xs font-bold">
                <Award className="w-3.5 h-3.5" />
                <span>Fixed Transparent Tariff</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-black text-xs tracking-wider uppercase border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/book" className="text-amber-400 font-bold hover:text-white transition-colors flex items-center space-x-1.5">
                  <span className="text-amber-400 font-black">★</span>
                  <span>Book a Cab Online</span>
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-amber-500 font-bold">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-amber-500 font-bold">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/routes" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-amber-500 font-bold">›</span>
                  <span>Popular Outstation Routes</span>
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-amber-500 font-bold">›</span>
                  <span>Vehicles & Tariff Chart</span>
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-amber-500 font-bold">›</span>
                  <span>Holiday & Temple Packages</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center space-x-1.5">
                  <span className="text-amber-500 font-bold">›</span>
                  <span>Contact Desk</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Head Office & Booking Desk (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-black text-xs tracking-wider uppercase border-b border-slate-800 pb-2">
              Head Office & Booking Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start space-x-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/80">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">{ADDRESS}</span>
              </div>

              <div className="flex items-center space-x-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/80">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <span className="text-[11px] text-slate-500 block font-bold uppercase">Direct Hotline (24/7):</span>
                  <a href={`tel:${PHONE_NUMBER_RAW}`} className="text-amber-400 font-black text-sm hover:underline">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 bg-slate-900/60 p-3.5 rounded-2xl border border-slate-800/80">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="truncate">
                  <span className="text-[11px] text-slate-500 block font-bold uppercase">Email Support:</span>
                  <a href={`mailto:${EMAIL_ADDRESS}`} className="text-slate-300 hover:text-amber-400 truncate block">
                    {EMAIL_ADDRESS}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Madurai Best Travels. All rights reserved. Designed for comfort, safety & pilgrimage.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-slate-400 hover:text-amber-400 transition-colors font-semibold cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
