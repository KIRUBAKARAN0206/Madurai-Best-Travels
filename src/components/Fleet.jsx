import React, { useState } from 'react';
import { Users, Briefcase, Wind, Check, MessageCircle, Sparkles, Plane, Car, Clock } from 'lucide-react';
import { VEHICLES, CITY_AIRPORT_PACKAGES, PHONE_NUMBER_RAW } from '../data/taxiData';

export default function Fleet({ lang }) {
  const [tariffMode, setTariffMode] = useState('outstation'); // 'outstation' | 'dayRent' | 'airport'

  const handleBookVehicle = (title, details) => {
    const text = encodeURIComponent(`Hi Madurai Best Travels, I am interested in booking *${title}* (${details}). Please let me know cab availability and confirm my booking.`);
    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${text}`, '_blank');
  };

  return (
    <section id="vehicles" className="py-24 bg-ambient-mesh relative overflow-hidden border-t border-slate-200">
      
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>{lang === 'ta' ? 'எங்கள் வாகனங்கள் & கட்டணம்' : 'Our Tariffs & Fleet'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'ta' ? 'அனைத்து தேவைகளுக்கும் ஏற்ற கார்கள்' : 'Choose Your Vehicle & Tariff Plan'}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full my-4" />
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            {lang === 'ta'
              ? 'சுத்தமான, ஏசி வசதியுடன் கூடிய கார்கள். அவுட்ஸ்டேஷன், டே ரெண்டல் மற்றும் ஏர்போர்ட் பேக்கேஜ்கள்.'
              : 'Spotless AC sedans, family SUVs, Innova Crysta, and luxury Tempo Travellers at guaranteed lowest tariffs.'}
          </p>

          {/* 3 Tariff Switchers: Outstation, Day Rental, Airport Package - Responsive for mobile */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center p-1.5 gap-1.5 bg-white/90 backdrop-blur-md border-2 border-slate-200/90 rounded-2xl shadow-lg max-w-xl mx-auto">
            <button
              onClick={() => setTariffMode('outstation')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                tariffMode === 'outstation'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md sm:scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Car className="w-4 h-4 shrink-0" />
              <span>Outstation (Per Km)</span>
            </button>
            <button
              onClick={() => setTariffMode('dayRent')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                tariffMode === 'dayRent'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md sm:scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Clock className="w-4 h-4 shrink-0" />
              <span>Day Rental (Per Day)</span>
            </button>
            <button
              onClick={() => setTariffMode('airport')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                tariffMode === 'airport'
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md sm:scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Plane className="w-4 h-4 shrink-0" />
              <span>Airport / City (20 Km)</span>
            </button>
          </div>
        </div>

        {/* 1. Airport Package View */}
        {tariffMode === 'airport' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {CITY_AIRPORT_PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.id}
                className="bg-white/95 backdrop-blur-sm border-2 border-amber-400 rounded-3xl p-8 shadow-xl flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-md border border-amber-300">
                      Airport & City Drop
                    </span>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">Fixed Rate</span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mt-4">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 font-semibold">{pkg.carType}</p>

                  <div className="my-6 bg-gradient-to-br from-amber-50 via-yellow-50 to-white p-5 rounded-2xl border-2 border-amber-200 shadow-inner">
                    <span className="text-xs text-slate-600 font-bold block">Package Base Fare:</span>
                    <span className="text-4xl font-black text-slate-900">₹{pkg.baseFare}</span>
                    <span className="text-xs text-amber-800 font-bold block mt-1">
                      Includes {pkg.allowedKm} km / {pkg.hours} Hours
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-700">
                    <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-semibold">Extra Km Charge:</span>
                      <span className="font-black text-slate-900">{pkg.extraKm}</span>
                    </div>
                    <div className="flex justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-semibold">Extra Hour Charge:</span>
                      <span className="font-black text-slate-900">{pkg.extraHour}</span>
                    </div>
                  </div>

                  <ul className="mt-5 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                    {pkg.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 font-bold" />
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => handleBookVehicle(pkg.name, `₹${pkg.baseFare} Base Fare`)}
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-black py-4 rounded-xl transition-all active:scale-95 shadow-lg flex items-center justify-center space-x-2 text-sm cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Book Airport Package on WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Vehicles Grid (Outstation & Day Rental) */}
        {tariffMode !== 'airport' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VEHICLES.map((vehicle) => {
              const isOutstation = tariffMode === 'outstation';

              return (
                <div
                  key={vehicle.id}
                  className={`group bg-white/95 backdrop-blur-sm rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between border-2 transform hover:-translate-y-2 ${
                    vehicle.recommended ? 'border-amber-400 shadow-xl' : 'border-slate-200/90 hover:border-amber-400 shadow-md'
                  }`}
                >
                  <div>
                    {/* Vehicle Cutout Photo Card with Podium Glow */}
                    <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-slate-100 to-amber-100/40 flex items-center justify-center p-4 border border-amber-200/50 shadow-inner group-hover:scale-[1.02] transition-transform">
                      
                      {/* Subtle Radial Glow */}
                      <div className="absolute w-44 h-24 rounded-full bg-amber-400/25 blur-xl pointer-events-none" />

                      {vehicle.recommended && (
                        <span className="absolute top-3.5 right-3.5 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow z-10">
                          ★ Most Popular
                        </span>
                      )}

                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-200/90 px-2.5 py-1 rounded-md border border-amber-300">
                          {vehicle.category}
                        </span>
                      </div>

                      {/* Standardized HD Car Cutout - Uniform, Crystal Clear & Identical Scale */}
                      <img
                        src={vehicle.carPhoto}
                        alt={vehicle.name}
                        className="w-full h-44 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute bottom-2.5 right-3.5">
                        <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded border border-emerald-300">
                          ✓ AC Available
                        </span>
                      </div>
                    </div>

                    {/* Colorful Specs Row */}
                    <div className="grid grid-cols-3 gap-2 my-4">
                      <div className="bg-blue-50 border border-blue-200/80 rounded-xl p-2 text-center text-blue-900">
                        <Users className="w-4 h-4 mx-auto text-blue-600 mb-0.5" />
                        <span className="text-[11px] font-black block truncate">{vehicle.seatsCount || vehicle.seats}</span>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-2 text-center text-emerald-900">
                        <Briefcase className="w-4 h-4 mx-auto text-emerald-600 mb-0.5" />
                        <span className="text-[11px] font-black block truncate">{vehicle.bagsCount || vehicle.luggage}</span>
                      </div>

                      <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-2 text-center text-amber-900">
                        <Wind className="w-4 h-4 mx-auto text-amber-600 mb-0.5" />
                        <span className="text-[11px] font-black block truncate">Dual AC</span>
                      </div>
                    </div>

                    {/* Title & Tariff Details */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                          {vehicle.name}
                        </h3>
                        <div className="bg-amber-100 text-amber-900 px-3 py-1 rounded-xl font-black text-base border border-amber-300">
                          {vehicle.price}
                        </div>
                      </div>

                      {isOutstation ? (
                        <div className="bg-gradient-to-br from-amber-50/60 to-white p-4 rounded-2xl border-2 border-amber-200/80 space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-700 font-bold">Round Trip Rate:</span>
                            <span className="text-xl font-black text-slate-900">{vehicle.outstation.rate}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-600">
                            <span>One-Way Base:</span>
                            <span className="font-bold text-amber-700">{vehicle.outstation.oneWay}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-600">
                            <span>Min Distance:</span>
                            <span className="font-bold text-slate-900">{vehicle.outstation.minKm}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-600">
                            <span>Driver Batta:</span>
                            <span className="font-bold text-slate-900">{vehicle.outstation.driverBatta}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 pt-1 border-t border-amber-200/70">
                            *{vehicle.outstation.notes}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-br from-emerald-50/60 to-white p-4 rounded-2xl border-2 border-emerald-200/80 space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-700 font-bold">Per Day Rent:</span>
                            <span className="text-xl font-black text-emerald-700">{vehicle.dayRental.perDay}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-600">
                            <span>Running Km Charge:</span>
                            <span className="font-bold text-slate-900">{vehicle.dayRental.runningKm}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-600">
                            <span>Minimum Distance:</span>
                            <span className="font-bold text-slate-900">{vehicle.dayRental.minKm}</span>
                          </div>
                          <div className="flex justify-between items-center text-xs text-slate-600">
                            <span>Outstation Km Rate:</span>
                            <span className="font-bold text-amber-700">{vehicle.dayRental.kmCharges}</span>
                          </div>
                        </div>
                      )}

                      {/* Features */}
                      <ul className="space-y-1.5 text-xs text-slate-600 font-medium">
                        {vehicle.features.map((feat, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 font-bold" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Book Button */}
                  <div className="pt-5">
                    <button
                      onClick={() => handleBookVehicle(vehicle.name, isOutstation ? vehicle.outstation.rate : vehicle.dayRental.perDay)}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-amber-400 hover:to-yellow-400 hover:text-slate-950 text-white font-black py-3.5 rounded-xl transition-all duration-300 active:scale-95 shadow-md text-sm cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Book {vehicle.name} on WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
