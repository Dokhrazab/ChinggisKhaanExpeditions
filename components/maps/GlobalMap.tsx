'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import Link from 'next/link';
import 'leaflet/dist/leaflet.css';

// Custom Markers
const routeMarkerIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div class="w-5 h-5 bg-[#C5A059] border-2 border-white rounded-full shadow-lg pulse"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const placeholderMarkerIcon = L.divIcon({
  className: 'custom-marker-gray',
  html: `<div class="w-4 h-4 bg-stone-400 border-2 border-white rounded-full shadow-lg"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

const ROUTES = [
  {
    id: "altai-golden-eagle",
    name: "Altai Golden Eagle Festival",
    slug: "/tours/altai-golden-eagle",
    color: "#C5A059",
    waypoints: [
      { name: "Ulaanbaatar", coords: [47.9188, 106.9176] },
      { name: "Ölgii", coords: [48.9712, 89.9702] },
      { name: "Sagsai", coords: [48.7833, 89.6500] }
    ],
    path: [[47.9188, 106.9176], [48.9712, 89.9702], [48.7833, 89.6500]]
  },
  {
    id: "gobi-desert-safari",
    name: "Gobi Desert Expedition",
    slug: "#",
    color: "#1A1A1A",
    waypoints: [
      { name: "Dalanzadgad", coords: [43.5708, 104.4250] },
      { name: "Khongoryn Els", coords: [43.7917, 102.3083] }
    ],
    path: [[47.9188, 106.9176], [43.5708, 104.4250], [43.7917, 102.3083]]
  }
];

export default function GlobalMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-[600px] w-full bg-[#F8F5F0] animate-pulse rounded-[48px] flex items-center justify-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059]/40 font-bold">Assembling Global Intelligence...</span>
      </div>
    );
  }

  return (
    <div className="h-[600px] w-full relative group rounded-[48px] overflow-hidden shadow-2xl border border-black/5">
      <MapContainer 
        center={[47.0, 103.0]} 
        zoom={5} 
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png"
          className="grayscale contrast-125 opacity-70"
        />

        {ROUTES.map((route) => (
          <div key={route.id}>
            <Polyline 
              positions={route.path as [number, number][]} 
              color={route.color} 
              weight={3} 
              opacity={0.6}
              dashArray="5, 10"
            />
            
            {route.waypoints.map((point, idx) => (
              <Marker 
                key={`${route.id}-${idx}`} 
                position={point.coords as [number, number]} 
                icon={route.id === 'altai-golden-eagle' ? routeMarkerIcon : placeholderMarkerIcon}
              >
                <Popup className="custom-popup">
                  <div className="p-4 w-64">
                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C5A059] mb-2 block">
                      Active Expedition
                    </span>
                    <h4 className="font-serif font-bold text-[#1A1A1A] text-xl mb-3 leading-tight">{route.name}</h4>
                    <p className="text-[11px] text-[#666] mb-4 leading-relaxed font-light italic">
                      Traverse the {point.name} sector of the {route.name.split(' ')[0]} region.
                    </p>
                    <Link 
                      href={route.slug}
                      className="inline-block bg-[#1A1A1A] text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full hover:bg-[#C5A059] transition-colors"
                    >
                      View Intelligence
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </div>
        ))}
      </MapContainer>

      {/* Map UI Overlay */}
      <div className="absolute bottom-10 left-10 z-10 bg-white/90 backdrop-blur-md p-6 rounded-[32px] border border-black/5 shadow-xl max-w-[240px] pointer-events-none">
        <h3 className="text-sm font-serif font-bold mb-3 tracking-tight">Tactical Overview</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span className="text-[10px] font-bold text-[#666] uppercase tracking-widest">Active Routes</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-stone-300" />
            <span className="text-[10px] font-bold text-[#666] uppercase tracking-widest">Planned Ops</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(15px);
          border-radius: 24px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12);
        }
        .pulse {
          animation: map-pulse 2s infinite;
        }
        @keyframes map-pulse {
          0% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(197, 160, 89, 0); }
          100% { box-shadow: 0 0 0 0 rgba(197, 160, 89, 0); }
        }
      `}</style>
    </div>
  );
}
