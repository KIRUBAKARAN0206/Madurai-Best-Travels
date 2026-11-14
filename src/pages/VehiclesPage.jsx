import React from 'react';
import PageBanner from '../components/PageBanner';
import Fleet from '../components/Fleet';
import { PHONE_NUMBER_RAW } from '../data/taxiData';
import { Sparkles, MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

const PRASANNA_TARIFF_TABLE = [
  {
    type: "Sedan AC (Swift Dzire / Etios)",
    perDay: "₹1,500/day",
    runningKm: "₹10/km",
    minKm: "250 km",
    kmCharges: "₹13/km",
    theme: "amber",
    borderColor: "border-amber-400",
    headerBg: "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950",
    badge: "Most Popular",
    notes: "Tollgate, parking, permit charges borne by customer"
  },
  {
    type: "Innova AC / Prime SUV",
    perDay: "₹2,200/day",
    runningKm: "₹12/km",
    minKm: "300 km",
    kmCharges: "₹17/km",
    theme: "emerald",
    borderColor: "border-emerald-500",
    headerBg: "bg-gradient-to-r from-emerald-600 to-teal-500 text-white",
    badge: "Family Favorite",
    notes: "Tollgate, parking, permit charges borne by customer"
  },
  {
    type: "Tempo Traveller AC (12-18 Seater)",
    perDay: "₹2,700/day",
    runningKm: "₹17/km",
    minKm: "350 km",
    kmCharges: "₹22/km",
    theme: "indigo",
    borderColor: "border-indigo-500",
    headerBg: "bg-gradient-to-r from-indigo-600 to-blue-600 text-white",
    badge: "Large Group",
    notes: "Tollgate, parking, permit charges borne by customer"
  }
];

export default function VehiclesPage({ lang }) {
  const handleQuickBook = (planName) => {
    const text = encodeURIComponent(`Hi Madurai Best Travels, I am interested in booking the *${planName}*. Please let me know cab availability.`);
    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-ambient-mesh min-h-screen text-slate-800 relative overflow-hidden">
      <PageBanner
        title={lang === 'ta' ? 'எங்கள் வாகனங்கள் & கட்டணம்' : 'Our Fleet & Transparent Tariffs'}
        subtitle={lang === 'ta' ? 'அனைத்து வகை கார்களுக்கும் வெளிப்படையான கட்டணம். மறைமுக கட்டணங்கள் ஏதுமில்லை.' : 'Choose from our wide range of spotlessly clean sedans, SUVs, and luxury Tempo Travellers at fixed rates.'}
        badge="Best Rates Guaranteed"
        bgImage="/assets/unique/highway_banner_hd.jpg"
      />

      {/* 3-Tier Per Day Rent & Km Charges Table with Vibrant Theming */}
      <section className="pt-20 pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>Transparent Rental Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Per-Day Rent & Running Kilometer Tariffs
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full my-4" />
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Ideal for family local sightseeing, temple circuits, marriages, and flexible outstation journeys across South India.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 sm:grid-cols-1">
          {PRASANNA_TARIFF_TABLE.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border-2 ${item.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between`}
            >
              <div>
                <div className={`${item.headerBg} p-5 text-center flex flex-col items-center justify-center relative shadow-sm`}>
                  <span className="text-[10px] uppercase font-black tracking-widest bg-slate-950/20 text-white px-2.5 py-0.5 rounded-full mb-1">
                    {item.badge}
                  </span>
                  <h3 className="font-black text-lg sm:text-xl drop-shadow-xs">{item.type}</h3>
                </div>

                <div className="p-7 space-y-4 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 font-bold">Per Day Base Rent:</span>
                    <span className="font-black text-slate-900 text-xl">{item.perDay}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 font-bold">Running Km Charge:</span>
                    <span className="font-black text-slate-800 text-base">{item.runningKm}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 font-bold">Minimum Distance:</span>
                    <span className="text-amber-600 font-black text-base">{item.minKm}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-slate-600 font-bold">Outstation Km Rate:</span>
                    <span className="text-amber-600 font-black text-xl">{item.kmCharges}</span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-500 leading-relaxed">
                    *{item.notes}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 bg-transparent text-center">
                <button
                  onClick={() => handleQuickBook(item.type)}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-400 hover:to-yellow-400 hover:text-slate-950 text-white font-black py-3.5 rounded-xl transition-all duration-300 text-sm shadow-md active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Plan on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Fleet Section with Switcher */}
      <Fleet lang={lang} />
    </div>
  );
}
