import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { isFrench } = useLanguage();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            {isFrench ? "© 2025 Syrine Smati. Tous droits réservés." : "© 2025 Syrine Smati. All rights reserved."}
          </p>
          <p className="flex items-center gap-2 text-muted-foreground">
            {isFrench ? "Fait avec " : "Made with "}
            <Heart className="w-4 h-4 text-primary fill-primary" />
            {isFrench ? " et beaucoup de café" : " and lots of coffee"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
