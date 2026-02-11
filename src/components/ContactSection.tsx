import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { sendContactEmails } from '@/lib/emailjs';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Coopérative La Rotte, No.14 Tixeraine, Birkhadem, Alger',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+213 770 115 895',
    href: 'tel:+213770115895',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'aaaconsulting-dz@outlook.com',
    href: 'mailto:aaaconsulting-dz@outlook.com',
  },
];

const hours = [
  { days: 'Dim - Jeu', time: '9h - 19h' },
  { days: 'Sam', time: 'Sur rendez-vous' },
  { days: 'Ven', time: 'Fermé' },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await sendContactEmails(formData);
      
      toast.success('Message envoyé !', {
        description: 'Nous vous répondrons dans les plus brefs délais.',
      });
      
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast.error('Erreur d\'envoi', {
        description: 'Une erreur est survenue. Veuillez réessayer.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-card/50" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Parlons de votre projet
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Prenez contact pour une discussion de cadrage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Informations de contact
            </h3>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <h4 className="text-foreground font-semibold">Horaires d'ouverture</h4>
              </div>
              <div className="space-y-2">
                {hours.map((item) => (
                  <div key={item.days} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.days}</span>
                    <span className="text-foreground font-medium">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up delay-200">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Décrivez votre projet ou besoin..."
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
