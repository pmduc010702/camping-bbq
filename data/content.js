// Các nội dung phụ của site.
import { Beef, Clock, Sparkles, Truck } from 'lucide-react';

// ====== ĐỒ ĂN KÈM ======
// Ảnh local: public/images/sides/
export const sideItems = [
  {
    name: 'Rau xà lách',
    image: '/images/sides/rau-xa-lach.png',
  },
  {
    name: 'Dưa leo',
    image: '/images/sides/dua-leo.png',
  },
  {
    name: 'Bắp Mỹ',
    image: '/images/sides/bap-my.png',
  },
  {
    name: 'Đậu bắp',
    image: '/images/sides/dau-bap.png',
  },
  {
    name: 'Nước chấm',
    image: '/images/sides/xot-uop-thit.png',
  },
  {
    name: 'Nước ướp thịt',
    image: '/images/sides/nuoc-cham.png',
  },
];

// Helper: trả về mảng chỉ tên (dùng cho ComboModal hiển thị dạng chip)
export const sideItemNames = sideItems.map((s) => s.name);

// ====== TÍNH NĂNG (Hero bottom bar) ======
export const features = [
  { icon: Beef,      label: 'Thịt cắt dày',         sub: 'theo từng lát – dễ nướng' },
  { icon: Clock,     label: 'Đặt trước 3–4h',       sub: 'để bếp chuẩn bị ngon nhất' },
  { icon: Sparkles,  label: 'Ướp mới mỗi ngày',     sub: 'không hàng đông lạnh' },
  { icon: Truck,     label: 'Ship tận nơi',         sub: 'mở khay là nướng' },
];

// ====== QUY TRÌNH ĐẶT HÀNG (3 bước) ======
export const steps = [
  { num: '01', title: 'ĐẶT QUA ZALO/GỌI', desc: 'Chọn set ưng ý, gọi hoặc nhắn Zalo. Báo địa điểm, giờ giao.' },
  { num: '02', title: 'BẾP CHUẨN BỊ',     desc: 'Thịt được cắt, ướp trong 3–4 tiếng. Đóng khay sạch sẽ.' },
  { num: '03', title: 'MỞ KHAY NƯỚNG',    desc: 'Shipper giao tới nơi. Bạn chỉ việc mở khay, lên vỉ, thưởng thức.' },
];

// ====== CHỮ CHẠY NGANG (Marquee) ======
export const marqueeItems = [
  'THỊT NGON MỖI NGÀY',
  'ƯỚP CHUẨN VỊ',
  'SHIP TẬN NƠI',
  'MỞ KHAY LÀ NƯỚNG',
  'CAMPING BBQ',
];

// ====== GALLERY ẢNH KHÁCH ======
// Thay ảnh bằng cách:
// 1. Đặt file vào public/images/gallery/ (ví dụ: 1.jpg, 2.jpg, ...)
// 2. Đổi mảng dưới đây thành ['/images/gallery/1.jpg', ...]
//
// Hiện đang dùng URL Unsplash làm placeholder để site đẹp ngay.
export const galleryImages = [
  '/images/gallery/glr2.jpg',
  '/images/gallery/glr1.jpg',
  '/images/gallery/glr3.jpg',

];
