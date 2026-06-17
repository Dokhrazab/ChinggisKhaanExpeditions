'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const RouteMap = dynamic(() => import('../../../components/maps/RouteMap'), { 
  ssr: false,
  loading: () => <div className="h-[450px] w-full bg-stone-100 animate-pulse rounded-2xl" />
});

const ALTAI_ROUTE_MARKERS: any[] = [
  { id: "ub", name: "Ulaanbaatar", coords: [47.9188, 106.9176], type: "airport", description: "Departure Point" },
  { id: "olgii", name: "Ölgii City", coords: [48.9712, 89.9702], type: "hub", description: "Base Camp & Urban Tour" },
  { id: "sagsai", name: "Sagsai Sum", coords: [48.7833, 89.6500], type: "festival", description: "Golden Eagle Festival Grounds" },
  { id: "tsengel", name: "Tsengel Sum", coords: [48.9333, 88.9333], type: "tuvan", description: "Tsagaan Sayan Tribe Encampment" }
];

const FLIGHT_PATH: [number, number][] = [[47.9188, 106.9176], [48.9712, 89.9702]];
const OVERLAND_PATH: [number, number][] = [
  [48.9712, 89.9702],
  [48.7833, 89.6500],
  [48.9333, 88.9333],
  [48.9712, 89.9702]
];

const itinerary = [
  {
    date: "Sept 16",
    title: "The Gateway to the Altai",
    desc: "Fly UB to Ölgii. Explore local bazaar and mosque. Check into hotel.",
    icon: "🏔️"
  },
  {
    date: "Sept 17",
    title: "Festival Awakening",
    desc: "Head to Sagsai Valley. Opening Ceremony parade, hunter registration, and eagle agility trials.",
    icon: "🦅"
  },
  {
    date: "Sept 18",
    title: "Nomadic Games",
    desc: "Sagsai Festival Day 2. Fox lure chase, horseback nomadic games (Kyz Kuar, Kukbar), awards.",
    icon: "🏇"
  },
  {
    date: "Sept 19",
    title: "Tsagaan Sayan Immersion",
    desc: "Drive deep to remote Tsengel Sum. Meet the local Tuvan family from the Tsagaan Sayan tribe. Traditional throat singing (Khoomei) around the hearth.",
    icon: "🔥"
  },
  {
    date: "Sept 20",
    title: "High Mountain Traverse",
    desc: "All-day horseback riding exploration through the pristine valleys of the Altai Mountains with Tuvan horse masters.",
    icon: "🐎"
  },
  {
    date: "Sept 21",
    title: "Return Flight",
    desc: "Return overland to Ölgii. Catch domestic return flight to Ulaanbaatar.",
    icon: "✈️"
  }
];

export default function AltaiGoldenEaglePage() {
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
              className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-6"
            >
              Altai Golden Eagle <br /> Festival 2026
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <RouteMap 
              waypoints={ALTAI_ROUTE_MARKERS} 
              flightPath={FLIGHT_PATH} 
              overlandPath={OVERLAND_PATH} 
            />
          </motion.div>
        </div>
      </section>

      {/* Itinerary Timeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold mb-4">Expedition Timeline</h2>
            <div className="h-1 w-20 bg-[#C5A059]" />
          </div>

          <div className="space-y-16 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-stone-100" />
            
            {itinerary.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-10 relative"
              >
                <div className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-lg z-10 shadow-sm shrink-0">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#C5A059] mb-2 block">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-[#666] font-light leading-relaxed max-w-2xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
