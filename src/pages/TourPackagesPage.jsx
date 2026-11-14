import React from 'react';
import PageBanner from '../components/PageBanner';
import TourPackages from '../components/TourPackages';

export default function TourPackagesPage({ lang }) {
  return (
    <div className="bg-ambient-mesh min-h-screen text-slate-800 relative overflow-hidden">
      <PageBanner
        title={lang === 'ta' ? 'டூர் பேக்கேஜ்கள்' : 'Curated Tour Packages'}
        subtitle={lang === 'ta' ? 'மதுரை, ராமேஸ்வரம், கொடைக்கானல், கன்னியாகுமரி மற்றும் மூணார் பயணங்களுக்கு பிரத்யேக பேக்கேஜ்கள்.' : 'Handcrafted spiritual temple pilgrimages and relaxing hill station holiday packages with personalized pickup.'}
        badge="Best Holiday Deals"
        bgImage="/assets/unique/kodaikanal_banner_hd.jpg"
      />

      <TourPackages lang={lang} />
    </div>
  );
}
