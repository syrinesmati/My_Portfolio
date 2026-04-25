import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import SectionGlowBackground from "@/components/SectionGlowBackground";
import { useLanguage } from "@/contexts/LanguageContext";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  expectedGraduation?: string;
  gpa?: string;
}

const Education = () => {
  const { isFrench } = useLanguage();

  const education: EducationItem[] = isFrench
    ? [
        {
          degree: "Cycle d'ingenieur en genie logiciel",
          institution: "Institut National des Sciences Appliquees et de Technologie (INSAT)",
          location: "Tunisie",
          period: "Sep 2024 - Present",
          expectedGraduation: "2027",
          description:
            "Programme avance en genie logiciel axe sur le developpement professionnel et les pratiques d'ingenierie modernes.",
          highlights: [
            "Specialisation Genie Logiciel",
            "Architecture et conception de systemes",
            "Formation orientee industrie",
          ],
        },
        {
          degree: "Cycle preparatoire en mathematiques, physique et informatique",
          institution: "Institut National des Sciences Appliquees et de Technologie (INSAT)",
          location: "Tunisie",
          period: "Sep 2022 - Juin 2024",
          description:
            "Formation fondamentale en mathematiques, physique et informatique pour preparer le cycle d'ingenieur.",
          highlights: [
            "Base solide en maths, physique et informatique",
            "Resolution de problemes et esprit critique",
            "Preparation a la specialisation ingenieur",
          ],
        },
        {
          degree: "Baccalaureat - Section Mathematiques",
          institution: "Lycee Les Peres Blancs",
          location: "Tunisie",
          period: "2022",
          description:
            "Baccalaureat mention Tres Bien (moyenne 18.73/20) et classee 1ere au niveau regional Tunis 2.",
          highlights: [
            "Mention Tres Bien (18.73/20)",
            "1ere au niveau regional Tunis 2",
            "Excellent niveau analytique et mathematique",
          ],
        },
      ]
    : [
    {
      degree: "Engineering Cycle in Software Engineering",
      institution: "National Institute of Applied Science and Technology (INSAT)",
      location: "Tunisia",
      period: "Sep 2024 – Present",
      expectedGraduation: "2027",
      description:
        "Advanced software engineering program focusing on professional development and modern engineering practices. Building expertise in system design, software architecture, and industry-standard development methodologies.",
      highlights: [
        "Software Engineering Specialization",
        "Advanced System Design & Architecture",
        "Industry-Focused Curriculum",
      ],
    },
    {
      degree: "Preparatory Cycle in Mathematics, Physics, and Computer Science",
      institution: "National Institute of Applied Science and Technology (INSAT)",
      location: "Tunisia",
      period: "Sep 2022 – Jun 2024",
      description:
        "Comprehensive foundation program in mathematics, physics, and computer science preparing for advanced engineering studies. Developed strong analytical and problem-solving skills with emphasis on theoretical foundations.",
      highlights: [
        "Mathematics, Physics & Computer Science Foundation",
        "Problem-Solving & Critical Thinking",
        "Preparation for Engineering Specialization",
      ],
    },
    {
      degree: "Baccalaureate – Mathematics Section",
      institution: "Les Pères Blancs High School",
      location: "Tunisia",
      period: "2022",
      description:
        "Graduated with Highest Honors (average: 18.73/20) and ranked 1st in the Tunis 2 region. This achievement reflects strong analytical skills, rigorous mathematical training, and consistent academic excellence in a competitive environment.",
      highlights: [
        "Graduated with Highest Honors (18.73/20 average)",
        "Ranked 1st in Tunis 2 Region",
        "Strong Analytical and Mathematical Foundation",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <SectionGlowBackground />
      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {isFrench ? "Mon " : "My "}
            <span className="text-gradient">{isFrench ? "parcours" : "Education"}</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            {isFrench ? "Des bases solides pour innover et progresser" : "Building foundations for innovation and growth"}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Timeline */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20" />

          <div className="space-y-10 md:space-y-20">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 -top-2 md:-top-4 w-4 h-4 md:w-6 md:h-6 bg-primary/80 rounded-full border-2 md:border-4 border-background z-10 shadow-md" />

                  {/* Education Card */}
                  <div
                    className={`mt-4 md:mt-10 w-full pl-10 md:pl-0 md:w-[48%] ${
                      isLeft
                        ? "md:mr-auto md:pl-0 md:pr-10"
                        : "md:ml-auto md:pl-10 md:pr-0"
                    }`}
                  >
                    <Card className="card-gradient border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500">
                      <CardContent className="p-5 sm:p-6 md:p-8 space-y-4">
                        {/* Header */}
                        <div className="flex items-start gap-3 md:gap-4">
                          <div className="p-2.5 md:p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                              {edu.degree}
                            </h3>
                            <p className="text-base md:text-lg text-primary font-semibold mt-1">
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        {/* Details Row */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-muted-foreground pt-2">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary/60" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary/60" />
                            <span>{edu.location}</span>
                          </div>
                          {'expectedGraduation' in edu && (
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                                {isFrench ? "Prevu : " : "Expected: "}{edu.expectedGraduation}
                              </span>
                            </div>
                          )}
                          {'gpa' in edu && (
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                                GPA: {edu.gpa}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed pt-2">
                          {edu.description}
                        </p>

                        {/* Highlights */}
                        <div className="pt-4 space-y-2">
                          {edu.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 text-sm"
                            >
                              <span className="w-2 h-2 rounded-full bg-primary/60" />
                              <span className="text-muted-foreground">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
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

export default Education;
