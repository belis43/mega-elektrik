import { useState, type FormEvent, type ChangeEvent } from 'react';
import { serviceOptions } from '../data/siteContent';
import Icon from './Icon';

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: serviceOptions[0],
  message: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Backend hazır olduğunda VITE_API_URL + VITE_CONTACT_ENDPOINT tanımlanınca
 * form otomatik olarak gerçek bir API'ye istek atar. Tanımlı değilse
 * mock gönderim ile çalışmaya devam eder.
 */
async function submitContactForm(data: FormState): Promise<void> {
  const apiUrl = import.meta.env.VITE_API_URL;
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT || '/contact';

  if (!apiUrl) {
    // Mock gönderim: backend bağlanana kadar formun akışını doğrulamak için.
    await new Promise((resolve) => setTimeout(resolve, 700));
    return;
  }

  const res = await fetch(`${apiUrl}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Form gönderimi başarısız oldu');
  }
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = 'Ad soyad zorunludur.';
    if (!form.email.trim()) {
      next.email = 'E-posta zorunludur.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = 'Geçerli bir e-posta adresi girin.';
    }
    if (!form.phone.trim()) next.phone = 'Telefon numarası zorunludur.';
    if (!form.message.trim()) next.message = 'Mesajınızı yazın.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      await submitContactForm(form);
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary-light p-8 text-center" role="status">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark text-white">
          <Icon name="ArrowRight" className="h-5 w-5 -rotate-45" />
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold text-ink">Talebiniz alındı</h3>
        <p className="mt-2 text-sm text-muted">
          Mesajınız için teşekkürler. Ekibimiz en kısa sürede sizinle iletişime geçecektir.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-primary-dark hover:text-primary-dark"
        >
          Yeni bir mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
            Ad Soyad *
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className="w-full rounded-md border border-line bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted/70"
            placeholder="Adınız ve soyadınız"
          />
          {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
            Firma
          </label>
          <input
            id="company"
            type="text"
            value={form.company}
            onChange={update('company')}
            className="w-full rounded-md border border-line bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted/70"
            placeholder="Firma adı"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            E-posta *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className="w-full rounded-md border border-line bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted/70"
            placeholder="ornek@firma.com"
          />
          {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telefon *
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className="w-full rounded-md border border-line bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted/70"
            placeholder="05xx xxx xx xx"
          />
          {errors.phone && <p id="phone-error" className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
          Hizmet / Talep Konusu
        </label>
        <select
          id="service"
          value={form.service}
          onChange={update('service')}
          className="w-full rounded-md border border-line bg-white px-3.5 py-3 text-sm text-ink"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Mesaj *
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update('message')}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full resize-none rounded-md border border-line bg-white px-3.5 py-3 text-sm text-ink placeholder:text-muted/70"
          placeholder="Talebinizi kısaca açıklayın"
        />
        {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600" role="alert">
          Bir sorun oluştu, lütfen tekrar deneyin ya da bizi doğrudan arayın.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-primary-dark hover:text-white disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Gönderiliyor…' : 'Teknik Görüşme Başlat'}
        {status !== 'submitting' && <Icon name="ArrowRight" className="h-4 w-4" />}
      </button>
    </form>
  );
}
