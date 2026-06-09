import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
] as const;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const active = i18n.resolvedLanguage;

  return (
    <div className="inline-flex h-9 items-center rounded-md border border-line bg-elevated p-0.5">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          className={`h-8 px-2.5 rounded text-[13px] font-medium transition-colors duration-150 ${
            active === code ? 'bg-white text-black' : 'text-content-secondary hover:text-content'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
