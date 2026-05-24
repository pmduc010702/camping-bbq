// Cấu hình toàn site. Sau khi có Supabase, file này thay bằng query từ bảng `site_settings`.
export const HOTLINE = '0355705327';
export const HOTLINE_DISPLAY = '0355 705 327';
export const ZALO_URL = `https://zalo.me/${HOTLINE}`;

// Link Messenger fanpage Facebook.
// Lấy bằng cách: vào fanpage FB → URL có dạng facebook.com/your-page-name
// → đổi thành 'https://m.me/your-page-name' (m.me là shortcut của Messenger)
// Nếu chưa có fanpage, để '#' — nút Messenger sẽ vẫn hiển thị nhưng không mở được.
export const MESSENGER_URL = '#';

export const BRAND = {
  name: 'CAMPING.BBQ',
  tagline: 'Mở khay là nướng ngay',
  description: 'Set thịt tươi cắt sẵn, ướp chuẩn vị, kèm rau & xốt — ship tận điểm cắm trại, sân vườn, ban công nhà bạn.',
};

export const WORKING_HOURS = '9:00 – 21:00 mỗi ngày';
export const SERVICE_AREA = 'Nội thành & vùng ven – ship 2 chiều';
