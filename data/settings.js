// Cấu hình toàn site.
export const HOTLINE = '0355705327';
export const HOTLINE_DISPLAY = '0355 705 327';
export const ZALO_URL = `https://zalo.me/${HOTLINE}`;

// Link Messenger fanpage Facebook.
// Lấy bằng cách: vào fanpage FB → URL có dạng facebook.com/your-page-name
// → đổi thành 'https://m.me/your-page-name' (m.me là shortcut của Messenger)
// Nếu chưa có fanpage, để '#' — nút Messenger vẫn hiển thị nhưng không mở được.
export const MESSENGER_URL = 'https://www.facebook.com/profile.php?id=61590521873701';

export const BRAND = {
  name: 'CAMPING.BBQ',
  tagline: 'Mở khay là nướng ngay',
  description: 'Set thịt cắt sẵn, ướp chuẩn vị, kèm rau & xốt — ship tận điểm cắm trại, sân vườn, ban công nhà bạn.',

  // Banner Hero — ảnh nền section đầu trang.
  // Đang dùng URL Unsplash placeholder. Thay bằng ảnh thật:
  //   1. Đặt file: public/images/hero/banner.jpg (recommend 1920x1080+, dark/moody)
  //   2. Đổi `heroBanner` thành '/images/hero/banner.jpg'
  // Để null nếu muốn dùng gradient (không ảnh).
  heroBanner: '/images/hero/banner.jpg',
};

export const WORKING_HOURS = '9:00 – 21:00 mỗi ngày';
export const SERVICE_AREA = 'Nội thành & vùng ven – ship 2 chiều';
