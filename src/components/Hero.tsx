import { Link } from 'react-router-dom';
import { heroContent } from '../data/siteContent';
import Icon from './Icon';
import ImagePlaceholder from './ImagePlaceholder';
import { heroImages } from '../data/imageAssets';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Arka plan görseli — tam kaplayan hero fotoğrafı, çok hafif ve yavaş zoom */}
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={heroImages.main}
          alt="Mega Elektrik kompanzasyon panosu — teknik saha görüntüsü"
          label="Hero görseli"
          aspect="h-full"
          rounded="rounded-none"
          className="h-full motion-safe:animate-heroZoom"
          priority
        />
        {/* Okunabilirlik için koyu, soldan sağa yumuşayan şeffaf overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/30"
          aria-hidden="true"
        />
        {/* Header (turkuaz menü) hero üzerinde şeffaf durduğunda okunabilir kalması için
            en üstte ayrı, hafif bir koyulaştırma şeridi — fotoğrafın genelini etkilemez. */}
        <div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/55 to-transparent sm:h-40"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[560px] max-w-content flex-col justify-center px-4 pb-20 pt-28 sm:min-h-[640px] sm:px-6 sm:pb-24 sm:pt-32 lg:min-h-[720px] lg:px-8 lg:pt-40">
        <div className="max-w-2xl motion-safe:animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            {heroContent.eyebrow}
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            {heroContent.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {heroContent.titleLine2}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-white/85 sm:text-lg">
            {heroContent.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to={heroContent.primaryCta.to}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary-dark hover:text-white hover:shadow-lg"
            >
              {heroContent.primaryCta.label}
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
            <Link
              to={heroContent.secondaryCta.to}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary hover:bg-white/10 hover:shadow-lg"
            >
              {heroContent.secondaryCta.label}
              <Icon name="ArrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
