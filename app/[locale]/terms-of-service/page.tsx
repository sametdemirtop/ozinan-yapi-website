import { getTranslations, setRequestLocale } from 'next-intl/server';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'termsOfService' });
  return buildPageMetadata({
    locale,
    path: 'terms-of-service',
    title: t('title'),
    description: t('description'),
  });
}

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('termsOfService');
  const tPages = await getTranslations('pages');

  const crumbs = [
    { name: tPages('homeLabel'), path: '' },
    { name: t('title'), path: 'terms-of-service' },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs locale={locale} items={crumbs} />
        <h1 className="text-4xl font-bold text-primary mb-8">{t('title')}</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-neutral-700">
          <section>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              {t('section1.title')}
            </h2>
            <p>{t('section1.content')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              {t('section2.title')}
            </h2>
            <p>{t('section2.content')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              {t('section3.title')}
            </h2>
            <p>{t('section3.content')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              {t('section4.title')}
            </h2>
            <p>{t('section4.content')}</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">
              {t('section5.title')}
            </h2>
            <p>{t('section5.content')}</p>
          </section>
          <p className="text-sm text-neutral-500 mt-8 pt-8 border-t">
            {t('lastUpdated')}: 15.01.2026
          </p>
        </div>
      </div>
    </div>
  );
}
