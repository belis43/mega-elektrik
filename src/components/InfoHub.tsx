import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import Icon from './Icon';
import { infoTopics } from '../data/infoTopics';

export default function InfoHub() {
  return (
    <section className="border-b border-line bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bilgi Merkezi"
          title="Enerji verimliliği üzerine teknik içerikler"
          description="Kompanzasyon, güç kalitesi ve enerji izleme konularında SEO odaklı, açıklayıcı içerikler bu alanda yayınlanacak."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {infoTopics.map((topic) =>
            topic.to ? (
              <Link
                key={topic.title}
                to={topic.to}
                className="group flex flex-col rounded-lg border border-line p-6 transition-colors hover:border-primary-dark/30 hover:bg-surface"
              >
                <h3 className="font-display text-base font-semibold text-ink">{topic.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{topic.teaser}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark">
                  Oku
                  <Icon name="ArrowRight" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ) : (
              <div key={topic.title} className="flex flex-col rounded-lg border border-dashed border-line p-6">
                <h3 className="font-display text-base font-semibold text-ink">{topic.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{topic.teaser}</p>
                <span className="mt-4 inline-flex w-fit items-center rounded-full bg-surface px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-muted">
                  Yakında
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
