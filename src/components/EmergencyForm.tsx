
import ContactForm from './ContactForm';

const EmergencyForm = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-red-600 mb-6">
        🚨 Notfall-Rohrreinigung
      </h3>
      <p className="text-gray-600 mb-6">
        Für dringende Notfälle füllen Sie bitte dieses Formular aus. Wir werden Sie sofort kontaktieren.
      </p>
      <ContactForm type="emergency" />
    </div>
  );
};

export default EmergencyForm;
