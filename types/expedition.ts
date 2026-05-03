// /types/expedition.ts

export interface Waypoint {
  name: string;
  coords: [number, number];
  desc: string;
}

export interface Day {
  day: number;
  title: string;
  description: string;
}

export interface Expedition {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  price: number;
  heroImage: string;
  difficulty: "Easy" | "Moderate" | "Difficult";
  maxGroupSize: string;
  color: string;
  waypoints: Waypoint[];
  days: Day[];
}

export interface Story {
  slug: string;
  title: string;
  category: string;
  img: string;
  excerpt?: string;
  content?: string;
  date: string;
}

export type SupportedLanguage = 'en' | 'ko';
