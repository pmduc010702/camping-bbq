import React from 'react';
import { Beef, Flame, Package } from 'lucide-react';

const principles = [
  {
    icon: Beef,
    title: 'Tươi mỗi ngày',
    desc: 'Nhập sáng, ướp trưa, ship chiều. Không có thịt qua đêm hay đông lạnh lâu ngày.',
  },
  {
    icon: Flame,
    title: 'Công thức riêng',
    desc: 'Xốt ướp pha theo công thức Hàn-Việt 15 năm kinh nghiệm — không có ở chỗ khác.',
  },
  {
    icon: Package,
    title: 'Mở khay là nướng',
    desc: 'Đóng gói chuẩn theo từng loại, không cần sơ chế. Mở khay lên vỉ trong 30 giây.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-5 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-700/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-700/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Visual quote card */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-900 via-red-900 to-stone-950 order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80"
              alt="Bếp Camping BBQ"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 grain opacity-30" />

            <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
              <div className="text-[10px] font-bold tracking-[0.3em] text-red-300">— TỪ BẾP TỤI MÌNH</div>
              <Flame size={20} className="text-red-400 flicker" />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <div className="font-display font-black text-2xl md:text-3xl text-white leading-tight mb-3 drop-shadow-lg">
                "Mở khay ra là nướng được — không hơn, không kém."
              </div>
              <div className="text-xs text-stone-300">— Chị Hằng, bếp trưởng</div>
            </div>
          </div>

          {/* Right: Story + principles */}
          <div className="order-1 md:order-2">
            <div className="text-xs font-bold tracking-[0.3em] text-red-500 mb-3">— VỀ TỤI MÌNH</div>
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-none mb-6">
              Từ team mê<br />
              <span className="text-stone-500 italic font-light">cắm trại.</span>
            </h2>

            <div className="space-y-4 text-stone-300 mb-8 leading-relaxed text-[15px]">
              <p>
                Tụi mình bắt đầu Camping BBQ từ chính những đêm cắm trại ăn nướng với bạn bè ở Bà Nà, Sơn Trà.
              </p>
              <p>
                Chuyện thường: rủ nhau đi nướng, đến nơi mới phát hiện thịt khô, ướp không thấm, hoặc thiếu loại này loại kia. Cuộc vui không trọn vẹn.
              </p>
              <p className="text-stone-200">
                Tụi mình quyết định làm 1 shop chuyên cho dân cắm trại + tiệc tại nhà — <strong className="text-white">tươi, ướp đúng vị, đóng khay sẵn</strong>.
              </p>
            </div>

            {/* Principles */}
            <div className="grid sm:grid-cols-3 gap-3">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="bg-stone-950/60 border border-stone-800 rounded-xl p-4 hover:border-red-500/40 transition"
                >
                  <p.icon size={22} className="text-red-500 mb-2.5" strokeWidth={2} />
                  <div className="font-bold text-sm mb-1.5">{p.title}</div>
                  <p className="text-xs text-stone-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
