'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Reusable Custom Icons
export const customMarkerIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div class="w-4 h-4 bg-[#C5A059] border-2 border-white rounded-full shadow-lg"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export const airportIcon = L.divIcon({
  className: 'custom-marker-airport',
  html: `<div class="w-6 h-6 bg-[#1A1A1A] border-2 border-white rounded-full shadow-lg flex items-center justify-center text-[10px] text-white font-bold">✈</div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

// Component to fit map bounds to given points
function FitBounds({ points }: { points: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (points && points.length > 0) {
      const bounds = L.latLngBounds(points);
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [points, map]);
  return null;
}

interface Waypoint {
  id?: string;
  name: string;
  coords: [number, number];
  type?: string;
  description?: string;
}

interface BaseMapProps {
  waypoints?: Waypoint[];
  flightPath?: [number, number][];
  overlandPath?: [number, number][];
  height?: string;
  center?: [number, number];
  zoom?: number;
  showProvinces?: boolean;
  children?: React.ReactNode;
}

export default function BaseMap({ 
  waypoints = [], 
  flightPath, 
  overlandPath, 
  height = "450px", 
  center = [47.0, 103.0], 
  zoom = 5,
  showProvinces = true,
  children
}: BaseMapProps) {
  const [isClient, setIsClient] = useState(false);
  const [provinceData, setProvinceData] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    if (showProvinces) {
      fetch('/data/mongolia_provinces.json')
        .then(res => res.json())
        .then(data => setProvinceData(data))
        .catch(err => console.error("Failed to load province borders:", err));
    }
  }, [showProvinces]);

  if (!isClient) {
    return (
      <div style={{ height }} className="w-full rounded-[48px] bg-[#F8F5F0] animate-pulse flex items-center justify-center border border-black/5">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059]/40 font-bold">Loading Tactical Intelligence...</span>
      </div>
    );
  }

  const allPoints = waypoints.map(w => w.coords);

  return (
    <div style={{ height }} className="w-full rounded-[48px] overflow-hidden z-0 border border-black/5 shadow-2xl relative group bg-[#F8F5F0]">
      <MapContainer 
        center={center} 
        zoom={zoom} 
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        {/* Accurate and detailed tile layer */}
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          className="grayscale contrast-125 opacity-80"
        />
        
        {/* Province Borders */}
        {provinceData && (
          <GeoJSON 
            data={provinceData} 
            style={() => ({
              color: "#1A1A1A",
              weight: 0.5,
              fillOpacity: 0.03,
              fillColor: "#C5A059"
            })}
          />
        )}
        
        {flightPath && (
          <Polyline 
            positions={flightPath} 
            color="#1A1A1A" 
            weight={1.5} 
            dashArray="10, 10"
            opacity={0.3}
          />
        )}

        {overlandPath && (
          <Polyline 
            positions={overlandPath} 
            color="#C5A059" 
            weight={3.5} 
            opacity={0.8}
          />
        )}

        {waypoints.map((point, idx) => (
          <Marker 
            key={idx} 
            position={point.coords} 
            icon={point.type === 'airport' ? airportIcon : customMarkerIcon}
          >
            <Popup className="custom-popup">
              <div className="p-4 min-w-[180px]">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#C5A059] mb-1 block">
                  {point.type || 'Operational Node'}
                </span>
                <h4 className="font-serif font-bold text-[#1A1A1A] text-lg mb-1 leading-tight uppercase">{point.name}</h4>
                <p className="text-[11px] text-[#666] leading-relaxed font-light italic">{point.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        
        {waypoints.length > 0 && <FitBounds points={allPoints} />}
        {children}
      </MapContainer>

      <style jsx global>{`
        .custom-popup .leaflet-popup-content-wrapper {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 30px 60px rgba(0,0,0,0.12);
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
