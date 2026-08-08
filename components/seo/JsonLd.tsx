import { SITE_URL } from '@/lib/site';
import { BUSINESS } from '@/lib/business';

export default function JsonLd({ locale }: { locale: string }) {
  const description =
    locale === 'tr'
      ? 'İstanbul Avrupa Yakası Esenler merkezli 30 yıllık tecrübe ile profesyonel tesisat hizmetleri. Bayrampaşa, Güngören, Bağcılar, Merter, Gaziosmanpaşa bölgelerinde hizmet veriyoruz.'
      : locale === 'en'
        ? 'Professional plumbing services based in Esenler, Istanbul European Side with 30 years of experience. Serving Bayrampaşa, Güngören, Bağcılar, Merter, Gaziosmanpaşa districts.'
        : 'خدمات السباكة المهنية في الجانب الأوروبي من إسطنبول، إيسينلر مع 30 عاماً من الخبرة. نخدم مناطق بيرامباشا، غونغورين، باغجيلار، ميرتر، غازي عثمان باشا.';

  const serviceCatalogName =
    locale === 'tr'
      ? 'Tesisat Hizmetleri'
      : locale === 'en'
        ? 'Plumbing Services'
        : 'خدمات السباكة';

  const offers =
    locale === 'tr'
      ? [
          {
            name: 'Gider Açma / Tıkanıklık Giderme',
            description: 'Profesyonel gider açma ve tıkanıklık giderme hizmetleri',
          },
          {
            name: 'Banyo Tesisatı ve Tamiratı',
            description: 'Banyo tesisat kurulumu ve tamirat hizmetleri',
          },
          {
            name: 'Mutfak Tesisatı',
            description: 'Mutfak tesisatı kurulum ve onarım hizmetleri',
          },
          {
            name: 'Acil Tesisat Servisi',
            description: '7/24 acil tesisat hizmetleri',
          },
          {
            name: 'Su Kaçağı Tespiti',
            description: 'Profesyonel su kaçağı bulma ve tespit hizmetleri',
          },
          {
            name: 'Yerden Isıtma Sistemleri',
            description: 'Yerden ısıtma kurulum ve bakım hizmetleri',
          },
        ]
      : locale === 'en'
        ? [
            {
              name: 'Drain Cleaning / Unclogging',
              description: 'Professional drain cleaning and unclogging services',
            },
            {
              name: 'Bathroom Plumbing and Repair',
              description: 'Bathroom plumbing installation and repair services',
            },
            {
              name: 'Kitchen Plumbing',
              description: 'Kitchen plumbing installation and repair services',
            },
            {
              name: 'Emergency Plumbing Service',
              description: '24/7 emergency plumbing services',
            },
            {
              name: 'Water Leak Detection',
              description: 'Professional water leak detection and location services',
            },
            {
              name: 'Underfloor Heating Systems',
              description: 'Underfloor heating installation and maintenance',
            },
          ]
        : [
            {
              name: 'تنظيف المجاري',
              description: 'خدمات تنظيف المجاري الاحترافية',
            },
            {
              name: 'سباكة وإصلاح الحمام',
              description: 'خدمات تركيب وإصلاح سباكة الحمام',
            },
            {
              name: 'سباكة المطبخ',
              description: 'خدمات تركيب وإصلاح سباكة المطبخ',
            },
            {
              name: 'خدمة السباكة الطارئة',
              description: 'خدمات السباكة الطارئة على مدار الساعة',
            },
            {
              name: 'كشف تسرب المياه',
              description: 'خدمات الكشف المهنية عن تسرب المياه',
            },
            {
              name: 'أنظمة التدفئة الأرضية',
              description: 'تركيب وصيانة أنظمة التدفئة الأرضية',
            },
          ];

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.alternateName,
    description,
    url: SITE_URL,
    logo: `${SITE_URL}/images/ozinan-logo.png`,
    image: `${SITE_URL}/images/og-image.jpg`,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [...BUSINESS.openingHours.days],
        opens: BUSINESS.openingHours.opens,
        closes: BUSINESS.openingHours.closes,
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'İstanbul',
        description:
          locale === 'tr'
            ? 'Avrupa Yakası'
            : locale === 'en'
              ? 'European Side'
              : 'الجانب الأوروبي',
      },
      { '@type': 'AdministrativeArea', name: 'Esenler' },
      { '@type': 'AdministrativeArea', name: 'Bayrampaşa' },
      { '@type': 'AdministrativeArea', name: 'Bağcılar' },
      { '@type': 'AdministrativeArea', name: 'Güngören' },
      { '@type': 'AdministrativeArea', name: 'Merter' },
      { '@type': 'AdministrativeArea', name: 'Gaziosmanpaşa' },
    ],
    sameAs: [...BUSINESS.sameAs],
    founder: {
      '@type': 'Person',
      name: BUSINESS.founderName,
      jobTitle: 'Master Plumber',
    },
    foundingDate: BUSINESS.foundingDate,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: serviceCatalogName,
      itemListElement: offers.map((offer) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offer.name,
          description: offer.description,
        },
      })),
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: BUSINESS.legalName,
    url: SITE_URL,
    inLanguage: ['tr', 'en', 'ar'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
