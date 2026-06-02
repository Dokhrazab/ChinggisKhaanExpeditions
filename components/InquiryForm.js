// /components/InquiryForm.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InquiryForm({ expeditionTitle = "Rugged Mongolia 4x4 Expedition" }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    groupSize: '3-4',
    season: 'Summer 2026',
    terrainComfort: 'Off-Road Capability Required',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const updateField = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, expeditionTitle }),
      });
      if (response.ok) setStatus('success');
      else setStatus('error');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="inquiry" className="bg-[#1A1A1A] py-40 px-6 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[150px] -mr-64 -mt-64" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 relative z-10">
        <div>
          <span className="text-[#C5A059] font-black tracking-[0.5em] uppercase text-[10px] mb-8 block">Concierge Intake</span>
          <h2 className="text-6xl md:text-7xl font-serif font-bold mb-10 tracking-tighter leading-tight">Submit Expedition <br /><span className="text-[#C5A059]">Application.</span></h2>
          <p className="text-xl text-white/50 mb-16 font-light leading-relaxed max-w-md">
            We operate at limited capacity to ensure elite logistical precision. Every request is reviewed by our lead historical fixer for technical feasibility.
          </p>
          
          <div className="space-y-12">
            <div>
              <h4 className="font-black text-[#C5A059] mb-4 tracking-[0.3em] text-[9px] uppercase">Secure Comms</h4>
              <a href="mailto:chinggiskhanexpeditions@gmail.com" className="text-2xl font-serif hover:text-[#C5A059] transition-colors border-b border-[#C5A059]/30 pb-2">
                chinggiskhanexpeditions@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-black text-[#C5A059] mb-4 tracking-[0.3em] text-[9px] uppercase">Field WhatsApp</h4>
              <a href="https://wa.me/97694476637" target="_blank" rel="noopener noreferrer" className="text-2xl font-serif hover:text-[#C5A059] transition-colors border-b border-[#C5A059]/30 pb-2">
                +976 94476637
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[60px] text-[#1A1A1A] shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">Application Transmitted.</h3>
                <p className="text-[#666] font-light">Our lead fixer will contact you via secure email within 24 hours.</p>
              </motion.div>
            ) : (
              <form key="form" onSubmit={(e) => e.preventDefault()} className="space-y-8">
                <div className="flex gap-4 mb-12">
                  {[1, 2].map((s) => (
                    <div key={s} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-[#C5A059]' : 'bg-stone-100'}`} />
                  ))}
                </div>

                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                    <h3 className="text-2xl font-serif font-bold mb-8">Primary Contact</h3>
                    <div className="space-y-6">
                      <input type="text" placeholder="Full Legal Name" required value={formData.fullName} onChange={(e) => updateField('fullName', e.target.value)} className="w-full border-b border-stone-200 py-4 focus:border-[#C5A059] outline-none text-base font-light transition-colors" />
                      <input type="email" placeholder="Secure Email Address" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="w-full border-b border-stone-200 py-4 focus:border-[#C5A059] outline-none text-base font-light transition-colors" />
                    </div>
                    <button type="button" onClick={() => setStep(2)} disabled={!formData.fullName || !formData.email} className="w-full bg-[#1A1A1A] text-white py-6 rounded-[24px] font-black uppercase tracking-[0.3em] text-[11px] hover:bg-[#C5A059] transition-all disabled:opacity-50">Continue to Logistics</button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-8">
                    <h3 className="text-2xl font-serif font-bold mb-8">Expedition Logistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Group Size</label>
                        <select value={formData.groupSize} onChange={(e) => updateField('groupSize', e.target.value)} className="w-full border-b border-stone-200 py-4 focus:border-[#C5A059] outline-none text-sm bg-transparent">
                          <option>Private (Solo)</option>
                          <option>Boutique (2-4)</option>
                          <option>Small Group (5-8)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Target Season</label>
                        <select value={formData.season} onChange={(e) => updateField('season', e.target.value)} className="w-full border-b border-stone-200 py-4 focus:border-[#C5A059] outline-none text-sm bg-transparent">
                          <option>Summer 2026</option>
                          <option>Autumn 2026</option>
                          <option>Winter 2026/27</option>
                        </select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-stone-400">Off-Road Comfort</label>
                      <select value={formData.terrainComfort} onChange={(e) => updateField('terrainComfort', e.target.value)} className="w-full border-b border-stone-200 py-4 focus:border-[#C5A059] outline-none text-sm bg-transparent">
                        <option>Luxury 4x4 Only</option>
                        <option>Standard Expedition Spec</option>
                        <option>Rugged / Self-Supported</option>
                      </select>
                    </div>
                    <textarea placeholder="Specific Historical Interests / Technical Requirements" value={formData.message} onChange={(e) => updateField('message', e.target.value)} className="w-full border-b border-stone-200 py-4 focus:border-[#C5A059] outline-none resize-none text-sm font-light transition-colors" rows="3" />
                    
                    <div className="flex gap-4">
                       <button type="button" onClick={() => setStep(1)} className="flex-1 border border-stone-200 py-6 rounded-[24px] font-black uppercase tracking-[0.3em] text-[11px] hover:bg-stone-50 transition-all">Back</button>
                       <button type="button" onClick={handleSubmit} disabled={status === 'loading'} className="flex-[2] bg-[#1A1A1A] text-white py-6 rounded-[24px] font-black uppercase tracking-[0.3em] text-[11px] hover:bg-[#C5A059] transition-all shadow-xl">
                         {status === 'loading' ? 'Transmitting...' : 'Submit Expedition Request'}
                       </button>
                    </div>
                  </motion.div>
                )}
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
