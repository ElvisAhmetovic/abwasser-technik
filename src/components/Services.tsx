
import { ArrowRight } from 'lucide-react';

const Services = () => {
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
                  src="/lovable-uploads/af4db60a-4537-4e06-ad45-fff8e25acde3.png"
                  alt="24h Notdienst"
                  className="rounded-3xl w-full h-auto"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">
                24h Hotline - Rohrreinigung Notdienst
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ihr WC verstopft? Das Waschbecken verstopft? Der Keller steht unter Wasser? 
                Unser Notdienst steht Ihnen 24 Stunden am Tag, 365 Tage im Jahr zur 
                Verfügung! Zuverlässige und schnelle Experten für all Ihre Probleme mit 
                Sanitärinstallationen. Kontaktieren Sie uns, egal wie dringend – wir sind für Sie 
                da!
              </p>
              
              <button className="bg-cyan-500 text-white px-8 py-4 rounded-full hover:bg-cyan-600 transition-colors duration-200 flex items-center font-medium group">
                Tel: 0176-80559608 - Direktruf zu dem Monteur
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
              Rohr- & Kanalreinigung
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Rohrverstopfungen & Notdienst (24/7 & 365 Tage): Eine verstopfte 
              Abwasserleitung tritt oft zum ungünstigsten Zeitpunkt auf und kann 
              Überschwemmungen oder Rückstau verursachen. In solchen Fällen bieten wir 
              Ihnen unseren 24-Stunden-Service zu fairen Festpreisen und ohne 
              Anfahrtskosten an.
            </p>
          </div>

          {/* Pipe Rehabilitation */}
          <div>
            <div className="mb-8">
              <img
                src="/lovable-uploads/831dc2a5-f0ed-4049-af3d-3ad82147e8f8.png"
                alt="Rohr- & Kanalsanierung"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rohr- & Kanalsanierung
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bei der Überprüfung von Rohrleitungen können Defekte oder Schwachstellen 
              auftreten, die eine Reparatur oder Sanierung notwendig machen. In solchen 
              Fällen stehen wir Ihnen sowohl für gezielte Einzelmaßnahmen als auch für eine 
              vollständige Sanierung mit unserer Expertise zur Verfügung.
            </p>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* TV Camera Inspection */}
          <div>
            <div className="mb-8">
              <img
                src="/lovable-uploads/9fb815a2-3c67-47c8-98fd-f5515c3ed700.png"
                alt="Rohr- & Kanaluntersuchung mit TV-Kamera"
                className="w-full h-64 object-cover rounded-2xl"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rohr- & Kanaluntersuchung mit TV-Kamera
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Eine Kamerainspektion ist entscheidend für die Beurteilung von 
              Abwasserleitungen und Rohrsystemen. Sie bildet die Grundlage für 
              Empfehlungen zur Rohrreinigung, Rohr- und Kanalsanierung sowie für mögliche 
              Reparaturen. Unsere hochwertigen Inspektionssysteme bieten präzise Ergebnisse 
              bei der Kanalinspektion und können flexibel in verschiedenen Szenarien 
              eingesetzt werden.
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
              Kanaldichtheitsprüfung
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Die Kanaldichtheitsprüfung als Komplettservice – Laut § 59/60/61a des 
              Wasserhaushaltsgesetzes in Verbindung mit der DIN 1986-30 sind alle 
              Eigentümer von privaten Grundstücken verpflichtet, die Abwasserleitungen und 
              Schächte ihrer häuslichen Entwässerungsanlagen regelmäßig auf ihren Zustand 
              und ihre Dichtheit zu überprüfen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
