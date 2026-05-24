# Ảnh — chỗ thả hình vào

Folder này chứa **tất cả ảnh** dùng trong landing page. Thả file vào đây, app sẽ tự load.

## 📁 Cấu trúc khuyến nghị

```
public/images/
├── combos/                    ← Ảnh từng combo
│   ├── set-199.jpg
│   ├── set-249.jpg
│   ├── set-349.jpg
│   └── set-649.jpg
│
├── gallery/                   ← Ảnh khách đã trải nghiệm
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   ├── 4.jpg
│   ├── 5.jpg
│   └── 6.jpg
│
└── hero/                      ← Banner / ảnh nền (chưa dùng, dự phòng)
    └── og-image.jpg           ← ảnh khi share Facebook (1200x630px)
```

## 📐 Kích thước đề xuất

| Loại | Kích thước | Tỉ lệ | Lý do |
|---|---|---|---|
| Combo card | 800 × 600px | 4:3 | Vừa với card, không quá nặng |
| Gallery (ảnh đầu lớn) | 1200 × 1200px | 1:1 | Card đầu chiếm 2x2 ô |
| Gallery (ảnh thường) | 600 × 600px | 1:1 | Card vuông |
| OG image | 1200 × 630px | 1.91:1 | Chuẩn Facebook/Twitter share |

## 💡 Optimize ảnh trước khi upload

- Chuyển sang **WebP** nếu được (giảm 30–50% size)
- Hoặc JPG quality 80–85%
- Giữ mỗi ảnh **dưới 200KB**
- Tool free: [squoosh.app](https://squoosh.app/), [tinypng.com](https://tinypng.com/)

## 🔗 Cách reference trong code

Trong các file `data/`, dùng đường dẫn bắt đầu từ `/`:

```js
// data/combos.js
{
  id: 'set-199',
  // ...
  image: '/images/combos/set-199.jpg',   // ← path bắt đầu từ /
}

// data/content.js
export const galleryImages = [
  '/images/gallery/1.jpg',
  '/images/gallery/2.jpg',
  // ...
];
```

**Vite tự serve folder `public/` ra root**, nên `/images/combos/set-199.jpg` trong code = `public/images/combos/set-199.jpg` trên ổ đĩa.

## 🚫 KHÔNG nên

- ❌ Không đặt ảnh trong `src/` (Vite sẽ bundle vào JS — không tối ưu)
- ❌ Không đặt tên có dấu tiếng Việt hoặc khoảng trắng (`thịt nướng.jpg` ❌ → `thit-nuong.jpg` ✅)
- ❌ Không upload file PSD/RAW (chỉ JPG/PNG/WebP)
