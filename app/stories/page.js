// /app/stories/page.js
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Khentii Chronicles | Historical Stories from Mongolia',
  description: 'Deep dives into the history, culture, and landscapes of Khentii Province, the birthplace of Genghis Khan.',
};

const posts = [
  {
    slug: 'dadal-vs-ulaanbaatar',
    title: 'Dadal vs. Ulaanbaatar: Why you must travel East to find the real Mongolia.',
    excerpt: 'While Ulaanbaatar is the modern gateway, the soul of the Mongol Empire remains in the rugged mountains of Dadal.',
    date: 'April 2026',
    img: '/images/khentii-mountain-scenery.png'
  },
  {
    slug: 'packing-for-the-steppe',
    title: 'Packing List: 6 Essentials for a Khentii Steppe Expedition.',
    excerpt: 'The Mongolian steppe is unforgiving and beautiful. Here is what you actually need to survive and thrive.',
    date: 'April 2026',
    img: '/images/mongolian-ger-camp-khentii.png'
  },
  {
    slug: 'sacred-rivers-guide',
    title: 'The 3 Sacred Rivers of the Mongol Empire: A Historical Guide.',
    excerpt: 'The Onon, Kherlen, and Tuul rivers are more than water—they are the veins of a 13th-century superpower.',
    date: 'April 2026',
    img: '/images/mongolian-landscape-kherlen-river.png'
  }
];

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-20">
          <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">The Chronicles</span>
          <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-[#1A1A1A]">Historical Stories</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/stories/${post.slug}`} className="group">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg mb-6 transition-all hover:shadow-2xl">
                <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-4 group-hover:text-[#C5A059] transition-colors leading-snug">{post.title}</h3>
              <p className="text-[#666] text-sm leading-relaxed">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
