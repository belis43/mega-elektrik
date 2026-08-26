import Seo from '../components/Seo';
import ContactForm from '../components/ContactForm';
import Icon from '../components/Icon';
import { contactInfo, socialLinks } from '../data/siteContent';

export default function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contactInfo.addressMapQuery
  )}&output=embed`;

  return (
    <>
      <Seo
        title="İletişim"
        description="Mega Elektrik ile iletişime geçin; teknik görüşme talep edin veya hizmetlerimiz hakkında bilgi alın."
        path="/iletisim"
      />

      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:gap-12 lg:px-8">
          {/* Sol: başlık, açıklama, iletişim bilgileri */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              İletişim
            </span>
            <h1 className="mt-5 text-balance font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Projeniz mi var?
              <br />
              Bizimle iletişime geçin!
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              Müşteri memnuniyetini ön planda tutarak, projenizin her adımında size destek olmaktan mutluluk
              duyarız. Formu doldurun, ihtiyacınızı değerlendirip size en uygun saha ziyaretini planlayalım.
            </p>
            <a
              href="#teklif-formu"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-ink shadow-sm transition-colors hover:bg-primary-dark hover:text-white"
            >
              Teklif Al
              <Icon name="ArrowRight" className="h-4 w-4" />
            </a>

            <dl className="mt-10 space-y-5 border-t border-line pt-8">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary-dark">
                  <Icon name="MapPin" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">Adres</dt>
                  <dd className="mt-0.5 text-sm font-medium leading-relaxed text-ink">{contactInfo.address}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary-dark">
                  <Icon name="Phone" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">Telefon</dt>
                  <dd className="mt-0.5">
                    <a href={contactInfo.phoneHref} className="text-sm font-medium text-ink hover:text-primary-dark">
                      {contactInfo.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary-dark">
                  <Icon name="Mail" className="h-5 w-5" />
                </span>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted">E-posta</dt>
                  <dd className="mt-0.5">
                    <a href={contactInfo.emailHref} className="text-sm font-medium text-ink hover:text-primary-dark">
                      {contactInfo.email}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Sağ: Google Harita */}
          <div className="min-h-[320px] overflow-hidden rounded-xl border border-line shadow-card lg:min-h-full">
            <iframe
              title="Mega Elektrik konum haritası"
              src={mapSrc}
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section id="teklif-formu" className="scroll-mt-24 border-b border-line bg-surface py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-line bg-white p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink">Teklif Formu</h2>
            <p className="mt-2 text-sm text-muted">
              Aşağıdaki formu doldurun, size en kısa sürede dönüş yapalım.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Sosyal Medya */}
      <section className="border-b border-line bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />
            Bizi Takip Edin
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
            Sosyal Medyada Bizi Takip Edin
          </h2>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-6 text-left transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-light text-primary-dark transition-colors duration-300 group-hover:bg-primary group-hover:text-ink">
                  <Icon name={s.icon} className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-ink">{s.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Ofis Lokasyonu — geniş, ayrı harita bölümü (yukarıdaki harita korunur) */}
      <section className="bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-content px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-primary-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            Konum
          </span>
          <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl lg:text-4xl">
            Ofis Lokasyonu
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted">{contactInfo.address}</p>
        </div>

        <div className="mx-auto mt-10 max-w-content px-4 sm:px-6 lg:px-8">
          <div className="h-[380px] w-full overflow-hidden rounded-xl border border-line shadow-card sm:h-[440px] lg:h-[520px]">
            <iframe
              title="Mega Elektrik ofis lokasyonu — geniş harita"
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
