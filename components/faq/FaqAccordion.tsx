'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Link } from '@/i18n/routing';
import { BUSINESS } from '@/lib/business';

export default function FaqAccordion() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'question1', a: 'answer1' },
    { q: 'question2', a: 'answer2' },
    { q: 'question3', a: 'answer3' },
    { q: 'question4', a: 'answer4' },
    { q: 'question5', a: 'answer5' },
    { q: 'question6', a: 'answer6' },
    { q: 'question7', a: 'answer7' },
    { q: 'question8', a: 'answer8' },
  ];

  return (
    <>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={faq.q}
            className="border border-neutral-200 rounded-lg overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
            >
              <span className="font-semibold text-lg text-primary pr-8">
                {t(faq.q)}
              </span>
              <ChevronDownIcon
                className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-neutral-700">{t(faq.a)}</div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-primary/5 rounded-lg">
        <h2 className="text-xl font-semibold text-primary mb-2">
          {t('contactTitle')}
        </h2>
        <p className="text-neutral-700 mb-4">{t('contactText')}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${BUSINESS.phoneE164}`}
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
            dir="ltr"
          >
            {t('contactButton')}
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors font-medium"
          >
            {t('contactTitle')}
          </Link>
        </div>
      </div>
    </>
  );
}
