import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import CtaBanner from '../components/CtaBanner';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { services } from '../data/services';
import { servicesListingImage } from '../data/imageAssets';

export default function Services() {
  return (
    <>
      <Seo
        title="Hizmetlerimiz"
        description="Kompanzasyon, güç kalitesi, harmonik ölçüm, enerji izleme, topraklama ölçümü ve teknik danışmanlık hizmetlerimizi inceleyin."
        path="/hizmetler"
      />
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Enerji altyapınızın her katmanı için teknik hizmet"
            description="Ölçüm, bakım, raporlama ve danışmanlık hizmetlerimizin tamamına buradan ulaşabilirsiniz. Detay sayfasında her hizmetin kapsamını inceleyebilirsiniz."
          />
          <ImagePlaceholder
            src={servicesListingImage}
            alt="Mega Elektrik saha ve pano çalışması"
            label="Hizmetler görseli"
            aspect="aspect-[4/3]"
            priority
          />
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
