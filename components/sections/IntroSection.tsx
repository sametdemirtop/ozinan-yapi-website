'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function IntroSection() {
  const t = useTranslations('intro');

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            {t('title')}
          </h2>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl border border-neutral-200 shadow-sm space-y-6">
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            {t('text1')}
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            {t('text2')}
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            {t('text3')}
          </p>
          <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
            <Link href="/hakkimizda" className="text-primary font-medium hover:underline">
              {t('ctaAbout')}
            </Link>
            {' · '}
            <Link href="/hizmetler" className="text-primary font-medium hover:underline">
              {t('ctaServices')}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
