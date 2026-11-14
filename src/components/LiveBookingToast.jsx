import React, { useState, useEffect } from 'react';
import { Car, CheckCircle, X } from 'lucide-react';

const RECENT_BOOKINGS = [
  { name: 'Anand K.', from: 'Chennai', car: 'Innova Crysta', route: 'Madurai ➔ Rameswaram', time: '2 mins ago' },
  { name: 'Dr. Priya S.', from: 'Bangalore', car: 'Swift Dzire', route: 'Madurai ➔ Kodaikanal', time: '6 mins ago' },
  { name: 'Venkatesh M.', from: 'Madurai', car: 'Prime SUV Ertiga', route: 'Madurai Airport Drop', time: '11 mins ago' },
  { name: 'Sanjay R.', from: 'Coimbatore', car: 'Tempo Traveller', route: 'Madurai ➔ Munnar', time: '18 mins ago' },
  { name: 'Kavitha P.', from: 'Trichy', car: 'Swift Dzire', route: 'Madurai Local Sightseeing', time: '24 mins ago' }
];

export default function LiveBookingToast() {
  const [visible, setVisible] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    // Show toast after 4s initial delay
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    // Rotate every 16 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % RECENT_BOOKINGS.length);
        setVisible(true);
      }, 1000);
    }, 16000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const booking = RECENT_BOOKINGS[currentIdx];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 shadow-2xl animate-in slide-in-from-bottom-5 duration-500 flex items-start space-x-3 text-slate-900">
      <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0 text-amber-700">
        <Car className="w-5 h-5" />
      </div>

      <div className="flex-1 pr-2">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-black uppercase tracking-wider text-emerald-700">
            Recent Booking Confirmed
          </span>
        </div>
        <p className="text-xs font-bold text-slate-900 mt-0.5">
          {booking.name} ({booking.from}) booked <span className="text-amber-600">{booking.car}</span>
        </p>
        <p className="text-[11px] text-slate-500 font-medium">
          {booking.route} • {booking.time}
        </p>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="text-slate-400 hover:text-slate-700 p-1 rounded-lg"
        aria-label="Close notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

