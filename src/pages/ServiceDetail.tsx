import { useEffect } from 'react';
import { Link, Navigate, useLocation, useParams } from 'react-router-dom';
import Seo from '../components/Seo';
import CtaBanner from '../components/CtaBanner';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Icon, { type IconName } from '../components/Icon';
import { getServiceBySlug, services } from '../data/services';
import { serviceImages, maintenanceGalleryImages } from '../data/imageAssets';
import { slugify } from '../lib/slugify';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const service = slug ? getServiceBySlug(slug) : undefined;

  // Menüden #anchor ile gelindiğinde ilgili alt başlığa kaydır (örn. #reaktif-ceza)
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [location.hash, service]);

  if (!service) {
    return <Navigate to="/hizmetler" replace />;
  }

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const heroImage = serviceImages[service.slug];

  return (
    <>
      <Seo title={service.title} description={service.metaDescription} path={`/hizmetler/${service.slug}`} />

      <section className="border-b border-line bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-muted">
              <Link to="/" className="hover:text-primary-dark">Ana Sayfa</Link>
              <span aria-hidden="true">/</span>
              <Link to="/hizmetler" className="hover:text-primary-dark">Hizmetler</Link>
              <span aria-hidden="true">/</span>
              <span className="text-ink">{service.title}</span>
            </nav>

            <div className="flex items-start gap-4">
              <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary-dark sm:flex">
                <Icon name={service.icon as IconName} className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-balance font-display text-3xl font-semibold text-ink sm:text-4xl">
                  {service.title}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{service.summary}</p>
              </div>
            </div>
          </div>

          {heroImage && (
            <ImagePlaceholder
              src={heroImage}
              alt={service.title}
              label={service.title}
              aspect="aspect-[4/3]"
              priority
              className="lg:order-last"
            />
          )}
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="space-y-10 lg:col-span-2">
            {service.sections.map((section) => (
              <article
                key={section.heading}
                id={slugify(section.heading)}
                className="scroll-mt-24 border-t border-line pt-6 first:border-t-0 first:pt-0"
              >
                <h2 className="font-display text-xl font-semibold text-ink">{section.heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{section.body}</p>
              </article>
            ))}

            {service.maintenanceSteps && service.maintenanceSteps.length > 0 && (
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-xl font-semibold text-ink">Bakım Süreci Nasıl İşliyor?</h2>
                <ol className="mt-5 space-y-5">
                  {service.maintenanceSteps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary-light font-mono text-xs font-semibold text-secondary-dark">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-ink">{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {service.equipmentChecks && service.equipmentChecks.length > 0 && (
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-xl font-semibold text-ink">Kontrol Edilen Ekipmanlar</h2>
                <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {service.equipmentChecks.map((c) => (
                    <li key={c} className="flex items-start gap-2.5 rounded-md border border-line bg-surface px-3.5 py-2.5 text-sm text-ink">
                      <Icon name="ListChecks" className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.slug === 'kompanzasyon-panosu-bakimi' && (
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-xl font-semibold text-ink">Sahadan Görüntüler</h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {maintenanceGalleryImages.map((src) => (
                    <ImagePlaceholder key={src} src={src} alt="Kompanzasyon bakım çalışması" label="Bakım fotoğrafı" aspect="aspect-[4/3]" />
                  ))}
                </div>
              </div>
            )}

            {service.advantages.length > 0 && (
              <div className="border-t border-line pt-6">
                <h2 className="font-display text-xl font-semibold text-ink">Avantajlar</h2>
                <ul className="mt-4 space-y-2.5">
                  {service.advantages.map((a) => (
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
              <h3 className="font-display text-base font-semibold text-ink">Bu hizmetle ilgili görüşelim</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                İhtiyacınızı değerlendirip size uygun bir saha ziyareti ve teklif süreci planlayalım.
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
                  İlgili Hizmetler
                </h4>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        to={`/hizmetler/${r.slug}`}
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
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
