import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/site';
import type { ProjectPricing } from '../types';

const formatPrice = (amount: number, currency: string, locale: string): string =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { projects } = siteConfig;
  const locale = i18n.resolvedLanguage ?? 'en';

  if (!projects.length) return null;

  const renderPricing = (pricing: ProjectPricing) => (
    <div className="border-t border-line pt-4 mb-6">
      <p className="text-content">
        <span className="text-2xl font-semibold">
          {formatPrice(pricing.monthly, pricing.currency, locale)}
        </span>
        <span className="text-sm text-content-secondary">{t('projects.perMonth')}</span>
      </p>
      <p className="text-xs text-content-secondary mt-1">
        {t('projects.billedAnnually', {
          price: formatPrice(pricing.annual, pricing.currency, locale),
        })}
      </p>
    </div>
  );

  return (
    <section id="projects" className="bg-bg">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">{t('projects.title')}</h2>
          <p className="text-content-secondary">{t('projects.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const name = t(`items.${project.i18nKey}.name`);
            const description = t(`items.${project.i18nKey}.description`);
            const advantages = t(`items.${project.i18nKey}.advantages`, {
              returnObjects: true,
            }) as string[];

            return (
              <article key={project.id} className="card flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-line bg-elevated">
                    <Icon size={20} className="text-content" />
                  </span>
                  <h3 className="text-lg font-semibold text-content">{name}</h3>
                </div>

                <p className="text-sm text-content-secondary mb-6">{description}</p>

                <ul className="space-y-3 mb-6 flex-grow">
                  {advantages.map((advantage) => (
                    <li
                      key={advantage}
                      className="flex items-start gap-2 text-sm text-content-secondary"
                    >
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-content" />
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>

                {renderPricing(project.pricing)}

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary self-start"
                >
                  {t('projects.visit')}
                  <ArrowUpRight size={16} className="ml-2" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
