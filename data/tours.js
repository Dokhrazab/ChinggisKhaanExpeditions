// /data/tours.js

export const tourData = [
  {
    id: "genesis-route",
    title: "The Genesis Route",
    duration: "6 Days",
    color: "#C5A059",
    image: "/images/chinggis-khaan-expedition-signature-hero.avif",
    tagline: "The Full Historical Pilgrimage.",
    routes: [
      { name: "Day 1: UB → Tsonjinboldog → Khukh Nuur", path: "M 50 350 Q 150 330 200 250 T 350 200" },
      { name: "Day 2: Khukh Nuur → Chinggis City → Taliin Tumen Aduu", path: "M 350 200 Q 450 180 500 220 T 600 250" },
      { name: "Day 3: Taliin Tumen Aduu → Dadal Soum", path: "M 600 250 Q 650 200 700 120" },
      { name: "Day 4: Dadal → Binder Soum", path: "M 700 120 Q 600 100 550 150" },
      { name: "Day 5: Binder → Kherlen Khuduu Aral", path: "M 550 150 Q 450 170 400 280" },
      { name: "Day 6: Kherlen Khuduu Aral → UB City", path: "M 400 280 Q 250 320 50 350" }
    ],
    stops: [
      { name: "Ulaanbaatar", x: 50, y: 350, desc: "Expedition Start" },
      { name: "Tsonjinboldog", x: 180, y: 320, desc: "Finding the Whip" },
      { name: "Khukh Nuur", x: 350, y: 200, desc: "Enthronement Site" },
      { name: "Chinggis City", x: 500, y: 220, desc: "Regional Center" },
      { name: "Taliin Tumen Aduu", x: 600, y: 250, desc: "10,000 Horses" },
      { name: "Dadal Soum", x: 700, y: 120, desc: "Birthplace" },
      { name: "Binder Soum", x: 550, y: 150, desc: "Ancient Walls" },
      { name: "Kherlen Khuduu Aral", x: 400, y: 280, desc: "Assembly Ground" }
    ]
  },
  {
    id: "golden-whip",
    title: "The Golden Whip",
    duration: "1 Day",
    color: "#8B4513",
    image: "/images/tsonjin-boldog-genghis-khan-statue.png",
    tagline: "Day trip to the Colossus.",
    routes: [
      { name: "UB → Tsonjinboldog → UB", path: "M 50 350 Q 150 330 180 320 T 50 350" }
    ],
    stops: [
      { name: "Ulaanbaatar", x: 50, y: 350, desc: "Start/End" },
      { name: "Tsonjinboldog", x: 180, y: 320, desc: "Statue Complex" }
    ]
  },
  {
    id: "imperial-vault",
    title: "The Imperial Vault",
    duration: "1 Day",
    color: "#2D4F1E",
    image: "/images/chinggis-khaan-historical-clarity-authority.jpg",
    tagline: "Chinggis Khaan National Museum.",
    routes: [
      { name: "UB Center → Museum", path: "M 50 350 Q 55 345 60 340" }
    ],
    stops: [
      { name: "UB Center", x: 50, y: 350, desc: "City Heart" },
      { name: "National Museum", x: 60, y: 340, desc: "Imperial History" }
    ]
  }
];

export const sampleBlogs = [
  { slug: 'dadal-vs-ulaanbaatar', title: 'The Search for the Real Mongolia', category: 'History', img: '/images/khentii-mountain-scenery.png' },
  { slug: 'the-colossus-legend', title: 'Legend of the Golden Whip', category: 'Culture', img: '/images/tsonjin-boldog-genghis-khan-statue.png' },
  { slug: 'decoding-the-imperial-vault', title: 'Inside the 9 Floors', category: 'Archaeology', img: '/images/undurkhaan-mining-museum-history.png' }
];
