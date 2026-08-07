export const locales = ['tr', 'en', 'ar'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
  ar: 'العربية'
};

export const localeFlags: Record<Locale, string> = {
  tr: '🇹🇷',
  en: '🇬🇧',
  ar: '🇸🇦'
};

// RTL (Right-to-Left) dilleri
export const rtlLocales: Locale[] = ['ar'];

export const isRTL = (locale: Locale): boolean => {
  return rtlLocales.includes(locale);
};

export const defaultLocale: Locale = 'tr';
