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
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-5 flex justify-between items-center text-[#1A1A1A]">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/logo-official.svg" alt="CKE Logo" fill className="p-1" priority />
          </div>
          <span className="font-serif font-black tracking-tighter text-xl hidden md:block uppercase">Chinggis Khaan Expeditions</span>
        </div>
        <div className="flex gap-10 items-center font-bold uppercase tracking-[0.2em] text-[10px]">
          <Link href="/stories" className="hover:text-[#C5A059] transition-colors hidden sm:block">Chronicles</Link>
          
          <div className="flex items-center bg-black/5 rounded-full p-1 border border-black/5">
            <button onClick={() => setLang('en')} className={`px-4 py-1.5 rounded-full text-[9px] font-black transition-all ${lang === 'en' ? 'bg-[#1A1A1A] text-white shadow-xl' : 'text-[#666]'}`}>EN</button>
            <button onClick={() => setLang('ko')} className={`px-4 py-1.5 rounded-full text-[9px] font-black transition-all ${lang === 'ko' ? 'bg-[#1A1A1A] text-white shadow-xl' : 'text-[#666]'}`}>KO</button>
          </div>

          <a href="#inquiry" className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full hover:bg-[#C5A059] transition-all shadow-2xl active:scale-95">
            {lang === 'en' ? 'Request Access' : '탐험 신청'}
          </a>
        </div>
      </nav>

      <header className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden text-white">
        <Image src="/images/chinggis-khaan-expedition-signature-hero.avif" alt="Rugged Mongolia 4x4 Expedition" fill priority className="object-cover scale-105" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto mb-10 bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 text-center">
            <p className="text-sm md:text-base text-white/90 leading-relaxed font-light tracking-wide italic">
              "We provide clarity where the pavement ends. Boutique 4x4 overlanding through the sacred Northern Taiga."
            </p>
          </motion.div>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-[#C5A059] font-black tracking-[0.6em] uppercase text-[11px] mb-8 block">Private Remote Wilderness Safaris</motion.span>
          <h1 className="text-7xl md:text-[10rem] font-serif font-extrabold mb-12 tracking-tighter leading-[0.85]">Rugged 4x4 <br /> Expeditions.</h1>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}>
            <a href="#tours" className="inline-block bg-[#C5A059] text-white px-16 py-6 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:bg-white hover:text-[#1A1A1A] transition-all shadow-[0_20px_50px_rgba(197,160,89,0.3)]">View Routes</a>
          </motion.div>
        </div>
      </header>

      <section id="tours" className="py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">The Northern Frontier</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight text-[#1A1A1A]">Engineered for Autonomy.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 max-w-4xl mx-auto">
          {currentExpeditions.map((tour) => (
            <motion.div key={tour.id} whileHover={{ y: -15 }} className="group relative h-[800px] rounded-[60px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] bg-stone-900">
              <Image src={tour.heroImage} alt={tour.title} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
              <div className="absolute bottom-20 left-12 right-12 md:left-24 md:right-24 text-white">
                <span className="text-[#C5A059] text-[11px] font-black uppercase tracking-[0.5em] mb-6 block">Bespoke Overland Journey</span>
                <h3 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight tracking-tighter">{tour.title}</h3>
                <p className="text-xl text-white/60 mb-12 max-w-xl font-light leading-relaxed italic">"{tour.tagline}"</p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href={`/expeditions/${tour.id}`} className="flex-1 py-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-[24px] text-center text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-[#1A1A1A] transition-all">Deep Analysis</Link>
                  <a href="#inquiry" className="flex-1 py-6 bg-[#C5A059] text-white rounded-[24px] text-center text-[11px] font-black uppercase tracking-[0.3em] hover:shadow-[0_15px_30px_rgba(197,160,89,0.4)] transition-all">Submit Application</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 bg-stone-50 border-y border-black/5 text-[#1A1A1A]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="text-[#C5A059] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">E-A-T Compliance</span>
            <h2 className="text-5xl font-serif font-bold mb-8 leading-tight tracking-tighter">Boutique Fixer & <br /> Historical Steward.</h2>
            <p className="text-xl text-[#666] leading-relaxed mb-10 font-light">We are not a volume agency. We are a private fixers group providing elite logistical support for historical researchers, overlanders, and high-net-worth explorers seeking authentic clarity in the Khentii Province.</p>
            <div className="h-px w-32 bg-[#C5A059]" />
          </div>
          <div className="relative h-[600px] rounded-[60px] overflow-hidden shadow-2xl">
            <Image src="/images/chinggis-khaan-historical-clarity-authority.jpg" alt="Historical Clarity" fill className="object-cover" />
          </div>
        </div>
      </section>

      <section className="py-40 px-6 max-w-7xl mx-auto text-[#1A1A1A]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="text-[#C5A059] font-black tracking-[0.4em] uppercase text-[10px] mb-6 block">The Chronicles</span>
            <h2 className="text-6xl font-serif font-bold tracking-tight">Technical Insights.</h2>
          </div>
          <Link href="/stories" className="text-[11px] font-black uppercase tracking-[0.3em] border-b-2 border-[#C5A059] pb-3 hover:text-[#C5A059] transition-all">View Archive</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sampleBlogs.map((blog) => (
            <Link key={blog.slug} href={`/stories/${blog.slug}`} className="group relative h-[500px] rounded-[50px] overflow-hidden shadow-2xl">
              <Image src={blog.img} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{blog.category}</span>
                <h3 className="text-4xl font-serif font-bold text-white leading-tight tracking-tight">{blog.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
