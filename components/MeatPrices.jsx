import React from 'react';
import { Phone, Beef } from 'lucide-react';
import { ZaloIcon, MessengerIcon } from '../icons';
import { individualMeats } from '../data/meats';
import { HOTLINE, ZALO_URL, MESSENGER_URL } from '../data/settings';

export default function MeatPrices() {
  return (
    <section id="prices" className="py-20 md:py-28 px-5 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-700/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— GIÁ LẺ</div>
            <h2 className="font-display font-black text-4xl md:text-6xl leading-none">
              Hoặc mua<br />
              <span className="text-stone-500 italic font-light">từng loại.</span>
            </h2>
          </div>
          <div className="text-sm text-stone-400 max-w-xs">
            Định lượng <strong className="text-stone-200">200g/phần</strong>. Đặt riêng từng loại qua Zalo, tụi mình ướp theo công thức chuẩn.
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {individualMeats.map((meat) => (
            <MeatCard key={meat.id} meat={meat} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gradient-to-br from-stone-950 to-red-950/30 border border-stone-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/40 flex items-center justify-center shrink-0">
              <Beef size={18} className="text-red-400" />
            </div>
            <div>
              <div className="font-display font-bold text-lg md:text-xl mb-1">Đặt riêng theo ý bạn</div>
              <p className="text-sm text-stone-400">Combo lại theo khẩu vị, hoặc đặt số lượng lớn — nhắn tụi mình để báo giá ưu đãi.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            <a
              href={ZALO_URL}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-3 rounded-full text-sm font-bold transition"
            >
              <ZaloIcon size={15} /> Zalo
            </a>
            <a
              href={MESSENGER_URL}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-br from-blue-500 to-purple-600 hover:opacity-90 px-4 py-3 rounded-full text-sm font-bold transition"
            >
              <MessengerIcon size={15} /> Messenger
            </a>
            <a
              href={`tel:${HOTLINE}`}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 px-4 py-3 rounded-full text-sm font-bold transition"
            >
              <Phone size={15} /> Gọi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MeatCard({ meat }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-stone-950 border border-stone-800 hover:border-red-500/40 transition">
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-stone-800 to-stone-900 overflow-hidden">
        {meat.image && (
          <img
            src={meat.image}
            alt={meat.name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        {meat.tag && (
          <div className="absolute top-3 left-3 text-[10px] font-bold tracking-wider text-white bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
            {meat.tag}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 md:p-5">
        <div className="font-bold text-sm md:text-base text-stone-100 mb-1">{meat.name}</div>
        {meat.description && (
          <p className="text-[11px] md:text-xs text-stone-500 mb-3 line-clamp-2">{meat.description}</p>
        )}
        <div className="flex items-baseline gap-1.5">
          <span className="font-display font-black text-2xl md:text-3xl text-red-400">{meat.price}K</span>
          <span className="text-xs text-stone-500">/ {meat.weight}</span>
        </div>
      </div>
    </div>
  );
}
