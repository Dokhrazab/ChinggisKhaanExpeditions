// /app/expeditions/[id]/page.js
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { expeditions, dayImages } from '../../../data/itinerary';

export default function ExpeditionDetail() {
  const params = useParams();
  const router = useRouter();
  const [lang, setLang] = useState('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const expedition = expeditions[lang]?.find(e => e.id === params.id) || expeditions['en'].find(e => e.id === params.id);

  if (!isClient) return <div className="min-h-screen bg-[#F8F5F0]" />;
  if (!expedition) return <div className="p-20 text-center">Expedition not found.</div>;

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans">
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/logo-official.svg" alt="CKE Official Logo" fill className="p-1" />
          </div>
          <span className="font-serif font-bold text-sm">Chinggis Khaan Expeditions</span>
        </Link>
        <Link href="/" className="text-[10px] font-black uppercase tracking-widest bg-[#1A1A1A] text-white px-6 py-2 rounded-full">Back to Home</Link>
      </nav>

      <header className="relative w-full h-[60vh] flex items-end overflow-hidden pt-20">
        <Image src={expedition.heroImage} alt={expedition.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-80" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 text-white">
          <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase mb-4 block">Official Route</span>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold mb-4">{expedition.title}</h1>
          <p className="text-xl text-white/80">{expedition.tagline}</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-24">
            {expedition.days.map((day, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/4">
                  <span className="text-5xl font-serif font-black text-[#C5A059]/20 block mb-2">0{day.day}</span>
                  <div className="h-1 w-10 bg-[#C5A059]" />
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-serif font-bold mb-4">{day.title}</h3>
                  <p className="text-lg text-[#666] leading-relaxed mb-8">{day.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {dayImages[expedition.id][idx]?.slice(0, 2).map((img, i) => (
                      <div key={i} className="relative h-48 rounded-3xl overflow-hidden shadow-lg border border-black/5">
                        <Image src={img} alt={day.title} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-32 bg-white p-10 rounded-[40px] shadow-2xl border border-black/5">
              <h4 className="font-serif font-bold text-2xl mb-6">Booking Inquiry</h4>
              <p className="text-sm text-[#666] mb-8 leading-relaxed">Interested in the {expedition.title}? Contact our specialists to receive a detailed itinerary and logistics proposal.</p>
              <Link href="/#inquiry" className="block text-center bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-all">
                Send Inquiry
              </Link>
              <div className="mt-12 pt-8 border-t border-black/5 space-y-4">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-[#666]">Duration</span>
                  <span>{expedition.duration}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-[#666]">Max Size</span>
                  <span>{expedition.maxGroupSize}</span>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-[#666]">Difficulty</span>
                  <span>{expedition.difficulty}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
