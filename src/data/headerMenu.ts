import { services } from './services';
import { compensationTopics } from './compensation';
import { solutions } from './solutions';

export interface HeaderLink {
  label: string;
  to: string;
}

export interface HeaderDropdown {
  label: string;
  items: HeaderLink[];
  viewAllLabel?: string;
  viewAllTo?: string;
}

export type HeaderNavItem = HeaderLink | HeaderDropdown;

export const isDropdown = (item: HeaderNavItem): item is HeaderDropdown =>
  Array.isArray((item as HeaderDropdown).items);

// Merkezi logo bloğunun solunda yer alan menü grubu.
export const headerNavLeft: HeaderNavItem[] = [
  {
    label: 'Hizmetler',
    items: services.map((s) => ({ label: s.title, to: `/hizmetler/${s.slug}` })),
    viewAllLabel: 'Tüm Hizmetleri Gör',
    viewAllTo: '/hizmetler',
  },
  {
    label: 'Kompanzasyon',
    items: compensationTopics.map((t) => ({ label: t.title, to: `/kompanzasyon/${t.slug}` })),
    viewAllLabel: 'Tüm Kompanzasyon Konuları',
    viewAllTo: '/kompanzasyon',
  },
];

// Merkezi logo bloğunun sağında yer alan menü grubu.
export const headerNavRight: HeaderNavItem[] = [
  {
    label: 'Çözümler',
    items: solutions.map((s) => ({ label: s.title, to: `/cozumler#${s.slug}` })),
    viewAllLabel: 'Tüm Çözümleri Gör',
    viewAllTo: '/cozumler',
  },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'S.S.S.', to: '/sss' },
  { label: 'İletişim', to: '/iletisim' },
];
