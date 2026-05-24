import React from 'react';
import { Flame } from 'lucide-react';
import { socials } from '../data/socials';
import { BRAND } from '../data/settings';

export default function Footer() {
  return (
    <footer className="border-t border-stone-800 py-10 px-5 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Flame size={18} className="text-red-500" />
          <span className="font-display font-black text-sm">
            {BRAND.name.split('.')[0]}<span className="text-red-500">.</span>{BRAND.name.split('.')[1]}
          </span>
        </div>
        <div className="text-xs text-stone-500">
          © {new Date().getFullYear()} Camping BBQ. {BRAND.tagline}.
        </div>
        <div className="flex gap-3 text-stone-400">
          {socials.map((s) => (
            <a key={s.name} href={s.url} className="hover:text-white transition" aria-label={s.name}>
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
