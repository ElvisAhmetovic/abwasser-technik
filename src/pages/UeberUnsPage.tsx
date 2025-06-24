
import { CheckCircle } from 'lucide-react';
import Header from '../components/Header';

const UeberUnsPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Abwasser Technik - stellt sich vor
          </h1>
          <p className="text-xl text-cyan-100">
            Euer Professionelles Team für Rohrreinigung & Kanalsanierung
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Unsere Story
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p className="text-center leading-relaxed">
              Im Jahr 2009 wurde das Unternehmen Abwasser Technik als 
              Einzelunternehmen gegründet. Seitdem hat unser Betrieb zahlreiche 
              Entwicklungsphasen durchlaufen und wertvolle Erfahrungen 
              gesammelt. 2010 erfolgte der Beitritt zu einem Franchiseverbund, 
              wodurch unser Einsatzgebiet erheblich erweitert wurde. Mit den 
              Jahren wuchs das Unternehmen auf 11 Monteure heran und konnte 
              einen umfassenden Service im Bereich Rohr- und Abflussreinigung 
              anbieten.
            </p>
            
            <p className="text-center leading-relaxed">
              Seit 2020 agieren wir erfolgreich als eigenständige Marke Abwasser 
              Technik. Unser Team in Offenbach besteht derzeit aus vier erfahrenen 
              Monteuren sowie einem Lehrling und bietet professionelle 
              Dienstleistungen in Offenbach, Frankfurt, Hanau und der 
              umliegenden Region an.
            </p>
            
            <p className="text-center leading-relaxed">
              Als wachsendes Unternehmen sind wir stets bestrebt, unser Team und 
              unsere Standorte weiter auszubauen, um Ihnen den bestmöglichen 
              Service rund um die Rohrreinigung direkt in Ihrer Nähe anzubieten.
            </p>
          </div>
        </div>
      </section>

      {/* What speaks for us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Was für uns spricht
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-12 text-center leading-relaxed">
              Unser professionelles Team arbeitet effizient, sauber und mit voller Transparenz. Von der ersten Kontaktaufnahme bis zur erfolgreichen Durchführung erleben Sie einen erstklassigen Service.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Über 12 Jahre Erfahrung</span>
                  <span className="text-gray-600"> – Fachwissen, auf das Sie sich verlassen können</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Qualifiziertes Personal</span>
                  <span className="text-gray-600"> – Kompetente und geschulte Fachkräfte</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Schnelle Hilfe, 24/7 erreichbar</span>
                  <span className="text-gray-600"> – Wir sind jederzeit für Sie da</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Faire und transparente Preise</span>
                  <span className="text-gray-600"> – Keine versteckten Kosten</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Keine Anfahrtskosten</span>
                  <span className="text-gray-600"> – Unser Service beginnt direkt bei Ihnen</span>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Modernste Technik & Ausstattung</span>
                  <span className="text-gray-600"> – Für effiziente und schonende Rohrreinigung</span>
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
            IMPRESSUM
          </h2>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Angaben gemäß § 5 TMG:</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Abwasser Technik</p>
                  <p>Senefelder Str. 37</p>
                  <p>63069 Offenbach</p>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mt-8 mb-4">Kontakt:</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Telefon: 0176-80559608</p>
                  <p>E-Mail: abwassertec.hessen@web.de</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Umsatzsteuer-ID:</h4>
                <p className="text-gray-600 mb-6">
                  Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE 236018066
                </p>
                
                <h4 className="text-lg font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</h4>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Haftung für Inhalte</h3>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Haftung für Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Haftung für Links</h3>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </div>

            {/* Urheberrecht */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Urheberrecht</h3>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
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
                Abwasser Technik
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rohrreinigung & Kanalsanierung in Ihrer Nähe. Unsere Hauptzentrale ist in 
                der schönen Stadt Offenbach.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Links</h4>
              <ul className="space-y-2 text-gray-600">
                <li>24h Notdienst</li>
                <li>Leistungen</li>
                <li>Über uns</li>
                <li>Kontakt</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Nehmen Sie Kontakt auf</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                abwassertec.hessen@web.de<br />
                0176-80559608<br />
                Senefelder Str. 37<br />
                63069 Offenbach<br />
                Öffnungszeiten: 24/7
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-200 text-center">
            <p className="text-gray-500 text-sm">©2025 All rights reserved</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UeberUnsPage;
