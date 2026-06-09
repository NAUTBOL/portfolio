import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/site';
import { logToDiscord } from '../lib/discord';

const formatVisits = (num: number): string =>
  new Intl.NumberFormat('en', { notation: 'compact', compactDisplay: 'short' }).format(num);

const Hero: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    logToDiscord(`Visit on ${siteConfig.name} landing`);
  }, []);

  return (
    <section id="home" className="min-h-screen pt-14 flex items-center border-b border-line">
      <div className="section-container w-full">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl font-semibold mb-6 leading-tight animate-slideUp opacity-0"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            {t('hero.greeting', { name: siteConfig.name })}
          </h1>

          <p
            className="text-base md:text-xl text-content-secondary mb-8 leading-relaxed animate-slideUp opacity-0"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            {t('hero.tagline')}
          </p>

          <div
            className="flex flex-wrap justify-center gap-3 animate-slideUp opacity-0"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            <a href="#projects" className="btn-primary">
              {t('hero.viewProjects')}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="btn-ghost">
              {t('hero.getInTouch')}
            </a>
          </div>

          {siteConfig.appVisits !== null ? (
            <p className="mt-10 text-sm font-medium uppercase tracking-wide text-content-secondary">
              {t('hero.visits', { value: formatVisits(siteConfig.appVisits) })}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
