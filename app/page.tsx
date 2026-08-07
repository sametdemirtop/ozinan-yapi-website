import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function RootPage() {
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language') || '';
  
  // Tarayıcı dilini tespit et
  let detectedLocale = 'tr'; // Varsayılan Türkçe
  
  if (acceptLanguage.includes('en')) {
    detectedLocale = 'en';
  } else if (acceptLanguage.includes('ar')) {
    detectedLocale = 'ar';
  }
  
  // Tespit edilen dile yönlendir
  redirect(`/${detectedLocale}`);
}
