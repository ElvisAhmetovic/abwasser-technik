
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <p className="text-cyan-200 mb-4 font-medium">
              {t('hero.subtitle')}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <button className="bg-cyan-400 text-blue-900 px-8 py-4 rounded-full hover:bg-cyan-300 transition-colors duration-200 flex items-center font-medium group">
              {t('hero.cta')}
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-1">
              <img
                src="/lovable-uploads/3bc3cd2b-d80d-4a2f-8104-cb7893276e48.png"
                alt="Professional Sewer Cleaning Equipment"
                className="rounded-3xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
