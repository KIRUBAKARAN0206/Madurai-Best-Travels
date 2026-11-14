import React from 'react';
import PageBanner from '../components/PageBanner';
import FareCalculator from '../components/FareCalculator';
import { FAQS } from '../data/taxiData';

const PRASANNA_DISTANCE_CHART = [
  { dest: 'Chennai', km: '493 km', time: '7 hr 30 min', dzire: '₹6,782', ertiga: '₹8,874', innova: '₹10,353', tempo: '₹12,800' },
  { dest: 'Bangalore', km: '435 km', time: '8 hr', dzire: '₹6,307', ertiga: '₹7,830', innova: '₹9,135', tempo: '₹11,500' },
  { dest: 'Salem', km: '229 km', time: '4 hr 30 min', dzire: '₹3,714', ertiga: '₹4,122', innova: '₹4,809', tempo: '₹6,200' },
  { dest: 'Coimbatore', km: '228 km', time: '5 hr', dzire: '₹3,349', ertiga: '₹4,104', innova: '₹4,788', tempo: '₹5,900' },
  { dest: 'Trichy', km: '135 km', time: '2 hr 15 min', dzire: '₹2,220', ertiga: '₹2,700', innova: '₹3,150', tempo: '₹4,100' },
  { dest: 'Pondicherry', km: '330 km', time: '6 hr 30 min', dzire: '₹4,969', ertiga: '₹5,940', innova: '₹6,930', tempo: '₹8,500' },
  { dest: 'Rameswaram', km: '173 km', time: '3 hr 30 min', dzire: '₹2,816', ertiga: '₹3,460', innova: '₹4,037', tempo: '₹5,100' },
  { dest: 'Kanyakumari', km: '245 km', time: '5 hr', dzire: '₹3,817', ertiga: '₹4,410', innova: '₹5,145', tempo: '₹6,600' },
  { dest: 'Trivandrum', km: '305 km', time: '6 hr', dzire: '₹4,851', ertiga: '₹5,490', innova: '₹6,405', tempo: '₹7,900' }
];

export default function FareCalculatorPage({ lang }) {
  return (
    <div className="bg-slate-50/70">
      <PageBanner
        title={lang === 'ta' ? 'கட்டண கணக்கீடு' : 'Instant Fare Calculator'}
        subtitle={lang === 'ta' ? 'மதுரையிலிருந்து அனைத்து இடங்களுக்கும் வெளிப்படையான கட்டண கணக்கீடு.' : 'Calculate exact estimated cab fares, travel distance, and travel time from Madurai in real-time.'}
        badge="Accurate Rates"
        bgImage="/assets/prasanna/Bangalor-BrJY6plI.jpg"
      />

      {/* Interactive Tool */}
      <FareCalculator lang={lang} />

      {/* Comprehensive Fare Chart Table */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-amber-600 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
            Quick Reference Table
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
            One-Way Tariff Chart from Madurai
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-1">
            Fixed, transparent rates with zero surge pricing for popular destinations.
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-900 text-white font-black uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-5">Destination</th>
                  <th className="py-4 px-5">Distance & Time</th>
                  <th className="py-4 px-5">Sedan (Dzire/Etios)</th>
                  <th className="py-4 px-5">SUV (Ertiga)</th>
                  <th className="py-4 px-5">Innova AC</th>
                  <th className="py-4 px-5">Tempo Traveller</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {PRASANNA_DISTANCE_CHART.map((row, idx) => (
                  <tr key={idx} className="hover:bg-amber-50/50 transition-colors">
                    <td className="py-3.5 px-5 font-black text-slate-900">
                      Madurai ➔ {row.dest}
                    </td>
                    <td className="py-3.5 px-5 text-slate-500 font-bold">
                      {row.km} ({row.time})
                    </td>
                    <td className="py-3.5 px-5 font-bold text-slate-800">{row.dzire}</td>
                    <td className="py-3.5 px-5 font-bold text-slate-800">{row.ertiga}</td>
                    <td className="py-3.5 px-5 font-black text-amber-600">{row.innova}</td>
                    <td className="py-3.5 px-5 font-bold text-slate-800">{row.tempo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 font-medium text-center">
            *Tolls and parking extra as per actual highway receipts. Round-trip discount packages available upon request.
          </div>
        </div>
      </section>

      {/* Calculator FAQs */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 text-center mb-8">
            Important Information About Fares & Tolls
          </h3>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-1.5">
                <h4 className="font-black text-slate-900 text-sm sm:text-base">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
