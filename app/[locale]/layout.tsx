import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Libre_Caslon_Text, Hanken_Grotesk, Tajawal } from 'next/font/google';
import { locales, isRTL, type Locale } from '@/lib/i18n-config';
import { SITE_URL } from '@/lib/site';
import JsonLd from '@/components/seo/JsonLd';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const libreCaslon = Libre_Caslon_Text({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-libre-caslon',
  display: 'swap',
  preload: true,
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
  preload: true,
});

const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
  preload: false,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  const titles: Record<Locale, string> = {
    tr: 'Öz İnan Yapı | Profesyonel Tesisat ve Yapı Malzemeleri - İstanbul',
    en: 'Öz İnan Yapı | Professional Plumbing and Building Materials - Istanbul',
    ar: 'أوز إينان | مواد السباكة والبناء المهنية - إسطنبول',
  };

  const descriptions: Record<Locale, string> = {
    tr: 'İstanbul Avrupa Yakası Esenler merkezli 30 yıllık tecrübe ile profesyonel tesisat hizmetleri. Bayrampaşa, Güngören, Bağcılar, Başakşehir, Zeytinburnu bölgelerinde gider açma, banyo tamiri, kombi bakımı, acil tesisat. 7/24 hızlı servis.',
    en: 'Professional plumbing services based in Esenler, Istanbul European Side with 30 years of experience. Drain cleaning, bathroom repair, boiler maintenance, emergency plumbing in Bayrampaşa, Güngören, Bağcılar, Başakşehir, Zeytinburnu. 24/7 fast service.',
    ar: 'خدمات السباكة المهنية في الجانب الأوروبي من إسطنبول، إيسينلر مع 30 عاماً من الخبرة. تنظيف المجاري، إصلاح الحمام، صيانة الغلاية، سباكة طارئة في بيرامباشا، غونغورين، باغجيلار، باشاك شهير، زيتون بورنو. خدمة سريعة على مدار الساعة.',
  };

  const keywords: Record<Locale, string[]> = {
    tr: [
      // ── Genel / Ana anahtar kelimeler ──
      'tesisatçı istanbul avrupa yakası',
      'tesisatçı istanbul',
      'tesisat tamiri istanbul',
      'acil tesisatçı istanbul',
      '7/24 tesisatçı',
      'gece açık tesisatçı',
      'su kaçağı tespiti',
      'su kaçağı bulma',
      'su kaçağı tespit cihazı',
      'gider açma',
      'tıkanıklık giderme',
      'lavabo tıkanıklığı açma',
      'klozet tıkanıklığı açma',
      'kanalizasyon açma',
      'banyo tamiri',
      'mutfak tesisatı',
      'kombi bakımı',
      'kombi tamiri',
      'kombi servisi',
      'petek temizliği',
      'batarya tamiri',
      'sifon tamiri',
      'su tesisatı döşeme',
      'pis su tesisatı',
      'temiz su tesisatı',
      'sıcak su tesisatı',
      'doğalgaz tesisatı',
      'kalorifer tesisatı',
      'yerden ısıtma tesisatı',

      // ── Tadilat / tamirat (genel yelpaze) ──
      'tadilat firması',
      'ev tadilatı',
      'daire tadilatı',
      'komple tadilat',
      'anahtar teslim tadilat',
      'banyo tadilatı',
      'mutfak tadilatı',
      'boya badana',
      'iç cephe boya',
      'dış cephe boya',
      'fayans ustası',
      'seramik döşeme',
      'parke döşeme',
      'laminat parke',
      'alçıpan ustası',
      'asma tavan',
      'elektrik tesisatı',
      'elektrikçi',
      'sigorta arızası',
      'priz tamiri',
      'çatı tamiri',
      'çatı aktarma',
      'su yalıtımı',
      'izolasyon uygulaması',
      'kombi montajı',
      'petek montajı',
      'kapı pencere montajı',
      'pvc pencere tamiri',
      'genel bakım onarım',
      'yapı malzemeleri satış',
      'inşaat malzemeleri',

      // ── Esenler (ana bölge) ──
      'esenler tesisatçı',
      'esenler tesisat',
      'esenler su kaçağı',
      'esenler su kaçağı tespiti',
      'esenler gider açma',
      'esenler arıza tespiti',
      'esenler acil tesisatçı',
      'esenler banyo tamiri',
      'esenler tıkanıklık açma',
      'esenler tadilat',
      'esenler boya badana',
      'esenler elektrikçi',
      'esenler kombi servisi',
      'esenler yapı malzemeleri',

      // ── Bayrampaşa ──
      'bayrampaşa tesisatçı',
      'bayrampaşa tesisat',
      'bayrampaşa su kaçağı',
      'bayrampaşa su kaçağı tespiti',
      'bayrampaşa gider açma',
      'bayrampaşa arıza tespiti',
      'bayrampaşa acil tesisatçı',
      'bayrampaşa banyo tamiri',
      'bayrampaşa tıkanıklık açma',
      'bayrampaşa tadilat',
      'bayrampaşa kombi servisi',

      // ── Bağcılar ──
      'bağcılar tesisatçı',
      'bağcılar tesisat',
      'bağcılar su kaçağı',
      'bağcılar su kaçağı tespiti',
      'bağcılar gider açma',
      'bağcılar arıza tespiti',
      'bağcılar acil tesisatçı',
      'bağcılar banyo tamiri',
      'bağcılar tıkanıklık açma',
      'bağcılar tadilat',
      'bağcılar kombi servisi',

      // ── Güngören ──
      'güngören tesisatçı',
      'güngören tesisat',
      'güngören su kaçağı',
      'güngören gider açma',
      'güngören acil tesisatçı',
      'güngören tadilat',

      // ── Merter ──
      'merter tesisatçı',
      'merter tesisat',
      'merter su kaçağı',
      'merter gider açma',
      'merter tadilat',

      // ── Gaziosmanpaşa ──
      'gaziosmanpaşa tesisatçı',
      'gaziosmanpaşa tesisat',
      'gaziosmanpaşa su kaçağı',
      'gaziosmanpaşa gider açma',
      'gaziosmanpaşa tadilat',

      // ── Başakşehir ──
      'başakşehir tesisatçı',
      'başakşehir tesisat',
      'başakşehir su kaçağı',
      'başakşehir tadilat',

      // ── Zeytinburnu ──
      'zeytinburnu tesisatçı',
      'zeytinburnu tesisat',
      'zeytinburnu su kaçağı',
      'zeytinburnu tadilat',

      // ── Bahçelievler ──
      'bahçelievler tesisatçı',
      'bahçelievler tesisat',
      'bahçelievler su kaçağı',
      'bahçelievler tadilat',

      // ── Sultangazi ──
      'sultangazi tesisatçı',
      'sultangazi su kaçağı',
      'sultangazi tadilat',

      // ── Küçükçekmece ──
      'küçükçekmece tesisatçı',
      'küçükçekmece su kaçağı',
      'küçükçekmece tadilat',

      // ── Marka ve kişi ──
      'davut usta',
      'özinan yapı',
      'öz inan yapı malzemeleri',
      'davut usta tesisat',
    ],
    en: [
      'plumber istanbul european side',
      'plumber istanbul',
      'emergency plumber istanbul',
      '24/7 plumber istanbul',
      'plumbing repair istanbul',
      'water leak detection istanbul',
      'drain cleaning istanbul',
      'blocked drain repair',
      'bathroom repair european side',
      'kitchen plumbing repair',
      'boiler maintenance istanbul',
      'boiler repair istanbul',
      'central heating repair',
      'renovation contractor istanbul',
      'home renovation istanbul',
      'apartment renovation istanbul',
      'painting and decorating istanbul',
      'tiling contractor istanbul',
      'electrician istanbul',
      'building materials istanbul',

      'esenler plumber',
      'esenler emergency plumber',
      'esenler renovation',
      'bayrampaşa plumber',
      'bayrampaşa renovation',
      'güngören plumber',
      'bağcılar plumber',
      'bağcılar renovation',
      'merter plumber',
      'gaziosmanpaşa plumber',
      'başakşehir plumber',
      'zeytinburnu plumber',
      'bahçelievler plumber',

      'master davut',
      'oz inan yapi malzemeleri',
    ],
    ar: [
      'سباك إسطنبول الجانب الأوروبي',
      'سباك إسطنبول',
      'سباك طوارئ إسطنبول',
      'سباك متاح 24 ساعة',
      'إصلاح تسرب المياه',
      'كشف تسرب المياه',
      'تنظيف المجاري',
      'فتح انسداد المجاري',
      'إصلاح الحمام',
      'تصليح مطبخ',
      'صيانة الغلاية',
      'إصلاح الغلاية',
      'شركة تجديد وترميم',
      'تجديد شقق إسطنبول',
      'دهان وديكور',
      'تركيب سيراميك وبلاط',
      'كهربائي إسطنبول',
      'مواد بناء إسطنبول',

      'سباك إيسينلر',
      'سباك بيرامباشا',
      'سباك باغجلار',
      'سباك غونغورن',
      'تجديد إيسينلر',
      'تجديد بيرامباشا',

      'الأسطى داوود',
      'أوز إينان يابي',
    ],
  };

  const siteUrl = SITE_URL;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: titles[locale as Locale] || titles.tr,
      template: '%s | Öz İnan Yapı'
    },
    description: descriptions[locale as Locale] || descriptions.tr,
    keywords: keywords[locale as Locale] || keywords.tr,
    authors: [{ name: 'Öz İnan Yapı Malzemeleri' }],
    creator: 'Öz İnan Yapı Malzemeleri',
    publisher: 'Öz İnan Yapı Malzemeleri',
    openGraph: {
      type: 'website',
      locale: locale === 'tr' ? 'tr_TR' : locale === 'en' ? 'en_US' : 'ar_AR',
      url: `${siteUrl}/${locale}`,
      siteName: 'Öz İnan Yapı Malzemeleri',
      title: titles[locale as Locale] || titles.tr,
      description: descriptions[locale as Locale] || descriptions.tr,
      images: [
        {
          url: `${siteUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Öz İnan Yapı Malzemeleri - Profesyonel Tesisat Hizmetleri',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as Locale] || titles.tr,
      description: descriptions[locale as Locale] || descriptions.tr,
      images: [`${siteUrl}/images/og-image.jpg`],
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        tr: `${siteUrl}/tr`,
        en: `${siteUrl}/en`,
        ar: `${siteUrl}/ar`,
        'x-default': `${siteUrl}/tr`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // User should replace with actual code
    },
    manifest: '/manifest.json',
    other: {
      'theme-color': '#003764',
      'color-scheme': 'light',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  const direction = isRTL(locale as Locale) ? 'rtl' : 'ltr';
  const fontClassName =
    locale === 'ar'
      ? `${tajawal.variable} ${hankenGrotesk.variable}`
      : `${libreCaslon.variable} ${hankenGrotesk.variable}`;

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${fontClassName} antialiased`}
    >
      <head>
        <JsonLd locale={locale} />
      </head>
      <body className="min-h-screen flex flex-col bg-neutral-50">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
