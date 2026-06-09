import type { LucideIcon } from 'lucide-react';

export interface ProjectPricing {
  monthly: number;
  annual: number;
  currency: string;
}

export interface Project {
  id: string;
  /** Maps to `items.<i18nKey>` in the locale files (name, description, advantages). */
  i18nKey: string;
  /** lucide-react icon used as the product logo. */
  icon: LucideIcon;
  url: string;
  pricing: ProjectPricing;
}

export interface SiteConfig {
  name: string;
  email: string;
  discordWebhookUrl: string;
  appVisits: number | null;
  projects: Project[];
}
