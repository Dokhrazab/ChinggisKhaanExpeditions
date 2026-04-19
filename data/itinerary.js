// /data/itinerary.js

export const khentiiExpedition = {
  title: "The Genesis Route: Birthplace of Genghis Khan",
  tagline: "Expedition into the heart of Khentii Province, Mongolia.",
  duration: "6 Days / 5 Nights",
  priceDescription: "Premium historical adventure.",
  focus: "History, Steppe Culture, and the Legacy of the Great Khan",
  difficulty: "Easy / Moderate",
  maxGroupSize: "8 Travelers",
  accommodations: "Premium Ger Camps & Boutique Hotels",
  bestTime: "June - September",
  heroImage: "/images/hero_bg.png",
  
  // Pricing Metadata
  pricing: {
    private: {
      price: 3250,
      description: "Fully customizable itinerary. Private vehicle and guide. Choose any dates."
    },
    group: {
      price: 2150,
      description: "Small group experience (max 6). Fixed itinerary. Shared vehicle (max 3 per car)."
    }
  },

  // Scheduled Group Departures
  scheduledGroups: [
    { id: 1, dates: "July 12 - July 17, 2026", status: "Available", spots: 4 },
    { id: 2, dates: "August 08 - August 13, 2026", status: "Available", spots: 2 },
    { id: 3, dates: "September 05 - September 10, 2026", status: "Limited", spots: 1 },
    { id: 4, dates: "October 02 - October 07, 2026", status: "Closed", spots: 0 }
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
        "/images/image_6.png", // Tsonjin Boldog
        "/images/image_5.png", // Khukh Nuur Lake
        "/images/image_15.png" // Local authentic view
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
        "/images/image_0.png", // Horsemen
        "/images/image_1.png", // Monument
        "/images/image_16.png" // Local authentic view
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
        "/images/image_7.png",
        "/images/image_8.png",
        "/images/image_17.png" // Local authentic view
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
        "/images/image_9.png",
        "/images/image_10.png",
        "/images/image_18.png" // Local authentic view
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
        "/images/image_11.png",
        "/images/image_12.png",
        "/images/image_19.png" // Local authentic view
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
        "/images/image_13.png",
        "/images/image_14.png",
        "/images/image_20.png" // Local authentic view
      ]
    }
  ]
};
