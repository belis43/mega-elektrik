import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_NAME = 'Mega Elektrik';
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://www.megaelektrik.com';

function setMeta(nameOrProp: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let tag = document.head.querySelector(`meta[${attr}="${nameOrProp}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, nameOrProp);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/** Her sayfada title, meta description, canonical ve OG etiketlerini günceller. */
export default function Seo({ title, description, path = '' }: SeoProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', `${SITE_URL}${path}`, true);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`);
  }, [title, description, path]);

  return null;
}
