import React from 'react';
import { Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { ZaloIcon, MessengerIcon } from '../icons';
import { HOTLINE, HOTLINE_DISPLAY, ZALO_URL, MESSENGER_URL, WORKING_HOURS, SERVICE_AREA } from '../data/settings';

export default function Contact() {
  return (
    <section className="py-20 md:py-24 px-5 md:px-8 bg-gradient-to-b from-stone-950/80 to-red-950/40 border-t border-stone-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— ĐẶT NGAY</div>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-none mb-6">
            Gọi cho<br />tụi mình.
          </h2>
          <a
            href={`tel:${HOTLINE}`}
            className="inline-block font-display font-black text-3xl md:text-5xl text-red-400 hover:text-red-300 transition mb-2"
          >
            {HOTLINE_DISPLAY}
          </a>
          <div className="text-stone-400 text-sm mb-8">Mở cửa {WORKING_HOURS}</div>
          <div className="flex flex-wrap gap-2">
            <a
              href={`tel:${HOTLINE}`}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 px-5 py-3 rounded-full text-sm font-bold transition"
            >
              <Phone size={15} /> Gọi điện
            </a>
            <a
              href={ZALO_URL}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-full text-sm font-bold transition"
            >
              <ZaloIcon size={15} /> Nhắn Zalo
            </a>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-500 to-purple-600 hover:opacity-90 px-5 py-3 rounded-full text-sm font-bold transition"
            >
              <MessengerIcon size={15} /> Messenger
            </a>
          </div>
        </div>

        <div className="bg-stone-950/80 border border-stone-800 rounded-2xl p-6">
          <div className="flex items-start gap-3 mb-4 pb-4 border-b border-stone-800">
            <MapPin size={20} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold mb-1">Khu vực giao hàng</div>
              <div className="text-sm text-stone-400">{SERVICE_AREA}</div>
            </div>
          </div>
          <div className="flex items-start gap-3 mb-4 pb-4 border-b border-stone-800">
            <Clock size={20} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold mb-1">Đặt trước</div>
              <div className="text-sm text-stone-400">3–4 tiếng để bếp chuẩn bị tốt nhất</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-red-500 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold mb-1">Thanh toán</div>
              <div className="text-sm text-stone-400">Tiền mặt / Chuyển khoản / MoMo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
