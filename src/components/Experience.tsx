import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import guepardLogo from "@/assets/guepard.png";
import welyneLogo from "@/assets/WelyneLogo.png";
import yonnovLogo from "@/assets/YonnovLogo.png";

const Experience = () => {
  const experiences = [
    {
      logo: guepardLogo,
      title: "AI Intern",
      organization: "Guepard",
      location: "Tunisia",
      period: "Feb 2026 – Present",
      description:
        "Working on the optimization of the semantic layer for Qwery, an AI-powered NL-to-SQL data analytics platform. Designing semantic disambiguation mechanisms to map user intents to business concepts and database schemas.",
      technologies: ["NLP", "NL-to-SQL", "Semantic Layer", "AI Analytics"],
      type: "work",
    },
    {
      logo: welyneLogo,
      title: "AI Intern",
      organization: "Welyne",
      location: "Ariana, Tunisia",
      period: "July 2025 – September 2025",
      description:"Improved a deep learning model that predicts arm length from biometric features such as gender, height, and weight by optimizing the model architecture, data preprocessing, and hyperparameters to enhance accuracy and generalization.",      
      technologies: ["Deep Learning"],
      type: "work",
    },
    {
      logo: yonnovLogo,
      title: "AI Intern",
      organization: "Yonnov'IA",
      location: "Marseilles, France (Remote)",
      period: "June 2025 – August 2025",
      description:
        "Designed a modular AI-based recommender system for Odoo eCommerce, improving recommendation relevance by +30% through hybrid collaborative and content-based filtering. Reduced cold-start impact by generating synthetic datasets for 1,000+ products.",
      technologies: ["Odoo", "Recommender Systems", "Collaborative Filtering", "Content-based Filtering"],
      type: "work",
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A journey of learning and growth
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20" />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 w-6 h-6 bg-primary/80 rounded-full border-4 border-background z-10 shadow-md" />

                  {/* Experience Card */}
                  <div
                    className={`mt-10 w-full md:w-[48%] ${
                      isLeft
                        ? "md:mr-auto md:pl-0 md:pr-10"
                        : "md:ml-auto md:pl-10 md:pr-0"
                    }`}
                  >
                    <Card className="card-gradient border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500 p-2">
                      <CardContent className="p-8 space-y-4">
                        {/* Header Row */}
                        <div className="flex items-start gap-6">
                          {/* Logo */}
                          <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center overflow-hidden border border-primary/30 shadow-md">
                            <img
                              src={exp.logo}
                              alt={`${exp.organization} logo`}
                              className="w-full h-full object-contain p-3"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.parentElement!.innerHTML =
                                  '<span class="text-2xl font-bold text-muted-foreground">' +
                                  exp.organization.substring(0, 2).toUpperCase() +
                                  "</span>";
                              }}
                            />
                          </div>

                          {/* Title and Date */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-2xl font-semibold">
                                {exp.title}
                              </h3>
                              <span className="text-sm text-accent font-medium bg-accent/10 px-4 py-1 rounded-full border border-accent/20 shadow-sm">
                                {exp.period}
                              </span>
                            </div>
                            <p className="text-muted-foreground font-medium">
                              {exp.organization}
                            </p>
                          </div>
                        </div>

                        {/* Full Width Description */}
                        <div>
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                        </div>

                        {/* Technology Badges */}
                        {exp.technologies && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="text-xs font-medium px-3 py-1 rounded-full bg-turquoise/10 text-turquoise border border-turquoise/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
