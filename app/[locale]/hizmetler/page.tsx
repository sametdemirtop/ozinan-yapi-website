import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { buildPageMetadata } from '@/lib/seo';

const SERVICE_KEYS = [
  'drainCleaning',
  'bathroomRepair',
  'kitchenPlumbing',
  'emergencyService',
  'waterLeak',
  'underfloorHeating',
] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.services' });
  return buildPageMetadata({
    locale,
    path: 'hizmetler',
    title: t('metaTitle'),
    description: t('metaDescription'),
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages');
  const tServices = await getTranslations('services');

  const crumbs = [
    { name: t('homeLabel'), path: '' },
    { name: t('services.title'), path: 'hizmetler' },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">
        <Breadcrumbs locale={locale} items={crumbs} />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          {t('services.title')}
        </h1>
        <p className="text-lg text-neutral-700 max-w-3xl mb-12 leading-relaxed">
          {tServices('subtitle')}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {SERVICE_KEYS.map((key) => (
            <li
              key={key}
              className="flex gap-4 p-6 border border-neutral-200 rounded-xl bg-neutral-50"
            >
              <CheckCircleIcon className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  {tServices(key)}
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  {tServices(`${key}Desc`)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 text-base">
          <Link
            href="/bolgeler"
            className="text-primary font-medium hover:underline"
          >
            {tServices('linkAreas')}
          </Link>
          <span className="text-neutral-300" aria-hidden="true">
            |
          </span>
          <Link
            href="/iletisim"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            {tServices('linkContact')}
          </Link>
        </div>
      </div>
    </div>
  );
}
