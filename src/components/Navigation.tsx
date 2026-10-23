import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, isFrench } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const goToSection = (to: string) => {
    navigate("/", { state: { scrollTo: to } });
  };

  useEffect(() => {
    if (!isHome) setActiveSection("");
  }, [isHome]);

  const navItems = [
    { name: isFrench ? "Accueil" : "Home", to: "home" },
    { name: isFrench ? "À propos" : "About", to: "about" },
    { name: isFrench ? "Projets" : "Projects", to: "projects" },
    { name: isFrench ? "Expérience" : "Experience", to: "experience" },
    { name: isFrench ? "Compétences" : "Skills", to: "skills" },
    { name: isFrench ? "Éducation" : "Education", to: "education" },
    { name: isFrench ? "Bénévolat" : "Volunteering", to: "volunteering" },
    { name: isFrench ? "Contact" : "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-3">
          {isHome ? (
            <Link to="home" smooth duration={500} className="text-lg font-semibold tracking-tight cursor-pointer shrink-0">
              Syrine Smati
            </Link>
          ) : (
            <span
              onClick={() => goToSection("home")}
              className="text-lg font-semibold tracking-tight cursor-pointer shrink-0"
            >
              Syrine Smati
            </span>
          )}

          {/* Desktop pill nav */}
          <div className="hidden lg:flex items-center gap-0.5 bg-card/90 backdrop-blur-md rounded-full px-1.5 py-1.5 shadow-[0_2px_16px_-4px_hsl(var(--foreground)/0.1)] border border-border/60">
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.to;
              return (
                <div key={item.to} className="relative">
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {isHome ? (
                    <Link
                      to={item.to}
                      smooth
                      duration={500}
                      spy
                      offset={-80}
                      onSetActive={() => setActiveSection(item.to)}
                      className={`relative z-10 block px-4 py-1.5 text-sm rounded-full cursor-pointer transition-colors whitespace-nowrap ${
                        isActive ? "text-primary-foreground" : "hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span
                      onClick={() => goToSection(item.to)}
                      className="relative z-10 block px-4 py-1.5 text-sm rounded-full cursor-pointer hover:text-primary transition-colors whitespace-nowrap"
                    >
                      {item.name}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <a
              href="https://github.com/syrinesmati"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/syrine-smati-a613702b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="font-semibold hidden sm:inline-flex"
            >
              {isFrench ? "FR | EN" : "EN | FR"}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="font-semibold px-3 sm:hidden"
              aria-label={isFrench ? "Passer en anglais" : "Switch to French"}
            >
              {isFrench ? "FR" : "EN"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[320px]">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-semibold">{isFrench ? "Menu" : "Menu"}</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-2">
                  {navItems.map((item) =>
                    isHome ? (
                      <Link
                        key={item.to}
                        to={item.to}
                        smooth
                        duration={500}
                        spy
                        offset={-80}
                        activeClass="text-primary font-semibold bg-secondary"
                        className="text-base py-3 px-4 rounded-full cursor-pointer hover:text-primary hover:bg-secondary transition-all"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span
                        key={item.to}
                        onClick={() => {
                          setIsOpen(false);
                          goToSection(item.to);
                        }}
                        className="text-base py-3 px-4 rounded-full cursor-pointer hover:text-primary hover:bg-secondary transition-all"
                      >
                        {item.name}
                      </span>
                    )
                  )}
                  <div className="flex items-center gap-4 pt-4 px-4">
                    <a href="https://github.com/syrinesmati" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/syrine-smati-a613702b4/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
