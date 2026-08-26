import Icon, { type IconName } from './Icon';

interface HighlightItem {
  icon: IconName;
  title: string;
  subtitle: string;
}

const items: HighlightItem[] = [
  { icon: 'Zap', title: 'Güç Kalitesi', subtitle: 'Uzman Analiz' },
  { icon: 'AudioWaveform', title: 'Harmonik Ölçüm', subtitle: 'Doğru Raporlama' },
  { icon: 'ShieldCheck', title: 'Kompanzasyon', subtitle: 'Verimli Sistem' },
  { icon: 'LineChart', title: 'Enerji İzleme', subtitle: 'Anlık Takip' },
  { icon: 'Clock', title: '7/24 Destek', subtitle: 'Hızlı & Güvenilir' },
];

/**
 * Hero'nun hemen altında, görselle bir sonraki bölüm arasında köprü
 * görevi gören beyaz özellik şeridi. Hero'nun alt kenarını hafifçe
 * örtecek şekilde negatif üst boşlukla konumlanır.
 */
export default function HeroHighlights() {
  return (
    <div className="relative z-10 mx-auto -mt-8 max-w-content px-4 sm:-mt-10 sm:px-6 lg:-mt-12 lg:px-8">
      <div className="grid grid-cols-2 gap-x-4 gap-y-5 rounded-xl border border-line bg-white px-5 py-6 shadow-card sm:grid-cols-3 sm:gap-6 sm:px-8 sm:py-7 lg:grid-cols-5">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary-dark sm:h-11 sm:w-11">
              <Icon name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold uppercase leading-tight tracking-wide text-ink sm:text-base">
                {item.title}
              </p>
              <p className="text-xs text-muted sm:text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
