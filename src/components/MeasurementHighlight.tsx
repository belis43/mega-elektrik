import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import ImagePlaceholder from './ImagePlaceholder';
import Icon, { type IconName } from './Icon';
import { getServiceBySlug } from '../data/services';
import { measurementImage } from '../data/imageAssets';

const featuredSlugs = ['elektrik-enerjisi-guc-kalitesi', 'harmonik-olcum-raporlama', 'enerji-izleme-raporlama'];

export default function MeasurementHighlight() {
  const featured = featuredSlugs.map((s) => getServiceBySlug(s)).filter(Boolean);

  return (
    <section className="border-b border-line bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Ölçüm & Raporlama"
              title="Enerji kalitesini görünür kılıyoruz"
              description="Güç kalitesi, harmonik seviye ve tüketim verilerini saha ölçümleriyle kayıt altına alıp anlaşılır raporlara dönüştürüyoruz. Karar, tahmine değil ölçüme dayanır."
            />
            <ul className="mt-8 space-y-5">
              {featured.map(
                (s) =>
                  s && (
                    <li key={s.slug}>
                      <Link to={`/hizmetler/${s.slug}`} className="group flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary-dark">
                          <Icon name={s.icon as IconName} className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="font-display text-base font-semibold text-ink group-hover:text-primary-dark">
                            {s.title}
                          </p>
                          <p className="mt-1 text-sm text-muted">{s.shortDescription}</p>
                        </div>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>

          <ImagePlaceholder
            src={measurementImage}
            alt="Ölçüm çalışması — multimetre ile pano üzerinde değer ölçümü"
            label="Ölçüm çalışması"
            aspect="aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  );
}
