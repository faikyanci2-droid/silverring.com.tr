export const languages = ['tr', 'en'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'tr';

export const langNames: Record<Lang, string> = {
  tr: 'Türkçe',
  en: 'English',
};

/**
 * Her sayfa için rota anahtarı → dile göre yol eşlemesi.
 * Dil değiştirici ve navigasyon buradan beslenir.
 */
export const routes = {
  home: { tr: '/', en: '/en/' },
  corporate: { tr: '/kurumsal', en: '/en/corporate' },
  products: { tr: '/urunler', en: '/en/products' },
  catalog: { tr: '/katalog', en: '/en/catalog' },
  services: { tr: '/teknik-hizmetler', en: '/en/technical-services' },
  quality: { tr: '/kalite', en: '/en/quality' },
  news: { tr: '/haberler', en: '/en/news' },
  responsibility: { tr: '/sosyal-sorumluluk', en: '/en/social-responsibility' },
  careers: { tr: '/kariyer', en: '/en/careers' },
  contact: { tr: '/iletisim', en: '/en/contact' },
  privacy: { tr: '/gizlilik-politikasi', en: '/en/privacy-policy' },
  kvkk: { tr: '/kvkk-aydinlatma-metni', en: '/en/kvkk-disclosure' },
  cookies: { tr: '/cerez-politikasi', en: '/en/cookie-policy' },
} as const;

export type RouteKey = keyof typeof routes;

export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  return seg === 'en' ? 'en' : 'tr';
}

/** Belirli bir rota anahtarının verilen dildeki yolunu döndürür. */
export function localizedPath(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}

/** Aynı sayfanın diğer dildeki karşılığını döndürür (dil değiştirici için). */
export function alternatePath(key: RouteKey, target: Lang): string {
  return routes[key][target];
}
