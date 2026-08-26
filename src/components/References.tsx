import SectionHeading from './SectionHeading';
import ImagePlaceholder from './ImagePlaceholder';
import { projects } from '../data/projects';

export default function References() {
  return (
    <section className="border-b border-line bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Referanslar"
          title="Referans ve proje çalışmalarımız"
          description="Onaylanan gerçek referanslarımız firma tarafından paylaşıldıkça bu bölüme eklenecektir."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className={`overflow-hidden rounded-lg border bg-white ${
                p.isPlaceholder ? 'border-dashed border-line' : 'border-line'
              }`}
            >
              <ImagePlaceholder src={p.image} alt={p.name} label="Proje görseli" aspect="aspect-[4/3]" rounded="rounded-none" />
              <div className="p-5">
                <p className="font-display text-base font-semibold text-ink">{p.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary-dark">{p.service}</p>
                <p className="mt-2 text-xs text-muted">
                  {p.sector} · {p.city}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
