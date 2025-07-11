
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navigationItems = [
    { name: t('nav.emergency'), href: '/notdienst' },
    { name: t('nav.services'), href: '/leistungen' },
    { name: t('nav.about'), href: '/ueber-uns' },
    { name: t('nav.contact'), href: '/kontakt' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-12 h-12 mr-3">
              <img 
                src="/lovable-uploads/f54727bb-76ce-425a-b548-dd76c243440c.png" 
                alt="Abwasser Technik Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-blue-600">
                Abwasser
              </div>
              <div className="text-xl font-bold text-blue-600">
                Technik
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="hidden lg:block">
              <LanguageSwitcher />
            </div>

            {/* Phone Number */}
            <div className="hidden lg:flex items-center bg-orange-100 px-4 py-2 rounded-full">
              <Phone className="w-4 h-4 text-orange-600 mr-2" />
              <span className="text-orange-600 font-medium">0176-80559608</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-orange-600 mr-2" />
                  <span className="text-orange-600 font-medium">0176-80559608</span>
                </div>
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
