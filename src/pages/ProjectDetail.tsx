import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import farmlinkImage from "@/assets/projects/farmlink/screenshot-1.png";
import farmlinkImage1 from "@/assets/projects/farmlink/screenshot-2.png";
import recommenderImage1 from "@/assets/projects/odoo-recommender/screenshot-2.png";
import recommenderImage2 from "@/assets/projects/odoo-recommender/screenshot-3.png";
import recommenderImage3 from "@/assets/projects/odoo-recommender/screenshot-4.png";
import recommenderImage from "@/assets/projects/odoo-recommender/screenshot-1.png";
import rescuelinkImage from "@/assets/projects/rescuelink/screenshot-1.png";
import logoDinepilotImage from "@/assets/projects/dinepilot/cover-logo.png";
import dinepilotImage from "@/assets/projects/dinepilot/screenshot-1.png";
import dinepilotImage1 from "@/assets/projects/dinepilot/screenshot-2.png";
import packageDeliveryImage from "@/assets/projects/package-delivery/screenshot-1.png";
import packageDeliveryImage2 from "@/assets/projects/package-delivery/screenshot-2.png";
import realestate1Image from "@/assets/projects/real-estate-prediction/screenshot-1.png";
import realestate2Image from "@/assets/projects/real-estate-prediction/screenshot-2.png";
import realestate4Image from "@/assets/projects/real-estate-prediction/screenshot-3.png";
import taskflow1Image from "@/assets/projects/taskflow-pro/screenshot-1.png";
import githubTrendsImage from "@/assets/projects/github-trends-analyzer/screenshot-1.png";
import tounsilmImage from "@/assets/projects/tounsilm/340edfc1-63eb-4e1a-9555-bbb176f61f6f.jpg";
import tounsilmImage2 from "@/assets/projects/tounsilm/13191760-252c-404a-8e72-f89d8299aac5.jpg";
import tounsilmImage3 from "@/assets/projects/tounsilm/154ec42c-a2dd-41ef-81bf-0361071991a2.jpg";
import tounsilmImage4 from "@/assets/projects/tounsilm/6720d402-ea42-4db0-bec2-c57e92294248.jpg";
import tounsilmImage5 from "@/assets/projects/tounsilm/d3649509-a893-431c-897f-00698572867b.jpg";
import tounsilmImage6 from "@/assets/projects/tounsilm/image.png";
import tounsilmHuggingface from "@/assets/projects/tounsilm/Screenshot_7-6-2026_15614_huggingface.co.jpeg";
import tounsilmVideo from "@/assets/projects/tounsilm/demo.mp4";
import farmlinkVideo from "@/assets/projects/farmlink/demo.mp4";
import dinepilotVideo from "@/assets/projects/dinepilot/demo.mp4";
import packageDeliveryVideo from "@/assets/projects/package-delivery/demo.mp4";
import odooVideo from "@/assets/projects/odoo-recommender/demo.mp4";
import rescuelinkVideo from "@/assets/projects/rescuelink/demo.mp4";
import realestateVideo from "@/assets/projects/real-estate-prediction/demo.mp4";
import taskflowVideo from "@/assets/projects/taskflow-pro/demo.mp4";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

const ScreenshotsCarousel = ({ screenshots, title }: { screenshots: string[]; title: string }) => {
  const [api, setApi] = useState<any>(null);
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
                <img src={thumb} alt="" className="w-full h-full object-cover" />
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

  const projects = {
    farmlink: {
      title: "FarmLink",
      description: "An intelligent agricultural platform featuring AI-powered chatbot and computer vision for plant disease detection, empowering farmers with smart collaboration and personalized insights.",
      fullDescription: "Farmlink is an intelligent agricultural platform developed as part of our Personal Professional Project (PPP), for which we received excellent marks. The platform empowers farmers through AI and smart collaboration, featuring an RAG-based AI chatbot using Gemini LLM to provide accurate, contextual answers in real time. It also includes a computer vision model (CNN + ResNet) trained on the PlantVillage dataset, achieving over 96% accuracy in detecting plant diseases from a simple photo. Additionally, Farmlink offers a personalized dashboard with weather insights, daily tips, and resource tracking to help optimize farm operations. Built with React (Vite, TypeScript, TailwindCSS) on the frontend, NestJS + Prisma + PostgreSQL on the backend, and PyTorch, TensorFlow, OpenCV, and Flask API for AI model deployment, it leverages Dockerized microservices for a modular, scalable, and secure infrastructure. The project was developed using an Agile/Scrum methodology, with iterative releases and effective collaboration across three major project phases.",
      image: farmlinkImage,
      tags: ["NestJS", "PostgreSQL", "React", "TailWind CSS", "Docker", "RAG", "PyTorch", "FlaskAPI"],
      screenshots: [farmlinkImage, farmlinkImage1],
      videoPath: farmlinkVideo,
      features: [
        "Direct farmer-to-market connections",
        "AI crop disease detection",
        "Weather forecasting integration",
        "Knowledge sharing community",
        "Resource marketplace"
      ]
    },
    dinepilot: {
      title: "DinePilot",
      description: "An AI-powered restaurant analytics platform providing real-time visibility into table occupancy, customer wait times, and floor activity.",
      fullDescription: "DinePilot is a smart restaurant floor monitoring system that leverages advanced computer vision to transform how restaurants manage their operations. Using YOLOv11x for object detection and YOLOv8x-pose for pose and occupancy estimation, the system provides real-time insights into table status, customer flow, and floor activity. The custom React dashboard features color-coded status indicators and intelligent detection of personal belongings to automatically mark tables as reserved. Integrated automated monthly reports with predictive analytics enable proactive planning and resource optimization.",
      image: logoDinepilotImage,
      tags: ["React", "YOLOv11x", "YOLOv8x-pose", "Computer Vision", "Real-time Analytics"],
      screenshots: [logoDinepilotImage, dinepilotImage, dinepilotImage1],
      videoPath: dinepilotVideo,
      award: {
        emoji: "🥈",
        title: "2nd Place - Smart Service Challenge",
        competition: "AI Camera Challenge",
        description: "Awarded 2nd place in the Smart Service Challenge at the AI Camera Challenge competition for developing an innovative AI-powered solution that transforms restaurant floor management through real-time computer vision analytics."
      },
      features: [
        "Real-time table occupancy detection",
        "YOLOv11x object detection",
        "YOLOv8x-pose estimation",
        "Color-coded status indicators",
        "Automated monthly reports with predictive analytics"
      ]
    },
    "package-delivery": {
      title: "Package Delivery System",
      description: "An AI-driven search system for optimizing package delivery in urban environments with multiple search strategies.",
      fullDescription: "This Package Delivery System is a search-based optimization platform that computes optimal delivery routes under traffic constraints and tunnel shortcuts. The system implements and compares eight different search strategies, providing comprehensive performance analysis including execution time, memory usage, CPU utilization, and node expansion metrics. Built with a modular Java backend featuring Strategy & Template Method design patterns, and a React/Vite frontend for real-time visualization of grids, truck movements, traffic levels, and algorithm metrics.",
      image: packageDeliveryImage,
      tags: ["Java", "React", "Vite", "AI Search", "OOP Design Patterns", "Performance Analysis"],
      screenshots: [packageDeliveryImage, packageDeliveryImage2],
      videoPath: packageDeliveryVideo,
      features: [
        "Eight search strategy implementations",
        "Real-time grid and truck visualization",
        "Traffic and tunnel constraint modeling",
        "Performance metrics dashboard",
        "Strategy & Template Method patterns"
      ]
    },
    "odoo-recommender": {
      title: "Odoo Recommender System",
      description: "A recommendation engine that suggests the most relevant products to users based on their preferences and past interactions.",
      fullDescription: "The Odoo Recommender System intelligently analyzes user behavior, purchase history, and product interactions to provide personalized product recommendations. Built directly into the Odoo ecosystem, it seamlessly integrates with existing e-commerce workflows. The system uses collaborative filtering and content-based algorithms to suggest products that users are most likely to purchase, increasing conversion rates and customer satisfaction.",
      image: recommenderImage,
      tags: ["Odoo", "PostgreSQL", "Machine Learning", "Data Analysis"],
      screenshots: [recommenderImage, recommenderImage1, recommenderImage2, recommenderImage3],
      videoPath: odooVideo,
      features: [
        "Collaborative filtering recommendations",
        "Real-time product suggestions",
        "User behavior analytics",
        "Purchase pattern analysis",
        "Seamless Odoo integration"
      ]
    },
    rescuelink: {
      title: "RescueLink",
      description: "An emergency response application that connects people in need with nearby helpers and emergency services in real-time.",
      fullDescription: "RescueLink is a life-saving platform that leverages real-time location data to connect people in emergency situations with the nearest help. Whether it's medical emergencies, accidents, or disasters, the app instantly notifies nearby verified responders and emergency services. Built with modern web technologies for cross-platform compatibility, it includes features like real-time GPS tracking, emergency contact alerts, and direct communication channels with first responders.",
      image: rescuelinkImage,
      tags: ["React", "NestJS", "MySQL", "WebSockets", "GraphQL"],
      screenshots: [rescuelinkImage],
      videoPath: rescuelinkVideo,
      features: [
        "Real-time emergency alerts",
        "GPS-based helper matching",
        "Direct emergency service connection",
        "Emergency contact notifications",
        "Verified responder network"
      ]
    },
    "real-estate-prediction": {
      title: "Tunisian Real Estate Price Prediction",
      description: "A machine learning-based platform for predicting real estate prices in Tunisia with high accuracy.",
      fullDescription: "A comprehensive end-to-end ML platform for predicting real estate prices in Tunisia. The system was trained on 12,000+ properties data and achieves 0.878 accuracy for rental price models. The pipeline includes data ingestion, cleaning, and validation stages, with models trained and evaluated using MLflow for experiment tracking. The prediction service is exposed through a RESTful FastAPI backend, containerized with Docker, and deployed to the cloud. An intuitive full-stack web application allows users to input property details and receive instant price predictions for both rental and sale properties.",
      image: realestate1Image,
      tags: ["FastAPI", "Machine Learning", "MLflow", "Docker", "Predictive Analytics", "Data Engineering"],
      screenshots: [realestate1Image, realestate2Image, realestate4Image],
      videoPath: realestateVideo,
      features: [
        "ML models trained on 12,000+ properties",
        "0.878 accuracy for rental price prediction",
        "End-to-end data pipeline with ingestion, cleaning, and validation",
        "MLflow experiment tracking and model evaluation",
        "RESTful FastAPI service containerized with Docker",
        "Cloud-deployed prediction service"
      ]
    },
    "taskflow-pro": {
      title: "TaskFlow-Pro",
      description: "A task and project management platform for effective team collaboration.",
      fullDescription: "TaskFlow-Pro is a comprehensive task and project management platform that helps teams collaborate effectively. It enables teams to organize, assign, and track work through a unified workspace, centralizing projects, tasks, and team communication in one place. Built with Angular 21 and Tailwind CSS on the frontend, NestJS with PostgreSQL on the backend, and featuring real-time updates via WebSocket and Supabase integration for additional backend services.",
      image: taskflow1Image,
      tags: ["Angular 21", "Tailwind CSS", "NestJS", "PostgreSQL", "Supabase", "WebSocket"],
      screenshots: [taskflow1Image],
      videoPath: taskflowVideo,
      features: [
        "Unified workspace for projects and tasks",
        "Real-time collaboration via WebSocket",
        "Team communication and task assignment",
        "Structured relational data with PostgreSQL",
        "Supabase integration"
      ]
    },
    tounsilm: {
      title: "TounsiLM – Tunisian Arabic Dialogue System",
      description: "An end-to-end spoken dialogue system for Tunisian Arabic (Derja), combining a fine-tuned ASR model, TounsiLM-8B (QLoRA-adapted LLM), and a hybrid RAG pipeline — developed as End-of-Year Project (PFA) at INSAT.",
      fullDescription: "This End-of-Year Project (PFA) at INSAT tackles the challenge of building a fully functional spoken dialogue system for Tunisian Arabic (Derja), one of the world's most linguistically complex dialects, characterized by code-switching between Arabic, French, and English and written in both Arabic script and Latin-script Arabizi. The system is built around three tightly integrated components: (1) A fine-tuned Automatic Speech Recognition model based on OmniASR-LLM-3B, trained with LoRA adaptation to reduce WER from 68.42% to 37.61% — a 53.1% relative improvement on the Tunisian Arabic test set; (2) TounsiLM-8B, a Tunisian-Arabic-adapted LLM built on AYA Expanse 8B via QLoRA Continued Pre-Training (CPT) on a curated Tunisian corpus followed by Supervised Fine-Tuning (SFT) for task alignment; (3) A hybrid RAG module over a 1,647-entry knowledge base, combining BM25 sparse retrieval and dense semantic search with Reciprocal Rank Fusion (RRF), a confidence-gated context injection mechanism, and an Arabizi query rewriter for Latin-script inputs. The MVP is a full-stack application with React 18 + Vite + Tailwind CSS + shadcn/ui on the frontend, backed by two independent FastAPI services communicating via Server-Sent Events (SSE) for real-time streaming responses.",
      image: tounsilmImage,
      tags: ["ASR", "LLM Fine-Tuning", "RAG", "QLoRA", "LoRA", "PyTorch", "FastAPI", "React", "ChromaDB", "BM25", "Tunisian Arabic NLP"],
      screenshots: [tounsilmImage, tounsilmImage2, tounsilmImage3, tounsilmImage4, tounsilmImage5, tounsilmImage6, tounsilmHuggingface],
      videoPath: tounsilmVideo,
      award: {
        emoji: "🎓",
        title: "End-of-Year Project (PFA)",
        competition: "INSAT – Universite de Carthage, 2025-2026",
        description: "Developed as the final-year project (Projet de Fin d'Annee) at the National Institute of Applied Sciences and Technology (INSAT), Universite de Carthage. The project addresses the under-resourced Tunisian Arabic dialect through the full-stack integration of speech recognition, language model adaptation, and retrieval-augmented generation."
      },
      features: [
        "Fine-tuned OmniASR-LLM-3B: WER reduced from 68.42% to 37.61% (53.1% relative improvement)",
        "TounsiLM-8B: AYA Expanse 8B adapted via QLoRA CPT + SFT for Tunisian Arabic",
        "Hybrid RAG: BM25 + semantic retrieval with RRF fusion over 1,647-entry knowledge base",
        "Arabizi query rewriting for Latin-script Tunisian dialect inputs",
        "Confidence-gated context injection for RAG quality control",
        "Real-time SSE streaming for LLM responses",
        "Two-backend FastAPI architecture: dedicated ASR server + LLM server",
        "React 18 + Vite + Tailwind CSS + shadcn/ui full-stack frontend",
        "Handles code-switching across Arabic, French, and English"
      ]
    },
    "github-trends-analyzer": {
      title: "GitHub Trends Analyzer – Big Data Project",
      description: "An end-to-end big data pipeline that analyzes and visualizes GitHub activity using both batch and real-time processing.",
      fullDescription: "GitHub Trends Analyzer is a complete big data project designed to extract actionable insights from large-scale developer activity. The architecture combines batch and streaming workflows to deliver both historical and real-time trend analysis. Apache Airflow orchestrates scheduled jobs, while Apache Spark (PySpark and Spark Streaming) powers distributed data processing at scale. Real-time ingestion is handled through Apache Kafka, and storage is distributed across HDFS and Apache HBase to support efficient querying and analytics. The pipeline collects data from GitHub APIs, processes repository events, and applies machine learning models to identify emerging technologies and trending programming languages. Results are exposed through an interactive Streamlit dashboard, enabling users to explore historical patterns, monitor live activity, and consume AI-driven predictions.",
      image: githubTrendsImage,
      tags: ["Apache Airflow", "Apache Spark", "PySpark", "Spark Streaming", "Apache Kafka", "HDFS", "Apache HBase", "Machine Learning", "Streamlit", "Big Data"],
      screenshots: [githubTrendsImage],
      videoPath: realestateVideo,
      features: [
        "End-to-end batch and real-time data pipeline",
        "Workflow orchestration with Apache Airflow",
        "Distributed processing with PySpark and Spark Streaming",
        "Real-time ingestion with Apache Kafka",
        "Scalable storage using HDFS and Apache HBase",
        "GitHub API data collection and repository activity analysis",
        "Machine learning predictions for emerging technologies",
        "Interactive Streamlit dashboard for trend exploration"
      ]
    }
  };

  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  const projectTranslationsFr: Record<
    string,
    {
      description: string;
      fullDescription: string;
      features: string[];
      awardDescription?: string;
      awardTitle?: string;
      awardCompetition?: string;
    }
  > = {
    tounsilm: {
      description:
        "Systeme de dialogue vocal pour l'arabe tunisien (Derja) : ASR fine-tune, TounsiLM-8B (QLoRA) et RAG hybride BM25+semantique — Projet de Fin d'Annee a l'INSAT.",
      fullDescription:
        "Ce Projet de Fin d'Annee (PFA) a l'INSAT releve le defi de construire un systeme de dialogue vocal complet pour l'arabe tunisien (Derja), l'une des variantes dialectales les plus complexes au monde, caracterisee par le code-switching entre l'arabe, le francais et l'anglais, et par l'ecriture en Arabizi (alphabet latin). Le systeme s'articule autour de trois composants integres : (1) Un modele ASR base sur OmniASR-LLM-3B, fine-tune par adaptation LoRA, reduisant le WER de 68,42 % a 37,61 % (amelioration relative de 53,1 %) ; (2) TounsiLM-8B, un LLM adapte via QLoRA CPT + SFT sur AYA Expanse 8B pour l'arabe tunisien ; (3) Un module RAG hybride sur une base de 1 647 entrees, combinant BM25 et recherche semantique dense avec fusion RRF, injection de contexte a seuil de confiance et reecriture de requetes Arabizi. La MVP est une application full-stack React 18 + Vite + Tailwind CSS cote frontend, avec deux services FastAPI independants communicant via SSE pour le streaming en temps reel.",
      features: [
        "OmniASR-LLM-3B fine-tune : WER reduit de 68,42 % a 37,61 % (amelioration de 53,1 %)",
        "TounsiLM-8B : AYA Expanse 8B adapte via QLoRA CPT + SFT pour l'arabe tunisien",
        "RAG hybride : BM25 + semantique avec fusion RRF sur 1 647 entrees",
        "Reecriture de requetes Arabizi (dialecte en alphabet latin)",
        "Injection de contexte a seuil de confiance pour le controle qualite du RAG",
        "Streaming temps reel via SSE pour les reponses LLM",
        "Architecture deux backends FastAPI : serveur ASR + serveur LLM",
        "Frontend React 18 + Vite + Tailwind CSS + shadcn/ui",
        "Gestion du code-switching arabe/francais/anglais",
      ],
      awardTitle: "Projet de Fin d'Annee (PFA)",
      awardCompetition: "INSAT – Universite de Carthage, 2025-2026",
      awardDescription:
        "Developpe en tant que projet de fin d'annee (PFA) a l'Institut National des Sciences Appliquees et de la Technologie (INSAT), Universite de Carthage. Le projet s'attaque au dialecte arabe tunisien, sous-represente dans les ressources NLP, via l'integration complete de la reconnaissance vocale, l'adaptation d'un LLM et la generation augmentee par recuperation.",
    },
    farmlink: {
      description:
        "Plateforme agricole intelligente combinant IA conversationnelle et vision par ordinateur pour aider les agriculteurs.",
      fullDescription:
        "FarmLink est une plateforme intelligente developpee dans le cadre de notre PPP. Elle integre un chatbot IA base sur RAG pour repondre en temps reel, ainsi qu'un modele de vision par ordinateur pour detecter les maladies des plantes. Le projet propose aussi un tableau de bord personnalise avec meteo, conseils et suivi des ressources.",
      features: [
        "Mise en relation directe agriculteurs-marche",
        "Detection IA des maladies des cultures",
        "Integration de previsions meteo",
        "Espace de partage de connaissances",
        "Marketplace de ressources",
      ],
    },
    dinepilot: {
      description:
        "Plateforme d'analyse de restaurant en temps reel pour suivre l'occupation des tables et l'activite de salle.",
      fullDescription:
        "DinePilot est un systeme intelligent de supervision de salle pour la restauration. Il utilise la vision par ordinateur pour detecter les objets, estimer l'occupation et produire des indicateurs en temps reel. Le dashboard React affiche des statuts visuels clairs et des rapports automatises avec des insights predictifs.",
      features: [
        "Detection en temps reel de l'occupation des tables",
        "Detection d'objets avec YOLOv11x",
        "Estimation de pose avec YOLOv8x-pose",
        "Indicateurs visuels par code couleur",
        "Rapports mensuels automatises et analytiques",
      ],
      awardTitle: "2e place - Smart Service Challenge",
      awardCompetition: "AI Camera Challenge",
      awardDescription:
        "Recompensee pour une solution IA innovante qui optimise la gestion des salles de restaurant via des analyses visuelles en temps reel.",
    },
    "package-delivery": {
      description:
        "Systeme d'optimisation de livraison de colis base sur des strategies de recherche IA en milieu urbain.",
      fullDescription:
        "Cette plateforme calcule des routes optimales de livraison sous contraintes de trafic et de tunnels. Elle compare huit strategies de recherche avec des mesures de performance detaillees (temps, memoire, CPU, noeuds explores). Le backend Java est concu de facon modulaire avec des design patterns, et le frontend React/Vite visualise l'execution en temps reel.",
      features: [
        "Huit strategies de recherche implementees",
        "Visualisation en temps reel de la grille et des camions",
        "Modelisation du trafic et des contraintes",
        "Tableau de bord de performance",
        "Patterns Strategy et Template Method",
      ],
    },
    "odoo-recommender": {
      description:
        "Moteur de recommandation integre a Odoo eCommerce pour proposer des produits personnalises.",
      fullDescription:
        "Le systeme analyse les comportements utilisateurs, l'historique d'achat et les interactions produits pour fournir des recommandations pertinentes. Il combine filtrage collaboratif et approche basee contenu afin d'augmenter la pertinence, la conversion et la satisfaction client.",
      features: [
        "Recommandations par filtrage collaboratif",
        "Suggestions produits en temps reel",
        "Analyse comportementale utilisateur",
        "Analyse des patterns d'achat",
        "Integration native avec Odoo",
      ],
    },
    rescuelink: {
      description:
        "Application d'urgence qui connecte les personnes en detresse aux secours a proximite en temps reel.",
      fullDescription:
        "RescueLink exploite la geolocalisation temps reel pour orienter rapidement les demandes d'aide vers les bons intervenants. La plateforme permet des alertes immediates, le suivi GPS et des canaux de communication directs avec les secours.",
      features: [
        "Alertes d'urgence en temps reel",
        "Mise en relation basee GPS",
        "Connexion directe aux services d'urgence",
        "Notifications des contacts d'urgence",
        "Reseau d'intervenants verifies",
      ],
    },
    "real-estate-prediction": {
      description:
        "Plateforme de prediction des prix immobiliers en Tunisie basee sur le machine learning.",
      fullDescription:
        "Plateforme ML complete entrainee sur plus de 12 000 biens immobiliers. Elle couvre ingestion, nettoyage, validation et entrainement des modeles, avec suivi des experiences via MLflow. Le service de prediction est expose via FastAPI, conteneurise avec Docker et deploye dans le cloud.",
      features: [
        "Modeles entraines sur 12 000+ biens",
        "0.878 de precision pour les loyers",
        "Pipeline data de bout en bout",
        "Suivi des experiences avec MLflow",
        "API FastAPI conteneurisee avec Docker",
        "Service de prediction deploye dans le cloud",
      ],
    },
    "taskflow-pro": {
      description:
        "Plateforme de gestion de projets et de taches pour une collaboration d'equipe efficace.",
      fullDescription:
        "TaskFlow-Pro centralise projets, taches et communication d'equipe dans un espace unique. Le frontend est base sur Angular 21, le backend sur NestJS/PostgreSQL, avec des mises a jour en temps reel via WebSocket et integration Supabase.",
      features: [
        "Espace unifie projets et taches",
        "Collaboration en temps reel via WebSocket",
        "Communication d'equipe et assignation",
        "Stockage relationnel avec PostgreSQL",
        "Integration Supabase",
      ],
    },
    "github-trends-analyzer": {
      description:
        "Pipeline big data de bout en bout pour analyser les tendances d'activite GitHub en batch et en streaming.",
      fullDescription:
        "GitHub Trends Analyzer combine traitement batch et temps reel pour extraire des insights exploitables sur l'activite des developpeurs. Airflow orchestre les workflows, Spark traite les donnees, Kafka gere l'ingestion, et HDFS/HBase assurent le stockage analytique. Les resultats sont exposes dans un dashboard Streamlit interactif.",
      features: [
        "Pipeline data batch + temps reel",
        "Orchestration des workflows avec Airflow",
        "Traitement distribue avec Spark",
        "Ingestion streaming avec Kafka",
        "Stockage scalable HDFS/HBase",
        "Analyse d'activite depuis les APIs GitHub",
        "Predictions ML sur technologies emergentes",
        "Dashboard Streamlit interactif",
      ],
    },
  };

  const selectedProjectFr = projectId ? projectTranslationsFr[projectId] : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{isFrench ? "Projet introuvable" : "Project Not Found"}</h1>
          <Button onClick={() => navigate("/")}>{isFrench ? "Retour a l'accueil" : "Go Back Home"}</Button>
        </div>
      </div>
    );
  }

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
              {'award' in project && project.award && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 rounded-xl bg-gradient-to-r from-turquoise/10 to-code-accent/10 border-2 border-turquoise/30 shadow-turquoise"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{(project.award as { emoji?: string; title: string; competition: string; description: string }).emoji ?? "🏆"}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-turquoise">
                        {isFrench
                          ? selectedProjectFr?.awardTitle ?? (project.award as { title: string; competition: string; description: string }).title
                          : (project.award as { title: string; competition: string; description: string }).title}
                      </h3>
                      <p className="text-lg text-code-accent font-medium">
                        {isFrench
                          ? selectedProjectFr?.awardCompetition ?? (project.award as { title: string; competition: string; description: string }).competition
                          : (project.award as { title: string; competition: string; description: string }).competition}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {isFrench
                      ? selectedProjectFr?.awardDescription ?? (project.award as { title: string; competition: string; description: string }).description
                      : (project.award as { title: string; competition: string; description: string }).description}
                  </p>
                </motion.div>
              )}
              
              <p className="text-xl text-muted-foreground max-w-3xl">
                {isFrench ? selectedProjectFr?.description ?? project.description : project.description}
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
              <h2 className="text-3xl font-bold">{isFrench ? "A propos du projet" : "About the Project"}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {isFrench ? selectedProjectFr?.fullDescription ?? project.fullDescription : project.fullDescription}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">{isFrench ? "Fonctionnalites cles" : "Key Features"}</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {(isFrench ? selectedProjectFr?.features ?? project.features : project.features).map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/20"
                  >
                    <span className="text-primary text-xl">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Video Demo */}
            {'videoPath' in project && project.videoPath && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">{isFrench ? "Demo video" : "Video Demo"}</h2>
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                <video
                  controls
                  className="w-full h-auto"
                  poster={project.image}
                >
                  <source src={project.videoPath as string} type="video/mp4" />
                  {isFrench ? "Votre navigateur ne supporte pas la lecture video." : "Your browser does not support the video tag."}
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
