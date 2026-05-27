import React, { useState, useEffect } from 'react';
import { Phone, Flame, Menu as MenuIcon, X } from 'lucide-react';
import { ZaloIcon, MessengerIcon } from '../icons';
import { HOTLINE, HOTLINE_DISPLAY, ZALO_URL, MESSENGER_URL, BRAND } from '../data/settings';
import { socials } from '../data/socials';
import Logo from './Logo';

const navLinks = [
  { href: '#menu',    label: 'Combo' },
  { href: '#prices',  label: 'Giá lẻ' },
  { href: '#process', label: 'Quy trình' },
  { href: '#about',   label: 'Về tụi mình' },
  { href: '#order',   label: 'Đặt ngay' },
  { href: '#gallery', label: 'Gallery' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-stone-950/80 border-b border-stone-800/50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between gap-3">
          <Logo size="lg" />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-300">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-red-400 transition">{l.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${HOTLINE}`}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-full text-xs md:text-sm font-bold"
            >
              <Phone size={14} strokeWidth={2.5} />
              <span className="hidden sm:inline">{HOTLINE_DISPLAY}</span>
              <span className="sm:hidden">Gọi</span>
            </a>

            {/* Hamburger - chỉ hiện trên mobile */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800 transition"
              aria-label="Mở menu"
            >
              <MenuIcon size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

function MobileDrawer({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm fade-in"
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div className="absolute top-0 right-0 bottom-0 w-[85vw] max-w-sm bg-stone-950 border-l border-stone-800 flex flex-col slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logo.jpg"
              alt="Camping BBQ"
              className="h-10 w-10 object-contain rounded-md"
            />
            <span className="font-display font-black text-sm tracking-tight">
              CAMPING<span className="text-red-500">.</span>BBQ
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-stone-900 hover:bg-stone-800 border border-stone-800 flex items-center justify-center transition"
            aria-label="Đóng menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col px-6 py-6 gap-1 overflow-y-auto">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 -mx-3 rounded-lg text-base font-bold text-stone-200 hover:bg-stone-900 hover:text-red-400 transition group"
            >
              <span>{l.label}</span>
              <span className="text-stone-600 group-hover:text-red-400 transition">→</span>
            </a>
          ))}
        </nav>

        {/* Bottom area: hotline + contact + social */}
        <div className="border-t border-stone-800 px-6 py-5">
          <div className="text-[10px] font-bold tracking-[0.2em] text-stone-500 mb-2">HOTLINE</div>
          <a
            href={`tel:${HOTLINE}`}
            onClick={onClose}
            className="block font-display font-black text-2xl text-red-400 mb-4"
          >
            {HOTLINE_DISPLAY}
          </a>

          <div className="grid grid-cols-3 gap-2 mb-5">
            <a
              href={`tel:${HOTLINE}`}
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 bg-red-600 px-2 py-2.5 rounded-full text-xs font-bold"
            >
              <Phone size={13} strokeWidth={2.5} /> Gọi
            </a>
            <a
              href={ZALO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-blue-600 px-2 py-2.5 rounded-full text-xs font-bold"
            >
              <ZaloIcon size={13} /> Zalo
            </a>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-gradient-to-br from-blue-500 to-purple-600 px-2 py-2.5 rounded-full text-xs font-bold"
            >
              <MessengerIcon size={13} /> FB
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-stone-800/50">
            <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500">FOLLOW</span>
            <div className="flex gap-3 text-stone-400">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label={s.name}>
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
