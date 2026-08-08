import dynamic from 'next/dynamic';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import IntroSection from '@/components/sections/IntroSection';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import { buildPageMetadata } from '@/lib/seo';
import { BreadcrumbJsonLd } from '@/components/seo/Breadcrumbs';

const ServiceAreas = dynamic(() => import('@/components/sections/ServiceAreas'));
const CTASection = dynamic(() => import('@/components/sections/CTASection'));
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'));
const ContactForm = dynamic(() => import('@/components/forms/ContactForm'));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const titles: Record<string, string> = {
    tr: 'Öz İnan Yapı | Profesyonel Tesisat ve Yapı Malzemeleri - İstanbul',
    en: 'Öz İnan Yapı | Professional Plumbing and Building Materials - Istanbul',
    ar: 'أوز إينان | مواد السباكة والبناء المهنية - إسطنبول',
  };
  const descriptions: Record<string, string> = {
    tr: 'İstanbul Avrupa Yakası Esenler merkezli 30 yıllık tecrübe ile profesyonel tesisat hizmetleri. Gider açma, banyo tamiri, su kaçağı tespiti, acil tesisat. 7/24 hızlı servis.',
    en: 'Professional plumbing services based in Esenler, Istanbul European Side with 30 years of experience. Drain cleaning, bathroom repair, water leak detection, emergency plumbing. 24/7 fast service.',
    ar: 'خدمات السباكة المهنية في الجانب الأوروبي من إسطنبول، إيسينلر مع 30 عاماً من الخبرة. تنظيف المجاري، إصلاح الحمام، كشف تسرب المياه، سباكة طارئة. خدمة سريعة على مدار الساعة.',
  };

  return buildPageMetadata({
    locale,
    path: '',
    title: titles[locale] || titles.tr,
    description: descriptions[locale] || descriptions.tr,
    absoluteTitle: true,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages');

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale}
        items={[{ name: t('homeLabel'), path: '' }]}
      />
      <Hero />
      <IntroSection />
      <Features />
      <Services />
      <ServiceAreas />
      <CTASection />
      <Testimonials />
      <ContactForm />
    </>
  );
}
