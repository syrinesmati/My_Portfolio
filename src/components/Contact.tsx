import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import SectionGlowBackground from "@/components/SectionGlowBackground";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { isFrench } = useLanguage();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <SectionGlowBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {isFrench ? "Restons en " : "Get in "}
            <span className="text-gradient">{isFrench ? "contact" : "Touch"}</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            {isFrench ? "Créons quelque chose d'incroyable ensemble" : "Let's create something amazing together"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-gradient border-primary/20 card-interactive group cursor-pointer h-full">
              <CardHeader>
                <CardTitle>{isFrench ? "Informations de contact" : "Contact Information"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <a href="mailto:syrinesmati28@gmail.com" className="break-all hover:text-primary transition-colors">
                    syrinesmati28@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <a href="tel:+21651054359" className="hover:text-primary transition-colors">
                    +216 51 054 359
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <span>Tunis, Tunisia</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-gradient border-primary/20 card-interactive group cursor-pointer h-full">
              <CardHeader>
                <CardTitle>{isFrench ? "Retrouvez-moi" : "Connect with Me"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://github.com/syrinesmati" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://www.linkedin.com/in/syrine-smati-a613702b4/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
