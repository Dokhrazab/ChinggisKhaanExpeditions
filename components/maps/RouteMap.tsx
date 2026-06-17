'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issue
const customIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div class="w-4 h-4 bg-[#C5A059] border-2 border-white rounded-full shadow-lg"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

const airportIcon = L.divIcon({
  className: 'custom-marker-airport',
  html: `<div class="w-6 h-6 bg-[#1A1A1A] border-2 border-white rounded-full shadow-lg flex items-center justify-center text-[10px] text-white font-bold">✈</div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

interface Waypoint {
  id: string;
  name: string;
  coords: [number, number];
  type?: string;
  description: string;
}

interface RouteMapProps {
  waypoints: Waypoint[];
  flightPath?: [number, number][];
  overlandPath?: [number, number][];
}

function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 0) {
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [points, map]);
  return null;
}

export default function RouteMap({ waypoints, flightPath, overlandPath }: RouteMapProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-[450px] w-full rounded-2xl bg-stone-100 animate-pulse flex items-center justify-center border border-black/5">
        <span className="text-xs uppercase tracking-[0.2em] text-stone-400">Initializing Tactical Map...</span>
      </div>
    );
  }

  const allPoints = waypoints.map(w => w.coords);

  return (
    <div className="h-[450px] w-full rounded-2xl overflow-hidden z-0 border border-black/5 shadow-xl relative group">
      <MapContainer 
        center={waypoints[0]?.coords || [48.0, 100.0]} 
        zoom={6} 
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          className="grayscale contrast-125 opacity-90"
        />
        
        {flightPath && (
          <Polyline 
            positions={flightPath} 
            color="#1A1A1A" 
            weight={2} 
            dashArray="8, 8"
            opacity={0.4}
          />
        )}

        {overlandPath && (
          <Polyline 
            positions={overlandPath} 
            color="#C5A059" 
            weight={4} 
            opacity={0.8}
          />
        )}

        {waypoints.map((point) => (
          <Marker 
            key={point.id} 
            position={point.coords} 
            icon={point.type === 'airport' ? airportIcon : customIcon}
          >
            <Popup className="custom-popup">
              <div className="p-3 min-w-[150px]">
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C5A059] mb-1 block">
                  {point.type || 'Waypoint'}
                </span>
                <h4 className="font-serif font-bold text-[#1A1A1A] text-lg mb-1 leading-tight">{point.name}</h4>
                <p className="text-[11px] text-[#666] leading-relaxed italic">{point.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        
        <FitBounds points={allPoints} />
      </MapContainer>

      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          padding: 0;
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
        }
        .leaflet-container {
          background: #f8f5f0 !important;
        }
      `}</style>
    </div>
  );
}
