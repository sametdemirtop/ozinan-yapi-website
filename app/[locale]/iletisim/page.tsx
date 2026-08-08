import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import ContactForm from '@/components/forms/ContactForm';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { buildPageMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.contact' });
  return buildPageMetadata({
    locale,
    path: 'iletisim',
    title: t('metaTitle'),
    description: t('metaDescription'),
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages');
  const tFooter = await getTranslations('footer');

  const crumbs = [
    { name: t('homeLabel'), path: '' },
    { name: t('contact.title'), path: 'iletisim' },
  ];

  return (
    <div className="bg-neutral-50">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <Breadcrumbs locale={locale} items={crumbs} />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          {t('contact.title')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-4">
          <aside className="lg:col-span-1 space-y-6 bg-white p-6 rounded-2xl border border-neutral-200 h-fit">
            <h2 className="text-lg font-semibold text-neutral-900">
              {t('contact.napTitle')}
            </h2>
            <ul className="space-y-4 text-sm text-neutral-700">
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:${BUSINESS.phoneE164}`}
                  className="hover:text-primary"
                  dir="ltr"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-primary break-all"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${BUSINESS.streetAddress} ${BUSINESS.addressLocality} ${BUSINESS.addressRegion}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  {BUSINESS.streetAddress}
                  <br />
                  {BUSINESS.addressLocality}/{BUSINESS.addressRegion}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ClockIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-neutral-900">
                    {t('contact.hoursLabel')}
                  </p>
                  <p>{tFooter('workingHours')}</p>
                </div>
              </li>
            </ul>
          </aside>

          <div className="lg:col-span-2">
            <ContactForm embedded />
          </div>
        </div>
      </div>
    </div>
  );
}
