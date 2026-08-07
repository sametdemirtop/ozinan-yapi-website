'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function IntroSection() {
  const t = useTranslations('intro');

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto space-y-8"
      >
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
        </div>
      </motion.div>
    </section>
  );
}
