import { Link } from '@/i18n/routing';
import { SITE_URL } from '@/lib/site';

export type BreadcrumbItem = {
  name: string;
  /** Path without locale, e.g. "hizmetler" or "" for home */
  path: string;
};

type Props = {
  locale: string;
  items: BreadcrumbItem[];
};

export function BreadcrumbJsonLd({ locale, items }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const href = item.path
        ? `${SITE_URL}/${locale}/${item.path}`
        : `${SITE_URL}/${locale}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: href,
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Breadcrumbs({ locale, items }: Props) {
  return (
    <>
      <BreadcrumbJsonLd locale={locale} items={items} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const href = item.path ? `/${item.path}` : '/';

            return (
              <li key={`${item.path}-${index}`} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                )}
                {isLast ? (
                  <span className="text-neutral-800 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
