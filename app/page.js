// /app/page.js
'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { tourData, sampleBlogs } from '../data/tours';
import { motion } from 'framer-motion';

const InteractiveMap = dynamic(() => import('../components/InteractiveMap'), { 
  ssr: false,
  loading: () => <div className="h-[600px] w-full bg-stone-100 animate-pulse rounded-[40px]" />
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <header className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/chinggis-khaan-expedition-signature-hero.avif" 
          alt="Mongolian Wilderness"
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C5A059] font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
          >
            The Heartland of the Great Khan
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-serif font-extrabold text-white mb-8 leading-tight tracking-tighter"
          >
            Forging Your <br /> Own Legacy.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#tours" className="inline-block bg-[#C5A059] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#1A1A1A] transition-all shadow-2xl">
              Explore the Expeditions
            </a>
          </motion.div>
        </div>
      </header>

      {/* --- TOUR CARDS (Bento Style) --- */}
      <section id="tours" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Curated Journeys</span>
          <h2 className="text-5xl font-serif font-bold tracking-tight">The Imperial Collections</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tourData.map((tour, idx) => (
            <motion.div 
              key={tour.id}
              whileHover={{ y: -10 }}
              className="group relative h-[700px] rounded-[48px] overflow-hidden shadow-2xl bg-stone-900"
            >
              <Image 
                src={tour.image} 
                alt={tour.title} 
                fill 
                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
              
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.4em] mb-4 block">{tour.duration} Journey</span>
                <h3 className="text-4xl font-serif font-bold mb-4 leading-tight tracking-tighter">{tour.title}</h3>
                <p className="text-sm text-white/60 mb-8 line-clamp-3 font-medium leading-relaxed">{tour.tagline}</p>
                
                <div className="flex flex-col gap-4">
                  <Link 
                    href={`/expeditions/${tour.id}`}
                    className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-center text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all"
                  >
                    View Details
                  </Link>
                  <Link 
                    href="/#inquiry"
                    className="w-full py-4 bg-[#C5A059] text-white rounded-2xl text-center text-[10px] font-black uppercase tracking-widest hover:shadow-gold/50 transition-all shadow-xl"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- INTERACTIVE MAP --- */}
      <section className="py-32 px-6 bg-white border-y border-black/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Cartography</span>
            <h2 className="text-5xl font-serif font-bold tracking-tight">Interactive Heartland Map</h2>
          </div>
          <InteractiveMap />
        </div>
      </section>

      {/* --- BENTO BLOG (REQUIREMENT 4) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">The Chronicles</span>
            <h2 className="text-5xl font-serif font-bold tracking-tight text-[#1A1A1A]">Stories from the Steppe</h2>
          </div>
          <Link href="/stories" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-[#C5A059] pb-2 hover:text-[#C5A059] transition-all">
            Browse Archive
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          {/* Large Main Post */}
          <Link href={`/stories/${sampleBlogs[0].slug}`} className="md:col-span-2 md:row-span-2 group relative rounded-[40px] overflow-hidden shadow-2xl">
            <Image src={sampleBlogs[0].img} alt="Blog" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-widest mb-3 block">{sampleBlogs[0].category}</span>
              <h3 className="text-4xl font-serif font-bold text-white leading-tight">{sampleBlogs[0].title}</h3>
            </div>
          </Link>

          {/* Secondary Posts */}
          {sampleBlogs.slice(1).map((blog, i) => (
            <Link key={blog.slug} href={`/stories/${blog.slug}`} className="md:col-span-2 group relative rounded-[40px] overflow-hidden shadow-xl">
              <Image src={blog.img} alt="Blog" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8">
                <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-widest mb-2 block">{blog.category}</span>
                <h3 className="text-2xl font-serif font-bold text-white leading-snug">{blog.title}</h3>
              </div>
            </Link>
          ))}
          
          {/* Magazine Decorative Tile */}
          <div className="hidden md:flex md:col-span-2 bg-[#1A1A1A] rounded-[40px] p-10 flex-col justify-center items-center text-center">
             <div className="w-16 h-px bg-[#C5A059] mb-6" />
             <p className="text-white/60 font-serif italic text-lg leading-relaxed mb-6">"Authenticity is the soul of every mile we travel through the sacred East."</p>
             <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.4em]">CKE Editorial</span>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1A1A1A] py-24 px-6 text-white text-center border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="w-12 h-12 bg-[#C5A059] rounded-full mx-auto mb-8 flex items-center justify-center font-serif font-bold text-lg">C</div>
          <h4 className="font-serif text-2xl mb-4 tracking-tighter">Chinggis Khaan Expeditions</h4>
          <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mb-12">Bringing Clarity to the Great Legend</p>
          <div className="flex justify-center gap-12 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
            <a href="#" className="hover:text-[#C5A059] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Vimeo</a>
            <a href="#" className="hover:text-[#C5A059] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
