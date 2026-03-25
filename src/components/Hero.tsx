import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-gradient">Syrine Smati</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              Software Engineering Student
            </p>
            <p className="text-xl md:text-2xl text-gradient font-semibold">
              Bringing Ideas into Code
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Building intelligent applications and crafting end-to-end solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow">
                <a href="#about">
                  View More
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <img
                src={profileImage}
                alt="Syrine Smati"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary glow animate-float"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
