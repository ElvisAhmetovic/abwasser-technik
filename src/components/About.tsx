
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-medium mb-4">{t('about.subtitle')}</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/leistungen"
              className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors duration-200 flex items-center mx-auto font-medium group w-fit"
            >
              {t('about.cta')}
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {t('about.company')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('about.description')}
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('about.links')}</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <Link to="/notdienst" className="hover:text-blue-600 transition-colors">
                      {t('nav.emergency')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/leistungen" className="hover:text-blue-600 transition-colors">
                      {t('nav.services')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/ueber-uns" className="hover:text-blue-600 transition-colors">
                      {t('nav.about')}
                    </Link>
                  </li>
                  <li>
                    <Link to="/kontakt" className="hover:text-blue-600 transition-colors">
                      {t('nav.contact')}
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('about.contact')}</h4>
                <p className="text-gray-600 text-sm">
                  {t('about.contactInfo')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-200">
            <p className="text-gray-500 text-sm">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
