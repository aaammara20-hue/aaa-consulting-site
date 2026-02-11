import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "AAA Consulting nous a accompagnés dans une transformation stratégique majeure. Leur rigueur méthodologique et leur pragmatisme ont fait la différence.",
    author: 'Client A',
    role: 'Directrice Générale',
  },
  {
    quote: "Une équipe de haut niveau qui a su comprendre les enjeux spécifiques de notre secteur. Les résultats sont au rendez-vous.",
    author: 'Client B',
    role: 'Directeur des Opérations',
  },
  {
    quote: "Partenaires de confiance depuis 3 ans, ils nous aident à naviguer la complexité avec une vision claire et des solutions concrètes.",
    author: 'Client C',
    role: 'CEO',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="temoignages" className="h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-left md:text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            La confiance de nos clients
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Des dirigeants qui nous font confiance pour leurs enjeux stratégiques.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card p-8 relative group hover:bg-card/60 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/30 mb-6" strokeWidth={1} />

              {/* Quote Text */}
              <blockquote className="text-foreground text-base leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.author.charAt(testimonial.author.length - 1)}
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
