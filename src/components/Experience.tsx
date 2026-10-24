import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import techtrollLogo from "@/assets/experience/techtroll-logo.png";
import welyneLogo from "@/assets/experience/welyne-logo.png";
import yonnovLogo from "@/assets/experience/yonnov-logo-cropped.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { isFrench } = useLanguage();

  const experiences = isFrench
    ? [
        {
          logo: techtrollLogo,
          title: "Ingénieure en Intelligence Artificielle (Stage puis Temps Partiel)",
          organization: "TechTroll",
          project: "OSSUS.ai : plateforme GRC desservant 5 clients fintech en Arabie Saoudite",
          location: "Égypte",
          period: "Juin 2026 - Présent",
          highlights: [
            "Mise en place d'un workflow agentique LangGraph pour l'analyse automatisée de conformité : il évalue les documents clients par rapport aux exigences de conformité, achemine les résultats vers une validation humaine et applique les corrections approuvées, réduisant le temps de revue des analystes de plusieurs jours à quelques heures.",
            "Développement de pipelines d'ingestion de documents pour PDF scannés et numériques, fichiers Office et images, combinant classification de documents, OCR Tesseract, analyse de mise en page avec Docling et modèles vision-langage.",
            "Développement d'un moteur de conformité basé sur le RAG utilisant Qdrant pour la recherche sémantique dans les politiques clients et les référentiels de cybersécurité.",
            "Comparaison de 8 LLM sur 36 cas de test par rapport à des évaluations d'experts afin de choisir le modèle de production, atteignant 83 % d'accord avec les experts pour le modèle sélectionné.",
          ],
          technologies: ["Python", "LangGraph", "Qdrant", "vLLM", "Docker", "Docling", "Tesseract OCR", "Modèles vision-langage"],
          type: "work",
        },
        {
          logo: yonnovLogo,
          title: "Stagiaire IA",
          organization: "Yonnov'IA",
          location: "France",
          period: "Juin 2025 - Mars 2026",
          highlights: [
            "Développement d'un système de recommandation hybride combinant filtrage collaboratif, profilage client et similarité de produits avec Python, pandas et scikit-learn.",
            "Intégration des modèles de recommandation dans l'ERP Odoo 17, en adaptant la logique backend et les fonctionnalités utilisateur aux besoins de chaque client.",
          ],
          technologies: ["Python", "pandas", "scikit-learn", "Odoo 17", "PostgreSQL"],
          type: "work",
        },
        {
          logo: welyneLogo,
          title: "Ingénieure Machine Learning (Temps Partiel)",
          organization: "Welyne",
          project: "WeeFizz : recommandations de taille de vêtements à partir des informations des acheteurs en ligne",
          location: "Tunisie",
          period: "Août - Octobre 2025",
          highlights: [
            "Mise en place d'un pipeline de vision par ordinateur ResNet-34 à partir de photos de face et de profil, incluant le prétraitement d'image et l'extraction de silhouette.",
            "Développement d'un modèle MLP pour prédire 13 mesures corporelles à partir de caractéristiques biométriques, sur un jeu de données de 6 068 individus.",
          ],
          technologies: ["ResNet-34", "Vision par ordinateur", "MLP", "Deep Learning"],
          type: "work",
        },
      ]
    : [
        {
          logo: techtrollLogo,
          title: "Artificial Intelligence Engineer (Internship, then Part-Time)",
          organization: "TechTroll",
          project: "OSSUS.ai: GRC platform serving 5 fintech clients in Saudi Arabia",
          location: "Egypt",
          period: "June 2026 – Present",
          highlights: [
            "Implemented an agentic LangGraph workflow for automated compliance analysis: it assesses client documents against compliance requirements, routes findings to human validation, and applies approved document corrections, reducing analyst review time from days to hours.",
            "Built document ingestion pipelines for scanned and digital PDFs, Office files, and images, combining document classification, Tesseract OCR, layout-aware parsing with Docling, and vision-language models.",
            "Developed a RAG-based compliance engine using Qdrant for semantic retrieval over client policies and cybersecurity frameworks.",
            "Benchmarked 8 LLMs across 36 test cases against expert assessments to choose the production model, achieving 83% agreement with experts for the selected model.",
          ],
          technologies: ["Python", "LangGraph", "Qdrant", "vLLM", "Docker", "Docling", "Tesseract OCR", "Vision-Language Models"],
          type: "work",
        },
        {
          logo: yonnovLogo,
          title: "AI Intern",
          organization: "Yonnov'IA",
          location: "France",
          period: "June 2025 – March 2026",
          highlights: [
            "Developed a hybrid recommendation system combining collaborative filtering, customer profiling, and product similarity using Python, pandas, and scikit-learn.",
            "Integrated recommendation models into the Odoo 17 ERP, adapting backend logic and user-facing features to each client's requirements.",
          ],
          technologies: ["Python", "pandas", "scikit-learn", "Odoo 17", "PostgreSQL"],
          type: "work",
        },
        {
          logo: welyneLogo,
          title: "Machine Learning Engineer (Part-Time)",
          organization: "Welyne",
          project: "WeeFizz: clothing size recommendations from online shopper information",
          location: "Tunisia",
          period: "August – October 2025",
          highlights: [
            "Built a ResNet-34 computer vision pipeline using front and side photographs, including image preprocessing and silhouette extraction.",
            "Developed an MLP model to predict 13 body measurements from biometric features using a dataset of 6,068 individuals.",
          ],
          technologies: ["ResNet-34", "Computer Vision", "MLP", "Deep Learning"],
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
                              <span className="text-xs sm:text-sm text-foreground/80 font-medium bg-background/70 px-3 sm:px-4 py-1 rounded-full w-fit shrink-0">
                                {exp.period}
                              </span>
                            </div>
                            <p className={`font-semibold ${isLeft ? "text-warm" : "text-primary"}`}>
                              {exp.organization} · {exp.location}
                            </p>
                          </div>
                        </div>

                        {/* Project subtitle */}
                        {"project" in exp && exp.project && (
                          <p className="text-sm font-medium text-muted-foreground italic">{exp.project}</p>
                        )}

                        {/* Highlights */}
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <li key={hIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                              <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${isLeft ? "bg-warm" : "bg-primary"}`} />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

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
