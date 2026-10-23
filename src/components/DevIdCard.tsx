import { Code2 } from "lucide-react";
import profilePhoto from "@/assets/profile/profile-photo.jpg";
import RotatingBadge from "@/components/RotatingBadge";
import { useLanguage } from "@/contexts/LanguageContext";

const barcodeWidths = [2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 2];

const Barcode = () => (
  <div className="flex items-end gap-[2px] h-8" aria-hidden="true">
    {barcodeWidths.map((w, i) => (
      <span
        key={i}
        className="bg-foreground/70"
        style={{ width: `${w}px`, height: i % 5 === 0 ? "100%" : "70%" }}
      />
    ))}
  </div>
);

const TerminalLine = ({ command, output }: { command: string; output: string }) => (
  <div className="mb-3 last:mb-0">
    <div>
      <span className="text-warm">$</span>{" "}
      <span className="text-foreground/90">{command}</span>
    </div>
    <div className="text-muted-foreground pl-3.5">{output}</div>
  </div>
);

const DevIdCard = () => {
  const { isFrench } = useLanguage();

  return (
    <div className="group mx-auto w-full max-w-[300px] [perspective:1200px]">
      <div className="relative transition-transform duration-500 ease-out rotate-[-3deg] group-hover:rotate-0">
        {/* Lanyard hole */}
        <div className="absolute left-1/2 -top-3 -translate-x-1/2 z-20 h-6 w-6 rounded-full bg-background border-4 border-card shadow-sm" />

        <div className="relative h-[430px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] flex flex-col bg-card shadow-2xl ring-1 ring-black/5">
            <div className="bg-warm px-5 pt-5 pb-3 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                {isFrench ? "Carte Ingénieure IA" : "AI Engineer ID"}
              </span>
              <Code2 className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 relative">
              <img
                src={profilePhoto}
                alt="Syrine Smati"
                loading="lazy"
                decoding="async"
                className="w-28 h-28 rounded-full object-cover ring-4 ring-background shadow-lg -mt-2"
              />
              <p className="font-accent-italic text-3xl text-center">Syrine.</p>
              <div className="h-[3px] w-10 rounded-full bg-warm" />
              <p className="eyebrow text-center">
                {isFrench ? "Ingénieure logiciel & IA" : "AI & Software Engineer"}
              </p>
              <RotatingBadge
                text={isFrench ? "disponible · disponible · " : "open to work · open to work · "}
                size={76}
                className="absolute -bottom-2 -right-2"
              />
            </div>
            <div className="px-6 pb-5 flex items-center justify-between">
              <Barcode />
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                {isFrench ? "EXPLORER" : "EXPLORE"}
              </span>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col bg-card shadow-2xl ring-1 ring-black/5">
            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-secondary border-b border-border shrink-0">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="flex-1 text-center text-[10px] text-muted-foreground font-mono pr-6">syrine — zsh</span>
            </div>

            {/* Terminal body */}
            <div className="flex-1 p-5 font-mono text-[13px] leading-relaxed overflow-hidden">
              <TerminalLine command="whoami" output="syrine.smati" />
              <TerminalLine command="focus" output="AI / ML Engineering" />
              <TerminalLine command="building" output="intelligent_systems" />
              <TerminalLine command="currently" output="learning & shipping" />
              <div className="flex items-center gap-2 mt-3">
                <span className="text-warm">$</span>
                <span className="inline-block w-[7px] h-[15px] bg-foreground/70 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevIdCard;
