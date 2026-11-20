import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Calendar, Clock, Car, Phone, MessageCircle, 
  CheckCircle2, Sparkles, Navigation, ChevronLeft, ChevronRight,
  Shield, Award, Users
} from 'lucide-react';
import { LOCATIONS, VEHICLES, PHONE_NUMBER, PHONE_NUMBER_RAW } from '../data/taxiData';
import CustomDropdown from './CustomDropdown';

const UNIQUE_HERO_SLIDES = [
  {
    image: '/assets/unique/adiyogi_shiva_hero.jpg',
    tag: 'Spiritual & Outstation Circuits',
    title: 'Adiyogi Shiva & Temple Tours',
    desc: 'Coimbatore Isha Adiyogi, Madurai Meenakshi, Rameswaram & Palani pilgrimages with trusted chauffeurs.'
  },
  {
    image: '/assets/unique/hero_golden_temple.jpg',
    tag: 'Sacred Temple Circuits',
    title: 'Madurai & Southern Temples',
    desc: 'Meenakshi Temple, Rameswaram, Thiruchendur & Palani with expert local drivers.'
  },
  {
    image: '/assets/unique/hero_western_ghats.jpg',
    tag: 'Hill Station Holiday Escapes',
    title: 'Kodaikanal, Munnar & Ooty',
    desc: 'Comfortable family hill tours with sanitized cabs and seasoned mountain chauffeurs.'
  },
  {
    image: '/assets/unique/hero_luxury_cab_widescreen.jpg',
    tag: 'Outstation & Airport Drops',
    title: 'Anywhere Across Tamil Nadu',
    desc: 'Fixed transparent per-km tariffs. Zero hidden charges, 24/7 doorstep pickup.'
  }
];

export default function Hero({ lang }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tripType, setTripType] = useState('outstation'); // outstation, local, airport
  const [fromCity, setFromCity] = useState('Madurai');
  const [toCity, setToCity] = useState('Rameswaram');
  const [pickupDate, setPickupDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [pickupTime, setPickupTime] = useState('06:00');
  const [selectedVehicle, setSelectedVehicle] = useState('Swift Dzire');
  const [passengerName, setPassengerName] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('');

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % UNIQUE_HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % UNIQUE_HERO_SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + UNIQUE_HERO_SLIDES.length) % UNIQUE_HERO_SLIDES.length);

  // Handle WhatsApp submission
  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const typeLabel = tripType === 'outstation' ? 'Outstation Trip' : tripType === 'local' ? 'Local Day Rental' : 'Airport / Station Transfer';
    const destinationText = tripType === 'local' ? 'Local Madurai Sightseeing' : toCity;

    const message = `*New Cab Booking Request - Madurai Best Travels*
---------------------------------------
🚖 *Trip Type:* ${typeLabel}
📍 *Pickup Location:* ${fromCity}
🎯 *Drop Location:* ${destinationText}
📅 *Date:* ${pickupDate}
⏰ *Time:* ${pickupTime}
🚗 *Vehicle Choice:* ${selectedVehicle}
👤 *Passenger Name:* ${passengerName || 'Not specified'}
📞 *Phone:* ${passengerPhone || 'Not specified'}
---------------------------------------
Please confirm cab availability and total estimated fare. Thank you!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${encoded}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center py-12 lg:py-20 overflow-hidden">
      
      {/* Background Slides with crystal-clear visibility and subtle zoom */}
      {UNIQUE_HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center md:object-[center_30%] filter brightness-105 contrast-105 transform scale-100 transition-transform duration-[10000ms] hover:scale-105"
          />
        </div>
      ))}

      {/* Gentle transparent gradient so image is 100% colorful, bright and clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/15 to-slate-950/35 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-black/10 pointer-events-none" />

      {/* Navigation Arrows - Hidden on small mobile to prevent content overlap */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-amber-400 text-slate-900 shadow-xl items-center justify-center transition-all hover:scale-110 active:scale-95 backdrop-blur-sm cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/85 hover:bg-amber-400 text-slate-900 shadow-xl items-center justify-center transition-all hover:scale-110 active:scale-95 backdrop-blur-sm cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {UNIQUE_HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === currentSlide ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Crisp Translucent Card */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="bg-slate-950/50 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl space-y-5">
              
              {/* Animated Floating Pill */}
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs sm:text-sm font-black tracking-wide shadow-md">
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>{UNIQUE_HERO_SLIDES[currentSlide].tag}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {lang === 'ta' ? (
                  <>
                    நேர்மையான சேவை & <br />
                    <span className="text-amber-400">
                      மதுரை பெஸ்ட் டிராவல்ஸ்
                    </span>
                  </>
                ) : (
                  <>
                    Premium Tourist Cabs & <br />
                    <span className="text-amber-400">
                      {UNIQUE_HERO_SLIDES[currentSlide].title}
                    </span>
                  </>
                )}
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed drop-shadow-[0_1px_5px_rgba(0,0,0,0.9)]">
                {lang === 'ta'
                  ? 'மதுரை, ராமேஸ்வரம், கொடைக்கானல், கன்னியாகுமரி அவுட்ஸ்டேஷன் பயணங்களுக்கு தூய்மையான கார்கள், நம்பகமான கட்டணம்.'
                  : UNIQUE_HERO_SLIDES[currentSlide].desc}
              </p>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                <div className="bg-white/15 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
                  <span className="block text-xl sm:text-2xl font-black text-amber-400">15,000+</span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-200">Trips Completed</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
                  <span className="block text-xl sm:text-2xl font-black text-amber-400">4.9 ★</span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-200">Customer Rating</span>
                </div>
                <div className="bg-white/15 backdrop-blur-md border border-white/20 p-3 rounded-2xl">
                  <span className="block text-xl sm:text-2xl font-black text-amber-400">100%</span>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-200">Punctual Pickup</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                <a
                  href={`tel:${PHONE_NUMBER_RAW}`}
                  className="flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-lg active:scale-95 transition-all text-sm sm:text-base"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>{lang === 'ta' ? 'இப்போதே அழைக்க' : 'Call: ' + PHONE_NUMBER}</span>
                </a>
                <Link
                  to="/packages"
                  className="flex items-center space-x-2 bg-white/95 hover:bg-white text-slate-950 font-black px-6 py-3.5 rounded-xl border border-white shadow-lg active:scale-95 transition-all text-sm sm:text-base"
                >
                  <span>{lang === 'ta' ? 'டூர் பேக்கேஜ் காண்க' : 'View Tour Packages'}</span>
                </Link>
              </div>

            </div>
          </div>

          {/* Right Column: Clean White Booking Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl border border-white rounded-3xl p-6 sm:p-7 shadow-2xl text-slate-900">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-200">
                <div>
                  <h2 className="text-xl font-black text-slate-900 flex items-center space-x-2">
                    <Car className="w-5 h-5 text-amber-500" />
                    <span>{lang === 'ta' ? 'உடனடி முன்பதிவு' : 'Instant Cab Booking'}</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === 'ta' ? 'WhatsApp மூலம் 1-கிளிக் உறுதிப்படுத்தல்' : 'Instant confirmation via WhatsApp'}
                  </p>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-full">
                  ⚡ 5 Min Dispatch
                </span>
              </div>

              {/* Trip Type Tabs */}
              <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-xl my-4 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setTripType('outstation')}
                  className={`py-2 px-1 rounded-lg transition-all text-center ${
                    tripType === 'outstation'
                      ? 'bg-amber-400 text-slate-950 font-black shadow'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {lang === 'ta' ? 'அவுட்ஸ்டேஷன்' : 'Outstation'}
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('local')}
                  className={`py-2 px-1 rounded-lg transition-all text-center ${
                    tripType === 'local'
                      ? 'bg-amber-400 text-slate-950 font-black shadow'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {lang === 'ta' ? 'உள்ளூர் வாடகை' : 'Local Rent'}
                </button>
                <button
                  type="button"
                  onClick={() => setTripType('airport')}
                  className={`py-2 px-1 rounded-lg transition-all text-center ${
                    tripType === 'airport'
                      ? 'bg-amber-400 text-slate-950 font-black shadow'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {lang === 'ta' ? 'ஏர்போர்ட் டிராப்' : 'Airport Drop'}
                </button>
              </div>

              {/* Booking Form */}
              <form onSubmit={handleWhatsAppBooking} className="space-y-3">
                
                {/* Pickup Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{lang === 'ta' ? 'பிக்கப் இடம்' : 'Pickup City / Location'}</span>
                  </label>
                  <CustomDropdown
                    value={fromCity}
                    onChange={setFromCity}
                    options={LOCATIONS}
                    icon={MapPin}
                    placeholder={lang === 'ta' ? 'பிக்கப் இடம் தேர்வு செய்க' : 'Select Pickup City'}
                  />
                </div>

                {/* Drop Location (Hidden if Local Day Rental) */}
                {tripType !== 'local' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                      <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{lang === 'ta' ? 'இறங்கும் இடம்' : 'Drop Destination'}</span>
                    </label>
                    <CustomDropdown
                      value={toCity}
                      onChange={setToCity}
                      options={LOCATIONS}
                      icon={Navigation}
                      placeholder={lang === 'ta' ? 'இறங்கும் இடம் தேர்வு செய்க' : 'Select Drop City'}
                    />
                  </div>
                )}

                {/* Date and Time Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{lang === 'ta' ? 'பயண தேதி' : 'Date'}</span>
                    </label>
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 font-medium focus:outline-none focus:border-amber-500 focus:bg-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      <span>{lang === 'ta' ? 'நேரம்' : 'Time'}</span>
                    </label>
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-sm text-slate-900 font-medium focus:outline-none focus:border-amber-500 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center space-x-1">
                    <Car className="w-3.5 h-3.5 text-amber-500" />
                    <span>{lang === 'ta' ? 'விருப்பமான கார்' : 'Select Vehicle'}</span>
                  </label>
                  <CustomDropdown
                    value={selectedVehicle}
                    onChange={setSelectedVehicle}
                    options={VEHICLES.map((v) => ({
                      value: v.name,
                      label: v.name,
                      sublabel: `${v.seats} • ${v.price}`
                    }))}
                    icon={Car}
                    placeholder={lang === 'ta' ? 'கார் தேர்வு செய்க' : 'Select Vehicle'}
                  />
                </div>

                {/* Passenger Name & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder={lang === 'ta' ? 'உங்கள் பெயர்' : 'Your Name'}
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder={lang === 'ta' ? 'மொபைல் எண்' : 'Phone Number'}
                      value={passengerPhone}
                      onChange={(e) => setPassengerPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full mt-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black py-3.5 rounded-xl shadow-lg shadow-emerald-600/25 active:scale-95 transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>{lang === 'ta' ? 'WhatsApp மூலம் புக் செய்க' : 'Book Instantly via WhatsApp'}</span>
                </button>

                {/* Direct Call Quick Link */}
                <p className="text-center text-xs text-slate-600 pt-1 font-medium">
                  Need immediate cab?{' '}
                  <a href={`tel:${PHONE_NUMBER_RAW}`} className="text-amber-600 font-extrabold hover:underline">
                    Call {PHONE_NUMBER}
                  </a>
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
