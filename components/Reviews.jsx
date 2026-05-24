import React from 'react';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/reviews';

export default function Reviews() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— KHÁCH NÓI GÌ</div>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-none">
              Khách quen<br />
              <span className="text-stone-500 italic font-light">đã trải nghiệm.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={18} fill="#facc15" className="text-yellow-400" />
              ))}
            </div>
            <span className="text-stone-400">phản hồi thật từ khách</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative bg-stone-950 border border-stone-800 rounded-2xl p-6 hover:border-stone-600 transition group"
            >
              <Quote
                size={28}
                className="absolute top-5 right-5 text-red-500/15 group-hover:text-red-500/30 transition"
                strokeWidth={2}
              />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-white shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  {r.name.split(' ').slice(-1)[0][0]}
                </div>
                <div>
                  <div className="font-bold text-sm">{r.name}</div>
                  <div className="text-xs text-stone-500">{r.role}</div>
                </div>
              </div>

              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={14}
                    fill={s <= r.rating ? '#facc15' : 'none'}
                    className={s <= r.rating ? 'text-yellow-400' : 'text-stone-700'}
                  />
                ))}
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
