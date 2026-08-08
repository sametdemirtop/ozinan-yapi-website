/** Single source of truth for NAP — keep in sync with GBP and on-page contact. */
export const BUSINESS = {
  legalName: 'Öz İnan Yapı Malzemeleri',
  alternateName: 'Özinan Yapı',
  phoneDisplay: '+90 532 453 38 02',
  phoneE164: '+905324533802',
  email: 'demirtopdavut@gmail.com',
  streetAddress: 'Namık Kemal Mah. 10.Sokak No:4/A',
  addressLocality: 'Esenler',
  addressRegion: 'İstanbul',
  postalCode: '34220',
  addressCountry: 'TR',
  geo: {
    latitude: 41.0431,
    longitude: 28.8826,
  },
  /** Mon–Sat */
  openingHours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const,
    opens: '08:30',
    closes: '20:00',
  },
  foundingDate: '1995',
  founderName: 'Davut Demirtop',
  sameAs: [
    'https://www.facebook.com/ozinanyapi',
    'https://wa.me/905324533802',
  ] as const,
  priceRange: '$$',
} as const;

export const SERVICE_HUB_SLUGS = [
  'gider-acma',
  'su-kacagi',
  'banyo-tamirat',
  'mutfak-tesisat',
  'yerden-isitma',
  'acil-tesisat',
] as const;
