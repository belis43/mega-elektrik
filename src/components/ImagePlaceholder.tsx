import { useState } from 'react';
import Icon from './Icon';

interface ImagePlaceholderProps {
  /** Beklenen görsel yolu, ör: /assets/hero/hero-main.jpg */
  src: string;
  alt: string;
  /** Görsel henüz eklenmemişse yer tutucu üzerinde gösterilecek kısa etiket */
  label?: string;
  /** Tailwind aspect-ratio sınıfı, ör: 'aspect-[4/3]' */
  aspect?: string;
  className?: string;
  rounded?: string;
  /** true ise img öncelikli (LCP adayı) yüklenir, lazy loading devre dışı kalır */
  priority?: boolean;
}

/**
 * Gerçek fotoğraflar henüz projeye eklenmediği için bu component köprü
 * görevi görür: belirtilen yolda bir görsel varsa doğrudan gösterir,
 * yoksa (404/yüklenemedi) otomatik olarak kurumsal bir yer tutucu render
 * eder. Böylece ileride tek yapılması gereken, ilgili dosya adıyla
 * görseli public/assets/[kategori]/ klasörüne eklemektir — kod
 * değişikliği gerekmez.
 */
export default function ImagePlaceholder({
  src,
  alt,
  label,
  aspect = 'aspect-[4/3]',
  className = '',
  rounded = 'rounded-lg',
  priority = false,
}: ImagePlaceholderProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex ${aspect} w-full flex-col items-center justify-center gap-2 border border-dashed border-line bg-surface px-4 text-center ${rounded} ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-light text-primary-dark">
          <Icon name="Camera" className="h-5 w-5" />
        </span>
        <span className="text-xs font-medium text-muted">{label || 'Görsel eklenecek'}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={`${aspect} w-full object-cover ${rounded} ${className}`}
    />
  );
}
