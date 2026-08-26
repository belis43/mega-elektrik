import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import CtaBanner from '../components/CtaBanner';
import Icon, { type IconName } from '../components/Icon';
import { solutions } from '../data/solutions';
import { getServiceBySlug } from '../data/services';

export default function Solutions() {
  const location = useLocation();

  // Header'daki Çözümler dropdown'ından #slug ile gelindiğinde ilgili gruba kaydır.
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  }, [location.hash]);

  return (
    <>
      <Seo
        title="Çözümler"
        description="İhtiyacınıza göre gruplandırılmış enerji verimliliği, güç kalitesi ve işletme sürekliliği çözümlerimizi keşfedin."
        path="/cozumler"
      />

      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Çözümler"
            title="İhtiyacınıza göre gruplandırılmış teknik çözümler"
            description="Hizmetlerimizi, işletmelerin en sık karşılaştığı teknik ihtiyaçlar etrafında gruplandırdık. Size en yakın başlığı seçerek ilgili hizmetlere ulaşabilirsiniz."
          />
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-content space-y-6 px-4 sm:px-6 lg:px-8">
          {solutions.map((solution) => (
            <div
              key={solution.slug}
              id={solution.slug}
              className="scroll-mt-28 grid grid-cols-1 gap-6 rounded-lg border border-line bg-white p-6 sm:p-8 lg:grid-cols-3 lg:items-start"
            >
              <div className="lg:col-span-1">
                <h2 className="font-display text-xl font-semibold text-ink">{solution.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{solution.description}</p>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-2">
                {solution.serviceSlugs.map((slug) => {
                  const service = getServiceBySlug(slug);
                  if (!service) return null;
                  return (
                    <li key={slug}>
                      <Link
                        to={`/hizmetler/${slug}`}
                        className="group flex items-center gap-3 rounded-md border border-line p-4 transition-colors hover:border-primary/40 hover:bg-primary-light/40"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary-light text-primary-dark">
                          <Icon name={service.icon as IconName} className="h-4 w-4" />
                        </span>
                        <span className="flex-1 text-sm font-medium text-ink">{service.title}</span>
                        <Icon
                          name="ArrowRight"
                          className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-primary-dark"
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
