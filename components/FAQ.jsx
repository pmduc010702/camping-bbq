import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/faqs';
import { HOTLINE, ZALO_URL, MESSENGER_URL } from '../data/settings';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-20 md:py-28 px-5 md:px-8 bg-stone-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— CÂU HỎI THƯỜNG GẶP</div>
          <h2 className="font-display font-black text-4xl md:text-5xl">
            Hỏi đáp nhanh.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`border rounded-xl transition-all ${
                  isOpen ? 'bg-stone-950 border-red-600/40' : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between text-left p-5 gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-bold text-sm md:text-base ${isOpen ? 'text-white' : 'text-stone-200'}`}>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform ${isOpen ? 'rotate-180 text-red-500' : 'text-stone-500'}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? '300px' : '0' }}
                >
                  <p className="px-5 pb-5 text-sm text-stone-400 leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-stone-400">
          Không thấy câu trả lời?{' '}
          <a href={`tel:${HOTLINE}`} className="text-red-400 hover:text-red-300 font-bold">
            Gọi tụi mình
          </a>
          ,{' '}
          <a href={ZALO_URL} className="text-red-400 hover:text-red-300 font-bold">
            nhắn Zalo
          </a>{' '}
          hoặc{' '}
          <a href={MESSENGER_URL} className="text-red-400 hover:text-red-300 font-bold">
            Messenger
          </a>
          .
        </div>
      </div>
    </section>
  );
}
