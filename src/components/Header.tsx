import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { headerNavLeft, headerNavRight, isDropdown, type HeaderDropdown } from '../data/headerMenu';
import Icon, { type IconName } from './Icon';
import Logo from './Logo';
import NavDropdown from './NavDropdown';
import MobileNavAccordion from './MobileNavAccordion';

// Sağ menüdeki sade linklerin (dropdown olmayan) başına eklenen ikonlar.
const rightNavIcons: Record<string, IconName> = {
  Hakkımızda: 'Users',
  'S.S.S.': 'HelpCircle',
  İletişim: 'Phone',
};

const getNavLinkClass =
  (light: boolean) =>
  ({ isActive }: { isActive: boolean }) =>
    `inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border-b-2 px-3 py-2 text-sm font-bold uppercase tracking-wide transition-colors duration-200 lg:text-base xl:px-4 ${
      light
        ? isActive
          ? 'border-primary text-primary'
          : 'border-transparent text-white hover:border-primary hover:text-primary'
        : isActive
          ? 'border-primary-dark text-primary-dark'
          : 'border-transparent text-ink/80 hover:border-primary-dark hover:text-primary-dark'
    }`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Yalnızca ana sayfada header, hero görselinin üzerinde şeffaf/overlay olarak konumlanır.
  // Diğer tüm sayfalarda her zamanki gibi beyaz, sabit (sticky) bir şerittir.
  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled;

  useEffect(() => {
    // Ana sayfada eşik değeri hero yüksekliğine yakın tutulur, böylece hero
    // görüntülenirken header şeffaf kalır; hero'dan çıkınca beyaza döner.
    const threshold = isHome ? 420 : 8;
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // Rota değişince mobil menüyü kapat
  useEffect(() => {
    setOpen(false);
    setMobileAccordion(null);
  }, [location.pathname]);

  // Menü açıkken body scroll kilidi + ESC ile kapatma
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };
      window.addEventListener('keydown', onKey);
      return () => {
        document.body.style.overflow = prevOverflow;
        window.removeEventListener('keydown', onKey);
      };
    }
    return undefined;
  }, [open]);

  const navLinkClass = getNavLinkClass(transparent);

  return (
    <header
      className={`${isHome ? 'fixed' : 'sticky'} top-0 z-50 w-full border-b transition-colors duration-200 ${
        transparent ? 'border-transparent bg-transparent' : 'border-line bg-white shadow-sm'
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-2 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-10 lg:py-4 xl:px-14">
        {/* Sol: hamburger + Hizmetler / Kompanzasyon / Çözümler */}
        <div className="flex flex-1 items-center gap-0.5">
          <button
            type="button"
            className={`inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-bold uppercase tracking-wide transition-colors sm:px-2.5 lg:text-base ${
              transparent ? 'text-white hover:text-primary' : 'text-ink hover:text-primary-dark'
            }`}
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon
              name={open ? 'X' : 'Menu'}
              className={`h-5 w-5 shrink-0 lg:h-6 lg:w-6 ${transparent ? 'text-primary' : 'text-primary-dark'}`}
            />
            <span className="hidden sm:inline">Menü</span>
          </button>

          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Hızlı erişim">
            {headerNavLeft.map((item) =>
              isDropdown(item) ? (
                <NavDropdown key={item.label} item={item} align="left" light={transparent} />
              ) : (
                <NavLink key={item.label} to={item.to} className={navLinkClass}>
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
        </div>

        {/* Orta: MEGA ELEKTRİK logosu — header'ın tam ortası, büyük ve belirgin */}
        <Link to="/" className="flex shrink-0 items-center justify-center" aria-label="Mega Elektrik anasayfa">
          <Logo
            variant={transparent ? 'dark' : 'light'}
            className="h-10 sm:h-11 lg:h-12"
          />
        </Link>

        {/* Sağ: Çözümler / Hakkımızda / S.S.S. / İletişim */}
        <div className="flex flex-1 items-center justify-end gap-0.5">
          <nav className="hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Kurumsal">
            {headerNavRight.map((item) =>
              isDropdown(item) ? (
                <NavDropdown key={item.label} item={item} align="right" light={transparent} />
              ) : (
                <NavLink key={item.label} to={item.to} className={navLinkClass}>
                  {rightNavIcons[item.label] && (
                    <Icon name={rightNavIcons[item.label]} className="h-5 w-5" strokeWidth={1.75} />
                  )}
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
          {/* Mobilde hamburger ile denge sağlayan görünmez boşluk */}
          <span className="w-9 sm:w-[68px] lg:hidden" aria-hidden="true" />
        </div>
      </div>

      {/* Menü çekmecesi (tüm ekran genişliklerinde çalışır) */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/30 transition-opacity duration-200 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center border-b border-line px-6 py-6">
            <Logo variant="light" className="h-9" />
          </div>

          <nav className="flex flex-1 flex-col gap-0.5 px-4 py-3" aria-label="Mobil menü">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-md px-3 py-3.5 text-base font-medium ${
                  isActive ? 'bg-primary-light text-primary-dark' : 'text-ink hover:bg-surface'
                }`
              }
            >
              Ana Sayfa
            </NavLink>

            {headerNavLeft.map((item) =>
              isDropdown(item) ? (
                <MobileNavAccordion
                  key={item.label}
                  item={item as HeaderDropdown}
                  open={mobileAccordion === item.label}
                  onToggle={() => setMobileAccordion((cur) => (cur === item.label ? null : item.label))}
                  onNavigate={() => setOpen(false)}
                />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-3.5 text-base font-medium ${
                      isActive ? 'bg-primary-light text-primary-dark' : 'text-ink hover:bg-surface'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            )}

            <div className="my-1 border-t border-line" />

            {headerNavRight.map((item) =>
              isDropdown(item) ? (
                <MobileNavAccordion
                  key={item.label}
                  item={item as HeaderDropdown}
                  open={mobileAccordion === item.label}
                  onToggle={() => setMobileAccordion((cur) => (cur === item.label ? null : item.label))}
                  onNavigate={() => setOpen(false)}
                />
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-md px-3 py-3.5 text-base font-medium ${
                      isActive ? 'bg-primary-light text-primary-dark' : 'text-ink hover:bg-surface'
                    }`
                  }
                >
                  {rightNavIcons[item.label] && (
                    <Icon name={rightNavIcons[item.label]} className="h-5 w-5 text-primary-dark" strokeWidth={1.75} />
                  )}
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <div className="mt-auto flex flex-col gap-3 border-t border-line px-6 py-6">
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-3.5 text-base font-semibold text-ink"
            >
              Teklif Talep Et
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
