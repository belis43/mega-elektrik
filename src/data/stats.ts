export interface StatItem {
  value: string;
  label: string;
}

// Firma onaylı gerçek rakamlar geldiğinde value alanlarını güncelleyin.
// [X] köşeli parantezli placeholder, sahte istatistik oluşturulmadığını
// açıkça belirtmek için bilinçli olarak korunmuştur.
export const stats: StatItem[] = [
  { value: '[X]+', label: 'Tamamlanan Proje' },
  { value: '[X]+', label: 'Yıllık Deneyim' },
  { value: '[X]+', label: 'Aktif Hizmet Alanı' },
  { value: '[X]+', label: 'Teknik Saha Çalışması' },
];
