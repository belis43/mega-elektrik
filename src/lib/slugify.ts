const TR_MAP: Record<string, string> = {
  ç: 'c', Ç: 'c',
  ğ: 'g', Ğ: 'g',
  ı: 'i', I: 'i',
  İ: 'i',
  ö: 'o', Ö: 'o',
  ş: 's', Ş: 's',
  ü: 'u', Ü: 'u',
};

/** Türkçe karakterleri sadeleştirip URL/anchor için güvenli bir slug üretir. */
export function slugify(text: string): string {
  const normalized = text
    .split('')
    .map((ch) => TR_MAP[ch] ?? ch)
    .join('');

  return normalized
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
