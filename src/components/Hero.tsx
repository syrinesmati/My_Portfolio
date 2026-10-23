import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Calendar, Rocket, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile/profile-laptop.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { isFrench } = useLanguage();

  const stats = [
    { value: "1+", label: isFrench ? "An d'expérience" : "Year of experience", icon: Calendar, warm: true },
    { value: "10+", label: isFrench ? "Projets livrés" : "Projects shipped", icon: Rocket, warm: false },
    { value: "3", label: isFrench ? "Stages en IA" : "AI internships", icon: Sparkles, warm: true },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-24 pb-6 overflow-hidden">
      {/* Giant background wordmark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden" aria-hidden="true">
        <span className="ghost-text text-[22vw] whitespace-nowrap">SYRINE</span>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="eyebrow">{isFrench ? "Bienvenue" : "Welcome to my world"}</span>
          <span className="eyebrow hidden sm:inline-flex items-center gap-1.5">
            {isFrench ? "Basée à Tunis" : "Based in Tunis, Tunisia"}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-[1fr_auto_auto] gap-10 md:gap-10 lg:gap-14 items-center mt-10 md:mt-16"
        >
          <div className="space-y-6 text-center md:text-left">
            <p className="eyebrow text-warm">
              {isFrench ? "IA Appliquée & Machine Learning" : "Applied AI & Machine Learning"}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              {isFrench ? "construire des systèmes d'IA & " : "Building AI Systems & "}
              <span className="font-accent-italic text-warm">
                {isFrench ? "transformer des idées en code." : "turning ideas into code."}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed">
              {isFrench
                ? "Élève ingénieure en informatique spécialisée en IA, je conçois des systèmes intelligents combinant LLM, agents IA, vision par ordinateur et apprentissage automatique."
                : "AI-focused Software Engineering student building intelligent systems with LLMs, agentic workflows, computer vision, and machine learning."}
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
              <Button size="lg" asChild>
                <a href="#projects" className="flex items-center gap-2">
                  {isFrench ? "Voir mes projets" : "View my work"}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">{isFrench ? "Me contacter" : "Get in touch"}</a>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center mt-4 md:mt-0">
            <div
              className="absolute bottom-0 h-3/4 w-3/4 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.35), transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden w-[300px] h-[305px] sm:w-[395px] sm:h-[400px] md:w-[490px] md:h-[500px] lg:w-[565px] lg:h-[580px]">
              <img
                src={profileImage}
                alt="Syrine Smati"
                width={1000}
                height={1400}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="absolute top-0 left-0 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="relative flex flex-row md:flex-col items-start justify-center gap-8 md:gap-0 md:py-2">
            <div className="hidden md:block absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent" aria-hidden="true" />
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 text-center md:text-left ${
                  index > 0 ? "md:mt-8" : ""
                }`}
              >
                <div
                  className={`relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center card-soft ${
                    stat.warm ? "tint-warm" : "tint-cool"
                  }`}
                >
                  <stat.icon className={`h-4 w-4 ${stat.warm ? "text-warm" : "text-primary"}`} />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold leading-none">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 whitespace-nowrap">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="hidden sm:flex items-center justify-between text-[11px] text-muted-foreground uppercase tracking-[0.2em] mt-16">
          <span>{isFrench ? "Syrine Smati / Portfolio" : "Syrine Smati / Portfolio"}</span>
          <span>{isFrench ? "Défiler pour découvrir" : "Scroll to discover"}</span>
          <span>{isFrench ? "Idées en code" : "Ideas into code"}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
