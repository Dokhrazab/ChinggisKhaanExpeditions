// /app/expeditions/[id]/page.js
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { expeditions, dayImages } from '../../../data/itinerary';
import InquiryForm from '../../../components/InquiryForm';

const AltaiMap = dynamic(() => import('../../../components/maps/AltaiFestivalMap'), { ssr: false });
const KhentiiMap = dynamic(() => import('../../../components/maps/KhentiiTraverseMap'), { ssr: false });
const GobiMap = dynamic(() => import('../../../components/maps/GobiVoidMap'), { ssr: false });

const MapSelector = ({ id }) => {
  switch (id) {
    case 'altai-golden-eagle': return <AltaiMap />;
    case 'khentii-7day-traverse': return <KhentiiMap />;
    case 'gobi-loop': return <GobiMap />;
    default: return <KhentiiMap />; // Fallback
  }
};

export async function generateMetadata({ params }) {
  const { id } = params;
  const expedition = expeditions.find(e => e.id === id);

  if (!expedition) return { title: 'Expedition Not Found' };

  return {
    title: `Rugged 4x4 ${expedition.title} Overland Expedition | Mongolia`,
    description: expedition.metaDescription || expedition.description,
    openGraph: {
      title: `Rugged 4x4 ${expedition.title} Overland Expedition`,
      description: expedition.metaDescription || expedition.description,
      images: [{ url: expedition.imagePath || expedition.heroImage }],
    },
  };
}

export default function ExpeditionDetail({ params }) {
  const { id } = params;
  const expedition = expeditions.find(e => e.id === id);

  if (!expedition) {
    notFound();
  }

  const daysData = expedition.days || expedition.itinerary;
  const heroImage = expedition.imagePath || expedition.heroImage;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": `Rugged 4x4 ${expedition.title} Overland Expedition`,
    "description": expedition.metaDescription || expedition.description,
    "touristType": "Private Remote Wilderness Safari",
    "provider": {
      "@type": "TravelAgency",
      "name": "Chinggis Khaan Expeditions",
      "url": "https://chinggiskhaanexpeditions.com"
    },
    "itinerary": daysData.map((day) => ({
      "@type": "City",
      "name": day.title || day.vector,
      "description": day.description || day.ops
    })),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": typeof expedition.price === 'string' ? expedition.price.replace(/[$,]/g, '') : expedition.price,
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01"
    },
    "touristType": "Deep-field Sub-Siberian Taiga Survival",
    "transportation": "Russian UAZ Furgon (Military-Grade Mechanical Bukhanka)"
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-4 flex justify-between items-center text-[#1A1A1A]">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/logo-official.svg" alt="CKE Logo" fill className="p-1" />
          </div>
          <span className="font-serif font-bold text-sm uppercase">Chinggis Khaan Expeditions</span>
        </Link>
        <Link href="/" className="text-[10px] font-black uppercase tracking-widest bg-[#1A1A1A] text-white px-6 py-2 rounded-full hover:bg-[#C5A059] transition-all">Back to Home</Link>
      </nav>

      <header className="relative w-full h-[65vh] flex items-end overflow-hidden pt-20">
        <Image src={heroImage} alt={expedition.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-80" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 text-white text-left">
          <span className="text-[#C5A059] font-bold tracking-[0.4em] uppercase mb-4 block text-xs">Rugged Overland Expedition</span>
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-4 tracking-tighter uppercase">{expedition.title}</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light italic">{expedition.tagline || expedition.region}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32 border-b border-black/5 pb-16">
           <div className="space-y-2">
              <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-widest">Duration</span>
              <p className="text-2xl font-serif font-bold">{expedition.duration}</p>
           </div>
           <div className="space-y-2">
              <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-widest">Capability</span>
              <p className="text-2xl font-serif font-bold">{expedition.difficulty}</p>
           </div>
           <div className="space-y-2">
              <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-widest">{expedition.maxGroupSize ? 'Exclusivity' : 'Isolation'}</span>
              <p className="text-2xl font-serif font-bold">{expedition.maxGroupSize || expedition.terrainMetrics?.isolationFactor}</p>
           </div>
        </div>

        <div className="mb-32">
          <div className="mb-12">
            <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-widest mb-2 block">Tactical Vector Map</span>
            <h2 className="text-4xl font-serif font-bold uppercase tracking-tight">Projected Route</h2>
          </div>
          <MapSelector id={expedition.id} />
        </div>

        <div className="space-y-40">
          {daysData.map((day, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-6 mb-8">
                  <span className="text-8xl font-serif font-black text-[#C5A059]/10">0{day.day}</span>
                  <div className="h-px flex-1 bg-[#C5A059]/20" />
                </div>
                <h3 className="text-4xl font-serif font-bold mb-6 tracking-tight uppercase">{day.title || day.vector}</h3>
                <p className="text-xl text-[#444] leading-relaxed mb-8 font-light">{day.description || day.ops}</p>
                {day.terrain && <p className="text-sm font-bold uppercase tracking-widest text-[#C5A059] mb-2">Terrain: {day.terrain}</p>}
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
                <div className="col-span-2 relative h-80 rounded-[40px] overflow-hidden shadow-2xl">
                  <Image src={dayImages[expedition.id]?.[idx]?.[0] || day.imageSrc || heroImage} alt={day.title || day.vector} fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="relative h-48 rounded-[30px] overflow-hidden shadow-xl">
                  <Image src={dayImages[expedition.id]?.[idx]?.[1] || day.imageSrc || heroImage} alt={day.title || day.vector} fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
                <div className="relative h-48 rounded-[30px] overflow-hidden shadow-xl">
                  <Image src={dayImages[expedition.id]?.[idx]?.[2] || day.imageSrc || heroImage} alt={day.title || day.vector} fill className="object-cover hover:scale-105 transition-transform duration-1000" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <InquiryForm expeditionTitle={expedition.title} />

      <footer className="bg-[#1A1A1A] py-24 px-6 border-t border-white/5 text-center text-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-4">© 2026 CKE Expedition Group</p>
          <p className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em]">Bringing Clarity to the Northern Taiga</p>
        </div>
      </footer>
    </div>
  );
}
