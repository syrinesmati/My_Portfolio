import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, Palette, Brain, Rocket, Download } from "lucide-react";
import cvFrFile from "@/assets/documents/cv-syrine-smati-fr.pdf";
import cvEnFile from "@/assets/documents/cv-syrine-smati-eng.pdf";
import DevIdCard from "@/components/DevIdCard";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { isFrench } = useLanguage();
  const cvFile = isFrench ? cvFrFile : cvEnFile;
  const cvDownloadName = isFrench ? "cv-syrine-smati-fr.pdf" : "cv-syrine-smati-eng.pdf";

  const highlights = [
    {
      icon: Code2,
      title: isFrench ? "Code propre" : "Clean Code",
      description: isFrench
        ? "J'écris un code lisible, maintenable et bien structuré."
        : "I write readable, maintainable, and well-structured code.",
    },
    {
      icon: Brain,
      title: isFrench ? "Esprit analytique" : "Problem Solver",
      description: isFrench
        ? "J'aime décomposer des problèmes complexes en solutions simples."
        : "I enjoy breaking down complex problems into simple solutions.",
    },
    {
      icon: Rocket,
      title: isFrench ? "Apprentissage rapide" : "Fast Learner",
      description: isFrench
        ? "Je m'adapte rapidement aux nouvelles technologies et outils."
        : "I quickly adapt to new technologies and tools.",
    },
    {
      icon: Palette,
      title: isFrench ? "Sens du design" : "Design-Minded",
      description: isFrench
        ? "Je porte une attention particulière à l'expérience utilisateur."
        : "I care deeply about crafting a great user experience.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="eyebrow mb-3">{isFrench ? "À propos de Syrine" : "About Syrine"}</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {isFrench ? "Concevoir l’intelligence, " : "Building Intelligent Things "}
              <span className="font-accent-italic text-warm">
                {isFrench ? "créer de l’impact." : "that matter."}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              {isFrench
                ? "Élève ingénieure en informatique spécialisée en intelligence artificielle, je conçois des systèmes intelligents pour transformer des problèmes complexes en solutions concrètes."
                : "AI-focused software engineering student passionate about building intelligent systems that turn complex problems into practical solutions."}
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_300px] gap-8 max-w-5xl mx-auto mb-14 items-center">
            <Card className="card-soft">
              <CardContent className="p-8 space-y-4">
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {isFrench
                    ? "Bonjour, je suis Syrine, élève ingénieure en informatique passionnée par la conception de systèmes d’IA capables de résoudre des problèmes concrets. Je travaille sur les LLM, les workflows agentiques, le RAG, la vision par ordinateur et le machine learning. Du développement de workflows d’IA en production à la création d’applications intelligentes de bout en bout, j’aime transformer des idées complexes en solutions fiables et utiles. "
                    : "Hi, I'm Syrine — a software engineering student passionate about building AI systems that solve real-world problems. My work spans LLMs, agentic workflows, retrieval-augmented generation (RAG), computer vision, and machine learning. From developing production AI workflows to building end-to-end intelligent applications, I enjoy turning complex ideas into reliable, practical solutions. "}
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {isFrench
                    ? "Toujours curieuse d’explorer de nouvelles technologies, j’aime expérimenter, apprendre et concevoir des systèmes qui ont un impact réel."
                    : "I'm always exploring new technologies, experimenting with ideas, and pushing myself to build systems that make a difference."}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button size="lg" asChild>
                    <a href="#contact">{isFrench ? "Me contacter" : "Get in Touch"}</a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={cvFile} download={cvDownloadName}>
                      <Download className="mr-2 h-5 w-5" />
                      {isFrench ? "CV" : "Resume"}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <DevIdCard />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Card className="card-soft card-interactive h-full">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-9 h-9 mx-auto mb-4 text-primary" />
                    <h3 className="text-base font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
