// /components/InteractiveMap.js
'use client';

import { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { tourData } from '../data/tours';

// Component to handle auto-zooming to route
function RecenterMap({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords && coords.length > 0) {
      try {
        const bounds = L.latLngBounds(coords);
        map.fitBounds(bounds, { padding: [50, 50] });
      } catch (e) {
        console.error("Map bounds error:", e);
      }
    }
  }, [coords, map]);
  return null;
}

export default function InteractiveMap() {
  const [activeId, setActiveId] = useState(tourData[0].id);
  const [mapIcon, setMapIcon] = useState(null);

  useEffect(() => {
    // Initialize Leaflet icon only on client side
    const icon = L.icon({
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41]
    });
    setMapIcon(icon);
  }, []);

  const activeTour = tourData.find(t => t.id === activeId);
  
  // Memoize coordinates to prevent reference-based re-renders
  const polylineCoords = useMemo(() => 
    activeTour.waypoints.map(w => w.coords), 
  [activeTour]);

  return (
    <div className="w-full space-y-6">
      {/* Tab Selector */}
      <div className="flex bg-[#F8F5F0] p-1.5 rounded-2xl border border-black/5 w-fit mx-auto shadow-inner">
        {tourData.map((tour) => (
          <button
            key={tour.id}
            onClick={() => setActiveId(tour.id)}
            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
              activeId === tour.id ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-[#666] hover:text-[#1A1A1A]'
            }`}
          >
            {tour.title}
          </button>
        ))}
      </div>

      {/* Map Window */}
      <div className="h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl border-4 border-white relative group">
        <MapContainer 
          center={[47.9188, 106.9176]} 
          zoom={7} 
          style={{ height: '100%', width: '100%', background: '#F8F5F0' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          <Polyline 
            positions={polylineCoords} 
            pathOptions={{ color: activeTour.color, weight: 4, dashArray: '10, 10', opacity: 0.8 }} 
          />

          {mapIcon && activeTour.waypoints.map((wp, idx) => (
            <Marker key={`${activeId}-${idx}`} position={wp.coords} icon={mapIcon}>
              <Popup className="font-serif">
                <span className="font-bold">{wp.name}</span>
              </Popup>
            </Marker>
          ))}

          <RecenterMap coords={polylineCoords} />
        </MapContainer>
        
        {/* Route Overlay Card */}
        <div className="absolute bottom-8 right-8 z-[1000] bg-white p-6 rounded-3xl shadow-2xl border border-black/5 max-w-xs animate-fade-in pointer-events-none">
          <span className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.2em] block mb-2">Live Route</span>
          <h4 className="font-serif font-bold text-xl mb-1">{activeTour.title}</h4>
          <p className="text-xs text-[#666] mb-4">{activeTour.tagline}</p>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: activeTour.color }} />
            <span className="text-[10px] font-bold uppercase tracking-widest">{activeTour.duration} Path</span>
          </div>
        </div>
      </div>
    </div>
  );
}
