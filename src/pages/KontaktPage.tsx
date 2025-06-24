
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Phone, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const KontaktPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              KONTAKT
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Kontaktieren Sie uns, wir stehen Ihnen jederzeit zur Verfügung!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we will contact you as soon as possible
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
              Lass uns treffen
            </h2>
            <p className="text-gray-600">
              Kaffee geht auf uns☕
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Rufen Sie uns an
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
                Wir sind auf der Karte
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
                Schreiben Sie uns
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
              Nehmen Sie Kontakt auf!
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Wir würden uns freuen, von Ihnen zu hören<br />
              und zu besprechen, wie wir Ihnen unterstützen<br />
              können!
            </h2>
            <div className="mt-6">
              <p className="text-sm mb-2">Öffnungszeiten:</p>
              <p className="font-bold text-lg">24/7</p>
              <div className="mt-4">
                <p className="text-red-500 font-semibold mb-1">Rufen Sie uns an</p>
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
                Abwasser Technik
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rohrreinigung & Kanalsanierung in Ihrer Nähe. Unsere Hauptzentrale ist in der schönen Stadt Offenbach.
              </p>
              <p className="text-gray-500 text-sm mt-8">
                ©2025 All rights reserved
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/notdienst" className="text-gray-600 hover:text-blue-600 transition-colors">
                    24h Notdienst
                  </Link>
                </li>
                <li>
                  <Link to="/leistungen" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Leistungen
                  </Link>
                </li>
                <li>
                  <Link to="/ueber-uns" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Nehmen Sie Kontakt auf</h4>
              <div className="space-y-2">
                <p className="text-gray-600">abwassertec.hessen@web.de</p>
                <p className="text-gray-600">0176-80559608</p>
                <p className="text-gray-600">Senefelder Str. 37 63069 Offenbach</p>
                <p className="text-gray-600">Öffnungszeiten: 24/7</p>
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
