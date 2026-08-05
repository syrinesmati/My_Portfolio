import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { isFrench } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{isFrench ? "Oups ! Page introuvable" : "Oops! Page not found"}</p>
        <Link to="/" className="text-primary underline hover:text-primary/80">
          {isFrench ? "Retour à l'accueil" : "Return to Home"}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
