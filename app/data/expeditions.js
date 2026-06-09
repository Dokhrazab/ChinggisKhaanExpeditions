export const additionalExpeditions = [
  {
    id: "altai-7day-alpine",
    title: "Altai Vertical Axis: Glacial Navigation & Eagle Hunter Tactical Nodes",
    region: "Bayan-Ölgii / Western Altai",
    duration: "7 Days",
    difficulty: "Expert / High-Altitude Nav",
    price: "$1,940",
    metaTitle: "Altai 7-Day Overland: Vertical Shale Navigation & Kazakh Eagle Hunters",
    metaDescription: "7-day high-altitude overland mission through the Altai Mountains. Focus on vertical shale traversal, glacial stream crossings, and strategic Kazakh eagle hunter outposts using custom 4x4 Furgon units.",
    highlights: [
      "Vertical navigation of Tavan Bogd shale corridors",
      "Tactical glacial stream fording (seasonal melt-water logistics)",
      "Exclusive access to remote Kazakh eagle hunter winter camps"
    ],
    terrainMetrics: {
      elevation: "2,500m - 3,400m",
      vehicleStress: "Extreme (Axle articulation / Vertical torque load)",
      isolationFactor: "10/10 (Zero cellular footprint / Satellite telemetry only)"
    },
    imagePath: "/images/expeditions/altai_1.webp",
    itinerary: [
      { day: 1, vector: "Ölgii Base to Khoton Lake Entrance", terrain: "Gravel/Step-up", ops: "Load-out verification; satellite comms sync; initial tyre pressure adjustment for mixed gravel." },
      { day: 2, vector: "Lake Perimeter to Alpine Base", terrain: "Boulders/Glacial Silt", ops: "Low-range 4x4 engagement; navigation of active silt basins; setup of high-altitude field array." },
      { day: 3, vector: "Glacier Ridge Traversal", terrain: "Vertical Shale/Jagged Rock", ops: "Spotter-assisted navigation of shale slopes; testing of suspension rebound on off-camber tracks." },
      { day: 4, vector: "Eagle Hunter Tactical Node 1", terrain: "High Plateau/Open Tundra", ops: "Rendezvous with Kazakh nomadic units; logistics exchange; internal fuel-cell monitoring." },
      { day: 5, vector: "Stream Crossings to North Pass", terrain: "Deep Water/Mud Banks", ops: "Snorkel-dependent fording; lead-vehicle winch readiness; checking for chassis-water ingress." },
      { day: 6, vector: "The Descent to White River Valley", terrain: "Steep Switchbacks/Loose Rock", ops: "Heavy engine braking; descent control; monitoring brake rotor thermal signatures." },
      { day: 7, vector: "Final Vector to Ölgii Extraction", terrain: "Washboard Piste", ops: "Full vehicle integrity check; post-mission data logging; extraction to air terminal." }
    ]
  },
  {
    id: "khuvsgul-7day-taiga",
    title: "Northern Sub-Arctic Void: Taiga Bog Recovery & Tsaatan Outposts",
    region: "Khuvsgul / Northern Taiga",
    duration: "7 Days",
    difficulty: "Advanced / Heavy Recovery",
    price: "$1,765",
    metaTitle: "7-Day Khuvsgul Taiga Overland: Bog Recovery & Reindeer Herder Logistics",
    metaDescription: "Deep northern sub-arctic overland track. Master heavy water-logging, bog winching techniques, and logistics in the isolated Tsaatan reindeer-herder border zones.",
    highlights: [
      "Heavy bog winching and recovery operations (Self-extraction focused)",
      "Navigation of sub-arctic permafrost zones and marshlands",
      "Logistical integration with Tsaatan reindeer herder outposts"
    ],
    terrainMetrics: {
      elevation: "1,600m - 2,100m",
      vehicleStress: "High (Drive-train moisture / Winch motor thermal load)",
      isolationFactor: "9/10 (Sub-arctic border zone density)"
    },
    imagePath: "/images/expeditions/taiga_1.webp",
    itinerary: [
      { day: 1, vector: "Mörön to Lake Khuvsgul Perimeter", terrain: "Larch Forest/Deep Rut", ops: "Winch cable tension check; mud-terrain tyre deployment; forest clearance navigation." },
      { day: 2, vector: "Khoridol Saridag Foothills", terrain: "Wet Marsh/Permafrost", ops: "Bog-mats deployment; technical recovery of bogged units; permafrost stability assessment." },
      { day: 3, vector: "The Northern Mud-Piste Axis", terrain: "Deep Mud/Waterlogging", ops: "Sustained high-torque low-range ops; differential lock engagement; bypass navigation." },
      { day: 4, vector: "Tsaatan Reindeer Node (West Taiga)", terrain: "Dense Larch/Bog", ops: "Off-track navigation to nomadic coordinates; calorie-dense supply delivery; satellite update." },
      { day: 5, vector: "River Basin Extraction", terrain: "River Rocks/Soft Banks", ops: "Upstream fording; checking axle breathers for water; bank reinforcement for heavy units." },
      { day: 6, vector: "Southern Sayan Ridge Path", terrain: "Mountain Scree/Root systems", ops: "Clearance management over exposed root structures; torque management on steep forest inclines." },
      { day: 7, vector: "Return Vector to Mörön Base", terrain: "Gravel Piste", ops: "Gearbox fluid check; suspension cleaning; final mission de-briefing and extraction." }
    ]
  },
  {
    id: "gobi-7day-void",
    title: "Nemegt Basin Extraction: Black Sand & Thermal Void Logistics",
    region: "South Gobi / Nemegt Desert",
    duration: "7 Days",
    difficulty: "Advanced / Sand & Thermal",
    price: "$1,615",
    metaTitle: "7-Day South Gobi Overland: Nemegt Basin & Black Sand Dune Navigation",
    metaDescription: "Brutal southern Gobi overland mission. Focus on shifting black sand dunes, tactical canyon extraction through the Nemegt Basin, and high-heat logistics management.",
    highlights: [
      "High-speed navigation of the Khermen Tsav canyon systems",
      "Deep sand extraction in the shifting black dunes of the Nemegt",
      "Strict dry-tracking logistics (Water/Fuel payload optimization)"
    ],
    terrainMetrics: {
      elevation: "800m - 1,400m",
      vehicleStress: "Moderate-High (Thermal loading / Filtration clogging)",
      isolationFactor: "10/10 (Dead zone navigation / Fossil field isolation)"
    },
    imagePath: "/images/expeditions/gobi_1.webp",
    itinerary: [
      { day: 1, vector: "Dalanzadgad to Gurvan Saikhan Range", terrain: "Rocky Desert/Dry Wash", ops: "Tyre pressure reduction; air filter pre-cleaner check; water supply hardening." },
      { day: 2, vector: "Khongoryn Els Dune Perimeter", terrain: "Deep Sand/Silt", ops: "Sand-track readiness; momentum-based dune climbing; monitoring engine coolant temps." },
      { day: 3, vector: "Nemegt Basin Entry", terrain: "Corrugated Piste/Dry Canyons", ops: "Suspension damping adjustment; navigation of narrow canyon pinch-points; fossil bed protection." },
      { day: 4, vector: "The Void: Central Nemegt Sector", terrain: "Black Sand/Void Space", ops: "Satellite-only navigation; fuel consumption monitoring; deployment of heat-reflective field arrays." },
      { day: 5, vector: "Khermen Tsav Red Cliffs Extraction", terrain: "Soft Clay/Sandstone", ops: "Low-pressure sand ops; tactical navigation of erosion channels; high-temp tyre monitoring." },
      { day: 6, vector: "Naran Daats Oasis Recon", terrain: "Arid Scrub/Alkali Flats", ops: "Alkali dust mitigation; solar-array battery charging; vehicle dust-sealing verification." },
      { day: 7, vector: "Extraction Vector to Dalanzadgad", terrain: "High-speed Washboard", ops: "Shock absorber thermal check; full chassis nut-and-bolt inspection; payload reconciliation." }
    ]
  }
];
