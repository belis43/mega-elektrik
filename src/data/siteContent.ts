// Görsel yolları ileride kolayca değiştirilebilmesi için tek yerden yönetilir.
// /public/images/ klasörüne gerçek fotoğraflar eklendiğinde sadece bu değerleri güncelleyin.
export const images = {
  heroPrimary: '/images/hero-panel.jpg',
  heroSecondary: '/images/hero-field.jpg',
  aboutTeam: '/images/about-team.jpg',
  ogCover: '/og-cover.jpg',
};

export const heroContent = {
  eyebrow: 'Enerji Yönetimi / Teknik Çözümler',
  titleLine1: 'elektrik altyapı',
  titleLine2: 'çözümleri',
  description:
    'Mega Elektrik olarak kurumsal müşterilerimiz için güvenli ve verimli elektrik altyapı çözümleri sunuyoruz; kompanzasyon, güç kalitesi ve ölçüm alanlarında lisanslı uzmanlarla teknik destek sağlıyoruz.',
  primaryCta: { label: 'Hemen Danışmanlık Al', to: '/iletisim' },
  secondaryCta: { label: 'Hizmetlerimizi İncele', to: '/hizmetler' },
};

// Firma tarafından doğrulanmamış kuruluş yılı, müşteri sayısı veya
// başarı oranı gibi istatistikler eklenmemiştir; bilgi geldiğinde
// bu alanlar kolayca doldurulabilir.
export const aboutContent = {
  intro:
    'Mega Elektrik, işletmelerin elektrik altyapısını güvenli, verimli ve mevzuata uygun şekilde işletmesine destek olan bir teknik hizmet ve danışmanlık kuruluşudur.',
  mission: '[Firma vizyonu ve misyon metni buraya eklenecektir.]',
  approach:
    'Çalışmalarımızı; sahada gözlemlenebilir veri, doğru ölçüm ve uygulanabilir teknik öneriler üzerine kuruyoruz. Her proje; analiz, ölçüm, değerlendirme, çözüm, uygulama ve takip aşamalarından geçer.',
  placeholderNote:
    'Kuruluş yılı, referans sayısı ve ekip bilgileri firma tarafından paylaşıldığında bu alana eklenecektir.',
};

export const contactInfo = {
  phone: '+90 224 441 33 33',
  phoneHref: 'tel:+902244413333',
  email: 'info@mytenerji.com',
  emailHref: 'mailto:info@mytenerji.com',
  address: 'Üçevler, İzmir Yolu Cd No: 241, 16140 Nilüfer/BURSA — Westpoint Kat 7 Ofis 151',
  addressMapQuery: 'Üçevler, İzmir Yolu Cd No: 241, 16140 Nilüfer/BURSA Westpoint',
  workingHours: 'Hafta içi 09:00 – 18:00',
};

// Gerçek sosyal medya hesap adresleri firma tarafından paylaşıldığında
// href alanlarını güncelleyin (şu an placeholder '#' kullanılıyor).
export const socialLinks = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: 'Linkedin' as const,
    description: 'Kurumsal gelişmeler, projeler ve sektörel paylaşımlar için bizi takip edin.',
  },
  {
    label: 'Instagram',
    href: '#',
    icon: 'Instagram' as const,
    description: 'Saha çalışmalarımızdan ve ekibimizden kareler paylaşıyoruz.',
  },
];

// İletişim formundaki "Hizmet / Talep Konusu" seçenekleri; services.ts
// içindeki 9 başlıkla birebir eşleşir.
export const serviceOptions = [
  'Kompanzasyon Panosu Bakımı',
  'Elektrikli Araç Şarj Altyapısı Bakım Hizmetleri',
  'Enerji İzleme, Raporlama',
  'Harmonik Ölçüm, Raporlama',
  'Elektrik Enerjisi Güç Kalitesi',
  'Topraklama Ölçümü',
  'Yüksek Gerilim İşletme Sorumluluğu',
  'Elektrik İç Tesisatı Uygunluk Kontrolü',
  'TS 13912 Standardı',
  'Diğer',
];
