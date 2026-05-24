// Schema.org JSON-LD + dark background helper.
// Meta tags chính (title, description, og:*) đã có sẵn trong index.html.
// File này chỉ inject thêm Schema.org JSON-LD động dựa trên data combos.
import { useEffect } from 'react';
import { combos } from '../data/combos';
import { HOTLINE, BRAND } from '../data/settings';

export function useSEO() {
  useEffect(() => {
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
      schemaScript.remove();
    };
  }, []);
}

// Set background đen cho body/html (khắc phục white default từ iframe/embeds)
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
