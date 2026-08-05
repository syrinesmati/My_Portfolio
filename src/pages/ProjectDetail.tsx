import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { getProjectById } from "@/data/projects";

const ScreenshotsCarousel = ({ screenshots, title }: { screenshots: string[]; title: string }) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    return () => { api.off("select"); };
  }, [api]);

  return (
    <div className="space-y-3">
      <Carousel className="w-full max-w-5xl mx-auto" setApi={setApi}>
        <CarouselContent>
          {screenshots.map((screenshot, index) => (
            <CarouselItem key={index}>
              <div className="rounded-xl overflow-hidden border border-primary/20 bg-card shadow-xl">
                <div className="h-[260px] sm:h-[400px] md:h-[520px] flex items-center justify-center bg-muted/20 p-4">
                  <img
                    src={screenshot}
                    alt={`${title} screenshot ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain rounded-md"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 bg-background/90 backdrop-blur-sm border-primary/30 shadow-lg hover:bg-background" />
        <CarouselNext className="right-3 bg-background/90 backdrop-blur-sm border-primary/30 shadow-lg hover:bg-background" />
      </Carousel>

      {screenshots.length > 1 && (
        <>
          <div className="flex gap-2 justify-center flex-wrap max-w-5xl mx-auto px-2">
            {screenshots.map((thumb, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-14 h-10 sm:w-16 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                  current === index
                    ? "border-primary scale-105 shadow-md"
                    : "border-primary/20 opacity-50 hover:opacity-90 hover:border-primary/50"
                }`}
              >
                <img
                  src={thumb}
                  alt={`${title} thumbnail ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground">
            {current + 1} / {screenshots.length}
          </p>
        </>
      )}
    </div>
  );
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { isFrench } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{isFrench ? "Projet introuvable" : "Project Not Found"}</h1>
          <Button onClick={() => navigate("/")}>{isFrench ? "Retour à l'accueil" : "Go Back Home"}</Button>
        </div>
      </div>
    );
  }

  const fr = project.fr;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {isFrench ? "Retour aux projets" : "Back to Projects"}
          </Button>

          <div className="space-y-12">
            {/* Hero Section */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold">
                {project.title}
              </h1>

              {/* Award Badge */}
              {project.award && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 rounded-xl bg-primary/10 border-2 border-primary/30"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{project.award.emoji}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">
                        {isFrench ? fr.award?.title ?? project.award.title : project.award.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {isFrench ? fr.award?.competition ?? project.award.competition : project.award.competition}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {isFrench ? fr.award?.description ?? project.award.description : project.award.description}
                  </p>
                </motion.div>
              )}

              <p className="text-xl text-muted-foreground max-w-3xl">
                {isFrench ? fr.description : project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.githubUrl || (project.links && project.links.length > 0)) && (
                <div className="flex flex-wrap gap-3">
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {isFrench ? "Code source" : "Source Code"}
                      </a>
                    </Button>
                  )}
                  {project.links?.map((link, index) => (
                    <Button key={index} variant="outline" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {link.name}
                      </a>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Screenshots Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ScreenshotsCarousel screenshots={project.screenshots} title={project.title} />
            </motion.div>

            {/* Full Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">{isFrench ? "À propos du projet" : "About the Project"}</h2>
              {(() => {
                const sections = isFrench ? fr.fullDescriptionSections : project.fullDescriptionSections;
                if (sections && sections.length > 0) {
                  return (
                    <div className="space-y-6">
                      {sections.map((section, index) => (
                        <div key={index} className="space-y-2">
                          <h3 className="text-xl font-semibold text-primary">{section.heading}</h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">{section.body}</p>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {isFrench ? fr.fullDescription : project.fullDescription}
                  </p>
                );
              })()}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">{isFrench ? "Fonctionnalités clés" : "Key Features"}</h2>
              {(() => {
                const groups = isFrench ? fr.featureGroups : project.featureGroups;
                if (groups && groups.length > 0) {
                  return (
                    <div className="space-y-6">
                      {groups.map((group, groupIndex) => (
                        <div key={groupIndex} className="space-y-3">
                          <h3 className="text-lg font-semibold text-primary">{group.heading}</h3>
                          <ul className="grid md:grid-cols-2 gap-4">
                            {group.items.map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/20"
                              >
                                <span className="text-primary text-xl">•</span>
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <ul className="grid md:grid-cols-2 gap-4">
                    {(isFrench ? fr.features : project.features).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/20"
                      >
                        <span className="text-primary text-xl">•</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                );
              })()}
            </motion.div>

            {/* Video Demo */}
            {project.videoPath && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">{isFrench ? "Démo vidéo" : "Video Demo"}</h2>
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                <video
                  controls
                  className="w-full h-auto"
                  poster={project.image}
                >
                  <source src={project.videoPath} type="video/mp4" />
                  {isFrench ? "Votre navigateur ne supporte pas la lecture vidéo." : "Your browser does not support the video tag."}
                </video>
              </div>
            </motion.div>
            )}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
