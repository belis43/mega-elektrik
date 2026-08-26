interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-widest text-primary-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-display text-2xl font-semibold text-ink sm:text-3xl lg:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </div>
  );
}
