export interface Solution {
  slug: string;
  title: string;
  description: string;
  serviceSlugs: string[];
}

export const solutions: Solution[] = [
  {
    slug: 'reaktif-ceza-kompanzasyon',
    title: 'Reaktif Ceza ve Kompanzasyon Çözümleri',
    description:
      'Güç faktörünüzü hedeflenen seviyede tutarak reaktif enerji bedeli riskini azaltmaya yönelik ölçüm, bakım ve pano çözümleri.',
    serviceSlugs: ['kompanzasyon-panosu-bakimi'],
  },
  {
    slug: 'guc-kalitesi-uyumluluk',
    title: 'Güç Kalitesi ve Uyumluluk',
    description:
      'Gerilim dalgalanmaları ve harmonik bozulmaların tesis üzerindeki etkisini ölçüp, mevzuata uygun teknik çözümler sunuyoruz.',
    serviceSlugs: ['elektrik-enerjisi-guc-kalitesi', 'harmonik-olcum-raporlama'],
  },
  {
    slug: 'olcum-izleme-raporlama',
    title: 'Ölçüm, İzleme ve Raporlama Sistemleri',
    description:
      'Enerji tüketiminizi ve tesisatınızın güvenlik parametrelerini sürekli izleyerek karar destekleyici raporlar üretiyoruz.',
    serviceSlugs: ['enerji-izleme-raporlama', 'topraklama-olcumu'],
  },
  {
    slug: 'isletme-sureklilik-sorumluluk',
    title: 'İşletme Sürekliliği ve Teknik Sorumluluk',
    description:
      'Yüksek gerilim tesislerinin güvenli işletilmesi ve iç tesisatın mevzuata uygunluğu için sorumluluk ve denetim hizmetleri.',
    serviceSlugs: ['yuksek-gerilim-isletme-sorumlulugu', 'elektrik-ic-tesisati-uygunluk-kontrolu'],
  },
  {
    slug: 'gelecege-yonelik-altyapi',
    title: 'Geleceğe Yönelik Altyapı',
    description:
      'Elektrikli araç şarj altyapısı bakımı ve TS 13912 standardı uygunluk değerlendirmesiyle büyüyen enerji ihtiyaçlarınıza hazırlanın.',
    serviceSlugs: ['elektrikli-arac-sarj-altyapisi-bakim-hizmetleri', 'ts-13912-standardi'],
  },
];
