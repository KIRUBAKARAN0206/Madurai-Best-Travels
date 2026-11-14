import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, Clock, Sparkles } from 'lucide-react';
import { PHONE_NUMBER, PHONE_NUMBER_RAW, EMAIL_ADDRESS, ADDRESS } from '../data/taxiData';

export default function ContactSection({ lang }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    travelDetails: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `*Customer Enquiry - Madurai Best Travels*
---------------------------------------
👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
🚖 *Travel Details:* ${formData.travelDetails || 'General Enquiry'}
💬 *Message:* ${formData.message || 'No additional note'}
---------------------------------------
Please get back to me with quotation.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${PHONE_NUMBER_RAW}?text=${encoded}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-ambient-mesh border-t border-slate-200 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>{lang === 'ta' ? 'எங்களை தொடர்பு கொள்ள' : 'Contact & Booking Desk'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'ta' ? 'நாங்கள் உதவ எப்போதும் தயார்!' : "We're Ready To Take You Places"}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full my-4" />
          <p className="mt-2 text-slate-600 text-base sm:text-lg font-medium">
            {lang === 'ta'
              ? '24 மணி நேரமும் உடனடி டாக்ஸி தேவைக்கும், கட்டண விவரங்களை அறியவும் அழையுங்கள்.'
              : 'Call or WhatsApp us 24/7 for instant trip quotes, custom itineraries, and confirmed cab reservations.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card (Amber) */}
            <a
              href={`tel:${PHONE_NUMBER_RAW}`}
              className="flex items-start space-x-4 bg-white/95 backdrop-blur-sm border-2 border-amber-300 hover:border-amber-400 p-6 rounded-3xl transition-all duration-300 group hover:shadow-2xl transform hover:-translate-y-1 shadow-md"
            >
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-400 flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6 text-slate-950 fill-slate-950" />
              </div>
              <div>
                <span className="text-xs text-amber-900 uppercase tracking-wider font-black block">24/7 Phone Booking</span>
                <span className="text-2xl font-black text-slate-900 group-hover:text-amber-600 transition-colors block mt-0.5">
                  {PHONE_NUMBER}
                </span>
                <span className="text-xs text-emerald-600 font-black">✓ Instant Call Response</span>
              </div>
            </a>

            {/* WhatsApp Card (Emerald) */}
            <a
              href={`https://wa.me/${PHONE_NUMBER_RAW}?text=Hi%20Madurai%20Best%20Travels,%20I%20need%20cab%20details`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4 bg-white/95 backdrop-blur-sm border-2 border-emerald-300 hover:border-emerald-400 p-6 rounded-3xl transition-all duration-300 group hover:shadow-2xl transform hover:-translate-y-1 shadow-md"
            >
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <span className="text-xs text-emerald-900 uppercase tracking-wider font-black block">WhatsApp Chat Desk</span>
                <span className="text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors block mt-0.5">
                  Chat on WhatsApp
                </span>
                <span className="text-xs text-slate-600 font-semibold">Send route & get quick fare quotes</span>
              </div>
            </a>

            {/* Email & Office Card */}
            <div className="bg-white/95 backdrop-blur-sm border-2 border-slate-200/90 p-6 rounded-3xl space-y-5 shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block">Email Support</span>
                  <span className="text-sm font-bold text-slate-800">{EMAIL_ADDRESS}</span>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-2 border-t border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block">Madurai Main Office</span>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold mt-0.5">
                    {ADDRESS}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 pt-2 border-t border-slate-100">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-500 to-violet-500 flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-bold block">Operating Hours</span>
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    24 Hours / 7 Days Live
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-md border-2 border-amber-300 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Send an Instant Trip Enquiry</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mb-6">
                Fill this quick form and our dispatcher will reply on WhatsApp in under 5 minutes with best taxi rates.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">Trip Details (Pickup, Drop, Date, Car Type) *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Madurai to Rameswaram, 15 Nov, Innova Crysta"
                    value={formData.travelDetails}
                    onChange={(e) => setFormData({ ...formData, travelDetails: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 mb-1">Special Requirements or Notes (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need baby seat, airport pickup timing, elderly passenger luggage assistance..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black py-4 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-[1.01] active:scale-95 text-base cursor-pointer"
                >
                  <Send className="w-5 h-5 fill-slate-950" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
