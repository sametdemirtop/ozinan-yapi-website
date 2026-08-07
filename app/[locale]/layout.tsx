import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Libre_Caslon_Text, Hanken_Grotesk, Tajawal } from 'next/font/google';
import { locales, isRTL, type Locale } from '@/lib/i18n-config';
import JsonLd from '@/components/seo/JsonLd';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const libreCaslon = Libre_Caslon_Text({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-libre-caslon',
  display: 'swap',
});

const hankenGrotesk = Hanken_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-hanken-grotesk',
  display: 'swap',
});

const tajawal = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ['arabic'],
  variable: '--font-tajawal',
  display: 'swap',
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
      // Ana anahtar kelimeler
      'tesisatçı istanbul avrupa yakası',
      'tesisat tamiri istanbul',
      'acil tesisatçı istanbul',
      'su kaçağı tespiti',
      'su kaçağı bulma',
      'gider açma',
      'tıkanıklık giderme',
      'banyo tamiri',
      'mutfak tesisatı',
      'kombi bakımı',
      
      // Esenler anahtar kelimeleri
      'esenler tesisatçı',
      'esenler tesisat',
      'esenler su kaçağı',
      'esenler su kaçağı tespiti',
      'esenler gider açma',
      'esenler arıza tespiti',
      'esenler acil tesisatçı',
      'esenler banyo tamiri',
      'esenler tıkanıklık açma',
      
      // Bayrampaşa anahtar kelimeleri
      'bayrampaşa tesisatçı',
      'bayrampaşa tesisat',
      'bayrampaşa su kaçağı',
      'bayrampaşa su kaçağı tespiti',
      'bayrampaşa gider açma',
      'bayrampaşa arıza tespiti',
      'bayrampaşa acil tesisatçı',
      'bayrampaşa banyo tamiri',
      'bayrampaşa tıkanıklık açma',
      
      // Bağcılar anahtar kelimeleri
      'bağcılar tesisatçı',
      'bağcılar tesisat',
      'bağcılar su kaçağı',
      'bağcılar su kaçağı tespiti',
      'bağcılar gider açma',
      'bağcılar arıza tespiti',
      'bağcılar acil tesisatçı',
      'bağcılar banyo tamiri',
      'bağcılar tıkanıklık açma',
      
      // Diğer bölgeler
      'güngören tesisatçı',
      'güngören tesisat',
      'merter tesisatçı',
      'merter tesisat',
      'gaziosmanpaşa tesisatçı',
      'gaziosmanpaşa tesisat',
      'başakşehir tesisatçı',
      'zeytinburnu tesisatçı',
      'bahçelievler tesisatçı',
      
      // Marka ve kişi
      'davut usta',
      'özinan yapı',
      'öz inan yapı malzemeleri'
    ],
    en: [
      'plumber istanbul european side',
      'esenler plumber',
      'bayrampaşa plumber',
      'güngören plumber',
      'bağcılar plumber',
      'drain cleaning esenler',
      'bathroom repair european side',
      'boiler maintenance',
      'emergency plumber istanbul',
      'plumbing repair',
      'water leak',
      'master davut'
    ],
    ar: [
      'سباك إسطنبول الجانب الأوروبي',
      'سباك إيسينلر',
      'سباك بيرامباشا',
      'تنظيف المجاري',
      'إصلاح الحمام',
      'صيانة الغلاية',
      'سباك طوارئ',
      'إصلاح السباكة',
      'تسرب المياه'
    ],
  };

  const siteUrl = 'https://ozinanyapi.com.tr';

  return {
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
  const fontClass = locale === 'ar' ? tajawal.variable : hankenGrotesk.variable;

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${libreCaslon.variable} ${hankenGrotesk.variable} ${tajawal.variable} ${fontClass} antialiased`}
    >
      <head>
        <JsonLd />
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
