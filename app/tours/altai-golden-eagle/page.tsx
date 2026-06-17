'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { additionalExpeditions } from '../../data/expeditions';

const AltaiFestivalMap = dynamic(() => import('../../../components/maps/AltaiFestivalMap'), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-stone-100 animate-pulse rounded-[48px]" />
});

export default function AltaiGoldenEaglePage() {
  const expedition = additionalExpeditions.find(e => e.id === 'altai-golden-eagle');

  if (!expedition) return <div>Expedition Not Found</div>;

  return (
    <main className="min-h-screen bg-[#F8F5F0]">
      {/* Hero Map Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#C5A059] font-black tracking-[0.4em] uppercase text-[10px] mb-4 block"
            >
              Western Frontier Expedition
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-6 uppercase"
            >
              {expedition.title} <br /> <span className="text-[#C5A059]">Festival 2026</span>
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <AltaiFestivalMap />
          </motion.div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-serif font-bold mb-4 tracking-tight uppercase">Expedition Timeline</h2>
            <div className="h-1 w-20 bg-[#C5A059]" />
          </div>

          <div className="space-y-16 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-stone-100" />
            
            {expedition.itinerary.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-10 relative"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-sm z-10 shadow-sm shrink-0 font-bold font-serif">
                  {idx + 1}
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#C5A059] mb-2 block">
                    Day 0{item.day} — {item.vector}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mb-3 tracking-tight uppercase">{item.title}</h3>
                  <p className="text-[#666] font-light leading-relaxed max-w-2xl mb-4 text-lg">
                    {item.ops}
                  </p>
                  <div className="inline-block bg-[#F8F5F0] px-4 py-1 rounded-full">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#1A1A1A]">Terrain: {item.terrain}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
...

      {/* Call to Action */}
      <section className="py-32 px-6 bg-[#1A1A1A] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-8">Ready for the Frontier?</h2>
          <p className="text-white/60 mb-12 font-light">Limited to 6 participants per expedition to ensure tactical mobility and cultural intimacy.</p>
          <button className="bg-[#C5A059] hover:bg-[#b08e4d] text-white px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[11px] transition-all transform hover:scale-105">
            Request Private Briefing
          </button>
        </div>
      </section>
    </main>
  );
}
