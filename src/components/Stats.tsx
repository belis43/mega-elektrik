import { stats } from '../data/stats';

export default function Stats() {
  return (
    <section className="border-b border-line bg-ink/[0.03] py-14 sm:py-16">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-bold text-primary-dark sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-muted sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
