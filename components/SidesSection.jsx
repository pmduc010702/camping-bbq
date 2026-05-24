import React from 'react';
import { Utensils } from 'lucide-react';
import { sideItems } from '../data/content';

export default function SidesSection() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-8 bg-stone-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— ĐỒ ĂN KÈM</div>
          <h2 className="font-display font-black text-3xl md:text-4xl">
            Mọi set đều bao gồm
          </h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {sideItems.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center bg-stone-900/60 border border-stone-800 rounded-xl py-6 px-3 hover:border-red-500/40 transition"
            >
              <Utensils size={20} className="text-red-500 mb-2" strokeWidth={1.8} />
              <span className="text-xs md:text-sm font-medium text-stone-200">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
