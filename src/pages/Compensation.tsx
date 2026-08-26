import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import CtaBanner from '../components/CtaBanner';
import Icon from '../components/Icon';
import { compensationTopics } from '../data/compensation';

export default function Compensation() {
  return (
    <>
      <Seo
        title="Kompanzasyon"
        description="Kompanzasyon nedir, panosu çeşitleri, hesabı, kondansatörü ve sık karşılaşılan arızalar hakkında teknik içerikler."
        path="/kompanzasyon"
      />

      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kompanzasyon"
            title="Kompanzasyon hakkında bilmeniz gerekenler"
            description="Kompanzasyonun ne olduğundan pano çeşitlerine, hesap yöntemine ve sık karşılaşılan arızalara kadar teknik konuları ayrı sayfalarda detaylandırdık."
          />
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {compensationTopics.map((topic) => (
              <Link
                key={topic.slug}
                to={`/kompanzasyon/${topic.slug}`}
                className="group flex flex-col rounded-lg border border-line bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-dark/30 hover:shadow-card"
              >
                <h2 className="font-display text-lg font-semibold text-ink">{topic.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{topic.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark">
                  Detayları incele
                  <Icon
                    name="ArrowRight"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
