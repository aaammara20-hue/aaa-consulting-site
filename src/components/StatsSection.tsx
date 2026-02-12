import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '25', suffix: '', label: 'Ans d\'expérience' },
  { value: '05', suffix: '+', label: 'Projets réussis' },
  { value: '10', suffix: '+', label: 'Experts Partenaires' },
  { value: '100', suffix: '%', label: 'Local' },
];

const StatsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="expertise" className="h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5" />
      
      <div className="container-custom relative z-10">
        {/* Expertise Text - Two Column Layout */}
        <div className="glass-card p-8 md:p-12 mb-8 animate-fade-in-up">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column - Title */}
            <div className="lg:col-span-2">
              <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                Notre Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Une Expertise Reconnue
              </h2>
            </div>
            
            {/* Right Column - Text with Progressive Disclosure */}
            <div className="lg:col-span-3">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                AAA Consulting Services accompagne les entreprises dans leur transformation. Notre expertise repose sur une expérience approfondie de contextes complexes et réglementés, au croisement de la stratégie, de l'organisation et de l'exécution.
              </p>
              
              {/* Expandable Content */}
              <div 
                className="grid transition-all duration-300 ease-out"
                style={{
                  gridTemplateRows: isExpanded ? '1fr' : '0fr',
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed pb-2">
                    Dans un environnement marqué par l'incertitude et la complexité des chaînes de valeur, notre approche collaborative et notre engagement envers l'excellence nous permettent de délivrer des solutions concrètes et mesurables.
                  </p>
                </div>
              </div>
              
              {/* Read More Toggle */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-2 text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-200 mt-2"
              >
                <span>{isExpanded ? 'Réduire' : 'Lire la suite'}</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-blue">
                    {stat.value}
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
