'use client';

import BaseMap from './BaseMap';
import { itineraryData } from '../../data/itinerary';

export default function KhentiiTraverseMap() {
  const waypoints = itineraryData.waypoints.map(w => ({
    name: w.name,
    coords: w.coords as [number, number],
    description: w.desc
  }));

  const overlandPath = waypoints.map(w => w.coords);

  return (
    <BaseMap 
      waypoints={waypoints}
      overlandPath={overlandPath}
      height="500px"
    />
  );
}
