import { values } from '../data/values';
import SectionHeading from './SectionHeading';
import Icon, { type IconName } from './Icon';

export default function WhyUs() {
  return (
    <section className="border-b border-line bg-surface-alt py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Neden Mega Elektrik?"
          title="Sahada doğrulanmış, veriye dayalı yaklaşım"
          description="Enerji altyapınızla ilgili her tavsiyemizin arkasında ölçüm verisi ve saha deneyimi vardır."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="group rounded-xl border border-line bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-[#8FE8E4] hover:bg-[#8FE8E4] hover:shadow-lg"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary-light text-secondary transition-colors duration-300 group-hover:bg-[#071A2E]/10 group-hover:text-[#071A2E]">
                <Icon name={v.icon as IconName} className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink transition-colors duration-300 group-hover:text-[#071A2E]">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-[#071A2E]/80">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
