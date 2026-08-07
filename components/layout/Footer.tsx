'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const quickLinks = [
    { name: tNav('home'), href: '/' },
    { name: tNav('about'), href: '/#about' },
    { name: tNav('services'), href: '/#services' },
    { name: tNav('areas'), href: '/#areas' },
    { name: tNav('contact'), href: '/#contact' },
  ];

  const legalLinks = [
    { name: t('privacyPolicy'), href: '/privacy-policy' },
    { name: t('terms'), href: '/terms-of-service' },
    { name: t('faq'), href: '/faq' },
    { name: t('cookies'), href: '/cookie-policy' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-auto border-t-4 border-primary">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand / Logo */}
          <div className="space-y-4">
            <Image
              src="/images/ozinan-logo.png"
              alt="Öz İnan Yapı Logo"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <p className="text-sm text-neutral-400">{t('tagline')}</p>
            <div className="flex gap-3 pt-2">
              {/* Social media links */}
              <a
                href="https://wa.me/905324533802?text=Merhaba,%20web%20sitenizden%20ulaşıyorum.%20Tesisat%20hizmeti%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#0F766E] hover:bg-[#075E54] rounded-full flex items-center justify-center text-white transition-all shadow-md hover:shadow-lg"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ozinanyapi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-full flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="mailto:demirtopdavut@gmail.com"
                className="w-10 h-10 bg-neutral-800 hover:bg-primary rounded-full flex items-center justify-center text-neutral-300 hover:text-white transition-all"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h2 className="font-bold text-white uppercase tracking-wider text-sm">
              {t('contact')}
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                <a href="tel:+905324533802" className="hover:text-primary transition-colors" dir="ltr">
                  +90 532 453 38 02
                </a>
              </li>
              <li className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5 text-neutral-500 flex-shrink-0" />
                <a href="mailto:demirtopdavut@gmail.com" className="hover:text-primary transition-colors">
                  demirtopdavut@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Namık+Kemal+Mah.+10.Sokak+No:4/A+Esenler+İstanbul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  dangerouslySetInnerHTML={{ __html: t('addressFull') }}
                />
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon className="w-5 h-5 text-neutral-500 flex-shrink-0 mt-0.5" />
                <span>{t('workingHours')}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h2 className="font-bold text-white uppercase tracking-wider text-sm">
              {t('quickLinks')}
            </h2>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h2 className="font-bold text-white uppercase tracking-wider text-sm">
              {t('legal')}
            </h2>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-neutral-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-neutral-400">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
