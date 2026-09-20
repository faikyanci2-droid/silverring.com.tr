import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { routes } from './src/i18n/config.ts';

// Canlıya alırken kendi alan adınızla değiştirin.
const SITE = 'https://www.silverring.com.tr';

const routeList = Object.values(routes);

// TR ve EN yolları tamamen farklı kelimeler olduğundan (ör. /kurumsal ↔ /en/corporate),
// @astrojs/sitemap'in otomatik i18n eşleştirmesi bunları eşleyemiyor. Bu yüzden
// sitemap girdilerindeki hreflang bağlantılarını kendi `routes` haritamızdan üretiyoruz.
function findRoute(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routeList.find((r) => {
    const tr = r.tr.replace(/\/+$/, '') || '/';
    const en = r.en.replace(/\/+$/, '') || '/';
    return tr === clean || en === clean;
  });
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      serialize(item) {
        const { pathname } = new URL(item.url);
        const match = findRoute(pathname);
        if (!match) return item;

        const trUrl = new URL(match.tr, SITE).href;
        const enUrl = new URL(match.en, SITE).href;
        const isEn = enUrl.replace(/\/+$/, '') === item.url.replace(/\/+$/, '');

        return {
          ...item,
          // Kanonik etiketle birebir aynı olsun diye sitemap URL'sini de routes haritasından üretiyoruz.
          url: isEn ? enUrl : trUrl,
          links: [
            { lang: 'tr-TR', url: trUrl },
            { lang: 'en-US', url: enUrl },
            { lang: 'x-default', url: trUrl },
          ],
        };
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
