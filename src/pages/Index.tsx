import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WorkedWith from "@/components/WorkedWith";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      scroller.scrollTo(scrollTo, { smooth: true, duration: 500, offset: -80 });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <WorkedWith />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
