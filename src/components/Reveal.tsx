import { useEffect, useRef, useState, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** ms cinsinden gecikme; aynı bölümdeki öğeleri kademeli göstermek için kullanılabilir. */
  delay?: number;
}

/**
 * Bölüm ekrana girdiğinde hafif bir fade-up ile görünür hale getirir.
 * Aşırı/agresif olmaması için tek seferlik, kısa (700ms) ve nazik bir
 * geçiş kullanılır. prefers-reduced-motion tercih edildiğinde Tailwind'in
 * motion-reduce: varyantı sayesinde animasyon devre dışı kalır, içerik
 * doğrudan görünür olur.
 */
export default function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
