import React from 'react';
import { Flame } from 'lucide-react';
import { marqueeItems } from '../data/content';

export default function Marquee() {
  return (
    <section className="py-6 border-y border-stone-800 bg-red-950/20 overflow-hidden">
      <div className="flex marquee whitespace-nowrap">
        {[...Array(2)].map((_, j) => (
          <div key={j} className="flex items-center shrink-0">
            {marqueeItems.map((item, i) => (
              <span key={`${j}-${i}`} className="font-display font-black text-2xl md:text-4xl mx-8 flex items-center gap-8">
                {item}
                <Flame size={22} className="text-red-500" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
