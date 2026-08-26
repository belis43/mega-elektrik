import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import FaqAccordion from './FaqAccordion';
import Icon from './Icon';
import { faqItems } from '../data/faq';

export default function FaqPreview() {
  return (
    <section className="border-b border-line bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="S.S.S."
            title="Sıkça sorulan sorular"
            description="Kompanzasyon, ölçüm ve enerji verimliliği hakkında en çok gelen sorulardan bir kısmı."
          />
          <Link
            to="/sss"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-dark hover:text-primary"
          >
            Tüm Soruları Gör
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-line bg-white px-6">
          <FaqAccordion items={faqItems.slice(0, 4)} />
        </div>
      </div>
    </section>
  );
}
