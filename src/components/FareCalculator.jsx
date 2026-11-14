import React, { useState } from 'react';
import { Calculator, Navigation, Car, MessageCircle, Check } from 'lucide-react';
import { PHONE_NUMBER_RAW } from '../data/taxiData';

const FARES_MATRIX = [
  { from: 'Madurai', to: 'Chennai', distance: 493, time: '7 hr 30 min', sedan: 6782, ertiga: 8874, innova: 10353, tempo: 12800 },
  { from: 'Madurai', to: 'Bangalore', distance: 435, time: '8 hr', sedan: 6307, ertiga: 7830, innova: 9135, tempo: 11500 },
  { from: 'Madurai', to: 'Coimbatore', distance: 228, time: '5 hr', sedan: 3349, ertiga: 4104, innova: 4788, tempo: 5900 },
  { from: 'Madurai', to: 'Salem', distance: 229, time: '4 hr 30 min', sedan: 3714, ertiga: 4122, innova: 4809, tempo: 6200 },
  { from: 'Madurai', to: 'Trichy', distance: 135, time: '2 hr 15 min', sedan: 2220, ertiga: 2700, innova: 3150, tempo: 4100 },
  { from: 'Madurai', to: 'Pondicherry', distance: 330, time: '6 hr 30 min', sedan: 4969, ertiga: 5940, innova: 6930, tempo: 8500 },
  { from: 'Madurai', to: 'Rameswaram', distance: 173, time: '3 hr 30 min', sedan: 2816, ertiga: 3460, innova: 4037, tempo: 5100 },
  { from: 'Madurai', to: 'Kanyakumari', distance: 245, time: '5 hr', sedan: 3817, ertiga: 4410, innova: 5145, tempo: 6600 },
  { from: 'Madurai', to: 'Trivandrum', distance: 305, time: '6 hr', sedan: 4851, ertiga: 5490, innova: 6405, tempo: 7900 }
];

export default function FareCalculator({ lang }) {
  const [selectedRouteIdx, setSelectedRouteIdx] = useState(0);
  const [vehicleType, setVehicleType] = useState('sedan'); // sedan, ertiga, innova, tempo
  const [isRoundTrip, setIsRoundTrip] = useState(false);

  const route = FARES_MATRIX[selectedRouteIdx];
  const basePrice = route[vehicleType];
  const multiplier = isRoundTrip ? 1.8 : 1.0;
  const finalPrice = Math.round(basePrice * multiplier);
  const totalDistance = isRoundTrip ? route.distance * 2 : route.distance;

  const vehicleNames = {
    sedan: 'Sedan AC (Swift Dzire / Etios)',
    ertiga: 'SUV AC (Ertiga)',
    innova: 'Innova / Innova Crysta AC',
    tempo: 'Tempo Traveller AC'
  };

  const handleBookCalculatedFare = () => {
    const text = `*New Fare Quote Booking - Madurai Best Travels*
---------------------------------------
📍 Route: ${route.from} ➔ ${route.to} (${isRoundTrip ? 'Round Trip' : 'One Way'})
🚗 Vehicle: ${vehicleNames[vehicleType]}
🛣️ Est. Distance: ~${totalDistance} km
⏱️ Travel Time: ${isRoundTrip ? route.time + ' each way' : route.time}
💰 Estimated Fare: ₹${finalPrice.toLocaleString('en-IN')}
---------------------------------------
Please confirm driver assignment and cab availability.`;

    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-white via-amber-50/40 to-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>{lang === 'ta' ? 'நேரடி கட்டணக் கணக்கீடு' : 'Instant Fare Calculator'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'ta' ? 'உங்கள் பயணத்திற்கான கட்டணத்தை உடனே அறியுங்கள்' : 'Estimate Your Exact Trip Fare in Real-Time'}
          </h2>
          <div className="w-24 h-1.5 bg-amber-400 mx-auto rounded-full my-4" />
          <p className="text-slate-600 text-base sm:text-lg">
            {lang === 'ta'
              ? 'பயண தூரம் மற்றும் காரை தேர்ந்தெடுங்கள். வெளிப்படையான கட்டணம், உடனடி WhatsApp புக்!'
              : 'Transparent pricing with zero hidden charges. Select your destination and car model to see guaranteed best fare.'}
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Trip Mode Switcher */}
              <div className="flex p-1 bg-slate-100 rounded-2xl">
                <button
                  type="button"
                  onClick={() => setIsRoundTrip(false)}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    !isRoundTrip ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  One Way Drop
                </button>
                <button
                  type="button"
                  onClick={() => setIsRoundTrip(true)}
                  className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                    isRoundTrip ? 'bg-amber-400 text-slate-950 shadow' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Round Trip
                </button>
              </div>

              {/* Destination Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                  <Navigation className="w-4 h-4 text-amber-500" />
                  <span>Choose Your Destination from Madurai:</span>
                </label>
                <select
                  value={selectedRouteIdx}
                  onChange={(e) => setSelectedRouteIdx(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-sm sm:text-base font-bold text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                >
                  {FARES_MATRIX.map((item, idx) => (
                    <option key={idx} value={idx}>
                      Madurai ➔ {item.to} (~{item.distance} km)
                    </option>
                  ))}
                </select>
              </div>

              {/* Vehicle Type Choice */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center space-x-1.5">
                  <Car className="w-4 h-4 text-amber-500" />
                  <span>Select Car Model:</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'sedan', name: 'Sedan AC', tag: 'Dzire / Etios (4 Seater)' },
                    { id: 'ertiga', name: 'SUV AC', tag: 'Ertiga (6-7 Seater)' },
                    { id: 'innova', name: 'Innova AC', tag: 'Innova Crysta (7 Seater)' },
                    { id: 'tempo', name: 'Tempo AC', tag: '12 - 18 Seater' }
                  ].map((car) => (
                    <button
                      key={car.id}
                      type="button"
                      onClick={() => setVehicleType(car.id)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        vehicleType === car.id
                          ? 'border-amber-500 bg-amber-50 shadow-sm'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <span className="block text-xs sm:text-sm font-black text-slate-900">{car.name}</span>
                      <span className="text-[11px] font-medium text-slate-500">{car.tag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* What's included */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-3 text-xs text-slate-600 font-semibold">
                <span className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                  <span>Clean AC Vehicle</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                  <span>Driver Allowance Included</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                  <span>Doorstep Pickup</span>
                </span>
              </div>

            </div>

            {/* Price Output Display Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-7 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Estimated Total Fare
                </span>
                <span className="text-[11px] font-black bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                  Best Rate
                </span>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-black text-amber-400">
                  ₹{finalPrice.toLocaleString('en-IN')}
                </div>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  {isRoundTrip ? 'Round trip fare (Includes return journey)' : 'One way direct drop fare'}
                </p>
              </div>

              <div className="space-y-2 bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Route:</span>
                  <span className="font-bold text-white">Madurai ➔ {route.to}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Distance:</span>
                  <span className="font-bold text-white">~{totalDistance} km</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Approx. Time:</span>
                  <span className="font-bold text-white">{route.time}</span>
                </div>
                <div className="flex justify-between items-center text-slate-300">
                  <span>Selected Car:</span>
                  <span className="font-bold text-amber-400">{vehicleNames[vehicleType]}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleBookCalculatedFare}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white font-black py-4 rounded-2xl shadow-lg shadow-emerald-500/20 active:scale-95 transition-all flex items-center justify-center space-x-2 text-sm sm:text-base cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Book This Fare on WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-400">
                *Tolls & parking extra as per actual government toll booths.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
