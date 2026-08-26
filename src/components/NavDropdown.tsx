import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { HeaderDropdown } from '../data/headerMenu';
import Icon from './Icon';

interface NavDropdownProps {
  item: HeaderDropdown;
  /** Dropdown panelinin tetikleyiciye göre hizalanması; ekran dışına taşmayı önler. */
  align?: 'left' | 'right';
  /** true ise header hero görseli üzerinde şeffaf/koyu zeminde konumlanır, tetikleyici metni beyaz olur. */
  light?: boolean;
}

export default function NavDropdown({ item, align = 'left', light = false }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 whitespace-nowrap rounded-md border-b-2 border-transparent px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200 lg:text-base xl:px-4 ${
          light ? 'text-white hover:border-primary hover:text-primary' : 'text-ink/80 hover:border-primary-dark hover:text-primary-dark'
        }`}
      >
        <Icon name="ChevronDown" className={`h-3.5 w-3.5 ${light ? 'text-primary' : 'text-primary-dark'}`} />
        {item.label}
      </button>

      <div
        className={`absolute top-full z-50 w-72 max-w-[min(20rem,90vw)] pt-2 transition-all duration-150 ${
          align === 'right' ? 'right-0' : 'left-0'
        } ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
      >
        <div className="max-h-[70vh] overflow-y-auto rounded-md border border-line bg-white p-2 shadow-card">
          {item.items.map((sub) => (
            <Link
              key={sub.to + sub.label}
              to={sub.to}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm text-ink/80 hover:bg-primary-light hover:text-primary-dark"
            >
              {sub.label}
            </Link>
          ))}
          {item.viewAllTo && (
            <Link
              to={item.viewAllTo}
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-1.5 rounded-md border-t border-line px-3 py-2.5 text-sm font-semibold text-secondary hover:text-secondary-dark"
            >
              {item.viewAllLabel}
              <Icon name="ArrowRight" className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
