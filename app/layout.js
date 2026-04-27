// /app/layout.js

import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata = {
  metadataBase: new URL('https://chinggiskhaanexpeditions.com'),
  title: {
    default: 'Chinggis Khaan Expeditions | Exclusive 6-Day Khentii & Gobi Tours',
    template: '%s | Chinggis Khaan Expeditions',
  },
  description: 'Experience the ultimate Mongolian adventure. Authentic 6-day tours to the birthplace of Chinggis Khaan, Dadal Soum, and the Gobi. Boutique, expert-led expeditions for 2026.',
  keywords: ['Chinggis Khaan Birthplace', 'Mongolia History Tour', 'Khentii Province Expedition', 'Dadal Soum Tour', 'Gobi Desert Adventure 2026'],
  authors: [{ name: 'Chinggis Khaan Expeditions' }],
  creator: 'Chinggis Khaan Expeditions',
  publisher: 'Chinggis Khaan Expeditions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Chinggis Khaan Expeditions | Exclusive 6-Day Khentii & Gobi Tours',
    description: 'Authentic 6-day expeditions to the heart of the Mongol Empire. Book your 2026 journey today.',
    url: 'https://chinggiskhaanexpeditions.com',
    siteName: 'Chinggis Khaan Expeditions',
    images: [
      {
        url: '/images/tsonjin-boldog-genghis-khan-statue.png',
        width: 1200,
        height: 630,
        alt: 'Genghis Khan Statue at Tsonjin Boldog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chinggis Khaan Expeditions',
    description: 'Boutique expert-led tours to the birthplace of the Great Khan.',
    images: ['/images/tsonjin-boldog-genghis-khan-statue.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo-official.svg',
    shortcut: '/logo-official.svg',
    apple: '/logo-official.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
