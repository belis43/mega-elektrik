interface WaveformProps {
  className?: string;
  animated?: boolean;
}

/**
 * Mega Elektrik'in görsel imzası: harmonik ölçüm ekranlarından ilham alan
 * bir sinyal/dalga çizgisi. Hero, bölüm ayraçları ve favicon'da tutarlı
 * şekilde kullanılır.
 */
export default function Waveform({ className = '', animated = false }: WaveformProps) {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 60 L140 60 L175 15 L220 105 L260 40 L290 80 L330 60 L500 60 L535 25 L575 95 L615 50 L650 70 L690 60 L860 60 L895 20 L935 100 L975 45 L1010 75 L1050 60 L1200 60"
        stroke="url(#waveGradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1000}
        className={animated ? 'animate-drawLine' : ''}
        style={animated ? { strokeDasharray: 1000 } : undefined}
      />
      <defs>
        <linearGradient id="waveGradient" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="55%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-secondary)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
