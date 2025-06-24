
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: '24h Notdienst', href: '#notdienst' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Über uns', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center pt-4">
                <Phone className="w-4 h-4 text-orange-600 mr-2" />
                <span className="text-orange-600 font-medium">0176-80559608</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
