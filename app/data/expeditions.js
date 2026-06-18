export const additionalExpeditions = [
  {
    id: "altai-golden-eagle",
    title: "Altai Golden Eagle Festival",
    region: "Bayan-Ölgii / Sagsai",
    slug: "altai-golden-eagle",
    duration: "6 Days",
    difficulty: "Cultural / 4x4 Overland",
    price: "$2,100",
    metaTitle: "6-Day Altai Golden Eagle Festival: Nomadic Games & Eagle Hunters",
    metaDescription: "6-day immersive cultural expedition into the heart of the Altai. Witness the legendary Golden Eagle Festival, nomadic games, and traditional Tuvan hospitality.",
    heroImage: "/images/expeditions/altai-eagle/hero.jpg",
    waypoints: [
      { id: "ub", name: "Ulaanbaatar", coords: [47.9188, 106.9176], type: "airport", description: "Expedition Launch" },
      { id: "olgii", name: "Ölgii City", coords: [48.9712, 89.9702], type: "hub", description: "Base Camp & Urban Tour" },
      { id: "sagsai", name: "Sagsai Sum", coords: [48.7833, 89.6500], type: "festival", description: "Golden Eagle Festival Grounds" },
      { id: "tsengel", name: "Tsengel Sum", coords: [48.9333, 88.9333], type: "tuvan", description: "Tsagaan Sayan Tribe Encampment" }
    ],
    flightPath: [[47.9188, 106.9176], [48.9712, 89.9702]],
    overlandPath: [
      [48.9712, 89.9702],
      [48.7833, 89.6500],
      [48.9333, 88.9333],
      [48.9712, 89.9702]
    ],
    itinerary: [
      { 
        day: 1, 
        title: "The Gateway to the Altai", 
        vector: "Fly UB to Ölgii", 
        ops: "Depart Ulaanbaatar via domestic flight, landing in the capital of Bayan-Ölgii. Explore the distinct, Turkish-influenced culture of Ölgii city: climb Nairamdal Hill for a panoramic view and visit the Open-Air Bazaar for authentic Kazakh embroidery and felt boots. Savor traditional beshbarmak for dinner.", 
        terrain: "Urban / Airport Transfer" 
      },
      { 
        day: 2, 
        title: "Festival Awakening: Day 1", 
        vector: "Ölgii to Sagsai Valley", 
        ops: "Witness the Grand Opening Parade in Sagsai Valley as dozens of eagle hunters (berkutchi) march in on horseback. Watch intense agility competitions where hunters are scored on traditional attire, horse gear, and the flawless recall of their eagles from the mountaintops.", 
        terrain: "Gravel / Open Steppe" 
      },
      { 
        day: 3, 
        title: "Nomadic Games: Day 2", 
        vector: "Sagsai Festival Grounds", 
        ops: "Spend an exhilarating day at the hunting games. Marvel at the 'Chasing the Fox Skin' test of instinct and witness daring nomadic sports: Kyz Kuar (girl-chasing race) and Kukbar (horseback tug-of-war over a goat skin). Celebrate the crowning of the grand champion.", 
        terrain: "Festival Grounds" 
      },
      { 
        day: 4, 
        title: "Deep Journey into Tsengel Sum", 
        vector: "Drive to Tsengel Sum", 
        ops: "Traverse rugged tracks into remote Tsengel Sum, bordering Russia and China. Arrive at the encampment of the ancient Tsagaan Sayan Tuvan tribe. Experience legendary hospitality in a traditional felt ger and immediately get hands-on with nomadic life: herding and tending horses.", 
        terrain: "Rugged Mountain Track" 
      },
      { 
        day: 5, 
        title: "High Mountain Traverse", 
        vector: "Tsengel Exploration", 
        ops: "Dedicate the day to authentic mountain riding on sturdy Mongolian horses. Navigate steep alpine passes, glacial rivers, and high-altitude ridges with your Tuvan hosts. Enjoy a rustic picnic lunch by an alpine stream followed by a farewell feast under the unpolluted night sky.", 
        terrain: "Alpine / Forested" 
      },
      { 
        day: 6, 
        title: "Extraction Vector", 
        vector: "Return to Ölgii / Fly to UB", 
        ops: "Bid farewell to your hosts and make a swift overland dash back across the valleys to Ölgii. Capture final views of the changing autumn landscapes during the drive before catching your domestic flight back to Ulaanbaatar by day's end.", 
        terrain: "Return Piste" 
      }
    ]
  },
  {
    id: "gobi-loop",
    title: "8-Day Classic Gobi Loop",
    region: "South Gobi & Karakorum",
    slug: "gobi-loop",
    duration: "8 Days / 7 Nights",
    difficulty: "Standard Adventure",
    price: "$1,700",
    metaTitle: "8-Day Classic Gobi Loop: Ulaanbaatar to Karakorum Overland",
    metaDescription: "Explore the vast Middle and South Gobi. Wander the granite rock formations of Baga Gazriin Chuluu, the cliffs of Tsagaan Suvarga, Vulture Valley, Singing Dunes, Ongi Oasis, and Karakorum.",
    highlights: [
      "Scale the 300-meter-high Singing Dunes (Khongoryn Els)",
      "Explore the historic Orkhon Valley and ancient capital Karakorum",
      "Venture into the frozen canyons of Vulture Valley (Yoliin Am)"
    ],
    terrainMetrics: {
      elevation: "1,000m - 1,700m",
      vehicleStress: "Moderate (Long drive durations / Washboard piste)",
      isolationFactor: "7/10 (Established camps / Historic crossroads)"
    },
    imagePath: "/images/expeditions/gobi-loop/image146.jpg",
    overlandPath: [
      [47.9188, 106.9176],
      [46.2480, 105.9820],
      [43.8611, 108.3361],
      [43.4931, 104.0838],
      [43.5000, 103.1667],
      [46.6573, 103.1756],
      [47.2103, 102.8478],
      [47.9188, 106.9176]
    ],
    waypoints: [
      { id: "ub", name: "Ulaanbaatar", coords: [47.9188, 106.9176], type: "airport", description: "Expedition Launch" },
      { id: "baga-gazriin", name: "Baga Gazriin Chuluu", coords: [46.2480, 105.9820], type: "camp", description: "Granite Rock Formations" },
      { id: "tsagaan-suvarga", name: "Tsagaan Suvarga", coords: [43.8611, 108.3361], type: "cliff", description: "White Stupa Cliffs" },
      { id: "yoliin-am", name: "Yoliin Am", coords: [43.4931, 104.0838], type: "canyon", description: "Vulture Valley Ice Fields" },
      { id: "khongoryn-els", name: "Khongoryn Els", coords: [43.5000, 103.1667], type: "dunes", description: "Singing Sand Dunes" },
      { id: "ongi-monastery", name: "Ongi Monastery", coords: [46.6573, 103.1756], type: "monastery", description: "Historic Oasis Crossroads" },
      { id: "karakorum", name: "Karakorum", coords: [47.2103, 102.8478], type: "ancient-capital", description: "13th Century Capital" }
    ],
    itinerary: [
      {
        day: 1,
        title: "Baga Gazriin Chuluu (Granite Rock Formations)",
        vector: "Ulaanbaatar ➔ Baga Gazriin Chuluu",
        terrain: "Asphalt highway transitioning to rocky dirt tracks.",
        ops: "Drive south from Ulaanbaatar into the granite rock formations of the Middle Gobi. Explore the ruins of an ancient monastery hidden in the rock clefts.",
        accommodation: "Standard Ger Camp (Shared facilities)"
      },
      {
        day: 2,
        title: "Tsagaan Suvarga (White Stupa)",
        vector: "Baga Gazriin Chuluu ➔ Tsagaan Suvarga",
        terrain: "Undulating dirt piste across arid steppe.",
        ops: "Travel further south to the massive limestone structures of Tsagaan Suvarga, ancient sea beds that look like a multi-colored white stupa wall. Perfect for sunset photography.",
        accommodation: "Standard Ger Camp / Gobi Suvarga area"
      },
      {
        day: 3,
        title: "Yoliin Am (Vulture Valley / Gurvan Saikhan NP)",
        vector: "Tsagaan Suvarga ➔ Yoliin Am",
        terrain: "Gravel tracks leading into deep mountain canyons.",
        ops: "Enter the deep South Gobi. Hike deep into the sheer rock canyons of Yoliin Am where massive ice fields survive deep into the summer heat. Keep watch for Argali wild sheep.",
        accommodation: "Established Standard Ger Camp (e.g., Gobi Mirage / Gobi Nomad region)"
      },
      {
        day: 4,
        title: "Khongoryn Els (The Singing Dunes - Arrival)",
        vector: "Yoliin Am ➔ Khongoryn Els",
        terrain: "Soft sand channels, desert scrub, and dry washes.",
        ops: "Track west along the Altai mountain foothills to reach the massive 300-meter-high sand dunes. Settle into camp running parallel to the green Khongoryn Gol riverbed.",
        accommodation: "Standard Desert Ger Camp"
      },
      {
        day: 5,
        title: "Conquering the Singing Dunes",
        vector: "Khongoryn Els Exploration",
        terrain: "Deep dune sand and desert floor.",
        ops: "Spend the day exploring the dunes, camel riding along the base, and timing the steep climb to the ridge perfectly for a panoramic Gobi sunset as the sands \"sing.\"",
        accommodation: "Standard Desert Ger Camp"
      },
      {
        day: 6,
        title: "Ongi Monastery (The Oasis Crossroads)",
        vector: "Khongoryn Els ➔ Ongi River",
        terrain: "Vast dry gravel plains and riverbed crossings.",
        ops: "Break up the long drive north by traveling to the ruins of Ongi Monastery along the banks of the Ongi River. A historic gateway connecting the desert to the central steppes.",
        accommodation: "Standard Riverside Ger Camp"
      },
      {
        day: 7,
        title: "Karakorum & Erdene Zuu (The Ancient Capital)",
        vector: "Ongi Oasis ➔ Orkhon Valley ➔ Karakorum",
        terrain: "Earthen tracks transitioning into central Mongolian grass trails.",
        ops: "Drive into the Orkhon Valley to explore Karakorum, the 13th-century capital of the Mongol Empire. Tour the massive walls and active temples of Erdene Zuu Monastery.",
        accommodation: "Central Mongolia Ger Camp"
      },
      {
        day: 8,
        title: "Return to Ulaanbaatar",
        vector: "Karakorum ➔ Ulaanbaatar",
        terrain: "Smooth paved highway.",
        ops: "Complete the loop by driving back to the capital city. Evening drop-off at your accommodation/airport.",
        accommodation: "Drop-off at Ulaanbaatar accommodation"
      }
    ]
  }
];


