import { Link } from 'react-router-dom';
import Icon from './Icon';
import Waveform from './Waveform';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-gradient-to-br from-primary-light via-white to-secondary-light py-16 sm:py-20">
      <Waveform className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full opacity-25" />
      <div className="relative mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-display text-2xl font-semibold text-ink sm:text-3xl">
          Tesisinizin enerji altyapısını birlikte değerlendirelim
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted sm:text-base">
          İhtiyacınızı anlamak için kısa bir teknik görüşme yeterli. Uygun saha ziyaret planını birlikte belirleyelim.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/iletisim"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary-dark hover:text-white hover:shadow-lg"
          >
            Teknik Görüşme Başlat
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
          <Link
            to="/hizmetler"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-secondary hover:text-secondary hover:shadow-lg"
          >
            Hizmetleri İncele
          </Link>
        </div>
      </div>
    </section>
  );
}
