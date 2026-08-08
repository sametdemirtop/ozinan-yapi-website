import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Features from '@/components/sections/Features';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.about' });
  return buildPageMetadata({
    locale,
    path: 'hakkimizda',
    title: t('metaTitle'),
    description: t('metaDescription'),
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages');
  const tIntro = await getTranslations('intro');

  const crumbs = [
    { name: t('homeLabel'), path: '' },
    { name: t('about.title'), path: 'hakkimizda' },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">
        <Breadcrumbs locale={locale} items={crumbs} />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          {t('about.title')}
        </h1>
        <div className="max-w-4xl space-y-6 text-base md:text-lg text-neutral-700 leading-relaxed mb-12">
          <p>{tIntro('text1')}</p>
          <p>{tIntro('text2')}</p>
          <p>{tIntro('text3')}</p>
          <p>
            <Link
              href="/hizmetler"
              className="text-primary font-medium hover:underline"
            >
              {tIntro('ctaServices')}
            </Link>
            {' · '}
            <Link
              href="/iletisim"
              className="text-primary font-medium hover:underline"
            >
              {t('about.cta')}
            </Link>
          </p>
        </div>
      </div>
      <Features />
    </div>
  );
}
