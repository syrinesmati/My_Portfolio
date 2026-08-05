import farmlinkImage from "@/assets/projects/farmlink/screenshot-1.png";
import farmlinkImage1 from "@/assets/projects/farmlink/screenshot-2.png";
import farmlinkVideo from "@/assets/projects/farmlink/demo.mp4";

import recommenderImage from "@/assets/projects/odoo-recommender/screenshot-1.png";
import recommenderImage1 from "@/assets/projects/odoo-recommender/screenshot-2.png";
import recommenderImage2 from "@/assets/projects/odoo-recommender/screenshot-3.png";
import recommenderImage3 from "@/assets/projects/odoo-recommender/screenshot-4.png";
import odooVideo from "@/assets/projects/odoo-recommender/demo.mp4";

import rescuelinkImage from "@/assets/projects/rescuelink/screenshot-1.png";
import rescuelinkVideo from "@/assets/projects/rescuelink/demo.mp4";

import logoDinepilotImage from "@/assets/projects/dinepilot/cover-logo.png";
import dinepilotImage from "@/assets/projects/dinepilot/screenshot-1.png";
import dinepilotImage1 from "@/assets/projects/dinepilot/screenshot-2.png";
import dinepilotVideo from "@/assets/projects/dinepilot/demo.mp4";

import packageDeliveryImage from "@/assets/projects/package-delivery/screenshot-1.png";
import packageDeliveryImage2 from "@/assets/projects/package-delivery/screenshot-2.png";
import packageDeliveryVideo from "@/assets/projects/package-delivery/demo.mp4";

import realestate1Image from "@/assets/projects/real-estate-prediction/screenshot-1.png";
import realestate2Image from "@/assets/projects/real-estate-prediction/screenshot-2.png";
import realestate3Image from "@/assets/projects/real-estate-prediction/screenshot-3.png";
import realestateVideo from "@/assets/projects/real-estate-prediction/demo.mp4";

import taskflow1Image from "@/assets/projects/taskflow-pro/screenshot-1.png";
import taskflowVideo from "@/assets/projects/taskflow-pro/demo.mp4";

import githubTrendsImage from "@/assets/projects/github-trends-analyzer/screenshot-1.png";

import tounsilmCoverImage from "@/assets/projects/tounsilm/cover-logo.svg";
import tounsilmScreenshot1 from "@/assets/projects/tounsilm/340edfc1-63eb-4e1a-9555-bbb176f61f6f.jpg";
import tounsilmScreenshot2 from "@/assets/projects/tounsilm/13191760-252c-404a-8e72-f89d8299aac5.jpg";
import tounsilmScreenshot3 from "@/assets/projects/tounsilm/154ec42c-a2dd-41ef-81bf-0361071991a2.jpg";
import tounsilmScreenshot4 from "@/assets/projects/tounsilm/6720d402-ea42-4db0-bec2-c57e92294248.jpg";
import tounsilmScreenshot5 from "@/assets/projects/tounsilm/d3649509-a893-431c-897f-00698572867b.jpg";
import tounsilmScreenshot6 from "@/assets/projects/tounsilm/image.png";
import tounsilmHuggingfaceImage from "@/assets/projects/tounsilm/Screenshot_7-6-2026_15614_huggingface.co.jpeg";
import tounsilmVideo from "@/assets/projects/tounsilm/demo.mp4";

export type ProjectCategory = "all" | "ai" | "fullstack" | "data-engineering";

export interface ProjectAward {
  emoji: string;
  title: string;
  competition: string;
  description: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface ProjectFeatureGroup {
  heading: string;
  items: string[];
}

export interface ProjectLink {
  type: "huggingface-model" | "huggingface-dataset";
  name: string;
  url: string;
}

export interface ProjectTranslation {
  description: string;
  fullDescription: string;
  fullDescriptionSections?: ProjectSection[];
  features: string[];
  featureGroups?: ProjectFeatureGroup[];
  award?: {
    title: string;
    competition: string;
    description: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  fullDescriptionSections?: ProjectSection[];
  image: string;
  screenshots: string[];
  videoPath?: string;
  tags: string[];
  category: ProjectCategory[];
  featured?: boolean;
  githubUrl?: string;
  links?: ProjectLink[];
  award?: ProjectAward;
  features: string[];
  featureGroups?: ProjectFeatureGroup[];
  fr: ProjectTranslation;
}

export const projects: Project[] = [
  {
    id: "tounsilm",
    title: "TounsiLM – Tunisian Arabic Dialogue System",
    description:
      "An end-to-end spoken dialogue system for Tunisian Arabic (Derja), pairing a fine-tuned ASR model with a QLoRA-adapted 8B LLM and a hybrid RAG knowledge base — developed as End-of-Year Project (PFA) at INSAT.",
    fullDescription:
      "This End-of-Year Project (PFA) at INSAT tackles the challenge of building a fully functional spoken dialogue system for Tunisian Arabic (Derja), a dialect with no standardized orthography, heavy code-switching between Arabic, French, and English, and near-total absence from LLM training corpora.",
    fullDescriptionSections: [
      {
        heading: "The Challenge",
        body: "Tunisian Arabic (Derja) has no standardized orthography, mixes Arabic, French, and English within a single sentence, and is almost entirely absent from the data used to train large language models. This project builds a fully functional spoken dialogue system for Derja from the ground up: speech recognition, a dialect-adapted language model, and a retrieval layer to keep it factually grounded.",
      },
      {
        heading: "Data Collection & Cleaning",
        body: "A large share of the work was data engineering before any model training. The ASR corpus started from the ~400-hour LinTO Tunisian Arabic Speech Dataset, run through a cleaning pipeline (text normalization, arabization of code-switched tokens, silence/duration filtering) down to 344 validated hours across 37,400 utterances. The CPT text corpus was built by aggregating and cleaning nearly 2 million raw samples from 11 Tunisian NLP datasets into an 85-million-token corpus. The SFT dataset began as 12,572 instruction-response pairs, hand-written and validated by native Tunisian speakers, then expanded to 31,669 examples through controlled lexical augmentation covering 448 frequently code-switched terms.",
      },
      {
        heading: "Speech Recognition",
        body: "Eleven multilingual ASR models were benchmarked zero-shot on the cleaned corpus before fine-tuning Meta's OmniASR-LLM-3B, reducing word error rate from 68.42% to 37.61% — a 53.1% relative improvement.",
      },
      {
        heading: "Language Model Adaptation",
        body: "Five open-source LLMs (Llama, SILMA, Labess, Aya Expanse) were evaluated against a TounsiBench-inspired dialect-adherence protocol; Aya Expanse 8B emerged as the strongest base. It was adapted in two stages: continued pre-training via QLoRA on the 85M-token Derja corpus to internalize dialectal vocabulary and code-switching patterns, followed by supervised fine-tuning on the 31,669-example instruction dataset to teach conversational behavior under a consistent assistant persona.",
      },
      {
        heading: "Retrieval-Augmented Generation",
        body: "To ground responses in authentic Tunisian culture — proverbs, food, social rituals — rather than let the model hallucinate, a hybrid BM25 + semantic RAG layer was built over a 1,647-entry knowledge base, each entry drafted with LLM assistance and manually validated for cultural accuracy. An Arabizi-aware query rewriter normalizes Latin-script spelling variants, and confidence-gated retrieval only injects context when it's demonstrably relevant.",
      },
      {
        heading: "Results",
        body: "In a preliminary human evaluation, the RAG layer pushed in-domain response quality from 1.4 to 2.4 on a 0–3 scale, with no measurable regression on out-of-domain queries — confirming the confidence gating works as intended.",
      },
      {
        heading: "Product",
        body: "The resulting model is served through a full-stack MVP with two independent FastAPI backends and real-time SSE streaming, supporting voice recording, text chat, and podcast/video summarization — understood in Arabic, French, or English, and always answered in Derja.",
      },
    ],
    image: tounsilmCoverImage,
    screenshots: [
      tounsilmScreenshot1,
      tounsilmScreenshot2,
      tounsilmScreenshot3,
      tounsilmScreenshot4,
      tounsilmScreenshot5,
      tounsilmScreenshot6,
      tounsilmHuggingfaceImage,
    ],
    videoPath: tounsilmVideo,
    tags: ["ASR", "LLM Fine-Tuning", "RAG", "QLoRA", "LoRA", "PyTorch", "FastAPI", "React", "ChromaDB", "BM25", "Tunisian Arabic NLP"],
    category: ["ai"],
    featured: true,
    githubUrl: "https://github.com/syrinesmati/TunisianDialogSystem",
    links: [
      { type: "huggingface-model", name: "TounsiLM-8b", url: "https://huggingface.co/alabenayed/TounsiLM-8b" },
      { type: "huggingface-model", name: "CPT Checkpoint", url: "https://huggingface.co/alabenayed/improved-aya-expanse-8b-cpt-tunisian" },
      { type: "huggingface-dataset", name: "SFT Dataset", url: "https://huggingface.co/datasets/Syrinesmati/tunisian-question-response-dataset" },
      { type: "huggingface-dataset", name: "CPT Corpus", url: "https://huggingface.co/datasets/Syrinesmati/tunisian-dialect-corpus" },
    ],
    award: {
      emoji: "🎓",
      title: "End-of-Year Project (PFA)",
      competition: "INSAT – University of Carthage, 2025-2026",
      description:
        "Developed as the final-year project (Projet de Fin d'Année) at the National Institute of Applied Sciences and Technology (INSAT), University of Carthage. The project addresses the under-resourced Tunisian Arabic dialect through the full-stack integration of speech recognition, language model adaptation, and retrieval-augmented generation.",
    },
    features: [
      "Built and cleaned every training corpus from scratch: ~400h raw ASR speech filtered to 344h/37,400 utterances, ~2M raw text samples from 11 sources filtered to an 85M-token CPT corpus, and 12,572 hand-written instruction-response pairs",
      "Data cleaning pipelines for normalization, code-switch arabization, script/noise filtering, and deduplication, applied separately to the ASR, CPT, and SFT corpora",
      "SFT dataset expanded from 12,572 to 31,669 examples via controlled lexical augmentation (448 transliteration mappings) after native-speaker validation",
      "Benchmarked 11 multilingual ASR models zero-shot before fine-tuning OmniASR-LLM-3B: WER reduced from 68.42% to 37.61% (53.1% relative improvement)",
      "Benchmarked 5 open-source LLMs via a TounsiBench-inspired dialect-adherence protocol to select the strongest base model",
      "TounsiLM-8B: Aya Expanse 8B adapted via QLoRA continued pre-training (~85M Derja tokens) + supervised fine-tuning (31k instruction-response examples)",
      "Hybrid RAG: BM25 + multilingual-e5 semantic retrieval fused via Reciprocal Rank Fusion over a 1,647-entry Tunisian cultural knowledge base, LLM-drafted and human-validated",
      "Arabizi-aware query rewriter (digit-to-letter normalization) and confidence-gated context injection to prevent hallucination",
      "Preliminary evaluation: RAG lifted in-domain response quality from 1.4 to 2.4 (0–3 scale) with no degradation on out-of-domain queries",
      "Full-stack MVP: React 18 + Vite frontend, two independent FastAPI backends (ASR + LLM), real-time SSE streaming",
      "Three interaction modes: voice recording, multilingual text chat, and podcast/video upload with automatic transcription + summarization",
      "Handles code-switching across Arabic, French, and English, always responding in authentic Tunisian dialect",
    ],
    featureGroups: [
      {
        heading: "Data Engineering",
        items: [
          "Built and cleaned every training corpus from scratch: ~400h raw ASR speech filtered to 344h/37,400 utterances, ~2M raw text samples from 11 sources filtered to an 85M-token CPT corpus, and 12,572 hand-written instruction-response pairs",
          "Data cleaning pipelines for normalization, code-switch arabization, script/noise filtering, and deduplication, applied separately to the ASR, CPT, and SFT corpora",
          "SFT dataset expanded from 12,572 to 31,669 examples via controlled lexical augmentation (448 transliteration mappings) after native-speaker validation",
        ],
      },
      {
        heading: "Speech Recognition",
        items: [
          "Benchmarked 11 multilingual ASR models zero-shot before fine-tuning OmniASR-LLM-3B: WER reduced from 68.42% to 37.61% (53.1% relative improvement)",
        ],
      },
      {
        heading: "Language Model",
        items: [
          "Benchmarked 5 open-source LLMs via a TounsiBench-inspired dialect-adherence protocol to select the strongest base model",
          "TounsiLM-8B: Aya Expanse 8B adapted via QLoRA continued pre-training (~85M Derja tokens) + supervised fine-tuning (31k instruction-response examples)",
        ],
      },
      {
        heading: "Retrieval-Augmented Generation",
        items: [
          "Hybrid RAG: BM25 + multilingual-e5 semantic retrieval fused via Reciprocal Rank Fusion over a 1,647-entry Tunisian cultural knowledge base, LLM-drafted and human-validated",
          "Arabizi-aware query rewriter (digit-to-letter normalization) and confidence-gated context injection to prevent hallucination",
          "Preliminary evaluation: RAG lifted in-domain response quality from 1.4 to 2.4 (0–3 scale) with no degradation on out-of-domain queries",
        ],
      },
      {
        heading: "Product",
        items: [
          "Full-stack MVP: React 18 + Vite frontend, two independent FastAPI backends (ASR + LLM), real-time SSE streaming",
          "Three interaction modes: voice recording, multilingual text chat, and podcast/video upload with automatic transcription + summarization",
          "Handles code-switching across Arabic, French, and English, always responding in authentic Tunisian dialect",
        ],
      },
    ],
    fr: {
      description:
        "Système de dialogue vocal pour l'arabe tunisien (Derja) : ASR fine-tuné, LLM de 8B adapté via QLoRA et base de connaissances RAG hybride — Projet de Fin d'Année à l'INSAT.",
      fullDescription:
        "Ce Projet de Fin d'Année (PFA) à l'INSAT relève le défi de construire un système de dialogue vocal complet pour l'arabe tunisien (Derja), un dialecte sans orthographe standardisée, marqué par un code-switching intense entre l'arabe, le français et l'anglais, et quasiment absent des corpus d'entraînement des LLM.",
      fullDescriptionSections: [
        {
          heading: "Le défi",
          body: "L'arabe tunisien (Derja) n'a pas d'orthographe standardisée, mélange arabe, français et anglais au sein d'une même phrase, et est quasiment absent des données utilisées pour entraîner les grands modèles de langage. Ce projet construit, de bout en bout, un système de dialogue vocal pour le Derja : reconnaissance vocale, modèle de langage adapté au dialecte, et une couche de récupération pour l'ancrer factuellement.",
        },
        {
          heading: "Collecte et nettoyage des données",
          body: "Une part importante du travail a consisté en ingénierie de données avant tout entraînement. Le corpus ASR est parti du LinTO Tunisian Arabic Speech Dataset (~400 heures brutes), nettoyé (normalisation du texte, arabisation du code-switching, filtrage par durée/silence) pour aboutir à 344 heures validées sur 37 400 énoncés. Le corpus texte pour le CPT a été construit en agrégeant et nettoyant près de 2 millions d'échantillons bruts issus de 11 jeux de données tunisiens, pour obtenir un corpus de 85 millions de tokens. Le dataset SFT a débuté avec 12 572 paires d'instructions rédigées et validées par des locuteurs natifs, puis étendu à 31 669 exemples via une augmentation lexicale contrôlée sur 448 termes fréquemment en code-switching.",
        },
        {
          heading: "Reconnaissance vocale",
          body: "Onze modèles ASR multilingues ont été évalués en zero-shot sur le corpus nettoyé avant le fine-tuning d'OmniASR-LLM-3B (Meta), réduisant le WER de 68,42 % à 37,61 % — une amélioration relative de 53,1 %.",
        },
        {
          heading: "Adaptation du modèle de langage",
          body: "Cinq LLM open-source (Llama, SILMA, Labess, Aya Expanse) ont été évalués selon un protocole d'adhérence dialectale inspiré de TounsiBench ; Aya Expanse 8B s'est révélé le plus solide. Il a été adapté en deux étapes : un pré-entraînement continu via QLoRA sur le corpus de 85M tokens en Derja pour intégrer vocabulaire dialectal et code-switching, puis un fine-tuning supervisé sur les 31 669 exemples d'instructions pour enseigner un comportement conversationnel cohérent.",
        },
        {
          heading: "Génération augmentée par récupération (RAG)",
          body: "Pour ancrer les réponses dans la culture tunisienne authentique — proverbes, cuisine, rituels sociaux — plutôt que de laisser le modèle halluciner, une couche RAG hybride BM25 + sémantique a été construite sur une base de connaissances de 1 647 entrées, rédigées avec l'assistance d'un LLM puis validées manuellement. Un réécrivain de requêtes conscient de l'Arabizi normalise les variantes orthographiques en alphabet latin, et l'injection de contexte est conditionnée par un score de confiance.",
        },
        {
          heading: "Résultats",
          body: "Lors d'une évaluation humaine préliminaire, la couche RAG a fait passer la qualité des réponses en domaine de 1,4 à 2,4 sur une échelle de 0 à 3, sans dégradation mesurable sur les requêtes hors domaine — confirmant que le filtrage par confiance fonctionne comme prévu.",
        },
        {
          heading: "Produit",
          body: "Le modèle final est servi via une MVP full-stack avec deux backends FastAPI indépendants et un streaming SSE en temps réel, prenant en charge l'enregistrement vocal, le chat textuel et le résumé de podcasts/vidéos — compris en arabe, français ou anglais, et toujours restitués en Derja.",
        },
      ],
      features: [
        "Corpus d'entraînement construits et nettoyés de zéro : ~400h de parole brute filtrées à 344h/37 400 énoncés, ~2M d'échantillons texte bruts filtrés en un corpus CPT de 85M tokens, et 12 572 paires d'instructions rédigées à la main",
        "Pipelines de nettoyage (normalisation, arabisation du code-switching, filtrage script/bruit, déduplication) appliqués séparément aux corpus ASR, CPT et SFT",
        "Dataset SFT étendu de 12 572 à 31 669 exemples via augmentation lexicale contrôlée (448 correspondances de translitération) après validation par des locuteurs natifs",
        "Onze modèles ASR multilingues évalués en zero-shot avant le fine-tuning d'OmniASR-LLM-3B : WER réduit de 68,42 % à 37,61 % (amélioration de 53,1 %)",
        "Cinq LLM open-source évalués selon un protocole d'adhérence dialectale inspiré de TounsiBench pour sélectionner le meilleur modèle de base",
        "TounsiLM-8B : Aya Expanse 8B adapté via pré-entraînement continu QLoRA (~85M tokens en Derja) + fine-tuning supervisé (31k exemples d'instructions)",
        "RAG hybride : BM25 + recherche sémantique multilingual-e5 fusionnées par Reciprocal Rank Fusion sur une base de connaissances culturelles de 1 647 entrées, rédigée par LLM et validée par des humains",
        "Réécrivain de requêtes conscient de l'Arabizi (normalisation chiffres-lettres) et injection de contexte conditionnée par un score de confiance",
        "Évaluation préliminaire : le RAG fait passer la qualité des réponses en domaine de 1,4 à 2,4 (échelle 0–3), sans dégradation hors domaine",
        "MVP full-stack : frontend React 18 + Vite, deux backends FastAPI indépendants (ASR + LLM), streaming SSE en temps réel",
        "Trois modes d'interaction : enregistrement vocal, chat textuel multilingue, et upload de podcasts/vidéos avec transcription et résumé automatiques",
        "Gère le code-switching entre l'arabe, le français et l'anglais, en répondant toujours dans un dialecte tunisien authentique",
      ],
      featureGroups: [
        {
          heading: "Ingénierie des données",
          items: [
            "Corpus d'entraînement construits et nettoyés de zéro : ~400h de parole brute filtrées à 344h/37 400 énoncés, ~2M d'échantillons texte bruts filtrés en un corpus CPT de 85M tokens, et 12 572 paires d'instructions rédigées à la main",
            "Pipelines de nettoyage (normalisation, arabisation du code-switching, filtrage script/bruit, déduplication) appliqués séparément aux corpus ASR, CPT et SFT",
            "Dataset SFT étendu de 12 572 à 31 669 exemples via augmentation lexicale contrôlée (448 correspondances de translitération) après validation par des locuteurs natifs",
          ],
        },
        {
          heading: "Reconnaissance vocale",
          items: [
            "Onze modèles ASR multilingues évalués en zero-shot avant le fine-tuning d'OmniASR-LLM-3B : WER réduit de 68,42 % à 37,61 % (amélioration de 53,1 %)",
          ],
        },
        {
          heading: "Modèle de langage",
          items: [
            "Cinq LLM open-source évalués selon un protocole d'adhérence dialectale inspiré de TounsiBench pour sélectionner le meilleur modèle de base",
            "TounsiLM-8B : Aya Expanse 8B adapté via pré-entraînement continu QLoRA (~85M tokens en Derja) + fine-tuning supervisé (31k exemples d'instructions)",
          ],
        },
        {
          heading: "Génération augmentée par récupération",
          items: [
            "RAG hybride : BM25 + recherche sémantique multilingual-e5 fusionnées par Reciprocal Rank Fusion sur une base de connaissances culturelles de 1 647 entrées, rédigée par LLM et validée par des humains",
            "Réécrivain de requêtes conscient de l'Arabizi (normalisation chiffres-lettres) et injection de contexte conditionnée par un score de confiance",
            "Évaluation préliminaire : le RAG fait passer la qualité des réponses en domaine de 1,4 à 2,4 (échelle 0–3), sans dégradation hors domaine",
          ],
        },
        {
          heading: "Produit",
          items: [
            "MVP full-stack : frontend React 18 + Vite, deux backends FastAPI indépendants (ASR + LLM), streaming SSE en temps réel",
            "Trois modes d'interaction : enregistrement vocal, chat textuel multilingue, et upload de podcasts/vidéos avec transcription et résumé automatiques",
            "Gère le code-switching entre l'arabe, le français et l'anglais, en répondant toujours dans un dialecte tunisien authentique",
          ],
        },
      ],
      award: {
        title: "Projet de Fin d'Année (PFA)",
        competition: "INSAT – Université de Carthage, 2025-2026",
        description:
          "Développé en tant que projet de fin d'année (PFA) à l'Institut National des Sciences Appliquées et de la Technologie (INSAT), Université de Carthage. Le projet s'attaque au dialecte arabe tunisien, sous-représenté dans les ressources NLP, via l'intégration complète de la reconnaissance vocale, l'adaptation d'un LLM et la génération augmentée par récupération.",
      },
    },
  },
  {
    id: "dinepilot",
    title: "DinePilot",
    description:
      "An AI-powered restaurant analytics platform providing real-time visibility into table occupancy, customer wait times, and floor activity.",
    fullDescription:
      "DinePilot is a smart restaurant floor monitoring system that leverages advanced computer vision to transform how restaurants manage their operations. Using YOLOv11x for object detection and YOLOv8x-pose for pose and occupancy estimation, the system provides real-time insights into table status, customer flow, and floor activity. The custom React dashboard features color-coded status indicators and intelligent detection of personal belongings to automatically mark tables as reserved. Integrated automated monthly reports with predictive analytics enable proactive planning and resource optimization.",
    image: logoDinepilotImage,
    screenshots: [logoDinepilotImage, dinepilotImage, dinepilotImage1],
    videoPath: dinepilotVideo,
    tags: ["React", "YOLOv11x", "YOLOv8x-pose", "Computer Vision", "Real-time Analytics"],
    category: ["ai"],
    featured: true,
    award: {
      emoji: "🥈",
      title: "2nd Place - Smart Service Challenge",
      competition: "AI Camera Challenge",
      description:
        "Awarded 2nd place in the Smart Service Challenge at the AI Camera Challenge competition for developing an innovative AI-powered solution that transforms restaurant floor management through real-time computer vision analytics.",
    },
    features: [
      "Real-time table occupancy detection",
      "YOLOv11x object detection",
      "YOLOv8x-pose estimation",
      "Color-coded status indicators",
      "Automated monthly reports with predictive analytics",
    ],
    fr: {
      description:
        "Plateforme d'analyse pour restaurant propulsée par l'IA, avec vision en temps réel de l'occupation des tables et du flux client.",
      fullDescription:
        "DinePilot est un système intelligent de supervision de salle pour la restauration. Il utilise la vision par ordinateur pour détecter les objets, estimer l'occupation et produire des indicateurs en temps réel. Le dashboard React affiche des statuts visuels clairs et des rapports automatisés avec des insights prédictifs.",
      features: [
        "Détection en temps réel de l'occupation des tables",
        "Détection d'objets avec YOLOv11x",
        "Estimation de pose avec YOLOv8x-pose",
        "Indicateurs visuels par code couleur",
        "Rapports mensuels automatisés et analytiques",
      ],
      award: {
        title: "2e place - Smart Service Challenge",
        competition: "AI Camera Challenge",
        description:
          "Récompensée pour une solution IA innovante qui optimise la gestion des salles de restaurant via des analyses visuelles en temps réel.",
      },
    },
  },
  {
    id: "github-trends-analyzer",
    title: "GitHub Trends Analyzer – Big Data Project",
    description:
      "An end-to-end big data pipeline that analyzes and visualizes GitHub activity using both batch and real-time processing.",
    fullDescription:
      "GitHub Trends Analyzer is a complete big data project designed to extract actionable insights from large-scale developer activity. The architecture combines batch and streaming workflows to deliver both historical and real-time trend analysis. Apache Airflow orchestrates scheduled jobs, while Apache Spark (PySpark and Spark Streaming) powers distributed data processing at scale. Real-time ingestion is handled through Apache Kafka, and storage is distributed across HDFS and Apache HBase to support efficient querying and analytics. The pipeline collects data from GitHub APIs, processes repository events, and applies machine learning models to identify emerging technologies and trending programming languages. Results are exposed through an interactive Streamlit dashboard, enabling users to explore historical patterns, monitor live activity, and consume AI-driven predictions.",
    image: githubTrendsImage,
    screenshots: [githubTrendsImage],
    videoPath: realestateVideo,
    tags: ["Apache Airflow", "Apache Spark", "PySpark", "Spark Streaming", "Apache Kafka", "HDFS", "Apache HBase", "Machine Learning", "Streamlit", "Big Data"],
    category: ["ai", "fullstack", "data-engineering"],
    githubUrl: "https://github.com/syrinesmati/github-trends-analyzer",
    features: [
      "End-to-end batch and real-time data pipeline",
      "Workflow orchestration with Apache Airflow",
      "Distributed processing with PySpark and Spark Streaming",
      "Real-time ingestion with Apache Kafka",
      "Scalable storage using HDFS and Apache HBase",
      "GitHub API data collection and repository activity analysis",
      "Machine learning predictions for emerging technologies",
      "Interactive Streamlit dashboard for trend exploration",
    ],
    fr: {
      description:
        "Pipeline big data de bout en bout pour analyser et visualiser les tendances GitHub en batch et en temps réel.",
      fullDescription:
        "GitHub Trends Analyzer combine traitement batch et temps réel pour extraire des insights exploitables sur l'activité des développeurs. Airflow orchestre les workflows, Spark traite les données, Kafka gère l'ingestion, et HDFS/HBase assurent le stockage analytique. Les résultats sont exposés dans un dashboard Streamlit interactif.",
      features: [
        "Pipeline data batch + temps réel",
        "Orchestration des workflows avec Airflow",
        "Traitement distribué avec Spark",
        "Ingestion streaming avec Kafka",
        "Stockage scalable HDFS/HBase",
        "Analyse d'activité depuis les APIs GitHub",
        "Prédictions ML sur technologies émergentes",
        "Dashboard Streamlit interactif",
      ],
    },
  },
  {
    id: "real-estate-prediction",
    title: "Tunisian Real Estate Price Prediction",
    description:
      "A machine learning-based platform for predicting real estate prices in Tunisia with high accuracy.",
    fullDescription:
      "A comprehensive end-to-end ML platform for predicting real estate prices in Tunisia. The system was trained on 12,000+ properties data and achieves 0.878 accuracy for rental price models. The pipeline includes data ingestion, cleaning, and validation stages, with models trained and evaluated using MLflow for experiment tracking. The prediction service is exposed through a RESTful FastAPI backend, containerized with Docker, and deployed to the cloud. An intuitive full-stack web application allows users to input property details and receive instant price predictions for both rental and sale properties.",
    image: realestate1Image,
    screenshots: [realestate1Image, realestate2Image, realestate3Image],
    videoPath: realestateVideo,
    tags: ["FastAPI", "Machine Learning", "MLflow", "Docker", "Predictive Analytics", "Data Engineering"],
    category: ["ai"],
    githubUrl: "https://github.com/syrinesmati/Tunisan-Real-Estate-Price-Prediction-Platform",
    features: [
      "ML models trained on 12,000+ properties",
      "0.878 accuracy for rental price prediction",
      "End-to-end data pipeline with ingestion, cleaning, and validation",
      "MLflow experiment tracking and model evaluation",
      "RESTful FastAPI service containerized with Docker",
      "Cloud-deployed prediction service",
    ],
    fr: {
      description:
        "Plateforme de prédiction des prix immobiliers en Tunisie basée sur le machine learning.",
      fullDescription:
        "Plateforme ML complète entraînée sur plus de 12 000 biens immobiliers. Elle couvre ingestion, nettoyage, validation et entraînement des modèles, avec suivi des expériences via MLflow. Le service de prédiction est exposé via FastAPI, conteneurisé avec Docker et déployé dans le cloud.",
      features: [
        "Modèles entraînés sur 12 000+ biens",
        "0.878 de précision pour les loyers",
        "Pipeline data de bout en bout",
        "Suivi des expériences avec MLflow",
        "API FastAPI conteneurisée avec Docker",
        "Service de prédiction déployé dans le cloud",
      ],
    },
  },
  {
    id: "odoo-recommender",
    title: "Odoo Recommender System",
    description:
      "A recommendation engine that suggests the most relevant products to users based on their preferences and past interactions.",
    fullDescription:
      "The Odoo Recommender System intelligently analyzes user behavior, purchase history, and product interactions to provide personalized product recommendations. Built directly into the Odoo ecosystem, it seamlessly integrates with existing e-commerce workflows. The system uses collaborative filtering and content-based algorithms to suggest products that users are most likely to purchase, increasing conversion rates and customer satisfaction.",
    image: recommenderImage,
    screenshots: [recommenderImage, recommenderImage1, recommenderImage2, recommenderImage3],
    videoPath: odooVideo,
    tags: ["Odoo", "PostgreSQL", "Machine Learning", "Data Analysis"],
    category: ["ai"],
    features: [
      "Collaborative filtering recommendations",
      "Real-time product suggestions",
      "User behavior analytics",
      "Purchase pattern analysis",
      "Seamless Odoo integration",
    ],
    fr: {
      description:
        "Moteur de recommandation intégré à Odoo eCommerce pour proposer des produits personnalisés.",
      fullDescription:
        "Le système analyse les comportements utilisateurs, l'historique d'achat et les interactions produits pour fournir des recommandations pertinentes. Il combine filtrage collaboratif et approche basée contenu afin d'augmenter la pertinence, la conversion et la satisfaction client.",
      features: [
        "Recommandations par filtrage collaboratif",
        "Suggestions produits en temps réel",
        "Analyse comportementale utilisateur",
        "Analyse des patterns d'achat",
        "Intégration native avec Odoo",
      ],
    },
  },
  {
    id: "farmlink",
    title: "FarmLink",
    description:
      "An intelligent agricultural platform featuring AI-powered chatbot and computer vision for plant disease detection, empowering farmers with smart collaboration and personalized insights.",
    fullDescription:
      "Farmlink is an intelligent agricultural platform developed as part of our Personal Professional Project (PPP), for which we received excellent marks. The platform empowers farmers through AI and smart collaboration, featuring an RAG-based AI chatbot using Gemini LLM to provide accurate, contextual answers in real time. It also includes a computer vision model (CNN + ResNet) trained on the PlantVillage dataset, achieving over 96% accuracy in detecting plant diseases from a simple photo. Additionally, Farmlink offers a personalized dashboard with weather insights, daily tips, and resource tracking to help optimize farm operations. Built with React (Vite, TypeScript, TailwindCSS) on the frontend, NestJS + Prisma + PostgreSQL on the backend, and PyTorch, TensorFlow, OpenCV, and Flask API for AI model deployment, it leverages Dockerized microservices for a modular, scalable, and secure infrastructure. The project was developed using an Agile/Scrum methodology, with iterative releases and effective collaboration across three major project phases.",
    image: farmlinkImage,
    screenshots: [farmlinkImage, farmlinkImage1],
    videoPath: farmlinkVideo,
    tags: ["NestJS", "PostgreSQL", "React", "TailWind CSS", "Docker", "TensorFlow", "PyTorch", "CNN", "ResNet", "RAG", "FlaskAPI"],
    category: ["ai", "fullstack"],
    githubUrl: "https://github.com/orgs/FarmLink-ppp/repositories",
    features: [
      "Direct farmer-to-market connections",
      "AI crop disease detection",
      "Weather forecasting integration",
      "Knowledge sharing community",
      "Resource marketplace",
    ],
    fr: {
      description:
        "Plateforme agricole intelligente combinant IA conversationnelle et vision par ordinateur pour aider les agriculteurs.",
      fullDescription:
        "FarmLink est une plateforme intelligente développée dans le cadre de notre PPP. Elle intègre un chatbot IA basé sur RAG pour répondre en temps réel, ainsi qu'un modèle de vision par ordinateur pour détecter les maladies des plantes. Le projet propose aussi un tableau de bord personnalisé avec météo, conseils et suivi des ressources.",
      features: [
        "Mise en relation directe agriculteurs-marché",
        "Détection IA des maladies des cultures",
        "Intégration de prévisions météo",
        "Espace de partage de connaissances",
        "Marketplace de ressources",
      ],
    },
  },
  {
    id: "package-delivery",
    title: "Package Delivery System",
    description:
      "An AI-driven search system for optimizing package delivery in urban environments with multiple search strategies.",
    fullDescription:
      "This Package Delivery System is a search-based optimization platform that computes optimal delivery routes under traffic constraints and tunnel shortcuts. The system implements and compares eight different search strategies, providing comprehensive performance analysis including execution time, memory usage, CPU utilization, and node expansion metrics. Built with a modular Java backend featuring Strategy & Template Method design patterns, and a React/Vite frontend for real-time visualization of grids, truck movements, traffic levels, and algorithm metrics.",
    image: packageDeliveryImage,
    screenshots: [packageDeliveryImage, packageDeliveryImage2],
    videoPath: packageDeliveryVideo,
    tags: ["Java", "React", "Vite", "AI Search", "OOP Design Patterns", "Performance Analysis"],
    category: ["ai"],
    githubUrl: "https://github.com/syrinesmati/ai-package-delivery",
    features: [
      "Eight search strategy implementations",
      "Real-time grid and truck visualization",
      "Traffic and tunnel constraint modeling",
      "Performance metrics dashboard",
      "Strategy & Template Method patterns",
    ],
    fr: {
      description:
        "Système d'optimisation de livraison de colis basé sur des stratégies de recherche IA en milieu urbain.",
      fullDescription:
        "Cette plateforme calcule des routes optimales de livraison sous contraintes de trafic et de tunnels. Elle compare huit stratégies de recherche avec des mesures de performance détaillées (temps, mémoire, CPU, nœuds explorés). Le backend Java est conçu de façon modulaire avec des design patterns, et le frontend React/Vite visualise l'exécution en temps réel.",
      features: [
        "Huit stratégies de recherche implémentées",
        "Visualisation en temps réel de la grille et des camions",
        "Modélisation du trafic et des contraintes",
        "Tableau de bord de performance",
        "Patterns Strategy et Template Method",
      ],
    },
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow-Pro",
    description:
      "A task and project management platform for effective team collaboration.",
    fullDescription:
      "TaskFlow-Pro is a comprehensive task and project management platform that helps teams collaborate effectively. It enables teams to organize, assign, and track work through a unified workspace, centralizing projects, tasks, and team communication in one place. Built with Angular 21 and Tailwind CSS on the frontend, NestJS with PostgreSQL on the backend, and featuring real-time updates via WebSocket and Supabase integration for additional backend services.",
    image: taskflow1Image,
    screenshots: [taskflow1Image],
    videoPath: taskflowVideo,
    tags: ["Angular 21", "Tailwind CSS", "NestJS", "PostgreSQL", "Supabase", "WebSocket"],
    category: ["fullstack"],
    githubUrl: "https://github.com/syrinesmati/AngularProject",
    features: [
      "Unified workspace for projects and tasks",
      "Real-time collaboration via WebSocket",
      "Team communication and task assignment",
      "Structured relational data with PostgreSQL",
      "Supabase integration",
    ],
    fr: {
      description:
        "Plateforme de gestion de projets et de tâches pour une collaboration d'équipe efficace.",
      fullDescription:
        "TaskFlow-Pro centralise projets, tâches et communication d'équipe dans un espace unique. Le frontend est basé sur Angular 21, le backend sur NestJS/PostgreSQL, avec des mises à jour en temps réel via WebSocket et intégration Supabase.",
      features: [
        "Espace unifié projets et tâches",
        "Collaboration en temps réel via WebSocket",
        "Communication d'équipe et assignation",
        "Stockage relationnel avec PostgreSQL",
        "Intégration Supabase",
      ],
    },
  },
  {
    id: "rescuelink",
    title: "RescueLink",
    description:
      "An emergency response application that connects people in need with nearby helpers and emergency services in real-time.",
    fullDescription:
      "RescueLink is a life-saving platform that leverages real-time location data to connect people in emergency situations with the nearest help. Whether it's medical emergencies, accidents, or disasters, the app instantly notifies nearby verified responders and emergency services. Built with modern web technologies for cross-platform compatibility, it includes features like real-time GPS tracking, emergency contact alerts, and direct communication channels with first responders.",
    image: rescuelinkImage,
    screenshots: [rescuelinkImage],
    videoPath: rescuelinkVideo,
    tags: ["React", "NestJS", "MySQL", "WebSockets", "GraphQL"],
    category: ["fullstack"],
    features: [
      "Real-time emergency alerts",
      "GPS-based helper matching",
      "Direct emergency service connection",
      "Emergency contact notifications",
      "Verified responder network",
    ],
    fr: {
      description:
        "Application d'urgence qui connecte les personnes en détresse aux secours à proximité en temps réel.",
      fullDescription:
        "RescueLink exploite la géolocalisation temps réel pour orienter rapidement les demandes d'aide vers les bons intervenants. La plateforme permet des alertes immédiates, le suivi GPS et des canaux de communication directs avec les secours.",
      features: [
        "Alertes d'urgence en temps réel",
        "Mise en relation basée GPS",
        "Connexion directe aux services d'urgence",
        "Notifications des contacts d'urgence",
        "Réseau d'intervenants vérifiés",
      ],
    },
  },
];

export const getProjectById = (id: string | undefined): Project | undefined =>
  projects.find((project) => project.id === id);
