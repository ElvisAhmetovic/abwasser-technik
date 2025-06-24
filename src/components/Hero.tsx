
import { ArrowRight, Droplets, Settings, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professionelle
              <span className="text-blue-800 block">Abwassertechnik</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ihr zuverlässiger Partner für moderne Abwasserbehandlung, Kläranlagen 
              und umweltfreundliche Wassertechnologien. Mit über 25 Jahren Erfahrung 
              bieten wir maßgeschneiderte Lösungen für Industrie und Kommunen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-blue-800 text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors duration-200 flex items-center justify-center group">
                Beratung anfragen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-lg hover:bg-blue-800 hover:text-white transition-colors duration-200">
                Unsere Projekte
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <Droplets className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Umweltschutz</p>
                  <p className="text-sm text-gray-600">Nachhaltige Lösungen</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Settings className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Expertise</p>
                  <p className="text-sm text-gray-600">25+ Jahre Erfahrung</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900">Qualität</p>
                  <p className="text-sm text-gray-600">Zertifizierte Systeme</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src={`https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                alt="Abwassertechnik Anlagen"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-blue-800/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
