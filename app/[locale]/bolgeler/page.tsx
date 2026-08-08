import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { TruckIcon } from '@heroicons/react/24/outline';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { buildPageMetadata } from '@/lib/seo';

const DISTRICTS = [
  'Esenler',
  'Bayrampaşa',
  'Bağcılar',
  'Güngören',
  'Merter',
  'Gaziosmanpaşa',
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.areas' });
  return buildPageMetadata({
    locale,
    path: 'bolgeler',
    title: t('metaTitle'),
    description: t('metaDescription'),
  });
}

export default async function AreasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages');
  const tAreas = await getTranslations('areas');

  const crumbs = [
    { name: t('homeLabel'), path: '' },
    { name: t('areas.title'), path: 'bolgeler' },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Breadcrumbs locale={locale} items={crumbs} />
        <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-primary">
          <TruckIcon className="w-8 h-8" strokeWidth={2} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          {t('areas.title')}
        </h1>
        <p className="text-lg text-neutral-700 leading-relaxed mb-8">
          {tAreas('text')}
        </p>

        <h2 className="text-xl font-semibold text-neutral-900 mb-4">
          {tAreas('districtsTitle')}
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {DISTRICTS.map((district) => (
            <li
              key={district}
              className="px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 font-medium text-center"
            >
              {district}
            </li>
          ))}
        </ul>

        <p className="text-neutral-600 mb-8">{tAreas('districts')}</p>

        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href="/hizmetler"
            className="text-primary font-medium hover:underline"
          >
            {tAreas('linkServices')}
          </Link>
          <Link
            href="/iletisim"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            {tAreas('linkContact')}
          </Link>
        </div>
      </div>
    </div>
  );
}
