import { Link } from 'react-router-dom';
import type { Service } from '../data/services';
import Icon, { type IconName } from './Icon';

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/hizmetler/${service.slug}`}
      className="group flex flex-col rounded-lg border border-line bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary-light text-primary-dark transition-transform duration-300 ease-out group-hover:scale-110">
        <Icon name={service.icon as IconName} className="h-5 w-5" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.shortDescription}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark">
        Detayları incele
        <Icon
          name="ArrowRight"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
