import { useLocale } from 'next-intl';

export default function JsonLd() {
  const locale = useLocale();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://ozinanyapi.com.tr/#organization',
    name: 'Öz İnan Yapı Malzemeleri',
    alternateName: 'Özinan Yapı',
    description:
      locale === 'tr'
        ? 'İstanbul Avrupa Yakası Esenler merkezli 30 yıllık tecrübe ile profesyonel tesisat hizmetleri. Bayrampaşa, Güngören, Bağcılar, Başakşehir, Zeytinburnu bölgelerinde hizmet veriyoruz.'
        : locale === 'en'
        ? 'Professional plumbing services based in Esenler, Istanbul European Side with 30 years of experience. Serving Bayrampaşa, Güngören, Bağcılar, Başakşehir, Zeytinburnu districts.'
        : 'خدمات السباكة المهنية في الجانب الأوروبي من إسطنبول، إيسينلر مع 30 عاماً من الخبرة. نخدم مناطق بيرامباشا، غونغورين، باغجيلار، باشاك شهير، زيتون بورنو.',
    url: 'https://ozinanyapi.com.tr',
    logo: 'https://ozinanyapi.com.tr/logo.png',
    image: 'https://ozinanyapi.com.tr/images/og-image.jpg',
    telephone: '+905324533802',
    email: 'demirtopdavut@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Namık Kemal Mah. 10.Sokak No:4/A',
      addressLocality: 'Esenler',
      addressRegion: 'İstanbul',
      postalCode: '34220',
      addressCountry: 'TR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.0431,
      longitude: 28.8826,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:30',
        closes: '20:00',
      },
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'İstanbul',
        description: locale === 'tr' ? 'Avrupa Yakası' : locale === 'en' ? 'European Side' : 'الجانب الأوروبي',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Esenler',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Bayrampaşa',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Bağcılar',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Güngören',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Merter',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Gaziosmanpaşa',
      },
    ],
    sameAs: [
      'https://www.facebook.com/ozinanyapi',
      'https://wa.me/905324533802',
    ],
    founder: {
      '@type': 'Person',
      name: 'Davut Demirtop',
      jobTitle: 'Master Plumber',
    },
    foundingDate: '1995',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'tr' ? 'Tesisat Hizmetleri' : locale === 'en' ? 'Plumbing Services' : 'خدمات السباكة',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'tr' ? 'Gider Açma / Tıkanıklık Giderme' : locale === 'en' ? 'Drain Cleaning / Unclogging' : 'تنظيف المجاري',
            description:
              locale === 'tr'
                ? 'Profesyonel gider açma ve tıkanıklık giderme hizmetleri'
                : locale === 'en'
                ? 'Professional drain cleaning and unclogging services'
                : 'خدمات تنظيف المجاري الاحترافية',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'tr' ? 'Banyo Tesisatı ve Tamiratı' : locale === 'en' ? 'Bathroom Plumbing and Repair' : 'سباكة وإصلاح الحمام',
            description:
              locale === 'tr'
                ? 'Banyo tesisat kurulumu ve tamirat hizmetleri'
                : locale === 'en'
                ? 'Bathroom plumbing installation and repair services'
                : 'خدمات تركيب وإصلاح سباكة الحمام',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'tr' ? 'Kombi Bakım ve Tamiri' : locale === 'en' ? 'Boiler Maintenance and Repair' : 'صيانة وإصلاح الغلاية',
            description:
              locale === 'tr'
                ? 'Kombi periyodik bakım ve arıza tamir hizmetleri'
                : locale === 'en'
                ? 'Boiler periodic maintenance and breakdown repair services'
                : 'خدمات الصيانة الدورية وإصلاح الأعطال للغلاية',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'tr' ? 'Acil Tesisat Servisi' : locale === 'en' ? 'Emergency Plumbing Service' : 'خدمة السباكة الطارئة',
            description:
              locale === 'tr'
                ? '7/24 acil tesisat hizmetleri'
                : locale === 'en'
                ? '24/7 emergency plumbing services'
                : 'خدمات السباكة الطارئة على مدار الساعة',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'tr' ? 'Ana Sayfa' : locale === 'en' ? 'Home' : 'الصفحة الرئيسية',
        item: `https://ozinanyapi.com.tr/${locale}`,
      },
    ],
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
