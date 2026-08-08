import { Link } from '@/i18n/routing';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-white">
      <p className="text-6xl font-bold text-primary mb-4">404</p>
      <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
        Sayfa bulunamadı
      </h1>
      <p className="text-neutral-600 mb-8 max-w-md">
        Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.
      </p>
      <Link
        href="/"
        className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
