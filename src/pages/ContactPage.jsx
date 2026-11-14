import React from 'react';
import PageBanner from '../components/PageBanner';
import ContactSection from '../components/ContactSection';

export default function ContactPage({ lang }) {
  return (
    <div className="bg-ambient-mesh min-h-screen text-slate-800 relative overflow-hidden">
      <PageBanner
        title={lang === 'ta' ? 'தொடர்புக்கு' : 'Contact & Booking Desk'}
        subtitle={lang === 'ta' ? 'உடனடி டிராவல்ஸ் தேவைக்கும், கட்டண விவரங்களை அறியவும் 24 மணி நேரமும் அழையுங்கள்.' : 'Reach out to our Madurai 24/7 travel desk for instant trip quotes, custom itineraries, and confirmed cab reservations.'}
        badge="24/7 Support"
        bgImage="/assets/unique/kanyakumari_banner_hd.jpg"
      />

      <ContactSection lang={lang} />
    </div>
  );
}
