// /components/InteractiveMap.js
'use client';

import { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { tourData } from '../data/tours';
import { motion, AnimatePresence } from 'framer-motion';

// Component to handle auto-zooming and recentering
function RecenterMap({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords && coords.length > 0) {
      const bounds = L.latLngBounds(coords);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 10 });
    }
  }, [coords, map]);
  return null;
}

export default function InteractiveMap() {
  const [activeId, setActiveId] = useState(tourData[0].id);
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Fix for Leaflet default icons
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  // Map approximate SVG coordinates to real GPS coordinates for the background map
  // Note: These are refined approximate coordinates for the specific locations
  const tourCoords = {
    "genesis-route": [
      [47.9188, 106.9176], // UB
      [47.8079, 107.5303], // Tsonjin
      [48.0645, 108.1889], // Blue Lake
      [47.3197, 110.6558], // Chinggis City
      [47.3, 111.0],       // Taliin Tumen
      [49.0200, 111.6200], // Dadal
      [48.5800, 110.6300], // Binder
      [47.1667, 109.1167]  // Kherlen
    ],
    "golden-whip": [
      [47.9188, 106.9176],
      [47.8079, 107.5303],
      [47.9188, 106.9176]
    ],
    "imperial-vault": [
      [47.9188, 106.9176],
      [47.9230, 106.9180]
    ]
  };

  const activeTour = tourData.find(t => t.id === activeId);
  const currentGPSCoords = tourCoords[activeId];

  if (!mounted) return <div className="h-[650px] w-full bg-stone-100 animate-pulse rounded-[48px]" />;

  return (
    <div className="w-full space-y-12">
      {/* Tab Selector */}
      <div className="flex flex-wrap bg-[#F8F5F0] p-2 rounded-[24px] border border-black/5 w-fit mx-auto shadow-sm">
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

      <div className="relative h-[650px] w-full rounded-[48px] overflow-hidden shadow-2xl border-[8px] border-white group">
        <MapContainer 
          center={[47.9188, 106.9176]} 
          zoom={7} 
          style={{ height: '100%', width: '100%', background: '#F8F5F0' }}
          scrollWheelZoom={false}
        >
          {/* Muted Terrain/Satellite Style */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap'
          />
          
          <Polyline 
            positions={currentGPSCoords} 
            pathOptions={{ 
              color: activeTour.color, 
              weight: 4, 
              dashArray: '10, 15', 
              opacity: 0.8,
              lineCap: 'round'
            }} 
          />

          {activeTour.stops.map((stop, i) => {
            const customIcon = L.divIcon({
              className: 'custom-marker',
              html: `<div style="background-color: ${activeTour.color}; width: 28px; height: 28px; border-radius: 50%; border: 4px solid white; display: flex; align-items: center; justify-center; color: white; font-size: 11px; font-weight: 900; box-shadow: 0 4px 15px rgba(0,0,0,0.4)">${i + 1}</div>`,
              iconSize: [28, 28],
              iconAnchor: [14, 14]
            });

            return (
              <Marker key={`${activeId}-${i}`} position={currentGPSCoords[i] || currentGPSCoords[0]} icon={customIcon}>
                <Popup className="cke-popup">
                  <div className="w-64 p-2 bg-white rounded-2xl">
                    <span className="text-[#C5A059] font-black text-[9px] uppercase tracking-widest block mb-1">Stop {i + 1}</span>
                    <h4 className="font-serif font-bold text-lg mb-2 text-[#1A1A1A]">{stop.name}</h4>
                    <p className="text-xs text-[#666] leading-relaxed mb-4">{stop.desc}</p>
                    <a href="#inquiry" className="block w-full py-3 bg-[#1A1A1A] text-white text-center rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#C5A059] transition-all">
                      Book This Tour
                    </a>
                  </div>
                </Popup>
              </Marker>
            );
          })}

          <RecenterMap coords={currentGPSCoords} />
        </MapContainer>

        {/* Floating Narrative Card */}
        <AnimatePresence mode='wait'>
          <motion.div 
            key={activeId}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-10 right-10 z-[1000] bg-white/95 backdrop-blur-md p-8 rounded-[32px] shadow-2xl border border-black/5 max-w-sm pointer-events-none"
          >
            <span className="text-[#C5A059] font-bold text-[10px] uppercase tracking-[0.3em] block mb-2">Cartography Mode</span>
            <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3 leading-tight">{activeTour.title}</h3>
            <p className="text-xs text-[#666] font-medium leading-relaxed italic mb-4">
              Real-world GPS pathing with stylized historical waypoints.
            </p>
            <div className="h-px bg-black/5 w-full mb-4" />
            <div className="flex items-center gap-2">
               <div className="h-2 w-2 rounded-full animate-pulse" style={{ background: activeTour.color }} />
               <span className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">{activeTour.duration} Expedition</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
