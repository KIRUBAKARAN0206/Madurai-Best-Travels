import React, { useState } from 'react';
import { Camera, Sparkles } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    title: "Madurai Meenakshi Amman Temple Gopuram",
    category: "Temples",
    image: "/assets/meenakshi_desktop-rXmMbe3C.png"
  },
  {
    title: "Pamban Sea Bridge, Rameswaram",
    category: "Heritage Places",
    image: "/assets/rameswaram_desktop-Smi7NAmq.png"
  },
  {
    title: "Kodaikanal Star Lake & Misty Hills",
    category: "Hill Stations",
    image: "/assets/kodaikanal_bg-DYfAj6yH.png"
  },
  {
    title: "Thirumalai Nayakkar Mahal Historic Pillars",
    category: "Heritage Places",
    image: "/assets/thirumalai_mahal_bg-69LFQREE.png"
  },
  {
    title: "Scenic Munnar Tea Gardens & Valleys",
    category: "Hill Stations",
    image: "/assets/munnar_bg-DQsgX-50.png"
  },
  {
    title: "Queen of Hill Stations Ooty",
    category: "Hill Stations",
    image: "/assets/ooty_bg-DKq4a8co.png"
  },
  {
    title: "Kanyakumari Sunset & Vivekananda Rock",
    category: "Heritage Places",
    image: "/assets/kanyakumari_bg-CP4UNYS-.png"
  },
  {
    title: "Thanjavur Brihadisvara Temple",
    category: "Temples",
    image: "/assets/thanjavur_bg-953E5M5D.png"
  }
];

export default function Gallery({ lang }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Temples', 'Hill Stations', 'Heritage Places'];

  const filtered = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-ambient-mesh border-t border-slate-200 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Camera className="w-3.5 h-3.5 fill-slate-950" />
            <span>{lang === 'ta' ? 'சுற்றுலா புகைப்படங்கள்' : 'Tour & Destination Gallery'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'ta' ? 'அழகிய நினைவுகள் & இடங்கள்' : 'Captivating Sights of South India'}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full my-4" />
          <p className="mt-2 text-slate-600 text-base sm:text-lg font-medium">
            {lang === 'ta'
              ? 'எங்கள் டாக்ஸியில் பயணம் செய்த வாடிக்கையாளர்களின் அனுபவங்கள் மற்றும் முக்கிய இடங்கள்.'
              : 'Glimpses of heritage temples, mist-covered mountain tops, and historical monuments.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md scale-105'
                    : 'bg-white/80 text-slate-700 border-2 border-slate-200/90 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="group relative h-64 rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-200 hover:border-amber-400 shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] transform"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-black text-amber-300 uppercase tracking-widest bg-slate-950/80 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-amber-400/30">
                  {item.category}
                </span>
                <h4 className="text-sm font-black text-white mt-1 drop-shadow group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
