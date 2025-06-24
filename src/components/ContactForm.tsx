
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

interface ContactFormProps {
  type?: 'contact' | 'emergency' | 'service';
  serviceType?: string;
}

const ContactForm = ({ type = 'contact', serviceType }: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
    description: ''
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (type === 'emergency') {
        const { error } = await supabase
          .from('emergency_calls')
          .insert({
            name: formData.name,
            phone: formData.phone,
            address: formData.address,
            description: formData.description,
            priority: 'high'
          });

        if (error) throw error;
        
        toast({
          title: "Notfall-Anfrage gesendet!",
          description: "Wir werden Sie schnellstmöglich kontaktieren.",
        });
      } else if (type === 'service') {
        const { error } = await supabase
          .from('service_requests')
          .insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service_type: serviceType || 'rohrreinigung',
            description: formData.description,
            urgent: false
          });

        if (error) throw error;
        
        toast({
          title: "Service-Anfrage gesendet!",
          description: "Wir werden uns bald bei Ihnen melden.",
        });
      } else {
        const { error } = await supabase
          .from('contact_submissions')
          .insert({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message
          });

        if (error) throw error;
        
        toast({
          title: "Nachricht gesendet!",
          description: "Vielen Dank für Ihre Nachricht. Wir melden uns bald bei Ihnen.",
        });
      }

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
        description: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Fehler beim Senden",
        description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className={type === 'contact' ? "grid md:grid-cols-2 gap-6" : "space-y-6"}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {type === 'contact' ? t('form.firstName') : 'Name'}
          </label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder={type === 'contact' ? t('form.firstNamePlaceholder') : "Ihr Name"}
            required
          />
        </div>
        
        {type === 'contact' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.lastName')}
            </label>
            <Input
              type="text"
              name="lastname"
              placeholder={t('form.lastNamePlaceholder')}
            />
          </div>
        )}
      </div>
      
      {type !== 'emergency' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t('form.email')}
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder={t('form.emailPlaceholder')}
            required
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {t('form.phone')}
        </label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder={t('form.phonePlaceholder')}
          required
        />
      </div>

      {type === 'emergency' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adresse
          </label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Ihre Adresse"
            required
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {type === 'emergency' ? 'Beschreibung des Problems' : t('form.message')}
        </label>
        <Textarea
          rows={6}
          name={type === 'emergency' ? 'description' : 'message'}
          value={type === 'emergency' ? formData.description : formData.message}
          onChange={handleInputChange}
          placeholder={type === 'emergency' ? "Beschreiben Sie Ihr Problem..." : t('form.messagePlaceholder')}
          required
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg transition-colors duration-200 font-medium"
      >
        {isSubmitting ? t('form.sending') : t('form.send')}
      </Button>
    </form>
  );
};

export default ContactForm;
