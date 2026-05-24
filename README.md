# Camping BBQ — Landing Page

Landing page bán set BBQ với form đặt hàng auto-format qua Zalo/SMS.

## 🚀 Chạy ngay (2 lệnh)

```bash
npm install
npm run dev
```

Mở http://localhost:5173 — xong.

Để build production: `npm run build` → folder `dist/` deploy lên Vercel/Netlify/bất kỳ static host nào.

---

## ✏️ Edit nội dung

Tất cả nội dung đều ở folder `data/`. Sửa file → save → browser tự reload.

| Muốn đổi | Sửa file |
|---|---|
| Hotline, tagline, mô tả thương hiệu | `data/settings.js` |
| Combo (tên, giá, thành phần) | `data/combos.js` |
| Đánh giá khách | `data/reviews.js` |
| Câu hỏi FAQ | `data/faqs.js` |
| Đồ ăn kèm, quy trình, marquee, ảnh gallery | `data/content.js` |
| Link MXH (Facebook, TikTok, Instagram, YouTube) | `data/socials.js` |

## 🖼 Thêm ảnh

Có folder sẵn cho bạn — chỉ cần thả file ảnh vào:

```
public/images/
├── combos/         ← Ảnh cho từng combo
├── gallery/        ← Ảnh khách đã trải nghiệm
└── hero/           ← Banner, OG image
```

**Ví dụ**: muốn thêm ảnh cho set 199K
1. Đặt file ảnh: `public/images/combos/set-199.jpg`
2. Sửa `data/combos.js`, tìm dòng:
   ```js
   image: null, // → '/images/combos/set-199.jpg' khi có ảnh
   ```
3. Đổi thành:
   ```js
   image: '/images/combos/set-199.jpg',
   ```
4. Save → browser auto-reload, ảnh hiện ra trên card combo

Đọc thêm `public/images/README.md` để biết kích thước đề xuất, cách optimize.

## 📁 Cấu trúc

```
camping-bbq/
├── package.json
├── index.html                 # Vite entry
├── main.jsx                   # React mount
├── App.jsx                    # Root component
├── styles.css                 # Fonts + animations + Tailwind
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
│
├── public/
│   └── images/                ← THẢ ẢNH VÀO ĐÂY
│       ├── combos/
│       ├── gallery/
│       └── hero/
│
├── data/                      ← edit nội dung tại đây
│   ├── settings.js
│   ├── combos.js
│   ├── reviews.js
│   ├── faqs.js
│   ├── content.js
│   └── socials.js
│
├── icons/
│   └── index.jsx              # TikTok, Zalo, Messenger SVG
│
├── lib/
│   └── seo.js                 # SEO meta tags + Schema.org
│
└── components/                # 17 component files (1 file/component)
    ├── Nav.jsx
    ├── Hero.jsx
    ├── Marquee.jsx
    ├── MenuSection.jsx
    ├── ComboCard.jsx
    ├── ComboModal.jsx
    ├── SidesSection.jsx
    ├── HowItWorks.jsx
    ├── OrderForm.jsx
    ├── OrderSuccessModal.jsx
    ├── Reviews.jsx
    ├── Gallery.jsx
    ├── FAQ.jsx
    ├── SocialSection.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    ├── FloatingButtons.jsx    # desktop only
    └── StickyMobileCTA.jsx    # mobile only
```

## 🎨 Đổi màu chủ đạo

Tông hiện tại: đen than (#0c0a09) + lửa đỏ (Tailwind `red-500/600`).

Đổi sang xanh lá:
- Search trong folder `components/`: `red-500` → `green-500`, `red-600` → `green-600`, `red-700` → `green-700`...
- Hoặc search `bg-red-` → `bg-green-`, `text-red-` → `text-green-`
- Tổng cộng ~30 chỗ, không nhiều

## 📦 Order Form flow

Khi khách submit form đặt hàng:
1. Build tin nhắn đẹp với emoji + format (tên, SĐT, combo, ngày giờ, địa chỉ, ghi chú)
2. Mở modal "Tin nhắn đã sẵn sàng"
3. Khách chọn 1 trong 3 cách gửi:
   - **Zalo** — tự copy clipboard + mở `zalo.me/{hotline}`
   - **SMS** — deeplink `sms:` với body encoded
   - **Chỉ copy** — paste đi đâu cũng được (Messenger, Telegram...)

Không cần backend.

## 🚢 Deploy

**Vercel** (recommend):
```bash
npm i -g vercel
vercel
```

**Netlify**:
- Drag folder `dist/` (sau khi `npm run build`) vào netlify.com/drop
- Hoặc kết nối git repo

**Domain** `.com` / `.vn` — point DNS về Vercel/Netlify là xong.

## 🛠 Dependencies

- `react` ^18 — UI library
- `lucide-react` — icon pack
- `tailwindcss` ^3 — styling
- `vite` — dev server + bundler

Chỉ 4 dep, gọn. Không có thêm gì khác.
