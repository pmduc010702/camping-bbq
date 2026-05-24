import React, { useEffect } from 'react';
import { X, Flame, Beef, Users, Phone } from 'lucide-react';
import { ZaloIcon } from '../icons';
import { HOTLINE, ZALO_URL } from '../data/settings';
import { sideItems } from '../data/content';

export default function ComboModal({ combo, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-stone-950 border border-stone-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header visual */}
        <div className={`relative h-48 md:h-56 bg-gradient-to-br ${combo.gradient} rounded-t-2xl overflow-hidden`}>
          {combo.image && (
            <img
              src={combo.image}
              alt={combo.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 grain opacity-30" />
          {!combo.image && (
            <div className="absolute -bottom-10 -right-10 opacity-25">
              <Flame size={200} className="text-white" strokeWidth={1.2} />
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition z-10"
          >
            <X size={18} />
          </button>
          <div className="absolute top-4 left-4 text-[10px] font-bold tracking-wider text-white/90 bg-black/40 backdrop-blur-sm px-2 py-1 rounded z-10">
            {combo.tag}
          </div>
          <div className="absolute bottom-5 left-5 z-10">
            <div className="font-display font-black text-white leading-none drop-shadow-lg">
              <span className="text-7xl md:text-8xl">{combo.price}</span>
              <span className="text-3xl ml-1">K</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 text-sm text-stone-400 mb-4">
            <span className="flex items-center gap-1.5"><Beef size={14} /> {combo.totalWeight}</span>
            <span className="flex items-center gap-1.5"><Users size={14} /> Phù hợp {combo.serving}</span>
          </div>

          <p className="text-stone-300 mb-6">{combo.description}</p>

          <div className="mb-6">
            <div className="text-xs font-bold tracking-[0.2em] text-red-500 mb-3">— THỊT NƯỚNG</div>
            <div className="grid grid-cols-2 gap-2">
              {combo.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-stone-900 border border-stone-800 rounded-lg px-4 py-3">
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-xs font-mono text-red-400">{item.weight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-7">
            <div className="text-xs font-bold tracking-[0.2em] text-red-500 mb-3">— KÈM THEO</div>
            <div className="flex flex-wrap gap-2">
              {sideItems.map((s, i) => (
                <span key={i} className="text-xs bg-stone-900 border border-stone-800 px-3 py-1.5 rounded-full text-stone-300">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 sticky bottom-0">
            <a
              href={`tel:${HOTLINE}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 px-5 py-3.5 rounded-full font-bold transition"
            >
              <Phone size={16} /> Gọi đặt
            </a>
            <a
              href={ZALO_URL}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3.5 rounded-full font-bold transition"
            >
              <ZaloIcon size={16} /> Nhắn Zalo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
