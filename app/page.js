// /app/page.js
import dynamic from 'next/dynamic';
import { expeditions, travelGuides } from '../data/itinerary';
import HomeExplorer from '../components/HomeExplorer';
import InquiryForm from '../components/InquiryForm';

const InteractiveMap = dynamic(() => import('../components/InteractiveMap'), { 
  ssr: false,
  loading: () => <div className="h-[700px] w-full bg-stone-100 animate-pulse rounded-[48px] border border-black/5" />
});

export default function LandingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "name": "Chinggis Khaan Expeditions",
        "url": "https://chinggiskhaanexpeditions.com",
        "logo": "https://chinggiskhaanexpeditions.com/logo-official.svg",
        "image": "https://chinggiskhaanexpeditions.com/images/chinggis-khaan-expedition-signature-hero.avif",
        "description": "Specialists in rugged 4x4 expeditions and private remote wilderness safaris in Mongolia.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ulaanbaatar",
          "addressCountry": "MN"
        },
        "priceRange": "$$$$"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <HomeExplorer expeditions={expeditions} travelGuides={travelGuides} />

      <section className="py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-[10px] mb-6 block">Tactical Geography</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-8">Self-Supported Overland Journeys <br /> Across the Uncharted Taiga.</h2>
          <p className="max-w-2xl mx-auto text-xl text-[#666] font-light leading-relaxed">
            We navigate the northern frontier where standard tours cannot reach. Our routes are designed for those seeking high-capability 4x4 exploration and historical immersion.
          </p>
        </div>
        <div className="max-w-7xl mx-auto shadow-2xl rounded-[60px] overflow-hidden border border-black/5">
          <InteractiveMap />
        </div>
      </section>

      <InquiryForm />

      <footer className="bg-[#1A1A1A] py-32 px-6 text-white text-center border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-16 bg-[#C5A059] rounded-full mx-auto mb-10 flex items-center justify-center font-serif font-bold text-2xl shadow-xl">C</div>
          <h4 className="font-serif text-3xl mb-4 tracking-tighter">Chinggis Khaan Expeditions</h4>
          <p className="text-white/30 text-[11px] uppercase tracking-[0.5em] mb-16">Rugged 4x4 Expeditions & Private Wilderness Safaris</p>
          <div className="flex justify-center gap-16 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
            <a href="#" className="hover:text-[#C5A059] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Vimeo</a>
            <a href="mailto:chinggiskhanexpeditions@gmail.com" className="hover:text-white transition-colors">Direct Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
