// /data/tours.js

export const tourData = [
  {
    id: "genesis-route",
    title: "The Genesis Route",
    duration: "6 Days",
    image: "/images/chinggis-khaan-expedition-signature-hero.avif",
    tagline: "Expedition into the heart of Khentii.",
    color: "#C5A059",
    waypoints: [
      { name: "Ulaanbaatar", coords: [47.9188, 106.9176], day: 0, desc: "The modern gateway to the empire." },
      { name: "Tsonjinboldog", coords: [47.8079, 107.5303], day: 1, desc: "Where the golden whip was found." },
      { name: "Blue Lake", coords: [48.0645, 108.1889], day: 2, desc: "The site of Temuujin's enthronement." },
      { name: "Chinggis City", coords: [47.3197, 110.6558], day: 3, desc: "Historical center of the East." },
      { name: "Taliin Tumen Aduu", coords: [47.3, 111.0], day: 4, desc: "The festival of ten thousand horses." },
      { name: "Dadal Soum", coords: [49.0200, 111.6200], day: 5, desc: "The sacred birthplace of the Great Khan." },
      { name: "Binder Soum", coords: [48.5800, 110.6300], day: 6, desc: "Ancient ruins and sacred mountain ridges." }
    ]
  },
  {
    id: "golden-whip",
    title: "The Golden Whip",
    duration: "1 Day",
    image: "/images/tsonjin-boldog-genghis-khan-statue.png",
    tagline: "The Legend of Tsonjinboldog.",
    color: "#8B4513",
    waypoints: [
      { name: "Ulaanbaatar", coords: [47.9188, 106.9176], day: 1, desc: "Departure from the capital." },
      { name: "Tsonjinboldog", coords: [47.8079, 107.5303], day: 1, desc: "The 40m stainless steel colossus." },
      { name: "Ulaanbaatar", coords: [47.9188, 106.9176], day: 1, desc: "Evening return." }
    ]
  },
  {
    id: "imperial-vault",
    title: "The Imperial Vault",
    duration: "1 Day",
    image: "/images/chinggis-khaan-historical-clarity-authority.jpg",
    tagline: "National Museum Deep-Dive.",
    color: "#2D4F1E",
    waypoints: [
      { name: "UB Center", coords: [47.9188, 106.9176], day: 1, desc: "Guided museum experience." },
      { name: "Chinggis Khaan Museum", coords: [47.9230, 106.9180], day: 1, desc: "9 floors of imperial history." }
    ]
  }
];

export const sampleBlogs = [
  { 
    slug: 'dadal-vs-ulaanbaatar', 
    title: 'Dadal vs. Ulaanbaatar: The Search for the Real Mongolia', 
    category: 'History', 
    img: '/images/khentii-mountain-scenery.png',
    size: 'large'
  },
  { 
    slug: 'the-colossus-legend', 
    title: 'The Legend of the Golden Whip', 
    category: 'Culture', 
    img: '/images/tsonjin-boldog-genghis-khan-statue.png',
    size: 'small'
  },
  { 
    slug: 'decoding-the-imperial-vault', 
    title: 'Inside the 9 Floors of the Imperial Vault', 
    category: 'Archaeology', 
    img: '/images/undurkhaan-mining-museum-history.png',
    size: 'small'
  }
];
