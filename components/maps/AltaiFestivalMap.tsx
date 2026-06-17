'use client';

import BaseMap from './BaseMap';
import { additionalExpeditions } from '../../app/data/expeditions';

export default function AltaiFestivalMap() {
  const data = additionalExpeditions.find(e => e.id === 'altai-golden-eagle');
  
  return (
    <BaseMap 
      waypoints={data?.waypoints as any}
      flightPath={data?.flightPath as any}
      overlandPath={data?.overlandPath as any}
      height="500px"
    />
  );
}
