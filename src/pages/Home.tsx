import Seo from '../components/Seo';
import Hero from '../components/Hero';
import HeroHighlights from '../components/HeroHighlights';
import ServicesGrid from '../components/ServicesGrid';
import ProcessSteps from '../components/ProcessSteps';
import MeasurementHighlight from '../components/MeasurementHighlight';
import CompensationHighlight from '../components/CompensationHighlight';
import Stats from '../components/Stats';
import FieldGallery from '../components/FieldGallery';
import WhyUs from '../components/WhyUs';
import References from '../components/References';
import FaqPreview from '../components/FaqPreview';
import CtaBanner from '../components/CtaBanner';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <>
      <Seo
        title="Enerji Verimliliği ve Güç Kalitesi Çözümleri"
        description="Mega Elektrik; kompanzasyon, güç kalitesi, harmonik ölçüm, enerji izleme ve yüksek gerilim işletme sorumluluğu alanlarında teknik hizmet ve danışmanlık sunar."
        path="/"
      />
      <Hero />
      <HeroHighlights />
      <Reveal>
        <ServicesGrid />
      </Reveal>
      <Reveal>
        <ProcessSteps />
      </Reveal>
      <Reveal>
        <MeasurementHighlight />
      </Reveal>
      <Reveal>
        <CompensationHighlight />
      </Reveal>
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <FieldGallery />
      </Reveal>
      <Reveal>
        <WhyUs />
      </Reveal>
      <Reveal>
        <References />
      </Reveal>
      <Reveal>
        <FaqPreview />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
    </>
  );
}
