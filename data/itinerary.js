// /data/itinerary.js
/**
 * @file data/itinerary.js
 * @description Production-ready ES6 module for the 7-Day Bespoke Khentii Taiga Traverse.
 * @version 2.3.0 - Integrated Travel Guides and fixed blog structure.
 */

export const itineraryData = {
  id: "khentii-7day-traverse",
  slug: "7-day-khentii-taiga-traverse",
  title: "Rugged Khentii Taiga Traverse",
  tagline: "A 7-Day Bespoke Expedition into the heart of the Northern Taiga.",
  description: "Experience the ultimate private remote wilderness safari. This 7-day self-supported overland journey tracks through the uncharted Khentii taiga, reaching the sacred birthplace of history with elite 4x4 capability.",
  duration: "7 Days / 6 Nights",
  price: 2200,
  currency: "USD",
  difficulty: "Rugged / Professional 4x4",
  maxGroupSize: "4-6 Travelers",
  heroImage: "/images/chinggis-khaan-expedition-signature-hero.avif",
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
      vector: "Ulaanbaatar ➔ Tsonjin Boldog ➔ Khar Zurkhnii Khukh Nuur",
      terrain: "Smooth highway asphalt transitioning into sweeping, alpine grassland tracks.",
      description: "Depart Ulaanbaatar heading due east, leaving urban infrastructure behind. The initial operational milestone is Tsonjin Boldog to stand beneath the staggering, 40-meter stainless steel monument of the Khan. From there, the UAZ Furgons strike deep into the Khentii foothills, navigating toward Khar Zurkhnii Khukh Nuur. Tucked beneath the shadow of the sacred Black Heart Mountain, this dark, pine-rimmed alpine lake is the exact site where Temüjin was enthroned as Genghis Khan in 1189.",
      accommodations: "Exclusive luxury lakeside ger camp with traditional multi-course dining.",
      imageSrc: "/images/khar-zurkhnii-khukh-nuur-lake.png"
    },
    {
      day: 2,
      title: "The Ten Thousand Horses & The Taiga Hound",
      vector: "Khar Zurkhnii Khukh Nuur ➔ Deep East ➔ Taliin Tumen Aduu",
      terrain: "Fast, rolling earthen trails and winding ridge lines on the approach to the Dadal borderlands.",
      description: "The Furgons break camp early, pushing further east into the vast horse country of Taliin Tumen Aduu. This is an active, uncommercialized theater of ancient nomadic life. This day is built on raw, immersive action: you saddle up on legendary, high-stamina Mongolian horses and head into the brush with local hunters. Tracking alongside rare, native Mongolian greyhounds—the ancestral Taiga dogs—you participate in a traditional rabbit hunt across the ridges.",
      accommodations: "Private, self-supported expedition base camp deep within the isolated grassland ridges.",
      imageSrc: "/images/mongolian-horsemen-festival.png"
    },
    {
      day: 3,
      title: "Birthplace of the Khan",
      vector: "Taliin Tumen Aduu ➔ Forest Dirt Roads ➔ Dadal Soum",
      terrain: "Rugged, unpaved forest tracks; technical dirt driving through dense birch and larch corridors.",
      description: "We commit our convoy entirely to the northern wilderness trail. The Furgons churn through winding, unpaved dirt paths that climb steadily into the pristine sub-Siberian taiga ecosystem. Our destination is Dadal, the isolated northern oasis where the Khan was born. Because reaching this sanctuary requires master driving and a heavy-duty military-grade chassis, it remains blissfully untouched by mass tourism. The afternoon is spent exploring the sacred springs of Delüün Boldog and the clear lakes nestled deep in the pine woods.",
      accommodations: "Expedition camping surrounded by towering pines and crisp, unpolluted sub-Siberian air.",
      imageSrc: "/images/dadal-birthplace-historical-view.avif"
    },
    {
      day: 4,
      title: "Tombs of the Empire & The Onon River Gauntlet",
      vector: "Dadal ➔ Onon River Dirt Track ➔ Duurilag Nars",
      terrain: "Extreme dirt trekking along shifting river benches, waterlogged mud channels, and bogs.",
      description: "This is the day the ex-Soviet Furgon proves its legendary status. We trail the banks of the powerful Onon River, conquering a notorious dirt track that would easily swallow a standard luxury SUV. After navigating the river mires, we break through the tree line into Duurilag Nars—a hauntingly beautiful forest sanctuary holding an ancient Xiongnu (Hunnic) elite cemetery. Here, you will explore over 300 massive, grass-covered burial mounds of Hun nobles that pre-date the Mongol Empire by a millennium.",
      accommodations: "Deep-woods expedition camping within the whispering pine forests of Duurilag Nars.",
      imageSrc: "/images/ancient-ruins-discovery-binder-soum.avif"
    },
    {
      day: 5,
      title: "The Sovereign Sanctuary & The Healing Waters",
      vector: "Duurilag Nars ➔ Heading South ➔ Avarga Toson & Kherlen Khuduu Aral",
      terrain: "Transitioning out of the heavy taiga mud into wide-open, fast-rolling southern steppe corridors.",
      description: "We turn the convoy due south, clearing the dense forest fortress as the landscape breaks wide open into the historic grasslands of Kherlen Khuduu Aral. This sacred plateau is the bedrock of the empire—the exact site where the Great Mongol Empire was formally proclaimed in 1206. After the grueling mud and river trails of the previous days, you wash away the trail dust by soaking in the highly therapeutic, mineral-rich carbonate waters of Avarga Toson Lake, a natural spring sought after for centuries for its restorative properties.",
      accommodations: "Premium restorative ger camp accommodations near the healing springs for physical recovery.",
      imageSrc: "/images/kherlen-khuduu-aral-assembly-grounds.avif"
    },
    {
      day: 6,
      title: "Sanctuary of Great Vistas",
      vector: "Avarga Toson ➔ Heading West ➔ Gun-Galuut Nature Reserve",
      terrain: "Smooth, wide steppe trails tracing along the scenic Kherlen River basin.",
      description: "Our workhorses trace the river corridors west toward the globally recognized Gun-Galuut Nature Reserve. This protected ecosystem is an incredible final wilderness stronghold, where jagged rocky mountains, expansive wetlands, and open steppes collide. The late afternoon offers a peaceful, scenic decompression—you can track rare, endangered Argali wild sheep scaling the Baits Mountain cliffs or kayak through the serene wetlands.",
      accommodations: "A curated, exclusive farewell dinner at a premium eco-lodge nestled inside the reserve bounds.",
      imageSrc: "/images/chinggis-khaan-expedition-camp-front.png"
    },
    {
      day: 7,
      title: "The Final Extraction",
      vector: "Gun-Galuut Nature Reserve ➔ Direct Asphalt Sprint ➔ Ulaanbaatar",
      terrain: "High-speed, seamless tarmac return vector.",
      description: "We pack up the expedition gear for the final leg of the journey. Joining the main western asphalt corridor, the Furgons deliver a smooth, effortless cruise directly back into the capital city of Ulaanbaatar. Arriving by midday, the journey officially concludes with luxury hotel drop-offs and final urban decompression, leaving you as one of the few global travelers to have truly penetrated the natural fortress of Khentii.",
      accommodations: "Luxury hotel drop-off and urban integration layout.",
      imageSrc: "/images/kherlen-khuduu-aral-assembly-grounds.avif"
    }
  ]
};

import { additionalExpeditions } from '../app/data/expeditions';

export const expeditions = [itineraryData, ...additionalExpeditions];

export const dayImages = {
  "khentii-7day-traverse": [
    ["/images/81.png", itineraryData.days[0].imageSrc, "/images/55.png"], // Day 1
    [itineraryData.days[1].imageSrc, "/images/39.avif", "/images/48.avif"], // Day 2
    [itineraryData.days[2].imageSrc, "/images/69.png", "/images/80.avif"], // Day 3
    ["/images/71.avif", "/images/75.webp", "/images/38.avif"], // Day 4
    ["/images/90.jpg", "/images/73.jpg", "/images/91.jpg"], // Day 5
    ["/images/95.jpg", "/images/96.jpg", "/images/97.jpg"], // Day 6
    ["/images/70.avif", "/images/98.jpg", "/images/67.avif"] // Day 7
  ],
  "altai-golden-eagle": [
    ["/images/expeditions/altai-eagle/day1.jpg", "/images/expeditions/altai-eagle/day1_2.jpg", "/images/expeditions/altai-eagle/day1_3.jpg"],
    ["/images/expeditions/altai-eagle/day2.jpg", "/images/expeditions/altai-eagle/day2_2.jpg", "/images/expeditions/altai-eagle/day2_3.jpg"],
    ["/images/expeditions/altai-eagle/day3.jpg", "/images/expeditions/altai-eagle/day3_2.jpg", "/images/expeditions/altai-eagle/day3_3.jpg"],
    ["/images/expeditions/altai-eagle/day4.jpg", "/images/expeditions/altai-eagle/day4_2.jpg", "/images/expeditions/altai-eagle/day4_3.jpg"],
    ["/images/expeditions/altai-eagle/day5.jpg", "/images/expeditions/altai-eagle/day5_2.jpg", "/images/expeditions/altai-eagle/day5_3.jpg"],
    ["/images/expeditions/altai-eagle/day6.jpg", "/images/expeditions/altai-eagle/day6_2.jpg", "/images/expeditions/altai-eagle/day6_3.jpg"]
  ],
  "gobi-loop": [
    ["/images/expeditions/gobi-loop/day1_1.jpg", "/images/expeditions/gobi-loop/day1_2.jpg", "/images/expeditions/gobi-loop/day1_3.jpg"],
    ["/images/expeditions/gobi-loop/image128.jpg", "/images/expeditions/gobi-loop/image126.jpg", "/images/expeditions/gobi-loop/image127.jpg"],
    ["/images/expeditions/gobi-loop/image129.jpg", "/images/expeditions/gobi-loop/image130.jpg", "/images/expeditions/gobi-loop/image131.jpg"],
    ["/images/expeditions/gobi-loop/image134.jpg", "/images/expeditions/gobi-loop/image133.jpg", "/images/expeditions/gobi-loop/image132.jpg"],
    ["/images/expeditions/gobi-loop/image135.jpg", "/images/expeditions/gobi-loop/image136.jpg", "/images/expeditions/gobi-loop/image137.jpg"],
    ["/images/expeditions/gobi-loop/image140.jpg", "/images/expeditions/gobi-loop/image138.jpg", "/images/expeditions/gobi-loop/image139.jpg"],
    ["/images/expeditions/gobi-loop/image142.jpg", "/images/expeditions/gobi-loop/image143.jpg", "/images/expeditions/gobi-loop/image141.jpg"],
    ["/images/76.avif", "/images/expeditions/gobi-loop/image144.jpg", "/images/expeditions/gobi-loop/image145.jpg"],
  
  ]
};

export const travelGuides = [
  { 
    slug: 'rugged-overland-guide', 
    title: 'How to Tour Mongolia: The Ultimate Practical Guide to Remote Overlanding', 
    category: 'Expertise', 
    img: '/images/khentii-mountain-scenery.png',
    date: 'May 2026',
    content: `
      <p>Planning a journey into the vast Mongolian wilderness can be incredibly daunting. With over 1.6 million square kilometers of terrain and a road network that is less than 5% paved, it is a destination that demands precise planning, robust logistics, and an understanding of local regulations.</p>
      
      <p>Whether you are planning to charter an elite private expedition or navigate the backcountry independently, this comprehensive guide covers the critical legal, mechanical, and cultural requirements you must know before arriving in Ulaanbaatar.</p>
      
      <h2>1. Visa Requirements & Mandatory Immigration Registration</h2>
      <p>Entry regulations depend heavily on your nationality, but the administrative steps upon arrival apply to everyone:</p>
      <ul>
        <li><strong>Visa-Free Entry:</strong> Citizens of over 30 countries (including the US, Canada, UK, and Australia) can enter Mongolia visa-free for tourism purposes for stays ranging from 30 to 90 days. Always ensure your passport is valid for at least six months beyond your departure date.</li>
        <li><strong>The 48-Hour Registration Rule:</strong> This is where many independent travelers get caught. All foreign nationals must be formally registered with the Immigration Agency of Mongolia within 48 hours of arrival. If you book an expedition with us, our concierge team handles this digitally on your behalf. If traveling independently, your hotel or housing provider must submit this via the official E-immigration mobile application to avoid severe exit fines.</li>
        <li><strong>Border Zone Permits:</strong> If your itinerary targets remote areas within 100km of the Russian or Chinese borders (such as the deep northern Taiga or parts of the far Altai), standard tourist access is restricted. You must secure a special permit from the State Frontier Guard Authority prior to departure.</li>
      </ul>
      
      <h2>2. Vehicle Selection & The Realities of the Backcountry Piste</h2>
      <p>Once you leave the gridlock of Ulaanbaatar, infrastructure drops off completely. Reaching destinations like Dadal Soum or the deep Gobi requires a platform built for technical overland transit.</p>
      
      <table>
        <thead>
          <tr>
            <th>Vehicle Class</th>
            <th>Pros</th>
            <th>Cons</th>
            <th>Best Suited For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Modern Luxury SUV</strong></td>
            <td>High asphalt comfort, advanced climate control</td>
            <td>Complex electronics fail in deep river bogs; fragile plastic trim</td>
            <td>Short highway trips (Terelj National Park)</td>
          </tr>
          <tr>
            <td><strong>UAZ Furgon (Bukhanka)</strong></td>
            <td>100% mechanical resilience, heavy cab-forward weight, easy field repairs</td>
            <td>No luxury amenities, rugged analog ride</td>
            <td>Deep Taiga peat bogs, extreme mud, remote northern rivers</td>
          </tr>
          <tr>
            <td><strong>Modified Land Cruiser</strong></td>
            <td>Excellent clearance, reliable 4x4 lockouts</td>
            <td>High fuel consumption, parts hard to find in remote soums</td>
            <td>Gobi Desert tracks, gravel washboards</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Communication, Power, and Cash Flow</h2>
      <p>Do not expect your international data plan to keep you connected when tracking across the steppe. Plan your utility layout using these parameters:</p>
      <ul>
        <li><strong>Connectivity:</strong> Pick up a local physical or eSIM (Mobicom or Unitel are recommended) at the airport in Ulaanbaatar. You will find reliable 4G in town centers (Soums), but anticipate total digital blackouts when traversing the open country. For emergency backup, our expedition convoys carry standalone satellite communication arrays.</li>
        <li><strong>Currency Logistics:</strong> The official currency is the Mongolian Tögrög (MNT). While high-end establishments in the capital accept credit cards, cash is absolute king everywhere else. Exchange your currency at the Naiman Sharga exchange market in downtown Ulaanbaatar for the most accurate rates, and ensure you carry plenty of small-denomination bills for rural fuel stops and nomad encounters.</li>
        <li><strong>Power Infrastructure:</strong> Electricity is non-existent during deep wilderness camping. Bring high-capacity power banks capable of handling European Type C/E plug configurations for when you hit ger camps.</li>
      </ul>

      <h2>4. Cultural Etiquette: Navigating the Nomadic Ger</h2>
      <p>Mongolian hospitality is legendary, but it is deeply tied to ancestral customs. When visiting a local herder's family, practicing respect preserves safety and goodwill:</p>
      <ul>
        <li><strong>The Threshold:</strong> Never step on the wooden threshold of a ger's doorway—this is traditionally viewed as stepping on the neck of the household's master. Step completely over it with your right foot first.</li>
        <li><strong>Receiving Offerings:</strong> When handed a bowl of dairy (like Airag) or a plate of food, always accept it with your right hand, using your left hand to lightly support your right elbow as a sign of deep respect.</li>
        <li><strong>Direction of Travel:</strong> Once inside a traditional ger, always walk around the perimeter in a clockwise direction. Avoid pointing your feet directly at the central structural pillars or the family altar.</li>
      </ul>

      <h2>The Ultimate Takeaway</h2>
      <p>Touring Mongolia is an unparalleled adventure, but it punishes poor preparation. By ensuring your legal registrations are filed, selecting an analog-capable vehicle platform, and treating the local nomadic culture with respect, you transform a highly unpredictable environment into the trip of a lifetime.</p>
    `
  },
  { 
    slug: 'the-sovereign-plateau', 
    title: 'Kherlen Khuduu Aral: The Bedrock of Empire', 
    category: 'History', 
    img: '/images/kherlen-khuduu-aral-assembly-grounds.avif',
    date: 'June 2026',
    content: `
      <p>Kherlen Khuduu Aral is the most historically significant plateau in Central Asia. It is the site where the Great Mongol Empire was proclaimed in 1206.</p>
      <h2>A Sacred Geography</h2>
      <p>Our expeditions provide clarity on why this specific location was chosen for the Great Assembly. The confluence of the Kherlen River and the surrounding mountains provided a natural fortress and a logistical hub for the early Mongol state.</p>
      <h2>Archaeological Footprints</h2>
      <p>From 13th-century palace foundations to ancient monuments, the plateau is an open-air museum. We guide you through the latest findings that link these ruins to the political vision of the Great Khan.</p>
    `
  },
  { 
    slug: '4x4-expedition-gear', 
    title: 'Essential Gear for Remote Safari', 
    category: 'Equipment', 
    img: '/images/chinggis-khaan-expedition-signature-hero.avif',
    date: 'April 2026',
    content: `
      <p>Packing for a remote 4x4 expedition requires a balance of weight and utility. In the deep field, every kilogram must earn its place.</p>
      <h2>The Recovery Kit</h2>
      <p>Beyond the basics, we carry heavy-duty winches, sand ladders, and high-lift jacks. But the most important piece of gear is the expertise to use them effectively in saturated soil.</p>
      <h2>Personal Provisions</h2>
      <p>We provide premium field gear, but we recommend guests bring high-quality technical layers. The temperature in the Khentii can swing 30 degrees Celsius in a single day.</p>
    `
  },
];
