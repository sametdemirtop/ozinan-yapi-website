import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { locales } from '@/lib/i18n-config';
import { buildLanguageAlternates, lastModifiedFor } from '@/lib/seo';

const INDEXED_PATHS = [
  '',
  'hakkimizda',
  'hizmetler',
  'bolgeler',
  'iletisim',
  'faq',
  'privacy-policy',
  'terms-of-service',
  'cookie-policy',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXED_PATHS.flatMap((path) =>
    locales.map((locale) => {
      const url = path
        ? `${SITE_URL}/${locale}/${path}`
        : `${SITE_URL}/${locale}`;

      return {
        url,
        lastModified: lastModifiedFor(path),
        changeFrequency: path === '' ? ('weekly' as const) : ('monthly' as const),
        priority: path === '' ? 1 : path === 'hizmetler' || path === 'iletisim' ? 0.9 : 0.8,
        alternates: {
          languages: buildLanguageAlternates(path),
        },
      };
    })
  );
}
