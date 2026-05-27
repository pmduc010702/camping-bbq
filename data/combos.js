// 4 combo BBQ.
// Ảnh đang dùng URL Unsplash làm placeholder (chụp BBQ chung).
// Khi có ảnh chụp combo thật, đặt file vào public/images/combos/
// rồi đổi `image` thành '/images/combos/set-XXX.jpg'.

export const combos = [
  {
    id: 'set-199',
    price: 199,
    name: 'Set 199K',
    totalWeight: '600g thịt',
    serving: '2 người',
    tag: 'KHỞI ĐỘNG',
    description: 'Set vừa đủ cho cặp đôi hoặc 2 người bạn rủ nhau lên rẫy.',
    items: [
      { name: 'Ba chỉ heo', weight: '200g' },
      { name: 'Dẻ sườn bò', weight: '200g' },
      { name: 'Ba chỉ bò Mỹ', weight: '200g' },
    ],
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    gradient: 'from-amber-700 via-orange-700 to-red-800',
    isPopular: false,
  },
  {
    id: 'set-249',
    price: 249,
    name: 'Set 249K',
    totalWeight: '600g thịt',
    serving: '2 người',
    tag: 'NÂNG CẤP',
    description: 'Cùng số lượng nhưng full bò — dành cho team mê bò Mỹ.',
    items: [
      { name: 'Dẻ sườn bò', weight: '200g' },
      { name: 'Ba chỉ bò Mỹ', weight: '200g' },
      { name: 'Lõi vai bò', weight: '200g' },
    ],
    image: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=800&q=80',
    gradient: 'from-red-700 via-rose-800 to-zinc-900',
    isPopular: false,
  },
  {
    id: 'set-349',
    price: 349,
    name: 'Set 349K',
    totalWeight: '1KG thịt',
    serving: '3–4 người',
    tag: 'BÁN CHẠY',
    isPopular: true,
    description: 'Combo "không phải nghĩ" — đủ loại, đủ lượng cho nhóm 4 người.',
    items: [
      { name: 'Ba chỉ heo', weight: '400g' },
      { name: 'Dẻ sườn bò', weight: '200g' },
      { name: 'Ba chỉ bò Mỹ', weight: '200g' },
      { name: 'Lõi vai bò', weight: '200g' },
    ],
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80',
    gradient: 'from-orange-600 via-red-700 to-red-900',
  },
  {
    id: 'set-649',
    price: 649,
    name: 'Set 649K',
    totalWeight: '1.6KG thịt',
    serving: '4–6 người',
    tag: 'GIA ĐÌNH',
    description: 'Đủ lớn cho team đông, tiệc cuối tuần hoặc cắm trại qua đêm.',
    items: [
      { name: 'Ba chỉ heo', weight: '400g' },
      { name: 'Dẻ sườn bò', weight: '400g' },
      { name: 'Ba chỉ bò Mỹ', weight: '400g' },
      { name: 'Lõi vai bò', weight: '400g' },
    ],
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=800&q=80',
    gradient: 'from-red-800 via-zinc-800 to-zinc-950',
    isPopular: false,
  },
];
