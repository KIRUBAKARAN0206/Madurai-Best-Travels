import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function PageBanner({ title, subtitle, badge, bgImage = "/assets/unique/hero_golden_temple.jpg" }) {
  return (
    <div className="relative min-h-[300px] sm:min-h-[350px] flex items-center overflow-hidden bg-slate-950 text-white border-b-2 border-amber-400">
      
      {/* Background Image - Bright, Vivid, High-Resolution & 100% Edge-to-Edge */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-100 filter brightness-105 contrast-105 transform scale-100 transition-transform duration-[12000ms] hover:scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      
      {/* Gentle Directional Fade for text contrast while preserving 100% HD clarity */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/20 via-55% to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent pointer-events-none" />

      {/* Decorative Golden Ambient Accent */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-14 sm:py-16">
        <div className="max-w-3xl space-y-4">
          
          {/* Breadcrumb - Sleek pill without heavy box */}
          <div className="inline-flex items-center space-x-2 text-xs font-black text-amber-400 bg-slate-950/50 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10 shadow-sm">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-amber-400/80" />
            <span className="text-slate-200">{title}</span>
          </div>

          {/* Badge */}
          {badge && (
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
                <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
                <span>{badge}</span>
              </div>
            </div>
          )}

          {/* Title - Bold, Crystal Clear with rich drop shadow */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] leading-tight">
            {title}
          </h1>

          {/* Subtitle - Open, clean, natural flow without bounding box */}
          {subtitle && (
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)] max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
