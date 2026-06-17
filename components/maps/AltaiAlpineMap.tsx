'use client';

import BaseMap from './BaseMap';
import { additionalExpeditions } from '../../app/data/expeditions';

export default function AltaiAlpineMap() {
  const data = additionalExpeditions.find(e => e.id === 'altai-7day-alpine');
  
  // Define waypoints based on the alpine itinerary
  const waypoints = [
    { name: "Ölgii Base", coords: [48.9712, 89.9702] as [number, number], description: "Expedition Logistics Hub" },
    { name: "Khoton Lake", coords: [48.6667, 88.3333] as [number, number], description: "Lake Perimeter Entry Point" },
    { name: "Alpine Base", coords: [48.5833, 88.2500] as [number, number], description: "High-Altitude Base Camp" },
    { name: "Glacier Ridge", coords: [48.5000, 88.0000] as [number, number], description: "Vertical Shale Corridor" },
    { name: "Tavan Bogd Pass", coords: [49.1333, 87.8333] as [number, number], description: "High Frontier Crossing" }
  ];

  return (
    <BaseMap 
      waypoints={waypoints}
      overlandPath={waypoints.map(w => w.coords)}
      height="500px"
    />
  );
}
