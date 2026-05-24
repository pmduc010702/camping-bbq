import React from 'react';
import { Phone } from 'lucide-react';
import { ZaloIcon, MessengerIcon } from '../icons';
import { HOTLINE, ZALO_URL, MESSENGER_URL } from '../data/settings';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex-col gap-3 hidden md:flex">
      <a
        href={`tel:${HOTLINE}`}
        className="relative w-14 h-14 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-2xl shadow-red-900/50 transition group pulse-ring"
        title="Gọi điện"
        aria-label="Gọi điện"
      >
        <Phone size={22} className="text-white" strokeWidth={2.5} />
      </a>
      <a
        href={ZALO_URL}
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-400 flex items-center justify-center shadow-xl transition"
        title="Nhắn Zalo"
        aria-label="Nhắn Zalo"
      >
        <ZaloIcon size={26} className="text-white" />
      </a>
      <a
        href={MESSENGER_URL}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 hover:opacity-90 flex items-center justify-center shadow-xl transition"
        title="Messenger"
        aria-label="Nhắn Messenger"
      >
        <MessengerIcon size={24} className="text-white" />
      </a>
    </div>
  );
}
