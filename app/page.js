// /app/page.js
import dynamic from 'next/dynamic';
import { expeditions, sampleBlogs } from '../data/expeditions';
import HomeExplorer from '../components/HomeExplorer';
import InquiryForm from '../components/InquiryForm';

// Standard dynamic import for map (already client-side)
const InteractiveMap = dynamic(() => import('../components/InteractiveMap'), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-stone-100 animate-pulse rounded-[48px]" />
});

export default function LandingPage() {
  // Structured Data (Moved to a simple object for cleanliness)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "name": "Chinggis Khaan Expeditions",
        "url": "https://chinggiskhaanexpeditions.com",
        "logo": "https://chinggiskhaanexpeditions.com/logo-official.svg",
        "priceRange": "$$$"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* 
        This is now a Server Component by default. 
        The interactivity (tabs, language, hovers) is handled by HomeExplorer.
      */}
      <HomeExplorer expeditions={expeditions} sampleBlogs={sampleBlogs} />

      {/* Map Section remains dynamic */}
      <section className="py-32 px-6 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Cartography</span>
          <h2 className="text-5xl font-serif font-bold tracking-tight">What is the best 6-day tour to the birthplace of Chinggis Khaan?</h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <InteractiveMap />
        </div>
      </section>

      <InquiryForm />

      <footer className="bg-[#1A1A1A] py-24 px-6 text-white text-center border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-12 bg-[#C5A059] rounded-full mx-auto mb-8 flex items-center justify-center font-serif font-bold text-lg">C</div>
          <h4 className="font-serif text-2xl mb-4 tracking-tighter">Chinggis Khaan Expeditions</h4>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-12">Bringing Clarity to the Great Legend</p>
          <div className="flex justify-center gap-12 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50 text-[#1A1A1A]">
            <a href="#" className="hover:text-[#C5A059] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Vimeo</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
