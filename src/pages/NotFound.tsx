import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Icon from '../components/Icon';
import Waveform from '../components/Waveform';

export default function NotFound() {
  return (
    <>
      <Seo title="Sayfa Bulunamadı" description="Aradığınız sayfa bulunamadı." path="/404" />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-24 text-center">
        <span className="font-mono text-sm font-semibold uppercase tracking-widest text-primary-dark">404</span>
        <h1 className="mt-4 text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
          Aradığınız sayfa bulunamadı
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          Bağlantı hatalı olabilir veya sayfa taşınmış olabilir. Ana sayfaya dönerek devam edebilirsiniz.
        </p>
        <Waveform className="mt-8 h-16 w-64 opacity-40" />
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-primary-dark hover:text-white"
        >
          Ana Sayfaya Dön
          <Icon name="ArrowRight" className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
