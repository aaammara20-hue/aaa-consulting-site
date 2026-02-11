import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Accueil', href: '#accueil' },
    { label: 'Services', href: '#services' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Offres', href: '#offres' },
    { label: 'Témoignages', href: '#temoignages' },
    
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="AAA Consulting Services"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-foreground font-bold text-lg hidden sm:inline">
            AAA Consulting
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium hover-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="cta" size="lg" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card animate-fade-in">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="cta" className="mt-4 w-full" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
