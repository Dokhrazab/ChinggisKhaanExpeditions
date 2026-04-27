// /app/stories/[slug]/page.js
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const posts = {
  'dadal-vs-ulaanbaatar': {
    title: 'Dadal vs. Ulaanbaatar: Why you must travel East to find the real Mongolia.',
    date: 'April 2026',
    img: '/images/khentii-mountain-scenery.png',
    content: `
      <p>While Ulaanbaatar is the modern gateway to Mongolia, the soul of the Mongol Empire remains deeply rooted in the rugged, sacred mountains of <strong>Dadal Soum</strong>.</p>
      <h2>The Cradle of History</h2>
      <p>Dadal is widely recognized as the birthplace of <strong>Temuujin</strong>. Our tours bring clarity to the "Secret History of the Mongols" by visiting the exact ridges and rivers mentioned in ancient texts.</p>
    `
  },
  'the-colossus-legend': {
    title: 'The Colossus of the Steppe: Beyond the Stainless Steel.',
    date: 'April 2026',
    img: '/images/tsonjin-boldog-genghis-khan-statue.png',
    content: `
      <p>Tsonjin Boldog is more than the world's tallest equestrian statue. It is a marker of a spiritual turning point in human history.</p>
      <h2>The Legend of the Golden Whip</h2>
      <p>According to legend, it was on this exact spot that the young Temuujin found a golden whip. In nomadic culture, finding a whip is not just luck—it is a divine sign of future leadership. We provide historical clarity on how this small find led to the unification of the "people of the felt tents."</p>
      <h2>The Museum Beneath</h2>
      <p>In the base of the statue, we guide you through the archaeological finds of the Bronze Age and Xiongnu Empire, showing that the Mongol Empire was the culmination of thousands of years of statehood.</p>
    `
  },
  'decoding-the-imperial-vault': {
    title: 'Decoding the Empire: A Guide to the New Chinggis Khaan Museum.',
    date: 'April 2026',
    img: '/images/undurkhaan-mining-museum-history.png',
    content: `
      <p>The newly opened Chinggis Khaan National Museum is a masterpiece of historical preservation. But with 9 floors of artifacts, visitors often miss the "why" behind the "what."</p>
      <h2>The Clarity of Statehood</h2>
      <p>Our expert-led tour connects the museum's rare 13th-century artifacts—like the original armor and the Gerege (the world's first diplomatic passport)—to the real geographical locations you see on our Khentii expeditions.</p>
      <h2>A Total Vision</h2>
      <p>We provide clarity on how the Mongol Empire functioned as a global superpower, focusing on the legal codes, trade routes, and religious tolerance that defined the Pax Mongolica.</p>
    `
  }
};

export default function BlogPost({ params }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans">
      
      {/* --- STICKY NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-4 flex justify-between items-center text-[#1A1A1A]">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/logo-official.svg" alt="CKE Official Logo" fill className="p-1" />
          </div>
          <span className="font-serif font-bold tracking-tight text-lg hidden md:block">Chinggis Khaan Expeditions</span>
        </Link>
        <Link href="/stories" className="text-[10px] font-black uppercase tracking-widest bg-[#1A1A1A] text-white px-6 py-2 rounded-full">Back to Stories</Link>
      </nav>

      <div className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <Link href="/stories" className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-8 inline-block hover:translate-x-[-4px] transition-all">← Back to Chronicles</Link>
          <header className="mb-12">
            <span className="text-[10px] text-[#666] font-black uppercase tracking-[0.2em] mb-4 block">{post.date} | Historical Clarity</span>
            <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-[#1A1A1A] leading-[1.1] mb-8">{post.title}</h1>
            <div className="relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl border border-black/5">
              <Image src={post.img} alt={post.title} fill className="object-cover" />
            </div>
          </header>
          <div className="prose prose-lg prose-stone max-w-none text-[#1A1A1A] leading-relaxed prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#1A1A1A] prose-p:text-[#444] prose-blockquote:border-l-[#C5A059] prose-blockquote:italic" dangerouslySetInnerHTML={{ __html: post.content }} />
          <footer className="mt-20 pt-12 border-t border-black/5 text-center">
            <Link href="/#inquiry" className="inline-block bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-all shadow-lg">Join the Next Expedition</Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
