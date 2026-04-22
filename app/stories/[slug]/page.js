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
      <p>While Ulaanbaatar is the modern gateway to Mongolia, the soul of the Mongol Empire remains deeply rooted in the rugged, sacred mountains of <strong>Dadal Soum</strong>. For many travelers, Ulaanbaatar offers convenience and comfort, but for the true seeker of history, the journey begins where the concrete ends.</p>
      
      <h2>The Birthplace of a Legend</h2>
      <p>Dadal is widely recognized by historians and nomads alike as the birthplace of <strong>Temuujin</strong>, the boy who would become Genghis Khan. Unlike the busy streets of the capital, Dadal is a land of taiga forests, clear running streams, and the majestic Onon River. Here, the "Secret History of the Mongols" comes to life in every valley.</p>
      
      <h2>Why Travel East?</h2>
      <p>Traveling east to Khentii Province is a deliberate choice to move away from the tourist crowds of the Gobi. In Khentii, you experience the <strong>Three Sacred Rivers</strong>: the Onon, the Kherlen, and the Tuul. This is the "Heartland"—the region Genghis Khan himself declared sacred, forbidding settlement for centuries to preserve its purity.</p>
      
      <blockquote>"I was born in the Khentii, and in the Khentii I shall rest." — An oral tradition attributed to the Great Khan.</blockquote>
      
      <p>When you stand on the ridge overlooking Deluun Boldog, you aren't just looking at a landscape; you are looking at the cradle of an empire that once spanned from the Pacific to the gates of Europe. This is the difference between seeing Mongolia and <em>feeling</em> it.</p>
    `
  },
  'packing-for-the-steppe': {
    title: 'Packing List: 6 Essentials for a Khentii Steppe Expedition.',
    date: 'April 2026',
    img: '/images/mongolian-ger-camp-khentii.png',
    content: `
      <p>The Mongolian steppe is as unforgiving as it is beautiful. A successful expedition to Khentii depends entirely on your preparation. Here are the 6 non-negotiable essentials we recommend for every traveler joining the Genesis Route.</p>
      
      <h2>1. Layers, Layers, Layers</h2>
      <p>Temperature swings in Khentii can be extreme. Even in July, a clear sunny day can turn into a freezing night. High-quality wool or synthetic base layers are critical.</p>
      
      <h2>2. Solar Power Bank</h2>
      <p>While our premium Ger camps offer charging stations, a portable solar charger allows you to capture photos during the long drives between sacred sites without worrying about battery life.</p>
      
      <h2>3. Sturdy Hiking Boots</h2>
      <p>You will be walking along ancient stone walls and river ridges. Ankle support and waterproof materials are essential for the diverse terrain of the Khentii mountains.</p>
      
      <h2>4. Traditional Mongolian Snuff Bottle (Optional but Respectful)</h2>
      <p>While not required, understanding the etiquette of snuff bottle exchange is a powerful way to connect with the local nomadic families you will meet along the way.</p>
      
      <h2>5. High-SPF Sunscreen & Lip Balm</h2>
      <p>The "Land of the Blue Sky" is intense. The high altitude and lack of shade mean the sun is much stronger than it feels.</p>
      
      <h2>6. A Sense of Wonder</h2>
      <p>The most important thing to pack is an open mind. The steppe operates on its own time. Embrace the silence, the vastness, and the stories of the elders.</p>
    `
  },
  'sacred-rivers-guide': {
    title: 'The 3 Sacred Rivers of the Mongol Empire: A Historical Guide.',
    date: 'April 2026',
    img: '/images/mongolian-landscape-kherlen-river.png',
    content: `
      <p>In the 13th century, water was more than a resource—it was a spiritual boundary. The Mongol Empire was born between the banks of three specific rivers in the Khentii region. Understanding these rivers is key to understanding the rise of the Great Khan.</p>
      
      <h2>The Onon River</h2>
      <p>The Onon is the river of birth. It is along the Onon that Temuujin was born and where he was first proclaimed Khan of his tribe. Its waters are cold, fast, and considered the lifeblood of the Borjigin clan.</p>
      
      <h2>The Kherlen River</h2>
      <p>The Kherlen is the river of assembly. It provided the vast grazing lands needed for the Great Kurultai (assemblies). The Kherlen Khuduu Aral, a key stop on our tour, is where the Mongol Empire was formally unified in 1206.</p>
      
      <h2>The Tuul River</h2>
      <p>The Tuul is the gateway river. Flowing near modern Ulaanbaatar, it historically served as the boundary between the forest tribes and the steppe tribes. It remains a central part of Mongolian identity today.</p>
      
      <p>On our expedition, we track the paths of these rivers, seeing exactly how the geography of Khentii dictated the military and political strategies of the early Mongol state.</p>
    `
  }
};

export default function BlogPost({ params }) {
  const post = posts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8F5F0] pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/stories" className="text-[#C5A059] font-bold text-xs uppercase tracking-widest mb-8 inline-block hover:translate-x-[-4px] transition-transform">
          ← Back to Chronicles
        </Link>
        
        <header className="mb-12">
          <span className="text-[10px] text-[#666] font-black uppercase tracking-[0.2em] mb-4 block">{post.date} | History & Culture</span>
          <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-[#1A1A1A] leading-tight mb-8">
            {post.title}
          </h1>
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image src={post.img} alt={post.title} fill className="object-cover" />
          </div>
        </header>

        <div 
          className="prose prose-lg prose-stone max-w-none text-[#1A1A1A] leading-relaxed
            prose-headings:font-serif prose-headings:font-bold prose-headings:text-[#1A1A1A]
            prose-p:text-[#444] prose-blockquote:border-l-[#C5A059] prose-blockquote:italic
            prose-strong:text-[#1A1A1A] prose-strong:font-bold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-20 pt-12 border-t border-black/5 text-center">
          <h4 className="font-serif font-bold text-2xl mb-4 text-[#1A1A1A]">Ready to see it for yourself?</h4>
          <Link href="/#inquiry" className="inline-block bg-[#1A1A1A] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#C5A059] transition-all">
            Join the Next Expedition
          </Link>
        </footer>
      </article>
    </div>
  );
}
