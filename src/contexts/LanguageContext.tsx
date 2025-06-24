
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
    'about.contactInfo': 'abwassertec.hessen@web.de\n0176-80559608\nSenefelder Str. 37 63069 Offenbach\nÖffnungszeiten: 24/7',
    
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
    
    // Services
    'services.emergency.title': '24h Hotline - Rohrreinigung Notdienst',
    'services.emergency.description': 'Ihr WC verstopft? Das Waschbecken verstopft? Der Keller steht unter Wasser? Unser Notdienst steht Ihnen 24 Stunden am Tag, 365 Tage im Jahr zur Verfügung! Zuverlässige und schnelle Experten für all Ihre Probleme mit Sanitärinstallationen. Kontaktieren Sie uns, egal wie dringend – wir sind für Sie da!',
    'services.emergency.cta': 'Tel: 0176-80559608 - Direktruf zu dem Monteur',
    'services.cleaning.title': 'Rohr- & Kanalreinigung',
    'services.cleaning.description': 'Rohrverstopfungen & Notdienst (24/7 & 365 Tage): Eine verstopfte Abwasserleitung tritt oft zum ungünstigsten Zeitpunkt auf und kann Überschwemmungen oder Rückstau verursachen. In solchen Fällen bieten wir Ihnen unseren 24-Stunden-Service zu fairen Festpreisen und ohne Anfahrtskosten an.',
    'services.rehabilitation.title': 'Rohr- & Kanalsanierung',
    'services.rehabilitation.description': 'Bei der Überprüfung von Rohrleitungen können Defekte oder Schwachstellen auftreten, die eine Reparatur oder Sanierung notwendig machen. In solchen Fällen stehen wir Ihnen sowohl für gezielte Einzelmaßnahmen als auch für eine vollständige Sanierung mit unserer Expertise zur Verfügung.',
    'services.inspection.title': 'Rohr- & Kanaluntersuchung mit TV-Kamera',
    'services.inspection.description': 'Eine Kamerainspektion ist entscheidend für die Beurteilung von Abwasserleitungen und Rohrsystemen. Sie bildet die Grundlage für Empfehlungen zur Rohrreinigung, Rohr- und Kanalsanierung sowie für mögliche Reparaturen. Unsere hochwertigen Inspektionssysteme bieten präzise Ergebnisse bei der Kanalinspektion und können flexibel in verschiedenen Szenarien eingesetzt werden.',
    'services.testing.title': 'Kanaldichtheitsprüfung',
    'services.testing.description': 'Die Kanaldichtheitsprüfung als Komplettservice – Laut § 59/60/61a des Wasserhaushaltsgesetzes in Verbindung mit der DIN 1986-30 sind alle Eigentümer von privaten Grundstücken verpflichtet, die Abwasserleitungen und Schächte ihrer häuslichen Entwässerungsanlagen regelmäßig auf ihren Zustand und ihre Dichtheit zu überprüfen.',
    
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
    'footer.copyright': '© 2025 Abwasser-Technik. Alle Rechte vorbehalten.',
    
    // Contact Page
    'contactPage.title': 'KONTAKT',
    'contactPage.subtitle': 'Kontaktieren Sie uns, wir stehen Ihnen jederzeit zur Verfügung!',
    'contactPage.formTitle': 'Contact Us',
    'contactPage.formSubtitle': 'Fill out the form below and we will contact you as soon as possible',
    'contactPage.meetTitle': 'Lass uns treffen',
    'contactPage.meetSubtitle': 'Kaffee geht auf uns☕',
    'contactPage.callUs': 'Rufen Sie uns an',
    'contactPage.findUs': 'Wir sind auf der Karte',
    'contactPage.writeUs': 'Schreiben Sie uns',
    'contactPage.banner.title': 'Nehmen Sie Kontakt auf!',
    'contactPage.banner.subtitle': 'Wir würden uns freuen, von Ihnen zu hören und zu besprechen, wie wir Ihnen unterstützen können!',
    'contactPage.banner.hours': 'Öffnungszeiten:',
    'contactPage.banner.hoursText': '24/7',
    'contactPage.banner.call': 'Rufen Sie uns an',
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
    'about.contactInfo': 'abwassertec.hessen@web.de\n0176-80559608\nSenefelder Str. 37 63069 Offenbach\nOpening hours: 24/7',
    
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
    
    // Services
    'services.emergency.title': '24h Hotline - Pipe Cleaning Emergency Service',
    'services.emergency.description': 'Your toilet blocked? The sink clogged? The basement flooded? Our emergency service is available 24 hours a day, 365 days a year! Reliable and fast experts for all your plumbing problems. Contact us no matter how urgent – we are here for you!',
    'services.emergency.cta': 'Tel: 0176-80559608 - Direct call to technician',
    'services.cleaning.title': 'Pipe & Drain Cleaning',
    'services.cleaning.description': 'Pipe blockages & emergency service (24/7 & 365 days): A blocked sewer line often occurs at the most inconvenient time and can cause flooding or backflow. In such cases, we offer you our 24-hour service at fair fixed prices and without travel costs.',
    'services.rehabilitation.title': 'Pipe & Sewer Rehabilitation',
    'services.rehabilitation.description': 'When inspecting pipelines, defects or weak points may occur that require repair or rehabilitation. In such cases, we are available to you with our expertise for both targeted individual measures and complete rehabilitation.',
    'services.inspection.title': 'Pipe & Sewer Inspection with TV Camera',
    'services.inspection.description': 'A camera inspection is crucial for evaluating sewer lines and pipe systems. It forms the basis for recommendations for pipe cleaning, pipe and sewer rehabilitation, and possible repairs. Our high-quality inspection systems provide precise results in sewer inspection and can be used flexibly in various scenarios.',
    'services.testing.title': 'Sewer Leak Testing',
    'services.testing.description': 'Sewer leak testing as a complete service – According to § 59/60/61a of the Water Resources Act in conjunction with DIN 1986-30, all owners of private properties are required to regularly check the condition and tightness of the sewer lines and manholes of their domestic drainage systems.',
    
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
    'footer.copyright': '© 2025 Wastewater Technology. All rights reserved.',
    
    // Contact Page
    'contactPage.title': 'CONTACT',
    'contactPage.subtitle': 'Contact us, we are always available for you!',
    'contactPage.formTitle': 'Contact Us',
    'contactPage.formSubtitle': 'Fill out the form below and we will contact you as soon as possible',
    'contactPage.meetTitle': 'Let\'s meet',
    'contactPage.meetSubtitle': 'Coffee is on us☕',
    'contactPage.callUs': 'Call us',
    'contactPage.findUs': 'Find us on the map',
    'contactPage.writeUs': 'Write to us',
    'contactPage.banner.title': 'Get in touch!',
    'contactPage.banner.subtitle': 'We would love to hear from you and discuss how we can support you!',
    'contactPage.banner.hours': 'Opening hours:',
    'contactPage.banner.hoursText': '24/7',
    'contactPage.banner.call': 'Call us',
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
