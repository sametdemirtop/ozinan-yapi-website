import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';
import { locales, type Locale } from '@/lib/i18n-config';

/**
 * Real content revision dates per path (no locale prefix).
 * Bump a date only when that page’s content/metadata meaningfully changes.
 * Do not set to “today” on every deploy.
 */
export const PAGE_LAST_MODIFIED: Record<string, string> = {
  '': '2026-08-08',
  hakkimizda: '2026-08-08',
  hizmetler: '2026-08-08',
  bolgeler: '2026-08-08',
  iletisim: '2026-08-08',
  faq: '2026-03-01',
  'privacy-policy': '2026-01-15',
  'terms-of-service': '2026-01-15',
  'cookie-policy': '2026-01-15',
};

export function lastModifiedFor(path: string): Date {
  const key = path.replace(/^\/+|\/+$/g, '');
  const iso = PAGE_LAST_MODIFIED[key] ?? PAGE_LAST_MODIFIED[''];
  return new Date(`${iso}T12:00:00+03:00`);
}

/** Absolute path for a locale + path segment (no leading slash on path). */
export function localizedUrl(locale: string, path = ''): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${SITE_URL}/${locale}/${clean}` : `${SITE_URL}/${locale}`;
}

export function buildLanguageAlternates(path = ''): Record<string, string> {
  const clean = path.replace(/^\/+|\/+$/g, '');
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = localizedUrl(locale, clean);
  }
  languages['x-default'] = localizedUrl('tr', clean);
  return languages;
}

type PageMetaInput = {
  locale: string;
  path: string;
  title: string;
  description: string;
  ogImageAlt?: string;
  /** When true, bypass layout title template (use for homepage brand title). */
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  ogImageAlt = 'Öz İnan Yapı Malzemeleri',
  absoluteTitle = false,
}: PageMetaInput): Metadata {
  const url = localizedUrl(locale, path);
  const ogLocale =
    locale === 'tr' ? 'tr_TR' : locale === 'en' ? 'en_US' : 'ar_SA';

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates(path),
    },
    openGraph: {
      type: 'website',
      locale: ogLocale,
      url,
      siteName: 'Öz İnan Yapı Malzemeleri',
      title,
      description,
      images: [
        {
          url: `${SITE_URL}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
