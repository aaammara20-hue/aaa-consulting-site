import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 bg-card/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="AAA Consulting Services"
              className="h-10 w-auto"
            />
            <div>
              <p className="text-foreground font-semibold">AAA Consulting Services</p>
              <p className="text-muted-foreground text-sm">
                © {currentYear} Tous droits réservés.
              </p>
            </div>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#accueil"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
            >
              Accueil
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm italic">
            Structuring Strategy. Enabling Execution.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
