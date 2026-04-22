// /data/itinerary.js

export const expeditions = {
  en: [
    {
      id: "genesis-route",
      title: "The Genesis Route: Birthplace of Genghis Khan",
      tagline: "6-Day Expedition into the heart of Khentii Province.",
      duration: "6 Days / 5 Nights",
      price: 1000,
      heroImage: "/images/khentii-expedition-camp-view.png",
      difficulty: "Moderate",
      maxGroupSize: "6 Travelers",
      days: [
        { day: 1, title: "Ulaanbaatar to Blue Lake", description: "Journey east to the sacred site of Temuujin's enthronement." },
        { day: 2, title: "Chinggis City", description: "Immerse in the culture of the Taliin Tumen Aduu camp." },
        { day: 3, title: "Dadal Soum", description: "The definitive birthplace of Genghis Khan." },
        { day: 4, title: "Binder Soum", description: "Explore the ancient Uglugch Wall and petroglyphs." },
        { day: 5, title: "Kherlen Aral", description: "The assembly grounds of the 1206 unification." },
        { day: 6, title: "Return to UB", description: "Final journey across the open steppe." }
      ]
    },
    {
      id: "golden-whip",
      title: "The Golden Whip: Tsonjin Boldog Day Trip",
      tagline: "Clarity on the legend where the rise of the Great Khan began.",
      duration: "1 Day",
      price: 150,
      heroImage: "/images/tsonjin-boldog-genghis-khan-statue.png",
      difficulty: "Easy",
      maxGroupSize: "10 Travelers",
      days: [
        { day: 1, title: "The Colossus & Legend", description: "A 54km drive to the spot where Temuujin found the golden whip. Experience the world's tallest equestrian statue." }
      ]
    },
    {
      id: "imperial-vault",
      title: "The Imperial Vault: National Museum Experience",
      tagline: "A deep dive into 2,000 years of Mongolian statehood.",
      duration: "1 Day",
      price: 80,
      heroImage: "/images/undurkhaan-mining-museum-history.png",
      difficulty: "Easy",
      maxGroupSize: "12 Travelers",
      days: [
        { day: 1, title: "9 Floors of History", description: "Guided tour through the largest history museum in Asia. View 13th-century artifacts and original armor." }
      ]
    }
  ],
  ko: [
    {
      id: "genesis-route",
      title: "제네시스 루트: 칭기즈칸의 탄생지",
      tagline: "몽골 헨티 지방의 심장부로 떠나는 6일간의 탐험.",
      duration: "6일 / 5박",
      price: 1000,
      heroImage: "/images/khentii-expedition-camp-view.png",
      difficulty: "보통",
      maxGroupSize: "6명",
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
      title: "황금 채찍: 천진 벌덕 당일 여행",
      tagline: "위대한 칸의 비상이 시작된 전설의 현장을 확인하세요.",
      duration: "1일",
      price: 150,
      heroImage: "/images/tsonjin-boldog-genghis-khan-statue.png",
      difficulty: "쉬움",
      maxGroupSize: "10명",
      days: [
        { day: 1, title: "거상과 전설", description: "테무진이 황금 채찍을 발견한 54km 지점으로 이동합니다. 세계 최대의 기마상과 지하 박물관을 관람합니다." }
      ]
    },
    {
      id: "imperial-vault",
      title: "제국의 금고: 국립 박물관 투어",
      tagline: "몽골 국가 체제의 2,000년 역사를 깊이 있게 탐구합니다.",
      duration: "1일",
      price: 80,
      heroImage: "/images/undurkhaan-mining-museum-history.png",
      difficulty: "쉬움",
      maxGroupSize: "12명",
      days: [
        { day: 1, title: "역사의 9개 층", description: "아시아 최대 규모의 역사 박물관 가이드 투어입니다. 13세기 유물과 원형 갑옷을 관람합니다." }
      ]
    }
  ]
};

export const scheduledGroups = [
  { id: 1, dates: "May 01 - May 06, 2026", status: "Available", spots: 6 },
  { id: 2, dates: "May 08 - May 13, 2026", status: "Available", spots: 6 },
  { id: 3, dates: "May 15 - May 20, 2026", status: "Available", spots: 6 },
  { id: 4, dates: "May 22 - May 27, 2026", status: "Available", spots: 6 },
  { id: 5, dates: "May 29 - June 03, 2026", status: "Available", spots: 6 },
  { id: 6, dates: "June 05 - June 10, 2026", status: "Available", spots: 6 }
];

export const dayImages = {
  "genesis-route": [
    ["/images/tsonjin-boldog-genghis-khan-statue.png", "/images/khar-zurkhnii-khukh-nuur-lake.png", "/images/khentii-mountain-scenery.png"],
    ["/images/mongolian-horsemen-festival.png", "/images/huhuuriin-taliin-boorchiin-monument.png", "/images/horse-culture-demonstration-mongolia.png"],
    ["/images/nomadic-life-mongolia-steppe.png", "/images/traditional-mongolian-mare-milk.png", "/images/nomad-family-hospitality.png"],
    ["/images/mongolian-ger-camp-khentii.png", "/images/sheep-herding-mongolia.png", "/images/undurkhaan-mining-museum-history.png"],
    ["/images/twin-ger-accommodation-mongolia.png", "/images/mongolian-landscape-kherlen-river.png", "/images/kherlen-khuduu-aral-sacred-site.png"],
    ["/images/traditional-mongolian-restaurant-view.png", "/images/authentic-nomad-family-experience.png", "/images/mongolian-steppe-landscape-view.png"]
  ],
  "golden-whip": [
    ["/images/tsonjin-boldog-genghis-khan-statue.png", "/images/khentii-mountain-scenery.png", "/images/horse-culture-demonstration-mongolia.png"]
  ],
  "imperial-vault": [
    ["/images/undurkhaan-mining-museum-history.png", "/images/huhuuriin-taliin-boorchiin-monument.png", "/images/mongolian-ger-camp-khentii.png"]
  ]
};

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
