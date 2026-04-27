// /components/HomeExplorer.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeExplorer({ expeditions, sampleBlogs }) {
  const [lang, setLang] = useState('en');
  const currentExpeditions = expeditions[lang];

  return (
    <>
      {/* --- STICKY NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-4 flex justify-between items-center text-[#1A1A1A]">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/logo-official.svg" alt="CKE Logo" fill className="p-1" priority />
          </div>
          <span className="font-serif font-bold tracking-tight text-lg hidden md:block">Chinggis Khaan Expeditions</span>
        </div>
        <div className="flex gap-8 items-center font-bold uppercase tracking-widest text-[10px]">
          <Link href="/stories" className="hover:text-[#C5A059] transition-colors hidden sm:block">Stories</Link>
          
          <div className="flex items-center bg-black/5 rounded-full p-1 border border-black/5">
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-[9px] font-black transition-all ${lang === 'en' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#666]'}`}>EN</button>
            <button onClick={() => setLang('ko')} className={`px-3 py-1 rounded-full text-[9px] font-black transition-all ${lang === 'ko' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#666]'}`}>KO</button>
          </div>

          <a href="#inquiry" className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full hover:bg-[#C5A059] transition-all shadow-lg active:scale-95">
            {lang === 'en' ? 'Inquire' : '문의하기'}
          </a>
        </div>
      </nav>

      {/* --- HERO --- */}
      <header className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden text-white">
        <Image src="/images/chinggis-khaan-expedition-signature-hero.avif" alt="Mongolia" fill priority className="object-cover scale-105" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-6">
          <div className="max-w-2xl mx-auto mb-8 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 text-left md:text-center">
            <p className="text-xs md:text-sm text-white/90 leading-relaxed font-medium">
              <strong>Chinggis Khaan Expeditions</strong> is a boutique tour operator specializing in authentic, expert-led 6-day historical journeys to the Khentii Province.
            </p>
          </div>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-[#C5A059] font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Heartland of the Khan</motion.span>
          <h1 className="text-6xl md:text-9xl font-serif font-extrabold mb-8 tracking-tighter">Forging Your <br /> Own Legacy.</h1>
          <a href="#tours" className="inline-block bg-[#C5A059] text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#1A1A1A] transition-all shadow-2xl">Explore Routes</a>
        </div>
      </header>

      {/* --- TOUR CARDS (Refactored to be cleaner) --- */}
      <section id="tours" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">Curated Journeys</span>
          <h2 className="text-5xl font-serif font-bold tracking-tight text-[#1A1A1A]">Which Mongolian tour is right for you?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentExpeditions.map((tour) => (
            <motion.div key={tour.id} whileHover={{ y: -10 }} className="group relative h-[700px] rounded-[48px] overflow-hidden shadow-2xl bg-stone-900">
              <Image src={tour.heroImage} alt={tour.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.4em] mb-4 block">{tour.duration} Journey</span>
                <h3 className="text-4xl font-serif font-bold mb-4 leading-tight tracking-tighter">{tour.title}</h3>
                <div className="flex flex-col gap-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Link href={`/expeditions/${tour.id}`} className="w-full py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl text-center text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#1A1A1A] transition-all">View Details</Link>
                  <a href="#inquiry" className="w-full py-4 bg-[#C5A059] text-white rounded-2xl text-center text-[10px] font-black uppercase tracking-widest hover:shadow-gold/50 transition-all shadow-xl">Book Now</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- AUTHORITY --- */}
      <section className="py-24 px-6 bg-white border-b border-black/5 text-[#1A1A1A]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">How do we bring clarity to the legend?</h2>
            <p className="text-lg text-[#666] leading-relaxed mb-8">We are not just a tour operator; we are historical stewards. Every expedition we run is designed to strip away the myths and provide authentic clarity.</p>
          </div>
          <div className="relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image src="/images/chinggis-khaan-historical-clarity-authority.jpg" alt="History" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* --- BENTO BLOG --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-[#1A1A1A]">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block">The Chronicles</span>
            <h2 className="text-5xl font-serif font-bold tracking-tight">Latest from the Steppe</h2>
          </div>
          <Link href="/stories" className="text-[10px] font-black uppercase tracking-widest border-b-2 border-[#C5A059] pb-2 hover:text-[#C5A059] transition-all">Archive</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          <Link href={`/stories/${sampleBlogs[0].slug}`} className="md:col-span-2 md:row-span-2 group relative rounded-[40px] overflow-hidden shadow-2xl">
            <Image src={sampleBlogs[0].img} alt="Blog" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 right-10">
              <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-widest mb-3 block">{sampleBlogs[0].category}</span>
              <h3 className="text-4xl font-serif font-bold text-white leading-tight">{sampleBlogs[0].title}</h3>
            </div>
          </Link>
          {sampleBlogs.slice(1).map((blog) => (
            <Link key={blog.slug} href={`/stories/${blog.slug}`} className="md:col-span-2 group relative rounded-[40px] overflow-hidden shadow-xl">
              <Image src={blog.img} alt="Blog" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-widest mb-2 block">{blog.category}</span>
                <h3 className="text-2xl font-serif font-bold leading-snug">{blog.title}</h3>
              </div>
            </Link>
          ))}
          <div className="hidden md:flex md:col-span-2 bg-[#1A1A1A] rounded-[40px] p-10 flex-col justify-center items-center text-center text-white">
             <p className="font-serif italic text-lg leading-relaxed mb-6">"Authenticity is the soul of every mile we travel through the sacred East."</p>
             <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-[0.4em]">CKE Editorial</span>
          </div>
        </div>
      </section>
    </>
  );
}
