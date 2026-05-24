// Giá lẻ từng loại thịt (200g/phần).
// Ảnh đang dùng URL Unsplash làm placeholder.
// Khi có ảnh thật, đặt vào public/images/meats/ và đổi `image` thành '/images/meats/...'

export const individualMeats = [
  {
    id: 'ba-chi-heo',
    name: 'Ba chỉ heo',
    price: 55,
    weight: '200g',
    tag: 'PHỔ THÔNG',
    description: 'Lát dày, mỡ nạc xen đều, nướng vàng rộm.',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80',
  },
  {
    id: 'de-suon-bo',
    name: 'Dẻ sườn bò',
    price: 75,
    weight: '200g',
    tag: 'BÁN CHẠY',
    description: 'Phần thịt mềm sát xương, ngọt tự nhiên.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
  },
  {
    id: 'ba-chi-bo-my',
    name: 'Ba chỉ bò Mỹ',
    price: 95,
    weight: '200g',
    tag: 'CAO CẤP',
    description: 'Vân mỡ marble đẹp, mềm tan trong miệng.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQIUnDIWkNO7YYzuMJMfQfBzx9DuTrWicaw&s?w=600&q=80',
  },
  {
    id: 'loi-vai-bo',
    name: 'Lõi vai bò',
    price: 125,
    weight: '200g',
    tag: 'PREMIUM',
    description: 'Phần thịt cao cấp, vị đậm, không dai.',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=600&q=80',
  },
];
