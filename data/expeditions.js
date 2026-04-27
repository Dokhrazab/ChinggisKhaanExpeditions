// /data/expeditions.js

export const expeditions = {
  en: [
    {
      id: "genesis-route",
      title: "The Genesis Route",
      tagline: "6-Day Expedition into the heart of Khentii.",
      duration: "6 Days",
      price: 1000,
      heroImage: "/images/chinggis-khaan-expedition-signature-hero.avif",
      difficulty: "Moderate",
      maxGroupSize: "6 Travelers",
      color: "#C5A059",
      waypoints: [
        { name: "Ulaanbaatar", coords: [47.9188, 106.9176], desc: "Expedition Start" },
        { name: "Tsonjinboldog", coords: [47.8079, 107.5303], desc: "The Golden Whip" },
        { name: "Blue Lake", coords: [48.0645, 108.1889], desc: "Enthronement Site" },
        { name: "Chinggis City", coords: [47.3197, 110.6558], desc: "Regional Center" },
        { name: "Taliin Tumen Aduu", coords: [47.3, 111.0], desc: "10,000 Horses" },
        { name: "Dadal Soum", coords: [49.0200, 111.6200], desc: "Birthplace" },
        { name: "Binder Soum", coords: [48.5800, 110.6300], desc: "Ancient Walls" },
        { name: "Kherlen Khuduu Aral", coords: [47.1667, 109.1167], desc: "Assembly Ground" }
      ],
      days: [
        { day: 1, title: "UB to Blue Lake", description: "Journey east to the sacred site of Temuujin's enthronement." },
        { day: 2, title: "Chinggis City", description: "Immerse in the culture of the Taliin Tumen Aduu camp." },
        { day: 3, title: "Dadal Soum", description: "The definitive birthplace of Genghis Khan." },
        { day: 4, title: "Binder Soum", description: "Explore the ancient Uglugch Wall and petroglyphs." },
        { day: 5, title: "Kherlen Aral", description: "The assembly grounds of the 1206 unification." },
        { day: 6, title: "Return to UB", description: "Final journey across the open steppe." }
      ]
    },
    {
      id: "golden-whip",
      title: "The Golden Whip",
      tagline: "Day trip to the Colossus.",
      duration: "1 Day",
      price: 150,
      heroImage: "/images/tsonjin-boldog-genghis-khan-statue.png",
      difficulty: "Easy",
      maxGroupSize: "10 Travelers",
      color: "#8B4513",
      waypoints: [
        { name: "Ulaanbaatar", coords: [47.9188, 106.9176], desc: "Start/End" },
        { name: "Tsonjinboldog", coords: [47.8079, 107.5303], desc: "Statue Complex" }
      ],
      days: [
        { day: 1, title: "The Colossus & Legend", description: "Experience the world's tallest equestrian statue." }
      ]
    },
    {
      id: "imperial-vault",
      title: "The Imperial Vault",
      tagline: "Chinggis Khaan National Museum.",
      duration: "1 Day",
      price: 80,
      heroImage: "/images/undurkhaan-mining-museum-history.png",
      difficulty: "Easy",
      maxGroupSize: "12 Travelers",
      color: "#2D4F1E",
      waypoints: [
        { name: "UB Center", coords: [47.9188, 106.9176], desc: "City Heart" },
        { name: "National Museum", coords: [47.9230, 106.9180], desc: "Imperial History" }
      ],
      days: [
        { day: 1, title: "9 Floors of History", description: "Guided tour through the largest history museum in Asia." }
      ]
    }
  ],
  ko: [
    {
      id: "genesis-route",
      title: "제네시스 루트",
      tagline: "몽골 헨티 지방의 심장부로 떠나는 6일간의 탐험.",
      duration: "6일",
      price: 1000,
      heroImage: "/images/chinggis-khaan-expedition-signature-hero.avif",
      difficulty: "보통",
      maxGroupSize: "6명",
      color: "#C5A059",
      days: [
        { day: 1, title: "울란바토르에서 푸른 호수까지", description: "테무진의 즉위식이 열린 신성한 장소로 향합니다." },
        { day: 2, title: "칭기즈 시티", description: "탈린 투멘 아두 캠프의 유목 문화를 체험합니다." },
        { day: 3, title: "다달 솜", description: "칭기즈칸의 역사적인 탄생지를 방문합니다." },
        { day: 4, title: "빈데르 솜", description: "고대 우글룩치 성벽과 암각화를 탐험합니다." },
        { day: 5, title: "헤를렌 아랄", description: "1206년 통일의 의회가 열린 집결지입니다." },
        { day: 6, title: "울란바토르 귀환", description: "광활한 초원을 지나 마지막 여정을 마무리합니다." }
      ]
    },
    {
        id: "golden-whip",
        title: "황금 채찍",
        tagline: "천진 벌덕 당일 여행.",
        duration: "1일",
        price: 150,
        heroImage: "/images/tsonjin-boldog-genghis-khan-statue.png",
        difficulty: "쉬움",
        maxGroupSize: "10명",
        color: "#8B4513",
        days: [
          { day: 1, title: "거상과 전설", description: "테무진이 황금 채찍을 발견한 전설의 현장을 확인하세요." }
        ]
      },
      {
        id: "imperial-vault",
        title: "제국의 금고",
        tagline: "국립 박물관 투어.",
        duration: "1일",
        price: 80,
        heroImage: "/images/undurkhaan-mining-museum-history.png",
        difficulty: "쉬움",
        maxGroupSize: "12명",
        color: "#2D4F1E",
        days: [
          { day: 1, title: "역사의 9개 층", description: "아시아 최대 규모의 역사 박물관 가이드 투어입니다." }
        ]
      }
  ]
};

export const sampleBlogs = [
  { slug: 'dadal-vs-ulaanbaatar', title: 'The Search for the Real Mongolia', category: 'History', img: '/images/khentii-mountain-scenery.png' },
  { slug: 'the-colossus-legend', title: 'Legend of the Golden Whip', category: 'Culture', img: '/images/tsonjin-boldog-genghis-khan-statue.png' },
  { slug: 'decoding-the-imperial-vault', title: 'Inside the 9 Floors', category: 'Archaeology', img: '/images/undurkhaan-mining-museum-history.png' }
];

export const pricing_meta = {
  en: {
    private: "Boutique Private",
    group: "Fixed Departure",
    pp: "per person",
    private_desc: "Custom dates & dedicated 4x4.",
    group_desc: "Shared small group experience."
  },
  ko: {
    private: "프리미엄 프라이빗",
    group: "정기 출발",
    pp: "1인당",
    private_desc: "일정 맞춤 조율 및 전용 차량.",
    group_desc: "소규모 그룹 공유 체험."
  }
};
