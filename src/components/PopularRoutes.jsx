import React, { useState } from 'react';
import { MessageCircle, Navigation, MapPin, Sparkles, Clock, Car, Filter } from 'lucide-react';
import { POPULAR_ROUTES, PHONE_NUMBER_RAW } from '../data/taxiData';

export default function PopularRoutes({ lang }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleBookRoute = (route) => {
    const text = `*Booking Request for Route: ${route.from} to ${route.to}*
---------------------------------------
🛣️ Distance: ${route.distance} (~${route.duration})
💰 Estimated Fare: ${route.price}
🚗 Sedan: ${route.sedanPrice} | SUV: ${route.suvPrice} | Innova: ${route.innovaPrice}
---------------------------------------
Please share cab availability and driver details.`;

    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const filteredRoutes = activeFilter === 'all' 
    ? POPULAR_ROUTES 
    : activeFilter === 'popular'
    ? POPULAR_ROUTES.filter(r => r.popular)
    : POPULAR_ROUTES;

  return (
    <section id="routes" className="py-24 bg-ambient-mesh border-t border-slate-200 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Navigation className="w-3.5 h-3.5 fill-slate-950" />
            <span>{lang === 'ta' ? 'அதிகம் விரும்பப்படும் வழிகள்' : 'Popular Outstation Routes'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'ta' ? 'மதுரையிலிருந்து முக்கிய இடங்களுக்கு விரைவு டாக்ஸி' : 'Top Outstation Destinations from Madurai'}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full my-4" />
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            {lang === 'ta'
              ? 'சென்னை, பெங்களூரு, கோவை, ராமேஸ்வரம், கன்னியாகுமரி, பாண்டிச்சேரி பயணங்களுக்கு குறைந்த கட்டணம்.'
              : 'Direct one-way drops and flexible round-trip packages with experienced highway chauffeurs.'}
          </p>

          {/* Quick Filter Buttons */}
          <div className="mt-8 inline-flex p-1.5 bg-white/90 backdrop-blur-md border-2 border-slate-200 rounded-2xl shadow-md">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md scale-105'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Outstation Routes ({POPULAR_ROUTES.length})
            </button>
            <button
              onClick={() => setActiveFilter('popular')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeFilter === 'popular'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md scale-105'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🔥 Most Frequent Routes
            </button>
          </div>
        </div>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRoutes.map((item, idx) => {
            const badges = [
              { label: '🔥 Top Seller', color: 'bg-amber-500 text-slate-950' },
              { label: '🏛️ Temple Tour', color: 'bg-rose-500 text-white' },
              { label: '🌊 Coastal Drive', color: 'bg-blue-600 text-white' },
              { label: '💼 City Connect', color: 'bg-emerald-600 text-white' }
            ];
            const badge = badges[idx % badges.length];

            return (
              <div
                key={item.id}
                className="group bg-white/95 backdrop-blur-sm border-2 border-slate-200/90 hover:border-amber-400 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col justify-between transform hover:-translate-y-2 shadow-md"
              >
                <div>
                  {/* Route Photo - Bright & Clearly Visible */}
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={`${item.to} city view`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className={`text-[11px] font-black uppercase px-3 py-1 rounded-lg shadow-md ${badge.color}`}>
                        {badge.label}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-black uppercase text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-400/30">
                        From {item.from} • {item.distance}
                      </span>
                      <h3 className="text-2xl font-black text-white mt-1 drop-shadow group-hover:text-amber-300 transition-colors">
                        Madurai ➔ {item.to}
                      </h3>
                    </div>
                  </div>

                  {/* Price & Details */}
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                      <div>
                        <span className="text-xs text-slate-500 font-bold uppercase block">Starting Fare</span>
                        <span className="text-2xl font-black text-slate-900">{item.price}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-600 font-bold block">{item.distance}</span>
                        <span className="text-xs text-amber-600 font-black block">⏱️ ~{item.duration}</span>
                      </div>
                    </div>

                    {/* Route Vehicle Matrix */}
                    <div className="grid grid-cols-3 gap-2 bg-gradient-to-br from-amber-50/50 to-slate-50 p-3 rounded-2xl border border-amber-200/60 text-center text-xs">
                      <div className="bg-white/80 p-1.5 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-500 font-bold block">Sedan</span>
                        <span className="font-black text-slate-900">{item.sedanPrice}</span>
                      </div>
                      <div className="bg-white/80 p-1.5 rounded-xl border border-slate-100">
                        <span className="text-[10px] text-slate-500 font-bold block">SUV</span>
                        <span className="font-black text-slate-900">{item.suvPrice}</span>
                      </div>
                      <div className="bg-amber-100/90 p-1.5 rounded-xl border border-amber-300">
                        <span className="text-[10px] text-amber-900 font-bold block">Innova</span>
                        <span className="font-black text-amber-700">{item.innovaPrice}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                        Key Attractions & Stops:
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.highlights.map((h, i) => (
                          <span key={i} className="text-[11px] bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-bold">
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleBookRoute(item)}
                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-400 hover:to-yellow-400 hover:text-slate-950 text-white font-black py-3.5 rounded-xl transition-all duration-300 active:scale-95 text-xs sm:text-sm shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book {item.to} Cab on WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
