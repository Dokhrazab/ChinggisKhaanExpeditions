// /data/itinerary.js
/**
 * @file data/itinerary.js
 * @description Production-ready ES6 module for the 7-Day Bespoke Khentii Taiga Traverse.
 * @version 2.1.1 - Hotfix: Restored missing waypoints for InteractiveMap.
 */

export const itineraryData = {
  id: "khentii-7day-traverse",
  slug: "7-day-khentii-taiga-traverse",
  price: "2200",
  currency: "USD",
  durationDays: 7,
  targetAudience: "High-Net-Worth International Overlanders",
  vehicleSpecs: {
    type: "UAZ Furgon Bukhanka",
    engineClass: "Military-Grade Mechanical Override",
    justification: "Pure mechanical resilience independent of microchips. Optimal short wheel-base clearance and cab-forward weight distribution designed to navigate heavy waterlogged Siberian peat bogs where luxury electronic SUVs suffer catastrophic frame anchoring."
  },
  waypoints: [
    { name: "Ulaanbaatar", coords: [47.9188, 106.9176], desc: "Expedition Launch" },
    { name: "Tsonjin Boldog", coords: [47.8079, 107.5303], desc: "Golden Whip Monument" },
    { name: "Blue Lake", coords: [48.0645, 108.1889], desc: "Enthronement Site" },
    { name: "Taliin Tumen Aduu", coords: [48.2500, 110.1500], desc: "Horse Country" },
    { name: "Dadal Soum", coords: [49.0200, 111.6200], desc: "Sacred Birthplace" },
    { name: "Duurilag Nars", coords: [48.5878, 110.5908], desc: "Xiongnu Necropolis" },
    { name: "Avarga Toson", coords: [47.2500, 109.1500], desc: "Healing Springs" },
    { name: "Gun-Galuut", coords: [47.6500, 108.3500], desc: "Nature Reserve" }
  ],
  days: [
    {
      day: 1,
      title: "The Gathering of Khans",
      translation: "Ulaanbaatar to The Blue Lake of the Black Heart",
      vector: "Ulaanbaatar ➔ Tsonjin Boldog ➔ Khar Zurkhnii Khukh Nuur",
      terrain: "Smooth highway asphalt transitioning into sweeping, alpine grassland tracks.",
      narrative: "Depart Ulaanbaatar heading due east, leaving urban infrastructure behind. The initial operational milestone is Tsonjin Boldog to stand beneath the staggering, 40-meter stainless steel monument of the Khan. From there, the UAZ Furgons strike deep into the Khentii foothills, navigating toward Khar Zurkhnii Khukh Nuur. Tucked beneath the shadow of the sacred Black Heart Mountain, this dark, pine-rimmed alpine lake is the exact site where Temüjin was enthroned as Genghis Khan in 1189.",
      accommodations: "Exclusive luxury lakeside ger camp with traditional multi-course dining.",
      imageSrc: "/images/khar-zurkhnii-khukh-nuur-lake.png"
    },
    {
      day: 2,
      title: "The Ten Thousand Horses & The Taiga Hound",
      translation: "The Ten Thousand Horses of the Steppe",
      vector: "Khar Zurkhnii Khukh Nuur ➔ Deep East ➔ Taliin Tumen Aduu",
      terrain: "Fast, rolling earthen trails and winding ridge lines on the approach to the Dadal borderlands.",
      narrative: "The Furgons break camp early, pushing further east into the vast horse country of Taliin Tumen Aduu. This is an active, uncommercialized theater of ancient nomadic life. This day is built on raw, immersive action: you saddle up on legendary, high-stamina Mongolian horses and head into the brush with local hunters. Tracking alongside rare, native Mongolian greyhounds—the ancestral Taiga dogs—you participate in a traditional rabbit hunt across the ridges.",
      accommodations: "Private, self-supported expedition base camp deep within the isolated grassland ridges.",
      imageSrc: "/images/mongolian-horsemen-festival.png"
    },
    {
      day: 3,
      title: "Birthplace of the Khan",
      translation: "Dadal Soum Isolation Sanctuary",
      vector: "Taliin Tumen Aduu ➔ Forest Dirt Roads ➔ Dadal Soum",
      terrain: "Rugged, unpaved forest tracks; technical dirt driving through dense birch and larch corridors.",
      narrative: "We commit our convoy entirely to the northern wilderness trail. The Furgons churn through winding, unpaved dirt paths that climb steadily into the pristine sub-Siberian taiga ecosystem. Our destination is Dadal, the isolated northern oasis where the Khan was born. Because reaching this sanctuary requires master driving and a heavy-duty military-grade chassis, it remains blissfully untouched by mass tourism. The afternoon is spent exploring the sacred springs of Delüün Boldog and the clear lakes nestled deep in the pine woods.",
      accommodations: "Expedition camping surrounded by towering pines and crisp, unpolluted sub-Siberian air.",
      imageSrc: "/images/dadal-birthplace-historical-view.avif"
    },
    {
      day: 4,
      title: "Tombs of the Empire & The Onon River Gauntlet",
      translation: "The Technical Dirt Trekking Apex",
      vector: "Dadal ➔ Onon River Dirt Track ➔ Duurilag Nars",
      terrain: "Extreme dirt trekking along shifting river benches, waterlogged mud channels, and bogs.",
      narrative: "This is the day the ex-Soviet Furgon proves its legendary status. We trail the banks of the powerful Onon River, conquering a notorious dirt track that would easily swallow a standard luxury SUV. After navigating the river mires, we break through the tree line into Duurilag Nars—a hauntingly beautiful forest sanctuary holding an ancient Xiongnu (Hunnic) elite cemetery. Here, you will explore over 300 massive, grass-covered burial mounds of Hun nobles that pre-date the Mongol Empire by a millennium.",
      accommodations: "Deep-woods expedition camping within the whispering pine forests of Duurilag Nars.",
      imageSrc: "/images/ancient-ruins-discovery-binder-soum.avif"
    },
    {
      day: 5,
      title: "The Sovereign Sanctuary & The Healing Waters",
      translation: "The 1206 Imperial Cradle",
      vector: "Duurilag Nars ➔ Heading South ➔ Avarga Toson & Kherlen Khuduu Aral",
      terrain: "Transitioning out of the heavy taiga mud into wide-open, fast-rolling southern steppe corridors.",
      narrative: "We turn the convoy due south, clearing the dense forest fortress as the landscape breaks wide open into the historic grasslands of Kherlen Khuduu Aral. This sacred plateau is the bedrock of the empire—the exact site where the Great Mongol Empire was formally proclaimed in 1206. After the grueling mud and river trails of the previous days, you wash away the trail dust by soaking in the highly therapeutic, mineral-rich carbonate waters of Avarga Toson Lake, a natural spring sought after for centuries for its restorative properties.",
      accommodations: "Premium restorative ger camp accommodations near the healing springs for physical recovery.",
      imageSrc: "/images/kherlen-khuduu-aral-assembly-grounds.avif"
    },
    {
      day: 6,
      title: "Sanctuary of Great Vistas",
      translation: "The Eco-Protected Confluence",
      vector: "Avarga Toson ➔ Heading West ➔ Gun-Galuut Nature Reserve",
      terrain: "Smooth, wide steppe trails tracing along the scenic Kherlen River basin.",
      narrative: "Our workhorses trace the river corridors west toward the globally recognized Gun-Galuut Nature Reserve. This protected ecosystem is an incredible final wilderness stronghold, where jagged rocky mountains, expansive wetlands, and open steppes collide. The late afternoon offers a peaceful, scenic decompression—you can track rare, endangered Argali wild sheep scaling the Baits Mountain cliffs or kayak through the serene wetlands.",
      accommodations: "A curated, exclusive farewell dinner at a premium eco-lodge nestled inside the reserve bounds.",
      imageSrc: "/images/chinggis-khaan-expedition-camp-front.png"
    },
    {
      day: 7,
      title: "The Final Extraction",
      translation: "Return Tarmac Vector to Ulaanbaatar",
      vector: "Gun-Galuut Nature Reserve ➔ Direct Asphalt Sprint ➔ Ulaanbaatar",
      terrain: "High-speed, seamless tarmac return vector.",
      narrative: "We pack up the expedition gear for the final leg of the journey. Joining the main western asphalt corridor, the Furgons deliver a smooth, effortless cruise directly back into the capital city of Ulaanbaatar. Arriving by midday, the journey officially concludes with luxury hotel drop-offs and final urban decompression, leaving you as one of the few global travelers to have truly penetrated the natural fortress of Khentii.",
      accommodations: "Luxury hotel drop-off and urban integration layout.",
      imageSrc: "/images/kherlen-khuduu-aral-assembly-grounds.avif"
    }
  ]
};

export const expeditions = { en: [itineraryData] };
export const sampleBlogs = [
  { slug: 'rugged-overland-guide', title: 'Navigating the Northern Taiga', category: 'Expertise', img: '/images/khentii-mountain-scenery.png' }
];
