import { compensationImages, servicesListingImage, serviceImages, heroImages, fieldGalleryImages } from './imageAssets';

export interface SolutionCardItem {
  title: string;
  description: string;
  image: string;
  to: string;
  icon: 'ShieldCheck' | 'Activity' | 'AudioWaveform' | 'LineChart' | 'Zap';
}

// Ana sayfadaki büyük fotoğraflı çözüm kartları. Gerçek fotoğraf
// stokumuz sınırlı olduğu için bazı görseller sitenin başka
// bölümleriyle paylaşılıyor; yeni saha fotoğrafları eklendiğinde
// buradaki yollar güncellenebilir (bkz. src/data/imageAssets.ts).
export const solutionCards: SolutionCardItem[] = [
  {
    title: 'Kompanzasyon',
    description: 'Reaktif güç kompanzasyonu ile enerji verimliliğini artırıyoruz.',
    image: compensationImages.nedir,
    to: '/kompanzasyon',
    icon: 'ShieldCheck',
  },
  {
    title: 'Güç Kalitesi',
    description: 'Elektriksel parametreleri ölçüyor, kaliteyi ve sürekliliği artırıyoruz.',
    image: servicesListingImage,
    to: '/hizmetler/elektrik-enerjisi-guc-kalitesi',
    icon: 'Activity',
  },
  {
    title: 'Harmonik Ölçüm',
    description: 'Harmonik analizle sistem güvenliğini ve ekipman ömrünü koruyoruz.',
    image: serviceImages['kompanzasyon-panosu-bakimi'],
    to: '/hizmetler/harmonik-olcum-raporlama',
    icon: 'AudioWaveform',
  },
  {
    title: 'Enerji İzleme',
    description: 'Tüketimi izliyor, raporluyor ve verimliliği sürekli optimize ediyoruz.',
    image: fieldGalleryImages[0].src,
    to: '/hizmetler/enerji-izleme-raporlama',
    icon: 'LineChart',
  },
  {
    title: 'Elektrik Altyapı',
    description: 'Güvenli, sürdürülebilir ve ölçeklenebilir altyapı çözümleri sunuyoruz.',
    image: heroImages.main,
    to: '/cozumler',
    icon: 'Zap',
  },
];
