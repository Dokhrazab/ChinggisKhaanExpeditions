// /data/itinerary.js

export const expeditions = {
  en: [
    {
      id: "rugged-mongolia-4x4",
      title: "Rugged Mongolia 4x4 Expedition",
      seoTitle: "Rugged Mongolia 4x4 Expedition | Private Remote Wilderness Safari",
      tagline: "A Bespoke Overland Journey into the heart of the Northern Taiga.",
      description: "Experience the ultimate private remote wilderness safari. This 6-day self-supported overland journey tracks through the uncharted Khentii taiga, reaching the sacred birthplace of history with elite 4x4 capability.",
      duration: "6 Days / 5 Nights",
      price: 1500,
      heroImage: "/images/chinggis-khaan-expedition-signature-hero.avif",
      difficulty: "Rugged / Professional 4x4",
      maxGroupSize: "4-6 Travelers",
      waypoints: [
        { name: "Ulaanbaatar", coords: [47.9188, 106.9176], desc: "Expedition Launch" },
        { name: "Blue Lake", coords: [48.0645, 108.1889], desc: "Taiga Entry" },
        { name: "Dadal Soum", coords: [49.0200, 111.6200], desc: "Sacred Birthplace" },
        { name: "Binder Soum", coords: [48.5878, 110.5908], desc: "Historical Perimeter" },
        { name: "Kherlen Aral", coords: [47.4667, 108.7833], desc: "Steppe Unification" }
      ],
      days: [
        { 
          day: 1, 
          title: "Ulaanbaatar to the Sacred Blue Lake", 
          description: "Departure from the capital. We cross the Tsonjin Boldog perimeter and push deep into the Khentii mountains to reach the sacred site of Temuujin's 1189 enthronement. First camp in the high taiga." 
        },
        { 
          day: 2, 
          title: "The Kherlen River Crossing & Steppe Encampment", 
          description: "Challenging 4x4 terrain across the Kherlen river basin. Arrival at our signature Taliin Tumen Aduu camp for a deep immersion into nomadic horse culture and historical clarity." 
        },
        { 
          day: 3, 
          title: "Dadal Soum: The Birthplace Expedition", 
          description: "Final push to the sacred birthplace. This is the definitive destination of our bespoke overland journey—a remote sanctuary untouched by mass tourism." 
        },
        { 
          day: 4, 
          title: "Uglugch Wall & Ancient Petroglyphs", 
          description: "Navigating the rugged perimeter of Binder Soum. We explore the 8th-century Uglugch Wall, a testament to the region's enduring tactical significance." 
        },
        { 
          day: 5, 
          title: "Kherlen Aral: The Great Assembly", 
          description: "Journey to the assembly grounds of the 1206 unification. A landscape of immense spiritual and historical power where the Great Mongol Empire was forged." 
        },
        { 
          day: 6, 
          title: "The Return Across the Open Steppe", 
          description: "A final high-speed traverse across the Mongolian heartland, returning to Ulaanbaatar by sunset. Expedition debrief and farewell." 
        }
      ]
    }
  ],
  ko: [
    {
      id: "rugged-mongolia-4x4",
      title: "러기드 몽골리아 4x4 엑스페디션",
      seoTitle: "러기드 몽골리아 4x4 엑스페디션 | 프라이빗 야생 사파리",
      tagline: "북부 타이가의 심장부로 떠나는 맞춤형 오버랜드 여정.",
      description: "궁극의 프라이빗 원격 야생 사파리를 경험하세요. 6일간의 자급자족 오버랜드 여정은 미지의 헨티 타이가를 지나 엘리트 4x4 성능으로 역사의 성스러운 탄생지에 도달합니다.",
      duration: "6일 / 5박",
      price: 1500,
      heroImage: "/images/chinggis-khaan-expedition-signature-hero.avif",
      difficulty: "상급 / 전문 4x4",
      maxGroupSize: "4-6명",
      days: [
        { day: 1, title: "울란바토르에서 푸른 호수까지", description: "수도를 출발하여 타이가 깊숙이 위치한 테무진의 즉위식 장소로 향합니다." },
        { day: 2, title: "헤를렌 강 도하 및 초원 캠프", description: "도전적인 4x4 지형을 통과하여 전통 기마 문화의 정수를 체험합니다." },
        { day: 3, title: "다달 솜: 탄생지 탐험", description: "대중 관광객이 닿지 않는 성스러운 탄생지에 도달하는 이번 여정의 하이라이트입니다." },
        { day: 4, title: "우글룩치 성벽과 고대 암각화", description: "빈데르 솜의 험준한 외곽을 항해하며 고대 유적을 탐사합니다." },
        { day: 5, title: "헤를렌 아랄: 위대한 집결지", description: "1206년 몽골 제국이 통합된 역사적인 집결지를 방문합니다." },
        { day: 6, title: "광활한 초원을 가로지르는 귀환", description: "몽골의 심장부를 가로질러 울란바토르로 귀환하며 여정을 마무리합니다." }
      ]
    }
  ]
};

export const sampleBlogs = [
  { slug: 'rugged-overland-guide', title: 'Navigating the Northern Taiga', category: 'Expertise', img: '/images/khentii-mountain-scenery.png' },
  { slug: '4x4-expedition-gear', title: 'Essential Gear for Remote Safari', category: 'Equipment', img: '/images/chinggis-khaan-expedition-signature-hero.avif' }
];

export const dayImages = {
  "rugged-mongolia-4x4": [
    ["/images/tsonjin-boldog-genghis-khan-statue.png", "/images/khar-zurkhnii-khukh-nuur-lake.png", "/images/khentii-mountain-scenery.png"],
    ["/images/mongolian-horsemen-festival.png", "/images/huhuuriin-taliin-boorchiin-monument.png", "/images/horse-culture-demonstration-mongolia.png"],
    ["/images/khentii-province-historical-landscape.avif", "/images/traditional-nomadic-hospitality-khentii.avif", "/images/nomad-family-hospitality.png"],
    ["/images/ancient-ruins-discovery-binder-soum.avif", "/images/ancient-historical-relics-mongolia.avif", "/images/sacred-landscape-khentii-province.jpg"],
    ["/images/kherlen-khuduu-aral-assembly-grounds.avif", "/images/authentic-mongolian-ger-experience.avif", "/images/historical-monument-khentii-steppe.avif"],
    ["/images/traditional-culture-immersion-khentii.avif", "/images/mongolian-steppe-farewell-sunset.avif", "/images/final-journey-across-the-steppe.avif"]
  ]
};
