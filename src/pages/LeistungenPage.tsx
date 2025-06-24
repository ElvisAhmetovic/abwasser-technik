
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LeistungenPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              Unsere Dienstleistungen – Transparent, Fair & Zuverlässig
            </h1>
            <div className="max-w-4xl mx-auto text-lg space-y-4">
              <p className="flex items-center justify-center">
                <span className="text-green-300 mr-2">✓</span>
                Faire und transparente Preisgestaltung – Für private und gewerbliche Kunden ohne versteckte Kosten.
              </p>
              <p className="flex items-center justify-center">  
                <span className="text-green-300 mr-2">✓</span>
                Festpreisgarantie – Klare Kalkulation, keine Überraschungen, volle Kostenkontrolle.
              </p>
              <p className="flex items-center justify-center">
                <span className="text-green-300 mr-2">✓</span>
                Effektive Rohrreinigung & Verstopfungsbeseitigung – Schnell, zuverlässig und professionell. Mit unserem Festpreiskonzept wissen Sie von Anfang an, welche Kosten auf Sie zukommen – ohne böse Überraschungen!
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
              Schnelle Anfahrt zum Einsatzort
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
                Manuelle Beseitigung von Verstopfungen in Objekten z. B. Toiletten, Waschbecken, Spülen usw. Festpreise inklusive An- und Abfahrt
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
                Beseitigung von Verstopfungen in Wohnungs- oder Etagenleitungen bis zur Fall- oder Grundleitung, einschließlich Bodenabläufe. z. B. Anschlussleitungen, Sammelleitungen, Toiletten, Spülen, Waschbecken, Bidets, Bodenabläufe usw. Festpreise inklusive An- und Abfahrt.
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
                Verstopfungsbeseitigung an Leitungen innerhalb des Objekts sowie an Kleinhebeanlagen,
                <br /><br />
                z. B. Fallleitungen, Sammelleitungen, Schleppleitungen und Regenleitungen,
                <br /><br />
                einschließlich Festpreise für An- und Abfahrt.
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
                Verstopfungsbeseitigung an Leitungen außerhalb des Objekts sowie an Hauptleitungen und Hebeanlagen,
                <br /><br />
                z. B. Grundleitungen, Hauptleitungen, Schächte und Hebeanlagen,
                <br /><br />
                einschließlich Festpreise für An- und Abfahrt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ausführung:</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Der Einsatz von Maschinen und Geräten sowie die Durchführung der Arbeiten obliegen im Rahmen des erteilten Auftrags ausschließlich unseren Mitarbeitern, die hierbei insbesondere die Arbeitsicherheit und Unfallverhütungsvorschriften zu beachten müssen. Unsere Leistungen, wie Reinigung, Entstopfung, Kanalreinigungsarbeiten, TV-Inspektion der Gruen als Bestimmung der Besichtigung auch zu Schäden an den Rohren (z. B. Rohrbruch, starker gerichteten Erfolg zu ermöglichen. Dazu kann es erforderlich sein, Kanäle und Leitungen freizulegen, z. B. durch das Aufstmen eines Fußbodens, um Rohrschäden zu reparieren und die Leitung zu entstopfen.
            </p>
            <div className="bg-blue-100 p-6 rounded-lg">
              <p className="text-blue-800 font-medium text-lg">
                Unsere Notdienstzeiten sind rund um die Uhr, also 24 Stunden an 7 Tagen in der Woche, einschließlich Montag bis Freitag von 17:00 Uhr bis 08:00 Uhr sowie an Samstagen, Sonn- und Feiertagen.
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
                  <a href="/notdienst" className="text-gray-600 hover:text-blue-600 transition-colors">
                    24h Notdienst
                  </a>
                </li>
                <li>
                  <a href="/leistungen" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Leistungen
                  </a>
                </li>
                <li>
                  <a href="/ueber-uns" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Über uns
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Kontakt
                  </a>
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

export default LeistungenPage;
