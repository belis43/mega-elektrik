import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import CtaBanner from '../components/CtaBanner';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { aboutContent } from '../data/siteContent';
import { teamImages } from '../data/imageAssets';
import { values } from '../data/values';
import Icon, { type IconName } from '../components/Icon';

export default function About() {
  return (
    <>
      <Seo
        title="Hakkımızda"
        description="Mega Elektrik'in çalışma yaklaşımı, teknik odak alanları ve saha disiplinine dayalı hizmet anlayışı."
        path="/hakkimizda"
      />

      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <SectionHeading eyebrow="Hakkımızda" title="Enerji altyapınız için teknik güvenilirlik ortağı" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{aboutContent.intro}</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{aboutContent.approach}</p>
          </div>
          <ImagePlaceholder src={teamImages.main} alt="Mega Elektrik teknik ekibi" label="Teknik ekip" aspect="aspect-[4/3]" priority />
        </div>
      </section>

      <section className="border-b border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-line bg-white p-7">
              <h2 className="font-display text-lg font-semibold text-ink">Vizyon &amp; Misyon</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{aboutContent.mission}</p>
            </div>
            <div className="rounded-lg border border-line bg-white p-7">
              <h2 className="font-display text-lg font-semibold text-ink">Çalışma Yaklaşımımız</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{aboutContent.approach}</p>
            </div>
          </div>
          <p className="mt-6 rounded-md border border-dashed border-line bg-white p-4 text-xs leading-relaxed text-muted">
            {aboutContent.placeholderNote}
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Değerlerimiz" description="Her projede önceliklendirdiğimiz teknik ilkeler." />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-lg border border-line p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary-light text-primary-dark">
                  <Icon name={v.icon as IconName} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
