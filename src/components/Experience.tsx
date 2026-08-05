import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import techtrollLogo from "@/assets/experience/techtroll-logo.png";
import guepardLogo from "@/assets/experience/guepard-logo.png";
import welyneLogo from "@/assets/experience/welyne-logo.png";
import yonnovLogo from "@/assets/experience/yonnov-logo.png";
import SectionGlowBackground from "@/components/SectionGlowBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { isFrench } = useLanguage();

  const experiences = isFrench
    ? [
        {
          logo: techtrollLogo,
          title: "Stagiaire IA",
          organization: "TechTroll",
          location: "New Cairo, Egypte",
          period: "Juin 2026 - Present",
          description:
            "Travail sur Ossus.ai, une plateforme IA axee sur l'extraction de documents et le raisonnement de conformite. Developpement de pipelines intelligents pour extraire des informations structurees a partir de documents complexes et exploration d'approches basees sur les LLM pour l'analyse de conformite, le raisonnement et la comprehension automatique de documents.",
          technologies: ["Python", "LLMs", "RAG", "Document AI", "NLP", "Machine Learning"],
          type: "work",
        },
        {
          logo: guepardLogo,
          title: "Stagiaire IA",
          organization: "Guepard",
          location: "Tunisie",
          period: "Fev 2026 - Present",
          description:
            "Optimisation de la couche semantique de Qwery, une plateforme d'analyse NL-to-SQL. Conception de mecanismes de desambiguIsation semantique pour relier l'intention utilisateur aux concepts metier.",
          technologies: ["NLP", "NL-to-SQL", "Semantic Layer", "AI Analytics"],
          type: "work",
        },
        {
          logo: welyneLogo,
          title: "Stagiaire IA",
          organization: "Welyne",
          location: "Ariana, Tunisie",
          period: "Juil 2025 - Sep 2025",
          description:
            "Amelioration d'un modele de deep learning qui predit la longueur du bras a partir de caracteristiques biometriques, en optimisant architecture, preprocessing et hyperparametres.",
          technologies: ["Deep Learning"],
          type: "work",
        },
        {
          logo: yonnovLogo,
          title: "Stagiaire IA",
          organization: "Yonnov'IA",
          location: "Marseille, France (Remote)",
          period: "Juin 2025 - Aout 2025",
          description:
            "Conception d'un systeme de recommandation modulaire pour Odoo eCommerce, avec amelioration de la pertinence des recommandations (+30%) grace a une approche hybride.",
          technologies: ["Odoo", "Recommender Systems", "Collaborative Filtering", "Content-based Filtering"],
          type: "work",
        },
      ]
    : [
    {
      logo: techtrollLogo,
      title: "AI Intern",
      organization: "TechTroll",
      location: "New Cairo, Egypt",
      period: "June 2026 – Present",
      description:
        "Working on Ossus.ai, an AI platform focused on document extraction and compliance reasoning. Developing intelligent pipelines for extracting structured information from complex documents and exploring LLM-based approaches for compliance analysis, reasoning, and automated document understanding.",
      technologies: ["Python", "LLMs", "RAG", "Document AI", "NLP", "Machine Learning"],
      type: "work",
    },
    {
      logo: guepardLogo,
      title: "AI Intern",
      organization: "Guepard",
      location: "Tunisia",
      period: "Feb 2026 – Present",
      description:
        "Working on the optimization of the semantic layer for Qwery, an AI-powered NL-to-SQL data analytics platform. Designing semantic disambiguation mechanisms to map user intents to business concepts and database schemas.",
      technologies: ["NLP", "NL-to-SQL", "Semantic Layer", "AI Analytics"],
      type: "work",
    },
    {
      logo: welyneLogo,
      title: "AI Intern",
      organization: "Welyne",
      location: "Ariana, Tunisia",
      period: "July 2025 – September 2025",
      description:"Improved a deep learning model that predicts arm length from biometric features such as gender, height, and weight by optimizing the model architecture, data preprocessing, and hyperparameters to enhance accuracy and generalization.",      
      technologies: ["Deep Learning"],
      type: "work",
    },
    {
      logo: yonnovLogo,
      title: "AI Intern",
      organization: "Yonnov'IA",
      location: "Marseilles, France (Remote)",
      period: "June 2025 – August 2025",
      description:
        "Designed a modular AI-based recommender system for Odoo eCommerce, improving recommendation relevance by +30% through hybrid collaborative and content-based filtering. Reduced cold-start impact by generating synthetic datasets for 1,000+ products.",
      technologies: ["Odoo", "Recommender Systems", "Collaborative Filtering", "Content-based Filtering"],
      type: "work",
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <SectionGlowBackground />
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {isFrench ? "Mon " : "My "}
            <span className="text-gradient">{isFrench ? "expérience" : "Experience"}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {isFrench ? "Un parcours d'apprentissage et de progression" : "A journey of learning and growth"}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Timeline */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20" />

          <div className="space-y-10 md:space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -top-2 md:-top-4 w-4 h-4 md:w-6 md:h-6 bg-primary/80 rounded-full border-2 md:border-4 border-background z-10 shadow-md" />

                  {/* Experience Card */}
                  <div
                    className={`mt-4 md:mt-10 w-full pl-10 md:pl-0 md:w-[48%] ${
                      isLeft
                        ? "md:mr-auto md:pl-0 md:pr-10"
                        : "md:ml-auto md:pl-10 md:pr-0"
                    }`}
                  >
                    <Card className="card-gradient border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500 p-2">
                      <CardContent className="p-5 sm:p-6 md:p-8 space-y-4">
                        {/* Header Row */}
                        <div className="flex items-start gap-4 md:gap-6">
                          {/* Logo */}
                          <div className="w-14 h-14 md:w-20 md:h-20 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-primary/30 shadow-md flex-shrink-0">
                            {exp.logo ? (
                              <img
                                src={exp.logo}
                                alt={`${exp.organization} logo`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-contain p-2 md:p-3"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                  e.currentTarget.parentElement!.innerHTML =
                                    '<span class="text-2xl font-bold text-muted-foreground">' +
                                    exp.organization.substring(0, 2).toUpperCase() +
                                    "</span>";
                                }}
                              />
                            ) : (
                              <span className="text-2xl font-bold text-muted-foreground">
                                {exp.organization.substring(0, 2).toUpperCase()}
                              </span>
                            )}
                          </div>

                          {/* Title and Date */}
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                              <h3 className="text-xl md:text-2xl font-semibold">
                                {exp.title}
                              </h3>
                              <span className="text-xs sm:text-sm text-accent font-medium bg-accent/10 px-3 sm:px-4 py-1 rounded-full border border-accent/20 shadow-sm w-fit">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-muted-foreground font-medium">
                              {exp.organization}
                            </p>
                          </div>
                        </div>

                        {/* Full Width Description */}
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* Technology Badges */}
                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs font-medium px-3 py-1 rounded-full bg-code-accent/10 text-code-accent border border-code-accent/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
