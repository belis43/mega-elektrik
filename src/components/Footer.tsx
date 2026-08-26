import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { mainNav } from '../data/navigation';
import { contactInfo } from '../data/siteContent';
import Icon from './Icon';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center">
              <Logo variant="light" className="h-9" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Kompanzasyon, güç kalitesi ve enerji izleme alanlarında teknik hizmet ve danışmanlık.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Kurumsal</h3>
            <ul className="mt-4 space-y-2.5">
              {mainNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-muted hover:text-primary-dark">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">Hizmetler</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/hizmetler/${s.slug}`} className="text-sm text-muted hover:text-primary-dark">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink">İletişim</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted">
                <Icon name="Phone" className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
                <a href={contactInfo.phoneHref} className="hover:text-primary-dark">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <Icon name="Mail" className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
                <a href={contactInfo.emailHref} className="hover:text-primary-dark">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <Icon name="MapPin" className="mt-0.5 h-4 w-4 shrink-0 text-primary-dark" />
                <span>{contactInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">© {year} Mega Elektrik. Tüm hakları saklıdır.</p>
          <p className="text-xs text-muted">Enerji verimliliği ve güç kalitesi için teknik çözüm ortağınız.</p>
        </div>
      </div>
    </footer>
  );
}
