'use client';

import dynamic from 'next/dynamic';
import HomeExplorer from '../components/HomeExplorer';
import InquiryForm from '../components/InquiryForm';
import { expeditions, travelGuides } from '../data/itinerary';

const GlobalOverviewMap = dynamic(() => import('../components/maps/GlobalOverviewMap'), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-stone-100 animate-pulse rounded-[48px] border border-black/5" />
});

const KhentiiMap = dynamic(() => import('../components/maps/KhentiiTraverseMap'), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-stone-100 animate-pulse rounded-[48px]" />
});

const GobiMap = dynamic(() => import('../components/maps/GobiVoidMap'), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-stone-100 animate-pulse rounded-[48px]" />
});

const AltaiFestivalMap = dynamic(() => import('../components/maps/AltaiFestivalMap'), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-stone-100 animate-pulse rounded-[48px]" />
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

      {/* Hero Explorer Section */}
      <HomeExplorer expeditions={expeditions} travelGuides={travelGuides} />

      {/* Tactical Geography Section */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-24">
          <span className="text-[#C5A059] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Tactical Geography</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-8">
            Self-Supported Overland Journeys <br /> 
            <span className="text-[#C5A059]">Across the Uncharted Taiga.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-[#666] font-light leading-relaxed">
            We navigate the northern frontier where standard tours cannot reach. Our routes are designed for those seeking high-capability 4x4 exploration and historical immersion.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <GlobalOverviewMap />
        </div>
      </section>

      {/* Lead Generation Form */}
      <InquiryForm />

      {/* Regional Tactical Intelligence Section */}
      <section className="py-40 px-6 bg-[#F8F5F0] border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <span className="text-[#C5A059] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">Regional Intelligence</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight mb-8 uppercase">Tactical Frontier <span className="text-[#C5A059]">Sectors</span></h2>
            <p className="max-w-2xl mx-auto text-lg text-[#666] font-light leading-relaxed">
              Explore the specific geographic corridors and operational nodes for each of our primary expedition sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Khentii Map */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-serif font-bold uppercase tracking-tight">Khentii Taiga</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">Sector 01</span>
              </div>
              <KhentiiMap />
              <p className="text-sm text-[#666] font-light italic">Primary focus on sub-Siberian taiga navigation and sacred topography.</p>
            </div>

            {/* Gobi Map */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-serif font-bold uppercase tracking-tight">Gobi Desert</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">Sector 02</span>
              </div>
              <GobiMap />
              <p className="text-sm text-[#666] font-light italic">High-heat logistics and deep sand extraction protocols in the Nemegt Basin.</p>
            </div>

            {/* Altai Festival Map */}
            <div className="space-y-6">
              <div className="flex justify-between items-end">
                <h3 className="text-2xl font-serif font-bold uppercase tracking-tight">Altai Festival</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#C5A059]">Sector 03</span>
              </div>
              <AltaiFestivalMap />
              <p className="text-sm text-[#666] font-light italic">Cultural immersion and nomadic games logistics in the Bayan-Ölgii region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Footer */}
      <footer className="bg-[#1A1A1A] py-32 px-6 text-white text-center border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-16 bg-[#C5A059] rounded-full mx-auto mb-10 flex items-center justify-center font-serif font-bold text-2xl shadow-xl">C</div>
          <h4 className="font-serif text-3xl mb-4 tracking-tighter text-[#F8F5F0]">Chinggis Khaan Expeditions</h4>
          <p className="text-white/30 text-[11px] uppercase tracking-[0.5em] mb-16 font-black">Rugged 4x4 Expeditions & Private Wilderness Safaris</p>
          <div className="flex justify-center gap-16 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
            <a href="#" className="hover:text-[#C5A059] transition-all">Instagram</a>
            <a href="#" className="hover:text-[#C5A059] transition-all">Vimeo</a>
            <a href="mailto:chinggiskhanexpeditions@gmail.com" className="hover:text-white transition-all">Direct Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
