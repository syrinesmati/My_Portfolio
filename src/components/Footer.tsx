import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { isFrench } = useLanguage();

  return (
    <footer className="py-8 border-t border-border/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Syrine Smati</span>
          <p>
            {isFrench ? "© 2025 Syrine Smati. Tous droits réservés." : "© 2025 Syrine Smati. All rights reserved."}
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-primary transition-colors"
          >
            {isFrench ? "Haut de page ↑" : "Back to top ↑"}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
