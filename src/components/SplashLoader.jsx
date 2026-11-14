import React, { useState, useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 12;
      });
    }, 120);

    // Start exit transition after 1.6s
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 1600);

    // Unmount completely after exit fade (2.2s total)
    const doneTimer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(() => setLoading(false), 300);
  };

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-[#0a0f1d] to-slate-950 text-white select-none transition-all duration-700 ease-out ${
        exiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      aria-label="Welcome to Madurai Best Travels"
    >
      {/* Ambient Radial Golden Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-amber-400/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-500/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-5 right-5 sm:top-8 sm:right-8 text-xs font-bold text-slate-400 hover:text-amber-400 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 transition-all backdrop-blur-md cursor-pointer"
      >
        Skip ✕
      </button>

      {/* Main Animated Logo Card */}
      <div className="relative z-10 flex flex-col items-center px-6 max-w-lg w-full text-center">
        
        {/* Pulsing Decorative Golden Ring */}
        <div className="relative mb-6">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-amber-500/20 via-yellow-400/30 to-amber-500/20 blur-xl animate-pulse" />
          
          {/* Logo with gentle floating and shine sweep */}
          <div className="relative bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-3xl border border-amber-400/30 shadow-[0_0_50px_rgba(245,158,11,0.25)]">
            <img
              src="/assets/logo.png"
              alt="Madurai Best Travels Logo"
              className="w-64 sm:w-80 md:w-96 max-w-[82vw] h-auto object-contain drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] transform transition-transform duration-1000 scale-100 animate-float"
            />
          </div>
        </div>

        {/* Brand Tagline & Rating */}
        <div className="space-y-2 mt-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-black tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 fill-amber-400" />
            <span>Premium Cab & Outstation Service</span>
          </div>

          <div className="flex items-center justify-center space-x-1 pt-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs font-bold text-slate-300 ml-1.5">Trusted by 15,000+ Travelers</span>
          </div>
        </div>

        {/* Sleek Golden Loading Bar */}
        <div className="w-48 sm:w-64 mt-6">
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden border border-white/10 p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-full transition-all duration-150 ease-out shadow-[0_0_12px_rgba(245,158,11,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[11px] font-bold text-slate-400 mt-2 block tracking-widest uppercase">
            Loading Experience...
          </span>
        </div>

      </div>
    </div>
  );
}
