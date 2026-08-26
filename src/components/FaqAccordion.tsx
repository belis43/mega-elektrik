import { useState } from 'react';
import type { FaqItem } from '../data/faq';
import Icon from './Icon';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-display text-base font-medium text-ink sm:text-lg">{item.question}</span>
                <Icon
                  name="ChevronDown"
                  className={`h-5 w-5 shrink-0 text-primary-dark transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid overflow-hidden transition-all duration-200 ${
                isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
              }`}
              style={{ display: 'grid' }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
