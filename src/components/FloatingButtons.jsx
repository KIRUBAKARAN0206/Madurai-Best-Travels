import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER_RAW } from '../data/taxiData';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3 pointer-events-auto">
      {/* WhatsApp Floating Circle Button (Icon Only) */}
      <a
        href={`https://wa.me/${PHONE_NUMBER_RAW}?text=Hi%20Madurai%20Best%20Taxi,%20I%20want%20to%20book%20a%20cab`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="WhatsApp Booking"
        title="Chat on WhatsApp"
      >
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border border-white"></span>
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>

      {/* Direct Call Floating Circle Button (Icon Only) */}
      <a
        href={`tel:${PHONE_NUMBER_RAW}`}
        className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 shadow-xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Call Now"
        title="Call Madurai Best Travels"
      >
        <Phone className="w-6 h-6 fill-slate-950 text-slate-950" />
      </a>
    </div>
  );
}
