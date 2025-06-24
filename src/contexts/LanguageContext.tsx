
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
    'contactPage.formTitle': 'Kontaktieren Sie uns',
    'contactPage.formSubtitle': 'Füllen Sie das untenstehende Formular aus und wir werden uns so schnell wie möglich bei Ihnen melden',
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

    // Services Page
    'servicesPage.hero.title': 'Unsere Dienstleistungen – Transparent, Fair & Zuverlässig',
    'servicesPage.hero.point1': 'Faire und transparente Preisgestaltung – Für private und gewerbliche Kunden ohne versteckte Kosten.',
    'servicesPage.hero.point2': 'Festpreisgarantie – Klare Kalkulation, keine Überraschungen, volle Kostenkontrolle.',
    'servicesPage.hero.point3': 'Effektive Rohrreinigung & Verstopfungsbeseitigung – Schnell, zuverlässig und professionell. Mit unserem Festpreiskonzept wissen Sie von Anfang an, welche Kosten auf Sie zukommen – ohne böse Überraschungen!',
    'servicesPage.section.title': 'Schnelle Anfahrt zum Einsatzort',
    'servicesPage.service1.title': 'Manuelle Beseitigung von Verstopfungen in Objekten z. B. Toiletten, Waschbecken, Spülen usw. Festpreise inklusive An- und Abfahrt',
    'servicesPage.service2.title': 'Beseitigung von Verstopfungen in Wohnungs- oder Etagenleitungen bis zur Fall- oder Grundleitung, einschließlich Bodenabläufe. z. B. Anschlussleitungen, Sammelleitungen, Toiletten, Spülen, Waschbecken, Bidets, Bodenabläufe usw. Festpreise inklusive An- und Abfahrt.',
    'servicesPage.service3.title': 'Verstopfungsbeseitigung an Leitungen innerhalb des Objekts sowie an Kleinhebeanlagen,',
    'servicesPage.service3.subtitle': 'z. B. Fallleitungen, Sammelleitungen, Schleppleitungen und Regenleitungen,',
    'servicesPage.service3.footer': 'einschließlich Festpreise für An- und Abfahrt.',
    'servicesPage.service4.title': 'Verstopfungsbeseitigung an Leitungen außerhalb des Objekts sowie an Hauptleitungen und Hebeanlagen,',
    'servicesPage.service4.subtitle': 'z. B. Grundleitungen, Hauptleitungen, Schächte und Hebeanlagen,',
    'servicesPage.service4.footer': 'einschließlich Festpreise für An- und Abfahrt.',
    'servicesPage.execution.title': 'Ausführung:',
    'servicesPage.execution.description': 'Der Einsatz von Maschinen und Geräten sowie die Durchführung der Arbeiten obliegen im Rahmen des erteilten Auftrags ausschließlich unseren Mitarbeitern, die hierbei insbesondere die Arbeitsicherheit und Unfallverhütungsvorschriften zu beachten müssen. Unsere Leistungen, wie Reinigung, Entstopfung, Kanalreinigungsarbeiten, TV-Inspektion der Gruen als Bestimmung der Besichtigung auch zu Schäden an den Rohren (z. B. Rohrbruch, starker gerichteten Erfolg zu ermöglichen. Dazu kann es erforderlich sein, Kanäle und Leitungen freizulegen, z. B. durch das Aufstmen eines Fußbodens, um Rohrschäden zu reparieren und die Leitung zu entstopfen.',
    'servicesPage.execution.notice': 'Unsere Notdienstzeiten sind rund um die Uhr, also 24 Stunden an 7 Tagen in der Woche, einschließlich Montag bis Freitag von 17:00 Uhr bis 08:00 Uhr sowie an Samstagen, Sonn- und Feiertagen.',

    // About Us Page
    'aboutPage.hero.title': 'Abwasser Technik - stellt sich vor',
    'aboutPage.hero.subtitle': 'Euer Professionelles Team für Rohrreinigung & Kanalsanierung',
    'aboutPage.story.title': 'Unsere Story',
    'aboutPage.story.p1': 'Im Jahr 2009 wurde das Unternehmen Abwasser Technik als Einzelunternehmen gegründet. Seitdem hat unser Betrieb zahlreiche Entwicklungsphasen durchlaufen und wertvolle Erfahrungen gesammelt. 2010 erfolgte der Beitritt zu einem Franchiseverbund, wodurch unser Einsatzgebiet erheblich erweitert wurde. Mit den Jahren wuchs das Unternehmen auf 11 Monteure heran und konnte einen umfassenden Service im Bereich Rohr- und Abflussreinigung anbieten.',
    'aboutPage.story.p2': 'Seit 2020 agieren wir erfolgreich als eigenständige Marke Abwasser Technik. Unser Team in Offenbach besteht derzeit aus vier erfahrenen Monteuren sowie einem Lehrling und bietet professionelle Dienstleistungen in Offenbach, Frankfurt, Hanau und der umliegenden Region an.',
    'aboutPage.story.p3': 'Als wachsendes Unternehmen sind wir stets bestrebt, unser Team und unsere Standorte weiter auszubauen, um Ihnen den bestmöglichen Service rund um die Rohrreinigung direkt in Ihrer Nähe anzubieten.',
    'aboutPage.whatFor.title': 'Was für uns spricht',
    'aboutPage.whatFor.subtitle': 'Unser professionelles Team arbeitet effizient, sauber und mit voller Transparenz. Von der ersten Kontaktaufnahme bis zur erfolgreichen Durchführung erleben Sie einen erstklassigen Service.',
    'aboutPage.point1': 'Über 12 Jahre Erfahrung',
    'aboutPage.point1.desc': ' – Fachwissen, auf das Sie sich verlassen können',
    'aboutPage.point2': 'Qualifiziertes Personal',
    'aboutPage.point2.desc': ' – Kompetente und geschulte Fachkräfte',
    'aboutPage.point3': 'Schnelle Hilfe, 24/7 erreichbar',
    'aboutPage.point3.desc': ' – Wir sind jederzeit für Sie da',
    'aboutPage.point4': 'Faire und transparente Preise',
    'aboutPage.point4.desc': ' – Keine versteckten Kosten',
    'aboutPage.point5': 'Keine Anfahrtskosten',
    'aboutPage.point5.desc': ' – Unser Service beginnt direkt bei Ihnen',
    'aboutPage.point6': 'Modernste Technik & Ausstattung',
    'aboutPage.point6.desc': ' – Für effiziente und schonende Rohrreinigung',
    'aboutPage.impressum.title': 'IMPRESSUM',
    'aboutPage.impressum.tmg': 'Angaben gemäß § 5 TMG:',
    'aboutPage.impressum.contact': 'Kontakt:',
    'aboutPage.impressum.vatId': 'Umsatzsteuer-ID:',
    'aboutPage.impressum.vatText': 'Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE 236018066',
    'aboutPage.impressum.responsible': 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:',
    'aboutPage.legal.liability.title': 'Haftung für Inhalte',
    'aboutPage.legal.liability.p1': 'Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
    'aboutPage.legal.liability.p2': 'Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.',
    'aboutPage.legal.links.title': 'Haftung für Links',
    'aboutPage.legal.links.p1': 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
    'aboutPage.legal.links.p2': 'Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.',
    'aboutPage.legal.copyright.title': 'Urheberrecht',
    'aboutPage.legal.copyright.p1': 'Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.',
    'aboutPage.legal.copyright.p2': 'Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.',
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

    // Services Page
    'servicesPage.hero.title': 'Our Services – Transparent, Fair & Reliable',
    'servicesPage.hero.point1': 'Fair and transparent pricing – For private and commercial customers without hidden costs.',
    'servicesPage.hero.point2': 'Fixed price guarantee – Clear calculation, no surprises, full cost control.',
    'servicesPage.hero.point3': 'Effective pipe cleaning & blockage removal – Fast, reliable and professional. With our fixed price concept you know from the beginning what costs you will incur – without nasty surprises!',
    'servicesPage.section.title': 'Fast arrival at the site',
    'servicesPage.service1.title': 'Manual removal of blockages in objects e.g. toilets, washbasins, sinks etc. Fixed prices including arrival and departure',
    'servicesPage.service2.title': 'Removal of blockages in apartment or floor lines up to the fall or main line, including floor drains. e.g. connection lines, collecting lines, toilets, sinks, washbasins, bidets, floor drains etc. Fixed prices including arrival and departure.',
    'servicesPage.service3.title': 'Blockage removal on lines within the object as well as on small lifting systems,',
    'servicesPage.service3.subtitle': 'e.g. fall lines, collecting lines, dragging lines and rain lines,',
    'servicesPage.service3.footer': 'including fixed prices for arrival and departure.',
    'servicesPage.service4.title': 'Blockage removal on lines outside the object as well as on main lines and lifting systems,',
    'servicesPage.service4.subtitle': 'e.g. basic lines, main lines, shafts and lifting systems,',
    'servicesPage.service4.footer': 'including fixed prices for arrival and departure.',
    'servicesPage.execution.title': 'Execution:',
    'servicesPage.execution.description': 'The use of machines and equipment as well as the performance of work is solely the responsibility of our employees within the scope of the contract, who must pay particular attention to occupational safety and accident prevention regulations. Our services, such as cleaning, unblocking, sewer cleaning work, TV inspection of the greens as determination of the inspection also to damage to the pipes (e.g. pipe break, strong directional success. For this purpose, it may be necessary to expose sewers and lines, e.g. by opening a floor, to repair pipe damage and unblock the line.',
    'servicesPage.execution.notice': 'Our emergency service hours are around the clock, i.e. 24 hours a day, 7 days a week, including Monday to Friday from 5:00 p.m. to 8:00 a.m. as well as on Saturdays, Sundays and public holidays.',

    // About Us Page
    'aboutPage.hero.title': 'Wastewater Technology - introduces itself',
    'aboutPage.hero.subtitle': 'Your Professional Team for Pipe Cleaning & Sewer Rehabilitation',
    'aboutPage.story.title': 'Our Story',
    'aboutPage.story.p1': 'In 2009, the company Wastewater Technology was founded as a sole proprietorship. Since then, our business has gone through numerous development phases and gained valuable experience. In 2010, we joined a franchise network, which significantly expanded our area of operation. Over the years, the company grew to 11 technicians and was able to offer comprehensive service in the field of pipe and drain cleaning.',
    'aboutPage.story.p2': 'Since 2020, we have been successfully operating as an independent brand Wastewater Technology. Our team in Offenbach currently consists of four experienced technicians and an apprentice and offers professional services in Offenbach, Frankfurt, Hanau and the surrounding region.',
    'aboutPage.story.p3': 'As a growing company, we are always striving to further expand our team and our locations in order to offer you the best possible service around pipe cleaning directly in your area.',
    'aboutPage.whatFor.title': 'What speaks for us',
    'aboutPage.whatFor.subtitle': 'Our professional team works efficiently, cleanly and with full transparency. From the first contact to successful implementation, you experience first-class service.',
    'aboutPage.point1': 'Over 12 years of experience',
    'aboutPage.point1.desc': ' – Expertise you can rely on',
    'aboutPage.point2': 'Qualified personnel',
    'aboutPage.point2.desc': ' – Competent and trained specialists',
    'aboutPage.point3': 'Fast help, available 24/7',
    'aboutPage.point3.desc': ' – We are always there for you',
    'aboutPage.point4': 'Fair and transparent prices',
    'aboutPage.point4.desc': ' – No hidden costs',
    'aboutPage.point5': 'No travel costs',
    'aboutPage.point5.desc': ' – Our service starts directly with you',
    'aboutPage.point6': 'State-of-the-art technology & equipment',
    'aboutPage.point6.desc': ' – For efficient and gentle pipe cleaning',
    'aboutPage.impressum.title': 'IMPRINT',
    'aboutPage.impressum.tmg': 'Information according to § 5 TMG:',
    'aboutPage.impressum.contact': 'Contact:',
    'aboutPage.impressum.vatId': 'VAT ID:',
    'aboutPage.impressum.vatText': 'VAT identification number according to §27a VAT law: DE 236018066',
    'aboutPage.impressum.responsible': 'Responsible for content according to § 55 Para. 2 RStV:',
    'aboutPage.legal.liability.title': 'Liability for Content',
    'aboutPage.legal.liability.p1': 'As a service provider, we are responsible for our own content on these pages according to § 7 para. 1 TMG under the general laws. According to §§ 8 to 10 TMG, however, we as a service provider are not under the obligation to monitor transmitted or stored external information or to research circumstances that indicate illegal activity.',
    'aboutPage.legal.liability.p2': 'Obligations to remove or block the use of information according to the general laws remain unaffected. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of corresponding legal violations, we will remove this content immediately.',
    'aboutPage.legal.links.title': 'Liability for Links',
    'aboutPage.legal.links.p1': 'Our offer contains links to external websites of third parties, over whose content we have no influence. Therefore, we cannot assume any guarantee for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages.',
    'aboutPage.legal.links.p2': 'The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking. However, permanent content control of the linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.',
    'aboutPage.legal.copyright.title': 'Copyright',
    'aboutPage.legal.copyright.p1': 'The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.',
    'aboutPage.legal.copyright.p2': 'Insofar as the content on this page was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.',
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
