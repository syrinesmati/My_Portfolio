import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import decoraImage from "@/assets/decora.png";
import farmlinkImage from "@/assets/farmlink.png";
import farmlinkImage1 from "@/assets/farmlink1.png";
import recommenderImage1 from "@/assets/recommender1.png";
import recommenderImage2 from "@/assets/recommender2.png";
import recommenderImage3 from "@/assets/recommender3.png";
import recommenderImage from "@/assets/recommender.png";
import rescuelinkImage from "@/assets/rescuelink.png";
import logoDinepilotImage from "@/assets/logo-dinepilot.png";
import dinepilotImage from "@/assets/dinepilot.png";
import dinepilotImage1 from "@/assets/dinepilot-1.png";
import packageDeliveryImage from "@/assets/Package-delivery.png";
import packageDeliveryImage2 from "@/assets/package-delivey2.png";
import realestate1Image from "@/assets/realestate1.png";
import realestate2Image from "@/assets/realestate2.png";
import realestate4Image from "@/assets/realestate4.png";
import taskflow1Image from "@/assets/taskflow1.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

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
      videoPath: "/src/assets/farmlink-demo.mp4",
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
      videoPath: "/src/assets/Dinepilot-demo.mp4",
      award: {
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
      videoPath: "/src/assets/Package-delivery.mp4",
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
      videoPath: "/src/assets/odoo-demo.mp4",
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
      videoPath: "/src/assets/rescuelink-demo.mp4",
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
      videoPath: "/src/assets/demo.mp4",
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
      fullDescription: "TaskFlow-Pro is a comprehensive task and project management platform that helps teams collaborate effectively. It enables teams to organize, assign, and track work through a unified workspace, centralizing projects, tasks, and team communication in one place. Built with Angular 21 and Tailwind CSS on the frontend, NestJS with Prisma and PostgreSQL on the backend, and featuring real-time updates via WebSocket, JWT authentication, and Supabase integration for additional backend services.",
      image: taskflow1Image,
      tags: ["Angular 21", "Tailwind CSS", "NestJS", "TypeScript", "PostgreSQL", "Supabase", "Prisma", "JWT", "WebSocket"],
      screenshots: [taskflow1Image],
      videoPath: "/src/assets/demotaskflow.mp4",
      features: [
        "Unified workspace for projects and tasks",
        "Real-time collaboration via WebSocket",
        "Team communication and task assignment",
        "JWT-based authentication",
        "Prisma ORM with PostgreSQL",
        "Supabase integration"
      ]
    }
  };

  const project = projectId ? projects[projectId as keyof typeof projects] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")}>Go Back Home</Button>
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
            Back to Projects
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
                    <span className="text-4xl">🥈</span>
                    <div>
                      <h3 className="text-2xl font-bold text-turquoise">{(project.award as { title: string; competition: string; description: string }).title}</h3>
                      <p className="text-lg text-code-accent font-medium">{(project.award as { title: string; competition: string; description: string }).competition}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{(project.award as { title: string; competition: string; description: string }).description}</p>
                </motion.div>
              )}
              
              <p className="text-xl text-muted-foreground max-w-3xl">
                {project.description}
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
              className="relative"
            >
              <Carousel className="w-full max-w-5xl mx-auto">
                <div className="relative">
                  <CarouselContent>
                    {project.screenshots.map((screenshot, index) => (
                      <CarouselItem key={index}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          viewport={{ once: true }}
                          className="rounded-lg overflow-hidden shadow-2xl border border-primary/20"
                        >
                          <img
                            src={screenshot}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-auto"
                          />
                        </motion.div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                </div>
              </Carousel>
            </motion.div>

            {/* Full Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">About the Project</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
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
              <h2 className="text-3xl font-bold">Key Features</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold">Video Demo</h2>
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                <video
                  controls
                  className="w-full h-auto"
                  poster={project.image}
                >
                  <source src={project.videoPath} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
