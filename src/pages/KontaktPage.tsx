
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const KontaktPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              {t('contactPage.title')}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t('contactPage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              {t('contactPage.formTitle')}
            </h2>
            <p className="text-gray-600">
              {t('contactPage.formSubtitle')}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <ContactForm type="contact" />
          </div>
        </div>
      </section>

      {/* Lass uns treffen Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              {t('contactPage.meetTitle')}
            </h2>
            <p className="text-gray-600">
              {t('contactPage.meetSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('contactPage.callUs')}
              </h3>
              <p className="text-gray-600">
                0176-80559608
              </p>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('contactPage.findUs')}
              </h3>
              <p className="text-gray-600">
                Senefelder Str. 37 63069 Offenbach
              </p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t('contactPage.writeUs')}
              </h3>
              <p className="text-gray-600">
                abwassertec.hessen@web.de
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg p-8 text-center text-white">
            <h3 className="text-red-500 font-semibold mb-2">
              {t('contactPage.banner.title')}
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t('contactPage.banner.subtitle')}
            </h2>
            <div className="mt-6">
              <p className="text-sm mb-2">{t('contactPage.banner.hours')}</p>
              <p className="font-bold text-lg">{t('contactPage.banner.hoursText')}</p>
              <div className="mt-4">
                <p className="text-red-500 font-semibold mb-1">{t('contactPage.banner.call')}</p>
                <p className="text-xl font-bold">0176-80559608</p>
              </div>
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

export default KontaktPage;
