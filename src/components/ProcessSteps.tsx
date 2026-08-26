import { processSteps } from '../data/process';
import SectionHeading from './SectionHeading';
import Icon from './Icon';

export default function ProcessSteps() {
  return (
    <section className="border-b border-line bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Çalışma Modeli"
          title="Ölçümden takibe, uçtan uca teknik süreç"
          description="Her proje aynı disiplinli süreçten geçer; böylece sonuçlar tesadüfe değil, ölçülebilir adımlara dayanır."
        />

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li
              key={step.index}
              className="group relative rounded-xl border border-line bg-white p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#8FE8E4] hover:bg-[#8FE8E4] hover:shadow-lg sm:p-7"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary-dark transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:bg-[#071A2E]/10 group-hover:text-[#071A2E]">
                  <Icon name={step.icon} className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="font-mono text-xs font-semibold text-muted transition-colors duration-300 group-hover:text-[#071A2E]/70">
                  {step.index}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-[#071A2E]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-[#071A2E]/80">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
