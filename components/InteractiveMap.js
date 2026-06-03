// /components/InteractiveMap.js
'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { expeditions } from '../data/itinerary';

// Fix Leaflet icon issue in Next.js
const icon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function MapRecenter({ coords }) {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, 7);
  }, [coords, map]);
  return null;
}

export default function InteractiveMap() {
  const [isClient, setIsClient] = useState(false);
  const expedition = expeditions[0]; // Accessing the first item in the simplified array
  const points = expedition?.waypoints?.map(w => w.coords) || [];

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div className="h-[700px] w-full bg-stone-100 animate-pulse rounded-[48px]" />;

  return (
    <div className="h-[700px] w-full relative group">
      <MapContainer 
        center={[48.5, 109.5]} 
        zoom={7} 
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="grayscale contrast-125 opacity-80"
        />
        
        <Polyline 
          positions={points} 
          color="#C5A059" 
          weight={4} 
          dashArray="10, 10"
          opacity={0.8}
        />

        {expedition?.waypoints?.map((point, idx) => (
          <Marker key={idx} position={point.coords} icon={icon}>
            <Popup className="custom-popup">
              <div className="p-2">
                <h4 className="font-serif font-bold text-[#1A1A1A] mb-1">{point.name}</h4>
                <p className="text-[10px] text-[#C5A059] font-black uppercase tracking-widest">{point.desc}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        
        <MapRecenter coords={[48.5, 109.5]} />
      </MapContainer>

      <div className="absolute top-10 left-10 z-10 bg-white/90 backdrop-blur-md p-8 rounded-[32px] border border-black/5 shadow-2xl max-w-xs pointer-events-none">
        <span className="text-[#C5A059] font-black tracking-[0.4em] uppercase text-[9px] mb-4 block">Expedition Vector</span>
        <h3 className="text-2xl font-serif font-bold mb-4 tracking-tighter">Northern Taiga Traverse</h3>
        <p className="text-xs text-[#666] leading-relaxed font-light italic">"Navigating the sacred geography of the Great Khan via self-supported 4x4 maneuvers."</p>
      </div>

      <style jsx global>{`
        .leaflet-container {
          background: #f8f5f0 !important;
          border-radius: 48px;
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .leaflet-popup-tip {
          background: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </div>
  );
}
