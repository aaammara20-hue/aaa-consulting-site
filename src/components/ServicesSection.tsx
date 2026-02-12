import { useEffect, useRef, useState } from 'react';
import { 
  Target, 
  Settings2, 
  Cpu, 
  Lightbulb, 
  Users, 
  Leaf
} from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Stratégie & Gouvernance',
    description: 'Clarifier les choix stratégiques et structurer les instances de gouvernance.',
    bullets: [
      'Diagnostique de la gouvernance',
      'Alignement stratégique de la structure'
    ]
  },
  {
    icon: Settings2,
    title: 'Organisation & Performance',
    description: 'Optimiser les organisations et le pilotage efficace de la performance.',
    bullets: [
      'Analyse des processus clés',
      'Optimisation et rituels de pilotage'
    ]
  },
  {
    icon: Users,
    title: 'Capital Humain & Leadership',
    description: 'Renforcer les capacités managériales et le Leadership.',
    bullets: [
      'Formalisation de la culture managériale',
      'Coaching et structuration de Leadership'
    ]
  },
  {
    icon: Cpu,
    title: 'Transformation Digitale',
    description: 'Définir la transition numérique et les opportunités d\'automatisation.',
    bullets: [
      'Feuille de route digitalisation',
      'Accompagnement du changement'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Transformer les idées stratégiques en résultats concrets.',
    bullets: [
      'Identification des leviers d\'innovation',
      'Ideation & déploiement maitrisé et sécurisé'
    ]
  },
  {
    icon: Leaf,
    title: 'Développement Durable',
    description: 'Traduire les obligations ESG en résultats tangibles et performance durable.',
    bullets: [
      'Maitrise des obligations et de la conformité',
      'Déploiement & suivi des Plans d\'actions'
    ]
  },
];

const ServiceCard = ({ 
  service, 
  index, 
  isVisible 
}: { 
  service: typeof services[0]; 
  index: number; 
  isVisible: boolean;
}) => {
  return (
    <div 
      className={`glass-card p-5 md:p-6 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4 mb-3">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
        </div>
        {/* Title */}
        <h3 className="text-lg font-bold text-foreground pt-2">
          {service.title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-sm text-muted-foreground italic mb-4">
        « {service.description} »
      </p>
      
      <ul className="space-y-2">
        {service.bullets.map((bullet, bulletIndex) => (
          <li key={bulletIndex} className="flex items-start gap-3 text-sm text-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
      
      {/* Accent Line */}
      <div className="mt-5 h-0.5 w-10 bg-primary" />
    </div>
  );
};

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-padding relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-transparent to-card/20" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-left md:text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            
            <span className="text-gradient-blue">Accompagnement </span>
             à 360°
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Structurer et sécuriser la performance durable de votre organisation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
            >
              <ServiceCard 
                service={service} 
                index={index} 
                isVisible={visibleCards.has(index)} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
