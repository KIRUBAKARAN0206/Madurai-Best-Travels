import React, { useState } from 'react';
import { Star, Quote, ChevronDown, ChevronUp, MessageSquare, HelpCircle, Sparkles } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../data/taxiData';

export default function Testimonials({ lang }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="py-24 bg-ambient-mesh border-t border-slate-200 relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
            <MessageSquare className="w-3.5 h-3.5 fill-slate-950" />
            <span>{lang === 'ta' ? 'வாடிக்கையாளர் கருத்துகள்' : 'Customer Reviews'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {lang === 'ta' ? 'பயணிகளின் உண்மையான அனுபவங்கள்' : 'What Our Happy Travellers Say'}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full my-4" />
          <p className="mt-2 text-slate-600 text-base sm:text-lg font-medium">
            {lang === 'ta'
              ? 'எங்களுடன் பயணித்த ஆயிரக்கணக்கான வாடிக்கையாளர்களின் நம்பிக்கையான மதிப்பாய்வுகள்.'
              : 'Real verified reviews from pilgrims, families, and solo travellers who explored Tamil Nadu with us.'}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {TESTIMONIALS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl border-2 border-slate-200/90 relative flex flex-col justify-between hover:border-amber-400 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <Quote className="w-12 h-12 text-amber-200 absolute top-6 right-6 opacity-60 group-hover:text-amber-300 transition-colors" />
              
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-black text-slate-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    5.0 Verified Trip
                  </span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 italic font-medium">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                <div>
                  <h4 className="font-black text-slate-900 text-base group-hover:text-amber-600 transition-colors">
                    {rev.name}
                  </h4>
                  <span className="text-slate-500 font-bold">{rev.city} • Verified Customer</span>
                </div>
                <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-black px-3.5 py-1.5 rounded-xl shadow-xs">
                  {rev.car}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-3 shadow-md">
              <HelpCircle className="w-3.5 h-3.5 fill-slate-950" />
              <span>{lang === 'ta' ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Questions'}</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900">
              Got Questions? We Have Answers!
            </h3>
            <p className="text-slate-600 text-sm mt-2 font-medium">
              Everything you need to know about our rates, toll policies, and cancellation.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`bg-white/95 backdrop-blur-sm border-2 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                    isOpen ? 'border-amber-400 shadow-md' : 'border-slate-200 hover:border-amber-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between text-slate-900 font-black text-sm sm:text-base hover:text-amber-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3 bg-amber-50/20">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
