// /app/page.js
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { khentiiExpedition } from '../data/itinerary';

export default function ExpeditionPage() {
  const [tourType, setTourType] = useState('private'); // 'private' or 'group'
  const [selectedDate, setSelectedDate] = useState('');
  
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          tourType,
          selectedDate,
          message,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFullName('');
        setEmail('');
        setMessage('');
        setSelectedDate('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  // --- SEO STRATEGY (Advanced JSON-LD) ---
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "name": khentiiExpedition.title,
        "description": khentiiExpedition.tagline,
        "touristType": "History enthusiasts, adventure travelers",
        "itinerary": khentiiExpedition.days.map(day => ({
          "@type": "Itinerary",
          "position": day.day,
          "name": day.title,
          "description": day.description
        })),
        "offers": {
          "@type": "Offer",
          "price": khentiiExpedition.pricing.group.price,
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-05-01"
        },
        "provider": {
          "@type": "Organization",
          "name": "Chinggis Khaan Expeditions",
          "url": "https://chinggiskhaanexpeditions.com",
          "logo": "https://chinggiskhaanexpeditions.com/favicon.svg"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* Injecting Advanced SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* --- STICKY NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center overflow-hidden">
            <Image 
              src="/favicon.svg" 
              alt="Chinggis Khaan Expeditions Official Logo" 
              fill 
              className="p-1.5"
            />
          </div>
          <span className="font-serif font-bold tracking-tight text-lg hidden md:block">Chinggis Khaan Expeditions</span>
        </div>
        <div className="flex gap-8 items-center text-[#1A1A1A]">
          <a href="#itinerary" className="text-sm font-medium hover:text-[#C5A059] transition-colors uppercase tracking-widest">The Journey</a>
          <a href="#history" className="text-sm font-medium hover:text-[#C5A059] transition-colors uppercase tracking-widest hidden lg:block">History</a>
          <a href="#pricing" className="text-sm font-medium hover:text-[#C5A059] transition-colors uppercase tracking-widest">Pricing</a>
          <a href="#inquiry" className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#C5A059] transition-all shadow-lg hover:shadow-xl active:scale-95">
            Inquire Now
          </a>
        </div>
      </nav>

      {/* --- IMMERSIVE HERO --- */}
      <header className="relative w-full h-[90vh] flex items-end overflow-hidden">
        <Image 
          src={khentiiExpedition.heroImage} 
          alt="Breathtaking landscape of the Khentii Mountains, the sacred birthplace of Genghis Khan"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20">
          <div className="max-w-3xl">
            <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase mb-4 block">Signature Expedition</span>
            <h1 className="text-5xl md:text-8xl font-serif font-extrabold text-white mb-8 leading-[1.1] drop-shadow-2xl">
              {khentiiExpedition.title}
            </h1>
            
            <div className="flex flex-wrap gap-12 border-t border-white/20 pt-8 mt-4">
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">Duration</span>
                <span className="text-white font-medium text-lg">{khentiiExpedition.duration}</span>
              </div>
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">Difficulty</span>
                <span className="text-white font-medium text-lg">{khentiiExpedition.difficulty}</span>
              </div>
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">Group Size</span>
                <span className="text-white font-medium text-lg">{khentiiExpedition.maxGroupSize}</span>
              </div>
              <div>
                <span className="block text-white/50 text-xs uppercase tracking-widest mb-1">From</span>
                <span className="text-white font-medium text-lg">${khentiiExpedition.pricing.group.price} <span className="text-xs text-white/60">pp</span></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Authentic Connection to the <span className="text-[#C5A059]">Great Steppe.</span>
              </h2>
              <p className="text-lg text-[#666] leading-relaxed mb-8">
                Unlike mass-market tours, we specialize exclusively in the Khentii region—the sacred birthplace of the Mongol Empire. Our expeditions are built on local heritage, private access, and a commitment to nomadic stewardship.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Local Historical Experts", desc: "Guides with PhD-level knowledge of 13th-century history and Mongolian heritage." },
                  { title: "Sustainable Travel", desc: "100% of our camps are locally owned and eco-conscious, supporting nomadic families." },
                  { title: "Boutique Group Size", desc: "Strict limit of 6 travelers for an intimate, personal experience across the steppe." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#C5A059]/20 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase tracking-wider">{item.title}</h4>
                      <p className="text-[#666] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl rotate-1">
              <Image 
                src="/images/300-horses-mongolia-steppe.png" 
                alt="A massive herd of 300 horses galloping across the Mongolian steppe in Khentii Province"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-[16px] border-white/10 m-6 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT SEO: HISTORY GUIDE SECTION --- */}
      <section id="history" className="py-24 px-6 bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[100px] -ml-64 -mb-64" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/tsonjin-boldog-genghis-khan-statue.png" 
                alt="The massive equestrian statue of Genghis Khan at Tsonjin Boldog, a key historical site on our tour"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Historical Knowledge</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Why Khentii is the True <span className="text-[#C5A059]">Heart of Mongolia.</span></h2>
              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                <p>
                  Khentii Province is not just a destination; it is the ultimate pilgrimage for any student of history. As the birthplace of <strong>Temuujin (Genghis Khan)</strong>, this rugged landscape holds the secrets of the rise of the Mongol Empire.
                </p>
                <p>
                  Our expedition focuses on the <strong>Three Sacred Sites</strong> mentioned in the <em>Secret History of the Mongols</em>: the Burkhan Khaldun mountain, the Kherlen River, and the blue lakes where the Great Khan was enthroned.
                </p>
                <p>
                  By traveling with local experts, you gain access to oral traditions and archaeological insights that standard tour operators simply cannot provide. This is a journey through the 13th century, preserved in the nomadic life of today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TOUR SELECTOR SECTION --- */}
      <section id="pricing" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Expedition Style</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-[#1A1A1A]">Choose Your Journey</h2>
          
          <div className="inline-flex p-1.5 bg-[#F8F5F0] rounded-full mb-16 shadow-inner">
            <button 
              onClick={() => setTourType('private')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${tourType === 'private' ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-[#666] hover:text-[#1A1A1A]'}`}
            >
              Private Expedition
            </button>
            <button 
              onClick={() => setTourType('group')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${tourType === 'group' ? 'bg-[#1A1A1A] text-white shadow-lg' : 'text-[#666] hover:text-[#1A1A1A]'}`}
            >
              Scheduled Group
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="bg-[#F8F5F0] p-10 rounded-3xl border border-[#E5E5E5] flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4 uppercase tracking-tight text-[#1A1A1A]">
                  {tourType === 'private' ? 'Boutique Private' : 'Fixed Departure'}
                </h3>
                <p className="text-[#666] leading-relaxed mb-8">
                  {tourType === 'private' 
                    ? khentiiExpedition.pricing.private.description 
                    : khentiiExpedition.pricing.group.description}
                </p>
                <div className="text-4xl font-serif font-bold text-[#C5A059] mb-2">
                  ${tourType === 'private' ? khentiiExpedition.pricing.private.price : khentiiExpedition.pricing.group.price}
                  <span className="text-sm font-sans font-normal text-[#666] ml-2">per traveler</span>
                </div>
              </div>
              <ul className="mt-8 space-y-4 border-t border-[#DCD6C8] pt-8 text-[#1A1A1A]">
                {tourType === 'private' ? (
                  <>
                    <li className="flex items-center gap-3 text-sm font-medium">✓ Pick any travel dates</li>
                    <li className="flex items-center gap-3 text-sm font-medium">✓ Custom-tailored itinerary</li>
                    <li className="flex items-center gap-3 text-sm font-medium">✓ Dedicated driver & vehicle</li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-3 text-sm font-medium">✓ Shared costs with max 6 travelers</li>
                    <li className="flex items-center gap-3 text-sm font-medium">✓ Fixed 6-day itinerary</li>
                    <li className="flex items-center gap-3 text-sm font-medium">✓ Guaranteed group departures</li>
                  </>
                )}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-3xl border-2 border-[#1A1A1A] shadow-xl text-[#1A1A1A]">
              <h3 className="text-xl font-serif font-bold mb-6">
                {tourType === 'private' ? 'Customize Dates' : 'Select Departure'}
              </h3>
              
              {tourType === 'private' ? (
                <div className="space-y-6">
                  <p className="text-sm text-[#666]">For private tours, simply let us know your preferred month and we will tailor the exact start dates to your schedule.</p>
                  <a href="#inquiry" className="block text-center bg-[#1A1A1A] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-all">
                    Inquire for Dates
                  </a>
                </div>
              ) : (
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {khentiiExpedition.scheduledGroups.map((group) => (
                    <div 
                      key={group.id} 
                      onClick={() => group.status !== 'Closed' && setSelectedDate(group.dates)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${selectedDate === group.dates ? 'border-[#C5A059] bg-[#C5A059]/5' : 'border-[#E5E5E5] hover:border-[#1A1A1A]'} ${group.status === 'Closed' ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm">{group.dates}</span>
                        <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded ${group.status === 'Available' ? 'bg-green-100 text-green-700' : group.status === 'Limited' ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>
                          {group.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#666]">
                        {group.status === 'Closed' ? 'Departure Sold Out' : `${group.spots} spots remaining`}
                      </div>
                    </div>
                  ))}
                  <a href="#inquiry" className="block text-center bg-[#C5A059] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#1A1A1A] transition-all mt-4 sticky bottom-0">
                    Book Selected Date
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- ITINERARY SECTION --- */}
      <section id="itinerary" className="py-24 px-6 bg-[#F8F5F0]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-[#C5A059] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Day-by-Day Journey</span>
            <h2 className="text-5xl font-serif font-bold text-[#1A1A1A]">The Genesis Route</h2>
          </div>

          <div className="space-y-32">
            {khentiiExpedition.days.map((day, idx) => (
              <div key={day.day} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                <div className="md:w-1/2">
                  <div className="flex items-center gap-4 mb-6 text-[#1A1A1A]">
                    <span className="text-6xl font-serif font-black text-[#C5A059]/20">0{day.day}</span>
                    <div className="h-px flex-1 bg-[#C5A059]/30" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-4 text-[#1A1A1A]">{day.title}</h3>
                  <p className="text-lg text-[#666] leading-relaxed mb-8">{day.description}</p>
                  
                  <div className="grid grid-cols-2 gap-8 border-t border-[#C5A059]/10 pt-8 text-[#1A1A1A]">
                    <div>
                      <span className="text-xs uppercase font-bold text-[#C5A059] tracking-widest block mb-1">Drive Time</span>
                      <span className="text-sm font-medium">{day.driveTime}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-[#C5A059] tracking-widest block mb-1">Location</span>
                      <span className="text-sm font-medium">{day.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
                  <div className="col-span-2 relative h-80 rounded-2xl overflow-hidden shadow-lg group">
                    <Image src={day.images[0]} alt={`${day.title} - Authentic historical site in Khentii Province`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                    <Image src={day.images[1]} alt={`${day.title} - Nomadic culture and landscape experience`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group">
                    <Image src={day.images[2]} alt={`${day.title} - High-resolution Mongolia scenery`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INQUIRY SECTION --- */}
      <section id="inquiry" className="bg-[#1A1A1A] py-32 px-6 text-white relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl font-serif font-bold mb-8 text-white">Plan Your <span className="text-[#C5A059]">Legacy.</span></h2>
              <p className="text-xl text-white/60 mb-12">
                Every expedition is unique. Let us know your details and a specialist will reach out within 24 hours to help you plan your journey through Mongolia.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-bold text-[#C5A059] mb-4 tracking-widest text-sm uppercase">What's Included</h4>
                  <ul className="space-y-3 text-sm text-white/80">
                    {khentiiExpedition.inclusions.map((item, i) => (
                      <li key={i} className="flex gap-2"><span className="text-[#C5A059]">✓</span> {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-white/40 mb-4 tracking-widest text-sm uppercase">Quick Contact</h4>
                  <p className="text-sm text-white/60">
                    Email: chinggiskhanexpeditions@gmail.com<br/>
                    WhatsApp: +976 94476637
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 rounded-3xl text-[#1A1A1A] shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-6">Request a Proposal</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#666] mb-2 block">Full Name</label>
                    <input 
                      type="text" 
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none" 
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#666] mb-2 block">Email Address</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none" 
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#666] mb-2 block">Tour Selection</label>
                  <select 
                    value={tourType} 
                    onChange={(e) => setTourType(e.target.value)}
                    className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none bg-transparent"
                  >
                    <option value="private">Private Custom Tour</option>
                    <option value="group">Scheduled Group Departure</option>
                  </select>
                </div>
                {tourType === 'group' && (
                  <div>
                    <label className="text-[10px] uppercase font-bold tracking-widest text-[#666] mb-2 block">Preferred Date</label>
                    <select 
                      value={selectedDate} 
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none bg-transparent"
                    >
                      <option value="">Select a Date</option>
                      {khentiiExpedition.scheduledGroups.map(g => (
                        <option key={g.id} value={g.dates} disabled={g.status === 'Closed'}>{g.dates}</option>
                      ))}
                    </select>
                  </div>
                )}
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-[#666] mb-2 block">Message</label>
                  <textarea 
                    rows="2" 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#C5A059] transition-all shadow-xl disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
                </button>
                {status === 'success' && (
                  <p className="text-green-600 text-xs font-bold text-center mt-4">Inquiry sent successfully! We will contact you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-xs font-bold text-center mt-4">Failed to send inquiry. Please try again or email us directly.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#0A0A0A] py-12 px-6 border-t border-white/5 text-center">
        <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">© 2026 CKE Expedition Group. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
