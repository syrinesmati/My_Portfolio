import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, isFrench } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const navItems = [
    { name: isFrench ? "Accueil" : "Home", to: "home" },
    { name: isFrench ? "A propos" : "About", to: "about" },
    { name: isFrench ? "Competences" : "Skills", to: "skills" },
    { name: isFrench ? "Education" : "Education", to: "education" },
    { name: isFrench ? "Experience" : "Experience", to: "experience" },
    { name: isFrench ? "Projets" : "Projects", to: "projects" },
    { name: isFrench ? "Contact" : "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background border-b ${
        scrolled ? "border-border backdrop-blur-lg" : "border-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="home" smooth duration={500} className="text-lg sm:text-xl font-bold cursor-pointer">
            <span className="text-gradient">Syrine Smati</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                spy
                activeClass="text-primary"
                className="cursor-pointer hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="font-semibold"
            >
              {isFrench ? "FR | EN" : "EN | FR"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "fr" : "en")}
              className="font-semibold px-3"
              aria-label={isFrench ? "Passer en anglais" : "Switch to French"}
            >
              {isFrench ? "FR | EN" : "EN | FR"}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[320px]">
                <SheetHeader>
                  <SheetTitle className="text-gradient text-2xl font-bold">{isFrench ? "Menu" : "Menu"}</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      smooth
                      duration={500}
                      spy
                      activeClass="text-primary font-semibold"
                      className="text-base sm:text-lg py-3 px-4 rounded-lg cursor-pointer hover:text-primary hover:bg-primary/10 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
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
