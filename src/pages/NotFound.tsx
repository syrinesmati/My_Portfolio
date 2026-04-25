import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { isFrench } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-gray-600">{isFrench ? "Oups ! Page introuvable" : "Oops! Page not found"}</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700">
          {isFrench ? "Retour a l'accueil" : "Return to Home"}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
