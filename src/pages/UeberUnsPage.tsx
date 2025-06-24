
import { CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import { useLanguage } from '@/contexts/LanguageContext';

const UeberUnsPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            {t('aboutPage.hero.title')}
          </h1>
          <p className="text-xl text-cyan-100">
            {t('aboutPage.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            {t('aboutPage.story.title')}
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-center leading-relaxed">
              {t('aboutPage.story.p1')}
            </p>
            
            <p className="text-center leading-relaxed">
              {t('aboutPage.story.p2')}
            </p>
            
            <p className="text-center leading-relaxed">
              {t('aboutPage.story.p3')}
            </p>
          </div>
        </div>
      </section>

      {/* What speaks for us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            {t('aboutPage.whatFor.title')}
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              {t('aboutPage.whatFor.subtitle')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">{t('aboutPage.point1')}</span>
                  <span className="text-gray-600">{t('aboutPage.point1.desc')}</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">{t('aboutPage.point2')}</span>
                  <span className="text-gray-600">{t('aboutPage.point2.desc')}</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">{t('aboutPage.point3')}</span>
                  <span className="text-gray-600">{t('aboutPage.point3.desc')}</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">{t('aboutPage.point4')}</span>
                  <span className="text-gray-600">{t('aboutPage.point4.desc')}</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">{t('aboutPage.point5')}</span>
                  <span className="text-gray-600">{t('aboutPage.point5.desc')}</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">{t('aboutPage.point6')}</span>
                  <span className="text-gray-600">{t('aboutPage.point6.desc')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressum Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-16 text-center">
            {t('aboutPage.impressum.title')}
          </h2>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">{t('aboutPage.impressum.tmg')}</h3>
                <div className="space-y-2 text-gray-600">
                  <p>{t('about.company')}</p>
                  <p>Senefelder Str. 37</p>
                  <p>63069 Offenbach</p>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mt-8 mb-4">{t('aboutPage.impressum.contact')}</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Telefon: 0176-80559608</p>
                  <p>E-Mail: abwassertec.hessen@web.de</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">{t('aboutPage.impressum.vatId')}</h4>
                <p className="text-gray-600 mb-6">
                  {t('aboutPage.impressum.vatText')}
                </p>
                
                <h4 className="text-lg font-bold text-gray-900 mb-4">{t('aboutPage.impressum.responsible')}</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Senefelder Str. 37</p>
                  <p>63069 Offenbach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Haftung für Inhalte */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('aboutPage.legal.liability.title')}</h3>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  {t('aboutPage.legal.liability.p1')}
                </p>
                <p>
                  {t('aboutPage.legal.liability.p2')}
                </p>
              </div>
            </div>

            {/* Haftung für Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('aboutPage.legal.links.title')}</h3>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  {t('aboutPage.legal.links.p1')}
                </p>
                <p>
                  {t('aboutPage.legal.links.p2')}
                </p>
              </div>
            </div>

            {/* Urheberrecht */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('aboutPage.legal.copyright.title')}</h3>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  {t('aboutPage.legal.copyright.p1')}
                </p>
                <p>
                  {t('aboutPage.legal.copyright.p2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {t('about.company')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t('about.links')}</h4>
              <ul className="space-y-2 text-gray-600">
                <li>{t('nav.emergency')}</li>
                <li>{t('nav.services')}</li>
                <li>{t('nav.about')}</li>
                <li>{t('nav.contact')}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">{t('about.contact')}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                abwassertec.hessen@web.de<br />
                0176-80559608<br />
                Senefelder Str. 37<br />
                63069 Offenbach<br />
                {t('contactPage.banner.hours')} {t('contactPage.banner.hoursText')}
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-200 text-center">
            <p className="text-gray-500 text-sm">{t('footer.copyright')}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UeberUnsPage;
