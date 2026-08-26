import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Icon from '../components/Icon';
import { getCompensationTopicBySlug, compensationTopics } from '../data/compensation';
import { compensationImages } from '../data/imageAssets';
import { slugify } from '../lib/slugify';

export default function CompensationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getCompensationTopicBySlug(slug) : undefined;

  if (!topic) {
    return <Navigate to="/kompanzasyon" replace />;
  }

  const related = compensationTopics.filter((t) => t.slug !== topic.slug).slice(0, 4);
  const heroImage = compensationImages[topic.slug];

  return (
    <>
      <Seo title={topic.title} description={topic.metaDescription} path={`/kompanzasyon/${topic.slug}`} />

      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted">
            <Link to="/" className="hover:text-primary-dark">Ana Sayfa</Link>
            <span aria-hidden="true">/</span>
            <Link to="/kompanzasyon" className="hover:text-primary-dark">Kompanzasyon</Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{topic.title}</span>
          </nav>

          <h1 className="text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">{topic.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{topic.summary}</p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-10 lg:col-span-2">
            {heroImage && (
              <ImagePlaceholder
                src={heroImage}
                alt={topic.title}
                label={topic.title}
                aspect="aspect-[16/7]"
                priority
              />
            )}

            {topic.sections.map((section) => (
              <article
                key={section.heading}
                id={slugify(section.heading)}
                className="scroll-mt-24 border-t border-line pt-6 first:border-t-0 first:pt-0"
              >
                <h2 className="font-display text-xl font-semibold text-ink">{section.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{section.body}</p>
              </article>
            ))}

            {topic.advantages.length > 0 && (
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-xl font-semibold text-ink">Öne çıkan noktalar</h2>
                <ul className="mt-4 space-y-2.5">
                  {topic.advantages.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-sm text-muted sm:text-base">
                      <Icon name="ShieldCheck" className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-lg border border-line bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-ink">Bu konuyla ilgili görüşelim</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Tesisinize özel kompanzasyon ihtiyacını değerlendirip uygun bir saha ziyareti planlayalım.
              </p>
              <Link
                to="/iletisim"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-primary-dark hover:text-white"
              >
                Teklif Talep Et
                <Icon name="ArrowRight" className="h-4 w-4" />
              </Link>

              <div className="mt-8 border-t border-line pt-6">
                <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
                  Diğer Kompanzasyon Konuları
                </h4>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/kompanzasyon/${r.slug}`}
                        className="group flex items-center justify-between gap-2 text-sm font-medium text-ink hover:text-primary-dark"
                      >
                        {r.title}
                        <Icon
                          name="ArrowRight"
                          className="h-3.5 w-3.5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary-dark"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border-t border-line pt-6">
                <Link
                  to="/hizmetler/kompanzasyon-panosu-bakimi"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary hover:text-secondary-dark"
                >
                  Kompanzasyon Panosu Bakımı hizmetini incele
                  <Icon name="ArrowRight" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
