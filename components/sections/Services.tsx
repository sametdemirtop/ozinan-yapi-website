'use client';

import { useTranslations, useLocale } from 'next-intl';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  'drainCleaning',
  'bathroomRepair',
  'kitchenPlumbing',
  'emergencyService',
  'waterLeak',
  'underfloorHeating',
];

export default function Services() {
  const t = useTranslations('services');
  const locale = useLocale();

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100"
      id="services"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              {t('title')}
            </h2>
            <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
              {t('subtitle')}
            </p>

            <ul className="space-y-4 pt-4">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-base text-neutral-900">
                    {t(service)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <Link
                href={`/${locale}#contact`}
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-lg hover:shadow-xl"
              >
                {t('viewAll')}
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-300 bg-gradient-to-br from-primary/5 to-secondary/5">
              <Image
                src="/images/plumber-working.jpg"
                alt="Professional plumber at work"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                loading="lazy"
                sizes="(max-width: 1024px) 0px, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
