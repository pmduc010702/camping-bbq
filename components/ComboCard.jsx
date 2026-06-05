import React from 'react';
import { Flame, Star, Beef, Users, ChevronRight } from 'lucide-react';

export default function ComboCard({ combo, index, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative text-left rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-900/30 ${
        combo.isPopular ? 'border-red-500/60' : 'border-stone-800 hover:border-stone-600'
      }`}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Top visual */}
      <div className="relative overflow-hidden bg-black">
        {combo.image ? (
          <img
            src={combo.image}
            alt={combo.name}
            loading="lazy"
            className="w-full h-auto block"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}

        {/* Fallback gradient block (shown when no image or image errors) */}
        <div
          className={`${combo.image ? 'hidden' : 'flex'} h-44 bg-gradient-to-br ${combo.gradient} items-end`}
        >
          <div className="absolute -bottom-8 -right-8 opacity-20 group-hover:opacity-40 transition">
            <Flame size={140} className="text-white" strokeWidth={1.2} />
          </div>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 grain opacity-30" />

        {/* Badges */}
        {combo.isPopular && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-yellow-300 text-stone-900 px-2.5 py-1 rounded-full text-[10px] font-black tracking-wider z-10">
            <Star size={10} fill="currentColor" /> BÁN CHẠY
          </div>
        )}
        <div className="absolute top-3 right-3 text-[10px] font-bold tracking-wider text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded z-10">
          {combo.tag}
        </div>

        {/* Price */}
        <div className="absolute bottom-3 left-4 z-10">
          <div className="font-display font-black text-white leading-none drop-shadow-lg">
            <span className="text-6xl">{combo.price}</span>
            <span className="text-2xl ml-1">K</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 bg-stone-950">
        <div className="flex items-center justify-between text-xs text-stone-400 mb-3">
          <span className="flex items-center gap-1.5"><Beef size={13} /> {combo.totalWeight}</span>
          <span className="flex items-center gap-1.5"><Users size={13} /> {combo.serving}</span>
        </div>

        <ul className="space-y-1.5 mb-4">
          {combo.items.map((item, idx) => (
            <li key={idx} className="flex items-center justify-between text-sm">
              <span className="text-stone-300">{item.name}</span>
              <span className="text-stone-500 font-mono text-xs">{item.weight}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-3 border-t border-stone-800">
          <span className="text-xs text-stone-500">Xem chi tiết</span>
          <ChevronRight size={16} className="text-red-500 group-hover:translate-x-1 transition" />
        </div>
      </div>
    </button>
  );
}