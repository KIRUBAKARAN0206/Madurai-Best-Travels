import React from 'react';
import PageBanner from '../components/PageBanner';
import Fleet from '../components/Fleet';
import { OUTSTATION_PACKAGES, PHONE_NUMBER, PHONE_NUMBER_RAW } from '../data/taxiData';
import { 
  Sparkles, MessageCircle, Phone, CheckCircle2, ShieldCheck, 
  Car, Users, Wind, MapPin, AlertCircle, Info, CalendarCheck
} from 'lucide-react';

export default function VehiclesPage({ lang }) {
  const handleQuickBook = (vehicleName, perDay, runningKm) => {
    const text = encodeURIComponent(`Hi Madurai Best Travels, I am planning an outstation package trip (4-5 days) and interested in booking *${vehicleName}* (${perDay}/day + ${runningKm}). Please let me know vehicle availability and total fare estimate.`);
    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-ambient-mesh min-h-screen text-slate-800 relative overflow-hidden">
      
      {/* 1. Page Banner */}
      <PageBanner
        title={lang === 'ta' ? 'அவுட்ஸ்டேஷன் பேக்கேஜ் & வாகன கட்டணம்' : 'Outstation Tour Packages & Fleet Tariffs'}
        subtitle={lang === 'ta' ? '4 நாள், 5 நாள் அவுட்ஸ்டேஷன் பயணங்களுக்கு வெளிப்படையான பர்-டே ரெண்ட் & ரன்னிங் கிலோமீட்டர் கட்டணங்கள்.' : 'Transparent Per-Day Rent & Running Kilometer tariffs tailored for 3-Day, 4-Day & 5-Day outstation tours, spiritual circuits & family holidays.'}
        badge="Multi-Day Special Tariffs"
        bgImage="/assets/unique/highway_banner_hd.jpg"
      />

      {/* 2. MAIN OUTSTATION MULTI-DAY PACKAGES SECTION */}
      <section className="pt-16 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <CalendarCheck className="w-4 h-4 fill-slate-950" />
            <span>4-Day & 5-Day Tour Package Tariffs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Outstation Per-Day Rent & Running Km Rates
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full my-4" />
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Best choice for customized temple pilgrimages (Rameswaram, Kanyakumari, Thiruchendur) and misty hill station tours (Kodaikanal, Munnar, Ooty).
          </p>
        </div>

        {/* 5 Outstation Vehicle Package Cards Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {OUTSTATION_PACKAGES.map((item, idx) => (
            <div
              key={item.id}
              className={`bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border-2 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 flex flex-col justify-between ${
                idx === 1 || idx === 2 ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-200 hover:border-amber-400'
              }`}
            >
              <div>
                
                {/* Vehicle Cutout Image Header */}
                <div className="relative h-56 bg-gradient-to-br from-amber-50 via-slate-50 to-amber-100/40 p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                  {/* Amber Glow */}
                  <div className="absolute w-44 h-24 rounded-full bg-amber-400/20 blur-xl pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-slate-950 text-amber-400 px-3 py-1 rounded-full shadow">
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-300">
                      ✓ AC Included
                    </span>
                  </div>

                  {/* Vehicle Photo */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-44 object-contain drop-shadow-xl transform hover:scale-105 transition-transform duration-500"
                  />

                  {/* Capacity Tag at Bottom of Photo */}
                  <div className="absolute bottom-2.5 left-3.5">
                    <span className="inline-flex items-center space-x-1 text-[11px] font-black bg-white/90 text-slate-800 px-2.5 py-0.5 rounded-md border border-slate-200 shadow-xs">
                      <Users className="w-3 h-3 text-amber-500" />
                      <span>{item.capacity}</span>
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  
                  {/* Title & Category */}
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-black text-slate-900 mt-0.5">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {item.idealFor}
                    </p>
                  </div>

                  {/* Highlighted Tariff Box */}
                  <div className="bg-gradient-to-br from-amber-50/80 via-yellow-50/40 to-white p-4 rounded-2xl border-2 border-amber-200/90 space-y-3">
                    
                    {/* Per Day Rent */}
                    <div className="flex justify-between items-center pb-2 border-b border-amber-200/60">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Per Day Rent</span>
                        <span className="text-[11px] text-slate-400">(Base vehicle rental)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-slate-950">{item.perDay}</span>
                        <span className="text-xs font-bold text-amber-800 block">/ day</span>
                      </div>
                    </div>

                    {/* Running Km Rate */}
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs font-bold text-slate-600 block">Running Kilometre</span>
                        <span className="text-[11px] text-slate-400">(Actual distance run)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-amber-600">{item.runningKm}</span>
                        <span className="text-xs font-bold text-slate-500 block">per km</span>
                      </div>
                    </div>

                  </div>

                  {/* Terms & Conditions Note */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-[11px] text-slate-600 flex items-start space-x-2">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="leading-tight font-medium">
                      <strong className="text-slate-800">Extra Charges:</strong> Tollgate, parking, driver allowance, hills (ghat road) & other state permit extra.
                    </span>
                  </div>

                </div>
              </div>

              {/* Two High-Converting Action Buttons: Direct Call & WhatsApp */}
              <div className="p-6 pt-0 space-y-2.5">
                {/* 1. Direct Phone Call Button - Maximum Organic Calls */}
                <a
                  href={`tel:${PHONE_NUMBER_RAW}`}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black py-3.5 rounded-xl shadow-md transition-all duration-300 text-sm active:scale-95"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call to Book: {PHONE_NUMBER}</span>
                </a>

                {/* 2. WhatsApp Booking Button */}
                <button
                  onClick={() => handleQuickBook(item.name, item.perDay, item.runningKm)}
                  className="w-full flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all duration-300 text-xs shadow-sm active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  <span>Enquire on WhatsApp</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Highlighted Terms Summary Banner */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-amber-300 p-6 sm:p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Transparent Tariff Guarantee</span>
            </div>
            <h3 className="text-xl font-black text-slate-900 mt-1">
              Planning a 4-Day or 5-Day Outstation Tour from Madurai?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-medium">
              We provide fully sanitized AC vehicles with polite, verified local drivers experienced in Southern temple circuits and ghat roads. Tollgate, parking, driver allowance, hill station charges, and interstate permits are billed transparently with zero hidden surcharges.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="inline-flex items-center justify-center space-x-2 bg-slate-950 hover:bg-slate-900 text-amber-400 font-black px-6 py-3.5 rounded-xl text-sm shadow-xl transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 fill-amber-400" />
              <span>Call {PHONE_NUMBER}</span>
            </a>
            <a
              href={`https://wa.me/${PHONE_NUMBER_RAW}?text=Hi%20Madurai%20Best%20Travels,%20I%20am%20planning%20a%204-day%20or%205-day%20outstation%20trip.%20Please%20share%20vehicle%20package%20options.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-3.5 rounded-xl text-sm shadow-xl transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </section>

      {/* 3. General Fleet Section with Outstation, Day Rental & Airport Tabs */}
      <Fleet lang={lang} />
    </div>
  );
}
