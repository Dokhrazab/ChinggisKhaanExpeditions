// /data/itinerary.js

export const khentiiExpedition = {
  title: "The Genesis Route: Birthplace of Genghis Khan",
  tagline: "Expedition into the heart of Khentii Province, Mongolia.",
  duration: "6 Days / 5 Nights",
  priceDescription: "Premium historical adventure.",
  focus: "History, Steppe Culture, and the Legacy of the Great Khan",
  difficulty: "Easy / Moderate",
  maxGroupSize: "6 Travelers",
  accommodations: "Premium Ger Camps & Boutique Hotels",
  bestTime: "June - September",
  heroImage: "/images/khentii-expedition-camp-view.png",
  
  // Pricing Metadata
  pricing: {
    private: {
      price: 2000,
      description: "Fully customizable itinerary. Private vehicle and guide. Choose any dates."
    },
    group: {
      price: 1000,
      description: "Small group experience (max 6). Fixed itinerary. Shared vehicle (max 3 per car)."
    }
  },

  // Scheduled Group Departures (Weekly 2026)
  scheduledGroups: [
    { id: 1, dates: "May 01 - May 06, 2026", status: "Available", spots: 6 },
    { id: 2, dates: "May 08 - May 13, 2026", status: "Available", spots: 6 },
    { id: 3, dates: "May 15 - May 20, 2026", status: "Available", spots: 6 },
    { id: 4, dates: "May 22 - May 27, 2026", status: "Available", spots: 6 },
    { id: 5, dates: "May 29 - June 03, 2026", status: "Available", spots: 6 },
    { id: 6, dates: "June 05 - June 10, 2026", status: "Available", spots: 6 },
    { id: 7, dates: "June 12 - June 17, 2026", status: "Available", spots: 4 },
    { id: 8, dates: "June 19 - June 24, 2026", status: "Available", spots: 6 },
    { id: 9, dates: "June 26 - July 01, 2026", status: "Available", spots: 6 },
    { id: 10, dates: "July 03 - July 08, 2026", status: "Available", spots: 6 },
    { id: 11, dates: "July 10 - July 15, 2026", status: "Available", spots: 2 },
    { id: 12, dates: "July 17 - July 22, 2026", status: "Available", spots: 6 },
    { id: 13, dates: "July 24 - July 29, 2026", status: "Available", spots: 5 },
    { id: 14, dates: "July 31 - August 05, 2026", status: "Available", spots: 6 },
    { id: 15, dates: "August 07 - August 12, 2026", status: "Available", spots: 6 },
    { id: 16, dates: "August 14 - August 19, 2026", status: "Available", spots: 4 },
    { id: 17, dates: "August 21 - August 26, 2026", status: "Available", spots: 6 },
    { id: 18, dates: "August 28 - September 02, 2026", status: "Available", spots: 6 }
  ],

  inclusions: [
    "Expert local historical guide",
    "Private 4x4 expedition vehicle",
    "Full board (Breakfast, Lunch, Dinner)",
    "Museum & National Park entry fees",
    "Bottled water & traditional snacks",
    "Horse riding experience fees"
  ],
  notIncluded: [
    "International flights",
    "Travel insurance",
    "Personal expenses & tips",
    "Alcoholic beverages"
  ],
  days: [
    {
      day: 1,
      title: "Ulaanbaatar to Khar Zurkhnii Khukh Nuur",
      description: "Our expedition begins with a journey east from Ulaanbaatar. We pause at the colossal Genghis Khan Equestrian Statue at Tsonjin Boldog, a monument marking the spot where Temuujin found the golden whip. From there, we proceed into the lush Khentii mountains to set camp at the serene 'Blue Lake of Black Heart' (Khar Zurkhnii Khukh Nuur).",
      location: "Khentii Mountains",
      driveTime: "4-5 hours",
      activity: "Monument visit & Lake-side walk",
      images: [
        "/images/tsonjin-boldog-genghis-khan-statue.png",
        "/images/khar-zurkhnii-khukh-nuur-lake.png",
        "/images/khentii-mountain-scenery.png"
      ]
    },
    {
      day: 2,
      title: "Chinggis City & The Steppe Horsemen",
      description: "We travel deeper into the province, passing through Chinggis City. Immerse yourself in the legendary culture of the Taliin Tumen Aduu camp, exploring traditional crafts, intricate saddles, and the vast steppes.",
      location: "Batnorov Soum",
      driveTime: "3-4 hours",
      activity: "Nomadic culture immersion",
      images: [
        "/images/mongolian-horsemen-festival.png",
        "/images/huhuuriin-taliin-boorchiin-monument.png",
        "/images/horse-culture-demonstration-mongolia.png"
      ]
    },
    {
      day: 3,
      title: "Dadal Soum: The Birthplace",
      description: "THE MAIN FOCUS. We arrive at Dadal Soum, visit the historically recognized birthplace of Temuujin at Deluun Boldog, and explore ancient Hunnic burial sites.",
      location: "Dadal Soum",
      driveTime: "4-5 hours",
      activity: "Historical Pilgrimage",
      images: [
        "/images/nomadic-life-mongolia-steppe.png",
        "/images/traditional-mongolian-mare-milk.png",
        "/images/nomad-family-hospitality.png"
      ]
    },
    {
      day: 4,
      title: "Binder Soum & Ancient Walls",
      description: "Travel to Binder soum to see the mysterious rock formations of Rashaan Khad and the ancient Uglugch Wall, a massive fortification built from interlocking stones.",
      location: "Binder Soum",
      driveTime: "3-4 hours",
      activity: "Ancient ruins discovery",
      images: [
        "/images/mongolian-ger-camp-khentii.png",
        "/images/sheep-herding-mongolia.png",
        "/images/undurkhaan-mining-museum-history.png"
      ]
    },
    {
      day: 5,
      title: "Kherlen Khuduu Aral: The Proclamation",
      description: "Ride towards Kherlen Khuduu Aral, the historic assembly ground where Genghis Khan was formally proclaimed the Great Khan in 1206.",
      location: "Kherlen River Basin",
      driveTime: "4-5 hours",
      activity: "River-side exploration",
      images: [
        "/images/twin-ger-accommodation-mongolia.png",
        "/images/mongolian-landscape-kherlen-river.png",
        "/images/kherlen-khuduu-aral-sacred-site.png"
      ]
    },
    {
      day: 6,
      title: "Return to Ulaanbaatar",
      description: "After breakfast on the open steppe, we begin our final journey back to Ulaanbaatar, reflecting on the sacred history of the Khentii region.",
      location: "Return Journey",
      driveTime: "5-6 hours",
      activity: "Farewell dinner",
      images: [
        "/images/traditional-mongolian-restaurant-view.png",
        "/images/authentic-nomad-family-experience.png",
        "/images/mongolian-steppe-landscape-view.png"
      ]
    }
  ]
};
