import { projectImages } from './imageAssets';

export interface ProjectItem {
  name: string;
  sector: string;
  city: string;
  service: string;
  image: string;
  description: string;
  /** true olduğu sürece kart, gerçek bir referans değil yer tutucu olarak işaretlenir. */
  isPlaceholder?: boolean;
}

// Firma gerçek referanslarını/projelerini paylaştığında bu dizideki
// placeholder kayıtların üzerine yazmanız yeterlidir. Sahte firma adı,
// logo veya proje bilgisi kullanılmamıştır — köşeli parantezli alanlar
// bilinçli olarak placeholder olarak bırakılmıştır.
export const projects: ProjectItem[] = [
  {
    name: '[Firma Adı Eklenecek]',
    sector: '[Sektör]',
    city: '[Şehir]',
    service: '[İlgili Hizmet]',
    image: projectImages[0],
    description: 'Firma onayı alındıktan sonra bu alana gerçek proje açıklaması eklenecektir.',
    isPlaceholder: true,
  },
  {
    name: '[Firma Adı Eklenecek]',
    sector: '[Sektör]',
    city: '[Şehir]',
    service: '[İlgili Hizmet]',
    image: projectImages[1],
    description: 'Firma onayı alındıktan sonra bu alana gerçek proje açıklaması eklenecektir.',
    isPlaceholder: true,
  },
  {
    name: '[Firma Adı Eklenecek]',
    sector: '[Sektör]',
    city: '[Şehir]',
    service: '[İlgili Hizmet]',
    image: projectImages[2],
    description: 'Firma onayı alındıktan sonra bu alana gerçek proje açıklaması eklenecektir.',
    isPlaceholder: true,
  },
];
