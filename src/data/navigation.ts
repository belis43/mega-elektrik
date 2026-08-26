export interface NavLink {
  label: string;
  path: string;
}

// Footer'daki "Kurumsal" bağlantı listesi için kullanılır.
// Masaüstü/mobil header menüsü src/data/headerMenu.ts üzerinden yönetilir.
export const mainNav: NavLink[] = [
  { label: 'Ana Sayfa', path: '/' },
  { label: 'Hizmetler', path: '/hizmetler' },
  { label: 'Kompanzasyon', path: '/kompanzasyon' },
  { label: 'Çözümler', path: '/cozumler' },
  { label: 'Hakkımızda', path: '/hakkimizda' },
  { label: 'S.S.S.', path: '/sss' },
];

export const utilityNav: NavLink[] = [{ label: 'İletişim', path: '/iletisim' }];
