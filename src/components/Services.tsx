
import { Factory, Wrench, FlaskConical, Users, Gauge, Recycle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Factory,
      title: 'Kläranlagen',
      description: 'Planung, Bau und Wartung von kommunalen und industriellen Kläranlagen nach neuesten Standards.',
      features: ['Biologische Reinigung', 'Mechanische Vorklärung', 'Schlammbehandlung']
    },
    {
      icon: Wrench,
      title: 'Anlagenwartung',
      description: 'Regelmäßige Wartung und Instandhaltung Ihrer Abwasseranlagen für optimale Leistung.',
      features: ['24/7 Service', 'Präventive Wartung', 'Notfallreparaturen']
    },
    {
      icon: FlaskConical,
      title: 'Wasseranalytik',
      description: 'Professionelle Analyse und Überwachung der Wasserqualität mit modernster Labortechnik.',
      features: ['Laboranalysen', 'Online-Monitoring', 'Compliance-Berichte']
    },
    {
      icon: Users,
      title: 'Beratung',
      description: 'Umfassende Beratung für optimale Abwasserlösungen und Genehmigungsverfahren.',
      features: ['Machbarkeitsstudien', 'Genehmigungsplanung', 'Wirtschaftlichkeitsanalyse']
    },
    {
      icon: Gauge,
      title: 'Prozessoptimierung',
      description: 'Optimierung bestehender Anlagen für höhere Effizienz und niedrigere Betriebskosten.',
      features: ['Leistungssteigerung', 'Energieeffizienz', 'Kostensenkung']
    },
    {
      icon: Recycle,
      title: 'Umwelttechnik',
      description: 'Nachhaltige Technologien für Ressourcenrückgewinnung und Umweltschutz.',
      features: ['Phosphorrückgewinnung', 'Biogas-Nutzung', 'Kreislaufwirtschaft']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Von der Planung bis zur Wartung bieten wir komplette Lösungen für Ihre Abwassertechnik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-800" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
