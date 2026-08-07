import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const locales = ['tr', 'en', 'ar'];
  
  // Ana sayfalar için sitemap entries
  const pages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr`,
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
  ]);

  // Hizmetler için sitemap entries (gelecekte eklenecek)
  const services = [
    'gider-acma',
    'banyo-tamirat',
    'mutfak-tesisat',
    'acil-tesisat',
    'kombi-bakim',
    'su-kacagi',
    'yerden-isitma',
  ];

  const servicePages = locales.flatMap((locale) =>
    services.map((service) => ({
      url: `${baseUrl}/${locale}/hizmetler/${service}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  // Bölgeler için sitemap entries (Avrupa Yakası)
  const areas = [
    'esenler',
    'bayrampasa',
    'bagcilar',
    'gungoren',
    'merter',
    'gaziosmanpasa',
  ];

  const areaPages = locales.flatMap((locale) =>
    areas.map((area) => ({
      url: `${baseUrl}/${locale}/bolgeler/${area}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // Legal pages için sitemap entries
  const legalPages = [
    'privacy-policy',
    'terms-of-service',
    'faq',
    'cookie-policy',
  ];

  const legalPageEntries = locales.flatMap((locale) =>
    legalPages.map((page) => ({
      url: `${baseUrl}/${locale}/${page}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    }))
  );

  return [...pages, ...servicePages, ...areaPages, ...legalPageEntries];
}
