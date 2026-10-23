import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import techtrollLogo from "@/assets/experience/techtroll-logo.png";
import welyneLogo from "@/assets/experience/welyne-logo.png";
import yonnovLogo from "@/assets/experience/yonnov-logo.png";
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
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">{isFrench ? "Parcours professionnel" : "Where I've worked"}</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {isFrench ? "Apprendre en " : "Learning by "}
            <span className="font-accent-italic text-warm">{isFrench ? "pratiquant." : "doing."}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {isFrench ? "Un parcours d'apprentissage et de progression" : "A journey of learning and growth"}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Timeline */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

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
                  <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 -top-2 md:-top-4 w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 md:border-[3px] border-background z-10 ${isLeft ? "bg-warm" : "bg-primary"}`} />

                  {/* Experience Card */}
                  <div
                    className={`mt-4 md:mt-10 w-full pl-10 md:pl-0 md:w-[48%] ${
                      isLeft
                        ? "md:mr-auto md:pl-0 md:pr-10"
                        : "md:ml-auto md:pl-10 md:pr-0"
                    }`}
                  >
                    <Card className={`card-soft card-interactive ${isLeft ? "tint-warm" : "tint-cool"}`}>
                      <CardContent className="p-5 sm:p-6 md:p-8 space-y-4">
                        {/* Header Row */}
                        <div className="flex items-start gap-4 md:gap-6">
                          {/* Logo */}
                          <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl bg-background/70 flex items-center justify-center overflow-hidden flex-shrink-0">
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
                              <span className="text-xs sm:text-sm text-foreground/80 font-medium bg-background/70 px-3 sm:px-4 py-1 rounded-full w-fit">
                                {exp.period}
                              </span>
                            </div>
                            <p className={`font-semibold ${isLeft ? "text-warm" : "text-primary"}`}>
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
                                className="text-xs font-medium px-3 py-1 rounded-full bg-background/70 text-foreground/80"
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
