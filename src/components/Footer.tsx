
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Abwasser-Technik. Alle Rechte vorbehalten.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Impressum
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Datenschutz
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
