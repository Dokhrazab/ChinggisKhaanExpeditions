'use client';

import BaseMap from './BaseMap';
import { additionalExpeditions } from '../../app/data/expeditions';

export default function GobiVoidMap() {
  const data = additionalExpeditions.find(e => e.id === 'gobi-loop');
  
  const waypoints = [
    { name: "Ulaanbaatar", coords: [47.9188, 106.9176], description: "Expedition Launch" },
    { name: "Baga Gazriin Chuluu", coords: [46.2480, 105.9820], description: "Granite Rock Formations" },
    { name: "Tsagaan Suvarga", coords: [43.8611, 108.3361], description: "White Stupa Cliffs" },
    { name: "Yoliin Am", coords: [43.4931, 104.0838], description: "Vulture Valley Ice Fields" },
    { name: "Khongoryn Els", coords: [43.5000, 103.1667], description: "Singing Sand Dunes" },
    { name: "Ongi Monastery", coords: [46.6573, 103.1756], description: "Historic Oasis Crossroads" },
    { name: "Karakorum", coords: [47.2103, 102.8478], description: "13th Century Ancient Capital" },
    { name: "Ulaanbaatar", coords: [47.9188, 106.9176], description: "Return Vector" }
  ];

  return (
    <BaseMap 
      waypoints={waypoints as any}
      overlandPath={waypoints.map(w => w.coords as [number, number])}
      height="500px"
    />
  );
}
