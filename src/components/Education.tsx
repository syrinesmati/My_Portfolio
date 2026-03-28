import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

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
  const education: EducationItem[] = [
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
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Building foundations for innovation and growth
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20" />

          <div className="space-y-20">
            {education.map((edu, index) => {
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

                  {/* Education Card */}
                  <div
                    className={`mt-10 w-full md:w-[48%] ${
                      isLeft
                        ? "md:mr-auto md:pl-0 md:pr-10"
                        : "md:ml-auto md:pl-10 md:pr-0"
                    }`}
                  >
                    <Card className="card-gradient border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-500">
                      <CardContent className="p-8 space-y-4">
                        {/* Header */}
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <GraduationCap className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-foreground">
                              {edu.degree}
                            </h3>
                            <p className="text-lg text-primary font-semibold mt-1">
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        {/* Details Row */}
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground pt-2">
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
                                Expected: {edu.expectedGraduation}
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
