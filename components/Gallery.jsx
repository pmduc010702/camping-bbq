import React from 'react';
import { galleryImages } from '../data/content';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-24 px-5 md:px-8 bg-stone-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— GALLERY</div>
            <h2 className="font-display font-black text-3xl md:text-5xl">
              Khách đã trải nghiệm
            </h2>
          </div>
          <div className="text-sm text-stone-400">
            Chụp ảnh đẹp → tag tụi mình → giảm 30K đơn sau
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl bg-stone-900 ${
                i === 0 ? 'col-span-2 row-span-2 aspect-square md:aspect-auto' : 'aspect-square'
              }`}
            >
              <img
                src={src}
                alt={`Khách BBQ ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('bg-gradient-to-br', 'from-red-900', 'to-stone-900');
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
