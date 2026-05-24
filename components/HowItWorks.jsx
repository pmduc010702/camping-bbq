import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { steps } from '../data/content';

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 md:py-28 px-5 md:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-700/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-14 text-center">
          <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— QUY TRÌNH</div>
          <h2 className="font-display font-black text-4xl md:text-6xl">
            Đặt như thế nào?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-stone-950 border border-stone-800 rounded-2xl p-7 h-full hover:border-red-500/40 transition">
                <div className="font-display font-black text-5xl text-red-500/80 mb-4">{step.num}</div>
                <div className="font-display font-bold text-lg mb-2">{step.title}</div>
                <p className="text-sm text-stone-400 leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={28} className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-red-500/40 z-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-2xl mx-auto bg-red-950/30 border border-red-900/40 rounded-xl px-5 py-4 flex items-start gap-3">
          <Clock size={18} className="text-red-400 shrink-0 mt-0.5" />
          <div className="text-sm text-stone-300">
            <strong className="text-white">Lưu ý:</strong> vui lòng đặt trước <strong className="text-red-300">3–4 tiếng</strong> để bếp ướp thịt đúng vị. Nếu chưa dùng ngay, bảo quản ngăn mát <strong>0–4°C</strong>.
          </div>
        </div>
      </div>
    </section>
  );
}
