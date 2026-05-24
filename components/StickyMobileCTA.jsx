import React from 'react';
import { Phone } from 'lucide-react';
import { ZaloIcon } from '../icons';
import { HOTLINE, ZALO_URL } from '../data/settings';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-stone-950/95 backdrop-blur-lg border-t border-stone-800 px-4 py-3 grid grid-cols-2 gap-2">
        <a
          href={`tel:${HOTLINE}`}
          className="flex items-center justify-center gap-2 bg-red-600 active:bg-red-700 px-4 py-3 rounded-full font-bold text-sm shadow-lg shadow-red-900/40"
        >
          <Phone size={16} strokeWidth={2.5} />
          Gọi đặt
        </a>
        <a
          href={ZALO_URL}
          className="flex items-center justify-center gap-2 bg-blue-600 active:bg-blue-700 px-4 py-3 rounded-full font-bold text-sm shadow-lg shadow-blue-900/40"
        >
          <ZaloIcon size={16} />
          Nhắn Zalo
        </a>
      </div>
    </div>
  );
}
