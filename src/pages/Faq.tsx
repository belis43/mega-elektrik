import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import FaqAccordion from '../components/FaqAccordion';
import CtaBanner from '../components/CtaBanner';
import { faqItems } from '../data/faq';

export default function Faq() {
  return (
    <>
      <Seo
        title="Sıkça Sorulan Sorular"
        description="Kompanzasyon, reaktif ceza, harmonik ölçüm, enerji kalitesi ve topraklama ölçümü hakkında sıkça sorulan sorular."
        path="/sss"
      />

      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="S.S.S."
            title="Sıkça sorulan sorular"
            description="Kompanzasyon, ölçüm ve enerji verimliliği hakkında en çok gelen soruları bir araya getirdik."
          />
        </div>
      </section>

      <section className="bg-white pb-16 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
