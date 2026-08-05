import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile/profile-photo.png";
import SectionGlowBackground from "@/components/SectionGlowBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { isFrench } = useLanguage();

  return (
    <section id="home" className="min-h-[calc(100svh-4rem)] md:min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <SectionGlowBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div className="space-y-5 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              {isFrench ? "Bonjour, je suis " : "Hi, I'm "}
              <span className="text-gradient">Syrine Smati</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              {isFrench ? "Étudiante en génie logiciel" : "Software Engineering Student"}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gradient font-semibold">
              {isFrench ? "Transformer les idées en code" : "Bringing Ideas into Code"}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
              {isFrench
                ? "Je crée des applications intelligentes et des solutions de bout en bout."
                : "Building intelligent applications and crafting end-to-end solutions."}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" className="glow">
                <a href="#about">
                  {isFrench ? "Voir plus" : "View More"}
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <img
                src={profileImage}
                alt="Syrine Smati"
                width={448}
                height={448}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full object-cover border-4 border-primary glow animate-float"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
