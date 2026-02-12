import { 
  Search, 
  Settings2, 
  TrendingUp,
  Check
} from 'lucide-react';
import { Button } from './ui/button';

const interventions = [
  {
    icon: Search,
    title: 'Diagnostic Stratégique & Opérationnel',
    whenToCall: 'Lorsque la vision n’est plus claire, que les décisions ralentissent et que la gouvernance ne soutient plus la performance.',
    objective: 'Clarifier la direction, fluidifier la prise de décision et aligner les dirigeants sur des partagées.',
    whatWeDo: [
      'Clarification de la vision des axes de valeur',
      'Structuration des rôles & gouvernance efficace',
      'Indicateurs de pilotage stratégique',
    ],
    results: [
      'Décisions plus rapides',
      'Parties prenantes alignées',
      'Vision claire et durable',
    ],
  },
  {
    icon: Settings2,
    title: 'Gouvernance & Performance',
    whenToCall: 'Pour des organisations en transformation disposant d’une vision claire mais devant structurer, rythmer et sécuriser l’exécution',
    objective: 'Elaborer et mettre en place une gouvernance efficace, capable de transformer la stratégie en actions durables.',
    whatWeDo: [
      'Gouvernance et rôles de décision',
      'Formalisation des choix stratégiques',
      'Plans d’action opérationnels & Indicateurs pertinents',
          ],
    results: [
      'Décisions lisibles et exécutées',
      'Alignement & Performance durable',
      'Pilotage structuré et maîtrisé',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Transformation Ciblée',
    whenToCall: 'Pour des organisations matures qui veulent renforcer leur gouvernance, accélérer les décisions et piloter durablement la performance.',
    objective: 'Transformer l’ambition stratégique en trajectoire opérationnelle maîtrisée, avec des priorités claires et un pilotage sécurisé.',
    whatWeDo: [
      'Diagnostic des leviers de transformation',
      'Feuille de route séquencée',
      'Workshops d’accompagnement',
    ],
    results: [
      'Transformation structurée et pilotable',
      'Équipes mobilisées autour d’objectifs clairs',
      'Avancées concrètes et délais maîtrisés',
    ],
  },
];

const InterventionCard = ({ intervention, index }: { intervention: typeof interventions[0]; index: number }) => {
  const handleContact = () => {
    window.location.href = `mailto:aaaconsulting-dz@outlook.com?subject=${encodeURIComponent(intervention.title)}`;
  };

  return (
    <div
      className="relative p-6 md:p-8 rounded-2xl border border-primary/30 bg-gradient-to-b from-[hsl(var(--deep-blue))]/80 to-[hsl(var(--navy))]/90 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 animate-fade-in-up flex flex-col h-full"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-5">
        <intervention.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-2xl font-bold text-foreground text-center mb-2">
        {intervention.title}
      </h3>

      {/* Results */}
      <div className="flex items-center justify-center gap-2 mb-5">
        <ul className="space-y-2">
          {intervention.results.map((result, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={2} />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* When to call */}
      <div className="mb-5">
        <h4 className="text-sm font-semibold text-primary mb-2">Quand faire appel à nous</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {intervention.whenToCall}
        </p>
      </div>

      {/* Objective */}
      <div className="mb-5">
        <h4 className="text-sm font-semibold text-primary mb-2">Objectif</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {intervention.objective}
        </p>
      </div>

      {/* What we do */}
      <div className="mb-5">
        <h4 className="text-sm font-semibold text-primary mb-2">Ce que nous faisons</h4>
        <ul className="space-y-2">
          {intervention.whatWeDo.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" strokeWidth={2} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      

      {/* CTA Button */}
      <div className="mt-auto pt-4">
        <Button 
          variant="outline" 
          className="w-full border-primary/50 text-primary hover:bg-primary/10 hover:border-primary"
          onClick={handleContact}
        >
          En savoir plus
        </Button>
      </div>
    </div>
  );
};

const SectorsSection = () => {
  return (
    <section id="offres" className="h-screen flex flex-col justify-center relative overflow-hidden">
      <div className="container-custom">

        {/* Section Header */}
        <div className="text-left md:text-center mb-10"> 
          <h3 className="text-lg md:text-2xl font-bold text-foreground text-center mb-2">
        Des Offres structurées pour faire face à la complexité.
      </h3>
          </div>
      </div>
        
        {/* Interventions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 justify-center"> 
        {interventions.map((intervention, index) => ( 
        <div className="max-w-md mx-auto"> 
        <InterventionCard key={intervention.title} intervention={intervention} index={index} /> 
      </div> 
    ))} 
    </div>
        
    </section>
  );
};

export default SectorsSection;
