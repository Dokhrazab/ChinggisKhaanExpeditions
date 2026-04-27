// /app/layout.js

import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  title: 'Chinggis Khaan Expeditions | Birthplace of the Great Khan',
  description: 'Premium historical tours to the sacred birthplace of Genghis Khan in Khentii, Mongolia.',
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Chinggis Khaan Expeditions',
    description: 'Explore the sacred lands of Genghis Khan with local experts.',
    url: 'https://chinggiskhaanexpeditions.com',
    siteName: 'Chinggis Khaan Expeditions',
    images: [
      {
        url: '/images/chinggis-khaan-expedition-signature-hero.avif',
        width: 1200,
        height: 630,
        alt: 'Chinggis Khaan Expeditions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
