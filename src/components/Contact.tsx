import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import RotatingBadge from "@/components/RotatingBadge";

const Contact = () => {
  const { isFrench } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-6 mb-12 animate-fade-in">
          <div>
            <p className="eyebrow mb-3">{isFrench ? "Me contacter" : "Let's connect"}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {isFrench ? "Construisons " : "Let's build "}
              <span className="font-accent-italic text-warm">{isFrench ? "quelque chose." : "something real."}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mt-3">
              {isFrench ? "Toujours ouverte aux opportunités et collaborations" : "Open to opportunities, internships, and collaborations"}
            </p>
          </div>
          <RotatingBadge text={isFrench ? "écrivez-moi · écrivez-moi · " : "say hello · say hello · "} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="card-soft card-interactive h-full tint-warm">
              <CardHeader>
                <CardTitle>{isFrench ? "Informations de contact" : "Contact Information"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-warm" />
                  <a href="mailto:syrinesmati28@gmail.com" className="break-all hover:text-warm transition-colors">
                    syrinesmati28@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-warm" />
                  <a href="tel:+21651054359" className="hover:text-warm transition-colors">
                    +216 51 054 359
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-warm" />
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
            <Card className="card-soft card-interactive h-full tint-cool">
              <CardHeader>
                <CardTitle>{isFrench ? "Retrouvez-moi" : "Connect with Me"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-between bg-background/60 border-0 text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="https://github.com/syrinesmati" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center"><Github className="mr-2 h-5 w-5" />GitHub</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-between bg-background/60 border-0 text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                  <a href="https://www.linkedin.com/in/syrine-smati-a613702b4/" target="_blank" rel="noopener noreferrer">
                    <span className="flex items-center"><Linkedin className="mr-2 h-5 w-5" />LinkedIn</span>
                    <ArrowUpRight className="h-4 w-4" />
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
