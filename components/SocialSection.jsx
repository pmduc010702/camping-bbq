import React from 'react';
import { ArrowRight } from 'lucide-react';
import { socials } from '../data/socials';

export default function SocialSection() {
  return (
    <section id="social" className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— FOLLOW US</div>
          <h2 className="font-display font-black text-4xl md:text-6xl">
            Theo dõi<br />
            <span className="text-stone-500 italic font-light">tụi mình.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl border border-stone-800 hover:border-stone-600 bg-gradient-to-br ${s.bg} p-6 transition`}
            >
              <s.icon size={32} className="mb-4" style={{ color: s.color }} />
              <div className="font-display font-bold text-lg">{s.name}</div>
              <div className="text-sm text-stone-400 mb-4">{s.handle}</div>
              <div className="flex items-center gap-1 text-xs font-bold tracking-wider text-stone-300 group-hover:text-white transition">
                FOLLOW
                <ArrowRight size={12} className="group-hover:translate-x-1 transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
