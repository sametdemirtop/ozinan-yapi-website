'use client';

import { useTranslations } from 'next-intl';
import { TruckIcon } from '@heroicons/react/24/outline';
import { Link } from '@/i18n/routing';

export default function ServiceAreas() {
  const t = useTranslations('areas');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-center" id="areas">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="w-16 h-16 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-6 text-primary">
          <TruckIcon className="w-8 h-8" strokeWidth={2} />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          {t('title')}
        </h2>

        <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
          {t('text')}
        </p>

        <div className="pt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/bolgeler"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-lg hover:shadow-xl text-lg"
          >
            {t('districtsTitle')}
          </Link>
          <Link
            href="/hizmetler"
            className="inline-flex items-center text-primary font-medium hover:underline px-4 py-4"
          >
            {t('linkServices')}
          </Link>
        </div>
      </div>
    </section>
  );
}
