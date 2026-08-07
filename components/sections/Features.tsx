'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  UserGroupIcon,
  ClockIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    key: 'speed',
    icon: BoltIcon,
    color: 'text-secondary',
    hoverColor: 'group-hover:bg-secondary',
  },
  {
    key: 'expert',
    icon: UserGroupIcon,
    color: 'text-primary',
    hoverColor: 'group-hover:bg-primary',
  },
  {
    key: 'emergency',
    icon: ClockIcon,
    color: 'text-secondary',
    hoverColor: 'group-hover:bg-secondary',
  },
  {
    key: 'warranty',
    icon: ShieldCheckIcon,
    color: 'text-primary',
    hoverColor: 'group-hover:bg-primary',
  },
];

export default function Features() {
  const t = useTranslations('features');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="about">
      <div className="max-w-[1280px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-primary text-center mb-16"
        >
          {t('title')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white border border-neutral-200 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-4 ${feature.color} ${feature.hoverColor} transition-all duration-300 group-hover:text-white`}
              >
                <feature.icon className="w-8 h-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3 text-center">
                {t(`${feature.key}.title`)}
              </h3>
              <p className="text-sm text-neutral-600 text-center leading-relaxed">
                {t(`${feature.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
