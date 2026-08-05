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

import githubTrendsDiagram from "@/assets/projects/github-trends-analyzer/diagram-export-05-08-2026-14_19_10.png";
import githubTrendsDashboard1 from "@/assets/projects/github-trends-analyzer/Screenshot 2026-08-05 133252.png";
import githubTrendsDashboard2 from "@/assets/projects/github-trends-analyzer/Screenshot 2026-08-05 133309.png";
import githubTrendsDocker from "@/assets/projects/github-trends-analyzer/Screenshot 2026-08-05 142116.png";
import githubTrendsVideo from "@/assets/projects/github-trends-analyzer/demo.mp4";

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
      "A real-time + batch pipeline that tracks GitHub trending activity (stars, forks) using Kafka, Spark, Airflow, HDFS, and HBase, visualized through a live Streamlit dashboard.",
    fullDescription:
      "GitHub Trends Analyzer tracks GitHub trending activity — stars and forks — through two independent data flows that converge on a shared HBase cluster: a real-time streaming path fed by the live GitHub Events API, and a daily batch path fed by historical GH Archive dumps.",
    fullDescriptionSections: [
      {
        heading: "The Pipeline",
        body: "This pipeline tracks GitHub trending activity — stars and forks — through two independent flows that converge on a shared HBase cluster: a real-time streaming path fed by the live GitHub Events API, and a daily batch path fed by historical GH Archive dumps.",
      },
      {
        heading: "Real-Time Ingestion",
        body: "A Python producer polls the public GitHub Events API every 5 seconds (up to 300 events per poll), filters to WatchEvent (stars) and ForkEvent (forks), resolves forked repos back to their canonical parent, and publishes to a Kafka topic. Spark Structured Streaming consumes the topic and writes to HBase in two parallel micro-batches — every 10 seconds for the raw live-activity feed, every 30 seconds for 10-minute-bucketed trend metrics — using HBase's own atomic counters instead of Spark's stateful window operator to keep per-batch overhead low.",
      },
      {
        heading: "Daily Batch Processing",
        body: "An Airflow DAG runs daily at 02:00 UTC: it downloads the previous day's GH Archive dump (falling back from a single bulk file to 24 hourly files when needed), validates and loads it into HDFS, then triggers a PySpark batch job. The job aggregates star/fork counts per repository per day, computes day-over-day 'velocity' via a Spark window function with lag, and enriches each repo's language through a three-tier fallback: an HBase cache, then batched GitHub GraphQL queries (50 repos/request), then a parallel REST fallback for stragglers. A metadata table tracks which days are already processed so re-runs stay idempotent, and old raw files are cleaned up after a 30-day retention window.",
      },
      {
        heading: "Storage",
        body: "HDFS holds the raw compressed GH Archive files and Spark Streaming's checkpoint state; Apache HBase holds six tables (live events, live metrics, a repo-language cache, daily aggregates, and processing metadata), accessed over Thrift from both Spark and the dashboard. Everything is containerized with Docker Compose alongside a Hadoop/Kafka/HBase cluster.",
      },
      {
        heading: "Dashboard",
        body: "A Streamlit dashboard polls HBase directly (refresh rate 5–60s, user-selectable) and renders five live/batch panels: a real-time trending-repos leaderboard, a raw live-activity feed, historical star trends by language, a day-over-day 'rising languages' comparison, and a top-10 leaderboard ranked by the batch-computed velocity score.",
      },
      {
        heading: "Scale",
        body: "In production runs, the pipeline has processed as much as 7.35 GiB across 384 files in HDFS and enriched 1,252 repositories in a single daily batch run, with roughly two weeks of continuous daily processing history.",
      },
    ],
    image: githubTrendsDashboard1,
    screenshots: [githubTrendsDiagram, githubTrendsDashboard1, githubTrendsDashboard2, githubTrendsDocker],
    videoPath: githubTrendsVideo,
    tags: ["Apache Airflow", "Apache Spark", "PySpark", "Spark Streaming", "Apache Kafka", "HDFS", "Apache HBase", "Streamlit", "Docker", "Big Data"],
    category: ["data-engineering"],
    githubUrl: "https://github.com/BenAyedMedAla/github-trends-analyzer",
    features: [
      "GitHub Events API polled every 5s, filtered to stars and forks, deduplicated and fork-resolved before publishing to Kafka",
      "Spark Structured Streaming consumes Kafka and writes to HBase via two micro-batches: 10s for the live feed, 30s for 10-minute trend windows",
      "Airflow DAG runs daily at 02:00 UTC, ingesting the previous day's GH Archive dump into HDFS with automatic bulk-file/hourly-file fallback",
      "PySpark batch job computes day-over-day star/fork velocity via a window-lag function and enriches repo languages through a 3-tier cache/GraphQL/REST fallback",
      "Idempotent re-runs via a processed-days metadata table, with 30-day HDFS retention and automatic cleanup",
      "HDFS for raw GH Archive files and streaming checkpoint state; 6 HBase tables accessed over Thrift from Spark and the dashboard",
      "Fully containerized with Docker Compose, orchestrating Kafka, Airflow, Spark, and Streamlit alongside a Hadoop/HBase cluster",
      "Streamlit dashboard with 5 live/batch panels: trending repos, live activity feed, historical star trends, rising languages, and a velocity-ranked leaderboard",
      "Processed 7.35 GiB across 384 files in HDFS and enriched 1,252 repositories in a single daily batch run",
    ],
    featureGroups: [
      {
        heading: "Real-Time Streaming",
        items: [
          "GitHub Events API polled every 5s, filtered to stars and forks, deduplicated and fork-resolved before publishing to Kafka",
          "Spark Structured Streaming consumes Kafka and writes to HBase via two micro-batches: 10s for the live feed, 30s for 10-minute trend windows",
        ],
      },
      {
        heading: "Daily Batch Processing",
        items: [
          "Airflow DAG runs daily at 02:00 UTC, ingesting the previous day's GH Archive dump into HDFS with automatic bulk-file/hourly-file fallback",
          "PySpark batch job computes day-over-day star/fork velocity via a window-lag function and enriches repo languages through a 3-tier cache/GraphQL/REST fallback",
          "Idempotent re-runs via a processed-days metadata table, with 30-day HDFS retention and automatic cleanup",
        ],
      },
      {
        heading: "Storage & Infrastructure",
        items: [
          "HDFS for raw GH Archive files and streaming checkpoint state; 6 HBase tables accessed over Thrift from Spark and the dashboard",
          "Fully containerized with Docker Compose, orchestrating Kafka, Airflow, Spark, and Streamlit alongside a Hadoop/HBase cluster",
        ],
      },
      {
        heading: "Dashboard",
        items: [
          "Streamlit dashboard with 5 live/batch panels: trending repos, live activity feed, historical star trends, rising languages, and a velocity-ranked leaderboard",
        ],
      },
      {
        heading: "Scale",
        items: [
          "Processed 7.35 GiB across 384 files in HDFS and enriched 1,252 repositories in a single daily batch run",
        ],
      },
    ],
    fr: {
      description:
        "Pipeline temps réel + batch qui suit les tendances GitHub (stars, forks) avec Kafka, Spark, Airflow, HDFS et HBase, visualisé via un dashboard Streamlit en direct.",
      fullDescription:
        "GitHub Trends Analyzer suit les tendances GitHub — stars et forks — via deux flux de données indépendants qui convergent vers un cluster HBase partagé : un flux temps réel alimenté par l'API GitHub Events en direct, et un flux batch quotidien alimenté par les archives historiques GH Archive.",
      fullDescriptionSections: [
        {
          heading: "Le pipeline",
          body: "Ce pipeline suit les tendances GitHub — stars et forks — via deux flux indépendants qui convergent vers un cluster HBase partagé : un flux temps réel alimenté par l'API GitHub Events en direct, et un flux batch quotidien alimenté par les archives historiques GH Archive.",
        },
        {
          heading: "Ingestion temps réel",
          body: "Un producteur Python interroge l'API publique GitHub Events toutes les 5 secondes (jusqu'à 300 événements par appel), filtre les WatchEvent (stars) et ForkEvent (forks), résout les forks vers leur dépôt parent canonique, puis publie sur un topic Kafka. Spark Structured Streaming consomme ce topic et écrit dans HBase via deux micro-batchs parallèles — toutes les 10 secondes pour le flux d'activité brute, toutes les 30 secondes pour les métriques agrégées par fenêtres de 10 minutes — en utilisant les compteurs atomiques natifs de HBase plutôt que l'opérateur de fenêtrage à état de Spark, pour limiter la surcharge par micro-batch.",
        },
        {
          heading: "Traitement batch quotidien",
          body: "Un DAG Airflow s'exécute chaque jour à 2h00 UTC : il télécharge l'archive GH Archive de la veille (avec repli automatique du fichier unique vers 24 fichiers horaires si nécessaire), la valide et la charge dans HDFS, puis déclenche un job PySpark batch. Ce job agrège les compteurs de stars/forks par dépôt et par jour, calcule la 'vélocité' jour-sur-jour via une fonction de fenêtrage Spark avec lag, et enrichit le langage de chaque dépôt via un repli à trois niveaux : cache HBase, puis requêtes GraphQL GitHub par lots de 50 dépôts, puis repli REST parallèle pour les cas restants. Une table de métadonnées suit les jours déjà traités pour garantir l'idempotence, et les anciens fichiers bruts sont supprimés après une rétention de 30 jours.",
        },
        {
          heading: "Stockage",
          body: "HDFS conserve les fichiers bruts compressés de GH Archive ainsi que l'état de checkpoint de Spark Streaming ; Apache HBase héberge six tables (événements live, métriques live, cache de langages, agrégats quotidiens et métadonnées de traitement), accessibles via Thrift depuis Spark et le dashboard. L'ensemble est conteneurisé avec Docker Compose, aux côtés d'un cluster Hadoop/Kafka/HBase.",
        },
        {
          heading: "Dashboard",
          body: "Un dashboard Streamlit interroge directement HBase (fréquence de rafraîchissement 5–60s, réglable) et affiche cinq panneaux live/batch : un classement des dépôts tendance en temps réel, un flux d'activité brute, l'évolution historique des stars par langage, une comparaison jour-sur-jour des langages en progression, et un top 10 classé par score de vélocité calculé en batch.",
        },
        {
          heading: "Échelle",
          body: "En conditions réelles, le pipeline a traité jusqu'à 7,35 Gio répartis sur 384 fichiers dans HDFS et enrichi 1 252 dépôts lors d'une seule exécution batch quotidienne, avec environ deux semaines d'historique de traitement continu.",
        },
      ],
      features: [
        "API GitHub Events interrogée toutes les 5s, filtrée sur les stars et forks, dédupliquée et résolue vers le dépôt parent avant publication sur Kafka",
        "Spark Structured Streaming consomme Kafka et écrit dans HBase via deux micro-batchs : 10s pour le flux live, 30s pour les fenêtres de tendance de 10 minutes",
        "DAG Airflow exécuté chaque jour à 2h00 UTC, chargeant l'archive GH Archive de la veille dans HDFS avec repli automatique fichier unique/fichiers horaires",
        "Job PySpark batch calculant la vélocité stars/forks jour-sur-jour via une fonction de fenêtrage avec lag, et enrichissant les langages via un repli cache/GraphQL/REST à 3 niveaux",
        "Réexécutions idempotentes via une table de métadonnées des jours traités, avec rétention HDFS de 30 jours et nettoyage automatique",
        "HDFS pour les fichiers bruts GH Archive et l'état de checkpoint du streaming ; 6 tables HBase accessibles via Thrift depuis Spark et le dashboard",
        "Entièrement conteneurisé avec Docker Compose, orchestrant Kafka, Airflow, Spark et Streamlit aux côtés d'un cluster Hadoop/HBase",
        "Dashboard Streamlit avec 5 panneaux live/batch : dépôts tendance, flux d'activité live, tendances historiques des stars, langages en progression, et classement par vélocité",
        "Traitement de 7,35 Gio répartis sur 384 fichiers dans HDFS et enrichissement de 1 252 dépôts lors d'une seule exécution batch quotidienne",
      ],
      featureGroups: [
        {
          heading: "Streaming temps réel",
          items: [
            "API GitHub Events interrogée toutes les 5s, filtrée sur les stars et forks, dédupliquée et résolue vers le dépôt parent avant publication sur Kafka",
            "Spark Structured Streaming consomme Kafka et écrit dans HBase via deux micro-batchs : 10s pour le flux live, 30s pour les fenêtres de tendance de 10 minutes",
          ],
        },
        {
          heading: "Traitement batch quotidien",
          items: [
            "DAG Airflow exécuté chaque jour à 2h00 UTC, chargeant l'archive GH Archive de la veille dans HDFS avec repli automatique fichier unique/fichiers horaires",
            "Job PySpark batch calculant la vélocité stars/forks jour-sur-jour via une fonction de fenêtrage avec lag, et enrichissant les langages via un repli cache/GraphQL/REST à 3 niveaux",
            "Réexécutions idempotentes via une table de métadonnées des jours traités, avec rétention HDFS de 30 jours et nettoyage automatique",
          ],
        },
        {
          heading: "Stockage & infrastructure",
          items: [
            "HDFS pour les fichiers bruts GH Archive et l'état de checkpoint du streaming ; 6 tables HBase accessibles via Thrift depuis Spark et le dashboard",
            "Entièrement conteneurisé avec Docker Compose, orchestrant Kafka, Airflow, Spark et Streamlit aux côtés d'un cluster Hadoop/HBase",
          ],
        },
        {
          heading: "Dashboard",
          items: [
            "Dashboard Streamlit avec 5 panneaux live/batch : dépôts tendance, flux d'activité live, tendances historiques des stars, langages en progression, et classement par vélocité",
          ],
        },
        {
          heading: "Échelle",
          items: [
            "Traitement de 7,35 Gio répartis sur 384 fichiers dans HDFS et enrichissement de 1 252 dépôts lors d'une seule exécution batch quotidienne",
          ],
        },
      ],
    },
  },
  {
    id: "real-estate-prediction",
    title: "Tunisian Real Estate Price Prediction",
    description:
      "A CRISP-DM data mining platform predicting Tunisian real estate prices from 25,646 cleaned listings, served through a React + FastAPI app with a RandomForest model (R²=0.88 rental, 0.73 sale).",
    fullDescription:
      "A CRISP-DM data mining platform predicting Tunisian real estate prices, built on 25,646 cleaned listings and served through a React + FastAPI web app backed by a RandomForest model.",
    fullDescriptionSections: [
      {
        heading: "The Problem",
        body: "Real estate makes up 60-70% of the average Tunisian household's wealth, yet the market is fragmented across platforms with no reliable price-estimation tools and a documented 5-15% gap between listed and real prices. The goal was a CRISP-DM-driven pipeline that predicts both rental and sale prices robustly enough to generalize across regions and property types.",
      },
      {
        heading: "Data Collection",
        body: "Listings were merged from three sources with very different quality levels: a public Kaggle dataset (9,296 listings, well-structured), a Tayara.tn scrape (~9,000 listings, noisy and dominated by out-of-scope property types, ultimately the weakest source), and a Mubawab.tn scrape (~15,000 listings — 8,000 sale + 7,000 rental — with GPS coordinates and structured fields, which became the backbone of the final dataset). Combined, this produced 31,169 raw listings across 24 governorates and 267 raw region spellings.",
      },
      {
        heading: "Cleaning & Feature Engineering",
        body: "A regex-based NLP layer recovers transaction type, surface, and room count from free-text descriptions when the structured fields are missing. Prices are cleaned with log-IQR outlier detection against business thresholds (200-20,000 TND/month for rentals, 40,000-5,000,000 TND for sales), and any remaining missing prices are imputed via Ward hierarchical clustering on the non-price features. Region spelling was collapsed from 300+ variants down to 239 canonical regions through string-similarity clustering, and 8 binary amenity flags (pool, garage, garden, terrace, elevator, furnished, heating, AC) were extracted from listing text. Six additional features were engineered — surface-per-room, bathroom ratio, room density, an amenity score, a luxury score, and a size category — before one-hot encoding and standard scaling. The final dataset: 25,646 listings (12,901 sale + 12,745 rental), 0% missing values, down from 31,169 raw (17.7% dropped during cleaning).",
      },
      {
        heading: "Modeling & Results",
        body: "Five algorithms (Ridge, RandomForest, GradientBoosting, XGBoost, LightGBM) were benchmarked as baselines separately for the rental and sale markets. RandomForest came out ahead on both: R²=0.88 on rentals (MAE 498 TND, ±0.001 across 3-fold CV — production-ready) and R²=0.73 on sales (MAE ~160,474 TND, MAPE 26.75% — narrowly short of the 0.75 target). Feature importance analysis showed surface alone accounts for 63.9% of the sale model's predictive power, pointing to missing variables (property age, condition, floor, view) as the main ceiling on sale-price accuracy rather than a modeling weakness.",
      },
      {
        heading: "Platform",
        body: "The trained models are served through a FastAPI backend (joblib-loaded RandomForest pipelines) behind REST endpoints for rent and sale prediction, plus a KNN-based 'similar properties' recommender. A React + Vite frontend provides a property form for instant price estimates. The whole stack — frontend, backend, PostgreSQL, and an MLflow tracking server — is containerized via Docker Compose.",
      },
    ],
    image: realestate1Image,
    screenshots: [realestate1Image, realestate2Image, realestate3Image],
    videoPath: realestateVideo,
    tags: ["FastAPI", "React", "Machine Learning", "MLflow", "Docker", "PostgreSQL", "Scikit-learn", "CRISP-DM"],
    category: ["ai", "fullstack"],
    githubUrl: "https://github.com/syrinesmati/Tunisan-Real-Estate-Price-Prediction-Platform",
    features: [
      "Merged 3 heterogeneous sources (Kaggle, Tayara.tn scrape, Mubawab.tn scrape) into 31,169 raw listings across 24 governorates",
      "Regex-based NLP imputation recovers transaction type, surface, and room count from free-text descriptions",
      "Region harmonization collapsed 300+ spelling variants into 239 canonical regions via string-similarity clustering",
      "Ward hierarchical clustering imputes missing prices from surface/rooms/region/property type, without leaking price into the clustering itself",
      "Benchmarked 5 algorithms (Ridge, RandomForest, GradientBoosting, XGBoost, LightGBM) separately for rental and sale markets",
      "RandomForest selected: R²=0.88 on rentals (MAE 498 TND) and R²=0.73 on sales (MAE ~160k TND), validated via 3-fold cross-validation",
      "Feature importance analysis identified surface as 63.9% of predictive power, flagging missing variables (age, condition, floor) as the main limiter on sale-price accuracy",
      "FastAPI backend serves the trained models via REST endpoints, plus a KNN-based 'similar properties' recommender",
      "React + Vite frontend with a property form for instant price estimates",
      "Containerized 5-service stack (frontend, backend, PostgreSQL, MLflow tracking server) via Docker Compose",
    ],
    featureGroups: [
      {
        heading: "Data Engineering",
        items: [
          "Merged 3 heterogeneous sources (Kaggle, Tayara.tn scrape, Mubawab.tn scrape) into 31,169 raw listings across 24 governorates",
          "Regex-based NLP imputation recovers transaction type, surface, and room count from free-text descriptions",
          "Region harmonization collapsed 300+ spelling variants into 239 canonical regions via string-similarity clustering",
          "Ward hierarchical clustering imputes missing prices from surface/rooms/region/property type, without leaking price into the clustering itself",
        ],
      },
      {
        heading: "Modeling",
        items: [
          "Benchmarked 5 algorithms (Ridge, RandomForest, GradientBoosting, XGBoost, LightGBM) separately for rental and sale markets",
          "RandomForest selected: R²=0.88 on rentals (MAE 498 TND) and R²=0.73 on sales (MAE ~160k TND), validated via 3-fold cross-validation",
          "Feature importance analysis identified surface as 63.9% of predictive power, flagging missing variables (age, condition, floor) as the main limiter on sale-price accuracy",
        ],
      },
      {
        heading: "Platform",
        items: [
          "FastAPI backend serves the trained models via REST endpoints, plus a KNN-based 'similar properties' recommender",
          "React + Vite frontend with a property form for instant price estimates",
          "Containerized 5-service stack (frontend, backend, PostgreSQL, MLflow tracking server) via Docker Compose",
        ],
      },
    ],
    fr: {
      description:
        "Plateforme de data mining CRISP-DM prédisant les prix immobiliers tunisiens à partir de 25 646 annonces nettoyées, servie via une app React + FastAPI avec un modèle RandomForest (R²=0,88 location, 0,73 vente).",
      fullDescription:
        "Une plateforme de data mining CRISP-DM prédisant les prix immobiliers tunisiens, construite sur 25 646 annonces nettoyées et servie via une application React + FastAPI adossée à un modèle RandomForest.",
      fullDescriptionSections: [
        {
          heading: "Le problème",
          body: "L'immobilier représente 60 à 70 % du patrimoine moyen des ménages tunisiens, mais le marché est fragmenté entre plateformes, sans outil d'estimation fiable, avec un écart documenté de 5 à 15 % entre prix affiché et prix réel. L'objectif était un pipeline piloté par la méthodologie CRISP-DM, capable de prédire les prix de location et de vente de façon robuste, en généralisant à travers les régions et les types de biens.",
        },
        {
          heading: "Collecte des données",
          body: "Les annonces ont été fusionnées depuis trois sources de qualité très différente : un dataset public Kaggle (9 296 annonces, bien structuré), un scraping de Tayara.tn (~9 000 annonces, bruitées et dominées par des types de biens hors périmètre, la source la plus faible), et un scraping de Mubawab.tn (~15 000 annonces — 8 000 ventes + 7 000 locations — avec coordonnées GPS et champs structurés, devenu l'ossature du dataset final). Au total, 31 169 annonces brutes réparties sur 24 gouvernorats et 267 orthographes de régions différentes.",
        },
        {
          heading: "Nettoyage et feature engineering",
          body: "Une couche NLP basée sur des règles (regex) récupère le type de transaction, la surface et le nombre de pièces depuis le texte libre lorsque les champs structurés sont absents. Les prix sont nettoyés par détection d'outliers log-IQR selon des seuils métier (200 à 20 000 TND/mois pour la location, 40 000 à 5 000 000 TND pour la vente), et les prix manquants restants sont imputés via un clustering hiérarchique de Ward sur les variables hors prix. L'orthographe des régions a été ramenée de plus de 300 variantes à 239 régions canoniques via un clustering par similarité de chaînes, et 8 indicateurs binaires d'équipements (piscine, garage, jardin, terrasse, ascenseur, meublé, chauffage, climatisation) ont été extraits du texte des annonces. Six features supplémentaires ont été créées — surface par pièce, ratio de salles de bain, densité de pièces, score d'équipements, score de luxe et catégorie de taille — avant encodage one-hot et standardisation. Dataset final : 25 646 annonces (12 901 ventes + 12 745 locations), 0 % de valeurs manquantes, contre 31 169 annonces brutes (17,7 % écartées lors du nettoyage).",
        },
        {
          heading: "Modélisation et résultats",
          body: "Cinq algorithmes (Ridge, RandomForest, GradientBoosting, XGBoost, LightGBM) ont été comparés en baseline, séparément pour les marchés de location et de vente. RandomForest s'est imposé sur les deux : R²=0,88 en location (MAE 498 TND, ±0,001 en validation croisée 3-fold — prêt pour la production) et R²=0,73 en vente (MAE ~160 474 TND, MAPE 26,75 % — légèrement sous l'objectif de 0,75). L'analyse de feature importance montre que la surface représente seule 63,9 % du pouvoir prédictif du modèle de vente, ce qui pointe vers des variables manquantes (âge du bien, état, étage, vue) comme principale limite, plutôt qu'une faiblesse de modélisation.",
        },
        {
          heading: "Plateforme",
          body: "Les modèles entraînés sont servis par un backend FastAPI (pipelines RandomForest chargés via joblib) exposant des endpoints REST de prédiction location/vente, ainsi qu'un recommandeur de « biens similaires » basé sur KNN. Un frontend React + Vite propose un formulaire de saisie pour obtenir une estimation instantanée. L'ensemble — frontend, backend, PostgreSQL et un serveur de suivi MLflow — est conteneurisé via Docker Compose.",
        },
      ],
      features: [
        "Fusion de 3 sources hétérogènes (Kaggle, scraping Tayara.tn, scraping Mubawab.tn) en 31 169 annonces brutes sur 24 gouvernorats",
        "Imputation NLP par regex récupérant le type de transaction, la surface et le nombre de pièces depuis les descriptions en texte libre",
        "Harmonisation des régions : plus de 300 variantes orthographiques ramenées à 239 régions canoniques via clustering par similarité de chaînes",
        "Clustering hiérarchique de Ward pour imputer les prix manquants à partir de la surface/pièces/région/type de bien, sans fuite du prix dans le clustering",
        "Comparaison de 5 algorithmes (Ridge, RandomForest, GradientBoosting, XGBoost, LightGBM) séparément pour les marchés location et vente",
        "RandomForest retenu : R²=0,88 en location (MAE 498 TND) et R²=0,73 en vente (MAE ~160k TND), validé par validation croisée 3-fold",
        "Analyse de feature importance : la surface représente 63,9 % du pouvoir prédictif, désignant les variables manquantes (âge, état, étage) comme principale limite en vente",
        "Backend FastAPI exposant les modèles entraînés via des endpoints REST, avec un recommandeur de biens similaires basé sur KNN",
        "Frontend React + Vite avec un formulaire de saisie pour une estimation de prix instantanée",
        "Stack conteneurisée en 5 services (frontend, backend, PostgreSQL, serveur de suivi MLflow) via Docker Compose",
      ],
      featureGroups: [
        {
          heading: "Ingénierie des données",
          items: [
            "Fusion de 3 sources hétérogènes (Kaggle, scraping Tayara.tn, scraping Mubawab.tn) en 31 169 annonces brutes sur 24 gouvernorats",
            "Imputation NLP par regex récupérant le type de transaction, la surface et le nombre de pièces depuis les descriptions en texte libre",
            "Harmonisation des régions : plus de 300 variantes orthographiques ramenées à 239 régions canoniques via clustering par similarité de chaînes",
            "Clustering hiérarchique de Ward pour imputer les prix manquants à partir de la surface/pièces/région/type de bien, sans fuite du prix dans le clustering",
          ],
        },
        {
          heading: "Modélisation",
          items: [
            "Comparaison de 5 algorithmes (Ridge, RandomForest, GradientBoosting, XGBoost, LightGBM) séparément pour les marchés location et vente",
            "RandomForest retenu : R²=0,88 en location (MAE 498 TND) et R²=0,73 en vente (MAE ~160k TND), validé par validation croisée 3-fold",
            "Analyse de feature importance : la surface représente 63,9 % du pouvoir prédictif, désignant les variables manquantes (âge, état, étage) comme principale limite en vente",
          ],
        },
        {
          heading: "Plateforme",
          items: [
            "Backend FastAPI exposant les modèles entraînés via des endpoints REST, avec un recommandeur de biens similaires basé sur KNN",
            "Frontend React + Vite avec un formulaire de saisie pour une estimation de prix instantanée",
            "Stack conteneurisée en 5 services (frontend, backend, PostgreSQL, serveur de suivi MLflow) via Docker Compose",
          ],
        },
      ],
    },
  },
  {
    id: "odoo-recommender",
    title: "Odoo Recommender System",
    description:
      "A hybrid product recommendation engine — combining customer profiling, collaborative filtering, and item similarity — built during a software engineering internship and packaged as a custom Odoo 17 module.",
    fullDescription:
      "The Odoo Recommender System is a hybrid recommendation engine built during a software engineering internship and packaged as a custom Odoo 17 module.",
    fullDescriptionSections: [
      {
        heading: "The Problem",
        body: "Odoo's built-in product suggestions are limited to generic rules (similar products, generic history), with no real personalization by customer profile. The goal was to build a genuine recommendation engine that could personalize both the homepage and product pages using the customer and purchase data already sitting in the ERP.",
      },
      {
        heading: "Two Recommendation Engines",
        body: "A homepage engine personalizes the storefront as soon as a customer logs in, fusing two signals: explicit profiling (age, gender, and RFM-style purchase recency/frequency/monetary scores compared via cosine similarity) and latent profiling (Non-negative Matrix Factorization over the user-item interaction matrix). Recommendations are drawn from the products most purchased by the 10 most similar customers. A separate product-page engine suggests similar or complementary items on each product sheet, fusing content-based similarity (category, style, target gender — one-hot encoded), co-purchase frequency, and NMF-derived interaction similarity into a single ranked matrix.",
      },
      {
        heading: "Synthetic Data",
        body: "With no production data available, a synthetic dataset generator produced realistic customers, products, orders, and clickstream events — respecting plausible correlations (age and gender influencing style/category preferences) — mapped directly onto Odoo's own data models (res.partner, product.template, sale.order, website.track) so the engine could be trained and demoed end-to-end without touching real customer data.",
      },
      {
        heading: "Odoo Integration",
        body: "The engine is packaged as a custom Odoo 17 module (recommendation algorithms, controllers, and views) with an admin settings panel under Website → Settings that lets store admins independently enable each engine and tune how many recommendations are shown — no code changes required. Live recommendation carousels render directly on the homepage and product pages via Odoo's native QWeb views.",
      },
      {
        heading: "Honest Limitations",
        body: "Since the engine was trained and demoed exclusively on synthetic data, no formal quantitative metrics (precision, recall, click-through rate) were measured — only a qualitative review of recommendation diversity and coherence. Validating against real purchase and interaction data is the natural next step.",
      },
    ],
    image: recommenderImage,
    screenshots: [recommenderImage, recommenderImage1, recommenderImage2, recommenderImage3],
    videoPath: odooVideo,
    tags: ["Odoo", "Python", "Scikit-learn", "PostgreSQL", "Recommender Systems", "Machine Learning"],
    category: ["ai"],
    features: [
      "Hybrid homepage engine: fuses explicit profiling (age, gender, RFM cosine similarity) with latent NMF factorization of the user-item interaction matrix",
      "Hybrid product-page engine: fuses content-based similarity (category/style/gender), co-purchase frequency, and NMF-derived interaction similarity into a single ranked matrix",
      "Synthetic dataset generator producing customers, products, orders, and clickstream data mapped directly onto Odoo's res.partner / product.template / sale.order / website.track models",
      "Packaged as a custom Odoo 17 module with an admin settings panel (Website → Settings) to toggle each engine and tune recommendation counts without code changes",
      "Live recommendation carousels rendered on both the homepage and product pages via Odoo's native QWeb views",
      "Evaluated qualitatively for coherence and diversity, since production click/purchase data wasn't available for formal precision/recall metrics",
    ],
    featureGroups: [
      {
        heading: "Recommendation Engines",
        items: [
          "Hybrid homepage engine: fuses explicit profiling (age, gender, RFM cosine similarity) with latent NMF factorization of the user-item interaction matrix",
          "Hybrid product-page engine: fuses content-based similarity (category/style/gender), co-purchase frequency, and NMF-derived interaction similarity into a single ranked matrix",
        ],
      },
      {
        heading: "Data & Integration",
        items: [
          "Synthetic dataset generator producing customers, products, orders, and clickstream data mapped directly onto Odoo's res.partner / product.template / sale.order / website.track models",
          "Packaged as a custom Odoo 17 module with an admin settings panel (Website → Settings) to toggle each engine and tune recommendation counts without code changes",
          "Live recommendation carousels rendered on both the homepage and product pages via Odoo's native QWeb views",
        ],
      },
      {
        heading: "Evaluation",
        items: [
          "Evaluated qualitatively for coherence and diversity, since production click/purchase data wasn't available for formal precision/recall metrics",
        ],
      },
    ],
    fr: {
      description:
        "Moteur de recommandation hybride — combinant profilage client, filtrage collaboratif et similarité produit — développé durant un stage d'ingénierie logicielle et packagé en module Odoo 17.",
      fullDescription:
        "Le système de recommandation Odoo est un moteur hybride développé durant un stage d'ingénierie logicielle et packagé sous forme de module Odoo 17 personnalisé.",
      fullDescriptionSections: [
        {
          heading: "Le problème",
          body: "Les suggestions de produits natives d'Odoo restent limitées à des règles génériques (produits similaires, historique générique), sans réelle personnalisation par profil client. L'objectif était de construire un véritable moteur de recommandation exploitant les données clients et d'achat déjà présentes dans l'ERP, pour personnaliser à la fois la page d'accueil et les pages produits.",
        },
        {
          heading: "Deux moteurs de recommandation",
          body: "Un moteur d'accueil personnalise la page dès la connexion du client, en fusionnant deux signaux : un profilage explicite (âge, sexe, scores RFM comparés par cosine similarity) et un profilage latent (factorisation NMF de la matrice d'interactions utilisateur-produit). Les recommandations proviennent des produits les plus achetés par les 10 clients les plus similaires. Un second moteur, dédié à la fiche produit, suggère des articles similaires ou complémentaires en fusionnant similarité de contenu (catégorie, style, genre cible — encodés en one-hot), fréquence de co-achat, et similarité d'interaction dérivée par NMF, en une seule matrice classée.",
        },
        {
          heading: "Données synthétiques",
          body: "En l'absence de données de production, un générateur de données synthétiques a produit des clients, produits, commandes et événements de clic réalistes — respectant des corrélations plausibles (âge et sexe influençant les préférences de style/catégorie) — mappés directement sur les modèles Odoo (res.partner, product.template, sale.order, website.track), permettant d'entraîner et de démontrer le moteur de bout en bout sans toucher à de vraies données clients.",
        },
        {
          heading: "Intégration Odoo",
          body: "Le moteur est packagé en module Odoo 17 personnalisé (algorithmes, contrôleurs, vues) avec un panneau de configuration dans Website → Settings permettant aux administrateurs d'activer chaque moteur indépendamment et d'ajuster le nombre de recommandations affichées, sans toucher au code. Des carrousels de recommandations s'affichent en direct sur la page d'accueil et les fiches produits via les vues QWeb natives d'Odoo.",
        },
        {
          heading: "Limites, en toute honnêteté",
          body: "Le moteur ayant été entraîné et démontré exclusivement sur des données synthétiques, aucune métrique quantitative formelle (précision, rappel, taux de clic) n'a été mesurée — seulement une revue qualitative de la diversité et de la cohérence des recommandations. La validation sur de vraies données d'achat et d'interaction reste la prochaine étape naturelle.",
        },
      ],
      features: [
        "Moteur d'accueil hybride : fusionne profilage explicite (âge, sexe, cosine similarity RFM) et factorisation NMF latente de la matrice utilisateur-produit",
        "Moteur produit hybride : fusionne similarité de contenu (catégorie/style/genre), fréquence de co-achat et similarité d'interaction NMF en une matrice unique",
        "Générateur de données synthétiques (clients, produits, commandes, clics) mappé directement sur les modèles Odoo res.partner / product.template / sale.order / website.track",
        "Packagé en module Odoo 17 personnalisé avec panneau de configuration (Website → Settings) pour activer chaque moteur et ajuster le nombre de recommandations, sans code",
        "Carrousels de recommandations affichés en direct sur la page d'accueil et les fiches produits via les vues QWeb natives d'Odoo",
        "Évalué qualitativement pour sa cohérence et sa diversité, en l'absence de données de clic/achat réelles pour des métriques de précision/rappel formelles",
      ],
      featureGroups: [
        {
          heading: "Moteurs de recommandation",
          items: [
            "Moteur d'accueil hybride : fusionne profilage explicite (âge, sexe, cosine similarity RFM) et factorisation NMF latente de la matrice utilisateur-produit",
            "Moteur produit hybride : fusionne similarité de contenu (catégorie/style/genre), fréquence de co-achat et similarité d'interaction NMF en une matrice unique",
          ],
        },
        {
          heading: "Données & intégration",
          items: [
            "Générateur de données synthétiques (clients, produits, commandes, clics) mappé directement sur les modèles Odoo res.partner / product.template / sale.order / website.track",
            "Packagé en module Odoo 17 personnalisé avec panneau de configuration (Website → Settings) pour activer chaque moteur et ajuster le nombre de recommandations, sans code",
            "Carrousels de recommandations affichés en direct sur la page d'accueil et les fiches produits via les vues QWeb natives d'Odoo",
          ],
        },
        {
          heading: "Évaluation",
          items: [
            "Évalué qualitativement pour sa cohérence et sa diversité, en l'absence de données de clic/achat réelles pour des métriques de précision/rappel formelles",
          ],
        },
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
