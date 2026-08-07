import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n-config';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
