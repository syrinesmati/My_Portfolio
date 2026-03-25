import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code, Layout, Database, GitBranch, Smartphone, Brain } from "lucide-react";

const Skills = () => {

  
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & ML",
      skills: ["Pytorch", "SickitLearn", "TensorFlow", "Keras", "CNNs", "RAG", "LLMs"],
    },
    {
      icon: Code,
      title: "Fullstack Development",
      skills: ["React", "Next.js", "NestJS","Odoo", "Angular","Dotnet(C#)","FastAPI", "Flutter"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis", "MongoDB","Cassandra", "Neo4j",],
    },
    {
      icon: GitBranch,
      title: "Development Tools",
      skills: ["Git", "GitHub", "Kubernetes", "Docker", "CI/CD"],
    },
    
    {
      icon: Layout,
      title: "UI/UX Design",
      skills: ["Figma", "Adobe XD"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-primary/20 card-interactive group cursor-pointer h-full">
                <CardContent className="p-6">
                  <category.icon className="w-10 h-10 mb-4 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
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
      </div>
    </section>
  );
};

export default Skills;
