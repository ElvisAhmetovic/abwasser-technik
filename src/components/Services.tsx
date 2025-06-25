
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Service Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full blur-3xl opacity-30 scale-150"></div>
              <div className="relative bg-white rounded-3xl p-1">
                <img
                  src="/lovable-uploads/296071b4-39d0-46d0-bcb1-e60374dcff2f.png"
                  alt="24h Notdienst"
                  className="rounded-3xl w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">
                {t('services.emergency.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t('services.emergency.description')}
              </p>
              
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-full hover:bg-cyan-600 transition-colors duration-200 flex items-center font-medium group">
                {t('services.emergency.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Pipe Cleaning */}
          <div>
            <div className="mb-8">
              <img
                src="/lovable-uploads/e1f0975c-de79-4d1a-8fb5-bc9b2e92c2f6.png"
                alt="Rohr- & Kanalreinigung"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('services.cleaning.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('services.cleaning.description')}
            </p>
          </div>

          {/* Pipe Rehabilitation */}
          <div>
            <div className="mb-8">
              <img
                src="/lovable-uploads/665860f6-e6f8-4acc-9342-9ad1dd33e991.png"
                alt="Rohr- & Kanalsanierung"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('services.rehabilitation.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('services.rehabilitation.description')}
            </p>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* TV Camera Inspection */}
          <div>
            <div className="mb-8">
              <img
                src="/lovable-uploads/da945696-d841-493b-bdbc-7d40668f5ce9.png"
                alt="Rohr- & Kanaluntersuchung mit TV-Kamera"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('services.inspection.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('services.inspection.description')}
            </p>
          </div>

          {/* Leak Testing */}
          <div>
            <div className="mb-8">
              <img
                src="/lovable-uploads/e712b1a3-d40a-4fc2-8749-4bea13a8addf.png"
                alt="Kanaldichtheitsprüfung"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('services.testing.title')}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t('services.testing.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
