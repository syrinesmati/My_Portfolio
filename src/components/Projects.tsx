import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import farmlinkImage from "@/assets/projects/farmlink/screenshot-1.png";
import recommenderImage from "@/assets/projects/odoo-recommender/screenshot-1.png";
import rescuelinkImage from "@/assets/projects/rescuelink/screenshot-1.png";
import logoDinepilotImage from "@/assets/projects/dinepilot/cover-logo.png";
import packageDeliveryImage from "@/assets/projects/package-delivery/screenshot-1.png";
import realestate1Image from "@/assets/projects/real-estate-prediction/screenshot-1.png";
import realestate2Image from "@/assets/projects/real-estate-prediction/screenshot-2.png";
import taskflow1Image from "@/assets/projects/taskflow-pro/screenshot-1.png";
import githubTrendsImage from "@/assets/projects/github-trends-analyzer/screenshot-1.png";
import SectionGlowBackground from "@/components/SectionGlowBackground";
import { useLanguage } from "@/contexts/LanguageContext";

type Category = "all" | "ai" | "fullstack" | "data-engineering";

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
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const { isFrench } = useLanguage();
  
  const projects = [
    {
      id: "dinepilot",
      title: "DinePilot",
      description: "An AI-powered restaurant analytics platform providing real-time visibility into table occupancy, customer wait times, and floor activity using YOLOv11x for object detection and YOLOv8x-pose for pose estimation.",
      image: logoDinepilotImage,
      tags: ["React", "YOLOv11x", "YOLOv8x-pose", "Computer Vision", "Real-time Analytics"],
      award: "🥈 2nd Place - Smart Service Challenge (AI Camera)",
      featured: true,
      category: ["ai"] as Category[],
    },
    {
      id: "github-trends-analyzer",
      title: "GitHub Trends Analyzer – Big Data Project",
      description:
        "Designed and implemented an end-to-end big data pipeline to analyze and visualize GitHub activity trends. The system combines batch and real-time processing using Apache Airflow for workflow orchestration, Apache Spark (PySpark and Spark Streaming) for scalable processing, and Apache Kafka for real-time ingestion. Historical and streaming data are stored through HDFS and Apache HBase for efficient querying. The pipeline collects data from GitHub APIs, analyzes repository activity, and applies machine learning models to generate predictions on emerging technologies and trending programming languages. Insights are delivered through an interactive Streamlit dashboard for historical trends, live activity, and AI-driven analytics.",
      image: githubTrendsImage,
      tags: ["Apache Airflow", "Apache Spark", "PySpark", "Spark Streaming", "Apache Kafka", "HDFS", "Apache HBase", "Machine Learning", "Streamlit", "Big Data"],
      category: ["ai", "fullstack", "data-engineering"] as Category[],
      githubUrl: "https://github.com/syrinesmati/github-trends-analyzer",
    },
    {
      id: "real-estate-prediction",
      title: "Tunisian Real Estate Price Prediction",
      description: "A machine learning-based platform for predicting real estate prices in Tunisia. Uses advanced ML algorithms trained on 12,000+ properties data to predict rental and sale prices with high accuracy (0.878 accuracy for rental models).",
      image: realestate1Image,
      tags: ["FastAPI", "Machine Learning", "MLflow", "Docker", "Predictive Analytics", "Data Engineering"],
      category: ["ai"] as Category[],
      githubUrl: "https://github.com/syrinesmati/Tunisan-Real-Estate-Price-Prediction-Platform",
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
      image: packageDeliveryImage,
      tags: ["Java", "React", "Vite", "AI Search", "OOP Design Patterns", "Performance Analysis"],
      category: ["ai"] as Category[],
      githubUrl: "https://github.com/syrinesmati/ai-package-delivery",
    },
    {
      id: "taskflow-pro",
      title: "TaskFlow-Pro",
      description: "A task and project management platform that helps teams collaborate effectively through a unified workspace, centralizing projects, tasks, and team communication.",
      image: taskflow1Image,
      tags: ["Angular 21", "Tailwind CSS", "NestJS", "PostgreSQL", "Supabase", "WebSocket"],
      category: ["fullstack"] as Category[],
      githubUrl: "https://github.com/syrinesmati/AngularProject",
    },
    {
      id: "rescuelink",
      title: "RescueLink",
      description: "An emergency response application that connects people in need with nearby helpers and emergency services in real-time.",
      image: rescuelinkImage,
      tags: ["React", "NestJS", "MySQL", "WebSockets", "GraphQL"],
      category: ["fullstack"] as Category[],
    },
  ];

  const projectDescriptionsFr: Record<string, string> = {
    dinepilot:
      "Plateforme d'analyse pour restaurant propulsee par l'IA, avec vision en temps reel de l'occupation des tables et du flux client.",
    "github-trends-analyzer":
      "Pipeline big data de bout en bout pour analyser et visualiser les tendances GitHub en batch et en temps reel.",
    "real-estate-prediction":
      "Plateforme de prediction des prix immobiliers en Tunisie basee sur le machine learning, entrainee sur plus de 12 000 biens.",
    "odoo-recommender":
      "Moteur de recommandation qui propose les produits les plus pertinents selon les preferences et interactions des utilisateurs.",
    farmlink:
      "Plateforme agricole avec chatbot IA base sur RAG et vision par ordinateur pour la detection d'anomalies des plantes.",
    "package-delivery":
      "Systeme de recherche IA pour optimiser la livraison de colis en milieu urbain avec visualisation en temps reel.",
    "taskflow-pro":
      "Plateforme de gestion de projets et de taches pour centraliser la collaboration des equipes.",
    rescuelink:
      "Application de reponse d'urgence connectant les personnes en detresse aux secours proches en temps reel.",
  };

  const filters: { label: string; value: Category }[] = [
    { label: isFrench ? "Tous" : "All", value: "all" },
    { label: isFrench ? "IA / Data Science" : "AI / Data Science", value: "ai" },
    { label: isFrench ? "Ingenierie des donnees" : "Data Engineering", value: "data-engineering" },
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            {isFrench ? "Mes " : "Featured "}
            <span className="text-gradient">{isFrench ? "Projets" : "Projects"}</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground mb-8">
            {isFrench ? "Quelques realisations recentes et projets personnels" : "Some of my recent work and side projects"}
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
                className={`card-gradient border-primary/20 card-interactive overflow-hidden group cursor-pointer h-full flex flex-col ${project.featured ? 'ring-2 ring-turquoise/50 border-turquoise/30' : ''}`}
                onClick={() => navigate(`/project/${project.id}`)}
              >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                {project.award && (
                  <div className="absolute top-3 left-3 z-10 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-turquoise/90 to-code-accent/90 text-foreground dark:text-background text-xs sm:text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm">
                    {isFrench ? "🥈 2e place - Smart Service Challenge (AI Camera)" : project.award}
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
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
                  text={isFrench ? projectDescriptionsFr[project.id] ?? project.description : project.description}
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
