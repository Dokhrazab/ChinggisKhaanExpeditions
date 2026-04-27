// /components/InteractiveMap.js
'use client';

import { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { tourData } from '../data/tours';
import { motion, AnimatePresence } from 'framer-motion';

// Component to handle auto-zooming
function RecenterMap({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords && coords.length > 0) {
      const bounds = L.latLngBounds(coords);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
    }
  }, [coords, map]);
  return null;
}

export default function InteractiveMap() {
  const [activeId, setActiveId] = useState(tourData[0].id);
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const activeTour = tourData.find(t => t.id === activeId);
  const polylineCoords = useMemo(() => activeTour.waypoints.map(w => w.coords), [activeTour]);

  if (!mounted) return <div className="h-[600px] w-full bg-stone-100 animate-pulse rounded-[40px]" />;

  return (
    <div className="w-full space-y-8">
      {/* Tour Toggle Tabs */}
      <div className="flex flex-wrap bg-[#F8F5F0] p-2 rounded-[24px] border border-black/5 w-fit mx-auto shadow-sm">
        {tourData.map((tour) => (
          <button
            key={tour.id}
            onClick={() => setActiveId(tour.id)}
            className={`px-8 py-3 rounded-[18px] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
              activeId === tour.id ? 'bg-[#1A1A1A] text-white shadow-xl scale-105' : 'text-[#666] hover:text-[#1A1A1A]'
            }`}
          >
            {tour.title}
          </button>
        ))}
      </div>

      <div className="relative h-[650px] w-full rounded-[48px] overflow-hidden shadow-2xl border-[8px] border-white group">
        <MapContainer 
          center={[47.9188, 106.9176]} 
          zoom={7} 
          style={{ height: '100%', width: '100%', background: '#F8F5F0' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap'
          />
          
          <Polyline 
            positions={polylineCoords} 
            pathOptions={{ 
              color: activeTour.color, 
              weight: 5, 
              dashArray: '12, 15', 
              opacity: 0.7,
              lineCap: 'round'
            }} 
          />

          {activeTour.waypoints.map((wp, idx) => {
            const customIcon = L.divIcon({
              className: 'custom-marker',
              html: `<div style="background-color: ${activeTour.color}; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; display: flex; items-center; justify-center; color: white; font-size: 10px; font-weight: 900; box-shadow: 0 4px 10px rgba(0,0,0,0.3)">${idx + 1}</div>`,
              iconSize: [24, 24],
              iconAnchor: [12, 12]
            });

            return (
              <Marker key={`${activeId}-${idx}`} position={wp.coords} icon={customIcon}>
                <Popup className="cke-popup">
                  <div className="w-64 p-2 bg-white rounded-2xl overflow-hidden">
                    <div className="relative h-32 w-full bg-stone-100 rounded-xl mb-4 overflow-hidden">
                       <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase font-bold text-stone-400">Preview Image</div>
                    </div>
                    <span className="text-[#C5A059] font-black text-[9px] uppercase tracking-widest block mb-1">Day {idx + 1}</span>
                    <h4 className="font-serif font-bold text-lg mb-2 text-[#1A1A1A]">{wp.name}</h4>
                    <p className="text-xs text-[#666] leading-relaxed mb-4">{wp.desc}</p>
                    <a href="#inquiry" className="block w-full py-3 bg-[#1A1A1A] text-white text-center rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all">
                      Book This Tour
                    </a>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          <RecenterMap coords={polylineCoords} />
        </MapContainer>

        {/* Legend Overlay */}
        <AnimatePresence mode='wait'>
          <motion.div 
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-10 right-10 z-[1000] bg-white/90 backdrop-blur-md p-8 rounded-[32px] shadow-2xl border border-black/5 max-w-sm pointer-events-none"
          >
            <span className="text-[#C5A059] font-bold text-[10px] uppercase tracking-[0.3em] block mb-2">Active Expedition</span>
            <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3 leading-tight">{activeTour.title}</h3>
            <p className="text-sm text-[#666] leading-relaxed mb-6">{activeTour.tagline}</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200" />
                ))}
              </div>
              <span className="text-[10px] font-bold text-[#1A1A1A] uppercase tracking-widest">Join 8 other explorers</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
