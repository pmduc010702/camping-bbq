import React from 'react';
import { Phone } from 'lucide-react';
import { ZaloIcon, MessengerIcon } from '../icons';
import { HOTLINE, ZALO_URL, MESSENGER_URL } from '../data/settings';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-stone-950/95 backdrop-blur-lg border-t border-stone-800 px-3 py-3 grid grid-cols-3 gap-2">
        <a
          href={`tel:${HOTLINE}`}
          className="flex items-center justify-center gap-1.5 bg-red-600 active:bg-red-700 px-2 py-3 rounded-full font-bold text-xs shadow-lg shadow-red-900/40"
        >
          <Phone size={15} strokeWidth={2.5} />
          Gọi
        </a>
        <a
          href={ZALO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-blue-600 active:bg-blue-700 px-2 py-3 rounded-full font-bold text-xs shadow-lg shadow-blue-900/40"
        >
          <ZaloIcon size={14} />
          Zalo
        </a>
        <a
          href={MESSENGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 bg-gradient-to-br from-blue-500 to-purple-600 active:opacity-90 px-2 py-3 rounded-full font-bold text-xs shadow-lg shadow-purple-900/40"
        >
          <MessengerIcon size={14} />
          Fanpage
        </a>
      </div>
    </div>
  );
}
