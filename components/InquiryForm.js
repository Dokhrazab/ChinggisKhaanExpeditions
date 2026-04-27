// /components/InquiryForm.js
'use client';

import { useState } from 'react';

export default function InquiryForm({ expeditionTitle = "General Inquiry" }) {
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
        body: JSON.stringify({ fullName, email, message, tourType: 'Direct', expeditionTitle }),
      });
      if (response.ok) {
        setStatus('success');
        setFullName(''); setEmail(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="inquiry" className="bg-[#1A1A1A] py-32 px-6 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        <div>
          <h2 className="text-5xl font-serif font-bold mb-8 tracking-tighter">Plan Your <span className="text-[#C5A059]">Legacy.</span></h2>
          <p className="text-xl text-white/60 mb-12 italic">"Forging authentic paths through sacred history."</p>
          
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-[#C5A059] mb-2 tracking-widest text-[10px] uppercase">Direct Email</h4>
              <a href="mailto:chinggiskhanexpeditions@gmail.com" className="text-2xl font-serif hover:text-[#C5A059] transition-colors underline decoration-[#C5A059]/30 underline-offset-8">
                chinggiskhanexpeditions@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-bold text-[#C5A059] mb-2 tracking-widest text-[10px] uppercase">WhatsApp & Phone</h4>
              <a href="https://wa.me/97694476637" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif hover:text-[#C5A059] transition-colors underline decoration-[#C5A059]/30 underline-offset-8">
                +976 94476637
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[40px] text-[#1A1A1A] shadow-2xl">
          <h3 className="text-2xl font-serif font-bold mb-6">Send an Inquiry</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Full Name" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none text-sm" />
            <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none text-sm" />
            <textarea placeholder="Message / History Interest" required value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border-b border-[#E5E5E5] pb-2 focus:border-[#C5A059] outline-none resize-none text-sm" rows="3" />
            <button type="submit" disabled={status === 'loading'} className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-[#C5A059] transition-all">
              {status === 'loading' ? 'Sending...' : 'Request tailored proposal'}
            </button>
            {status === 'success' && <p className="text-green-600 text-[10px] font-black text-center mt-4 uppercase tracking-widest">Inquiry Received. Clarity Awaits.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
