'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative bg-white pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10 relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 max-w-xl leading-relaxed animate-fade-up">
              {t('subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-up-delay">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-medium text-base shadow-lg hover:shadow-xl"
              >
                {t('ctaButton')}
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center border-2 border-secondary text-secondary px-8 py-4 rounded-lg hover:bg-secondary hover:text-white transition-colors font-medium text-base"
              >
                {t('servicesButton')}
              </Link>
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 bg-gradient-to-br from-primary/5 to-secondary/5 aspect-[4/3] flex items-center justify-center p-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/plumber-animation.svg"
                alt="Professional plumber at work"
                className="w-full h-full object-contain"
                width={640}
                height={480}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 w-1/2 h-full bg-neutral-100 -skew-x-12 transform origin-top-right -z-0 hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
