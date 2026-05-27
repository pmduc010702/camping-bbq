import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { sideItems } from '../data/content';

export default function SidesSection() {
  return (
    <section className="py-16 md:py-20 px-5 md:px-8 bg-stone-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— ĐỒ ĂN KÈM</div>
          <h2 className="font-display font-black text-3xl md:text-4xl mb-2">
            Mọi set đều bao gồm
          </h2>
          <p className="text-sm text-stone-400">
            6 món ăn kèm — không phụ phí, không order thêm
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {sideItems.map((item, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl bg-stone-900 border border-stone-800 hover:border-red-500/40 transition"
            >
              {/* Image */}
              <div className="relative aspect-square bg-gradient-to-br from-stone-800 to-stone-900 overflow-hidden">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-green-500/90 flex items-center justify-center shadow-lg">
                  <CheckCircle2 size={11} className="text-white" strokeWidth={3} />
                </div>
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 px-3 py-2.5">
                <div className="text-xs md:text-sm font-bold text-white drop-shadow-lg">
                  {item.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
