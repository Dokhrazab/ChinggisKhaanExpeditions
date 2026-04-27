// /components/InteractiveMap.js
'use client';

import { useState } from 'react';
import { tourData } from '../data/tours';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveMap() {
  const [activeId, setActiveId] = useState(tourData[0].id);
  const [hoverStop, setHoverStop] = useState(null);

  const activeTour = tourData.find(t => t.id === activeId);

  return (
    <div className="w-full space-y-12">
      {/* Tab Selector */}
      <div className="flex bg-[#F8F5F0] p-2 rounded-[24px] border border-black/5 w-fit mx-auto shadow-sm">
        {tourData.map((tour) => (
          <button
            key={tour.id}
            onClick={() => setActiveId(tour.id)}
            className={`px-8 py-3 rounded-[18px] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
              activeId === tour.id ? 'bg-[#1A1A1A] text-white shadow-xl' : 'text-[#666] hover:text-[#1A1A1A]'
            }`}
          >
            {tour.title}
          </button>
        ))}
      </div>

      {/* Illustrative SVG Map */}
      <div className="relative bg-[#F8F5F0] rounded-[60px] p-10 md:p-20 shadow-inner border border-black/5 overflow-hidden min-h-[600px] flex items-center justify-center">
        {/* Background Texture Placeholder */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale invert" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }} />
        
        <svg viewBox="0 0 800 450" className="w-full h-auto drop-shadow-2xl relative z-10">
          {/* Animated Paths */}
          <AnimatePresence mode="wait">
            <g key={activeId}>
              {activeTour.routes.map((route, i) => (
                <motion.path
                  key={i}
                  d={route.path}
                  fill="none"
                  stroke={activeTour.color}
                  strokeWidth="3"
                  strokeDasharray="10, 10"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: i * 0.5, ease: "easeInOut" }}
                />
              ))}
            </g>
          </AnimatePresence>

          {/* Stops / Waypoints */}
          {activeTour.stops.map((stop, i) => (
            <motion.g 
              key={`${activeId}-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="cursor-pointer"
              onMouseEnter={() => setHoverStop(stop)}
              onMouseLeave={() => setHoverStop(null)}
            >
              <circle cx={stop.x} cy={stop.y} r="8" fill="#1A1A1A" stroke={activeTour.color} strokeWidth="2" />
              <text x={stop.x} y={stop.y - 18} textAnchor="middle" className="text-[12px] font-bold fill-[#1A1A1A] font-serif tracking-tight">{stop.name}</text>
              
              {/* Marker Number */}
              <text x={stop.x} y={stop.y + 4} textAnchor="middle" className="text-[8px] font-black fill-white pointer-events-none">{i + 1}</text>
            </motion.g>
          ))}
        </svg>

        {/* InfoBox Overlay */}
        <AnimatePresence>
          {hoverStop && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 bg-white p-6 rounded-[32px] shadow-2xl border border-black/5 w-72 text-center"
            >
              <div className="w-10 h-10 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C5A059] font-black text-xs">{activeTour.stops.indexOf(hoverStop) + 1}</span>
              </div>
              <h4 className="font-serif font-bold text-xl mb-1 text-[#1A1A1A]">{hoverStop.name}</h4>
              <p className="text-xs text-[#666] mb-6 leading-relaxed uppercase tracking-widest font-bold">{hoverStop.desc}</p>
              <a href="#inquiry" className="inline-block bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all">
                Book This Tour
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <div className="absolute top-10 left-10 text-left pointer-events-none">
          <span className="text-[#C5A059] font-bold text-[10px] uppercase tracking-[0.4em] block mb-2">Historical Map</span>
          <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] tracking-tighter">{activeTour.title}</h3>
          <p className="text-xs text-[#666] font-medium tracking-wide italic">Traversing the Heartland of the Great Khan</p>
        </div>
      </div>
    </div>
  );
}
