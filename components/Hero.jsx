import React from 'react';
import { Phone, Sparkles, ArrowRight } from 'lucide-react';
import { HOTLINE, HOTLINE_DISPLAY, BRAND } from '../data/settings';
import { features } from '../data/content';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      
      {/* Banner background image */}
      {BRAND.heroBanner && (
        <div className="absolute inset-0 z-0">
          <img
            src={BRAND.heroBanner}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09] via-[#0c0a09]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/40 via-transparent to-[#0c0a09]" />
        </div>
      )}

      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-700/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[140px]" />
        <div className="absolute inset-0 grain opacity-40" />
      </div>

      {/* Smoke decoration */}
      {!BRAND.heroBanner && (
        <svg
          className="absolute top-20 right-10 w-64 h-64 opacity-10 hidden lg:block z-0"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path
            d="M30 180 Q 40 120, 80 110 Q 130 100, 120 50 Q 110 20, 150 30"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M60 180 Q 70 130, 100 120 Q 140 110, 140 70 Q 140 40, 170 50"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 w-full relative z-10">
        
        <div className="fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-600/10 border border-red-600/30 rounded-full mb-6">
            <Sparkles size={13} className="text-red-400" />
            <span className="text-xs font-bold tracking-wider text-red-300">
              CAMP BBQ • SHIP TẬN NƠI
            </span>
          </div>
        </div>

        <h1
          className="font-display font-black text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.85] mb-6 md:mb-8 fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="block">MỞ KHAY</span>
          <span className="block text-red-500">LÀ NƯỚNG</span>
          <span className="block italic font-light text-stone-400 text-[12vw] md:text-[8vw] lg:text-[7vw]">
            ngay.
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-end">
          <p
            className="text-base md:text-xl text-stone-300 max-w-md leading-relaxed fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            {BRAND.description}
          </p>

          <div
            className="flex flex-wrap gap-3 md:justify-end fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 px-6 py-3.5 rounded-full font-bold transition"
            >
              Xem Menu
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </a>

            <a
              href={`tel:${HOTLINE}`}
              className="inline-flex items-center gap-2 border border-stone-600 hover:border-stone-400 px-6 py-3.5 rounded-full font-bold transition"
            >
              <Phone size={16} />
              {HOTLINE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Features bar */}
        <div
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 border-t border-stone-800 pt-8 fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          {features.map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon
                size={20}
                className="text-red-500 mt-0.5 shrink-0"
                strokeWidth={2}
              />
              <div>
                <div className="font-bold text-sm">{f.label}</div>
                <div className="text-xs text-stone-500">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}