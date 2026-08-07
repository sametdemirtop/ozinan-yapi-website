'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQPage() {
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
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('title')}</h1>
        <p className="text-lg text-neutral-600 mb-12">{t('subtitle')}</p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-semibold text-lg text-primary pr-8">
                  {t(`${faq.q}`)}
                </span>
                <ChevronDownIcon 
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-neutral-700">
                  {t(`${faq.a}`)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg">
          <h3 className="text-xl font-semibold text-primary mb-2">{t('contactTitle')}</h3>
          <p className="text-neutral-700 mb-4">{t('contactText')}</p>
          <a 
            href="tel:+905324533802" 
            className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
            dir="ltr"
          >
            {t('contactButton')}
          </a>
        </div>
      </div>
    </div>
  );
}
