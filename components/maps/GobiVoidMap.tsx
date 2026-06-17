'use client';

import BaseMap from './BaseMap';
import { additionalExpeditions } from '../../app/data/expeditions';

export default function GobiVoidMap() {
  const data = additionalExpeditions.find(e => e.id === 'gobi-7day-void');
  
  const waypoints = [
    { name: "Dalanzadgad", coords: [43.5683, 104.4139], description: "Expedition Base & Logistics Hub" },
    { name: "Gurvan Saikhan", coords: [43.6350, 103.7792], description: "High-Altitude Rocky Ridge Navigation" },
    { name: "Khongoryn Els", coords: [43.5000, 103.1667], description: "Singing Sands Deep Dune Sector" },
    { name: "Nemegt Basin", coords: [43.5000, 101.0000], description: "Paleontological Void & Thermal Basin" },
    { name: "Khermen Tsav", coords: [43.4683, 99.8286], description: "Red Canyon Extraction Point" }
  ];

  return (
    <BaseMap 
      waypoints={waypoints as any}
      overlandPath={waypoints.map(w => w.coords as [number, number])}
      height="500px"
    />
  );
}
