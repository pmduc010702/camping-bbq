import React, { useState } from 'react';
import { combos } from '../data/combos';
import ComboCard from './ComboCard';
import ComboModal from './ComboModal';

export default function MenuSection() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="menu" className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— MENU COMBO</div>
              <h2 className="font-display font-black text-4xl md:text-6xl leading-none">
                Chọn set<br />
                <span className="text-stone-500">phù hợp.</span>
              </h2>
            </div>
            <div className="text-sm text-stone-400 max-w-xs">
              4 combo từ 2 người tới 4–6 người. Tất cả đều kèm rau, xốt, nước chấm.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {combos.map((combo, i) => (
              <ComboCard
                key={combo.id}
                combo={combo}
                index={i}
                onClick={() => setSelected(combo)}
              />
            ))}
          </div>
        </div>
      </section>

      {selected && <ComboModal combo={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
