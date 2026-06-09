import React, { useEffect, useState } from 'react';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/site';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-14 border-b transition-colors duration-150 ${
        scrolled ? 'bg-bg/95 backdrop-blur-sm border-line' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8">
        <div className="flex h-full items-center justify-between">
          <a href="#home" className="text-base font-semibold text-content">
            {siteConfig.name}
          </a>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
              <Mail size={16} className="mr-2" />
              {t('nav.email')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
