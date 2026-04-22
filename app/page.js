// /app/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { khentiiExpedition } from '../data/itinerary';

export default function ExpeditionPage() {
  const [lang, setLang] = useState('en');
  const [tourType, setTourType] = useState('private');
  const [selectedDate, setSelectedDate] = useState('');
  
  const content = khentiiExpedition[lang];

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, tourType, selectedDate, message }),
      });
      if (response.ok) {
        setStatus('success');
        setFullName(''); setEmail(''); setMessage(''); setSelectedDate('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* --- STICKY NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/favicon.svg" alt="CKE Logo" fill className="p-1.5" />
          </div>
          <span className="font-serif font-bold tracking-tight text-lg hidden md:block">Chinggis Khaan Expeditions</span>
        </div>
        <div className="flex gap-8 items-center text-[#1A1A1A]">
          <Link href="/stories" className="text-xs font-bold hover:text-[#C5A059] transition-colors uppercase tracking-widest hidden sm:block">Stories</Link>
          <a href="#itinerary" className="text-xs font-bold hover:text-[#C5A059] transition-colors uppercase tracking-widest hidden md:block">Journey</a>
          
          {/* Language Switcher */}
          <div className="flex items-center bg-black/5 rounded-full p-1 border border-black/5">
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${lang === 'en' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#666]'}`}>EN</button>
            <button onClick={() => setLang('ko')} className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${lang === 'ko' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#666]'}`}>KO</button>
          </div>

          <a href="#inquiry" className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#C5A059] transition-all shadow-lg active:scale-95 uppercase tracking-wider">
            {lang === 'en' ? 'Inquire' : '문의하기'}
          </a>
        </div>
      </nav>

      {/* --- IMMERSIVE HERO --- */}
      <header className="relative w-full h-[90vh] flex items-end overflow-hidden">
        <Image src={khentiiExpedition.heroImage} alt="Khentii Mountains" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20">
          <div className="max-w-3xl">
            <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase mb-4 block">Signature Expedition</span>
            <h1 className="text-5xl md:text-8xl font-serif font-extrabold text-white mb-8 leading-[1.1] drop-shadow-2xl">
              {content.title}
            </h1>
            
            <div className="flex flex-wrap gap-12 border-t border-white/20 pt-8 mt-4">
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">{lang === 'en' ? 'Duration' : '기간'}</span>
                <span className="text-white font-medium text-lg">{content.duration}</span>
              </div>
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">{lang === 'en' ? 'Difficulty' : '난이도'}</span>
                <span className="text-white font-medium text-lg">{content.difficulty}</span>
              </div>
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">{lang === 'en' ? 'Group Size' : '그룹 인원'}</span>
                <span className="text-white font-medium text-lg">{content.maxGroupSize}</span>
              </div>
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">From</span>
                <span className="text-white font-medium text-lg">${content.pricing.group.price} <span className="text-xs text-white/60">pp</span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- WHY US --- */}
      <section className="py-24 px-6 bg-white border-b border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              {lang === 'en' ? 'Authentic Connection to the' : '광활한 초원과의'} <span className="text-[#C5A059]">{lang === 'en' ? 'Great Steppe.' : '진정한 교감.'}</span>
            </h2>
            <p className="text-lg text-[#666] leading-relaxed mb-8">
              {lang === 'en' 
                ? 'Unlike mass-market tours, we specialize exclusively in the Khentii region—the sacred birthplace of the Mongol Empire. Our expeditions are built on local heritage and private access.'
                : '대규모 패키지 투어와 달리, 저희는 몽골 제국의 신성한 탄생지인 헨티 지역만을 전문으로 합니다. 현지 유산과 독점적인 접근 권한을 바탕으로 탐험을 설계합니다.'}
            </p>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/images/300-horses-mongolia-steppe.png" alt="Horses" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* --- BLOG PREVIEW SECTION --- */}
      <section className="py-24 px-6 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Khentii Chronicles</span>
              <h2 className="text-4xl font-serif font-bold">{lang === 'en' ? 'Latest Stories' : '최신 이야기'}</h2>
            </div>
            <Link href="/stories" className="text-[#1A1A1A] font-bold text-xs uppercase tracking-widest border-b-2 border-[#C5A059] pb-1 hover:text-[#C5A059] transition-all">
              {lang === 'en' ? 'View All' : '전체 보기'}
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { slug: 'dadal-vs-ulaanbaatar', title: 'Dadal vs. Ulaanbaatar', date: 'April 2026', img: '/images/khentii-mountain-scenery.png' },
              { slug: 'packing-for-the-steppe', title: 'Steppe Packing Guide', date: 'April 2026', img: '/images/mongolian-ger-camp-khentii.png' },
              { slug: 'sacred-rivers-guide', title: 'The 3 Sacred Rivers', date: 'April 2026', img: '/images/mongolian-landscape-kherlen-river.png' }
            ].map((post, i) => (
              <Link key={i} href={`/stories/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-black/5">
                <div className="relative h-48 overflow-hidden">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-[10px] text-[#C5A059] font-black uppercase tracking-widest mb-2 block">{post.date}</span>
                  <h3 className="text-xl font-serif font-bold group-hover:text-[#C5A059] transition-colors">{post.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCEDURE 3: THE DEFINITIVE EXPEDITION MAP --- */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Geographical Authority</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">Mapping the Genesis Route</h2>
          </div>

          <div className="relative bg-[#F8F5F0] rounded-[40px] p-8 md:p-20 shadow-inner border border-black/5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 relative">
                <svg viewBox="0 0 800 400" className="w-full h-auto drop-shadow-2xl">
                  <path 
                    d="M100 300 Q 200 280 250 200 T 400 150 T 550 100 T 700 80" 
                    fill="none" 
                    stroke="#C5A059" 
                    strokeWidth="4" 
                    strokeDasharray="8 8"
                  />
                  {[
                    { x: 100, y: 300, label: "Ulaanbaatar", desc: "Start" },
                    { x: 250, y: 200, label: "Tsonjin Boldog", desc: "Statue" },
                    { x: 400, y: 150, label: "Blue Lake", desc: "Sacred Site" },
                    { x: 550, y: 100, label: "Kherlen River", desc: "Assembly" },
                    { x: 700, y: 80, label: "Dadal Soum", desc: "Birthplace" }
                  ].map((pt, i) => (
                    <g key={i}>
                      <circle cx={pt.x} cy={pt.y} r="6" fill="#1A1A1A" stroke="#C5A059" strokeWidth="2" />
                      <text x={pt.x} y={pt.y - 15} textAnchor="middle" className="text-[12px] font-bold fill-[#1A1A1A] font-serif">{pt.label}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-black/5">
                <h4 className="font-serif font-bold text-2xl mb-6">Route Authority</h4>
                <div className="space-y-6">
                  {[
                    { n: "01", t: "The Heartland", d: "Exclusively within the sacred 'Ikh Khorig' protection zone." },
                    { n: "02", t: "Secret History", d: "Every stop is verified by ancient historical texts." },
                    { n: "03", t: "Off-Grid Access", d: "Remote sites only accessible by our expert 4x4 drivers." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-[#C5A059] font-black text-xl">{item.n}</div>
                      <p className="text-sm text-[#666]"><strong>{item.t}:</strong> {item.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING & DEPARTURES --- */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12">{lang === 'en' ? 'Choose Your Journey' : '여정을 선택하세요'}</h2>
          
          <div className="inline-flex p-1.5 bg-[#F8F5F0] rounded-full mb-16 shadow-inner border border-black/5">
            <button onClick={() => setTourType('private')} className={`px-8 py-3 rounded-full text-xs font-black transition-all ${tourType === 'private' ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-[#666]'}`}>
              {lang === 'en' ? 'Private' : '프라이빗'}
            </button>
            <button onClick={() => setTourType('group')} className={`px-8 py-3 rounded-full text-xs font-black transition-all ${tourType === 'group' ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-[#666]'}`}>
              {lang === 'en' ? 'Group' : '그룹 투어'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-[#F8F5F0] p-10 rounded-3xl border border-[#E5E5E5]">
              <h3 className="text-2xl font-serif font-bold mb-4 uppercase tracking-tight">
                {tourType === 'private' ? (lang === 'en' ? 'Boutique Private' : '프리미엄 프라이빗') : (lang === 'en' ? 'Fixed Departure' : '정기 출발')}
              </h3>
              <p className="text-[#666] leading-relaxed mb-8">
                {tourType === 'private' ? content.pricing.private.description : content.pricing.group.description}
              </p>
              <div className="text-4xl font-serif font-bold text-[#C5A059]">
                ${tourType === 'private' ? content.pricing.private.price : content.pricing.group.price}
                <span className="text-sm font-sans font-normal text-[#666] ml-2">{lang === 'en' ? 'per person' : '1인당'}</span>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border-2 border-[#1A1A1A] shadow-xl">
              <h3 className="text-xl font-serif font-bold mb-6">{tourType === 'private' ? (lang === 'en' ? 'Flexible Dates' : '일정 조율') : (lang === 'en' ? 'Select Date' : '날짜 선택')}</h3>
              {tourType === 'private' ? (
                <p className="text-sm text-[#666] leading-relaxed">
                  {lang === 'en' ? 'Tell us your preferred travel month and we will tailor the exact dates to your schedule.' : '선호하시는 여행 월을 알려주시면 귀하의 일정에 맞춰 정확한 날짜를 조정해 드립니다.'}
                </p>
              ) : (
                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                  {khentiiExpedition.scheduledGroups.map(g => (
                    <div key={g.id} onClick={() => g.status !== 'Closed' && setSelectedDate(g.dates)} className={`p-4 rounded-xl border transition-all cursor-pointer ${selectedDate === g.dates ? 'border-[#C5A059] bg-[#C5A059]/5' : 'border-[#E5E5E5]'} ${g.status === 'Closed' ? 'opacity-50' : ''}`}>
                      <div className="flex justify-between items-center font-bold text-sm">
                        <span>{g.dates}</span>
                        <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-green-100 text-green-700">{g.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- ITINERARY --- */}
      <section id="itinerary" className="py-24 px-6 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Itinerary</span>
            <h2 className="text-5xl font-serif font-bold">{content.title}</h2>
          </div>

          <div className="space-y-32">
            {content.days.map((day, idx) => (
              <div key={day.day} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                <div className="md:w-1/2">
                  <span className="text-6xl font-serif font-black text-[#C5A059]/20">0{day.day}</span>
                  <h3 className="text-3xl font-serif font-bold mb-4">{day.title}</h3>
                  <p className="text-lg text-[#666] leading-relaxed mb-8">{day.description}</p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
                  <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-lg">
                    <Image src={khentiiExpedition.dayImages[idx][0]} alt={day.title} fill className="object-cover" />
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <Image src={khentiiExpedition.dayImages[idx][1]} alt={day.title} fill className="object-cover" />
                  </div>
                  <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg">
                    <Image src={khentiiExpedition.dayImages[idx][2]} alt={day.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INQUIRY --- */}
      <section id="inquiry" className="bg-[#1A1A1A] py-32 px-6 text-white relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl font-serif font-bold mb-8">Plan Your <span className="text-[#C5A059]">Legacy.</span></h2>
            <p className="text-xl text-white/60 mb-12">{lang === 'en' ? 'Start your journey into the heart of Mongolia today.' : '몽골의 심장부로 향하는 여정을 오늘 시작하세요.'}</p>
          </div>
          <div className="bg-white p-10 rounded-3xl text-[#1A1A1A]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder={lang === 'en' ? 'Full Name' : '이름'} required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none" />
              <input type="email" placeholder={lang === 'en' ? 'Email' : '이메일'} required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none" />
              <textarea placeholder={lang === 'en' ? 'Message' : '메시지'} required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none resize-none" rows="3" />
              <button type="submit" disabled={status === 'loading'} className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-all">
                {status === 'loading' ? (lang === 'en' ? 'Sending...' : '전송 중...') : (lang === 'en' ? 'Send' : '보내기')}
              </button>
              {status === 'success' && <p className="text-green-600 text-xs font-bold text-center mt-4">Success! We will contact you soon.</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
