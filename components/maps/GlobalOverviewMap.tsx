'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Polyline } from 'react-leaflet';
import { expeditions } from '../../data/itinerary';

const BaseMap = dynamic(() => import('./BaseMap'), { ssr: false });

export default function GlobalOverviewMap() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-[650px] w-full bg-[#F8F5F0] animate-pulse rounded-[48px] flex items-center justify-center border border-black/5">
        <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059]/40 font-bold">Assembling Global Intelligence...</span>
      </div>
    );
  }

  return (
    <BaseMap 
      height="650px"
      center={[46.8625, 103.8467]}
      zoom={5}
    >
      {expeditions.map((exp: any) => {
        const path = exp.overlandPath || exp.waypoints?.map((w: any) => w.coords) || exp.itinerary?.map((step: any) => step.coords).filter(Boolean);
        
        if (!path || path.length < 2) return null;

        return (
          <Polyline 
            key={exp.id}
            positions={path as any}
            color={exp.id === 'khentii-7day-traverse' ? '#C5A059' : '#1A1A1A'}
            weight={2}
            opacity={0.5}
            dashArray="5, 10"
          />
        );
      })}
    </BaseMap>
  );
}
