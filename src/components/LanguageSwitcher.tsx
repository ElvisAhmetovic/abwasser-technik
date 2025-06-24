
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center">
      <Globe className="w-4 h-4 text-gray-600 mr-2" />
      <button
        onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
        className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-sm"
      >
        {language === 'de' ? 'EN' : 'DE'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
