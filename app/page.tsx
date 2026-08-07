import { permanentRedirect } from 'next/navigation';

/** Fallback — middleware already 308s `/` → `/tr`. */
export default function RootPage() {
  permanentRedirect('/tr');
}
