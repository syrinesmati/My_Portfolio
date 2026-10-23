import { useId } from "react";
import { ArrowDownRight } from "lucide-react";

const RotatingBadge = ({ text, size = 112, className = "" }: { text: string; size?: number; className?: string }) => {
  const id = useId();
  const arrowSize = Math.round(size * 0.36);

  return (
    <div className={`relative shrink-0 ${className}`} style={{ height: size, width: size }}>
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
        <defs>
          <path id={id} d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-muted-foreground text-[8px] font-semibold uppercase tracking-[0.2em]">
          <textPath href={`#${id}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="flex items-center justify-center rounded-full bg-primary text-primary-foreground"
          style={{ height: arrowSize, width: arrowSize }}
        >
          <ArrowDownRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default RotatingBadge;
