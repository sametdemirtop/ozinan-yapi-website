import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'cookiePolicy' });
  
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function CookiePolicyPage() {
  const t = useTranslations('cookiePolicy');

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">{t('title')}</h1>
        
        <div className="prose prose-lg max-w-none space-y-6 text-neutral-700">
          <section>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">{t('section1.title')}</h2>
            <p>{t('section1.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">{t('section2.title')}</h2>
            <p>{t('section2.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">{t('section3.title')}</h2>
            <p>{t('section3.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">{t('section4.title')}</h2>
            <p>{t('section4.content')}</p>
          </section>

          <p className="text-sm text-neutral-500 mt-8 pt-8 border-t">
            {t('lastUpdated')}: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
