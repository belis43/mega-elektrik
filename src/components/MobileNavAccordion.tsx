import { Link } from 'react-router-dom';
import type { HeaderDropdown } from '../data/headerMenu';
import Icon from './Icon';

interface MobileNavAccordionProps {
  item: HeaderDropdown;
  open: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
}

/**
 * Kontrollü accordion: açık/kapalı durumu üst bileşenden (Header) yönetilir,
 * böylece aynı anda yalnızca tek bir mobil menü grubu açık kalır.
 */
export default function MobileNavAccordion({ item, open, onToggle, onNavigate }: MobileNavAccordionProps) {
  return (
    <div className="border-b border-line last:border-b-0">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md px-3 py-3.5 text-base font-medium text-ink hover:bg-surface"
      >
        {item.label}
        <Icon name="ChevronDown" className={`h-4 w-4 text-primary-dark transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid overflow-hidden transition-all duration-200 ${open ? 'grid-rows-[1fr] pb-2' : 'grid-rows-[0fr]'}`}>
        <div className="min-h-0 overflow-hidden pl-3">
          {item.items.map((sub) => (
            <Link
              key={sub.to + sub.label}
              to={sub.to}
              onClick={onNavigate}
              className="block rounded-md px-3 py-2.5 text-sm text-ink/70 hover:bg-surface hover:text-primary-dark"
            >
              {sub.label}
            </Link>
          ))}
          {item.viewAllTo && (
            <Link
              to={item.viewAllTo}
              onClick={onNavigate}
              className="block rounded-md px-3 py-2.5 text-sm font-semibold text-secondary"
            >
              {item.viewAllLabel}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
