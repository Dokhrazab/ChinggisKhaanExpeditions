// /app/stories/page.js
import Image from 'next/image';
import Link from 'next/link';
import { sampleBlogs } from '../../data/tours';

export const metadata = {
  title: 'Khentii Chronicles | Historical Stories from Mongolia',
  description: 'Deep dives into the history, culture, and landscapes of Khentii Province.',
};

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-24 text-center">
          <span className="text-[#C5A059] font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">The Chronicles</span>
          <h1 className="text-6xl md:text-8xl font-serif font-extrabold text-[#1A1A1A] tracking-tighter">Imperial Stories</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {sampleBlogs.map((post) => (
            <Link key={post.slug} href={`/stories/${post.slug}`} className="group block">
              <div className="relative h-[500px] rounded-[48px] overflow-hidden shadow-2xl mb-8 transition-all hover:shadow-gold/20">
                <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-10 left-10 right-10">
                   <span className="text-[#C5A059] text-[9px] font-black uppercase tracking-widest mb-3 block">{post.category}</span>
                   <h3 className="text-3xl font-serif font-bold text-white leading-tight">{post.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
