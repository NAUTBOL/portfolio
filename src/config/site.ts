import { Utensils, Dumbbell } from 'lucide-react';
import { SiteConfig } from '../types';

/**
 * Single source of truth for everything configurable on the landing.
 * No environment variables — edit values here directly.
 * User-facing text lives in the i18n locale files (public/locales/{lng}/common.json);
 * here we only keep identity, links, icon and pricing. Each project's `i18nKey` maps to
 * `items.<key>` in the locale files (name + description + advantages).
 *
 * NOTE: pricing figures below are placeholders — set the real subscription prices.
 */
export const siteConfig: SiteConfig = {
  name: 'KUANTYK',

  // Shown in the top bar as a mailto link.
  email: 'leandrotorressilva@gmail.com',

  // Discord webhook used to register events (e.g. visits). Leave empty to disable.
  discordWebhookUrl: '',

  // Optional headline stat. Set to null to hide it.
  appVisits: null,

  // SaaS products shown in the grid below the hero.
  projects: [
    {
      id: 'cleanfood',
      i18nKey: 'cleanfood',
      icon: Utensils,
      url: 'https://cleanfood.kuantyk.com/',
      pricing: { monthly: 5, annual: 50, currency: 'EUR' },
    },
    {
      id: 'fitcoach',
      i18nKey: 'fitcoach',
      icon: Dumbbell,
      url: 'https://cleanfit.kuantyk.com/',
      pricing: { monthly: 15, annual: 150, currency: 'EUR' },
    },
  ],
};
