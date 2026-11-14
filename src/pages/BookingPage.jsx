import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import CustomDropdown from '../components/CustomDropdown';
import {
  Car, Calendar, Clock, MapPin, Navigation, User, Phone,
  MessageCircle, CheckCircle2, ShieldCheck, Sparkles, AlertCircle, Info, Award
} from 'lucide-react';
import { LOCATIONS, VEHICLES, PHONE_NUMBER, PHONE_NUMBER_RAW, ADDRESS } from '../data/taxiData';

export default function BookingPage() {
  const [tripType, setTripType] = useState('outstation_round'); // outstation_round | outstation_oneway | local | airport
  const [fromCity, setFromCity] = useState('Madurai');
  const [toCity, setToCity] = useState('Rameswaram');
  const [pickupDate, setPickupDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [returnDate, setReturnDate] = useState('');
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

    // Generate random booking ID
    const refId = `MBT-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refId);

    const tripTypeNames = {
      outstation_round: 'Outstation Round Trip',
      outstation_oneway: 'Outstation One-Way Drop',
      local: 'Local Madurai Day Rental',
      airport: 'Madurai Airport / Station Transfer'
    };

    const dropLocationText = tripType === 'local' ? 'Local Madurai Sightseeing' : toCity;

    const message = `*NEW CAB BOOKING - MADURAI BEST TRAVELS*
━━━━━━━━━━━━━━━━━━━━━━━━
🎫 *Booking ID:* #${refId}
🚖 *Trip Type:* ${tripTypeNames[tripType]}
📍 *Pickup Location:* ${fromCity}
🎯 *Drop Destination:* ${dropLocationText}
🏠 *Doorstep Address:* ${pickupAddress || 'To be shared'}
📅 *Date:* ${pickupDate} ${returnDate && tripType === 'outstation_round' ? `(Return: ${returnDate})` : ''}
⏰ *Pickup Time:* ${pickupTime}
🚗 *Vehicle Choice:* ${currentVehicle.name} (${currentVehicle.price})
👥 *Passengers:* ${passengerCount}
👤 *Lead Passenger:* ${passengerName}
📞 *Contact Number:* ${passengerPhone}
📝 *Special Notes:* ${specialNotes || 'None'}
━━━━━━━━━━━━━━━━━━━━━━━━
Please confirm cab dispatch and share driver details. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${encoded}`, '_blank');
    setBookingConfirmed(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-20">

      {/* Banner */}
      <PageBanner
        title="Book Your Cab Online"
        subtitle="Instant cab confirmation with transparent per-km billing, verified drivers & 24/7 doorstep pickup."
        badge="Instant WhatsApp Confirmation"
        bgImage="/assets/unique/highway_banner_hd.jpg"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">

        {/* Main Booking Container */}
        <div className="bg-white rounded-3xl border-2 border-amber-300 shadow-2xl overflow-hidden">

          {/* Header Bar */}
          <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 p-6 sm:p-8 text-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-300">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-950 text-amber-400 text-xs font-black uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
                <span>5-Minute Dispatch Guarantee</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
                Madurai Best Travels Booking Engine
              </h2>
              <p className="text-xs sm:text-sm text-slate-900 font-semibold mt-1">
                Zero surge fees • Transparent fixed pricing • Doorstep pickup across Tamil Nadu
              </p>
            </div>

            <div className="flex items-center space-x-3 shrink-0">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="bg-slate-950 text-amber-400 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black flex items-center space-x-1.5 shadow active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 fill-amber-400" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleBookingSubmit} className="p-6 sm:p-10 space-y-8">

            {/* 1. Trip Mode Tabs */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                1. Select Trip Type
              </label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 bg-slate-100 p-1.5 rounded-2xl">
                {[
                  { id: 'outstation_round', label: 'Outstation Round Trip', icon: Navigation },
                  { id: 'outstation_oneway', label: 'One-Way Drop', icon: MapPin },
                  { id: 'local', label: 'Local Madurai Rent', icon: Clock },
                  { id: 'airport', label: 'Airport / Station Transfer', icon: Car },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = tripType === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setTripType(tab.id)}
                      className={`flex items-center justify-center space-x-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${isActive
                          ? 'bg-amber-400 text-slate-950 shadow-md font-black'
                          : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                        }`}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="truncate">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Locations, Date & Time Grid */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                2. Journey Details
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                {/* Pickup City */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
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

                {/* Drop City */}
                {tripType !== 'local' ? (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                      <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Drop Destination</span>
                    </label>
                    <CustomDropdown
                      value={toCity}
                      onChange={setToCity}
                      options={LOCATIONS}
                      icon={Navigation}
                      placeholder="Select Drop City"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>Package Duration</span>
                    </label>
                    <div className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800">
                      Madurai Full Day (8 Hr / 80 Km)
                    </div>
                  </div>
                )}

                {/* Pickup Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>Pickup Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                {/* Pickup Time */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>Pickup Time</span>
                  </label>
                  <input
                    type="time"
                    required
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

              </div>

              {/* Doorstep Address Row */}
              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Specific Doorstep Pickup Address / Landmark
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hotel Heritage, Madurai Junction, Airport Terminal, or Residence address"
                  value={pickupAddress}
                  onChange={(e) => setPickupAddress(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>

            </div>

            {/* 3. Vehicle Selection Grid */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                3. Choose Vehicle Category
              </label>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {VEHICLES.map((v) => {
                  const isSelected = selectedVehicleId === v.id;
                  return (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVehicleId(v.id)}
                      className={`cursor-pointer rounded-2xl p-3 border-2 transition-all flex flex-col justify-between text-center ${isSelected
                          ? 'border-amber-500 bg-amber-50/70 shadow-lg ring-2 ring-amber-400/40 -translate-y-1'
                          : 'border-slate-200 bg-white hover:border-amber-300 hover:shadow'
                        }`}
                    >
                      <div className="h-20 flex items-center justify-center">
                        <img
                          src={v.carPhoto}
                          alt={v.name}
                          className="h-16 w-full object-contain"
                        />
                      </div>
                      <div className="mt-2">
                        <h4 className="text-xs font-black text-slate-900 truncate">
                          {v.name}
                        </h4>
                        <span className="text-[11px] font-bold text-amber-700 block mt-0.5">
                          {v.price}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          {v.seatsCount || v.seats}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Passenger Information */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                4. Passenger Information
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={passengerPhone}
                    onChange={(e) => setPassengerPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Passenger Count
                  </label>
                  <select
                    value={passengerCount}
                    onChange={(e) => setPassengerCount(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Special Notes / Trip Purpose (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Early morning Meenakshi Amman darshan, extra luggage, hill tour to Kodaikanal"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                />
              </div>
            </div>

            {/* 5. Live Fare Estimate & Service Guarantees */}
            <div className="bg-gradient-to-br from-amber-50 via-yellow-50/40 to-white p-6 rounded-2xl border border-amber-300 flex flex-col md:flex-row items-center justify-between gap-6">

              <div className="space-y-1.5 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2">
                  <span className="text-xs font-black uppercase text-amber-900">Selected Vehicle:</span>
                  <span className="text-sm font-black text-slate-900">{currentVehicle.name}</span>
                </div>
                <div className="text-2xl font-black text-slate-900">
                  Rate: <span className="text-amber-600">{currentVehicle.price}</span>
                  <span className="text-xs font-medium text-slate-500 ml-2">({currentVehicle.seatsCount || currentVehicle.seats})</span>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-slate-600 font-semibold pt-1">
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Chilled AC Guaranteed</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Driver Batta Transparent</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>24/7 Doorstep Pickup</span>
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 text-base transition-all active:scale-95 cursor-pointer shrink-0"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Confirm & Book on WhatsApp</span>
              </button>

            </div>

          </form>

        </div>

        {/* Confirmation Modal if Booked */}
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
                  className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 rounded-xl transition-all shadow"
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

