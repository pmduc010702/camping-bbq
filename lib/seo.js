// SEO setup. Trong Next.js production nên thay bằng `export const metadata` ở layout.
// File này dùng cho Vite/CRA hoặc khi cần inject động.
import { useEffect } from 'react';
import { combos } from '../data/combos';
import { HOTLINE, BRAND } from '../data/settings';

export function useSEO() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${BRAND.name} — Set thịt nướng ship tận nơi | ${BRAND.tagline}`;

    const metaTags = [
      { name: 'description', content: BRAND.description + ' Set từ 199K cho 2 người, 649K cho 4–6 người. Hotline ' + HOTLINE + '.' },
      { name: 'keywords', content: 'camping bbq, set thịt nướng, bbq ship tận nơi, đồ nướng cắm trại, ba chỉ bò mỹ, dẻ sườn bò, lõi vai bò' },
      { property: 'og:title', content: `${BRAND.name} — ${BRAND.tagline}` },
      { property: 'og:description', content: BRAND.description },
      { property: 'og:type', content: 'restaurant.menu' },
      { property: 'og:image', content: 'https://your-domain.com/og-image.jpg' }, // TODO: thay khi deploy
      { property: 'og:locale', content: 'vi_VN' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'theme-color', content: '#0c0a09' },
    ];

    const createdMeta = metaTags.map(({ name, property, content }) => {
      const m = document.createElement('meta');
      if (name) m.name = name;
      if (property) m.setAttribute('property', property);
      m.content = content;
      document.head.appendChild(m);
      return m;
    });

    // Schema.org JSON-LD cho rich snippet trên Google
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: BRAND.name,
      description: BRAND.description,
      telephone: '+84' + HOTLINE.slice(1),
      priceRange: '199.000₫ - 649.000₫',
      servesCuisine: ['BBQ', 'Korean BBQ', 'Vietnamese'],
      hasMenu: {
        '@type': 'Menu',
        hasMenuSection: {
          '@type': 'MenuSection',
          name: 'Combo BBQ',
          hasMenuItem: combos.map((c) => ({
            '@type': 'MenuItem',
            name: c.name,
            description: c.description,
            offers: {
              '@type': 'Offer',
              price: c.price * 1000,
              priceCurrency: 'VND',
            },
          })),
        },
      },
    };
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify(schemaData);
    document.head.appendChild(schemaScript);

    return () => {
      document.title = prevTitle;
      createdMeta.forEach((m) => m.remove());
      schemaScript.remove();
    };
  }, []);
}

// Set background đen cho body/html (khắc phục white default từ artifact/iframe)
export function useDarkBackground() {
  useEffect(() => {
    const prevBodyBg = document.body.style.backgroundColor;
    const prevHtmlBg = document.documentElement.style.backgroundColor;
    document.body.style.backgroundColor = '#0c0a09';
    document.documentElement.style.backgroundColor = '#0c0a09';
    return () => {
      document.body.style.backgroundColor = prevBodyBg;
      document.documentElement.style.backgroundColor = prevHtmlBg;
    };
  }, []);
}
