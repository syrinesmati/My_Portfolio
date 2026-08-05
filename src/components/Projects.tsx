import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionGlowBackground from "@/components/SectionGlowBackground";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects, ProjectCategory } from "@/data/projects";

const ExpandableDescription = ({ text, isFrench }: { text: string; isFrench: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-4">
      <p className={`text-muted-foreground ${expanded ? '' : 'line-clamp-3'}`}>{text}</p>
      {text.length > 120 && (
        <button
          onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
          className="text-primary text-sm mt-1 hover:underline"
        >
          {expanded ? (isFrench ? "Voir moins" : "See less") : isFrench ? "Voir plus" : "See more"}
        </button>
      )}
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");
  const { isFrench } = useLanguage();

  const filters: { label: string; value: ProjectCategory }[] = [
    { label: isFrench ? "Tous" : "All", value: "all" },
    { label: isFrench ? "IA / Data Science" : "AI / Data Science", value: "ai" },
    { label: isFrench ? "Ingénierie des données" : "Data Engineering", value: "data-engineering" },
    { label: "Full Stack", value: "fullstack" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-16 md:py-20 relative overflow-hidden">
      <SectionGlowBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {isFrench ? "Mes " : "Featured "}
            <span className="text-gradient">{isFrench ? "Projets" : "Projects"}</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-8">
            {isFrench ? "Quelques réalisations récentes et projets personnels" : "Some of my recent work and side projects"}
          </p>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 px-1">
            {filters.map((f) => (
              <Button
                key={f.value}
                variant={activeFilter === f.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(f.value)}
                className="rounded-full text-xs sm:text-sm"
              >
                {f.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <Card
                className={`card-gradient border-primary/20 card-interactive overflow-hidden group cursor-pointer h-full flex flex-col ${project.featured ? 'ring-2 ring-primary/50 border-primary/30' : ''}`}
                onClick={() => navigate(`/project/${project.id}`)}
              >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                {project.award && (
                  <div className="absolute top-3 left-3 z-10 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary/90 text-primary-foreground text-xs sm:text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm">
                    {project.award.emoji} {isFrench ? project.fr.award?.title ?? project.award.title : project.award.title}
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  onError={(event) => {
                    const target = event.currentTarget;
                    target.src = "/placeholder.svg";
                    target.className = "w-full h-full object-cover opacity-50";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ExpandableDescription
                  text={isFrench ? project.fr.description : project.description}
                  isFrench={isFrench}
                />
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto pt-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {isFrench ? "Code source" : "Code"}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
