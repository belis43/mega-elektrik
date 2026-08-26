interface LogoProps {
  className?: string;
  /**
   * 'light' → koyu metinli logo (beyaz/açık zeminler için, ör. sabit beyaz header, footer, mobil menü)
   * 'dark'  → beyaz metinli logo (koyu/hero görseli üzeri şeffaf header için)
   */
  variant?: 'light' | 'dark';
}

/**
 * Mega Elektrik'in gerçek kurumsal logosu. İkon + "MEGA ELEKTRİK" yazısı
 * tek bir görselde birleşik olarak kullanılır. İki hazır varyant mevcuttur:
 * /public/assets/logo/logo-light.png ve logo-dark.png. Logo güncellenmek
 * istendiğinde bu iki dosyanın üzerine yazmak yeterlidir, kod tarafında
 * değişiklik gerekmez.
 */
export default function Logo({ className = 'h-10', variant = 'light' }: LogoProps) {
  const src = variant === 'dark' ? '/assets/logo/logo-dark.png' : '/assets/logo/logo-light.png';

  return (
    <img
      src={src}
      alt="Mega Elektrik"
      className={`${className} w-auto shrink-0 object-contain block leading-none`}
    />
  );
}
