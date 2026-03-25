import { Github, Linkedin } from "lucide-react";

const SocialSidebar = () => {
  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
        <a
          href="https://github.com/syrinesmati"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:glow"
        >
          <Github className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/syrine-smati-a613702b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:glow"
        >
          <Linkedin className="h-6 w-6" />
        </a>
        <div className="w-px h-24 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
      </div>

      {/* Right Sidebar - Email */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-6">
        <div className="w-px h-24 bg-gradient-to-t from-primary/50 to-transparent mb-4" />
        <a
          href="mailto:syrinesmati28@gmail.com"
          className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 tracking-wider"
          style={{ writingMode: "vertical-rl" }}
        >
          syrinesmati28@gmail.com
        </a>
      </div>
    </>
  );
};

export default SocialSidebar;
