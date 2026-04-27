// /app/expeditions/[id]/page.js
'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { expeditions, dayImages } from '../../../data/itinerary';
import InquiryForm from '../../../components/InquiryForm';

export default function ExpeditionDetail() {
  const params = useParams();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const expeditionEn = expeditions['en'].find(e => e.id === params.id);
  const expedition = expeditionEn; // Fallback to en

  if (!isClient) return <div className="min-h-screen bg-[#F8F5F0]" />;
  if (!expedition) return <div className="p-20 text-center">Expedition not found.</div>;

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans">
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-4 flex justify-between items-center text-[#1A1A1A]">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/logo-official.svg" alt="CKE Logo" fill className="p-1" />
          </div>
          <span className="font-serif font-bold text-sm">Chinggis Khaan Expeditions</span>
        </Link>
        <Link href="/" className="text-[10px] font-black uppercase tracking-widest bg-[#1A1A1A] text-white px-6 py-2 rounded-full">Back to Home</Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end overflow-hidden pt-20">
        <Image src={expedition.heroImage} alt={expedition.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-80" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 text-white text-left">
          <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase mb-4 block">Official Route</span>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-4">{expedition.title}</h1>
          <p className="text-xl text-white/80">{expedition.tagline}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="space-y-32">
          {expedition.days.map((day, idx) => (
            <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl font-serif font-black text-[#C5A059]/20">0{day.day}</span>
                  <div className="h-px flex-1 bg-[#C5A059]/30" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">{day.title}</h3>
                <p className="text-lg text-[#666] leading-relaxed mb-8">{day.description}</p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
                <div className="col-span-2 relative h-64 rounded-3xl overflow-hidden shadow-lg border border-black/5">
                  <Image src={dayImages[expedition.id][idx]?.[0] || expedition.heroImage} alt={day.title} fill className="object-cover" />
                </div>
                <div className="relative h-40 rounded-3xl overflow-hidden shadow-lg border border-black/5">
                  <Image src={dayImages[expedition.id][idx]?.[1] || expedition.heroImage} alt={day.title} fill className="object-cover" />
                </div>
                <div className="relative h-40 rounded-3xl overflow-hidden shadow-lg border border-black/5">
                  <Image src={dayImages[expedition.id][idx]?.[2] || expedition.heroImage} alt={day.title} fill className="object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <InquiryForm expeditionTitle={expedition.title} />

      <footer className="bg-[#1A1A1A] py-12 px-6 border-t border-white/5 text-center text-white">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">© 2026 CKE Expedition Group. Bringing Clarity to the Great Khan.</p>
      </footer>
    </div>
  );
}
