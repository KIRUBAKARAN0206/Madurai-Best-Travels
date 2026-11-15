import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import CustomDropdown from '../components/CustomDropdown';
import {
  Car, Calendar, Clock, MapPin, Navigation, User, Phone,
  MessageCircle, CheckCircle2, ShieldCheck, Sparkles, AlertCircle, 
  Info, Award, Users, ChevronRight, Check
} from 'lucide-react';
import { LOCATIONS, VEHICLES, PHONE_NUMBER, PHONE_NUMBER_RAW, ADDRESS } from '../data/taxiData';

export default function BookingPage() {
  const [tripType, setTripType] = useState('outstation_round'); // outstation_round | outstation_oneway | local | airport
  const [fromCity, setFromCity] = useState('Madurai');
  const [toCity, setToCity] = useState('Rameswaram');
  const [pickupDate, setPickupDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('06:00');
  const [selectedVehicleId, setSelectedVehicleId] = useState('dzire');
  const [pickupAddress, setPickupAddress] = useState('');
  const [passengerName, setPassengerName] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');
  const [passengerCount, setPassengerCount] = useState('2');
  const [specialNotes, setSpecialNotes] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const currentVehicle = VEHICLES.find(v => v.id === selectedVehicleId) || VEHICLES[0];

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    const refId = `MBT-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refId);

    const tripTypeNames = {
      outstation_round: 'Outstation Round Trip',
      outstation_oneway: 'Outstation One-Way Drop',
      local: 'Local Madurai Sightseeing (8 Hr / 80 Km)',
      airport: 'Madurai Airport / Station Transfer'
    };

    const dropLocationText = tripType === 'local' ? 'Local Madurai Sightseeing' : toCity;

    const message = `*NEW CAB BOOKING - MADURAI BEST TRAVELS*
━━━━━━━━━━━━━━━━━━━━━━━━
🎫 *Booking ID:* #${refId}
🚖 *Trip Type:* ${tripTypeNames[tripType]}
📍 *Pickup Location:* ${fromCity}
🎯 *Drop Destination:* ${dropLocationText}
🏠 *Doorstep Address:* ${pickupAddress || 'To be shared on call'}
📅 *Pickup Date:* ${pickupDate}${tripType === 'outstation_round' && returnDate ? ` (Return: ${returnDate})` : ''}
⏰ *Pickup Time:* ${pickupTime}
🚗 *Vehicle Choice:* ${currentVehicle.name} (${currentVehicle.price})
👥 *Passengers:* ${passengerCount}
👤 *Lead Passenger:* ${passengerName}
📞 *Contact Number:* ${passengerPhone}
📝 *Trip Notes:* ${specialNotes || 'None'}
━━━━━━━━━━━━━━━━━━━━━━━━
Please confirm cab availability & dispatch driver details. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${encoded}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div className="bg-gradient-to-b from-slate-100 via-slate-50 to-white min-h-screen text-slate-900 pb-24">

      {/* 1. Header Banner - Clean, Scenic & Elegant */}
      <PageBanner
        title="Book Your Cab Online"
        subtitle="Transparent per-km tariffs, verified chauffeurs, chilled AC cabs, and 24/7 doorstep pickup across Tamil Nadu & South India."
        badge="Instant WhatsApp Confirmation"
        bgImage="/assets/unique/hero_luxury_cab_widescreen.jpg"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">

        {/* Main Clean Booking Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden backdrop-blur-md">

          {/* Top Decorative Amber Ribbon */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 w-full" />

          {/* Header Bar - Clean White & Slate (No harsh glaring box) */}
          <div className="px-6 py-6 sm:px-10 sm:py-8 bg-white border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>5-Minute Dispatch Guarantee</span>
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">•</span>
                <span className="text-xs text-slate-500 font-semibold hidden sm:inline">Zero Surge Pricing</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                Madurai Best Travels Booking Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Fill your travel details below for instant confirmed booking and fare quote.
              </p>
            </div>

            {/* Quick Call Pill */}
            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="inline-flex items-center space-x-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 fill-amber-400" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleBookingSubmit} className="p-6 sm:p-10 space-y-10">

            {/* STEP 1: TRIP TYPE */}
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black">
                  1
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider">
                  Select Trip Type
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { id: 'outstation_round', label: 'Outstation Round Trip', sub: 'Starts ₹13/km', icon: Navigation },
                  { id: 'outstation_oneway', label: 'One-Way Drop', sub: 'Fixed per-km rate', icon: MapPin },
                  { id: 'local', label: 'Local Madurai Sightseeing', sub: '8 Hours / 80 Km', icon: Clock },
                  { id: 'airport', label: 'Airport / Station Transfer', sub: 'Fixed doorstep drop', icon: Car },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = tripType === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setTripType(tab.id)}
                      className={`relative flex items-center space-x-3 p-4 rounded-2xl border-2 transition-all text-left ${
                        isActive
                          ? 'border-amber-400 bg-amber-50/70 shadow-md ring-2 ring-amber-400/30'
                          : 'border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-200 text-slate-700'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className={`block text-xs sm:text-sm font-bold truncate ${isActive ? 'text-slate-950 font-black' : 'text-slate-800'}`}>
                          {tab.label}
                        </span>
                        <span className="block text-[11px] text-slate-500 font-medium">
                          {tab.sub}
                        </span>
                      </div>
                      {isActive && (
                        <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: ROUTE, DATE & TIME */}
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black">
                  2
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider">
                  Journey Schedule & Route
                </h3>
              </div>

              <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Pickup City */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-500" />
                      <span>Pickup City</span>
                    </label>
                    <CustomDropdown
                      value={fromCity}
                      onChange={setFromCity}
                      options={LOCATIONS}
                      icon={MapPin}
                      placeholder="Select Pickup City"
                    />
                  </div>

                  {/* Drop Destination */}
                  {tripType !== 'local' ? (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                        <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Drop Destination</span>
                      </label>
                      <CustomDropdown
                        value={toCity}
                        onChange={setToCity}
                        options={LOCATIONS}
                        icon={Navigation}
                        placeholder="Select Drop Destination"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-blue-600" />
                        <span>Package Duration</span>
                      </label>
                      <div className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 shadow-xs">
                        Madurai Full Day (8 Hr / 80 Km)
                      </div>
                    </div>
                  )}

                  {/* Pickup Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>Pickup Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 shadow-xs"
                    />
                  </div>

                  {/* Return Date or Pickup Time */}
                  {tripType === 'outstation_round' ? (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Return Date</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 shadow-xs"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Pickup Time</span>
                      </label>
                      <input
                        type="time"
                        required
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 shadow-xs"
                      />
                    </div>
                  )}
                </div>

                {/* Additional Row for Time & Doorstep Pickup Address */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-1">
                  {tripType === 'outstation_round' && (
                    <div className="sm:col-span-4">
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>Pickup Time</span>
                      </label>
                      <input
                        type="time"
                        required
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 shadow-xs"
                      />
                    </div>
                  )}

                  <div className={tripType === 'outstation_round' ? 'sm:col-span-8' : 'sm:col-span-12'}>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>Doorstep Pickup Address / Landmark (Optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hotel Heritage, Madurai Junction, Airport Terminal, or Street address"
                      value={pickupAddress}
                      onChange={(e) => setPickupAddress(e.target.value)}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-400/20 shadow-xs"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 3: VEHICLE SELECTION */}
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black">
                  3
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider">
                  Choose Your Vehicle
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3.5">
                {VEHICLES.map((v) => {
                  const isSelected = selectedVehicleId === v.id;
                  return (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVehicleId(v.id)}
                      className={`cursor-pointer rounded-2xl p-3 border-2 transition-all flex flex-col justify-between text-center relative group ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/80 shadow-md ring-2 ring-amber-400/40 -translate-y-1'
                          : 'border-slate-200 bg-white hover:border-amber-300 hover:shadow-sm'
                      }`}
                    >
                      {/* Selected Badge */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}

                      <div className="h-20 flex items-center justify-center py-1">
                        <img
                          src={v.carPhoto}
                          alt={v.name}
                          className="h-16 w-auto max-w-full object-contain transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="mt-2 border-t border-slate-100 pt-2">
                        <h4 className="text-xs font-black text-slate-900 truncate">
                          {v.name}
                        </h4>
                        <span className="text-xs font-black text-amber-600 block mt-0.5">
                          {v.price}
                        </span>
                        <span className="text-[10px] text-slate-500 font-semibold block mt-0.5">
                          {v.seatsCount || v.seats}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 4: PASSENGER INFORMATION */}
            <div>
              <div className="flex items-center space-x-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-xs font-black">
                  4
                </span>
                <h3 className="text-sm sm:text-base font-black text-slate-900 uppercase tracking-wider">
                  Passenger & Contact Details
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    <span>Your Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-400/20 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span>Mobile Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={passengerPhone}
                    onChange={(e) => setPassengerPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-400/20 shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center space-x-1.5">
                    <Users className="w-3.5 h-3.5 text-amber-500" />
                    <span>Number of Passengers</span>
                  </label>
                  <select
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-400/20 shadow-xs"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Trip Notes / Special Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Early morning temple darshan, hill station sightseeing, child seat, extra luggage"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-400/20 shadow-xs"
                />
              </div>
            </div>

            {/* LIVE TRIP SUMMARY & CONFIRMATION BOX */}
            <div className="bg-gradient-to-br from-amber-50/90 via-yellow-50/40 to-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-md">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                
                {/* Summary Details */}
                <div className="space-y-2 text-center lg:text-left w-full lg:w-auto">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>Booking Summary</span>
                  </div>

                  <div className="text-xl sm:text-2xl font-black text-slate-900">
                    {fromCity} ➔ {tripType === 'local' ? 'Local Madurai' : toCity}
                  </div>

                  <div className="text-sm font-bold text-slate-700 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    <span className="text-amber-700 font-black">{currentVehicle.name}</span>
                    <span>•</span>
                    <span className="text-slate-900">{currentVehicle.price}</span>
                    <span>•</span>
                    <span className="text-slate-500">{passengerCount} {passengerCount === 1 ? 'Person' : 'People'}</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-600 font-semibold pt-1">
                    <span className="flex items-center space-x-1 text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Zero Hidden Charges</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1 text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Sanitized AC Guaranteed</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1 text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Pay Driver After Trip</span>
                    </span>
                  </div>
                </div>

                {/* Confirm Button */}
                <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 text-base transition-all active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                    <span>Confirm & Book on WhatsApp</span>
                  </button>
                </div>

              </div>
            </div>

          </form>

        </div>

        {/* 3 Trust Cards Below Booking Engine */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Zero Surge Pricing</h4>
              <p className="text-xs text-slate-500">Transparent per-km rate across all seasons.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">100% Punctual Pickup</h4>
              <p className="text-xs text-slate-500">On-time doorstep arrival at Airport & Junction.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Verified Chauffeurs</h4>
              <p className="text-xs text-slate-500">Experienced in ghat roads & temple circuits.</p>
            </div>
          </div>
        </div>

        {/* Confirmation Modal */}
        {bookingConfirmed && (
          <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl border-2 border-emerald-400 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-black uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Booking Request Submitted
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Booking ID: #{bookingRef}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong>{passengerName}</strong>! Your cab booking request for <strong>{currentVehicle.name}</strong> has been forwarded to our Madurai dispatcher via WhatsApp.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-left space-y-1.5 font-medium text-slate-700">
                <div>📍 <strong>Route:</strong> {fromCity} ➔ {tripType === 'local' ? 'Local Sightseeing' : toCity}</div>
                <div>📅 <strong>Date & Time:</strong> {pickupDate} at {pickupTime}</div>
                <div>🚗 <strong>Vehicle Choice:</strong> {currentVehicle.name} ({currentVehicle.price})</div>
                <div>📞 <strong>Support Desk:</strong> {PHONE_NUMBER}</div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl transition-all shadow cursor-pointer"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
