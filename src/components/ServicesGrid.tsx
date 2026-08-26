import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import ImagePlaceholder from './ImagePlaceholder';
import Icon from './Icon';
import { solutionCards } from '../data/solutionCards';

export default function ServicesGrid() {
  return (
    <section className="border-b border-line bg-surface py-16 sm:py-24">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Çözümlerimiz"
            title="Elektrik altyapınızın her aşamasında teknik destek"
            description="Ölçümden raporlamaya, bakımdan danışmanlığa kadar enerji altyapınızın güvenilirliğini artıran çözüm alanlarımız."
          />
          <Link
            to="/hizmetler"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary-dark hover:text-primary-dark"
          >
            Tüm hizmetleri gör
            <Icon name="ArrowRight" className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {solutionCards.map((card) => (
            <Link
              key={card.title}
              to={card.to}
              className="group relative flex flex-col rounded-xl border border-line bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg"
            >
              {/* Görsel — kartın ana unsuru */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-xl">
                <ImagePlaceholder
                  src={card.image}
                  alt={card.title}
                  label={card.title}
                  aspect="h-full"
                  rounded="rounded-none"
                  className="h-full scale-100 transition-transform duration-500 ease-out group-hover:scale-110"
                />
                {/* Okunabilirlik zemini + hover'da pastel turkuaz geçiş (neon değil) */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/50 via-ink/0 to-transparent transition-opacity duration-300 ease-out group-hover:opacity-0"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-[#8FE8E4]/0 transition-colors duration-300 ease-out group-hover:bg-[#8FE8E4]/25"
                  aria-hidden="true"
                />
              </div>

              {/* İkon rozeti — normal akışta, negatif üst margin ile görselin alt kenarını hafifçe örter (kesilmeden) */}
              <span className="relative z-10 -mt-5 ml-4 flex h-11 w-11 items-center justify-center self-start rounded-full border-4 border-white bg-primary text-ink shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Icon name={card.icon} className="h-5 w-5" strokeWidth={1.75} />
              </span>

              {/* Metin alanı — beyaz zemin */}
              <div className="flex flex-1 flex-col rounded-b-xl px-4 pb-4 pt-2 sm:px-5 sm:pb-5">
                <h3 className="text-balance font-display text-base font-bold leading-tight text-ink sm:text-lg">
                  {card.title}
                </h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted sm:text-sm">{card.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-primary-dark transition-transform duration-300 group-hover:translate-x-1">
                  <Icon name="ArrowRight" className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
