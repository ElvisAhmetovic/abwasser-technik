
import { ArrowRight, CheckCircle } from 'lucide-react';

const NotdienstPage = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Notfall-Rohrreinigungsservice
          </h1>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-cyan-500 mb-6">
                Notfall-Rohrreinigungsservice
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Verstopfter Abfluss oder Toilette? Keine Sorge – wir sind rund um die Uhr für Sie da! Unsere Experten beseitigen jede Verstopfung schnell, professionell und zum fairen Preis.
              </p>
            </div>
            <div className="relative">
              <img
                src="/lovable-uploads/b2428096-b477-44ec-ae50-e2b5dac4905a.png"
                alt="Notfall Rohrreinigungsservice"
                className="rounded-3xl w-full h-auto shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Unsere Dienstleistungen – Transparent, Fair & Zuverlässig
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <CheckCircle className="w-8 h-8 text-cyan-300 mb-4" />
              <h3 className="text-xl font-bold mb-4">Faire und transparente Preisgestaltung</h3>
              <p>Für private und gewerbliche Kunden ohne versteckte Kosten.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <CheckCircle className="w-8 h-8 text-cyan-300 mb-4" />
              <h3 className="text-xl font-bold mb-4">Festpreisgarantie</h3>
              <p>Klare Kalkulation, keine Überraschungen, volle Kostenkontrolle.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
              <CheckCircle className="w-8 h-8 text-cyan-300 mb-4" />
              <h3 className="text-xl font-bold mb-4">Effektive Rohrreinigung & Verstopfungsbeseitigung</h3>
              <p>Schnell, zuverlässig und professionell.</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-cyan-200 text-lg mb-8">
              Mit unserem Festpreiskonzept wissen Sie von Anfang an, welche Kosten auf Sie zukommen – ohne böse Überraschungen!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Response Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-600 text-center mb-16">
            Schnelle Anfahrt zum Einsatzort
          </h2>
          
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-cyan-100 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                <img
                  src="/lovable-uploads/1160e61b-cb04-46f9-ba17-5c67d67777f8.png"
                  alt="Service 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
              <h3 className="font-bold text-gray-900 mb-3">Manuelle Beseitigung</h3>
              <p className="text-sm text-gray-600">
                Manuelle Beseitigung von Verstopfungen in Objekten z. B. Toiletten, Waschbecken, Spülen usw. Festpreise inklusive An- und Abfahrt.
              </p>
            </div>
            
            <div className="bg-cyan-50 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                <img
                  src="/lovable-uploads/1160e61b-cb04-46f9-ba17-5c67d67777f8.png"
                  alt="Service 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
              <h3 className="font-bold text-gray-900 mb-3">Wohnungs- oder Etagenleitungen</h3>
              <p className="text-sm text-gray-600">
                Beseitigung von Verstopfungen in Wohnungs- oder Etagenleitungen bis zur Fall- oder Grundleitung, einschließlich Bodenabläufen, z. B. Anschlussleitungen, Sammelleitungen, Toiletten, Spülen, Waschtische, Bidets, Bodenabläufe usw. Festpreise inklusive An- und Abfahrt.
              </p>
            </div>
            
            <div className="bg-cyan-100 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                <img
                  src="/lovable-uploads/1160e61b-cb04-46f9-ba17-5c67d67777f8.png"
                  alt="Service 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <h3 className="font-bold text-gray-900 mb-3">Leitungen innerhalb des Objekts</h3>
              <p className="text-sm text-gray-600">
                Verstopfungsbeseitigung an Leitungen innerhalb des Objekts sowie an Kleinhebeanlagen, z. B. Fallleitungen, Sammelleitungen, Schleppleitungen und Regenleitungen, einschließlich Festpreise für An- und Abfahrt.
              </p>
            </div>
            
            <div className="bg-cyan-50 rounded-2xl p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-xl overflow-hidden">
                <img
                  src="/lovable-uploads/1160e61b-cb04-46f9-ba17-5c67d67777f8.png"
                  alt="Service 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
              <h3 className="font-bold text-gray-900 mb-3">Leitungen außerhalb des Objekts</h3>
              <p className="text-sm text-gray-600">
                Verstopfungsbeseitigung an Leitungen außerhalb des Objekts sowie an Hauptleitungen und Hebeanlagen, z. B. Grundleitungen, Hauptleitungen, Schächte und Hebeanlagen, einschließlich Festpreise für An- und Abfahrt.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-blue-600 font-medium mb-8">
              Alle aufgeführten Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer von 19%
            </p>
          </div>
        </div>
      </section>

      {/* Execution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ausführung:</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="leading-relaxed">
              Der Einsatz von Maschinen und Geräten sowie die Durchführung der Arbeiten obliegen im Rahmen des erteilten Auftrags ausschließlich unseren Mitarbeitern, die hierbei insbesondere die Anforderungen an Gründlichkeit und Vorsicht beachten müssen. Unsere Leistungen, wie Reinigung, Entstopfung, Hindernisbeseitigung, TV-Inspektion und Ortung, sind Bestandteil des Dienstleistungsvertrags. Den Erfolg der Arbeiten können wir jedoch keine Gewähr übernehmen. Es wird darauf hingewiesen, dass Rohrleitungen durch mechanische Einwirkungen (z. B. Stahlspiralen, Rohrkopf, starker Wurzeleinwuchs, Fremdkörper, falsche oder fehlende Anschlüsse, zu viele Bögen) auftreten können, die vor Beginn der Arbeiten nicht erkennbar sind. Bei starken Ablagerungen kann es bei der Beseitigung auch zu Schäden an den Rohren (z. B. Stahl, Gussteisen, Steinzeug, Kunststoff oder Eternit) kommen. Wenn im Rahmen eines Werkvertrags gearbeitet wird, muss der Auftraggeber den geschuldeten Erfolg der Arbeit ermöglichen. Dazu kann es erforderlich sein, Kanäle und Leitungen freizulegen, z. B. durch das Ausheben eines Fußbodens, um Rohrschäden zu reparieren und die Leitung zu entstopfen.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Hours Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg">
            Unsere Notdienstzeiten sind rund um die Uhr, also 24 Stunden an 7 Tagen in der Woche, einschließlich Montag bis Freitag von 17:00 Uhr bis 08:00 Uhr sowie an Samstagen, Sonn- und Feiertagen.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Benötigen Sie sofort Hilfe?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Rufen Sie uns jetzt an – wir sind 24/7 für Sie da!
          </p>
          <button className="bg-cyan-400 text-blue-900 px-8 py-4 rounded-full hover:bg-cyan-300 transition-colors duration-200 flex items-center font-medium mx-auto group">
            Tel: 0176-80559608 - Direktruf zu dem Monteur
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default NotdienstPage;
