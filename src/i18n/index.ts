import tr, { type SiteContent } from './tr';
import en from './en';
import { type Lang } from './config';

const dictionaries: Record<Lang, SiteContent> = { tr, en };

/** Verilen dil için tüm site içeriğini döndürür. */
export function useContent(lang: Lang): SiteContent {
  return dictionaries[lang];
}

export type { SiteContent };
export * from './config';
