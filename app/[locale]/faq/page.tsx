import { getTranslations, setRequestLocale } from 'next-intl/server';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { buildPageMetadata } from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.faq' });
  const tFaq = await getTranslations({ locale, namespace: 'faq' });
  return buildPageMetadata({
    locale,
    path: 'faq',
    title: t('metaTitle'),
    description: t('metaDescription') || tFaq('subtitle'),
  });
}

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages');
  const tFaq = await getTranslations('faq');

  const crumbs = [
    { name: t('homeLabel'), path: '' },
    { name: tFaq('title'), path: 'faq' },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs locale={locale} items={crumbs} />
        <h1 className="text-4xl font-bold text-primary mb-4">{tFaq('title')}</h1>
        <p className="text-lg text-neutral-600 mb-12">{tFaq('subtitle')}</p>
        <FaqAccordion />
      </div>
    </div>
  );
}
