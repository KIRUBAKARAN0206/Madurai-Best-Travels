import React from 'react';

export default function BrandLogo() {
  return (
    <div className="flex items-center select-none shrink-0 py-1">
      {/* Official Madurai Best Travels Logo - Responsive Scaling */}
      <img
        src="/assets/logo.png"
        alt="Madurai Best Travels - Travel with Trust"
        className="h-12 xs:h-13 sm:h-16 md:h-18 max-w-[190px] xs:max-w-[220px] sm:max-w-none w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
