
import React, { createContext, useContext, useState } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  de: {
    // Header
    'nav.emergency': '24h Notdienst',
    'nav.services': 'Leistungen',
    'nav.about': 'Über uns',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.subtitle': 'Ihr zuverlässiger Partner',
    'hero.title': 'Rohrreinigung & Kanalreinigung',
    'hero.description': 'Rund um die Uhr im Einsatz! Wir bieten zuverlässige Rohr- und Kanalreinigung mit modernster Technik – von TV-Kamera-Inspektionen und Dichtheitsüberprüfungen bis zur gründlichen Verstopfungsbeseitigung. Für private und gewerbliche Kunden!',
    'hero.cta': 'Jetzt planen',
    
    // About
    'about.subtitle': 'Wir lösen echte Probleme.',
    'about.title': 'Was können wir für Sie tun?',
    'about.cta': 'Mehr Dienstleistungen',
    'about.company': 'Abwasser Technik',
    'about.description': 'Rohrreinigung & Kanalsanierung in Ihrer Nähe. Unsere Hauptzentrale ist in der schönen Stadt Offenbach.',
    'about.links': 'Links',
    'about.contact': 'Nehmen Sie Kontakt auf',
    'about.contactInfo': 'abwassertec.hessen@web.de 0176-80559608 Senefelder Str. 37 63069 Offenbach Öffnungszeiten: 24/7',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Haben Sie Fragen zu unseren Leistungen? Kontaktieren Sie uns für eine persönliche Beratung.',
    'contact.info': 'Kontaktinformationen',
    'contact.hotline': '24h Hotline',
    'contact.hotlineDesc': 'Direktruf zu dem Monteur',
    'contact.address': 'Adresse',
    'contact.hours': 'Öffnungszeiten',
    'contact.hoursText': '24/7 Notfalldienst\nRund um die Uhr für Sie da',
    'contact.sendMessage': 'Nachricht senden',
    
    // Form
    'form.firstName': 'Vorname',
    'form.firstNamePlaceholder': 'Ihr Vorname',
    'form.lastName': 'Nachname',
    'form.lastNamePlaceholder': 'Ihr Nachname',
    'form.email': 'E-Mail',
    'form.emailPlaceholder': 'ihre.email@beispiel.de',
    'form.phone': 'Telefon',
    'form.phonePlaceholder': '+49 123 456 789',
    'form.message': 'Nachricht',
    'form.messagePlaceholder': 'Beschreiben Sie Ihr Anliegen...',
    'form.send': 'Nachricht senden',
    'form.sending': 'Wird gesendet...',
    
    // Footer
    'footer.copyright': '© 2025 Abwasser-Technik. Alle Rechte vorbehalten.'
  },
  en: {
    // Header
    'nav.emergency': '24h Emergency',
    'nav.services': 'Services',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.subtitle': 'Your reliable partner',
    'hero.title': 'Pipe Cleaning & Drain Cleaning',
    'hero.description': 'Available around the clock! We offer reliable pipe and drain cleaning with state-of-the-art technology – from TV camera inspections and leak testing to thorough blockage removal. For private and commercial customers!',
    'hero.cta': 'Plan Now',
    
    // About
    'about.subtitle': 'We solve real problems.',
    'about.title': 'What can we do for you?',
    'about.cta': 'More Services',
    'about.company': 'Wastewater Technology',
    'about.description': 'Pipe cleaning & sewer rehabilitation in your area. Our main headquarters is in the beautiful city of Offenbach.',
    'about.links': 'Links',
    'about.contact': 'Get in touch',
    'about.contactInfo': 'abwassertec.hessen@web.de 0176-80559608 Senefelder Str. 37 63069 Offenbach Opening hours: 24/7',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Do you have questions about our services? Contact us for personal consultation.',
    'contact.info': 'Contact Information',
    'contact.hotline': '24h Hotline',
    'contact.hotlineDesc': 'Direct call to the technician',
    'contact.address': 'Address',
    'contact.hours': 'Opening Hours',
    'contact.hoursText': '24/7 Emergency Service\nAvailable around the clock for you',
    'contact.sendMessage': 'Send Message',
    
    // Form
    'form.firstName': 'First Name',
    'form.firstNamePlaceholder': 'Your first name',
    'form.lastName': 'Last Name',
    'form.lastNamePlaceholder': 'Your last name',
    'form.email': 'E-Mail',
    'form.emailPlaceholder': 'your.email@example.com',
    'form.phone': 'Phone',
    'form.phonePlaceholder': '+49 123 456 789',
    'form.message': 'Message',
    'form.messagePlaceholder': 'Describe your request...',
    'form.send': 'Send Message',
    'form.sending': 'Sending...',
    
    // Footer
    'footer.copyright': '© 2025 Wastewater Technology. All rights reserved.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
