
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const LeistungenPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              {t('servicesPage.hero.title')}
            </h1>
            <div className="max-w-4xl mx-auto text-lg space-y-4">
              <p className="flex items-center justify-center">
                <span className="text-green-300 mr-2">✓</span>
                {t('servicesPage.hero.point1')}
              </p>
              <p className="flex items-center justify-center">  
                <span className="text-green-300 mr-2">✓</span>
                {t('servicesPage.hero.point2')}
              </p>
              <p className="flex items-center justify-center">
                <span className="text-green-300 mr-2">✓</span>
                {t('servicesPage.hero.point3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              {t('servicesPage.section.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="bg-cyan-100 rounded-lg p-6 text-center">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/3efe8eca-5687-40b1-88aa-267e9e9ef0b4.png"
                  alt="Manuelle Beseitigung"
                  className="w-32 h-24 object-cover rounded-lg mx-auto"
                />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-4">1</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('servicesPage.service1.title')}
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-cyan-100 rounded-lg p-6 text-center">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/498857d7-3de5-40e4-aa92-a003d8568f8d.png"
                  alt="Beseitigung von Verstopfungen"
                  className="w-32 h-24 object-cover rounded-lg mx-auto"
                />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-4">2</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('servicesPage.service2.title')}
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-cyan-100 rounded-lg p-6 text-center">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/9bae0fb0-adc0-4430-b9c3-a4e0ea244222.png"
                  alt="Verstopfungsbeseitigung an Leitungen"
                  className="w-32 h-24 object-cover rounded-lg mx-auto"
                />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-4">3</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('servicesPage.service3.title')}
                <br /><br />
                {t('servicesPage.service3.subtitle')}
                <br /><br />
                {t('servicesPage.service3.footer')}
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-cyan-100 rounded-lg p-6 text-center">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/262df020-815f-46d5-9bb1-3cb8037534fb.png"
                  alt="Verstopfungsbeseitigung außerhalb"
                  className="w-32 h-24 object-cover rounded-lg mx-auto"
                />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-4">4</div>
              <p className="text-gray-700 text-sm leading-relaxed">
                {t('servicesPage.service4.title')}
                <br /><br />
                {t('servicesPage.service4.subtitle')}
                <br /><br />
                {t('servicesPage.service4.footer')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('servicesPage.execution.title')}</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              {t('servicesPage.execution.description')}
            </p>
            <div className="bg-blue-100 p-6 rounded-lg">
              <p className="text-blue-800 font-medium text-lg">
                {t('servicesPage.execution.notice')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Footer Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {t('about.company')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
              <p className="text-gray-500 text-sm mt-8">
                {t('footer.copyright')}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('about.links')}</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/notdienst" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t('nav.emergency')}
                  </Link>
                </li>
                <li>
                  <Link to="/leistungen" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t('nav.services')}
                  </Link>
                </li>
                <li>
                  <Link to="/ueber-uns" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="text-gray-600 hover:text-blue-600 transition-colors">
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('about.contact')}</h4>
              <div className="space-y-2">
                <p className="text-gray-600">abwassertec.hessen@web.de</p>
                <p className="text-gray-600">0176-80559608</p>
                <p className="text-gray-600">Senefelder Str. 37 63069 Offenbach</p>
                <p className="text-gray-600">{t('contactPage.banner.hours')} {t('contactPage.banner.hoursText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeistungenPage;
