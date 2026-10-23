import techtrollLogo from "@/assets/experience/techtroll-logo.png";
import ossusLogo from "@/assets/experience/ossus-logo.png";
import welyneLogo from "@/assets/experience/welyne-logo.png";
import weefizLogo from "@/assets/experience/logo-weefiz.png";
import yonnovLogo from "@/assets/experience/yonnov-logo-cropped.png";
import insatLogo from "@/assets/experience/insat-logo.png";
import jeiLogo from "@/assets/volunteering/jei-logo.png";
import aiesecLogo from "@/assets/experience/aiesec-logo.png";
import { useLanguage } from "@/contexts/LanguageContext";

const logos = [
  { name: "TechTroll", image: techtrollLogo },
  { name: "Ossus.ai", image: ossusLogo },
  { name: "Welyne", image: welyneLogo, sizeClass: "h-10 sm:h-12" },
  { name: "WeeFizz", image: weefizLogo },
  { name: "Yonnov'IA", image: yonnovLogo, sizeClass: "h-7 sm:h-9" },
  { name: "INSAT", image: insatLogo, sizeClass: "h-10 sm:h-12" },
  { name: "Junior Entreprise INSAT", image: jeiLogo, sizeClass: "h-10 sm:h-12" },
  { name: "AIESEC", image: aiesecLogo, invertOnDark: true, sizeClass: "h-20 sm:h-20" },
];

const LogoRow = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div className="flex items-center gap-x-16 sm:gap-x-24 pr-16 sm:pr-24" aria-hidden={ariaHidden}>
    {logos.map((logo) => (
      <img
        key={logo.name}
        src={logo.image}
        alt={logo.name}
        loading="lazy"
        decoding="async"
        className={`${logo.sizeClass ?? "h-7 sm:h-8"} w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 shrink-0 ${
          logo.invertOnDark ? "dark:invert" : ""
        }`}
      />
    ))}
  </div>
);

const WorkedWith = () => {
  const { isFrench } = useLanguage();

  return (
    <section className="py-10 border-y border-border/60 overflow-hidden">
      <p className="eyebrow text-center mb-6">
        {isFrench ? "Entreprises & organisations" : "Companies & organizations I've worked with"}
      </p>
      <div className="group marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow ariaHidden />
        </div>
      </div>
    </section>
  );
};

export default WorkedWith;
