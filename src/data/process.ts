export interface ProcessStep {
  index: string;
  title: string;
  description: string;
  icon: 'Search' | 'AudioWaveform' | 'BarChart3' | 'Lightbulb' | 'Wrench' | 'RotateCw';
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Analiz',
    description:
      'Tesisin elektrik altyapısı, yük profili ve mevcut sorun alanları hakkında ön bilgi toplanır.',
    icon: 'Search',
  },
  {
    index: '02',
    title: 'Ölçüm',
    description:
      'Saha ölçümleriyle güç kalitesi, harmonik seviye, topraklama direnci gibi teknik veriler kayıt altına alınır.',
    icon: 'AudioWaveform',
  },
  {
    index: '03',
    title: 'Değerlendirme',
    description:
      'Ölçüm sonuçları ilgili standartlarla karşılaştırılarak tesise özgü risk ve iyileştirme alanları belirlenir.',
    icon: 'BarChart3',
  },
  {
    index: '04',
    title: 'Çözüm',
    description:
      'Bulgulara uygun teknik çözüm; pano revizyonu, filtre, bakım planı veya danışmanlık şeklinde önerilir.',
    icon: 'Lightbulb',
  },
  {
    index: '05',
    title: 'Uygulama',
    description:
      'Onaylanan çözüm, saha ekibimiz tarafından teknik prosedürlere uygun şekilde hayata geçirilir.',
    icon: 'Wrench',
  },
  {
    index: '06',
    title: 'Takip',
    description:
      'Uygulama sonrası performans izlenir, gerektiğinde periyodik bakım ve raporlama süreciyle sürdürülür.',
    icon: 'RotateCw',
  },
];
