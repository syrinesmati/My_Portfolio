import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Database,
  GitBranch,
  Brain,
  BarChart3,
  Settings,
  MessageSquare,
} from "lucide-react";

type SkillGroup = "AI & Machine Learning" | "Data & MLOps" | "Software Engineering" | "Professional";

interface SkillCategory {
  icon: typeof Brain;
  title: string;
  group: SkillGroup;
  skills: string[];
  emoji: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Brain,
    emoji: "🤖",
    title: "ML Frameworks",
    group: "AI & Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost", "LightGBM"],
  },
  {
    icon: Brain,
    emoji: "📐",
    title: "ML Techniques",
    group: "AI & Machine Learning",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Cross-validation",
      "Bayesian Optimization",
    ],
  },
  {
    icon: Brain,
    emoji: "⚡",
    title: "Deep Learning",
    group: "AI & Machine Learning",
    skills: [
      "CNNs / RNNs",
      "Transformers",
      "Transfer Learning",
      "Fine-tuning LLMs",
      "PyTorch Lightning",
      "Hugging Face",
    ],
  },
  {
    icon: Brain,
    emoji: "💬",
    title: "NLP",
    group: "AI & Machine Learning",
    skills: ["Tokenization", "Word2Vec", "GloVe", "LLMs", "Hugging Face Transformers"],
  },
  {
    icon: Brain,
    emoji: "👁",
    title: "Computer Vision",
    group: "AI & Machine Learning",
    skills: ["Image Classification", "Object Detection", "OpenCV", "ResNet", "YOLO"],
  },
  {
    icon: Database,
    emoji: "🔧",
    title: "Data Engineering",
    group: "Data & MLOps",
    skills: ["Apache Spark", "Apache Kafka", "Apache Airflow", "Apache HBase", "ETL Pipelines", "Data Warehousing"],
  },
  {
    icon: Settings,
    emoji: "🚀",
    title: "MLOps & Deployment",
    group: "Data & MLOps",
    skills: ["FastAPI", "Docker", "Kubernetes", "CI/CD Pipelines", "MLflow", "Terraform", "Pulumi"],
  },
  {
    icon: BarChart3,
    emoji: "📈",
    title: "Data Visualization",
    group: "Data & MLOps",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Streamlit"],
  },
  {
    icon: Code,
    emoji: "🖥",
    title: "Fullstack Development",
    group: "Software Engineering",
    skills: ["React", "Next.js", "NestJS", "Odoo", "Angular", "Dotnet (C#)", "FastAPI", "Flutter"],
  },
  {
    icon: Database,
    emoji: "🗄",
    title: "Databases",
    group: "Software Engineering",
    skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Cassandra", "Neo4j", "Apache HBase"],
  },
  {
    icon: GitBranch,
    emoji: "🎨",
    title: "Dev Tools & Design",
    group: "Software Engineering",
    skills: ["Git", "GitHub", "Figma", "Adobe XD"],
  },
  {
    icon: Layout,
    emoji: "💡",
    title: "Soft Skills",
    group: "Professional",
    skills: [
      "Problem-solving",
      "Technical Communication",
      "Research & Critical Thinking",
      "Agile",
      "Teamwork",
    ],
  },
];

const groupedSections: { title: SkillGroup; subtitle: string }[] = [
  {
    title: "AI & Machine Learning",
    subtitle: "Core modeling, deep learning, NLP and computer vision",
  },
  {
    title: "Data & MLOps",
    subtitle: "Production pipelines, deployment and monitoring",
  },
  {
    title: "Software Engineering",
    subtitle: "Application development, databases and design",
  },
  {
    title: "Professional",
    subtitle: "Collaboration and communication strengths",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background glow orbs */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 480,
          height: 480,
          top: -80,
          right: -100,
          background: "hsl(330 81% 60%)",
          filter: "blur(120px)",
          opacity: 0.07,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 360,
          height: 360,
          bottom: "10%",
          left: -80,
          background: "hsl(280 70% 50%)",
          filter: "blur(100px)",
          opacity: 0.07,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14 animate-fade-in"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Groups */}
        <div className="space-y-14 max-w-6xl mx-auto">
          {groupedSections.map((section, sectionIndex) => {
            const sectionCategories = skillCategories.filter(
              (c) => c.group === section.title
            );

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sectionIndex * 0.08 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                {/* Group separator */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex-1 h-px"
                    style={{
                        background:
                        "linear-gradient(to right, hsl(var(--primary) / 0.35), transparent)",
                    }}
                  />
                  <div
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
                    style={{
                        background: "hsl(var(--primary) / 0.1)",
                        borderColor: "hsl(var(--primary) / 0.2)",
                        color: "hsl(var(--primary))",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "hsl(var(--primary))" }}
                    />
                    {section.title}
                  </div>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(to left, hsl(var(--primary) / 0.15), transparent)",
                    }}
                  />
                </div>

                <p className="text-center text-base text-muted-foreground">
                  {section.subtitle}
                </p>

                {/* Cards grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectionCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.07 }}
                      viewport={{ once: true }}
                    >
                      <Card className="card-gradient border-primary/20 card-interactive group cursor-default h-full relative overflow-hidden">
                        {/* Top shimmer line on hover */}
                        <div
                          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background:
                              "linear-gradient(to right, transparent, hsl(330 81% 60% / 0.5), transparent)",
                          }}
                        />

                        <CardContent className="p-6">
                          {/* Icon */}
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                            style={{
                              background: "hsl(var(--primary) / 0.1)",
                              border: "1px solid hsl(var(--primary) / 0.2)",
                            }}
                          >
                            {category.emoji}
                          </div>

                          {/* Title */}
                          <h4 className="text-lg font-semibold mb-3 text-foreground tracking-tight">
                            {category.title}
                          </h4>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {category.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="text-sm px-3 py-1 rounded-full transition-colors duration-200"
                                style={{
                                  background: "hsl(var(--primary) / 0.1)",
                                  border: "1px solid hsl(var(--primary) / 0.2)",
                                  color: "hsl(var(--primary))",
                                }}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;