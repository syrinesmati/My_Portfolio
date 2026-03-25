import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, Palette, Brain, Rocket, Download } from "lucide-react";
import cvFile from "@/assets/CV_syrinesmati.pdf";

const About = () => {
  const highlights = [
  
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate software engineering student dedicated to creating innovative solutions and bringing ideas to life through code.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="card-gradient border-primary/20">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-4">
                  Hi! I'm Syrine Smati, a passionate software engineering student who loves turning ideas into real, impactful applications. I specialize in AI development and full-stack web applications combining creativity with technical expertise to deliver seamless solutions.                
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  I enjoy exploring new technologies, building innovative projects, and continuously learning to stay at the forefront of the software world. When I'm not coding, you can find me exploring ways technology can make life easier.
                </p>
                <p className="text-lg leading-relaxed">                
                  I thrive on solving challenging problems, collaborating with others, and creating digital experiences that are not just functional but also meaningful.
                </p>
                <div className="flex flex-wrap gap-4 mt-6 justify-center">
                  <Button size="lg" className="glow">
                    <a href="#contact" className="flex items-center gap-2">
                      Get in Touch
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={cvFile} download="CV_syrinesmati.pdf">
                      <Download className="mr-2 h-5 w-5" />
                      Resume
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-primary/20 card-interactive group cursor-pointer h-full">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
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
