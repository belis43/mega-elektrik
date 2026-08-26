/**
 * Tüm site görsellerinin beklenen dosya yolları tek bir yerden yönetilir.
 * Gerçek fotoğraflar geldiğinde, burada listelenen dosya adıyla
 * public/assets/[kategori]/ klasörüne eklemeniz yeterlidir — kod
 * tarafında herhangi bir değişiklik gerekmez. Dosya henüz mevcut
 * değilse <ImagePlaceholder /> otomatik olarak yer tutucu görünümü
 * gösterir (bkz. src/components/ImagePlaceholder.tsx).
 */

export const heroImages = {
  main: '/assets/hero/hero-main.jpg',
};

// Hizmetler listeleme sayfasının (/hizmetler) üst banner görseli.
export const servicesListingImage = '/assets/services/hizmetler-genel.jpg';

// Ana sayfa "Ölçüm & Raporlama" bölümündeki ölçüm çalışması fotoğrafı.
export const measurementImage = '/assets/services/olcum-calismasi.jpg';

export const serviceImages: Record<string, string> = {
  'kompanzasyon-panosu-bakimi': '/assets/services/kompanzasyon-panosu-bakimi.jpg',
  'elektrikli-arac-sarj-altyapisi-bakim-hizmetleri': '/assets/services/ev-sarj-altyapisi-bakimi.jpg',
  'enerji-izleme-raporlama': '/assets/services/enerji-izleme-raporlama.jpg',
  'harmonik-olcum-raporlama': '/assets/services/harmonik-olcum-raporlama.jpg',
  'elektrik-enerjisi-guc-kalitesi': '/assets/services/elektrik-enerjisi-guc-kalitesi.jpg',
  'topraklama-olcumu': '/assets/services/topraklama-olcumu.jpg',
  'yuksek-gerilim-isletme-sorumlulugu': '/assets/services/yuksek-gerilim-isletme-sorumlulugu.jpg',
  'elektrik-ic-tesisati-uygunluk-kontrolu': '/assets/services/elektrik-ic-tesisati-uygunluk-kontrolu.jpg',
  'ts-13912-standardi': '/assets/services/ts-13912-standardi.jpg',
};

export const compensationImages: Record<string, string> = {
  nedir: '/assets/compensation/nedir.jpg',
  'pano-cesitleri': '/assets/compensation/pano-cesitleri.jpg',
  'hesabi-nasil-yapilir': '/assets/compensation/hesabi-nasil-yapilir.jpg',
  kondansatoru: '/assets/compensation/kondansatoru.jpg',
  arizasi: '/assets/compensation/arizasi.jpg',
};

// Kompanzasyon Panosu Bakımı hizmeti için saha/bakım süreci galerisi.
export const maintenanceGalleryImages = [
  '/assets/services/kompanzasyon-bakim-1.jpg',
  '/assets/services/kompanzasyon-bakim-2.jpg',
  '/assets/services/kompanzasyon-bakim-3.jpg',
];

// Ana sayfadaki "Saha Çalışmaları" bölümü için genel saha fotoğrafları.
export const fieldGalleryImages = [
  { src: '/assets/field/saha-calismasi-1.jpg', alt: 'Saha çalışması' },
  { src: '/assets/field/saha-calismasi-2.jpg', alt: 'Teknik ekip saha uygulaması' },
  { src: '/assets/field/saha-calismasi-3.jpg', alt: 'Ölçüm çalışması' },
  { src: '/assets/field/saha-calismasi-4.jpg', alt: 'Pano bakım çalışması' },
];

export const teamImages = {
  main: '/assets/team/teknik-ekip.jpg',
};

export const contactImages = {
  main: '/assets/contact/iletisim.jpg',
};

// Referans/proje kartları için görsel yuvası; gerçek proje eklendiğinde
// src/data/projects.ts içindeki ilgili kayda bu yollardan biri atanabilir.
export const projectImages = [
  '/assets/projects/proje-1.jpg',
  '/assets/projects/proje-2.jpg',
  '/assets/projects/proje-3.jpg',
];
