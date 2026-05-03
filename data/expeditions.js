// /data/expeditions.js

export const expeditions = {
  en: [
    {
      id: "genesis-route",
      title: "The Genesis Route",
      tagline: "7-Day Signature Expedition into the heart of Khentii.",
      duration: "7 Days",
      price: 1200,
      heroImage: "/images/chinggis-khaan-expedition-signature-hero.avif",
      difficulty: "Moderate",
      maxGroupSize: "6 Travelers",
      color: "#C5A059",
      waypoints: [
        { name: "Chinggis Khaan Intl Airport", coords: [47.6473, 106.8188], desc: "Expedition Arrival" },
        { name: "Gandantegchlen Monastery", coords: [47.9231, 106.8953], desc: "Megjid Janraisag Statue" },
        { name: "Sukhbaatar Square", coords: [47.9189, 106.9176], desc: "Parliament & Great Khan Statue" },
        { name: "National Museum", coords: [47.9198, 106.9168], desc: "Historical Overview" },
        { name: "State Department Store", coords: [47.9184, 106.9056], desc: "Heritage Shopping" },
        { name: "Tsonjinboldog", coords: [47.8079, 107.5303], desc: "The Golden Whip" },
        { name: "Blue Lake", coords: [48.0645, 108.1889], desc: "Enthronement Site" },
        { name: "Dadal Soum", coords: [49.0200, 111.6200], desc: "Birthplace" }
      ],
      days: [
        { 
          day: 1, 
          title: "Arrival & Ulaanbaatar City Tour", 
          description: "Airport pickup and hotel check-in. Explore the capital's spiritual and political heart, including Gandan Monastery, Sukhbaatar Square, the National Museum, and the iconic State Department Store." 
        },
        { day: 2, title: "UB to Blue Lake", description: "Journey east to the sacred site of Temuujin's enthronement via Tsonjinboldog." },
        { day: 3, title: "Chinggis City", description: "Immerse in the culture of the Taliin Tumen Aduu camp." },
        { day: 4, title: "Dadal Soum", description: "The definitive birthplace of Genghis Khan." },
        { day: 5, title: "Binder Soum", description: "Explore the ancient Uglugch Wall and petroglyphs." },
        { day: 6, title: "Kherlen Aral", description: "The assembly grounds of the 1206 unification." },
        { day: 7, title: "Return to UB", description: "Final journey across the open steppe back to the capital." }
      ]
    },
    {
      id: "golden-whip",
      title: "The Golden Whip",
      tagline: "The Legend of Tsonjinboldog & Aryabal.",
      duration: "1 Day",
      price: 180,
      heroImage: "/images/tsonjin-boldog-genghis-khan-statue.png",
      difficulty: "Easy",
      maxGroupSize: "10 Travelers",
      color: "#8B4513",
      waypoints: [
        { name: "Ulaanbaatar", coords: [47.9188, 106.9176], desc: "Departure" },
        { name: "Tsonjinboldog", coords: [47.8079, 107.5303], desc: "Statue Complex" },
        { name: "Aryabal Monastery", coords: [47.9548, 107.4265], desc: "Meditation Center" },
        { name: "Ulaanbaatar", coords: [47.9188, 106.9176], desc: "Return" }
      ],
      days: [
        { day: 1, title: "The Colossus & The Monastery", description: "Visit the world's tallest equestrian statue followed by the serene Aryabal Meditation Monastery in Terelj National Park." }
      ]
    }
  ],
  ko: [
    {
      id: "genesis-route",
      title: "제네시스 루트",
      tagline: "헨티 지방의 심장부로 떠나는 7일간의 시그니처 탐험.",
      duration: "7일",
      price: 1200,
      heroImage: "/images/chinggis-khaan-expedition-signature-hero.avif",
      difficulty: "보통",
      maxGroupSize: "6명",
      color: "#C5A059",
      days: [
        { day: 1, title: "도착 및 울란바토르 시내 투어", description: "공항 픽업 및 호텔 체크인. 간단 사원, 수흐바타르 광장, 국립 박물관, 국영 백화점을 포함한 수도의 중심지를 탐험합니다." },
        { day: 2, title: "울란바토르에서 푸른 호수까지", description: "천진 벌덕을 거쳐 테무진의 즉위식 장소로 향합니다." },
        { day: 3, title: "칭기즈 시티", description: "탈린 투멘 아두 캠프의 유목 문화를 체험합니다." },
        { day: 4, title: "다달 솜", description: "칭기즈칸의 역사적인 탄생지를 방문합니다." },
        { day: 5, title: "빈데르 솜", description: "고대 우글룩치 성벽과 암각화를 탐험합니다." },
        { day: 6, title: "헤를렌 아랄", description: "1206년 통일의 의회가 열린 집결지입니다." },
        { day: 7, title: "울란바토르 귀환", description: "광활한 초원을 지나 마지막 여정을 마무리합니다." }
      ]
    },
    {
        id: "golden-whip",
        title: "황금 채찍",
        tagline: "천진 벌덕과 아리야발 사원 당일 여행.",
        duration: "1일",
        price: 180,
        heroImage: "/images/tsonjin-boldog-genghis-khan-statue.png",
        difficulty: "쉬움",
        maxGroupSize: "10명",
        color: "#8B4513",
        days: [
          { day: 1, title: "거상과 아리야발 사원", description: "세계 최대의 기마상 관람 후 테렐지 국립공원의 아리야발 명상 사원을 방문합니다." }
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
