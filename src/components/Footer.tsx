import React from 'react';
import { Github, Linkedin, Twitter, Heart, Store } from 'lucide-react';
import { socialLinks } from '../data/social';

const Footer: React.FC = () => {

  return (
    <footer className="bg-dark-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold text-text-primary">
              <span className="text-accent-blue">KUAN</span>TYK
            </a>
            <p className="text-text-secondary mt-2 max-w-md">
              Creating exceptional digital experiences through clean code and thoughtful design.
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => {
              const Icon = link.icon === 'github'
                ? Github
                : link.icon === 'linkedin'
                  ? Linkedin
                  : Twitter;

              return (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-blue transition-colors"
                  aria-label={link.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
            <a
              key={4}
              href={"https://nautbol.gumroad.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-blue transition-colors"
              aria-label={"store"}
            >
              <Store size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-dark-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart size={16} className="mx-1 text-accent-pink" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;