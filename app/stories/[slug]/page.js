// /app/stories/[slug]/page.js
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sampleBlogs } from '../../../data/itinerary';

export async function generateMetadata({ params }) {
  const post = sampleBlogs.find(b => b.slug === params.slug);
  if (!post) return { title: 'Guide Not Found' };
  return {
    title: `${post.title} | CKE Travel Guide`,
    description: post.title,
  };
}

export default function BlogPost({ params }) {
  const post = sampleBlogs.find(b => b.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A] font-sans">
      
      {/* --- STICKY NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-black/5 px-6 py-4 flex justify-between items-center text-[#1A1A1A]">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/logo-official.svg" alt="CKE Official Logo" fill className="p-1" />
          </div>
          <span className="font-serif font-black tracking-tight text-xl hidden md:block uppercase">Chinggis Khaan Expeditions</span>
        </Link>
        <Link href="/stories" className="text-[10px] font-black uppercase tracking-widest bg-[#1A1A1A] text-white px-6 py-2 rounded-full hover:bg-[#C5A059] transition-all">Back to Guide</Link>
      </nav>

      <div className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <Link href="/stories" className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-8 inline-block hover:translate-x-[-4px] transition-all">← Back to Travel Guide</Link>
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
