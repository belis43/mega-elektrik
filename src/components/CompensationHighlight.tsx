import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import ImagePlaceholder from './ImagePlaceholder';
import Icon from './Icon';
import { compensationTopics } from '../data/compensation';
import { compensationImages } from '../data/imageAssets';

export default function CompensationHighlight() {
  return (
    <section className="border-b border-line bg-surface-alt py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ImagePlaceholder
            src={compensationImages.nedir}
            alt="Kompanzasyon panosu"
            label="Kompanzasyon panosu"
            aspect="aspect-[4/3]"
            className="lg:order-first"
          />

          <div>
            <SectionHeading
              eyebrow="Kompanzasyon"
              title="Reaktif ceza riskini azaltan, ömrü uzun bir sistem"
              description="Kompanzasyon, doğru boyutlandırıldığında hem faturalarda hem de ekipman ömründe fark yaratır. Nedir, nasıl hesaplanır ve nasıl bakım gerektirir — tüm konuları ayrı ayrı ele aldık."
            />
            <ul className="mt-6 space-y-2">
              {compensationTopics.map((t) => (
                <li key={t.slug}>
                  <Link
                    to={`/kompanzasyon/${t.slug}`}
                    className="group flex items-center gap-2 py-1.5 text-sm font-medium text-ink hover:text-primary-dark"
                  >
                    <Icon
                      name="ArrowRight"
                      className="h-3.5 w-3.5 shrink-0 text-primary-dark transition-transform group-hover:translate-x-0.5"
                    />
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/hizmetler/kompanzasyon-panosu-bakimi"
                className="inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-primary-dark hover:text-white"
              >
                Bakım Hizmetini İncele
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>
              <Link
                to="/kompanzasyon"
                className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-secondary hover:text-secondary"
              >
                Tüm Kompanzasyon Konuları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
