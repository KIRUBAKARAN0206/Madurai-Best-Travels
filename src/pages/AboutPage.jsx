import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { 
  ShieldCheck, Award, Users, Car, Star, Clock, 
  MapPin, Phone, MessageCircle, CheckCircle2, Sparkles, 
  ArrowRight, HeartHandshake, Compass
} from 'lucide-react';
import { PHONE_NUMBER, PHONE_NUMBER_RAW, ADDRESS, EMAIL_ADDRESS } from '../data/taxiData';

export default function AboutPage() {
  const stats = [
    { value: '15,000+', label: 'Happy Journeys', icon: Users, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
    { value: '50+', label: 'Well-Maintained Cabs', icon: Car, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { value: '4.9 / 5', label: 'Customer Rating', icon: Star, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    { value: '10+ Years', label: 'Serving South India', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  ];

  const coreValues = [
    {
      icon: ShieldCheck,
      title: 'Verified & Courteous Drivers',
      desc: 'Experienced mountain & highway chauffeurs with deep knowledge of temple darshan timings, ghat roads, and safe family travel.',
      badge: 'Safety First',
      color: 'emerald'
    },
    {
      icon: Award,
      title: 'Transparent Per-Km Tariffs',
      desc: 'Zero hidden surcharges or peak-hour surges. Tolls, parking, and driver allowances are clearly documented with complete honesty.',
      badge: 'Zero Hidden Cost',
      color: 'amber'
    },
    {
      icon: Car,
      title: 'Sanitized, Spotless AC Fleet',
      desc: 'From compact sedans to luxury Tempo Travellers, all cabs undergo routine mechanical inspection, thorough sanitization, and dual AC cooling.',
      badge: 'Clean & Comfortable',
      color: 'blue'
    },
    {
      icon: Clock,
      title: '24/7 Doorstep Dispatch',
      desc: 'Punctual pickups at Madurai Airport, Railway Junction, hotels, and residences. We ensure zero waiting time for every trip.',
      badge: '100% Punctual',
      color: 'purple'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900">
      
      {/* 1. Page Banner - Thirumalai Nayakkar Palace (Full HD) */}
      <PageBanner
        title="About Madurai Best Travels"
        subtitle="Dedicated to safe, transparent, and memorable travel experiences across Madurai, Tamil Nadu & South India since 2015."
        badge="Trusted Travel Partner"
        bgImage="/assets/unique/thirumalai_banner_hd.jpg"
      />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        {/* 2. Story Section with Clean Modern Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              A Decade of Excellence in <br className="hidden sm:inline" />
              <span className="text-amber-500">Pilgrimage & Outstation Travel</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Founded in the sacred Temple City of Madurai, <strong>Madurai Best Travels</strong> was established with a clear mission: to provide families, tourists, and pilgrims with dependable, honest, and comfortable cab services without the stress of hidden charges.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you are arriving for spiritual darshan at Meenakshi Amman Temple, embarking on an early morning trip to Rameswaram, or enjoying a family holiday to Kodaikanal and Munnar, our fleet of sanitized sedans, spacious SUVs, and luxury Tempo Travellers ensures a smooth and memorable journey.
            </p>

            {/* Quick Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Transparent Fixed Per-Km Billing',
                'Police-Verified Local Drivers',
                'Airport & Railway Doorstep Pickup',
                '24/7 Dedicated Trip Assistance'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Highlights & Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s, idx) => {
              const IconComp = s.icon;
              return (
                <div 
                  key={idx} 
                  className={`bg-white p-6 rounded-2xl border ${s.border} shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center justify-center`}
                >
                  <div className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                    <IconComp className={`w-6 h-6 ${s.color}`} />
                  </div>
                  <span className={`text-2xl sm:text-3xl font-black ${s.color} block`}>
                    {s.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-600 mt-1 block">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>

        </section>

        {/* 3. Core Service Standards / Pillars */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-black uppercase tracking-wider mb-2">
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>Our Core Standards</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Customers Rely on Madurai Best Travels
            </h3>
            <p className="text-slate-600 text-sm mt-1.5">
              Every trip is handled with personalized care, high hygiene standards, and total punctuality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white border border-slate-200 hover:border-amber-400 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mb-4">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded">
                      {v.badge}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base mt-2.5 mb-2">
                      {v.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Fleet Preview Link Card */}
        <section className="bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400">
              Complete Fleet Availability
            </span>
            <h3 className="text-2xl sm:text-3xl font-black">
              Explore Our Clean, Modern Fleet & Tariffs
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Choose from Swift Dzire, Toyota Etios, Maruti Ertiga, Toyota Innova, Innova Crysta, and Tempo Travellers starting at ₹13/km.
            </p>
          </div>
          <Link
            to="/vehicles"
            className="shrink-0 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black px-6 py-3.5 rounded-xl text-sm shadow-lg flex items-center space-x-2 transition-transform active:scale-95"
          >
            <span>View Full Tariff Chart</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* 5. Head Office & Direct Contact Card */}
        <section className="bg-white border-2 border-amber-200/80 rounded-3xl p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-black uppercase tracking-wider text-amber-600">
                Official Head Office
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                Madurai Best Travels Booking Desk
              </h3>
              <div className="flex items-start space-x-2 text-slate-600 text-sm">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{ADDRESS}</span>
              </div>
              <p className="text-xs text-slate-500">
                Open 24 Hours • 7 Days a Week • Direct Support: {EMAIL_ADDRESS}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="bg-slate-950 hover:bg-slate-900 text-amber-400 font-black px-6 py-3.5 rounded-xl text-sm text-center shadow flex items-center justify-center space-x-2 transition-transform active:scale-95"
              >
                <Phone className="w-4 h-4 fill-amber-400" />
                <span>Call {PHONE_NUMBER}</span>
              </a>
              <a
                href={`https://wa.me/${PHONE_NUMBER_RAW}?text=Hi%20Madurai%20Best%20Travels,%20I%20am%20interested%20in%20booking%20a%20cab.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-3.5 rounded-xl text-sm text-center shadow flex items-center justify-center space-x-2 transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Instant Booking</span>
              </a>
            </div>

          </div>
        </section>

      </div>

    </div>
  );
}
