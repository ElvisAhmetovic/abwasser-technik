
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, number: '25+', label: 'Jahre Erfahrung' },
    { icon: Users, number: '500+', label: 'Zufriedene Kunden' },
    { icon: Award, number: '50+', label: 'Abgeschlossene Projekte' },
    { icon: MapPin, number: '3', label: 'Standorte' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Über uns
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Seit über 25 Jahren sind wir Ihr vertrauensvoller Partner für professionelle 
              Abwassertechnik. Unser erfahrenes Team aus Ingenieuren und Technikern entwickelt 
              maßgeschneiderte Lösungen für die Herausforderungen der modernen Wasserwirtschaft.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Wir kombinieren bewährte Technologien mit innovativen Ansätzen, um umweltfreundliche 
              und wirtschaftliche Abwasserlösungen zu realisieren. Dabei legen wir besonderen Wert 
              auf Nachhaltigkeit und Effizienz.
            </p>

            {/* Key Points */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong>Zertifizierte Qualität:</strong> Alle unsere Systeme entsprechen höchsten Standards
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong>Umweltschutz:</strong> Nachhaltiger Schutz von Gewässern und Umwelt
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong>Innovation:</strong> Modernste Technologien für optimale Ergebnisse
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src={`https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
              alt="Unser Team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-800" />
              </div>
              <div className="text-3xl font-bold text-blue-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
