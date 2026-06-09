import React from 'react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/site';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between">
        <p className="text-sm text-content-secondary">
          © {year} {siteConfig.name}. {t('footer.rights')}
        </p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-sm text-content-secondary transition-colors duration-150 hover:text-content"
        >
          {t('hero.getInTouch')}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
