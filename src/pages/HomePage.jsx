import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Sparkles, Shield, Clock, Award, CheckCircle, 
  Navigation, Car, Users, Briefcase, Wind, MessageCircle, Phone, Star, MapPin
} from 'lucide-react';
import Hero from '../components/Hero';
import { POPULAR_ROUTES, VEHICLES, TOUR_PACKAGES, TESTIMONIALS, PHONE_NUMBER, PHONE_NUMBER_RAW } from '../data/taxiData';

export default function HomePage({ lang }) {
  const handleQuickWhatsApp = (itemTitle) => {
    const text = encodeURIComponent(`Hi Madurai Best Travels, I am interested in booking: *${itemTitle}*. Please share cab availability & fare details.`);
    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-ambient-mesh min-h-screen text-slate-800 relative overflow-hidden">
      
      {/* 1. Hero with Instant Booking Engine */}
      <Hero lang={lang} />

      {/* 2. Colorful Trust Value Proposition Cards */}
      <section className="py-10 bg-white/80 backdrop-blur-md border-y border-slate-200/80 relative z-10 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Card 1 - Transparent (Amber) */}
            <div className="bg-gradient-to-br from-amber-500/10 via-amber-50/50 to-white border-2 border-amber-200/80 rounded-2xl p-5 flex items-center space-x-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shrink-0 text-slate-950 shadow-md">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">100% Transparent</h4>
                <p className="text-xs text-amber-900/80 font-semibold">Zero hidden toll & return charges</p>
              </div>
            </div>

            {/* Card 2 - Punctual (Emerald) */}
            <div className="bg-gradient-to-br from-emerald-500/10 via-emerald-50/50 to-white border-2 border-emerald-200/80 rounded-2xl p-5 flex items-center space-x-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shrink-0 text-white shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">24/7 On-Time</h4>
                <p className="text-xs text-emerald-900/80 font-semibold">Guaranteed doorstep pickup</p>
              </div>
            </div>

            {/* Card 3 - Verified (Blue) */}
            <div className="bg-gradient-to-br from-blue-500/10 via-blue-50/50 to-white border-2 border-blue-200/80 rounded-2xl p-5 flex items-center space-x-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shrink-0 text-white shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">Verified Chauffeurs</h4>
                <p className="text-xs text-blue-900/80 font-semibold">Courteous & expert locals</p>
              </div>
            </div>

            {/* Card 4 - Sanitized (Purple) */}
            <div className="bg-gradient-to-br from-purple-500/10 via-purple-50/50 to-white border-2 border-purple-200/80 rounded-2xl p-5 flex items-center space-x-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shrink-0 text-white shadow-md">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">Sanitized Cabs</h4>
                <p className="text-xs text-purple-900/80 font-semibold">Spotless AC, fresh cabins</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Popular Outstation Routes with Colorful Badges & Zoom */}
      <section className="py-24 relative overflow-hidden">
        {/* Ambient background glow orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" />
                <span>Tamil Nadu & South India Outstation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Popular Outstation Routes
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mt-3 mb-2" />
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                Transparent one-way drop fares & round-trip tariffs with zero empty return toll burden.
              </p>
            </div>
            <Link
              to="/routes"
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 bg-white hover:bg-amber-400 hover:text-slate-950 text-slate-900 px-6 py-3 rounded-2xl font-black text-sm border-2 border-slate-200 hover:border-amber-400 shadow-md hover:shadow-xl transition-all group"
            >
              <span>Explore All Routes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {POPULAR_ROUTES.slice(0, 4).map((route, idx) => {
              const badges = [
                { label: '🔥 Most Booked', color: 'bg-amber-500 text-slate-950' },
                { label: '🏛️ Sacred Circuit', color: 'bg-rose-500 text-white' },
                { label: '🌊 Coastal Route', color: 'bg-blue-600 text-white' },
                { label: '💼 Commercial Hub', color: 'bg-emerald-600 text-white' }
              ];
              const badge = badges[idx % badges.length];

              return (
                <div
                  key={route.id}
                  className="group bg-white/95 backdrop-blur-sm border-2 border-slate-200/90 hover:border-amber-400 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-2"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={route.image}
                        alt={route.to}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                      
                      {/* Colorful Status Tag */}
                      <div className="absolute top-3 left-3">
                        <span className={`text-[11px] font-black uppercase px-2.5 py-1 rounded-lg shadow-md ${badge.color}`}>
                          {badge.label}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] font-black uppercase text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-400/30">
                          {route.distance} • ~{route.duration}
                        </span>
                        <h3 className="text-lg font-black mt-1 drop-shadow-md text-white group-hover:text-amber-300 transition-colors">
                          Madurai ➔ {route.to}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 space-y-3 bg-gradient-to-b from-white to-slate-50/50">
                      <div className="flex justify-between items-center text-xs bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/80">
                        <span className="text-slate-700 font-bold">Sedan (Dzire):</span>
                        <span className="font-black text-amber-700 text-sm">{route.sedanPrice}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs bg-blue-50/80 p-2.5 rounded-xl border border-blue-200/80">
                        <span className="text-slate-700 font-bold">Innova Crysta:</span>
                        <span className="font-black text-blue-700 text-sm">{route.innovaPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => handleQuickWhatsApp(`Madurai to ${route.to} Outstation Taxi`)}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-400 hover:to-yellow-400 hover:text-slate-950 text-white font-bold py-3 rounded-xl text-xs transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Book on WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Available Cabs & Tariffs (Vibrant, Colorful & Animated Fleet Preview) */}
      <section className="py-24 bg-gradient-to-b from-white via-amber-50/40 to-white relative overflow-hidden border-y border-amber-200/50">
        
        {/* Vibrant Ambient Glow Highlights */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
                <Car className="w-4 h-4 fill-slate-950" />
                <span>Our Premium Fleet & Tariffs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Available Cabs & Transparent Tariffs
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mt-3 mb-2" />
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                Spotless AC sedans, family SUVs, and luxury Tempo Travellers tailored for every group size.
              </p>
            </div>
            <Link
              to="/vehicles"
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 px-6 py-3 rounded-2xl font-black text-sm shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <span>View Full Fleet & Tariffs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VEHICLES.slice(0, 3).map((v) => (
              <div
                key={v.id}
                className="group relative bg-white/95 rounded-3xl p-6 border-2 border-slate-200/90 hover:border-amber-400 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  {/* Glowing Vehicle Display Podium */}
                  <div className="relative h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-slate-100 to-amber-100/40 p-4 flex items-center justify-center border border-amber-200/50 shadow-inner group-hover:scale-[1.02] transition-transform">
                    
                    {/* Radial Glow underneath the car */}
                    <div className="absolute w-44 h-24 rounded-full bg-amber-400/25 blur-xl pointer-events-none" />

                    {/* Category Ribbon */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black px-3 py-1 rounded-lg shadow-sm">
                        {v.category}
                      </span>
                    </div>

                    {/* Standardized HD Car Cutout - Uniform, Crystal Clear & Identical Scale */}
                    <img
                      src={v.carPhoto}
                      alt={v.name}
                      className="w-full h-40 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Driver & AC live tags */}
                    <div className="absolute bottom-2.5 right-3">
                      <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-300">
                        ✓ AC Included
                      </span>
                    </div>
                  </div>

                  {/* Title & Price Header */}
                  <div className="flex justify-between items-center mt-5">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                        {v.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">
                        Clean interior • GPS tracked
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 px-3.5 py-1.5 rounded-xl font-black text-lg shadow-sm">
                      {v.price}
                    </div>
                  </div>

                  {/* Colorful Specs Badges */}
                  <div className="grid grid-cols-3 gap-2 my-4">
                    <div className="bg-blue-50 border border-blue-200/80 rounded-xl p-2 text-center text-blue-900">
                      <Users className="w-4 h-4 mx-auto text-blue-600 mb-0.5" />
                      <span className="text-[11px] font-black block">{v.seatsCount || v.seats}</span>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-2 text-center text-emerald-900">
                      <Briefcase className="w-4 h-4 mx-auto text-emerald-600 mb-0.5" />
                      <span className="text-[11px] font-black block">{v.bagsCount || v.luggage}</span>
                    </div>

                    <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-2 text-center text-amber-900">
                      <Wind className="w-4 h-4 mx-auto text-amber-600 mb-0.5" />
                      <span className="text-[11px] font-black block">Chilled AC</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed pb-2">
                    Round trip at {v.outstation?.rate || v.price}. Driver batta transparently included per day terms.
                  </p>
                </div>

                {/* Instant Booking Buttons */}
                <div className="pt-2 flex gap-2">
                  <Link
                    to="/vehicles"
                    className="flex-1 text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-black py-3 rounded-xl text-xs transition-colors"
                  >
                    View Tariffs
                  </Link>
                  <button
                    onClick={() => handleQuickWhatsApp(`${v.name} Booking`)}
                    className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black py-3 rounded-xl text-xs transition-all flex items-center justify-center space-x-1 shadow-md active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tour Packages Preview (Spiritual & Hill Station Holidays) */}
      <section className="py-24 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rose-100 border border-rose-300 text-rose-900 text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>Pilgrimages & Hill Stations</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Curated Holiday & Temple Tours
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-rose-500 to-amber-400 rounded-full mt-3 mb-2" />
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                All-inclusive cab tours covering Meenakshi Temple, Rameswaram, Kodaikanal, and Munnar.
              </p>
            </div>
            <Link
              to="/packages"
              className="mt-6 md:mt-0 inline-flex items-center space-x-2 bg-white hover:bg-amber-400 hover:text-slate-950 text-slate-900 px-6 py-3 rounded-2xl font-black text-sm border-2 border-slate-200 hover:border-amber-400 shadow-md hover:shadow-xl transition-all group"
            >
              <span>Explore All Tour Packages</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TOUR_PACKAGES.slice(0, 3).map((pkg, idx) => {
              const themeStyles = [
                { badge: '🏛️ Sacred Darshan', color: 'bg-amber-500 text-slate-950' },
                { badge: '🌲 Misty Hill Station', color: 'bg-emerald-600 text-white' },
                { badge: '🌊 Coastal Sangam', color: 'bg-blue-600 text-white' }
              ];
              const theme = themeStyles[idx % themeStyles.length];

              return (
                <div
                  key={pkg.id}
                  className="group bg-white/95 backdrop-blur-sm border-2 border-slate-200/90 hover:border-amber-400 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between transform hover:-translate-y-2"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-102"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3">
                        <span className={`text-[11px] font-black uppercase px-3 py-1 rounded-lg shadow-md ${theme.color}`}>
                          {theme.badge}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] font-black uppercase text-amber-400 bg-slate-950/80 px-2 py-0.5 rounded border border-amber-400/30">
                          {pkg.duration}
                        </span>
                        <h3 className="text-xl font-black mt-1 drop-shadow-md text-white group-hover:text-amber-300 transition-colors">
                          {pkg.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 space-y-4 bg-gradient-to-b from-white to-slate-50/50">
                      <div className="flex justify-between items-center text-xs bg-amber-50/80 p-3 rounded-xl border border-amber-200/80">
                        <span className="text-slate-700 font-bold">Package Starting Fare:</span>
                        <span className="text-xl font-black text-amber-600">{pkg.price}</span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {pkg.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {(pkg.places || pkg.highlights || []).slice(0, 3).map((h, i) => (
                          <span key={i} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md">
                            ✓ {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleQuickWhatsApp(`${pkg.title} Tour Package`)}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-400 hover:to-yellow-400 hover:text-slate-950 text-white font-bold py-3.5 rounded-xl text-xs transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book Tour Package on WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Highlight Strip */}
      <section className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/20 px-3.5 py-1 rounded-full border border-amber-400/30">
                Madurai's Trusted Travel Partner
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Why Travelers Consistently Rate Us <span className="text-amber-400">4.9 ★</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Over a decade of transporting temple devotees, corporate VIPs, and family holidaymakers across South India with zero surge pricing and uncompromised safety.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <span className="block text-2xl font-black text-amber-400">15,000+</span>
                  <span className="text-xs text-slate-300 font-semibold">Tours Completed</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10">
                  <span className="block text-2xl font-black text-amber-400">50+</span>
                  <span className="text-xs text-slate-300 font-semibold">Sanitized Cabs</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-white">"Flawless Rameswaram Temple Trip"</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "Booked Innova Crysta for our family temple visit. The driver arrived 15 mins before time in clean uniform. No hidden charges or extra toll demands. Highly recommended!"
                </p>
                <div className="text-xs font-bold text-amber-400">
                  — Senthil Kumar (Chennai)
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-white">"Smooth Kodaikanal Mountain Ride"</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                  "Chauffeur had expert mountain driving skills. Safe driving on hairpin bends, great restaurant suggestions. Best cab service in Madurai!"
                </p>
                <div className="text-xs font-bold text-amber-400">
                  — Priya & Family (Bangalore)
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Direct Contact Call-out Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 text-center relative overflow-hidden shadow-xl">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-xs font-black uppercase tracking-widest bg-slate-950 text-amber-400 px-3.5 py-1 rounded-full shadow-md">
            24/7 Live Booking Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mt-3">
            Have a custom trip requirement or group booking?
          </h2>
          <p className="text-slate-900 font-bold text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            Speak directly with our Madurai travel desk for instant custom itinerary, discounted round trips, and immediate dispatch.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="bg-slate-950 hover:bg-slate-900 text-amber-400 font-black px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-2 text-base"
            >
              <Phone className="w-5 h-5 fill-amber-400" />
              <span>Call: {PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER_RAW}?text=Hi%20Madurai%20Best%20Taxi,%20I%20want%20to%20plan%20a%20custom%20tour`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-2 text-base"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
