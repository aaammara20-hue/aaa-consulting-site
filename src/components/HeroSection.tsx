import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float delay-300" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-left md:text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Strategy & Organization Consulting
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up delay-100">
            Transformer la Complexité.{' '}
            <span className="text-gradient-blue">en valeur.</span>
          </h1>

          {/* When to call */}
           <h1 className="text-2xl font-semibold text-primary text-gray-300 mb-6">
            Clarifier les décisions | Aligner l’organisation | Sécuriser l’exécution
            </h1>
                                   
          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200">
            Nous accompagnons les dirigeants dans la prise de décision stratégique, la structuration des organisations et le pilotage de la performance, dans des environnements complexes et en transformation.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center animate-fade-in-up delay-300">
            <Button variant="cta" size="xl" className="group" asChild>
              <a href="#contact">
                Parlons de votre situation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#services">Découvrir nos services</a>
            </Button>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground tracking-widest mt-8 animate-fade-in-up delay-400">
            Accompagnement | Gouvernance | Performance
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
