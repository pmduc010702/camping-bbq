// Các nội dung phụ của site.
import { Beef, Clock, Snowflake, Truck } from 'lucide-react';

// ====== ĐỒ ĂN KÈM ======
export const sideItems = [
  'Rau xà lách', 'Dưa leo', 'Bắp Mỹ', 'Đậu bắp', 'Xốt ướp thịt', 'Nước chấm'
];

// ====== TÍNH NĂNG (Hero bottom bar) ======
export const features = [
  { icon: Beef,      label: 'Thịt cắt dày',     sub: 'theo từng lát – dễ nướng' },
  { icon: Clock,     label: 'Đặt trước 3–4h',   sub: 'để bếp chuẩn bị ngon nhất' },
  { icon: Snowflake, label: 'Bảo quản 0–4°C',   sub: 'nếu chưa dùng ngay' },
  { icon: Truck,     label: 'Ship tận nơi',     sub: 'mở khay là nướng' },
];

// ====== QUY TRÌNH ĐẶT HÀNG (3 bước) ======
export const steps = [
  { num: '01', title: 'ĐẶT QUA ZALO/GỌI', desc: 'Chọn set ưng ý, gọi hoặc nhắn Zalo. Báo địa điểm, giờ giao.' },
  { num: '02', title: 'BẾP CHUẨN BỊ',     desc: 'Thịt được cắt, ướp tươi trong 3–4 tiếng. Đóng khay sạch sẽ.' },
  { num: '03', title: 'MỞ KHAY NƯỚNG',    desc: 'Shipper giao tới nơi. Bạn chỉ việc mở khay, lên vỉ, thưởng thức.' },
];

// ====== CHỮ CHẠY NGANG (Marquee) ======
export const marqueeItems = [
  'THỊT TƯƠI MỖI NGÀY',
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
  'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
  'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80',
  'https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80',
  'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
  'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=800&q=80',
];
