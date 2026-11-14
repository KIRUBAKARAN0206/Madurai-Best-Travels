import React from 'react';
import { 
  ShieldCheck, BadgeIndianRupee, Clock, UserCheck, 
  Headset, Sparkles, PhoneCall, CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US, PHONE_NUMBER, PHONE_NUMBER_RAW } from '../data/taxiData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  BadgeIndianRupee: BadgeIndianRupee,
  Clock: Clock,
  UserCheck: UserCheck,
  Headset: Headset,
  Sparkles: Sparkles
};

const COLOR_THEMES = [
  { border: 'border-amber-300', iconBg: 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950', badge: 'bg-amber-50 text-amber-900' },
  { border: 'border-emerald-300', iconBg: 'bg-gradient-to-tr from-emerald-500 to-teal-400 text-white', badge: 'bg-emerald-50 text-emerald-900' },
  { border: 'border-blue-300', iconBg: 'bg-gradient-to-tr from-blue-600 to-indigo-500 text-white', badge: 'bg-blue-50 text-blue-900' },
  { border: 'border-purple-300', iconBg: 'bg-gradient-to-tr from-purple-500 to-pink-500 text-white', badge: 'bg-purple-50 text-purple-900' },
  { border: 'border-rose-300', iconBg: 'bg-gradient-to-tr from-rose-500 to-red-500 text-white', badge: 'bg-rose-50 text-rose-900' },
  { border: 'border-amber-300', iconBg: 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-slate-950', badge: 'bg-amber-50 text-amber-900' }
];

export default function WhyChooseUs({ lang }) {
  return (
    <section id="why-us" className="py-24 bg-ambient-mesh border-t border-slate-200 relative overflow-hidden">
      
      {/* Ambient background glow orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>{lang === 'ta' ? 'எங்கள் சிறப்பம்சங்கள்' : 'Why Madurai Best Travels'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'ta' ? 'ஏன் எங்களை நீங்கள் தேர்ந்தெடுக்க வேண்டும்?' : 'Why Thousands of Travelers Trust Us'}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full my-4" />
          <p className="mt-2 text-slate-600 text-base sm:text-lg font-medium">
            {lang === 'ta'
              ? 'மதுரையில் நேர்மையான சேவை, சுத்தமான கார்கள் மற்றும் சிறந்த வாடிக்கையாளர் திருப்தி.'
              : 'Dedicated to providing safe, comfortable, and affordable cab rides across South India with zero surge pricing.'}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            const theme = COLOR_THEMES[idx % COLOR_THEMES.length];

            return (
              <div
                key={idx}
                className={`bg-white/95 backdrop-blur-sm p-8 rounded-3xl border-2 ${theme.border} hover:border-amber-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group shadow-md flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Step Process with South India background clearly visible */}
        <div className="mt-20 relative overflow-hidden border-2 border-amber-400 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-85 filter brightness-105"
            style={{ backgroundImage: `url('/assets/cinematic_south_india--hgjZYWV.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/45 to-slate-950/75" />

          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black text-slate-950 uppercase tracking-widest bg-gradient-to-r from-amber-400 to-yellow-400 px-4 py-1.5 rounded-full shadow">
                Simple 3-Step Process
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-4 drop-shadow">
                How To Book Your Ride in 1 Minute
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <div className="text-center relative space-y-3 bg-white/95 backdrop-blur-md p-7 rounded-2xl border border-white shadow-xl text-slate-900 transform hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-2xl flex items-center justify-center shadow-md">
                  1
                </div>
                <h4 className="text-lg font-black text-slate-900">Choose Your Taxi</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Select from Swift Dzire Sedan, Ertiga SUV, Innova Crysta, or Tempo Traveller based on your group size.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center relative space-y-3 bg-white/95 backdrop-blur-md p-7 rounded-2xl border border-white shadow-xl text-slate-900 transform hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black text-2xl flex items-center justify-center shadow-md">
                  2
                </div>
                <h4 className="text-lg font-black text-slate-900">Share Date & Route</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Enter your pickup spot in Madurai and your destination or tour package via form or instant WhatsApp.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center relative space-y-3 bg-white/95 backdrop-blur-md p-7 rounded-2xl border border-white shadow-xl text-slate-900 transform hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-black text-2xl flex items-center justify-center shadow-md">
                  3
                </div>
                <h4 className="text-lg font-black text-slate-900">Enjoy Doorstep Pickup</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Our professional driver arrives on time in a sanitized AC cab. Enjoy your comfortable journey!
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href={`tel:${PHONE_NUMBER_RAW}`}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-base"
              >
                <PhoneCall className="w-5 h-5 fill-slate-950" />
                <span>Call Us Now: {PHONE_NUMBER}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
