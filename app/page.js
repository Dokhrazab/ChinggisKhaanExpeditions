// /app/page.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { expeditions, pricing_meta, scheduledGroups, dayImages } from '../data/itinerary';

export default function ExpeditionPage() {
  const [lang, setLang] = useState('en');
  const [activeExpeditionId, setActiveExpeditionId] = useState('genesis-route');
  const [tourType, setTourType] = useState('private');
  const [selectedDate, setSelectedDate] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const currentExpedition = expeditions[lang]?.find(e => e.id === activeExpeditionId) || expeditions['en'][0];
  const meta = pricing_meta[lang] || pricing_meta['en'];

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
        body: JSON.stringify({ fullName, email, tourType, selectedDate, message, expeditionTitle: currentExpedition.title }),
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

  if (!isClient) return <div className="min-h-screen bg-[#F8F5F0]" />;

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
          
          <div className="flex items-center bg-black/5 rounded-full p-1 border border-black/5">
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${lang === 'en' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#666]'}`}>EN</button>
            <button onClick={() => setLang('ko')} className={`px-3 py-1 rounded-full text-[10px] font-black transition-all ${lang === 'ko' ? 'bg-[#1A1A1A] text-white shadow-sm' : 'text-[#666]'}`}>KO</button>
          </div>

          <a href="#inquiry" className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#C5A059] transition-all shadow-lg active:scale-95 uppercase tracking-wider">
            {lang === 'en' ? 'Inquire' : '문의하기'}
          </a>
        </div>
      </nav>

      {/* --- EXPEDITION SELECTION HERO --- */}
      <header className="relative w-full h-[95vh] flex flex-col justify-end overflow-hidden">
        <Image src={currentExpedition.heroImage} alt={currentExpedition.title} fill priority className="object-cover transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/40 to-transparent" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20">
          <div className="max-w-4xl">
            <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase mb-4 block animate-fade-in">Tour Operator for Historical Clarity</span>
            <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-white mb-8 leading-[1.1] drop-shadow-2xl">
              {currentExpedition.title}
            </h1>

            {/* Expedition Selector Tabs */}
            <div className="flex flex-wrap gap-4 mb-12">
              {expeditions[lang].map((exp) => (
                <button 
                  key={exp.id}
                  onClick={() => setActiveExpeditionId(exp.id)}
                  className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${activeExpeditionId === exp.id ? 'bg-[#C5A059] border-[#C5A059] text-white' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'}`}
                >
                  {exp.id.replace('-', ' ')}
                </button>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-12 border-t border-white/20 pt-8">
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">{lang === 'en' ? 'Duration' : '기간'}</span>
                <span className="text-white font-medium text-lg">{currentExpedition.duration}</span>
              </div>
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">{lang === 'en' ? 'Difficulty' : '난이도'}</span>
                <span className="text-white font-medium text-lg">{currentExpedition.difficulty}</span>
              </div>
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">{lang === 'en' ? 'Max Size' : '최대 인원'}</span>
                <span className="text-white font-medium text-lg">{currentExpedition.maxGroupSize}</span>
              </div>
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">From</span>
                <span className="text-white font-medium text-lg">${currentExpedition.price} <span className="text-xs text-white/60">pp</span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- AUTHORITY SECTION --- */}
      <section className="py-24 px-6 bg-white border-b border-black/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight text-[#1A1A1A]">
              Bringing <span className="text-[#C5A059]">Clarity</span> to the Legend.
            </h2>
            <p className="text-lg text-[#666] leading-relaxed mb-8">
              {lang === 'en' 
                ? 'We are not just a tour operator; we are historical stewards. Every expedition we run—from city museum deep-dives to 6-day steppe journeys—is designed to strip away the myths and provide authentic historical clarity on the life of Chinggis Khaan.'
                : '저희는 단순한 여행사가 아닙니다. 저희는 역사의 파수꾼입니다. 시내 박물관 투어부터 6일간의 초원 탐험에 이르기까지, 모든 일정은 신화를 걷어내고 칭기즈칸의 삶에 대한 진정한 역사적 명확성을 제공하도록 설계되었습니다.'}
            </p>
          </div>
          <div className="relative h-[400px] rounded-[40px] overflow-hidden shadow-2xl">
            <Image src="/images/chinggis-khaan-historical-clarity-authority.jpg" alt="Authentic historical clarity of the Mongol Empire" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <section id="pricing" className="py-24 px-6 bg-[#F8F5F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-[#1A1A1A]">{lang === 'en' ? 'Expedition Pricing' : '탐험 비용'}</h2>
          
          <div className="inline-flex p-1.5 bg-white rounded-full mb-16 shadow-sm border border-black/5">
            <button onClick={() => setTourType('private')} className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${tourType === 'private' ? 'bg-[#1A1A1A] text-white' : 'text-[#666]'}`}>
              {meta.private}
            </button>
            <button onClick={() => setTourType('group')} className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${tourType === 'group' ? 'bg-[#1A1A1A] text-white' : 'text-[#666]'}`}>
              {meta.group}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-white p-10 rounded-[40px] border border-black/5 shadow-sm">
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tighter text-[#1A1A1A]">{tourType === 'private' ? meta.private : meta.group}</h3>
              <p className="text-sm text-[#666] mb-8">{tourType === 'private' ? meta.private_desc : meta.group_desc}</p>
              <div className="text-5xl font-serif font-bold text-[#C5A059] tracking-tighter">
                ${tourType === 'private' ? currentExpedition.price * 2 : currentExpedition.price}
                <span className="text-sm font-sans font-normal text-[#666] ml-2">{meta.pp}</span>
              </div>
            </div>
            <div className="bg-[#1A1A1A] p-10 rounded-[40px] text-white shadow-2xl">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-tighter">{lang === 'en' ? 'Ready to Book?' : '예약 준비가 되셨나요?'}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-8">{lang === 'en' ? 'Click below to request a tailored proposal for this specific route.' : '해당 일정에 대한 맞춤형 제안서를 요청하려면 아래를 클릭하세요.'}</p>
              <a href="#inquiry" className="block text-center bg-[#C5A059] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#1A1A1A] transition-all">
                {lang === 'en' ? 'Request Proposal' : '제안서 요청'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- ITINERARY --- */}
      <section id="itinerary" className="py-24 px-6 bg-white text-[#1A1A1A]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Route Overview</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#1A1A1A] tracking-tight">{currentExpedition.title}</h2>
          </div>

          <div className="space-y-32">
            {currentExpedition.days.map((day, idx) => (
              <div key={idx} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                <div className="md:w-1/2">
                  <span className="text-6xl font-serif font-black text-[#C5A059]/10">0{day.day}</span>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-[#1A1A1A]">{day.title}</h3>
                  <p className="text-lg text-[#666] leading-relaxed mb-8">{day.description}</p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
                  <div className="col-span-2 relative h-64 rounded-3xl overflow-hidden shadow-lg border border-black/5">
                    <Image src={dayImages[activeExpeditionId][idx][0]} alt={day.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="relative h-40 rounded-3xl overflow-hidden shadow-lg border border-black/5">
                    <Image src={dayImages[activeExpeditionId][idx][1]} alt={day.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="relative h-40 rounded-3xl overflow-hidden shadow-lg border border-black/5">
                    <Image src={dayImages[activeExpeditionId][idx][2]} alt={day.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INQUIRY --- */}
      <section id="inquiry" className="bg-[#1A1A1A] py-32 px-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10 text-white">
          <div>
            <h2 className="text-5xl font-serif font-bold mb-8 tracking-tighter">Plan Your <span className="text-[#C5A059]">Legacy.</span></h2>
            <p className="text-xl text-white/60 mb-12">{lang === 'en' ? `You are inquiring about: ${currentExpedition.title}` : `문의 중인 상품: ${currentExpedition.title}`}</p>
          </div>
          <div className="bg-white p-12 rounded-[40px] text-[#1A1A1A] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" placeholder={lang === 'en' ? 'Full Name' : '이름'} required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none" />
              <input type="email" placeholder={lang === 'en' ? 'Email' : '이메일'} required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none" />
              <textarea placeholder={lang === 'en' ? 'History Interest / Message' : '역사적 관심사 / 메시지'} required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none resize-none" rows="3" />
              <button type="submit" disabled={status === 'loading'} className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#C5A059] transition-all">
                {status === 'loading' ? (lang === 'en' ? 'Sending...' : '전송 중...') : (lang === 'en' ? 'Request tailored proposal' : '맞춤형 제안서 요청')}
              </button>
              {status === 'success' && <p className="text-green-600 text-[10px] font-bold text-center mt-4 uppercase tracking-widest">Inquiry Received. Clarity Awaits.</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A0A0A] py-12 px-6 border-t border-white/5 text-center text-white">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">© 2026 CKE Expedition Group. Bringing Clarity to the Great Khan.</p>
      </footer>
    </div>
  );
}
