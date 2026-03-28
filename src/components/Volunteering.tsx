import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import jei2025Image from "@/assets/jei2025.jpg";
import ocvpImage from "@/assets/ocvp.jpg";
import jei2024Image from "@/assets/jei2024.jpg";

const Volunteering = () => {
  const volunteering = [
      {
      image: jei2025Image,
      title: "Project Department Member",
      organization: "Junior Enterprise INSAT",
      period: "Sept 2025 – Ongoing",
      description:
        "Contributed to end-to-end applications (frontend and backend) and developed strong collaboration skills. Actively involved in delivering high-quality solutions for clients.",
    },
    {
      image: ocvpImage,
      title: "President of Organizing Committee",
      organization: "Forum INSAT Entreprise - Hackathon",
      period: "November 2025",
      description:
        "Led the organization and coordination of a two-week hackathon in partnership with Lloyd, guiding teams through the development of AI-powered road safety and prevention projects.",
    },
  
    {
      image: jei2024Image,
      title: "UI/UX Designer",
      organization: "Junior Entreprise Insat",
      period: "September 2024 - June 2025",
      description:
        "Supervised and designed interfaces for multiple innovative projects, ensuring quality UX and smooth dev handoffs.",
    },
  ];

  return (
    <section id="volunteering" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Volunteering</span> & Leadership
          </h2>
          <p className="text-xl text-muted-foreground">
            Making an impact through community involvement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {volunteering.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border border-primary/20 shadow-lg hover:shadow-xl hover:border-turquoise/40 transition-all duration-500 h-full overflow-hidden group">
                {/* Large Image Area */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={`${item.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  
                  {/* Period Badge Overlay */}
                  <span className="absolute top-3 right-3 text-xs text-accent font-medium bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-accent/20">
                    {item.period}
                  </span>
                </div>

                <CardContent className="p-6 space-y-3">
                  {/* Title and Organization */}
                  <div>
                    <h3 className="text-lg font-semibold leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-turquoise font-medium">
                      {item.organization}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
