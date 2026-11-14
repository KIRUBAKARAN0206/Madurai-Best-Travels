import React, { useState } from 'react';
import { Clock, Star, MessageCircle, Sparkles, CheckCircle, MapPin, Compass } from 'lucide-react';
import { TOUR_PACKAGES, PHONE_NUMBER_RAW } from '../data/taxiData';

export default function TourPackages({ lang }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const categories = ['All', 'Temple Tours', 'Hill Stations', 'Heritage Places'];

  const filteredPackages = activeCategory === 'All'
    ? TOUR_PACKAGES
    : TOUR_PACKAGES.filter((p) => p.category === activeCategory);

  const handleEnquire = (pkg) => {
    const text = encodeURIComponent(`Hi Madurai Best Travels, I am interested in the *${pkg.title}* (${pkg.duration} - Starting ${pkg.price}). Please share the package itinerary, vehicle options, and cost details.`);
    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${text}`, '_blank');
  };

  return (
    <section id="packages" className="py-24 bg-ambient-mesh relative overflow-hidden border-t border-slate-200">
      
      {/* Ambient background glow orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Compass className="w-3.5 h-3.5 fill-slate-950" />
            <span>{lang === 'ta' ? 'பிரபலமான டூர் பேக்கேஜ்கள்' : 'Popular Tour Packages'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'ta' ? 'தென்னிந்தியாவின் அழகை ரசியுங்கள்' : 'Explore Handcrafted South India Tours'}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full my-4" />
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            {lang === 'ta'
              ? 'மதுரை, ராமேஸ்வரம், கொடைக்கானல், கன்னியாகுமரி மற்றும் மூணார் பயணங்களுக்கு எங்கள் பிரத்யேக டூர் பேக்கேஜ்கள்.'
              : 'Handcrafted spiritual temple pilgrimages and misty hill station holiday packages with personalized doorstep pickup.'}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md scale-105'
                    : 'bg-white/80 text-slate-700 border-2 border-slate-200/90 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg, idx) => {
            const themeRibbons = [
              { color: 'bg-amber-500 text-slate-950', icon: '🏛️' },
              { color: 'bg-emerald-600 text-white', icon: '🌲' },
              { color: 'bg-blue-600 text-white', icon: '🌊' }
            ];
            const ribbon = themeRibbons[idx % themeRibbons.length];

            return (
              <div
                key={pkg.id}
                className="group bg-white/95 backdrop-blur-sm border-2 border-slate-200/90 hover:border-amber-400 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col justify-between transform hover:-translate-y-2 shadow-md"
              >
                <div>
                  {/* Image & Badges - Bright & Fully Visible */}
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    
                    {pkg.badge && (
                      <span className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow-lg">
                        {pkg.badge}
                      </span>
                    )}

                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-xl flex items-center space-x-1 border border-white shadow-md">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span className="text-xs font-black text-slate-900">{pkg.rating}</span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded shadow-sm inline-block ${ribbon.color}`}>
                        {ribbon.icon} {pkg.category}
                      </span>
                      <h3 className="text-xl font-black mt-1 drop-shadow group-hover:text-amber-300 transition-colors">
                        {lang === 'ta' && pkg.tamilTitle ? pkg.tamilTitle : pkg.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
                      <div className="flex items-center space-x-1.5 text-slate-700 font-bold bg-slate-100 px-2.5 py-1 rounded-lg">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-500 block uppercase font-bold">Starts at</span>
                        <span className="text-xl font-black text-amber-600">{pkg.price}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {pkg.desc}
                    </p>

                    {/* Sightseeing spots */}
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 mb-2">
                        Key Attractions & Stops:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                        {pkg.places.slice(0, 4).map((place, pIdx) => (
                          <li key={pIdx} className="flex items-start space-x-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                            <span>{place}</span>
                          </li>
                        ))}
                        {pkg.places.length > 4 && (
                          <li className="text-[11px] text-amber-600 font-black pl-5">
                            + {pkg.places.length - 4} more popular attractions
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="px-3 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-black transition-colors cursor-pointer"
                  >
                    Itinerary Info
                  </button>
                  <button
                    onClick={() => handleEnquire(pkg)}
                    className="px-3 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black text-xs flex items-center justify-center space-x-1 transition-all active:scale-95 shadow-md cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Details */}
        {selectedPackage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="bg-white border-2 border-amber-400 max-w-lg w-full rounded-3xl p-7 relative space-y-4 max-h-[90vh] overflow-y-auto shadow-2xl text-slate-900">
              <button
                onClick={() => setSelectedPackage(null)}
                className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-500 hover:text-slate-900 font-bold"
              >
                ✕
              </button>
              <h3 className="text-2xl font-black text-slate-900">{selectedPackage.title}</h3>
              <div className="flex items-center space-x-4 text-xs font-black text-amber-600">
                <span className="bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">⏱️ {selectedPackage.duration}</span>
                <span className="bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">🏷️ Starting {selectedPackage.price}</span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">{selectedPackage.desc}</p>
              
              <div className="border-t border-slate-200 pt-4">
                <h4 className="text-sm font-black text-slate-900 mb-2">Places Included in Tour:</h4>
                <div className="space-y-2">
                  {selectedPackage.places.map((place, pIdx) => (
                    <div key={pIdx} className="flex items-center space-x-2 text-xs text-slate-700 font-bold">
                      <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-bold text-[10px]">
                        {pIdx + 1}
                      </span>
                      <span>{place}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex space-x-3">
                <button
                  onClick={() => {
                    handleEnquire(selectedPackage);
                    setSelectedPackage(null);
                  }}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black py-3.5 rounded-xl hover:from-amber-400 hover:to-yellow-300 shadow-md cursor-pointer"
                >
                  Book on WhatsApp
                </button>
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="px-5 bg-slate-100 text-slate-700 font-bold py-3.5 rounded-xl hover:bg-slate-200 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
