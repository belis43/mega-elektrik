export interface ServiceSection {
  heading: string;
  body: string;
}

export interface MaintenanceStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  icon: string; // lucide-react icon adı, Icon.tsx içinde eşlenir
  title: string;
  shortDescription: string;
  summary: string;
  metaDescription: string;
  sections: ServiceSection[];
  advantages: string[];
  /** Bakım süreci adımları (opsiyonel) — OTI Grup referansındaki gibi süreç odaklı hizmetlerde kullanılır. */
  maintenanceSteps?: MaintenanceStep[];
  /** Saha ekibinin bakım sırasında kontrol ettiği kalemler (opsiyonel). */
  equipmentChecks?: string[];
}

// NOT: Başlıklar kullanıcı tarafından verilen listeyle birebir aynıdır,
// kısaltılmamıştır. URL slug'ları SEO gereği Türkçe karaktersiz tutulmuştur.
export const services: Service[] = [
  {
    slug: 'kompanzasyon-panosu-bakimi',
    icon: 'Gauge',
    title: 'Kompanzasyon Panosu Bakımı',
    shortDescription:
      'Reaktif güç kaynaklı ceza riskini azaltmak ve pano ömrünü uzatmak için periyodik bakım ve arıza müdahalesi.',
    summary:
      'Kompanzasyon panolarınızın güvenli ve verimli çalışması için periyodik bakım, kondansatör/reaktör kontrolü ve arıza giderme hizmeti sunuyoruz. Kompanzasyon konusundaki teknik bilgi içerikleri için Kompanzasyon menüsünü inceleyebilirsiniz.',
    metaDescription: 'Kompanzasyon panosu bakımı, periyodik kontrol ve arıza giderme hizmetleri | Mega Elektrik.',
    sections: [
      {
        heading: 'Bakım kapsamı',
        body: 'Periyodik bakım kapsamında kondansatör kapasite ölçümü, kontaktör ve sigorta kontrolü, termal görüntüleme ile bağlantı noktalarının incelenmesi ve reaktif güç rölesi kalibrasyonu yapılır.',
      },
      {
        heading: 'Arıza müdahalesi',
        body: 'Şişmiş/patlamış kondansatörler, aşırı ısınan kontaktörler ve hatalı kademe geçişleri gibi sahada sık karşılaşılan arızalara hızlı teknik müdahale sağlanır.',
      },
      {
        heading: 'Bakım periyodu',
        body: 'Bakım sıklığı; panonun kademe sayısı, yük profili ve ortam koşullarına göre belirlenir. Düzenli bakım, beklenmedik duruşların ve kondansatör kaynaklı arızaların önüne geçer.',
      },
    ],
    advantages: [
      'Reaktif enerji bedeli (ceza) riskinin azaltılması',
      'Kondansatör ve kontaktör ömrünün uzatılması',
      'Plansız duruşların azaltılması',
      'Fotoğraflı, karşılaştırılabilir bakım raporu',
    ],
    maintenanceSteps: [
      {
        title: 'Ön Kontrol ve Güvenlik',
        description: 'Panonun enerjisi güvenli prosedürle kesilir, kişisel koruyucu ekipman ve izolasyon kontrolleri yapılır.',
      },
      {
        title: 'Görsel Muayene',
        description: 'Kondansatör gövdeleri, bara bağlantıları ve kablo terminasyonları şişme, renk değişimi ve gevşeklik açısından incelenir.',
      },
      {
        title: 'Termal Görüntüleme',
        description: 'Termal kamera ile kontaktör ve bağlantı noktalarında anormal ısınma olup olmadığı tespit edilir.',
      },
      {
        title: 'Kapasite Ölçümü',
        description: 'Her kondansatör grubunun gerçek kapasitesi ölçülerek etiket değeriyle karşılaştırılır.',
      },
      {
        title: 'Röle ve Kademe Testi',
        description: 'Reaktif güç rölesinin kademe geçiş mantığı ve zamanlamaları test edilir.',
      },
      {
        title: 'Raporlama',
        description: 'Tüm bulgular fotoğraflarla birlikte karşılaştırmalı bir bakım raporunda belgelenir.',
      },
    ],
    equipmentChecks: [
      'Kondansatör grupları ve kapasite değerleri',
      'Kontaktör ve sigorta durumu',
      'Reaktif güç rölesi ve kademe ayarları',
      'Bara ve kablo bağlantı sıkılığı',
      'Termal görüntüleme ile sıcak nokta taraması',
      'Pano içi havalandırma ve toz/nem durumu',
    ],
  },
  {
    slug: 'elektrikli-arac-sarj-altyapisi-bakim-hizmetleri',
    icon: 'BatteryCharging',
    title: 'Elektrikli Araç Şarj Altyapısı Bakım Hizmetleri',
    shortDescription:
      'Elektrikli araç şarj istasyonlarının periyodik bakımı, kontrolü ve arıza müdahalesi.',
    summary:
      'Şarj istasyonlarınızın kesintisiz ve güvenli çalışması için periyodik bakım, elektriksel kontrol ve arıza müdahale hizmeti sağlıyoruz.',
    metaDescription: 'Elektrikli araç şarj altyapısı bakım ve periyodik kontrol hizmetleri | Mega Elektrik.',
    sections: [
      {
        heading: 'Periyodik kontrol',
        body: 'Şarj ünitesinin elektriksel bağlantıları, koruma sistemleri ve iletişim modülleri düzenli aralıklarla kontrol edilir.',
      },
      {
        heading: 'Güvenlik testleri',
        body: 'Topraklama, kaçak akım koruması ve aşırı akım korumasına yönelik testler periyodik olarak tekrarlanarak güvenli kullanım doğrulanır.',
      },
      {
        heading: 'Arıza giderme',
        body: 'Şarj kesintisi, hatalı şarj hızı veya iletişim hatası gibi sorunlarda saha ekibimiz teknik müdahale sağlar.',
      },
    ],
    advantages: [
      'Şarj istasyonunda kesinti süresinin azaltılması',
      'Güvenlik testleriyle doğrulanmış işletme',
      'Planlı bakım takvimiyle öngörülebilir maliyet',
      'Arıza geçmişinin raporlanması',
    ],
  },
  {
    slug: 'enerji-izleme-raporlama',
    icon: 'LineChart',
    title: 'Enerji İzleme, Raporlama',
    shortDescription:
      'Tesisinizin enerji tüketimini sürekli izleyerek verimlilik fırsatlarını ve anormallikleri raporluyoruz.',
    summary:
      'Sürekli enerji izleme sistemleriyle tüketim verilerini şeffaflaştırıyor, verimlilik fırsatlarını somut raporlarla ortaya koyuyoruz.',
    metaDescription: 'Enerji izleme, tüketim raporlama ve verimlilik analizi hizmetleri | Mega Elektrik.',
    sections: [
      {
        heading: 'Enerji izleme işletmelere ne sağlar?',
        body: 'Anlık ve geçmişe dönük tüketim verileri; hangi hat, ekipman veya vardiyanın enerjiyi ne şekilde kullandığını görünür kılar. Bu görünürlük, verimlilik kararlarının veriye dayanarak alınmasını sağlar.',
      },
      {
        heading: 'Anormal tüketim tespiti',
        body: 'Beklenmeyen tüketim artışları, kaçak yükler veya arızalı ekipman kaynaklı sapmalar izleme sistemi üzerinden erken fark edilebilir.',
      },
      {
        heading: 'Periyodik raporlama',
        body: 'Aylık ve yıllık karşılaştırmalı raporlarla tüketim trendleri takip edilir; yönetim kademesine sunulabilecek özet raporlar hazırlanır.',
      },
    ],
    advantages: [
      'Tüketim verisinde tam görünürlük',
      'Erken anormallik tespiti',
      'Karşılaştırılabilir periyodik raporlar',
      'Veriye dayalı verimlilik kararları',
    ],
  },
  {
    slug: 'harmonik-olcum-raporlama',
    icon: 'AudioWaveform',
    title: 'Harmonik Ölçüm, Raporlama',
    shortDescription:
      'Şebekedeki harmonik distorsiyonu ölçerek ekipman ömrünü kısaltan bozucu etkileri raporluyoruz.',
    summary:
      'Harmonik ölçüm ve analiz çalışmalarıyla şebekenizdeki bozucu bileşenleri tespit ediyor, filtreleme ihtiyacını netleştiriyoruz.',
    metaDescription: 'Harmonik ölçüm, THD analizi ve harmonik filtre önerisi | Mega Elektrik.',
    sections: [
      {
        heading: 'Harmonik ölçüm neden yapılır?',
        body: 'Sürücüler, UPS sistemleri ve anahtarlamalı güç kaynakları gibi doğrusal olmayan yükler şebekeye harmonik bileşenler enjekte eder. Bu bileşenler kondansatörlerin, trafoların ve kabloların erken yıpranmasına neden olabilir.',
      },
      {
        heading: 'THD ve tekil harmonikler',
        body: 'Ölçümlerde toplam harmonik distorsiyonu (THD) ile birlikte baskın olan tekil harmonik dereceleri (5., 7., 11. gibi) ayrı ayrı incelenerek kaynağı belirlenmeye çalışılır.',
      },
      {
        heading: 'Filtre ihtiyacı değerlendirmesi',
        body: 'Ölçüm sonuçlarına göre pasif filtre, detune reaktör veya aktif filtre çözümlerinin tesise uygunluğu teknik olarak değerlendirilir ve raporlanır.',
      },
    ],
    advantages: [
      'Ekipman ömrünü kısaltan etkenlerin erken tespiti',
      'Standartlarla karşılaştırmalı ölçüm raporu',
      'Filtre ihtiyacının somut verilerle netleştirilmesi',
      'Kompanzasyon sistemiyle uyumlu değerlendirme',
    ],
  },
  {
    slug: 'elektrik-enerjisi-guc-kalitesi',
    icon: 'Activity',
    title: 'Elektrik Enerjisi Güç Kalitesi',
    shortDescription:
      'Gerilim dalgalanmaları, kesintiler ve bozulmaların tesis üzerindeki etkisini analiz edip çözüm önerileri sunuyoruz.',
    summary:
      'Güç kalitesi analizleriyle gerilim dengesizliği, çökme/yükselme ve bozucu etkileri tespit ederek işletme sürekliliğinizi koruyoruz.',
    metaDescription: 'Güç kalitesi ölçümü, gerilim analizi ve enerji kalitesi iyileştirme hizmetleri | Mega Elektrik.',
    sections: [
      {
        heading: 'Güç kalitesi neden önemlidir?',
        body: 'Düşük güç kalitesi; hassas ekipmanlarda arızalara, üretim duruşlarına ve enerji verimliliğinde kayıplara yol açabilir. Özellikle otomasyon yoğun tesislerde güç kalitesi, işletme sürekliliğinin doğrudan belirleyicisidir.',
      },
      {
        heading: 'Ölçülen parametreler',
        body: 'Gerilim ve akım dengesizliği, çökme/yükselme (sag/swell) olayları, flicker (kırpışma), harmonik distorsiyon ve frekans sapmaları saha ölçümleriyle kayıt altına alınır.',
      },
      {
        heading: 'Raporlama ve öneri',
        body: 'Ölçüm sonuçları ilgili standartlarla karşılaştırılarak değerlendirilir ve tesise özel iyileştirme önerileri; filtre, gerilim regülatörü veya sistem revizyonu şeklinde raporlanır.',
      },
    ],
    advantages: [
      'Hassas ekipmanların korunması',
      'Üretim duruşu riskinin azaltılması',
      'Standartlarla karşılaştırmalı analiz',
      'Tesise özel iyileştirme önerisi',
    ],
  },
  {
    slug: 'topraklama-olcumu',
    icon: 'ShieldCheck',
    title: 'Topraklama Ölçümü',
    shortDescription: 'Topraklama direncinin ilgili mevzuata uygunluğunu ölçüyor ve raporluyoruz.',
    summary:
      'Topraklama tesisatınızın güvenlik standartlarına uygunluğunu düzenli ölçümlerle doğruluyor, ölçüm raporlarını düzenliyoruz.',
    metaDescription: 'Topraklama direnci ölçümü ve periyodik kontrol raporlama hizmetleri | Mega Elektrik.',
    sections: [
      {
        heading: 'Topraklama ölçümü neden yapılır?',
        body: 'Topraklama sistemi, kaçak akım durumunda kişilerin ve ekipmanların korunmasını sağlayan temel güvenlik önlemidir. Direncin yüksek olması koruma etkinliğini azaltır.',
      },
      {
        heading: 'Ölçüm sıklığı',
        body: 'Periyodik kontrol aralığı, tesisin niteliğine ve ilgili mevzuata göre değişmekle birlikte düzenli aralıklarla tekrarlanan ölçüm, sistemdeki bozulmaların zamanında tespitini sağlar.',
      },
      {
        heading: 'Raporlama',
        body: 'Ölçüm sonuçları, tesis şeması ve önceki ölçümlerle karşılaştırmalı olarak raporlanır; sınır değerin üzerinde çıkan noktalar için iyileştirme önerisi sunulur.',
      },
    ],
    advantages: [
      'Kişi ve ekipman güvenliğinin doğrulanması',
      'Mevzuata uygunluğun belgelenmesi',
      'Karşılaştırmalı ölçüm geçmişi',
      'Sınır değer aşımlarında somut öneri',
    ],
  },
  {
    slug: 'yuksek-gerilim-isletme-sorumlulugu',
    icon: 'FileCheck2',
    title: 'Yüksek Gerilim İşletme Sorumluluğu',
    shortDescription:
      'Yüksek gerilim tesislerinizin işletilmesinde teknik sorumluluk ve periyodik kontrol hizmeti veriyoruz.',
    summary:
      'Yüksek gerilim tesislerinin güvenli işletilmesi için gereken teknik sorumluluk, periyodik kontrol ve raporlama süreçlerini yürütüyoruz.',
    metaDescription: 'Yüksek gerilim işletme sorumluluğu ve periyodik teknik kontrol hizmetleri | Mega Elektrik.',
    sections: [
      {
        heading: 'İşletme sorumluluğu kapsamı',
        body: 'Trafo merkezleri ve yüksek gerilim şalt sahalarının mevzuata uygun şekilde işletilmesi, periyodik kontrollerin yapılması ve gerekli kayıtların tutulması bu hizmetin kapsamındadır.',
      },
      {
        heading: 'Periyodik kontrol ve bakım',
        body: 'Yüksek gerilim ekipmanlarının (kesici, ayırıcı, trafo, koruma röleleri) periyodik kontrolü, termal görüntüleme ve yalıtım seviyesi testleri düzenli olarak gerçekleştirilir.',
      },
      {
        heading: 'Acil müdahale',
        body: 'Arıza veya kesinti durumlarında hızlı teknik müdahale süreci tanımlanır; tesis çalışanlarının ve ekipmanların güvenliği önceliklendirilir.',
      },
    ],
    advantages: [
      'Mevzuata uygun işletme kaydı',
      'Periyodik ekipman kontrolü',
      'Hızlı acil müdahale süreci',
      'İş güvenliği önceliğiyle yürütülen çalışma',
    ],
  },
  {
    slug: 'elektrik-ic-tesisati-uygunluk-kontrolu',
    icon: 'ListChecks',
    title: 'Elektrik İç Tesisatı Uygunluk Kontrolü',
    shortDescription:
      'Tesis içi elektrik tesisatının güvenlik ve mevzuat uygunluğunu saha kontrolleriyle değerlendiriyoruz.',
    summary:
      'İç tesisat kontrolleriyle kablolama, pano düzeni ve koruma sistemlerinin mevzuata uygunluğunu değerlendirip raporluyoruz.',
    metaDescription: 'Elektrik iç tesisatı uygunluk kontrolü ve saha denetimi hizmetleri | Mega Elektrik.',
    sections: [
      {
        heading: 'Kontrol kapsamı',
        body: 'Pano düzeni, kablolama, aşırı akım/kaçak akım koruma sistemleri ve etiketleme gibi unsurlar saha ziyaretiyle yerinde incelenir.',
      },
      {
        heading: 'Bulgu raporlama',
        body: 'Tespit edilen uygunsuzluklar, öncelik seviyesine göre sınıflandırılarak fotoğraflı raporla iletilir.',
      },
      {
        heading: 'İyileştirme önerileri',
        body: 'Raporlanan bulgulara yönelik somut iyileştirme adımları, uygulanabilirlik sırasına göre önerilir.',
      },
    ],
    advantages: [
      'Fotoğraflı, önceliklendirilmiş bulgu raporu',
      'Mevzuata uygunluğun saha ziyaretiyle doğrulanması',
      'Uygulanabilir iyileştirme sırası',
      'Sigorta ve denetim süreçlerine hazır belgeleme',
    ],
  },
  {
    slug: 'ts-13912-standardi',
    icon: 'FileBarChart',
    title: 'TS 13912 Standardı',
    shortDescription:
      'TS 13912 standardı kapsamındaki teknik gerekliliklerin değerlendirilmesi ve uygunluk danışmanlığı.',
    summary:
      'TS 13912 standardı kapsamındaki tesisat gerekliliklerini saha koşullarınıza göre değerlendiriyor, uygunluk için teknik yol haritası sunuyoruz.',
    metaDescription: 'TS 13912 standardı kapsamında teknik uygunluk değerlendirmesi | Mega Elektrik.',
    sections: [
      {
        heading: 'Kapsam',
        body: 'Standardın gerektirdiği teknik kriterler, mevcut tesisat ve ekipman durumuyla karşılaştırılarak değerlendirilir.',
      },
      {
        heading: 'Değerlendirme süreci',
        body: 'Saha incelemesi ve mevcut belgelerin gözden geçirilmesiyle uygunluk durumu tespit edilir; eksik noktalar raporlanır.',
      },
    ],
    advantages: [
      'Standart gerekliliklerine göre net durum tespiti',
      'Eksik noktalar için somut yol haritası',
      'Denetim süreçlerine hazırlıklı olma',
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);
