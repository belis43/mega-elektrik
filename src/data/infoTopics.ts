export interface InfoTopic {
  title: string;
  teaser: string;
  /** Sitede karşılığı olan bir sayfa varsa buraya yönlendirilir; yoksa "Yakında" olarak gösterilir. */
  to?: string;
}

// Bu başlıklar ileride ayrı, SEO odaklı makalelere dönüşecek şekilde
// planlanmıştır. Şimdilik sahte makale içeriği üretilmemiştir; karşılığı
// olan konular ilgili sayfaya yönlendirilir, diğerleri "Yakında" etiketiyle
// gösterilir.
export const infoTopics: InfoTopic[] = [
  {
    title: 'Kompanzasyon Nedir?',
    teaser: 'Reaktif güç, güç faktörü ve kompanzasyon sisteminin temel mantığı.',
    to: '/kompanzasyon/nedir',
  },
  {
    title: 'Reaktif Ceza Nedir?',
    teaser: 'Güç faktörünün düşmesi faturaya nasıl yansır, nasıl önlenir?',
  },
  {
    title: 'Harmonik Nedir?',
    teaser: 'Şebekedeki harmonik distorsiyon ekipmanları nasıl etkiler?',
    to: '/hizmetler/harmonik-olcum-raporlama',
  },
  {
    title: 'Güç Kalitesi Neden Önemlidir?',
    teaser: 'Düşük güç kalitesinin işletme sürekliliğine etkisi.',
    to: '/hizmetler/elektrik-enerjisi-guc-kalitesi',
  },
  {
    title: 'Enerji İzleme Neden Yapılır?',
    teaser: 'Sürekli izlemenin verimlilik kararlarına sağladığı görünürlük.',
    to: '/hizmetler/enerji-izleme-raporlama',
  },
];
