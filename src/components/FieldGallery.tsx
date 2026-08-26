import SectionHeading from './SectionHeading';
import ImagePlaceholder from './ImagePlaceholder';
import {
  serviceImages,
  measurementImage,
  servicesListingImage,
  compensationImages,
  fieldGalleryImages,
} from '../data/imageAssets';

interface FieldCard {
  caption: string;
  image: string;
}

// Saha çalışmaları portfolyo galerisi. Fotoğraf stokumuz sınırlı olduğu
// için bazı kareler sitenin diğer bölümleriyle paylaşılıyor; yeni saha
// fotoğrafları geldiğinde buradaki yollar güncellenebilir.
const cards: FieldCard[] = [
  { caption: 'Kompanzasyon Bakımı', image: serviceImages['kompanzasyon-panosu-bakimi'] },
  { caption: 'Saha Ölçümü', image: fieldGalleryImages[0].src },
  { caption: 'Pano Kontrolü', image: servicesListingImage },
  { caption: 'Enerji Kalitesi Ölçümü', image: measurementImage },
  { caption: 'Teknik Servis', image: compensationImages.nedir },
];

export default function FieldGallery() {
  return (
    <section className="border-b border-line bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Sahadan"
          title="Saha çalışmalarımızdan kareler"
          description="Ölçüm, bakım ve kurulum çalışmalarımızdan gerçek saha görüntüleri."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {cards.map((card) => (
            <div
              key={card.caption}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl shadow-card transition-transform duration-300 ease-out hover:-translate-y-1.5"
            >
              <ImagePlaceholder
                src={card.image}
                alt={card.caption}
                label={card.caption}
                aspect="h-full"
                rounded="rounded-none"
                className="h-full scale-100 transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Varsayılan hafif koyu zemin — hover'da pastel turkuaz/lacivert gradient'e geçiş yapar */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-300 ease-out group-hover:opacity-0"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#071A2E]/90 via-[#071A2E]/55 to-[#8FE8E4]/35 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="absolute inset-0 flex items-end p-4 sm:items-center sm:justify-center sm:p-5">
                <p className="text-balance text-left font-display text-sm font-bold leading-tight text-white sm:text-center sm:text-base">
                  {card.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
