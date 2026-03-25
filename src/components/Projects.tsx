import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import decoraImage from "@/assets/decora.png";
import farmlinkImage from "@/assets/farmlink.png";
import recommenderImage from "@/assets/recommender.png";
import autohavenImage from "@/assets/autohaven.png";
import rescuelinkImage from "@/assets/rescuelink.png";

type Category = "all" | "ai" | "fullstack";

const ExpandableDescription = ({ text }: { text: string }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mb-4">
      <p className={`text-muted-foreground ${expanded ? '' : 'line-clamp-3'}`}>{text}</p>
      {text.length > 120 && (
        <button
          onClick={(e) => { e.stopPropagation(); setExpanded(!expanded); }}
          className="text-primary text-sm mt-1 hover:underline"
        >
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
};

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  
  const projects = [
    {
      id: "dinepilot",
      title: "DinePilot",
      description: "An AI-powered restaurant analytics platform providing real-time visibility into table occupancy, customer wait times, and floor activity using YOLOv11x for object detection and YOLOv8x-pose for pose estimation.",
      image: "/src/assets/logo-dinepilot.png",
      tags: ["React", "YOLOv11x", "YOLOv8x-pose", "Computer Vision", "Real-time Analytics"],
      award: "🥈 2nd Place - Smart Service Challenge (AI Camera)",
      featured: true,
      category: ["ai"] as Category[],
    },
    {
      id: "farmlink",
      title: "FarmLink",
      description: "An Agricultural platform with a RAG-based AI chatbot using Gemini LLM and a computer vision model for plant anomaly detection, built with NestJS, Docker and React.",
      image: farmlinkImage,
      tags: ["NestJS", "PostgreSQL", "React", "TailWind CSS", "Docker", "TensorFlow", "PyTorch", "CNN", "ResNet"],
      category: ["ai", "fullstack"] as Category[],
      githubUrl: "https://github.com/orgs/FarmLink-ppp/repositories",
    },
    {
      id: "package-delivery",
      title: "Package Delivery System",
      description: "An AI-driven search system for optimizing package delivery in urban environments. Implements eight search strategies with a Java backend and React/Vite frontend for real-time visualization.",
      image: "/src/assets/package-delivery.png",
      tags: ["Java", "React", "Vite", "AI Search", "OOP Design Patterns", "Performance Analysis"],
      category: ["ai"] as Category[],
      githubUrl: "https://github.com/syrinesmati/ai-package-delivery",
    },
    {
      id: "odoo-recommender",
      title: "Odoo Recommender System",
      description: "A recommendation engine that suggests the most relevant products to users based on their preferences and past interactions using machine learning and data analysis.",
      image: recommenderImage,
      tags: ["Odoo", "PostgreSQL", "Machine Learning", "Data Analysis"],
      category: ["ai"] as Category[],
    },
    {
      id: "rescuelink",
      title: "RescueLink",
      description: "An emergency response application that connects people in need with nearby helpers and emergency services in real-time.",
      image: rescuelinkImage,
      tags: ["React", "NestJS", "MySQL", "WebSockets", "GraphQL"],
      category: ["fullstack"] as Category[],
    },
    {
      id: "real-estate-prediction",
      title: "Tunisian Real Estate Price Prediction",
      description: "A machine learning-based platform for predicting real estate prices in Tunisia. Uses advanced ML algorithms trained on 12,000+ properties data to predict rental and sale prices with high accuracy (0.878 accuracy for rental models).",
      image: "/src/assets/realestate1.png",
      tags: ["FastAPI", "Machine Learning", "MLflow", "Docker", "Predictive Analytics", "Data Engineering"],
      category: ["ai"] as Category[],
      githubUrl: "https://github.com/syrinesmati/Tunisan-Real-Estate-Price-Prediction-Platform",
    },
    {
      id: "taskflow-pro",
      title: "TaskFlow-Pro",
      description: "A task and project management platform that helps teams collaborate effectively through a unified workspace, centralizing projects, tasks, and team communication.",
      image: "/src/assets/taskflow1.png",
      tags: ["Angular 21", "Tailwind CSS", "NestJS", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "JWT", "WebSocket"],
      category: ["fullstack"] as Category[],
      githubUrl: "https://github.com/syrinesmati/AngularProject",
    },
  ];

  const filters: { label: string; value: Category }[] = [
    { label: "All", value: "all" },
    { label: "AI / Data Science", value: "ai" },
    { label: "Full Stack", value: "fullstack" },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Some of my recent work and side projects
          </p>
          <div className="flex justify-center gap-3">
            {filters.map((f) => (
              <Button
                key={f.value}
                variant={activeFilter === f.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(f.value)}
                className="rounded-full"
              >
                {f.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                className={`card-gradient border-primary/20 card-interactive overflow-hidden group cursor-pointer h-full flex flex-col ${project.featured ? 'ring-2 ring-turquoise/50 border-turquoise/30' : ''}`}
                onClick={() => navigate(`/project/${project.id}`)}
              >
              <div className="relative h-48 overflow-hidden">
                {project.award && (
                  <div className="absolute top-3 left-3 z-10 px-3 py-1.5 bg-gradient-to-r from-turquoise/90 to-code-accent/90 text-background text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm">
                    {project.award}
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1">
                <ExpandableDescription text={project.description} />
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
                        Code
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
