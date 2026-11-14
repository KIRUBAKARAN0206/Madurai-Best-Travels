import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import { MessageCircle, Search, Sparkles, Navigation } from 'lucide-react';
import { POPULAR_ROUTES, PHONE_NUMBER_RAW } from '../data/taxiData';

export default function RoutesPage({ lang }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = POPULAR_ROUTES.filter((r) =>
    r.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBook = (route) => {
    const text = `*Booking Request - Madurai Best Travels*
Route: ${route.from} to ${route.to}
---------------------------------------
🛣️ Distance: ${route.distance} (~${route.duration})
💰 Starting Fare: ${route.price}
🚗 Sedan: ${route.sedanPrice} | SUV: ${route.suvPrice} | Innova: ${route.innovaPrice}
---------------------------------------
Please confirm cab availability.`;

    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="bg-ambient-mesh min-h-screen text-slate-800 relative overflow-hidden">
      <PageBanner
        title={lang === 'ta' ? 'பிரபலமான வழிகள்' : 'Popular Outstation Routes'}
        subtitle={lang === 'ta' ? 'மதுரையிலிருந்து தமிழகத்தின் முக்கிய சுற்றுலா மற்றும் ஆன்மீக தளங்களுக்கு நம்பகமான டிராவல்ஸ்.' : 'One-way drops & round-trips from Madurai to Chennai, Bangalore, Coimbatore, Salem, Rameswaram, Kanyakumari and more.'}
        badge="Direct Cabs"
        bgImage="/assets/unique/rameswaram_banner_hd.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>Search Outstation Destinations</span>
          </div>
          <div className="relative shadow-lg rounded-2xl">
            <Search className="w-5 h-5 text-amber-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search destination (e.g. Chennai, Bangalore, Rameswaram)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur-sm border-2 border-slate-200/90 rounded-2xl text-sm font-bold text-slate-900 shadow-sm focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((route, idx) => {
            const badges = [
              { label: '🔥 Top Seller', color: 'bg-amber-500 text-slate-950' },
              { label: '🏛️ Sacred Tour', color: 'bg-rose-500 text-white' },
              { label: '🌊 Coastal Route', color: 'bg-blue-600 text-white' },
              { label: '💼 Commercial City', color: 'bg-emerald-600 text-white' }
            ];
            const badge = badges[idx % badges.length];

            return (
              <div
                key={route.id}
                className="group bg-white/95 backdrop-blur-sm border-2 border-slate-200/90 hover:border-amber-400 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-2"
              >
                <div>
                  {/* Photo - Bright & Fully Visible */}
                  <div className="relative h-60 overflow-hidden bg-slate-900">
                    <img
                      src={route.image}
                      alt={route.to}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-black uppercase px-3 py-1 rounded-lg shadow-md ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] font-black uppercase text-amber-400 bg-slate-950/80 px-2.5 py-0.5 rounded border border-amber-400/30">
                        {route.distance} • ~{route.duration}
                      </span>
                      <h3 className="text-2xl font-black mt-1 drop-shadow group-hover:text-amber-300 transition-colors">
                        Madurai ➔ {route.to}
                      </h3>
                    </div>
                  </div>

                  {/* Rates & Highlights */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                      <div>
                        <span className="text-xs text-slate-500 font-bold uppercase block">Starting Fare</span>
                        <span className="text-2xl font-black text-slate-900">{route.price}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-600 font-bold block">{route.distance}</span>
                        <span className="text-xs text-amber-600 font-black block">⏱️ ~{route.duration}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 bg-gradient-to-br from-amber-50/50 to-slate-50 p-3 rounded-2xl border border-amber-200/60 text-center text-xs">
                      <div className="bg-white/80 p-1.5 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-500 block font-bold">Sedan</span>
                        <span className="font-black text-slate-900">{route.sedanPrice}</span>
                      </div>
                      <div className="bg-white/80 p-1.5 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-500 block font-bold">SUV</span>
                        <span className="font-black text-slate-900">{route.suvPrice}</span>
                      </div>
                      <div className="bg-amber-100/90 p-1.5 rounded-xl border border-amber-300">
                        <span className="text-[10px] text-amber-900 block font-bold">Innova</span>
                        <span className="font-black text-amber-700">{route.innovaPrice}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                        Key Attractions & Stops:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {route.highlights.map((h, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-bold">
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleBook(route)}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-400 hover:to-yellow-400 hover:text-slate-950 text-white font-black py-3.5 rounded-xl transition-all duration-300 active:scale-95 text-xs sm:text-sm shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book {route.to} on WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
