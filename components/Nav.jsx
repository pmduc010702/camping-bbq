import React from 'react';
import { Phone, Flame } from 'lucide-react';
import { HOTLINE, HOTLINE_DISPLAY, BRAND } from '../data/settings';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-stone-950/80 border-b border-stone-800/50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame size={22} className="text-red-500 flicker" strokeWidth={2.5} />
          <span className="font-display font-black text-base md:text-lg tracking-tight">
            {BRAND.name.split('.')[0]}<span className="text-red-500">.</span>{BRAND.name.split('.')[1]}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-300">
          <a href="#menu" className="hover:text-red-400 transition">Menu</a>
          <a href="#process" className="hover:text-red-400 transition">Quy trình</a>
          <a href="#order" className="hover:text-red-400 transition">Đặt ngay</a>
          <a href="#gallery" className="hover:text-red-400 transition">Gallery</a>
          <a href="#social" className="hover:text-red-400 transition">Mạng xã hội</a>
        </div>

        <a
          href={`tel:${HOTLINE}`}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-full text-xs md:text-sm font-bold"
        >
          <Phone size={14} strokeWidth={2.5} />
          <span className="hidden sm:inline">{HOTLINE_DISPLAY}</span>
          <span className="sm:hidden">Gọi</span>
        </a>
      </div>
    </nav>
  );
}
