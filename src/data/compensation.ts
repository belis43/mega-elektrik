export interface CompensationSection {
  heading: string;
  body: string;
}

export interface CompensationTopic {
  slug: string;
  title: string;
  summary: string;
  metaDescription: string;
  sections: CompensationSection[];
  advantages: string[];
}

export const compensationTopics: CompensationTopic[] = [
  {
    slug: 'nedir',
    title: 'Kompanzasyon Nedir? Sistemleri Ne İşe Yarar?',
    summary:
      'Kompanzasyon, şebekeden çekilen reaktif gücün pano içindeki kondansatör grupları ile dengelenerek güç faktörünün hedeflenen seviyeye getirilmesi işlemidir.',
    metaDescription: 'Kompanzasyon nedir, kompanzasyon sistemleri ne işe yarar? | Mega Elektrik.',
    sections: [
      {
        heading: 'Tanım',
        body: 'Kompanzasyon; endüktif yüklerin (motor, trafo, floresan balast vb.) şebekeden çektiği reaktif gücün, kondansatörler aracılığıyla üretilen kapasitif reaktif güçle dengelenmesi işlemidir.',
      },
      {
        heading: 'Neden gereklidir?',
        body: 'Dengelenmemiş reaktif güç; şebeke hatlarında gereksiz akım yüküne, gerilim düşümüne ve işletmeler için reaktif enerji bedeline (cezaya) yol açabilir.',
      },
      {
        heading: 'Sistemin işleyişi',
        body: 'Kompanzasyon panosu, tesisin anlık güç faktörünü ölçen bir röle üzerinden kondansatör kademelerini otomatik olarak devreye alıp çıkararak hedeflenen güç faktörünü korur.',
      },
    ],
    advantages: [
      'Reaktif enerji bedeli riskinin azaltılması',
      'Şebeke hatlarında gereksiz akım yükünün önlenmesi',
      'Gerilim düşümünün azaltılması',
    ],
  },
  {
    slug: 'pano-cesitleri',
    title: 'Kompanzasyon Panosu Çeşitleri',
    summary:
      'Tesisin yük profiline göre sabit kademeli, otomatik kademeli veya harmonik filtreli (detune reaktörlü) kompanzasyon panoları tercih edilebilir.',
    metaDescription: 'Kompanzasyon panosu çeşitleri ve seçim kriterleri | Mega Elektrik.',
    sections: [
      {
        heading: 'Sabit kademeli panolar',
        body: 'Yük profili sabit olan, dalgalanma göstermeyen tesislerde tercih edilebilecek, kademe geçişi otomasyonu içermeyen basit çözümlerdir.',
      },
      {
        heading: 'Otomatik kademeli panolar',
        body: 'Reaktif güç rölesi üzerinden yük değişimine göre kademe sayısını otomatik ayarlayan, dalgalı yük profiline sahip tesislerde tercih edilen panolardır.',
      },
      {
        heading: 'Harmonik filtreli (detune reaktörlü) panolar',
        body: 'Şebekede harmonik distorsiyon bulunan tesislerde, kondansatörleri harmonik rezonanstan koruyacak şekilde detune reaktörle donatılmış panolardır.',
      },
    ],
    advantages: [
      'Yük profiline uygun pano seçimiyle verimli işletme',
      'Harmonik ortamda kondansatör ömrünün korunması',
      'İhtiyaca göre ölçeklenebilir sistem tasarımı',
    ],
  },
  {
    slug: 'hesabi-nasil-yapilir',
    title: 'Kompanzasyon Hesabı Nasıl Yapılır?',
    summary:
      'Kompanzasyon gücü; mevcut güç faktörü, hedeflenen güç faktörü ve tesisin aktif güç tüketimi baz alınarak hesaplanır.',
    metaDescription: 'Kompanzasyon hesabı nasıl yapılır, hangi veriler gereklidir? | Mega Elektrik.',
    sections: [
      {
        heading: 'Gerekli veriler',
        body: 'Hesaplama için tesisin aktif güç tüketimi (kW), mevcut güç faktörü (cosφ) ve hedeflenen güç faktörü değerleri gereklidir. Bu veriler genellikle elektrik faturası veya sayaç kayıtlarından elde edilir.',
      },
      {
        heading: 'Hesaplama mantığı',
        body: 'Mevcut ve hedeflenen güç faktörüne karşılık gelen reaktif güç değerleri arasındaki fark, gerekli kompanzasyon gücünü (kVAr) verir. Hatalı hesaplama; yetersiz kompanzasyona veya aşırı kompanzasyona (kapasitif ceza riski) yol açabilir.',
      },
      {
        heading: 'Saha ölçümünün önemi',
        body: 'Yük profili gün içinde değişkenlik gösteren tesislerde, tek bir fatura verisi yerine saha ölçümüyle doğrulanmış hesaplama daha güvenilir sonuç verir.',
      },
    ],
    advantages: [
      'Doğru boyutlandırılmış, gereksiz maliyet oluşturmayan sistem',
      'Kapasitif ceza riskinin önlenmesi',
      'Saha verisiyle doğrulanmış hesaplama',
    ],
  },
  {
    slug: 'kondansatoru',
    title: 'Kompanzasyon Kondansatörü',
    summary:
      'Kondansatörler, kompanzasyon sisteminin kapasitif reaktif gücü üreten temel bileşenidir; doğru seçim ve düzenli kontrol sistem ömrünü doğrudan etkiler.',
    metaDescription: 'Kompanzasyon kondansatörü seçimi ve kontrolü | Mega Elektrik.',
    sections: [
      {
        heading: 'Kondansatör seçimi',
        body: 'Kondansatör gücü (kVAr), gerilim sınıfı ve harmonik ortama uygunluk (detune/standart), tesisin özelliklerine göre belirlenmelidir.',
      },
      {
        heading: 'Kondansatör ömrünü etkileyen faktörler',
        body: 'Aşırı gerilim, yüksek ortam sıcaklığı ve harmonik distorsiyon, kondansatörlerin beklenenden erken yıpranmasına neden olabilir.',
      },
      {
        heading: 'Periyodik kontrol',
        body: 'Kapasite ölçümü ve görsel muayene ile şişme, sızıntı veya bağlantı gevşemesi gibi erken uyarı belirtileri düzenli olarak kontrol edilmelidir.',
      },
    ],
    advantages: [
      'Doğru seçimle uzun kondansatör ömrü',
      'Erken arıza belirtilerinin tespiti',
      'Harmonik ortama uygun kondansatör kullanımı',
    ],
  },
  {
    slug: 'arizasi',
    title: 'Kompanzasyon Arızası',
    summary:
      'Sahada en sık karşılaşılan kompanzasyon arızaları arasında şişmiş kondansatörler, aşırı ısınan kontaktörler ve hatalı kademe geçişleri yer alır.',
    metaDescription: 'Sık karşılaşılan kompanzasyon arızaları ve çözüm yaklaşımı | Mega Elektrik.',
    sections: [
      {
        heading: 'Sık karşılaşılan arıza tipleri',
        body: 'Şişmiş/patlamış kondansatörler, aşırı ısınan kontaktörler, hatalı kademe geçişleri ve harmonik kaynaklı erken kondansatör yorulması sahada en sık görülen arızalardır.',
      },
      {
        heading: 'Arıza belirtileri',
        body: 'Beklenmedik sigorta atmaları, reaktif güç rölesinde sürekli kademe geçişi (flip-flop) ve pano içinde anormal ısınma, arıza öncesi fark edilebilecek belirtiler arasındadır.',
      },
      {
        heading: 'Müdahale yaklaşımı',
        body: 'Arıza tespiti için termal görüntüleme ve kapasite ölçümü yapılır; sorunun kaynağına göre kondansatör, kontaktör veya röle değişimi planlanır.',
      },
    ],
    advantages: [
      'Erken belirtilerle önlenebilir plansız duruşlar',
      'Termal görüntülemeyle hızlı arıza tespiti',
      'Kaynağa yönelik, gereksiz parça değişimi olmayan müdahale',
    ],
  },
];

export const getCompensationTopicBySlug = (slug: string): CompensationTopic | undefined =>
  compensationTopics.find((t) => t.slug === slug);
