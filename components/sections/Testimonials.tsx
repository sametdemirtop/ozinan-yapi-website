'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const testimonialKeys = ['review1', 'review2', 'review3', 'review4', 'review5', 'review6'];

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialKeys.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialKeys.length) % testimonialKeys.length);
  };

  const currentReview = testimonialKeys[currentIndex];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          {t('title')}
        </h2>

        <div className="relative">
          <button
            type="button"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:bg-primary hover:text-white text-primary border-2 border-primary"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:bg-primary hover:text-white text-primary border-2 border-primary"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          <div
            key={currentIndex}
            className="relative bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-lg animate-fade-up"
          >
            <svg
              className="absolute top-6 left-6 w-12 h-12 text-primary/20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
            </svg>

            <div className="relative z-10">
              <p className="text-lg md:text-xl text-neutral-800 italic leading-relaxed mb-8">
                &ldquo;{t(`${currentReview}.text`)}&rdquo;
              </p>

              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-warning" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {t(`${currentReview}.initial`)}
                </div>
                <p className="font-bold text-neutral-900 text-base">
                  {t(`${currentReview}.name`)}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mt-8">
            {testimonialKeys.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className="flex items-center justify-center min-w-11 min-h-11 rounded-full"
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : undefined}
              >
                <span
                  className={`rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary w-8 h-2.5'
                      : 'bg-neutral-400 w-2.5 h-2.5 hover:bg-neutral-500'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
