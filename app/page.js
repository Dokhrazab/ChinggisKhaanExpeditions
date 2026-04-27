// /app/page.js
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { tourData, sampleBlogs } from '../data/tours';

// Dynamically import map to avoid SSR errors
const InteractiveMap = dynamic(() => import('../components/InteractiveMap'), { 
  ssr: false,
  loading: () => <div className="h-[500px] w-full bg-stone-100 animate-pulse rounded-[40px]" />
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/chinggis-khaan-expedition-signature-hero.avif" 
          alt="Mongolian Wilderness"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <span className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-sm mb-4 block">The Heartland of the Great Khan</span>
          <h1 className="text-5xl md:text-8xl font-serif font-extrabold text-white mb-6 leading-tight">
            Forging Your <br /> Own Legacy.
          </h1>
          <a href="#tours" className="inline-block bg-white text-[#1A1A1A] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-[#C5A059] hover:text-white transition-all shadow-xl">
            Discover the Routes
          </a>
        </div>
      </header>

      {/* --- TOUR SELECTION GRID (REQUIREMENT 1) --- */}
      <section id="tours" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Curated Journeys</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter">Choose Your Path</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tourData.map((tour) => (
            <Link key={tour.id} href={`/expeditions/${tour.id}`} className="group relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-gold/20">
              <Image 
                src={tour.image} 
                alt={tour.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.3em] mb-3 block">{tour.duration}</span>
                <h3 className="text-3xl font-serif font-bold mb-4">{tour.title}</h3>
                <p className="text-sm text-white/70 mb-8 line-clamp-2">{tour.tagline}</p>
                <div className="w-12 h-px bg-white/30 group-hover:w-full transition-all duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE MAP SECTION (REQUIREMENT 3) --- */}
      <section className="py-32 px-6 bg-white border-y border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Navigation</span>
            <h2 className="text-4xl font-serif font-bold mb-4">Interactive Expedition Map</h2>
            <p className="text-[#666] max-w-xl mx-auto text-sm leading-relaxed">
              Visualize the exact footprint of our journeys through the sacred landscapes of the East.
            </p>
          </div>
          <InteractiveMap />
        </div>
      </section>

      {/* --- BLOG INTEGRATION (REQUIREMENT 2) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Chronicles</span>
            <h2 className="text-4xl font-serif font-bold">Latest from the Steppe</h2>
          </div>
          <Link href="/stories" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-all">
            Read All Stories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sampleBlogs.map((blog) => (
            <Link key={blog.slug} href={`/stories/${blog.slug}`} className="group">
              <div className="relative h-64 rounded-[30px] overflow-hidden mb-6 shadow-lg">
                <Image 
                  src={blog.img} 
                  alt={blog.title} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
              </div>
              <span className="text-[10px] text-[#C5A059] font-black uppercase tracking-widest mb-2 block">{blog.category}</span>
              <h3 className="text-xl font-serif font-bold text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors">{blog.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1A1A1A] py-20 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <div className="w-16 h-16 bg-[#C5A059] rounded-full mx-auto mb-8 flex items-center justify-center font-serif font-bold text-2xl">C</div>
          <h4 className="font-serif text-xl mb-4">Chinggis Khaan Expeditions</h4>
          <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-12">Bringing Clarity to the Great Legend</p>
          <div className="flex justify-center gap-12 text-[10px] font-bold uppercase tracking-widest text-white/60">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
