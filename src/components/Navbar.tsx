import React, { useState, useEffect } from 'react';
import { Menu, X, Palette as Paypal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-800/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-text-primary hover:text-accent-blue transition-colors">
              <span className="text-accent-blue">KUAN</span>TYK
            </a>
          </div>

          <div className="flex items-center">
            <div className="hidden md:block">
              <a
                href="#contact"
                className="btn-primary text-sm"
              >
                <Paypal size={18} className="mr-2" />
                Donate
              </a>
            </div>

            <button
              className="ml-2 md:hidden p-2 rounded-full text-text-secondary hover:text-accent-blue hover:bg-dark-700 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-800 shadow-lg">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-accent-blue hover:bg-dark-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-accent-blue hover:bg-dark-700 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;